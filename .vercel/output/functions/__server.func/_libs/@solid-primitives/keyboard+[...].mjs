import { createRoot, getOwner, onCleanup } from "../neodrag__solid+solid-js.mjs";
import "./event-listener+[...].mjs";
//#region node_modules/@solid-primitives/rootless/dist/index.js
/**
* Creates a reactive root that is shared across every instance it was used in. Singleton root gets created when the returned function gets first called, and disposed when last reactive context listening to it gets disposed. Only to be recreated again when a new listener appears.
* @param factory function where you initialize your reactive primitives
* @returns function, registering reactive owner as one of the listeners, returns the value {@link factory} returned.
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/rootless#createSingletonRoot
* @example
* const useState = createSingletonRoot(() => {
*    return createMemo(() => {...})
* });
*
* // later in a component:
* const state = useState();
* state()
*
* // in another component
* // previously created primitive would get reused
* const state = useState();
* ...
*/
function createSingletonRoot(factory, detachedOwner = getOwner()) {
	let listeners = 0, value, disposeRoot;
	return () => {
		listeners++;
		onCleanup(() => {
			listeners--;
			queueMicrotask(() => {
				if (!listeners && disposeRoot) {
					disposeRoot();
					disposeRoot = value = void 0;
				}
			});
		});
		if (!disposeRoot) createRoot((dispose) => value = factory(disposeRoot = dispose), detachedOwner);
		return value;
	};
}
/**
* Provides a signal with the list of currently held keys, ordered from least recent to most recent.
*
* This is a [singleton root primitive](https://github.com/solidjs-community/solid-primitives/tree/main/packages/rootless#createSingletonRoot). *(signals and event-listeners are reused across dependents)*
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/keyboard#useKeyDownList
*
* @returns
* Returns a signal of a list of keys
* ```ts
* Accessor<string[]>
* ```
*
* @example
* ```ts
* const keys = useKeyDownList();
* createEffect(() => {
*    console.log(keys()) // => ["ALT", "CONTROL", "Q", "A"]
* })
* ```
*/
var useKeyDownList = /*#__PURE__*/ createSingletonRoot(() => {
	{
		const keys = () => [];
		keys[0] = keys;
		keys[1] = { event: () => null };
		keys[Symbol.iterator] = function* () {
			yield keys[0];
			yield keys[1];
		};
		return keys;
	}
});
/**
* Creates a keyboard shotcut observer. The provided {@link callback} will be called when the specified {@link keys} are pressed.
*
* @see https://github.com/solidjs-community/solid-primitives/tree/main/packages/keyboard#createShortcut
*
* @param keys The sequence of keys to watch for.
* @param callback The callback to call when the keys are pressed.
* @options The options for the shortcut.
* - `preventDefault` — Controlls in the keydown event should have it's default action prevented. Enabled by default.
* - `requireReset` — If `true`, the shortcut will only be triggered once until all of the keys stop being pressed. Disabled by default.
*
* @example
* ```ts
* createShortcut(["CONTROL", "SHIFT", "C"], () => {
*    console.log("Ctrl+Shift+C was pressed");
* });
* ```
*/
function createShortcut(keys, callback, options = {}) {}
//#endregion
export { createShortcut, useKeyDownList };
