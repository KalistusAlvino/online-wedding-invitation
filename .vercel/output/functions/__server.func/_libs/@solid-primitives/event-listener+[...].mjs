import { createMemo, getOwner, onCleanup, sharedConfig } from "../neodrag__solid+solid-js.mjs";
//#region node_modules/solid-js/node_modules/seroval/dist/esm/production/index.mjs
var L = ((i) => (i[i.AggregateError = 1] = "AggregateError", i[i.ArrowFunction = 2] = "ArrowFunction", i[i.ErrorPrototypeStack = 4] = "ErrorPrototypeStack", i[i.ObjectAssign = 8] = "ObjectAssign", i[i.BigIntTypedArray = 16] = "BigIntTypedArray", i[i.RegExp = 32] = "RegExp", i))(L || {});
var o$1 = void 0;
Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY;
function c$1(e, r, t, n, a, s, i, u, l, g, S, d) {
	return {
		t: e,
		i: r,
		s: t,
		c: n,
		m: a,
		p: s,
		e: i,
		a: u,
		f: l,
		b: g,
		o: S,
		l: d
	};
}
function B$1(e) {
	return c$1(2, o$1, e, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1, o$1);
}
B$1(2);
B$1(3);
B$1(1);
B$1(0);
B$1(4);
B$1(5);
B$1(6);
B$1(7);
var U = "__SEROVAL_REFS__";
var j$1 = /* @__PURE__ */ new Map();
typeof globalThis != "undefined" ? Object.defineProperty(globalThis, U, {
	value: j$1,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof window != "undefined" ? Object.defineProperty(window, U, {
	value: j$1,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof self != "undefined" ? Object.defineProperty(self, U, {
	value: j$1,
	configurable: !0,
	writable: !1,
	enumerable: !1
}) : typeof global != "undefined" && Object.defineProperty(global, U, {
	value: j$1,
	configurable: !0,
	writable: !1,
	enumerable: !1
});
var { toString: bs } = Object.prototype;
var ee$1 = () => {
	let e = {
		p: 0,
		s: 0,
		f: 0
	};
	return e.p = new Promise((r, t) => {
		e.s = r, e.f = t;
	}), e;
};
var In = (e, r) => {
	e.s(r), e.p.s = 1, e.p.v = r;
};
var Rn = (e, r) => {
	e.f(r), e.p.s = 2, e.p.v = r;
};
ee$1.toString();
In.toString();
Rn.toString();
var xr = () => {
	let e = [], r = [], t = !0, n = !1, a = 0, s = (l, g, S) => {
		for (S = 0; S < a; S++) r[S] && r[S][g](l);
	}, i = (l, g, S, d) => {
		for (g = 0, S = e.length; g < S; g++) d = e[g], !t && g === S - 1 ? l[n ? "return" : "throw"](d) : l.next(d);
	}, u = (l, g) => (t && (g = a++, r[g] = l), i(l), () => {
		t && (r[g] = r[a], r[a--] = void 0);
	});
	return {
		__SEROVAL_STREAM__: !0,
		on: (l) => u(l),
		next: (l) => {
			t && (e.push(l), s(l, "next"));
		},
		throw: (l) => {
			t && (e.push(l), s(l, "throw"), t = !1, n = !1, r.length = 0);
		},
		return: (l) => {
			t && (e.push(l), s(l, "return"), t = !1, n = !0, r.length = 0);
		}
	};
};
xr.toString();
var Tr = (e) => (r) => () => {
	let t = 0, n = {
		[e]: () => n,
		next: () => {
			if (t > r.d) return {
				done: !0,
				value: void 0
			};
			let a = t++, s = r.v[a];
			if (a === r.t) throw s;
			return {
				done: a === r.d,
				value: s
			};
		}
	};
	return n;
};
Tr.toString();
var Or = (e, r) => (t) => () => {
	let n = 0, a = -1, s = !1, i = [], u = [], l = (S = 0, d = u.length) => {
		for (; S < d; S++) u[S].s({
			done: !0,
			value: void 0
		});
	};
	t.on({
		next: (S) => {
			let d = u.shift();
			d && d.s({
				done: !1,
				value: S
			}), i.push(S);
		},
		throw: (S) => {
			let d = u.shift();
			d && d.f(S), l(), a = i.length, s = !0, i.push(S);
		},
		return: (S) => {
			let d = u.shift();
			d && d.s({
				done: !0,
				value: S
			}), l(), a = i.length, i.push(S);
		}
	});
	let g = {
		[e]: () => g,
		next: () => {
			if (a === -1) {
				let G = n++;
				if (G >= i.length) {
					let tt = r();
					return u.push(tt), tt.p;
				}
				return {
					done: !1,
					value: i[G]
				};
			}
			if (n > a) return {
				done: !0,
				value: void 0
			};
			let S = n++, d = i[S];
			if (S !== a) return {
				done: !1,
				value: d
			};
			if (s) throw d;
			return {
				done: !0,
				value: d
			};
		}
	};
	return g;
};
Or.toString();
var wr = (e) => {
	let r = atob(e), t = r.length, n = new Uint8Array(t);
	for (let a = 0; a < t; a++) n[a] = r.charCodeAt(a);
	return n.buffer;
};
wr.toString();
var oe$1 = ((t) => (t[t.Vanilla = 1] = "Vanilla", t[t.Cross = 2] = "Cross", t))(oe$1 || {});
var Ro = () => T;
var Po = Ro.toString();
/=>/.test(Po);
//#endregion
//#region node_modules/solid-js/web/dist/server.js
var booleans = [
	"allowfullscreen",
	"async",
	"alpha",
	"autofocus",
	"autoplay",
	"checked",
	"controls",
	"default",
	"disabled",
	"formnovalidate",
	"hidden",
	"indeterminate",
	"inert",
	"ismap",
	"loop",
	"multiple",
	"muted",
	"nomodule",
	"novalidate",
	"open",
	"playsinline",
	"readonly",
	"required",
	"reversed",
	"seamless",
	"selected",
	"adauctionheaders",
	"browsingtopics",
	"credentialless",
	"defaultchecked",
	"defaultmuted",
	"defaultselected",
	"defer",
	"disablepictureinpicture",
	"disableremoteplayback",
	"preservespitch",
	"shadowrootclonable",
	"shadowrootcustomelementregistry",
	"shadowrootdelegatesfocus",
	"shadowrootserializable",
	"sharedstoragewritable"
];
var BooleanAttributes = /*#__PURE__*/ new Set(booleans);
[...booleans];
var ChildProperties = /*#__PURE__*/ new Set([
	"innerHTML",
	"textContent",
	"innerText",
	"children"
]);
var Aliases = /*#__PURE__*/ Object.assign(Object.create(null), {
	className: "class",
	htmlFor: "for"
});
var memo = (fn) => createMemo(() => fn());
L.AggregateError | L.BigIntTypedArray;
var VOID_ELEMENTS = /^(?:area|base|br|col|embed|hr|img|input|keygen|link|menuitem|meta|param|source|track|wbr)$/i;
function ssr(t, ...nodes) {
	if (nodes.length) {
		let result = "";
		for (let i = 0; i < nodes.length; i++) {
			result += t[i];
			const node = nodes[i];
			if (node !== void 0) result += resolveSSRNode(node);
		}
		t = result + t[nodes.length];
	}
	return { t };
}
function ssrClassList(value) {
	if (!value) return "";
	let classKeys = Object.keys(value), result = "";
	for (let i = 0, len = classKeys.length; i < len; i++) {
		const key = classKeys[i], classValue = !!value[key];
		if (!key || key === "undefined" || !classValue) continue;
		i && (result += " ");
		result += escape(key);
	}
	return result;
}
function ssrStyle(value) {
	if (!value) return "";
	if (typeof value === "string") return escape(value, true);
	let result = "";
	const k = Object.keys(value);
	for (let i = 0; i < k.length; i++) {
		const s = k[i];
		const v = value[s];
		if (v != void 0) {
			if (i) result += ";";
			const r = escape(v, true);
			if (r != void 0 && r !== "undefined") result += `${s}:${r}`;
		}
	}
	return result;
}
function ssrStyleProperty(name, value) {
	return value != null ? name + value : "";
}
function ssrElement(tag, props, children, needsId) {
	if (props == null) props = {};
	else if (typeof props === "function") props = props();
	const skipChildren = VOID_ELEMENTS.test(tag);
	const keys = Object.keys(props);
	let result = `<${tag}${needsId ? ssrHydrationKey() : ""} `;
	let classResolved;
	for (let i = 0; i < keys.length; i++) {
		const prop = keys[i];
		if (ChildProperties.has(prop)) {
			if (children === void 0 && !skipChildren) children = tag === "script" || tag === "style" || prop === "innerHTML" ? props[prop] : escape(props[prop]);
			continue;
		}
		const value = props[prop];
		if (prop === "style") result += `style="${ssrStyle(value)}"`;
		else if (prop === "class" || prop === "className" || prop === "classList") {
			if (classResolved) continue;
			let n;
			result += `class="${escape(((n = props.class) ? n + " " : "") + ((n = props.className) ? n + " " : ""), true) + ssrClassList(props.classList)}"`;
			classResolved = true;
		} else if (BooleanAttributes.has(prop)) {
			if (value) result += prop;
			else continue;
		} else if (value == void 0 || prop === "ref" || prop.slice(0, 2) === "on" || prop.slice(0, 5) === "prop:") continue;
		else if (prop.slice(0, 5) === "bool:") {
			if (!value) continue;
			result += escape(prop.slice(5));
		} else if (prop.slice(0, 5) === "attr:") result += `${escape(prop.slice(5))}="${escape(value, true)}"`;
		else result += `${Aliases[prop] || escape(prop)}="${escape(value, true)}"`;
		if (i !== keys.length - 1) result += " ";
	}
	if (skipChildren) return { t: result + "/>" };
	if (typeof children === "function") children = children();
	return { t: result + `>${resolveSSRNode(children, true)}</${tag}>` };
}
function ssrAttribute(key, value, isBoolean) {
	return isBoolean ? value ? " " + key : "" : value != null ? ` ${key}="${value}"` : "";
}
function ssrHydrationKey() {
	const hk = getHydrationKey();
	return hk ? ` data-hk="${hk}"` : "";
}
function escape(s, attr) {
	const t = typeof s;
	if (t !== "string") {
		if (!attr && t === "function") return escape(s());
		if (!attr && Array.isArray(s)) {
			s = s.slice();
			for (let i = 0; i < s.length; i++) s[i] = escape(s[i]);
			return s;
		}
		if (attr) {
			if (t === "boolean") return String(s);
			if (s == null || t === "number") return s;
			return escape(String(s), attr);
		}
		return s;
	}
	const delim = attr ? "\"" : "<";
	const escDelim = attr ? "&quot;" : "&lt;";
	let iDelim = s.indexOf(delim);
	let iAmp = s.indexOf("&");
	if (iDelim < 0 && iAmp < 0) return s;
	let left = 0, out = "";
	while (iDelim >= 0 && iAmp >= 0) if (iDelim < iAmp) {
		if (left < iDelim) out += s.substring(left, iDelim);
		out += escDelim;
		left = iDelim + 1;
		iDelim = s.indexOf(delim, left);
	} else {
		if (left < iAmp) out += s.substring(left, iAmp);
		out += "&amp;";
		left = iAmp + 1;
		iAmp = s.indexOf("&", left);
	}
	if (iDelim >= 0) do {
		if (left < iDelim) out += s.substring(left, iDelim);
		out += escDelim;
		left = iDelim + 1;
		iDelim = s.indexOf(delim, left);
	} while (iDelim >= 0);
	else while (iAmp >= 0) {
		if (left < iAmp) out += s.substring(left, iAmp);
		out += "&amp;";
		left = iAmp + 1;
		iAmp = s.indexOf("&", left);
	}
	return left < s.length ? out + s.substring(left) : out;
}
function resolveSSRNode(node, top) {
	const t = typeof node;
	if (t === "string") return node;
	if (node == null || t === "boolean") return "";
	if (Array.isArray(node)) {
		let prev = {};
		let mapped = "";
		for (let i = 0, len = node.length; i < len; i++) {
			if (!top && typeof prev !== "object" && typeof node[i] !== "object") mapped += `<!--!$-->`;
			mapped += resolveSSRNode(prev = node[i]);
		}
		return mapped;
	}
	if (t === "object") return node.t;
	if (t === "function") return resolveSSRNode(node());
	return String(node);
}
function getHydrationKey() {
	const hydrate = sharedConfig.context;
	return hydrate && !hydrate.noHydrate && sharedConfig.getNextContextId();
}
function notSup() {
	throw new Error("Client-only API called on the server side. Run client-only code in onMount, or conditionally run client-only component with <Show>.");
}
function Portal(props) {
	return "";
}
var isDev = false;
/** Check if value is typeof "object" or "function" */
function isObject(value) {
	return value !== null && (typeof value === "object" || typeof value === "function");
}
/**
* Check shallow array equality
*/
var arrayEquals = (a, b) => a === b || a.length === b.length && a.every((e, i) => e === b[i]);
/** If value is a function – call it with a given arguments – otherwise get the value as is */
function accessWith(valueOrFn, ...args) {
	return typeof valueOrFn === "function" ? valueOrFn(...args) : valueOrFn;
}
/**
* Solid's `onCleanup` that doesn't warn in development if used outside of a component.
*/
var tryOnCleanup = isDev ? (fn) => getOwner() ? onCleanup(fn) : fn : onCleanup;
//#endregion
//#region node_modules/@solid-primitives/event-listener/dist/eventListener.js
function makeEventListener(target, type, handler, options) {
	target.addEventListener(type, handler, options);
	return tryOnCleanup(target.removeEventListener.bind(target, type, handler, options));
}
function createEventListener(targets, type, handler, options) {}
//#endregion
export { Portal, accessWith, arrayEquals, createEventListener, escape, isObject, makeEventListener, memo, notSup, ssr, ssrAttribute, ssrElement, ssrStyle, ssrStyleProperty };
