import { SORTABLE_KEY_ATTR, SortableList } from "./neodrag__core.mjs";
//#region node_modules/solid-js/dist/server.js
var ERROR = Symbol("error");
function castError(err) {
	if (err instanceof Error) return err;
	return new Error(typeof err === "string" ? err : "Unknown error", { cause: err });
}
function handleError(err, owner = Owner) {
	const fns = owner && owner.context && owner.context[ERROR];
	const error = castError(err);
	if (!fns) throw error;
	try {
		for (const f of fns) f(error);
	} catch (e) {
		handleError(e, owner && owner.owner || null);
	}
}
var UNOWNED = {
	context: null,
	owner: null,
	owned: null,
	cleanups: null
};
var Owner = null;
function createOwner() {
	const o = {
		owner: Owner,
		context: Owner ? Owner.context : null,
		owned: null,
		cleanups: null
	};
	if (Owner) {
		if (!Owner.owned) Owner.owned = [o];
		else Owner.owned.push(o);
	}
	return o;
}
function createRoot(fn, detachedOwner) {
	const owner = Owner, current = detachedOwner === void 0 ? owner : detachedOwner, root = fn.length === 0 ? UNOWNED : {
		context: current ? current.context : null,
		owner: current,
		owned: null,
		cleanups: null
	};
	Owner = root;
	let result;
	try {
		result = fn(fn.length === 0 ? () => {} : () => cleanNode(root));
	} catch (err) {
		handleError(err);
	} finally {
		Owner = owner;
	}
	return result;
}
function createSignal(value, options) {
	return [() => value, (v) => {
		return value = typeof v === "function" ? v(value) : v;
	}];
}
function createComputed(fn, value) {
	Owner = createOwner();
	try {
		fn(value);
	} catch (err) {
		handleError(err);
	} finally {
		Owner = Owner.owner;
	}
}
var createRenderEffect = createComputed;
function createEffect(fn, value) {}
function createMemo(fn, value) {
	Owner = createOwner();
	let v;
	try {
		v = fn(value);
	} catch (err) {
		handleError(err);
	} finally {
		Owner = Owner.owner;
	}
	return () => v;
}
function batch(fn) {
	return fn();
}
var untrack = batch;
function on(deps, fn, options = {}) {
	const isArray = Array.isArray(deps);
	const defer = options.defer;
	return () => {
		if (defer) return void 0;
		let value;
		if (isArray) {
			value = [];
			for (let i = 0; i < deps.length; i++) value.push(deps[i]());
		} else value = deps();
		return fn(value);
	};
}
function onMount(fn) {}
function onCleanup(fn) {
	if (Owner) {
		if (!Owner.cleanups) Owner.cleanups = [fn];
		else Owner.cleanups.push(fn);
	}
	return fn;
}
function cleanNode(node) {
	if (node.owned) {
		for (let i = 0; i < node.owned.length; i++) cleanNode(node.owned[i]);
		node.owned = null;
	}
	if (node.cleanups) {
		for (let i = 0; i < node.cleanups.length; i++) node.cleanups[i]();
		node.cleanups = null;
	}
}
function getListener() {
	return null;
}
function createContext(defaultValue) {
	const id = Symbol("context");
	return {
		id,
		Provider: createProvider(id),
		defaultValue
	};
}
function useContext(context) {
	return Owner && Owner.context && Owner.context[context.id] !== void 0 ? Owner.context[context.id] : context.defaultValue;
}
function getOwner() {
	return Owner;
}
function children(fn) {
	const memo = createMemo(() => resolveChildren(fn()));
	memo.toArray = () => {
		const c = memo();
		return Array.isArray(c) ? c : c != null ? [c] : [];
	};
	return memo;
}
function resolveChildren(children) {
	if (typeof children === "function" && !children.length) return resolveChildren(children());
	if (Array.isArray(children)) {
		const results = [];
		for (let i = 0; i < children.length; i++) {
			const result = resolveChildren(children[i]);
			if (Array.isArray(result)) {
				if (result.length < 32768) results.push.apply(results, result);
				else for (let j = 0; j < result.length; j++) results.push(result[j]);
			} else results.push(result);
		}
		return results;
	}
	return children;
}
function createProvider(id) {
	return function provider(props) {
		return createMemo(() => {
			Owner.context = {
				...Owner.context,
				[id]: props.value
			};
			return children(() => props.children);
		});
	};
}
var sharedConfig = {
	context: void 0,
	getContextId() {
		if (!this.context) throw new Error(`getContextId cannot be used under non-hydrating context`);
		return getContextId(this.context.count);
	},
	getNextContextId() {
		if (!this.context) throw new Error(`getNextContextId cannot be used under non-hydrating context`);
		return getContextId(this.context.count++);
	}
};
function getContextId(count) {
	const num = String(count), len = num.length - 1;
	return sharedConfig.context.id + (len ? String.fromCharCode(96 + len) : "") + num;
}
function setHydrateContext(context) {
	sharedConfig.context = context;
}
function nextHydrateContext() {
	return sharedConfig.context ? {
		...sharedConfig.context,
		id: sharedConfig.getNextContextId(),
		count: 0
	} : void 0;
}
function createUniqueId() {
	return sharedConfig.getNextContextId();
}
function createComponent(Comp, props) {
	if (sharedConfig.context && !sharedConfig.context.noHydrate) {
		const c = sharedConfig.context;
		setHydrateContext(nextHydrateContext());
		const r = Comp(props || {});
		setHydrateContext(c);
		return r;
	}
	return Comp(props || {});
}
function mergeProps(...sources) {
	const target = {};
	for (let i = 0; i < sources.length; i++) {
		let source = sources[i];
		if (typeof source === "function") source = source();
		if (source) {
			const descriptors = Object.getOwnPropertyDescriptors(source);
			for (const key in descriptors) {
				if (key === "__proto__" || key === "constructor" || Object.prototype.hasOwnProperty.call(target, key)) continue;
				Object.defineProperty(target, key, {
					enumerable: true,
					get() {
						for (let i = sources.length - 1; i >= 0; i--) {
							let v, s = sources[i];
							if (typeof s === "function") s = s();
							v = (s || {})[key];
							if (v !== void 0) return v;
						}
					}
				});
			}
		}
	}
	return target;
}
function simpleMap(props, wrap) {
	const list = props.each || [], len = list.length, fn = props.children;
	if (len) {
		let mapped = Array(len);
		for (let i = 0; i < len; i++) mapped[i] = wrap(fn, list[i], i);
		return mapped;
	}
	return props.fallback;
}
function For(props) {
	return simpleMap(props, (fn, item, i) => fn(item, () => i));
}
function Index(props) {
	return simpleMap(props, (fn, item, i) => fn(() => item, i));
}
function Show(props) {
	let c;
	return props.when ? typeof (c = props.children) === "function" && c.length > 0 ? c(props.keyed ? props.when : () => props.when) : c : props.fallback || "";
}
var SuspenseContext = createContext();
function lazy(fn) {
	let p;
	let load = (id) => {
		if (!p) {
			const cur = p = fn();
			cur.then((mod) => cur.resolved = mod.default, (err) => {
				cur.error = castError(err);
				if (p === cur) p = void 0;
			});
			if (id) sharedConfig.context.lazy[id] = cur;
		}
		return p;
	};
	const contexts = /* @__PURE__ */ new Set();
	const wrap = (props) => {
		const id = sharedConfig.context.id;
		const current = sharedConfig.context.lazy[id] || load(id);
		if (current.resolved) return current.resolved(props);
		if (current.error) throw current.error;
		const ctx = useContext(SuspenseContext);
		const track = {
			_loading: true,
			error: void 0
		};
		if (ctx) {
			ctx.resources.set(id, track);
			contexts.add(ctx);
		}
		if (sharedConfig.context.async) sharedConfig.context.block(current.then(() => {
			track._loading = false;
			notifySuspense(contexts);
		}, (err) => {
			track._loading = false;
			track.error = castError(err);
			notifySuspense(contexts);
		}));
		return "";
	};
	wrap.preload = load;
	return wrap;
}
function suspenseComplete(c) {
	for (const r of c.resources.values()) if (r._loading) return false;
	return true;
}
function notifySuspense(contexts) {
	for (const c of contexts) {
		if (!suspenseComplete(c)) continue;
		c.completed();
		contexts.delete(c);
	}
}
//#endregion
//#region node_modules/@neodrag/solid/dist/_room-context-Cg1LI93i.js
/**
* The room a `<RoomProvider>` supplies, or `undefined` when none is mounted (collab is opt-in, so the
* capability primitives just skip their join). This module holds only a context handle + type-only
* `Room` references — importing it never pulls the heavy `Room` orchestrator into the bundle (that
* lives behind `@neodrag/solid/collab`), so `createSortable` without collab stays lean.
*/
var RoomContext = createContext();
/**
* Raw (non-reactive) access to the ambient room — capability primitives use this to `add` their
* instance. For reactive presence UI (`peers`/`presences`) use `useRoom()` from `@neodrag/solid/collab`.
*/
function useRoomContext() {
	return useContext(RoomContext);
}
/**
* Resolves the room from the `room` option or the ambient `<RoomProvider>`, and returns `join`/`leave`
* to call from the `ref` setter, co-located with the instance create + its `onCleanup`. `leave` is the
* per-target disposer (idempotent).
*/
function useRoomBinding(option_room) {
	const room = option_room ?? useRoomContext();
	let off = null;
	const join = (instance, id) => {
		off = room?.add(instance, id) ?? null;
	};
	const leave = () => {
		off?.();
		off = null;
	};
	return {
		join,
		leave
	};
}
//#endregion
//#region node_modules/@neodrag/solid/dist/sortable.js
/**
* Sortable primitive. Put `ref` on the container and spread `{...row(item.id)}` on each item instead
* of hand-writing `data-neodrag-sortable-key`. Pass `items` (and any option) as a getter to keep it live.
*
* **Collab:** pass an `id` (and a `room`, or mount a `<RoomProvider>`) and reorders sync live.
*/
function createSortable(options) {
	let inst = null;
	const { join, leave } = useRoomBinding(options.room);
	const ref = (node) => {
		leave();
		inst?.destroy();
		inst = new SortableList(node, { ...options });
		join(inst, options.id);
		onCleanup(() => {
			leave();
			inst?.destroy();
			inst = null;
		});
	};
	return {
		ref,
		row: (key) => ({ [SORTABLE_KEY_ATTR]: key })
	};
}
//#endregion
export { For, Index, Show, batch, createComponent, createContext, createEffect, createMemo, createRenderEffect, createRoot, createSignal, createSortable, createUniqueId, getListener, getOwner, lazy, mergeProps, on, onCleanup, onMount, sharedConfig, untrack, useContext };
