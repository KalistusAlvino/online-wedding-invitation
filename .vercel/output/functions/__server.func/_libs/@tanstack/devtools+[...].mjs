import { __exportAll } from "../../_runtime.mjs";
import { For, Index, Show, createComponent, createContext, createEffect, createMemo, createRenderEffect, createSignal, createSortable, createUniqueId, lazy, mergeProps, onCleanup, onMount, untrack, useContext } from "../neodrag__solid+solid-js.mjs";
import { Portal, createEventListener, escape, memo, notSup, ssr, ssrAttribute, ssrElement, ssrStyle, ssrStyleProperty } from "../@solid-primitives/event-listener+[...].mjs";
import { createShortcut, useKeyDownList } from "../@solid-primitives/keyboard+[...].mjs";
import { createElementSize } from "../@solid-primitives/resize-observer+[...].mjs";
//#region node_modules/@tanstack/devtools/dist/chunk/A767CXXU.js
var PLUGIN_CONTAINER_ID = "plugin-container";
var PLUGIN_TITLE_CONTAINER_ID = "plugin-title-container";
//#endregion
//#region node_modules/@tanstack/devtools/dist/chunk/GZI3DACQ.js
var keyboardModifiers = [
	"Alt",
	"Control",
	"Meta",
	"Shift",
	"CtrlOrMeta"
];
var initialState = {
	settings: {
		defaultOpen: false,
		hideUntilHover: false,
		position: "bottom-right",
		triggerMode: "floating",
		triggerCoords: void 0,
		panelLocation: "bottom",
		openHotkey: ["Control", "~"],
		inspectHotkey: [
			"Shift",
			"Alt",
			"CtrlOrMeta"
		],
		requireUrlFlag: false,
		urlFlag: "tanstack-devtools",
		theme: typeof window !== "undefined" && typeof window.matchMedia !== "undefined" && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light",
		sourceAction: "ide-warp",
		triggerHidden: false,
		customTrigger: void 0
	},
	state: {
		activeTab: "plugins",
		height: 400,
		layout: null,
		persistOpen: false,
		subheaderCollapsed: false
	}
};
//#endregion
//#region node_modules/@tanstack/devtools/dist/server.js
var TanStackDevtoolsCore = class {
	#config = { ...initialState.settings };
	#plugins = [];
	#state = "unmounted";
	#mountAbortController;
	#dispose;
	#eventBus;
	#eventBusConfig;
	#setPlugins;
	constructor(init) {
		this.#plugins = init.plugins || [];
		this.#eventBusConfig = init.eventBusConfig;
		this.#config = {
			...this.#config,
			...init.config
		};
	}
	mount(el) {
		if (typeof document === "undefined") return;
		if (this.#state === "mounted" || this.#state === "mounting") throw new Error("Devtools is already mounted");
		this.#state = "mounting";
		const { signal } = this.#mountAbortController = new AbortController();
		Promise.resolve().then(() => UZMC65JZ_exports).then(({ mountDevtools }) => {
			if (signal.aborted) return;
			const result = mountDevtools({
				el,
				plugins: this.#plugins,
				config: this.#config,
				eventBusConfig: this.#eventBusConfig,
				onSetPlugins: (setPlugins) => {
					this.#setPlugins = setPlugins;
				}
			});
			this.#dispose = result.dispose;
			this.#eventBus = result.eventBus;
			this.#state = "mounted";
		}).catch((err) => {
			this.#state = "unmounted";
		});
	}
	unmount() {
		if (this.#state === "unmounted") throw new Error("Devtools is not mounted");
		this.#mountAbortController?.abort();
		this.#eventBus?.stop();
		this.#dispose?.();
		this.#state = "unmounted";
	}
	setConfig(config) {
		this.#config = {
			...this.#config,
			...config
		};
		if (config.plugins) {
			this.#plugins = config.plugins;
			if (this.#state === "mounted" && this.#setPlugins) this.#setPlugins(config.plugins);
		}
	}
};
//#endregion
//#region node_modules/solid-js/store/dist/server.js
function isWrappable(obj) {
	return obj != null && typeof obj === "object" && (Object.getPrototypeOf(obj) === Object.prototype || Array.isArray(obj));
}
function setProperty(state, property, value, force) {
	if (property === "__proto__") return;
	if (!force && state[property] === value) return;
	if (value === void 0) delete state[property];
	else state[property] = value;
}
function mergeStoreNode(state, value, force) {
	const keys = Object.keys(value);
	for (let i = 0; i < keys.length; i += 1) {
		const key = keys[i];
		if (isUnsafeKey(key)) continue;
		setProperty(state, key, value[key], force);
	}
}
function isUnsafeKey(property) {
	return property === "__proto__" || property === "constructor" || property === "prototype";
}
function updateArray(current, next) {
	if (typeof next === "function") next = next(current);
	if (Array.isArray(next)) {
		if (current === next) return;
		let i = 0, len = next.length;
		for (; i < len; i++) {
			const value = next[i];
			if (current[i] !== value) setProperty(current, i, value);
		}
		setProperty(current, "length", len);
	} else mergeStoreNode(current, next);
}
function updatePath(current, path, traversed = []) {
	let part, next = current;
	if (path.length > 1) {
		part = path.shift();
		const partType = typeof part, isArray = Array.isArray(current);
		if (partType === "string" && (part === "__proto__" || path.length > 1 && isUnsafeKey(part))) return;
		if (Array.isArray(part)) {
			for (let i = 0; i < part.length; i++) updatePath(current, [part[i]].concat(path), traversed);
			return;
		} else if (isArray && partType === "function") {
			for (let i = 0; i < current.length; i++) if (part(current[i], i)) updatePath(current, [i].concat(path), traversed);
			return;
		} else if (isArray && partType === "object") {
			const { from = 0, to = current.length - 1, by = 1 } = part;
			for (let i = from; i <= to; i += by) updatePath(current, [i].concat(path), traversed);
			return;
		} else if (path.length > 1) {
			updatePath(current[part], path, [part].concat(traversed));
			return;
		}
		next = current[part];
		traversed = [part].concat(traversed);
	}
	let value = path[0];
	if (typeof value === "function") {
		value = value(next, traversed);
		if (value === next) return;
	}
	if (part === void 0 && value == void 0) return;
	if (part === void 0 || isWrappable(next) && isWrappable(value) && !Array.isArray(value)) mergeStoreNode(next, value);
	else setProperty(current, part, value);
}
function createStore(state) {
	const isArray = Array.isArray(state);
	function setStore(...args) {
		isArray && args.length === 1 ? updateArray(state, args[0]) : updatePath(state, args);
	}
	return [state, setStore];
}
function reconcile(value, options = {}) {
	return (state) => {
		if (!isWrappable(state) || !isWrappable(value)) return value;
		const targetKeys = Object.keys(value);
		for (let i = 0, len = targetKeys.length; i < len; i++) {
			const key = targetKeys[i];
			if (isUnsafeKey(key)) continue;
			setProperty(state, key, value[key]);
		}
		const previousKeys = Object.keys(state);
		for (let i = 0, len = previousKeys.length; i < len; i++) if (value[previousKeys[i]] === void 0) setProperty(state, previousKeys[i], void 0);
		return state;
	};
}
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/assets/fonts/BricolageGrotesque-Bold.js
var BricolageGrotesque_Bold_default = "" + new URL("../../../assets/BricolageGrotesque-Bold-BIJrwikb.ttf", import.meta.url).href;
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/assets/fonts/Inter-latin.js
var Inter_latin_default = "" + new URL("../../../assets/Inter-latin-BwkfbSeq.woff2", import.meta.url).href;
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/styles/semantic-theme.js
var DEVTOOLS_FONT_STYLE_ID = "tanstack-devtools-fonts";
var DEVTOOLS_FORCED_COLORS_STYLE_ID = "tanstack-devtools-forced-colors";
var forcedColorsCss = `
@media (forced-colors: active) {
  [data-tsd-surface] { forced-color-adjust: auto; background: Canvas; color: CanvasText; }
  [data-tsd-control] { forced-color-adjust: auto; background: ButtonFace; color: ButtonText; border-color: ButtonText; }
  [data-tsd-selected="true"] { background: Highlight; color: HighlightText; border-color: HighlightText; }
  [data-tsd-separator] { border-color: CanvasText; }
  [data-tsd-separator="resize"] { border: 1px solid CanvasText; }
  [data-tsd-control]:focus-visible { outline: 2px solid ButtonText; outline-offset: 2px; }
}`;
var devtoolsFontCss = `
@font-face {
  font-family: 'Bricolage Grotesque';
  src: url('${BricolageGrotesque_Bold_default}') format('truetype');
  font-style: normal;
  font-weight: 700;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  src: url('${Inter_latin_default}') format('woff2');
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
}`;
function ensureDevtoolsFonts(targetDocument) {
	if (targetDocument.getElementById("tanstack-devtools-fonts")) return;
	const style = targetDocument.createElement("style");
	style.id = DEVTOOLS_FONT_STYLE_ID;
	style.textContent = devtoolsFontCss;
	targetDocument.head.append(style);
}
function ensureDevtoolsStyles(targetDocument) {
	ensureDevtoolsFonts(targetDocument);
	if (targetDocument.getElementById("tanstack-devtools-forced-colors")) return;
	const style = targetDocument.createElement("style");
	style.id = DEVTOOLS_FORCED_COLORS_STYLE_ID;
	style.textContent = forcedColorsCss;
	targetDocument.head.append(style);
}
function deepFreeze(value) {
	for (const nestedValue of Object.values(value)) if (nestedValue !== null && typeof nestedValue === "object") deepFreeze(nestedValue);
	return Object.freeze(value);
}
var commonTheme = {
	font: {
		display: "'Bricolage Grotesque', ui-sans-serif, system-ui, sans-serif",
		body: "'Inter', ui-sans-serif, system-ui, sans-serif",
		mono: "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace"
	},
	space: {
		1: "4px",
		2: "8px",
		3: "12px",
		4: "16px"
	},
	gap: {
		tight: "4px",
		control: "8px",
		section: "12px",
		sectionLarge: "16px"
	},
	padding: {
		controlBlock: "6px",
		controlInline: "8px"
	},
	type: {
		bodyXs: {
			size: "12px",
			lineHeight: "17px",
			weight: 400
		},
		bodySm: {
			size: "14px",
			lineHeight: "20px",
			weight: 400
		},
		bodyMd: {
			size: "16px",
			lineHeight: "24px",
			weight: 300
		},
		labelSm: {
			size: "12px",
			lineHeight: "14px",
			weight: 500,
			tracking: "0.5px"
		},
		headingCompact: {
			size: "14px",
			lineHeight: "18px",
			weight: 700
		},
		headingPane: {
			size: "16px",
			lineHeight: "21px",
			weight: 700
		}
	},
	radius: {
		control: "4px",
		group: "6px",
		overlay: "8px"
	},
	shadow: {
		xs: "0 1px 2px rgba(0,0,0,0.03)",
		sm: "0 1px 3px rgba(0,0,0,0.05), 0 1px 2px rgba(0,0,0,0.03)",
		overlay: "0 25px 50px -12px rgba(0,0,0,0.20)"
	},
	motion: {
		strip: "120ms",
		graceMs: 400
	}
};
var semanticThemes = deepFreeze({
	light: {
		...commonTheme,
		color: {
			surface: {
				app: "#ffffff",
				workspace: "#ffffff",
				subtle: "#fafafa",
				elevated: "#ffffff",
				brand: "#eeebd4"
			},
			text: {
				primary: "#111111",
				secondary: "#3e3529",
				muted: "#756c5b",
				mutedOnBrand: "#3e3529",
				inverse: "#ffffff",
				link: "#003e53"
			},
			border: {
				decorative: "#eeebd4",
				control: "#756c5b",
				focus: "#003e53"
			},
			state: {
				hover: "#1111110f",
				pressed: "#1111111f",
				selectionFill: "#3e3529",
				selectionText: "#ffffff"
			},
			status: {
				success: {
					subtleFill: "#d8f0da",
					border: "#1d4226",
					text: "#1d4226",
					solidFill: "#1d4226",
					onFill: "#ffffff"
				},
				warning: {
					subtleFill: "#fef6cc",
					border: "#624a00",
					text: "#624a00",
					solidFill: "#624a00",
					onFill: "#ffffff"
				},
				error: {
					subtleFill: "#f9d8c4",
					border: "#5f1a06",
					text: "#5f1a06",
					solidFill: "#5f1a06",
					onFill: "#ffffff"
				},
				info: {
					subtleFill: "#d8f0f3",
					border: "#003e53",
					text: "#003e53",
					solidFill: "#003e53",
					onFill: "#ffffff"
				},
				neutral: {
					subtleFill: "#eeebd4",
					border: "#756c5b",
					text: "#3e3529",
					solidFill: "#3e3529",
					onFill: "#ffffff"
				}
			},
			syntax: {
				keyword: "#5f1a06",
				string: "#1d4226",
				number: "#541f5d",
				comment: "#756c5b",
				property: "#003e53",
				punctuation: "#3e3529",
				selectionFill: "#d8f0f3",
				selectionText: "#003e53"
			}
		}
	},
	dark: {
		...commonTheme,
		color: {
			surface: {
				app: "#111111",
				workspace: "#1f1f1f",
				subtle: "#1b1b1b",
				elevated: "#2b2b2b",
				brand: "#111111"
			},
			text: {
				primary: "#ffffff",
				secondary: "#aea691",
				muted: "#aea691",
				mutedOnBrand: "#aea691",
				inverse: "#111111",
				link: "#9cd5e2"
			},
			border: {
				decorative: "#2d2d2d",
				control: "#aea691",
				focus: "#61adbf"
			},
			state: {
				hover: "#ffffff14",
				pressed: "#ffffff1f",
				selectionFill: "#c5c3bf",
				selectionText: "#111111"
			},
			status: {
				success: {
					subtleFill: "#1d4226",
					border: "#69bc75",
					text: "#a2e1a9",
					solidFill: "#69bc75",
					onFill: "#111111"
				},
				warning: {
					subtleFill: "#624a00",
					border: "#f4d648",
					text: "#fae884",
					solidFill: "#f4d648",
					onFill: "#111111"
				},
				error: {
					subtleFill: "#5f1a06",
					border: "#e06e49",
					text: "#edaa8d",
					solidFill: "#e06e49",
					onFill: "#111111"
				},
				info: {
					subtleFill: "#003e53",
					border: "#61adbf",
					text: "#9cd5e2",
					solidFill: "#61adbf",
					onFill: "#111111"
				},
				neutral: {
					subtleFill: "#2b2b2b",
					border: "#aea691",
					text: "#c5c3bf",
					solidFill: "#c5c3bf",
					onFill: "#111111"
				}
			},
			syntax: {
				keyword: "#e06e49",
				string: "#69bc75",
				number: "#c56dcf",
				comment: "#aea691",
				property: "#61adbf",
				punctuation: "#c5c3bf",
				selectionFill: "#003e53",
				selectionText: "#ffffff"
			}
		}
	}
});
function resolveSemanticTheme(theme) {
	return semanticThemes[theme];
}
var MIN_PANE_SIZE = {
	w: 280,
	h: 160
};
var PANE_DROP_EDGE_RATIO = .25;
var PANEL_MAX_VIEWPORT_RATIO = .9;
var getStorageItem = (key) => {
	return localStorage.getItem(key);
};
var setStorageItem = (key, value) => {
	try {
		localStorage.setItem(key, value);
	} catch (_e) {
		return;
	}
};
var TANSTACK_DEVTOOLS = "tanstack_devtools";
var TANSTACK_DEVTOOLS_STATE = "tanstack_devtools_state";
var TANSTACK_DEVTOOLS_SETTINGS = "tanstack_devtools_settings";
function getDefaultActivePlugins(plugins) {
	if (plugins.length === 0) return [];
	if (plugins.length === 1) return [plugins[0].id];
	return plugins.filter((plugin) => plugin.defaultOpen === true).slice(0, 18).map((plugin) => plugin.id);
}
var EPSILON = 1e-9;
var MAX_STORED_DEPTH = 32;
var isGroup = (node) => node.kind === "group";
var isSplit = (node) => node.kind === "split";
var flattenTabs = (tree) => tree === null ? [] : isGroup(tree) ? [...tree.tabs] : tree.children.flatMap(flattenTabs);
var allGroups = (tree) => tree === null ? [] : isGroup(tree) ? [tree] : tree.children.flatMap(allGroups);
var findGroupOfTab = (tree, tabId) => allGroups(tree).find((group) => group.tabs.includes(tabId)) ?? null;
var findGroupById = (tree, groupId) => allGroups(tree).find((group) => group.id === groupId) ?? null;
var nextGroupId = (tree) => {
	let highest = -1;
	for (const group of allGroups(tree)) {
		const match = /^g(\d+)$/.exec(group.id);
		if (match) highest = Math.max(highest, Number(match[1]));
	}
	return `g${highest + 1}`;
};
var singleGroup = (tabs, id = "g0") => tabs.length === 0 ? null : {
	kind: "group",
	id,
	tabs: [...tabs],
	active: 0
};
var normalise = (sizes, count) => {
	const usable = sizes.length === count && sizes.every((n) => Number.isFinite(n) && n > 0) ? sizes : Array.from({ length: count }, () => 1);
	const total = usable.reduce((sum, n) => sum + n, 0);
	return total > EPSILON ? usable.map((n) => n / total) : Array.from({ length: count }, () => 1 / count);
};
var split = (dir, children, sizes) => ({
	kind: "split",
	dir,
	sizes: normalise(sizes ?? [], children.length),
	children
});
var prune = (node) => {
	if (node === null) return null;
	if (isGroup(node)) {
		if (node.tabs.length === 0) return null;
		const active = Math.min(Math.max(node.active, 0), node.tabs.length - 1);
		return active === node.active ? node : {
			...node,
			active
		};
	}
	const kept = [];
	const keptSizes = [];
	node.children.forEach((child, index) => {
		const pruned = prune(child);
		if (pruned === null) return;
		if (isSplit(pruned) && pruned.dir === node.dir) {
			const share = node.sizes[index] ?? 1 / node.children.length;
			pruned.children.forEach((grandchild, inner) => {
				kept.push(grandchild);
				keptSizes.push(share * (pruned.sizes[inner] ?? 0));
			});
			return;
		}
		kept.push(pruned);
		keptSizes.push(node.sizes[index] ?? 1 / node.children.length);
	});
	if (kept.length === 0) return null;
	if (kept.length === 1) return kept[0];
	return split(node.dir, kept, keptSizes);
};
var closeTab = (tree, tabId) => {
	const strip = (node) => {
		if (isGroup(node)) {
			const index = node.tabs.indexOf(tabId);
			if (index === -1) return node;
			const tabs = node.tabs.filter((id) => id !== tabId);
			const active = node.active > index ? node.active - 1 : node.active;
			return {
				...node,
				tabs,
				active
			};
		}
		return {
			...node,
			children: node.children.map(strip)
		};
	};
	return tree === null ? null : prune(strip(tree));
};
var setTabs = (tree, groupId, tabIds) => {
	const group = findGroupById(tree, groupId);
	if (tree === null || group === null) return tree;
	const existing = new Set(group.tabs);
	const seen = /* @__PURE__ */ new Set();
	const tabs = [...tabIds.filter((id) => {
		if (!existing.has(id) || seen.has(id)) return false;
		seen.add(id);
		return true;
	}), ...group.tabs.filter((id) => !seen.has(id))];
	if (tabs.length === 0) return tree;
	const activeId = group.tabs[group.active];
	const active = Math.max(tabs.findIndex((id) => id === activeId), 0);
	const visit = (node) => {
		if (isGroup(node)) return node.id === groupId ? {
			...node,
			tabs,
			active
		} : node;
		return {
			...node,
			children: node.children.map(visit)
		};
	};
	return visit(tree);
};
var activateTab = (tree, tabId) => {
	if (tree === null) return null;
	const visit = (node) => {
		if (isGroup(node)) {
			const index = node.tabs.indexOf(tabId);
			return index === -1 || index === node.active ? node : {
				...node,
				active: index
			};
		}
		return {
			...node,
			children: node.children.map(visit)
		};
	};
	return visit(tree);
};
var moveTab = (tree, tabId, groupId, index) => {
	if (tree === null) return null;
	if (findGroupById(tree, groupId) === null) return tree;
	const withoutTab = findGroupOfTab(tree, tabId) === null ? tree : closeTab(tree, tabId) ?? null;
	if (withoutTab === null) return singleGroup([tabId], groupId);
	if (findGroupById(withoutTab, groupId) === null) return tree;
	const insert = (node) => {
		if (isGroup(node)) {
			if (node.id !== groupId) return node;
			const at = Math.min(Math.max(index, 0), node.tabs.length);
			const tabs = [
				...node.tabs.slice(0, at),
				tabId,
				...node.tabs.slice(at)
			];
			return {
				...node,
				tabs,
				active: at
			};
		}
		return {
			...node,
			children: node.children.map(insert)
		};
	};
	return prune(insert(withoutTab));
};
var stackInto = (tree, groupId, tabId) => {
	const group = findGroupById(tree, groupId);
	return group === null ? tree : moveTab(tree, tabId, groupId, group.tabs.length);
};
var zoneAxis = (zone) => zone === "left" || zone === "right" ? "row" : "col";
var zoneLeads = (zone) => zone === "left" || zone === "top";
var splitAt = (tree, groupId, zone, tabId) => {
	if (tree === null) return singleGroup([tabId], "g0");
	if (zone === "center") return stackInto(tree, groupId, tabId);
	if (findGroupById(tree, groupId) === null) return tree;
	const lifted = closeTab(tree, tabId);
	if (lifted === null) return singleGroup([tabId], groupId);
	if (findGroupById(lifted, groupId) === null) return tree;
	const newGroup = {
		kind: "group",
		id: nextGroupId(lifted),
		tabs: [tabId],
		active: 0
	};
	const dir = zoneAxis(zone);
	const place = (node) => {
		if (isGroup(node)) {
			if (node.id !== groupId) return node;
			return split(dir, zoneLeads(zone) ? [newGroup, node] : [node, newGroup]);
		}
		return {
			...node,
			children: node.children.map(place)
		};
	};
	return prune(place(lifted));
};
var appendPane = (tree, tabId, dir = "row") => {
	if (tree === null) return singleGroup([tabId]);
	const lifted = closeTab(tree, tabId);
	if (lifted === null) return singleGroup([tabId]);
	const newGroup = {
		kind: "group",
		id: nextGroupId(lifted),
		tabs: [tabId],
		active: 0
	};
	return prune(split(dir, isSplit(lifted) && lifted.dir === dir ? [...lifted.children, newGroup] : [lifted, newGroup]));
};
var layoutRects = (tree, box, gutter = 0) => {
	const out = {};
	const walk = (node, rect) => {
		if (isGroup(node)) {
			out[node.id] = rect;
			return;
		}
		const horizontal = node.dir === "row";
		const gutters = gutter * (node.children.length - 1);
		const available = Math.max((horizontal ? rect.width : rect.height) - gutters, 0);
		let offset = horizontal ? rect.left : rect.top;
		node.children.forEach((child, index) => {
			const extent = available * (node.sizes[index] ?? 0);
			walk(child, horizontal ? {
				left: offset,
				top: rect.top,
				width: extent,
				height: rect.height
			} : {
				left: rect.left,
				top: offset,
				width: rect.width,
				height: extent
			});
			offset += extent + gutter;
		});
	};
	if (tree !== null) walk(tree, {
		left: 0,
		top: 0,
		width: box.w,
		height: box.h
	});
	return out;
};
var splitterHandles = (tree, box, gutter = 0) => {
	const handles = [];
	const walk = (node, rect, path) => {
		if (isGroup(node)) return;
		const horizontal = node.dir === "row";
		const gutters = gutter * (node.children.length - 1);
		const available = Math.max((horizontal ? rect.width : rect.height) - gutters, 0);
		let offset = horizontal ? rect.left : rect.top;
		node.children.forEach((child, index) => {
			const extent = available * (node.sizes[index] ?? 0);
			const childRect = horizontal ? {
				left: offset,
				top: rect.top,
				width: extent,
				height: rect.height
			} : {
				left: rect.left,
				top: offset,
				width: rect.width,
				height: extent
			};
			walk(child, childRect, [...path, index]);
			offset += extent;
			if (index < node.children.length - 1) {
				handles.push({
					path,
					gutterIndex: index,
					dir: node.dir,
					extent: available,
					rect: horizontal ? {
						left: offset,
						top: rect.top,
						width: gutter,
						height: rect.height
					} : {
						left: rect.left,
						top: offset,
						width: rect.width,
						height: gutter
					}
				});
				offset += gutter;
			}
		});
	};
	if (tree !== null) walk(tree, {
		left: 0,
		top: 0,
		width: box.w,
		height: box.h
	}, []);
	return handles;
};
var canSplit = (tree, groupId, zone, min, box, gutter = 0) => {
	if (zone === "center") return true;
	const rect = layoutRects(tree, box, gutter)[groupId];
	if (!rect) return false;
	return zoneAxis(zone) === "row" ? (rect.width - gutter) / 2 >= min.w : (rect.height - gutter) / 2 >= min.h;
};
var zoneAt = (point, rect, edge = .25) => {
	const x = rect.width > 0 ? (point.x - rect.left) / rect.width : .5;
	const y = rect.height > 0 ? (point.y - rect.top) / rect.height : .5;
	const [zone, distance] = [
		["left", x],
		["right", 1 - x],
		["top", y],
		["bottom", 1 - y]
	].reduce((best, entry) => entry[1] < best[1] ? entry : best);
	return distance <= edge ? zone : "center";
};
var isRawGroup = (value) => value.kind === "group" && typeof value.id === "string" && Array.isArray(value.tabs) && value.tabs.every((tab) => typeof tab === "string");
var isRawSplit = (value) => value.kind === "split" && (value.dir === "row" || value.dir === "col") && Array.isArray(value.children);
var repairLayout = (raw, known) => {
	const seen = /* @__PURE__ */ new Set();
	const rebuild = (value, depth = 0) => {
		if (depth > MAX_STORED_DEPTH) return null;
		if (typeof value !== "object" || value === null) return null;
		const record = value;
		if (isRawGroup(record)) {
			const tabs = record.tabs.filter((tab) => {
				if (!known.has(tab) || seen.has(tab)) return false;
				seen.add(tab);
				return true;
			});
			if (tabs.length === 0) return null;
			const active = typeof record.active === "number" && Number.isInteger(record.active) ? Math.min(Math.max(record.active, 0), tabs.length - 1) : 0;
			return {
				kind: "group",
				id: String(record.id),
				tabs,
				active
			};
		}
		if (isRawSplit(record)) {
			const children = record.children.map((child) => rebuild(child, depth + 1)).filter((child) => child !== null);
			if (children.length === 0) return null;
			const rawSizes = Array.isArray(record.sizes) ? record.sizes.filter((size) => typeof size === "number") : [];
			return split(record.dir, children, rawSizes);
		}
		return null;
	};
	const rebuilt = prune(rebuild(raw));
	if (rebuilt !== null) return dedupeIds(rebuilt);
	return singleGroup(collectKnownIds(raw, known));
};
var collectKnownIds = (raw, known) => {
	const found = [];
	const seen = /* @__PURE__ */ new Set();
	const visited = /* @__PURE__ */ new WeakSet();
	const walk = (value) => {
		if (typeof value === "string") {
			if (known.has(value) && !seen.has(value)) {
				seen.add(value);
				found.push(value);
			}
			return;
		}
		if (typeof value !== "object" || value === null) return;
		if (visited.has(value)) return;
		visited.add(value);
		if (Array.isArray(value)) {
			value.forEach(walk);
			return;
		}
		Object.values(value).forEach(walk);
	};
	walk(raw);
	return found;
};
var dedupeIds = (tree) => {
	const used = /* @__PURE__ */ new Set();
	let counter = 0;
	const visit = (node) => {
		if (isGroup(node)) {
			if (!used.has(node.id)) {
				used.add(node.id);
				return node;
			}
			let id = `g${counter++}`;
			while (used.has(id)) id = `g${counter++}`;
			used.add(id);
			return {
				...node,
				id
			};
		}
		return {
			...node,
			children: node.children.map(visit)
		};
	};
	return visit(tree);
};
var tryParseJson = (json) => {
	if (!json) return void 0;
	try {
		return JSON.parse(json);
	} catch (_e) {
		return;
	}
};
var uppercaseFirstLetter = (value) => value.charAt(0).toUpperCase() + value.slice(1);
var getAllPermutations = (arr) => {
	const res = [];
	function permutate(arr2, start) {
		if (start === arr2.length - 1) {
			res.push([...arr2]);
			return;
		}
		for (let i = start; i < arr2.length; i++) {
			[arr2[start], arr2[i]] = [arr2[i], arr2[start]];
			permutate(arr2, start + 1);
			[arr2[start], arr2[i]] = [arr2[i], arr2[start]];
		}
	}
	permutate(arr, 0);
	return res;
};
var DevtoolsContext = createContext();
var getSettings = () => {
	return { ...tryParseJson(getStorageItem(TANSTACK_DEVTOOLS_SETTINGS)) };
};
var generatePluginId = (plugin, index) => {
	if (plugin.id) return plugin.id;
	if (typeof plugin.name === "string") return `${plugin.name.toLowerCase().replace(" ", "-")}-${index}`;
	return index.toString();
};
function getStateFromLocalStorage(plugins) {
	const existingState = tryParseJson(getStorageItem(TANSTACK_DEVTOOLS_STATE));
	const pluginIds = plugins?.map((plugin, i) => generatePluginId(plugin, i)) || [];
	if (existingState) {
		const known = new Set(pluginIds);
		const before = JSON.stringify(existingState.layout ?? null);
		existingState.layout = repairLayout(existingState.layout ?? singleGroup(existingState.activePlugins ?? []), known);
		delete existingState.activePlugins;
		if (JSON.stringify(existingState.layout ?? null) !== before) setStorageItem(TANSTACK_DEVTOOLS_STATE, JSON.stringify(existingState));
	}
	return existingState;
}
var getExistingStateFromStorage = (config, plugins) => {
	const existingState = getStateFromLocalStorage(plugins);
	const settings = getSettings();
	const pluginsWithIds = plugins?.map((plugin, i) => {
		const id = generatePluginId(plugin, i);
		return {
			...plugin,
			id
		};
	}) || [];
	let layout = existingState?.layout ?? null;
	if (flattenTabs(layout).length === 0 && pluginsWithIds.length > 0) layout = singleGroup(getDefaultActivePlugins(pluginsWithIds));
	return {
		...initialState,
		plugins: pluginsWithIds,
		state: {
			...initialState.state,
			...existingState,
			layout
		},
		settings: {
			...initialState.settings,
			...config,
			...settings
		}
	};
};
var DevtoolsProvider = (props) => {
	const [store, setStore] = createStore(getExistingStateFromStorage(props.config, props.plugins));
	setStorageItem(TANSTACK_DEVTOOLS_STATE, JSON.stringify(store.state));
	const updatePlugins = (newPlugins) => {
		const pluginsWithIds = newPlugins.map((plugin, i) => {
			const id = generatePluginId(plugin, i);
			return {
				...plugin,
				id
			};
		});
		setStore("plugins", pluginsWithIds);
	};
	createEffect(() => {
		if (props.onSetPlugins) props.onSetPlugins(updatePlugins);
	});
	const value = {
		store,
		paneDragBridge: { handler: null },
		setStore: (updater) => {
			const newState = updater(store);
			const { settings, state: internalState } = newState;
			setStorageItem(TANSTACK_DEVTOOLS_SETTINGS, JSON.stringify(settings));
			setStorageItem(TANSTACK_DEVTOOLS_STATE, JSON.stringify(internalState));
			setStore((prev) => ({
				...prev,
				...newState
			}));
		},
		replaceLayout: (next) => {
			setStore("state", "layout", next === null ? null : reconcile(next, { key: null }));
			setStorageItem(TANSTACK_DEVTOOLS_STATE, JSON.stringify(store.state));
		}
	};
	return createComponent(DevtoolsContext.Provider, {
		value,
		get children() {
			return props.children;
		}
	});
};
var PiPContext = createContext(void 0);
var PiPProvider = (props) => {
	const [pipWindow, setPipWindow] = createSignal(null);
	const closePipWindow = () => {
		const w = pipWindow();
		if (w != null) {
			w.close();
			setPipWindow(null);
		}
	};
	const requestPipWindow = (settings) => {
		if (pipWindow() != null) return;
		const pip = window.open("", "TSDT-Devtools-Panel", `${settings},popup`);
		if (!pip) throw new Error("Failed to open popup. Please allow popups for this site to view the devtools in picture-in-picture mode.");
		window.addEventListener("beforeunload", () => {
			localStorage.setItem("pip_open", "false");
			closePipWindow();
		});
		pip.document.head.innerHTML = "";
		pip.document.body.innerHTML = "";
		pip.document.title = "TanStack Devtools";
		pip.document.body.style.margin = "0";
		pip.addEventListener("pagehide", () => {
			localStorage.setItem("pip_open", "false");
			closePipWindow();
		});
		[...document.styleSheets].forEach((styleSheet) => {
			try {
				const cssRules = [...styleSheet.cssRules].map((rule) => rule.cssText).join("");
				const style = document.createElement("style");
				const style_node = styleSheet.ownerNode;
				let style_id = "";
				if (style_node && "id" in style_node) style_id = style_node.id;
				if (style_id) style.setAttribute("id", style_id);
				style.textContent = cssRules;
				pip.document.head.appendChild(style);
			} catch (e) {
				const link = document.createElement("link");
				if (styleSheet.href == null) return;
				link.rel = "stylesheet";
				link.type = styleSheet.type;
				link.media = styleSheet.media.toString();
				link.href = styleSheet.href;
				pip.document.head.appendChild(link);
			}
		});
		ensureDevtoolsStyles(pip.document);
		notSup([
			"focusin",
			"focusout",
			"pointermove",
			"keydown",
			"pointerdown",
			"pointerup",
			"click",
			"mousedown",
			"input"
		], pip.document);
		setPipWindow(pip);
	};
	createEffect(() => {
		const gooberStyles = document.querySelector("#_goober");
		const w = pipWindow();
		if (gooberStyles && w) {
			const observer = new MutationObserver(() => {
				const pip_style = w.document.querySelector("#_goober");
				if (pip_style) pip_style.textContent = gooberStyles.textContent;
			});
			observer.observe(gooberStyles, {
				childList: true,
				subtree: true,
				characterDataOldValue: true
			});
			onCleanup(() => {
				observer.disconnect();
			});
		}
	});
	const value = createMemo(() => ({
		pipWindow: pipWindow(),
		requestPipWindow,
		closePipWindow,
		disabled: props.disabled ?? false
	}));
	return createComponent(PiPContext.Provider, {
		value,
		get children() {
			return props.children;
		}
	});
};
var createPiPWindow = () => {
	return createMemo(() => {
		const ctx = useContext(PiPContext);
		if (!ctx) throw new Error("createPiPWindow must be used within a PiPProvider");
		return ctx();
	});
};
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/components/theme.js
var _tmpl$$7 = /* @__PURE__ */ notSup(`<span style=display:contents>`);
var ThemeContext = createContext(void 0);
var ThemeContextProvider = (props) => {
	const [theme, setTheme] = createSignal(props.theme);
	createEffect(() => {
		setTheme(props.theme);
	});
	const [container, setContainer] = createSignal();
	createEffect(() => {
		const element = container();
		if (element) ensureDevtoolsStyles(element.ownerDocument);
	});
	return createComponent(ThemeContext.Provider, {
		value: {
			theme,
			setTheme
		},
		get children() {
			var _el$ = _tmpl$$7();
			notSup(setContainer, _el$);
			notSup(_el$, () => props.children);
			return _el$;
		}
	});
};
function createTheme$1() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("createTheme must be used within a ThemeContextProvider");
	return context;
}
//#endregion
//#region node_modules/goober/dist/goober.modern.js
var e = { data: "" };
var t = (t) => {
	if ("object" == typeof window) {
		let e = (t ? t.querySelector("#_goober") : window._goober) || Object.assign(document.createElement("style"), {
			innerHTML: " ",
			id: "_goober"
		});
		return e.nonce = window.__nonce__, e.parentNode || (t || document.head).appendChild(e), e.firstChild;
	}
	return t || e;
};
var a = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g;
var l = /\/\*[^]*?\*\/|  +/g;
var n = /\n+/g;
var o = (e, t) => {
	let r = "", a = "", l = "";
	for (let n in e) {
		let c = e[n];
		"@" == n[0] ? "i" == n[1] ? r = n + " " + c + ";" : a += "f" == n[1] ? o(c, n) : n + "{" + o(c, "k" == n[1] ? "" : t) + "}" : "object" == typeof c ? a += o(c, t ? t.replace(/([^,])+/g, (e) => n.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g, (t) => /&/.test(t) ? t.replace(/&/g, e) : e ? e + " " + t : t)) : n) : null != c && (n = "-" == n[1] ? n : n.replace(/[A-Z]/g, "-$&").toLowerCase(), l += o.p ? o.p(n, c) : n + ":" + c + ";");
	}
	return r + (t && l ? t + "{" + l + "}" : l) + a;
};
var c = {};
var i = (e) => {
	if ("object" == typeof e) {
		let t = "";
		for (let r in e) t += r + i(e[r]);
		return t;
	}
	return e;
};
var s = (e, t, r, s, p) => {
	let u = i(e), d = c[u] || (c[u] = ((e) => {
		let t = 0, r = 11;
		for (; t < e.length;) r = 101 * r + e.charCodeAt(t++) >>> 0;
		return "go" + r;
	})(u));
	if (!c[d]) {
		let t = u !== e ? e : ((e) => {
			let t, r, o = [{}];
			for (; t = a.exec(e.replace(l, ""));) t[4] ? o.shift() : t[3] ? (r = t[3].replace(n, " ").trim(), o.unshift(o[0][r] = o[0][r] || {})) : o[0][t[1]] = t[2].replace(n, " ").trim();
			return o[0];
		})(e);
		c[d] = o(p ? { ["@keyframes " + d]: t } : t, r ? "" : "." + d);
	}
	let f = r && c.g;
	return r && (c.g = c[d]), ((e, t, r, a) => {
		a ? t.data = t.data.replace(a, e) : -1 === t.data.indexOf(e) && (t.data = r ? e + t.data : t.data + e);
	})(c[d], t, s, f), d;
};
var p = (e, t, r) => e.reduce((e, a, l) => {
	let n = t[l];
	if (n && n.call) {
		let e = n(r), t = e && e.props && e.props.className || /^go/.test(e) && e;
		n = t ? "." + t : e && "object" == typeof e ? e.props ? "" : o(e, "") : !1 === e ? "" : e;
	}
	return e + a + (null == n ? "" : n);
}, "");
function u(e) {
	let r = this || {}, a = e.call ? e(r.p) : e;
	return s(a.unshift ? a.raw ? p(a, [].slice.call(arguments, 1), r.p) : a.reduce((e, t) => Object.assign(e, t && t.call ? t(r.p) : t), {}) : a, t(r.target), r.g, r.o, r.k);
}
u.bind({ g: 1 });
var h = u.bind({ k: 1 });
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/styles/use-styles.js
var css = u;
var stylesFactory$1 = (theme) => {
	const semantic = resolveSemanticTheme(theme);
	const t = (light, dark) => theme === "light" ? light : dark;
	const buildButtonVariant = (variant) => {
		const statusRole = variant === "danger" ? "error" : variant === "primary" || variant === "secondary" ? "neutral" : variant;
		const status = semantic.color.status[statusRole];
		const outlineColor = status.text;
		const outlineHoverColor = status.text;
		const solidBg = status.solidFill;
		const solidHover = status.border;
		const solidActive = status.solidFill;
		const solidText = status.onFill;
		const solidBorder = status.border;
		return {
			ghost: css`
        background: transparent;
        color: ${outlineColor};
        border-color: transparent;
        &:hover {
          background: ${semantic.color.state.hover};
          color: ${outlineHoverColor};
        }
        &:active {
          background: ${semantic.color.state.pressed};
          color: ${outlineHoverColor};
        }
      `,
			outline: css`
        background: transparent;
        color: ${outlineColor};
        border-color: ${outlineColor};
        &:hover {
          background: ${semantic.color.state.hover};
          color: ${outlineHoverColor};
          border-color: ${outlineHoverColor};
        }
        &:active {
          background: ${semantic.color.state.pressed};
          color: ${outlineHoverColor};
          border-color: ${outlineHoverColor};
        }
      `,
			solid: css`
        background: ${solidBg};
        color: ${solidText};
        border-color: ${solidBorder};
        &:hover {
          background: ${solidHover};
          border-color: ${solidHover};
          box-shadow: ${semantic.shadow.xs};
        }
        &:active {
          background: ${solidActive};
          border-color: ${solidActive};
          box-shadow: ${semantic.shadow.sm};
        }
      `
		};
	};
	const buttonVariants = {
		primary: buildButtonVariant("primary"),
		secondary: buildButtonVariant("secondary"),
		info: buildButtonVariant("info"),
		warning: buildButtonVariant("warning"),
		danger: buildButtonVariant("danger"),
		success: buildButtonVariant("success")
	};
	const wrapperSize = 320;
	const legacyTagColor = (color) => {
		const semanticRole = color === "red" ? "error" : color === "yellow" ? "warning" : color === "green" ? "success" : color === "blue" || color === "cyan" || color === "teal" ? "info" : "neutral";
		return semantic.color.status[semanticRole].solidFill;
	};
	return {
		logo: css`
      cursor: pointer;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      border: none;
      width: 48px;
      height: 48px;
      font-family: ${semantic.font.body};
      gap: ${semantic.gap.tight};
      padding: 0;
      &:hover {
        opacity: 0.7;
      }
    `,
		selectWrapper: css`
      width: 100%;
      max-width: ${wrapperSize}px;
      display: flex;
      flex-direction: column;
      gap: ${semantic.gap.tight};
    `,
		selectContainer: css`
      width: 100%;
      &::selection,
      & *::selection {
        background: ${semantic.color.state.selectionFill};
        color: ${semantic.color.state.selectionText};
      }
    `,
		selectLabel: css`
      font: ${semantic.type.labelSm.weight} ${semantic.type.labelSm.size} /
        ${semantic.type.labelSm.lineHeight} ${semantic.font.body};
      letter-spacing: ${semantic.type.labelSm.tracking};
      color: ${semantic.color.text.primary};
      text-align: left;
    `,
		selectDescription: css`
      font: ${semantic.type.bodyXs.weight} ${semantic.type.bodyXs.size} /
        ${semantic.type.bodyXs.lineHeight} ${semantic.font.body};
      color: ${semantic.color.text.secondary};
      margin: 0;
      text-align: left;
    `,
		select: css`
      /* The platform chevron is drawn in the OS accent, which reads as foreign
         next to the rest of the panel — draw our own from currentColor instead
         so it follows the theme. */
      appearance: none;
      -webkit-appearance: none;
      width: 100%;
      box-sizing: border-box;
      padding: ${semantic.padding.controlBlock} 28px
        ${semantic.padding.controlBlock} ${semantic.padding.controlInline};
      border-radius: ${semantic.radius.control};
      background-color: ${semantic.color.surface.elevated};
      background-image:
        linear-gradient(45deg, transparent 50%, currentColor 50%),
        linear-gradient(135deg, currentColor 50%, transparent 50%);
      background-position:
        right 14px center,
        right 9px center;
      background-size:
        5px 5px,
        5px 5px;
      background-repeat: no-repeat;
      color: ${semantic.color.text.primary};
      border: 1px solid ${semantic.color.border.control};
      font: ${semantic.type.bodySm.weight} ${semantic.type.bodySm.size} /
        ${semantic.type.bodySm.lineHeight} ${semantic.font.body};
      transition:
        border-color 0.15s ease,
        background-color 0.15s ease;
      cursor: pointer;

      &:hover {
        border-color: ${semantic.color.border.focus};
      }

      &:focus-visible {
        outline: 2px solid ${semantic.color.border.focus};
        outline-offset: 2px;
      }
      /* The custom chevron is decorative; let the platform draw its own when
         the user forces system colours. */
      @media (forced-colors: active) {
        appearance: auto;
        background-image: none;
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		inputWrapper: css`
      width: 100%;
      max-width: ${wrapperSize}px;
      display: flex;
      flex-direction: column;
      gap: ${semantic.gap.tight};
    `,
		inputContainer: css`
      width: 100%;
      &::selection,
      & *::selection {
        background: ${semantic.color.state.selectionFill};
        color: ${semantic.color.state.selectionText};
      }
    `,
		inputLabel: css`
      font: ${semantic.type.labelSm.weight} ${semantic.type.labelSm.size} /
        ${semantic.type.labelSm.lineHeight} ${semantic.font.body};
      letter-spacing: ${semantic.type.labelSm.tracking};
      color: ${semantic.color.text.primary};
      text-align: left;
    `,
		inputDescription: css`
      font: ${semantic.type.bodyXs.weight} ${semantic.type.bodyXs.size} /
        ${semantic.type.bodyXs.lineHeight} ${semantic.font.body};
      color: ${semantic.color.text.secondary};
      margin: 0;
      text-align: left;
    `,
		input: css`
      appearance: none;
      box-sizing: border-box;
      width: 100%;
      padding: ${semantic.padding.controlBlock}
        ${semantic.padding.controlInline};
      border-radius: ${semantic.radius.control};
      background-color: ${semantic.color.surface.elevated};
      color: ${semantic.color.text.primary};
      border: 1px solid ${semantic.color.border.control};
      font: ${semantic.type.bodySm.weight} ${semantic.type.bodySm.size} /
        ${semantic.type.bodySm.lineHeight} ${semantic.font.body};
      transition: all 0.15s ease;

      &::placeholder {
        color: ${semantic.color.text.secondary};
      }

      &:hover {
        border-color: ${semantic.color.border.focus};
      }

      &:focus {
        outline: 2px solid ${semantic.color.border.focus};
        outline-offset: 2px;
      }
    `,
		checkboxWrapper: css`
      display: flex;
      align-items: flex-start;
      gap: ${semantic.gap.control};
      cursor: pointer;
      user-select: none;
      padding: ${semantic.padding.controlBlock}
        ${semantic.padding.controlInline};
      border-radius: ${semantic.radius.control};
      transition: background-color 0.15s ease;

      &:hover {
        background-color: ${semantic.color.state.hover};
      }
    `,
		checkboxContainer: css`
      width: 100%;
      &::selection,
      & *::selection {
        background: ${semantic.color.state.selectionFill};
        color: ${semantic.color.state.selectionText};
      }
    `,
		checkboxLabelContainer: css`
      display: flex;
      flex-direction: column;
      gap: ${semantic.gap.tight};
      flex: 1;
    `,
		checkbox: css`
      appearance: none;
      width: ${semantic.space[4]};
      height: ${semantic.space[4]};
      border: 2px solid ${semantic.color.border.control};
      border-radius: ${semantic.radius.control};
      background-color: ${semantic.color.surface.elevated};
      display: grid;
      place-items: center;
      transition: all 0.15s ease;
      flex-shrink: 0;
      margin-top: ${semantic.space[1]};

      &:hover {
        border-color: ${semantic.color.border.focus};
      }

      &:focus-visible {
        outline: 2px solid ${semantic.color.border.focus};
        outline-offset: 2px;
      }

      &:checked {
        background-color: ${semantic.color.state.selectionFill};
        border-color: ${semantic.color.state.selectionFill};
      }

      &:checked::after {
        content: '';
        width: ${semantic.space[1]};
        height: ${semantic.space[2]};
        border: solid ${semantic.color.state.selectionText};
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        margin-top: -3px;
      }
    `,
		checkboxLabel: css`
      color: ${semantic.color.text.primary};
      font: ${semantic.type.labelSm.weight} ${semantic.type.labelSm.size} /
        ${semantic.type.labelSm.lineHeight} ${semantic.font.body};
      letter-spacing: ${semantic.type.labelSm.tracking};
      text-align: left;
    `,
		checkboxDescription: css`
      color: ${semantic.color.text.secondary};
      font: ${semantic.type.bodyXs.weight} ${semantic.type.bodyXs.size} /
        ${semantic.type.bodyXs.lineHeight} ${semantic.font.body};
      text-align: left;
    `,
		button: {
			base: css`
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-family: ${semantic.font.body};
        font-size: ${semantic.type.bodyXs.size};
        line-height: ${semantic.type.bodyXs.lineHeight};
        font-weight: ${semantic.type.labelSm.weight};
        border-radius: ${semantic.radius.control};
        padding: ${semantic.padding.controlBlock}
          ${semantic.padding.controlInline};
        cursor: pointer;
        transition:
          background 0.15s,
          color 0.15s,
          border 0.15s,
          box-shadow 0.15s;
        &:focus-visible {
          outline: 2px solid ${semantic.color.border.focus};
          outline-offset: 2px;
        }
        border-width: 1px;
        border-style: solid;
        &:disabled {
          cursor: not-allowed;
          opacity: 0.6;
        }
      `,
			variant(variant, outline, ghost) {
				const v = buttonVariants[variant];
				if (ghost) return v.ghost;
				if (outline) return v.outline;
				return v.solid;
			}
		},
		tag: {
			dot: (color) => css`
        width: ${semantic.space[1]};
        height: ${semantic.space[1]};
        border-radius: 9999px;
        background-color: ${legacyTagColor(color)};
      `,
			base: css`
        display: flex;
        gap: ${semantic.gap.tight};
        box-sizing: border-box;
        background: ${semantic.color.surface.subtle};
        color: ${semantic.color.text.primary};
        border-radius: ${semantic.radius.control};
        font-size: ${semantic.type.bodyXs.size};
        line-height: ${semantic.type.bodyXs.lineHeight};
        font-family: ${semantic.font.body};
        padding: ${semantic.padding.controlBlock}
          ${semantic.padding.controlInline};
        align-items: center;
        font-weight: ${semantic.type.labelSm.weight};
        border: 1px solid ${semantic.color.border.control};
        user-select: none;
        position: relative;
        &::selection,
        & *::selection {
          background: ${semantic.color.state.selectionFill};
          color: ${semantic.color.state.selectionText};
        }
        &:focus-visible {
          outline-offset: 2px;
          outline: 2px solid ${semantic.color.border.focus};
        }
      `,
			label: css`
        font-size: ${semantic.type.bodyXs.size};
        line-height: ${semantic.type.bodyXs.lineHeight};
        font-family: ${semantic.font.body};
        letter-spacing: ${semantic.type.labelSm.tracking};
      `,
			count: css`
        font-size: ${semantic.type.bodyXs.size};
        padding: 0 ${semantic.space[1]};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${semantic.color.text.secondary};
        background-color: ${semantic.color.state.hover};
        border-radius: ${semantic.radius.control};
        line-height: ${semantic.type.bodyXs.lineHeight};
        font-family: ${semantic.font.body};
        font-variant-numeric: tabular-nums;
        min-height: ${semantic.space[4]};
      `
		},
		tree: {
			info: css`
        color: ${semantic.color.text.secondary};
        font-size: ${semantic.type.bodyXs.size};
        margin-right: ${semantic.space[1]};
      `,
			actionButton: css`
        background-color: transparent;
        color: ${semantic.color.text.secondary};
        border: none;
        display: inline-flex;
        padding: 0;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        width: ${semantic.space[3]};
        height: ${semantic.space[3]};
        position: relative;
        z-index: 1;

        &:hover svg {
          color: ${semantic.color.text.primary};
        }

        &:focus-visible {
          border-radius: ${semantic.radius.control};
          outline: 2px solid ${semantic.color.border.focus};
          outline-offset: 2px;
        }
      `,
			actionSuccess: css`
        color: ${semantic.color.status.success.text};
      `,
			actionError: css`
        color: ${semantic.color.status.error.text};
      `,
			expanderContainer: css`
        position: relative;
      `,
			expander: css`
        position: absolute;
        cursor: pointer;
        left: -16px;
        top: 3px;
        & path {
          stroke: ${semantic.color.text.link};
        }
        & svg {
          width: ${semantic.space[3]};
          height: ${semantic.space[3]};
        }

        display: inline-flex;
        align-items: center;
        transition: all 0.1s ease;
        &:focus-visible {
          border-radius: ${semantic.radius.control};
          outline: 2px solid ${semantic.color.border.focus};
          outline-offset: 2px;
        }
      `,
			expandedLine: (hasBorder) => css`
        display: block;
        padding-left: ${semantic.space[3]};
        margin-left: -${semantic.space[3]};
        ${hasBorder ? `border-left: 1px solid ${semantic.color.border.decorative};` : ""}
      `,
			collapsible: css`
        cursor: pointer;
        transition: all 0.2s ease;
        &:hover {
          background-color: ${semantic.color.state.hover};
          border-radius: ${semantic.radius.control};
          padding: 0 ${semantic.space[1]};
        }
      `,
			actions: css`
        display: inline-flex;
        margin-left: ${semantic.space[2]};
        gap: ${semantic.gap.control};
        align-items: center;
        & svg {
          height: 12px;
          width: 12px;
        }
      `,
			valueCollapsed: css`
        color: ${semantic.color.text.secondary};
      `,
			valueFunction: css`
        color: ${semantic.color.syntax.keyword};
      `,
			valueString: css`
        color: ${semantic.color.syntax.string};
      `,
			valueNumber: css`
        color: ${semantic.color.syntax.number};
      `,
			valueBoolean: css`
        color: ${semantic.color.syntax.keyword};
      `,
			valueNull: css`
        color: ${semantic.color.syntax.comment};
        font-style: italic;
      `,
			valueKey: css`
        color: ${semantic.color.syntax.property};
      `,
			valueBraces: css`
        color: ${semantic.color.syntax.punctuation};
      `,
			valueContainer: (isRoot) => css`
        display: block;
        font-family: ${semantic.font.mono};
        &::selection,
        & *::selection {
          background: ${semantic.color.state.selectionFill};
          color: ${semantic.color.state.selectionText};
        }
        & [data-tsd-syntax]::selection {
          background: ${semantic.color.syntax.selectionFill};
          color: ${semantic.color.syntax.selectionText};
        }
        margin-left: ${isRoot ? "0" : semantic.space[4]};

        &:not(:hover) .actions {
          display: none;
        }

        &:hover .actions {
          display: inline-flex;
        }
      `
		},
		header: {
			row: css`
        display: flex;
        justify-content: space-between;
        align-items: center;
        &::selection,
        & *::selection {
          background: ${semantic.color.state.selectionFill};
          color: ${semantic.color.state.selectionText};
        }
        padding: ${semantic.space[2]} ${semantic.space[3]};
        gap: ${semantic.gap.control};
        background: ${semantic.color.surface.elevated};
        color: ${semantic.color.text.primary};
        border-bottom: ${semantic.color.border.decorative} 1px solid;
        align-items: center;
      `,
			logoAndToggleContainer: css`
        display: flex;
        gap: ${semantic.gap.section};
        align-items: center;
        & > button {
          padding: 0;
          background: transparent;
          border: none;
          display: flex;
          gap: ${semantic.gap.tight};
          flex-direction: column;
        }
      `,
			logo: css`
        cursor: pointer;
        display: flex;
        flex-direction: column;
        background-color: transparent;
        border: none;
        gap: ${semantic.gap.tight};
        padding: 0;
        &:hover {
          opacity: 0.7;
        }
        &:focus-visible {
          outline-offset: 2px;
          border-radius: ${semantic.radius.control};
          outline: 2px solid ${semantic.color.border.focus};
        }
      `,
			tanstackLogo: css`
        font-size: ${semantic.type.headingPane.size};
        line-height: ${semantic.type.headingPane.lineHeight};
        font-family: ${semantic.font.display};
        font-weight: ${semantic.type.headingPane.weight};
        white-space: nowrap;
        color: ${semantic.color.text.primary};
      `,
			flavorLogo: (flavorLight, flavorDark) => css`
        font-weight: ${semantic.type.labelSm.weight};
        font-size: ${semantic.type.labelSm.size};
        line-height: ${semantic.type.labelSm.lineHeight};
        font-family: ${semantic.font.body};
        letter-spacing: ${semantic.type.labelSm.tracking};
        color: ${t(flavorLight, flavorDark)};
        white-space: nowrap;
      `
		},
		section: {
			main: css`
        margin-bottom: ${semantic.space[4]};
        padding: ${semantic.space[4]};
        background-color: ${semantic.color.surface.subtle};
        border: 1px solid ${semantic.color.border.decorative};
        border-radius: ${semantic.radius.overlay};
        box-shadow: ${semantic.shadow.xs};
        &::selection,
        & *::selection {
          background: ${semantic.color.state.selectionFill};
          color: ${semantic.color.state.selectionText};
        }
      `,
			title: css`
        font-size: ${semantic.type.headingPane.size};
        line-height: ${semantic.type.headingPane.lineHeight};
        font-weight: ${semantic.type.headingPane.weight};
        color: ${semantic.color.text.primary};
        font-family: ${semantic.font.display};
        margin: 0 0 ${semantic.space[3]} 0;
        padding-bottom: ${semantic.space[2]};
        border-bottom: 1px solid ${semantic.color.border.decorative};
        display: flex;
        align-items: center;
        gap: ${semantic.gap.control};
        text-align: left;
      `,
			icon: css`
        height: 18px;
        width: 18px;
        & > svg {
          height: 100%;
          width: 100%;
        }
        color: ${semantic.color.text.secondary};
      `,
			description: css`
        color: ${semantic.color.text.secondary};
        font: ${semantic.type.bodyXs.weight} ${semantic.type.bodyXs.size} /
          ${semantic.type.bodyXs.lineHeight} ${semantic.font.body};
        margin: 0 0 ${semantic.space[4]} 0;
        text-align: left;
      `
		},
		mainPanel: { panel: (withPadding) => css`
        /* space[4] keeps the panel's own gutter equal to the workbench gutter,
           so a destination's content lines up with the tab strip above it. */
        padding: ${withPadding ? semantic.space[4] : 0};
        background: ${semantic.color.surface.workspace};
        color: ${semantic.color.text.primary};
        overflow-y: auto;
        /* Keep a scroll gesture inside the devtools instead of chaining it on
           to the host page once this panel hits its end. */
        overscroll-behavior: contain;
        scrollbar-width: thin;
        scrollbar-color: ${semantic.color.border.control} transparent;
        &::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        &::-webkit-scrollbar-track {
          background: transparent;
        }
        &::-webkit-scrollbar-thumb {
          background-color: ${semantic.color.border.control};
          border-radius: 999px;
          border: 2px solid transparent;
          background-clip: padding-box;
        }
        &::-webkit-scrollbar-thumb:hover {
          background-color: ${semantic.color.text.muted};
        }
        &::-webkit-scrollbar-corner {
          background: transparent;
        }
        height: 100%;
        &::selection,
        & *::selection {
          background: ${semantic.color.state.selectionFill};
          color: ${semantic.color.state.selectionText};
        }
      ` }
	};
};
function createStyles$1() {
	const { theme } = createTheme$1();
	const [styles, setStyles] = createSignal(stylesFactory$1(theme()));
	createEffect(() => {
		setStyles(stylesFactory$1(theme()));
	});
	return styles;
}
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/components/checkbox.js
var _tmpl$$6 = /* @__PURE__ */ notSup(`<div><label><input data-tsd-control type=checkbox><div>`);
var _tmpl$2$4 = /* @__PURE__ */ notSup(`<span>`);
function Checkbox(props) {
	const styles = createStyles$1();
	const [isChecked, setIsChecked] = createSignal(props.checked || false);
	const descriptionId = `${createUniqueId()}-description`;
	const handleChange = (e) => {
		const checked = e.target.checked;
		setIsChecked(checked);
		props.onChange?.(checked);
	};
	return (() => {
		var _el$ = _tmpl$$6(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild, _el$4 = _el$3.nextSibling;
		_el$3.$$input = handleChange;
		notSup(_el$4, (() => {
			var _c$ = memo(() => !!props.label);
			return () => _c$() && (() => {
				var _el$5 = _tmpl$2$4();
				notSup(_el$5, () => props.label);
				createRenderEffect(() => notSup(_el$5, styles().checkboxLabel));
				return _el$5;
			})();
		})(), null);
		notSup(_el$4, (() => {
			var _c$2 = memo(() => !!props.description);
			return () => _c$2() && (() => {
				var _el$6 = _tmpl$2$4();
				notSup(_el$6, "id", descriptionId);
				notSup(_el$6, () => props.description);
				createRenderEffect(() => notSup(_el$6, styles().checkboxDescription));
				return _el$6;
			})();
		})(), null);
		createRenderEffect((_p$) => {
			var _v$ = styles().checkboxContainer, _v$2 = styles().checkboxWrapper, _v$3 = isChecked() ? "true" : void 0, _v$4 = props.description ? descriptionId : void 0, _v$5 = styles().checkbox, _v$6 = styles().checkboxLabelContainer;
			_v$ !== _p$.e && notSup(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && notSup(_el$2, _p$.t = _v$2);
			_v$3 !== _p$.a && notSup(_el$3, "data-tsd-selected", _p$.a = _v$3);
			_v$4 !== _p$.o && notSup(_el$3, "aria-describedby", _p$.o = _v$4);
			_v$5 !== _p$.i && notSup(_el$3, _p$.i = _v$5);
			_v$6 !== _p$.n && notSup(_el$4, _p$.n = _v$6);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0
		});
		createRenderEffect(() => _el$3.checked = props.checked ?? isChecked());
		return _el$;
	})();
}
notSup(["input"]);
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/components/input.js
var _tmpl$$5 = /* @__PURE__ */ notSup(`<div><div><input data-tsd-control>`);
var _tmpl$2$3 = /* @__PURE__ */ notSup(`<label>`);
var _tmpl$3$3 = /* @__PURE__ */ notSup(`<p>`);
function Input(props) {
	const styles = createStyles$1();
	const [val, setVal] = createSignal(props.value || "");
	const id = createUniqueId();
	const descriptionId = `${id}-description`;
	const handleChange = (e) => {
		const value = e.target.value;
		setVal((prev) => prev !== value ? value : prev);
		props.onChange?.(value);
	};
	return (() => {
		var _el$ = _tmpl$$5(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
		notSup(_el$2, (() => {
			var _c$ = memo(() => !!props.label);
			return () => _c$() && (() => {
				var _el$4 = _tmpl$2$3();
				notSup(_el$4, "for", id);
				notSup(_el$4, () => props.label);
				createRenderEffect(() => notSup(_el$4, styles().inputLabel));
				return _el$4;
			})();
		})(), _el$3);
		notSup(_el$2, (() => {
			var _c$2 = memo(() => !!props.description);
			return () => _c$2() && (() => {
				var _el$5 = _tmpl$3$3();
				notSup(_el$5, "id", descriptionId);
				notSup(_el$5, () => props.description);
				createRenderEffect(() => notSup(_el$5, styles().inputDescription));
				return _el$5;
			})();
		})(), _el$3);
		_el$3.$$input = handleChange;
		notSup(_el$3, "id", id);
		createRenderEffect((_p$) => {
			var _v$ = styles().inputContainer, _v$2 = styles().inputWrapper, _v$3 = props.description ? descriptionId : void 0, _v$4 = props.type || "text", _v$5 = styles().input, _v$6 = props.placeholder;
			_v$ !== _p$.e && notSup(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && notSup(_el$2, _p$.t = _v$2);
			_v$3 !== _p$.a && notSup(_el$3, "aria-describedby", _p$.a = _v$3);
			_v$4 !== _p$.o && notSup(_el$3, "type", _p$.o = _v$4);
			_v$5 !== _p$.i && notSup(_el$3, _p$.i = _v$5);
			_v$6 !== _p$.n && notSup(_el$3, "placeholder", _p$.n = _v$6);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0,
			i: void 0,
			n: void 0
		});
		createRenderEffect(() => _el$3.value = val());
		return _el$;
	})();
}
notSup(["input"]);
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/components/select.js
var _tmpl$$4 = /* @__PURE__ */ notSup(`<div><div><select data-tsd-control>`);
var _tmpl$2$2 = /* @__PURE__ */ notSup(`<label>`);
var _tmpl$3$2 = /* @__PURE__ */ notSup(`<p>`);
var _tmpl$4$3 = /* @__PURE__ */ notSup(`<option>`);
function Select(props) {
	const styles = createStyles$1();
	const [selected, setSelected] = createSignal(props.value ?? props.options[0]?.value);
	const id = createUniqueId();
	const descriptionId = `${id}-description`;
	createEffect(() => {
		if (props.value !== void 0) setSelected(() => props.value);
	});
	const handleChange = (e) => {
		const value = e.target.value;
		const option = props.options.find((candidate) => String(candidate.value) === value);
		if (!option) return;
		setSelected(() => option.value);
		props.onChange?.(option.value);
	};
	return (() => {
		var _el$ = _tmpl$$4(), _el$2 = _el$.firstChild, _el$3 = _el$2.firstChild;
		notSup(_el$2, (() => {
			var _c$ = memo(() => !!props.label);
			return () => _c$() && (() => {
				var _el$4 = _tmpl$2$2();
				notSup(_el$4, "for", id);
				notSup(_el$4, () => props.label);
				createRenderEffect(() => notSup(_el$4, styles().selectLabel));
				return _el$4;
			})();
		})(), _el$3);
		notSup(_el$2, (() => {
			var _c$2 = memo(() => !!props.description);
			return () => _c$2() && (() => {
				var _el$5 = _tmpl$3$2();
				notSup(_el$5, "id", descriptionId);
				notSup(_el$5, () => props.description);
				createRenderEffect(() => notSup(_el$5, styles().selectDescription));
				return _el$5;
			})();
		})(), _el$3);
		_el$3.addEventListener("change", handleChange);
		notSup(_el$3, "id", id);
		notSup(_el$3, () => props.options.map((opt) => (() => {
			var _el$6 = _tmpl$4$3();
			notSup(_el$6, () => opt.label);
			createRenderEffect(() => _el$6.value = opt.value);
			return _el$6;
		})()));
		createRenderEffect((_p$) => {
			var _v$ = styles().selectContainer, _v$2 = styles().selectWrapper, _v$3 = props.description ? descriptionId : void 0, _v$4 = styles().select;
			_v$ !== _p$.e && notSup(_el$, _p$.e = _v$);
			_v$2 !== _p$.t && notSup(_el$2, _p$.t = _v$2);
			_v$3 !== _p$.a && notSup(_el$3, "aria-describedby", _p$.a = _v$3);
			_v$4 !== _p$.o && notSup(_el$3, _p$.o = _v$4);
			return _p$;
		}, {
			e: void 0,
			t: void 0,
			a: void 0,
			o: void 0
		});
		createRenderEffect(() => _el$3.value = selected());
		return _el$;
	})();
}
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/components/icons.js
var _tmpl$4$2 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path><path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M12 2v2"></path><path d="M12 22v-2"></path><path d="m17 20.66-1-1.73"></path><path d="M11 10.27 7 3.34"></path><path d="m20.66 17-1.73-1"></path><path d="m3.34 7 1.73 1"></path><path d="M14 12h8"></path><path d="M2 12h2"></path><path d="m20.66 7-1.73 1"></path><path d="m3.34 17 1.73-1"></path><path d="m17 3.34-1 1.73"></path><path d="m11 13.73-4 6.93">`);
var _tmpl$5$1 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="m10 9-3 3 3 3"></path><path d="m14 15 3-3-3-3"></path><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719">`);
var _tmpl$6$1 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M10 8h.01"></path><path d="M12 12h.01"></path><path d="M14 8h.01"></path><path d="M16 12h.01"></path><path d="M18 8h.01"></path><path d="M6 8h.01"></path><path d="M7 16h10"></path><path d="M8 12h.01"></path><rect width=20 height=16 x=2 y=4 rx=2>`);
var _tmpl$7$1 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx=12 cy=10 r=3>`);
var _tmpl$8$1 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=20 height=20 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1=8 x2=16 y1=12 y2=12>`);
var _tmpl$9$1 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M18 6 6 18"></path><path d="m6 6 12 12">`);
var _tmpl$0$1 = /* @__PURE__ */ notSup(`<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M16.5 9.39999L7.5 4.20999M12 17.5L12 3M21 16V7.99999C20.9996 7.64926 20.9071 7.30481 20.7315 7.00116C20.556 6.69751 20.3037 6.44536 20 6.26999L13 2.26999C12.696 2.09446 12.3511 2.00204 12 2.00204C11.6489 2.00204 11.304 2.09446 11 2.26999L4 6.26999C3.69626 6.44536 3.44398 6.69751 3.26846 7.00116C3.09294 7.30481 3.00036 7.64926 3 7.99999V16C3.00036 16.3507 3.09294 16.6952 3.26846 16.9988C3.44398 17.3025 3.69626 17.5546 4 17.73L11 21.73C11.304 21.9055 11.6489 21.998 12 21.998C12.3511 21.998 12.696 21.9055 13 21.73L20 17.73C20.3037 17.5546 20.556 17.3025 20.7315 16.9988C20.9071 16.6952 20.9996 16.3507 21 16Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
var _tmpl$1$1 = /* @__PURE__ */ notSup(`<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.7088 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.76489 14.1003 1.98232 16.07 2.85999M22 4L12 14.01L9 11.01"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
var _tmpl$10$1 = /* @__PURE__ */ notSup(`<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M15 9L9 15M9 9L15 15M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
var _tmpl$11$1 = /* @__PURE__ */ notSup(`<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M6 9L12 15L18 9"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
var _tmpl$12$1 = /* @__PURE__ */ notSup(`<svg width=18 height=18 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
var _tmpl$13$1 = /* @__PURE__ */ notSup(`<svg width=12 height=12 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M21 13V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H11M15 3H21M21 3V9M21 3L10 14"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
var _tmpl$14$1 = /* @__PURE__ */ notSup(`<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round></path><path d="M19.4 15C19.2669 15.3016 19.2272 15.6362 19.286 15.9606C19.3448 16.285 19.4995 16.5843 19.73 16.82L19.79 16.88C19.976 17.0657 20.1235 17.2863 20.2241 17.5291C20.3248 17.7719 20.3766 18.0322 20.3766 18.295C20.3766 18.5578 20.3248 18.8181 20.2241 19.0609C20.1235 19.3037 19.976 19.5243 19.79 19.71C19.6043 19.896 19.3837 20.0435 19.1409 20.1441C18.8981 20.2448 18.6378 20.2966 18.375 20.2966C18.1122 20.2966 17.8519 20.2448 17.6091 20.1441C17.3663 20.0435 17.1457 19.896 16.96 19.71L16.9 19.65C16.6643 19.4195 16.365 19.2648 16.0406 19.206C15.7162 19.1472 15.3816 19.1869 15.08 19.32C14.7842 19.4468 14.532 19.6572 14.3543 19.9255C14.1766 20.1938 14.0813 20.5082 14.08 20.83V21C14.08 21.5304 13.8693 22.0391 13.4942 22.4142C13.1191 22.7893 12.6104 23 12.08 23C11.5496 23 11.0409 22.7893 10.6658 22.4142C10.2907 22.0391 10.08 21.5304 10.08 21V20.91C10.0723 20.579 9.96512 20.258 9.77251 19.9887C9.5799 19.7194 9.31074 19.5143 9 19.4C8.69838 19.2669 8.36381 19.2272 8.03941 19.286C7.71502 19.3448 7.41568 19.4995 7.18 19.73L7.12 19.79C6.93425 19.976 6.71368 20.1235 6.47088 20.2241C6.22808 20.3248 5.96783 20.3766 5.705 20.3766C5.44217 20.3766 5.18192 20.3248 4.93912 20.2241C4.69632 20.1235 4.47575 19.976 4.29 19.79C4.10405 19.6043 3.95653 19.3837 3.85588 19.1409C3.75523 18.8981 3.70343 18.6378 3.70343 18.375C3.70343 18.1122 3.75523 17.8519 3.85588 17.6091C3.95653 17.3663 4.10405 17.1457 4.29 16.96L4.35 16.9C4.58054 16.6643 4.73519 16.365 4.794 16.0406C4.85282 15.7162 4.81312 15.3816 4.68 15.08C4.55324 14.7842 4.34276 14.532 4.07447 14.3543C3.80618 14.1766 3.49179 14.0813 3.17 14.08H3C2.46957 14.08 1.96086 13.8693 1.58579 13.4942C1.21071 13.1191 1 12.6104 1 12.08C1 11.5496 1.21071 11.0409 1.58579 10.6658C1.96086 10.2907 2.46957 10.08 3 10.08H3.09C3.42099 10.0723 3.742 9.96512 4.0113 9.77251C4.28059 9.5799 4.48572 9.31074 4.6 9C4.73312 8.69838 4.77282 8.36381 4.714 8.03941C4.65519 7.71502 4.50054 7.41568 4.27 7.18L4.21 7.12C4.02405 6.93425 3.87653 6.71368 3.77588 6.47088C3.67523 6.22808 3.62343 5.96783 3.62343 5.705C3.62343 5.44217 3.67523 5.18192 3.77588 4.93912C3.87653 4.69632 4.02405 4.47575 4.21 4.29C4.39575 4.10405 4.61632 3.95653 4.85912 3.85588C5.10192 3.75523 5.36217 3.70343 5.625 3.70343C5.88783 3.70343 6.14808 3.75523 6.39088 3.85588C6.63368 3.95653 6.85425 4.10405 7.04 4.29L7.1 4.35C7.33568 4.58054 7.63502 4.73519 7.95941 4.794C8.28381 4.85282 8.61838 4.81312 8.92 4.68H9C9.29577 4.55324 9.54802 4.34276 9.72569 4.07447C9.90337 3.80618 9.99872 3.49179 10 3.17V3C10 2.46957 10.2107 1.96086 10.5858 1.58579C10.9609 1.21071 11.4696 1 12 1C12.5304 1 13.0391 1.21071 13.4142 1.58579C13.7893 1.96086 14 2.46957 14 3V3.09C14.0013 3.41179 14.0966 3.72618 14.2743 3.99447C14.452 4.26276 14.7042 4.47324 15 4.6C15.3016 4.73312 15.6362 4.77282 15.9606 4.714C16.285 4.65519 16.5843 4.50054 16.82 4.27L16.88 4.21C17.0657 4.02405 17.2863 3.87653 17.5291 3.77588C17.7719 3.67523 18.0322 3.62343 18.295 3.62343C18.5578 3.62343 18.8181 3.67523 19.0609 3.77588C19.3037 3.87653 19.5243 4.02405 19.71 4.21C19.896 4.39575 20.0435 4.61632 20.1441 4.85912C20.2448 5.10192 20.2966 5.36217 20.2966 5.625C20.2966 5.88783 20.2448 6.14808 20.1441 6.39088C20.0435 6.63368 19.896 6.85425 19.71 7.04L19.65 7.1C19.4195 7.33568 19.2648 7.63502 19.206 7.95941C19.1472 8.28381 19.1869 8.61838 19.32 8.92V9C19.4468 9.29577 19.6572 9.54802 19.9255 9.72569C20.1938 9.90337 20.5082 9.99872 20.83 10H21C21.5304 10 22.0391 10.2107 22.4142 10.5858C22.7893 10.9609 23 11.4696 23 12C23 12.5304 22.7893 13.0391 22.4142 13.4142C22.0391 13.7893 21.5304 14 21 14H20.91C20.5882 14.0013 20.2738 14.0966 20.0055 14.2743C19.7372 14.452 19.5268 14.7042 19.4 15Z"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
var _tmpl$15$1 = /* @__PURE__ */ notSup(`<svg width=20 height=20 viewBox="0 0 24 24"fill=none xmlns=http://www.w3.org/2000/svg><path d="M18 6L6 18M6 6L18 18"stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round>`);
var _tmpl$16$1 = /* @__PURE__ */ notSup(`<svg xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"fill=none stroke=currentColor stroke-width=2 stroke-linecap=round stroke-linejoin=round><path d="M2 10h6V4"></path><path d="m2 4 6 6"></path><path d="M21 10V7a2 2 0 0 0-2-2h-7"></path><path d="M3 14v2a2 2 0 0 0 2 2h3"></path><rect x=12 y=14 width=10 height=7 rx=1>`);
function Cogs() {
	return _tmpl$4$2();
}
function SettingsCog() {
	return _tmpl$5$1();
}
function Keyboard() {
	return _tmpl$6$1();
}
function GeoTag() {
	return _tmpl$7$1();
}
function Link() {
	return _tmpl$8$1();
}
function X() {
	return _tmpl$9$1();
}
function PackageIcon() {
	return _tmpl$0$1();
}
function CheckCircleIcon() {
	return _tmpl$1$1();
}
function XCircleIcon() {
	return _tmpl$10$1();
}
function ChevronDownIcon() {
	return _tmpl$11$1();
}
function SearchIcon() {
	return _tmpl$12$1();
}
function ExternalLinkIcon() {
	return _tmpl$13$1();
}
function SettingsIcon() {
	return _tmpl$14$1();
}
function CloseIcon() {
	return _tmpl$15$1();
}
function PiP() {
	return _tmpl$16$1();
}
//#endregion
//#region node_modules/clsx/dist/clsx.mjs
function r(e) {
	var t, f, n = "";
	if ("string" == typeof e || "number" == typeof e) n += e;
	else if ("object" == typeof e) if (Array.isArray(e)) {
		var o = e.length;
		for (t = 0; t < o; t++) e[t] && (f = r(e[t])) && (n && (n += " "), n += f);
	} else for (f in e) e[f] && (n && (n += " "), n += f);
	return n;
}
function clsx() {
	for (var e, t, f = 0, n = "", o = arguments.length; f < o; f++) (e = arguments[f]) && (t = r(e)) && (n && (n += " "), n += t);
	return n;
}
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/components/button.js
var _tmpl$$3 = /* @__PURE__ */ notSup(`<button data-tsd-control>`);
function Button(props) {
	const styles = createStyles$1();
	const classes = createMemo(() => {
		const variant = props.variant || "primary";
		return clsx(styles().button.base, styles().button.variant(variant, props.outline, props.ghost), props.className);
	});
	return (() => {
		var _el$ = _tmpl$$3();
		notSup(_el$, mergeProps(props, { get ["class"]() {
			return classes();
		} }), false, true);
		notSup(_el$, () => props.children);
		return _el$;
	})();
}
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/components/main-panel.js
var _tmpl$$2 = /* @__PURE__ */ notSup(`<div data-tsd-surface>`);
var MainPanel$1 = ({ className: className$1, children, class: classStyles, withPadding }) => {
	const styles = createStyles$1();
	return (() => {
		var _el$ = _tmpl$$2();
		notSup(_el$, children);
		createRenderEffect(() => notSup(_el$, clsx(styles().mainPanel.panel(Boolean(withPadding)), className$1, classStyles)));
		return _el$;
	})();
};
//#endregion
//#region node_modules/@tanstack/devtools-ui/dist/esm/components/section.js
var _tmpl$$1 = /* @__PURE__ */ notSup(`<section data-tsd-surface>`);
var _tmpl$2$1 = /* @__PURE__ */ notSup(`<h3 data-tsd-separator>`);
var _tmpl$3$1 = /* @__PURE__ */ notSup(`<p>`);
var _tmpl$4$1 = /* @__PURE__ */ notSup(`<span>`);
var Section = ({ children, ...rest }) => {
	const styles = createStyles$1();
	return (() => {
		var _el$ = _tmpl$$1();
		notSup(_el$, mergeProps({ get ["class"]() {
			return clsx(styles().section.main, rest.class);
		} }, rest), false, true);
		notSup(_el$, children);
		return _el$;
	})();
};
var SectionTitle = ({ children, ...rest }) => {
	const styles = createStyles$1();
	return (() => {
		var _el$2 = _tmpl$2$1();
		notSup(_el$2, mergeProps({ get ["class"]() {
			return clsx(styles().section.title, rest.class);
		} }, rest), false, true);
		notSup(_el$2, children);
		return _el$2;
	})();
};
var SectionDescription = ({ children, ...rest }) => {
	const styles = createStyles$1();
	return (() => {
		var _el$3 = _tmpl$3$1();
		notSup(_el$3, mergeProps({ get ["class"]() {
			return clsx(styles().section.description, rest.class);
		} }, rest), false, true);
		notSup(_el$3, children);
		return _el$3;
	})();
};
var SectionIcon = ({ children, ...rest }) => {
	const styles = createStyles$1();
	return (() => {
		var _el$4 = _tmpl$4$1();
		notSup(_el$4, mergeProps({ get ["class"]() {
			return clsx(styles().section.icon, rest.class);
		} }, rest), false, true);
		notSup(_el$4, children);
		return _el$4;
	})();
};
//#endregion
//#region node_modules/@tanstack/devtools-event-client/dist/esm/noop.js
/**
* A no-op implementation of `EventClient` with an identical public API.
*
* The package root export resolves to this class outside of development (see
* `index.ts`), so production bundlers can tree-shake the real client away.
* Authors who want devtools events in production should import the real client
* from `@tanstack/devtools-event-client/production` instead.
*/
var EventClientNoOp = class {
	#pluginId;
	constructor({ pluginId }) {
		this.#pluginId = pluginId;
	}
	getPluginId() {
		return this.#pluginId;
	}
	createEventPayload(eventSuffix, payload) {
		return {
			type: `${this.#pluginId}:${eventSuffix}`,
			payload,
			pluginId: this.#pluginId
		};
	}
	emit(_eventSuffix, _payload) {}
	on(_eventSuffix, _cb, _options) {
		return () => {};
	}
	onAll(_cb) {
		return () => {};
	}
	onAllPluginEvents(_cb) {
		return () => {};
	}
};
//#endregion
//#region node_modules/@tanstack/devtools-event-client/dist/esm/index.js
/**
* The real `EventClient` in development; a no-op everywhere else.
*
* Production bundlers replace `process.env.NODE_ENV` with a literal, fold this
* ternary to `EventClientNoOp`, and tree-shake `./plugin` out of the bundle.
* To keep the real client in production, import it from
* `@tanstack/devtools-event-client/production` instead.
*/
var EventClient = EventClientNoOp;
//#endregion
//#region node_modules/@tanstack/devtools-client/dist/esm/index.js
var DevtoolsEventClient = class extends EventClient {
	constructor() {
		super({ pluginId: "tanstack-devtools-core" });
	}
};
var devtoolsEventClient = new DevtoolsEventClient();
//#endregion
//#region node_modules/@tanstack/devtools/dist/devtools/JWB4EURD.js
var JWB4EURD_exports = /* @__PURE__ */ __exportAll({ default: () => DevTools });
var createDevtoolsContext = () => {
	const context = useContext(DevtoolsContext);
	if (context === void 0) throw new Error("createDevtoolsContext must be used within a ShellContextProvider");
	return context;
};
function createTheme() {
	const { settings, setSettings } = createDevtoolsSettings();
	return {
		theme: createMemo(() => settings().theme),
		setTheme: (theme2) => setSettings({ theme: theme2 })
	};
}
var createPlugins = () => {
	const { store, setStore } = createDevtoolsContext();
	const plugins = createMemo(() => store.plugins);
	const activePlugins = createMemo(() => flattenTabs(store.state.layout), [], { equals: (a, b) => a.length === b.length && a.every((id, i) => id === b[i]) });
	const layout = createMemo(() => store.state.layout);
	const setLayout = (next) => {
		setStore((previous) => ({
			...previous,
			state: {
				...previous.state,
				layout: next
			}
		}));
	};
	const toggleActivePlugins = (pluginId) => {
		const current = store.state.layout;
		if (flattenTabs(current).includes(pluginId)) {
			setLayout(closeTab(current, pluginId));
			return;
		}
		if (flattenTabs(current).length >= 18) return;
		setLayout(appendPane(current, pluginId));
	};
	return {
		plugins,
		toggleActivePlugins,
		activePlugins,
		layout,
		setLayout
	};
};
var createDevtoolsState = () => {
	const { store, setStore } = createDevtoolsContext();
	const state = createMemo(() => store.state);
	const setState = (newState) => {
		setStore((previous) => ({
			...previous,
			state: {
				...previous.state,
				...newState
			}
		}));
	};
	return {
		state,
		setState
	};
};
var createDevtoolsSettings = () => {
	const { store, setStore } = createDevtoolsContext();
	const settings = createMemo(() => store.settings);
	const setSettings = (newSettings) => {
		setStore((previous) => ({
			...previous,
			settings: {
				...previous.settings,
				...newSettings
			}
		}));
	};
	return {
		setSettings,
		settings
	};
};
var createPersistOpen = () => {
	const { state, setState } = createDevtoolsState();
	const persistOpen = createMemo(() => state().persistOpen);
	const setPersistOpen = (value) => {
		setState({ persistOpen: value });
	};
	return {
		persistOpen,
		setPersistOpen
	};
};
var createCollapsed = () => {
	const { state, setState } = createDevtoolsState();
	const isCollapsed = createMemo(() => state().subheaderCollapsed);
	const setCollapsed = (value) => {
		const next = typeof value === "function" ? value(state().subheaderCollapsed) : value;
		setState({ subheaderCollapsed: next });
	};
	return {
		isCollapsed,
		toggleCollapsed: () => setCollapsed((previous) => !previous),
		setCollapsed
	};
};
var createStripDrag = () => {
	const { paneDragBridge } = createDevtoolsContext();
	return {
		/** Called by the workspace during setup; cleared when it goes away. */
		acceptStripDrags: (handler) => {
			paneDragBridge.handler = handler;
			onCleanup(() => {
				if (paneDragBridge.handler === handler) paneDragBridge.handler = null;
			});
		},
		/** Called by the strip once a press has been held long enough to be a drag. */
		beginStripDrag: (pluginId, point) => paneDragBridge.handler?.(pluginId, point)
	};
};
var createHeight = () => {
	const { state, setState } = createDevtoolsState();
	const height = createMemo(() => state().height);
	const setHeight = (newHeight) => {
		setState({ height: newHeight });
	};
	return {
		height,
		setHeight
	};
};
var recursivelyChangeTabIndex = (node, remove = true) => {
	if (remove) node.setAttribute("tabIndex", "-1");
	else node.removeAttribute("tabIndex");
	for (const child of node.children) recursivelyChangeTabIndex(child, remove);
};
var createDisableTabbing = (isOpen) => {
	createEffect(() => {
		const el = document.getElementById(TANSTACK_DEVTOOLS);
		if (!el) return;
		recursivelyChangeTabIndex(el, !isOpen());
	});
};
var normalizeHotkey = (keys) => {
	if (!keys.includes("CtrlOrMeta")) return [keys];
	return [keys.map((key) => key === "CtrlOrMeta" ? "Control" : key), keys.map((key) => key === "CtrlOrMeta" ? "Meta" : key)];
};
var getHotkeyPermutations = (hotkey) => {
	return normalizeHotkey(hotkey).flatMap((normalizedHotkey) => {
		const modifiers = normalizedHotkey.filter((key) => keyboardModifiers.includes(key));
		const nonModifiers = normalizedHotkey.filter((key) => !keyboardModifiers.includes(key));
		if (modifiers.length === 0) return [nonModifiers];
		return getAllPermutations(modifiers).map((combo) => [...combo, ...nonModifiers]);
	});
};
var isHotkeyCombinationPressed = (keys, hotkey) => {
	const permutations = getHotkeyPermutations(hotkey);
	const pressedKeys = keys.map((key) => key.toUpperCase());
	return permutations.some((combo) => combo.every((key) => pressedKeys.includes(String(key).toUpperCase())) && pressedKeys.every((key) => combo.map((k) => String(k).toUpperCase()).includes(key)));
};
var WORKBENCH_GEOMETRY_STYLE_ID = "tanstack-devtools-workbench-geometry";
var ensureWorkbenchGeometryStyles = (targetDocument) => {
	if (targetDocument.getElementById(WORKBENCH_GEOMETRY_STYLE_ID)) return;
	const style = targetDocument.createElement("style");
	style.id = WORKBENCH_GEOMETRY_STYLE_ID;
	style.textContent = `
@media (max-width: 360px) {
  .tsd-workbench-wordmark { display: none; }
}
@media (prefers-reduced-motion: reduce) {
  .tsd-workbench-secondary-tabs, .tsd-workbench-secondary-tabs > * { transition: none !important; }
  .tsd-motion-safe { animation: none !important; transition: none !important; transform: none !important; }
  /* Core controls and surfaces animate on hover/active by default; drop all of
     it in one place. Both markers are stamped by core only, so this never
     reaches inside a plugin's own markup. */
  [data-tsd-control], [data-tsd-surface] { transition: none !important; }
}`;
	targetDocument.head.appendChild(style);
};
var fadeIn = h`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
var slideInRight = h`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;
var slideUp = h`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;
var statusFadeIn = h`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
var spin = h`
  to {
    transform: rotate(360deg);
  }
`;
var stylesFactory = (theme) => {
	const semantic = resolveSemanticTheme(theme);
	const css2 = u;
	const thinScrollbars = `
    scrollbar-width: thin;
    scrollbar-color: ${semantic.color.border.control} transparent;
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${semantic.color.border.control};
      border-radius: 999px;
      border: 2px solid transparent;
      background-clip: padding-box;
    }
    &::-webkit-scrollbar-thumb:hover {
      background-color: ${semantic.color.text.muted};
    }
    &::-webkit-scrollbar-corner {
      background: transparent;
    }
  `;
	return {
		seoWorkspace: css2`
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    `,
		seoContent: css2`
      flex: 1 1 auto;
      height: auto;
      min-height: 0;
      overflow-y: auto;
      overscroll-behavior: contain;
      ${thinScrollbars}
    `,
		seoPreviewSection: css2`
      display: flex;
      flex-direction: row;
      gap: 16px;
      margin-bottom: 0;
      justify-content: flex-start;
      align-items: flex-start;
      overflow-x: auto;
      flex-wrap: wrap;
      padding-bottom: 0.5rem;
    `,
		seoPreviewCard: css2`
      border: 1px solid ${semantic.color.border.decorative};
      border-radius: ${semantic.radius.overlay};
      padding: 12px;
      background: ${semantic.color.surface.elevated};
      margin-bottom: 0;
      box-shadow: ${semantic.shadow.xs};
      display: flex;
      flex-direction: column;
      align-items: stretch;
      min-width: 200px;
      max-width: 240px;
      font-size: ${semantic.type.bodySm.size};
      gap: ${semantic.gap.tight};
    `,
		seoPreviewHeader: css2`
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: ${semantic.type.bodyXs.size};
      font-weight: 600;
      letter-spacing: ${semantic.type.labelSm.tracking};
      text-transform: uppercase;
      margin-bottom: 0;
      color: ${semantic.color.text.secondary};
    `,
		/**
		* The network's own brand colour survives as a small dot so the card can
		* still be identified at a glance, without giving every card a different
		* coloured outline.
		*/
		seoPreviewNetworkDot: css2`
      width: 8px;
      height: 8px;
      flex: 0 0 8px;
      border-radius: 50%;
      box-shadow: inset 0 0 0 1px ${semantic.color.state.hover};
      @media (forced-colors: active) {
        forced-color-adjust: none;
      }
    `,
		seoPreviewImage: css2`
      width: 100%;
      max-width: 100%;
      box-sizing: border-box;
      border-radius: ${semantic.radius.group};
      margin-bottom: 6px;
      background: ${semantic.color.surface.subtle};
      height: 120px;
      object-fit: cover;
    `,
		seoPreviewImagePlaceholder: css2`
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${semantic.color.text.muted};
      font-size: ${semantic.type.bodyXs.size};
      border: 1px dashed ${semantic.color.border.decorative};
    `,
		seoPreviewTitle: css2`
      font-family: ${semantic.font.display};
      font-size: ${semantic.type.bodySm.size};
      line-height: ${semantic.type.bodySm.lineHeight};
      font-weight: 700;
      margin-bottom: 2px;
      color: ${semantic.color.text.primary};
    `,
		seoPreviewDesc: css2`
      color: ${semantic.color.text.secondary};
      margin-bottom: 4px;
      font-size: ${semantic.type.bodyXs.size};
      line-height: ${semantic.type.bodyXs.lineHeight};
    `,
		seoPreviewUrl: css2`
      color: ${semantic.color.text.muted};
      font-family: ${semantic.font.mono};
      font-size: 11px;
      margin-bottom: 0;
      word-break: break-all;
    `,
		seoMissingTagsSection: css2`
      margin-top: 6px;
      font-size: ${semantic.type.bodyXs.size};
      line-height: ${semantic.type.bodyXs.lineHeight};
      color: ${semantic.color.status.error.text};
    `,
		seoMissingTagsList: css2`
      margin: 4px 0 0 0;
      padding: 0;
      list-style: none;
      display: flex;
      flex-wrap: wrap;
      gap: 4px;
      max-width: 240px;
    `,
		seoMissingTag: css2`
      background: ${semantic.color.status.error.subtleFill};
      color: ${semantic.color.status.error.text};
      border-radius: ${semantic.radius.control};
      padding: 2px 6px;
      font-family: ${semantic.font.mono};
      font-size: 11px;
      font-weight: 500;
    `,
		serpPreviewBlock: css2`
      margin-bottom: ${16}px;
      &:last-child {
        margin-bottom: 0;
      }
    `,
		serpPreviewLabel: css2`
      font-size: ${semantic.type.bodyXs.size};
      font-weight: 600;
      letter-spacing: ${semantic.type.labelSm.tracking};
      text-transform: uppercase;
      margin-bottom: 6px;
      color: ${semantic.color.text.secondary};
    `,
		serpSnippet: css2`
      border: 1px solid ${semantic.color.border.decorative};
      border-radius: 8px;
      padding: 1rem 1.25rem;
      background: ${semantic.color.surface.elevated};
      max-width: 600px;
      font-family: ${semantic.font.body};
      box-shadow: ${semantic.shadow.xs};
    `,
		serpSnippetMobile: css2`
      border: 1px solid ${semantic.color.border.decorative};
      border-radius: 8px;
      padding: 1rem 1.25rem;
      background: ${semantic.color.surface.elevated};
      max-width: 380px;
      font-family: ${semantic.font.body};
      box-shadow: ${semantic.shadow.xs};
    `,
		serpSnippetDescMobile: css2`
      font-size: 0.875rem;
      color: ${semantic.color.text.secondary};
      margin: 0;
      line-height: 1.5;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    `,
		serpSnippetTopRow: css2`
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 8px;
    `,
		serpSnippetFavicon: css2`
      width: 28px;
      height: 28px;
      border-radius: 50%;
      flex-shrink: 0;
      object-fit: contain;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
		serpSnippetDefaultFavicon: css2`
      width: 28px;
      height: 28px;
      background-color: ${semantic.color.surface.subtle};
      border-radius: 50%;
      flex-shrink: 0;
      object-fit: contain;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    `,
		serpSnippetSiteColumn: css2`
      display: flex;
      flex-direction: column;
      gap: 0;
      min-width: 0;
    `,
		serpSnippetSiteName: css2`
      font-size: 0.875rem;
      color: ${semantic.color.text.primary};
      line-height: 1.4;
      margin: 0;
    `,
		serpSnippetSiteUrl: css2`
      font-size: 0.75rem;
      color: ${semantic.color.text.muted};
      line-height: 1.4;
      margin: 0;
    `,
		serpSnippetTitle: css2`
      font-size: 1.25rem;
      font-weight: 400;
      color: ${semantic.color.text.link};
      margin: 0 0 4px 0;
      line-height: 1.3;
    `,
		serpSnippetDesc: css2`
      font-size: 0.875rem;
      color: ${semantic.color.text.secondary};
      margin: 0;
      line-height: 1.5;
    `,
		serpErrorList: css2`
      margin: 4px 0 0 0;
      padding-left: 1.25rem;
      list-style-type: disc;
    `,
		serpReportItem: css2`
      margin-top: 0.25rem;
      color: ${semantic.color.status.error.text};
      font-size: 0.875rem;
    `,
		devtoolsPanelContainer: (panelLocation, isDetached) => css2`
      direction: ltr;
      position: fixed;
      overflow: visible;
      ${panelLocation}: 0;
      inset-inline: 0;
      z-index: 99999;
      inline-size: 100%;
      max-inline-size: 100%;
      box-sizing: border-box;
      ${isDetached ? "" : "max-height: 90%;"}
      border: 0;
      box-shadow: none;
      transition: transform 160ms ease-out;
      @media (prefers-reduced-motion: reduce) {
        transition-duration: 0ms;
      }
    `,
		devtoolsPanelContainerVisibility: (isOpen) => {
			return css2`
        visibility: ${isOpen ? "visible" : "hidden"};
        height: ${isOpen ? "auto" : "0"};
      `;
		},
		devtoolsPanelContainerResizing: (isResizing) => {
			if (isResizing()) return css2`
          transition: none;
        `;
			return css2`
        transition: transform 160ms ease-out;
        @media (prefers-reduced-motion: reduce) {
          transition-duration: 0ms;
        }
      `;
		},
		devtoolsDrawerContent: css2`
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
    `,
		devtoolsPanel: css2`
      display: grid;
      font-size: ${semantic.type.bodySm.size};
      font-family: ${semantic.font.body};
      background-color: ${semantic.color.surface.workspace};
      color: ${semantic.color.text.primary};
      width: 100%;
      max-width: 100%;
      min-width: 0;
      box-sizing: border-box;
      grid-template-rows: ${36}px minmax(0, 1fr);
      /* The strip row is auto-sized so the strip's own animated height drives
         it — a fixed 44px row would snap instead of sliding. */
      &:has([data-testid='plugins-strip']) {
        grid-template-rows: ${36}px auto minmax(0, 1fr);
      }
      overflow-x: hidden;
      overflow-y: hidden;
      height: 100%;
    `,
		workbenchHeader: css2`
      display: flex;
      align-items: center;
      gap: ${semantic.gap.control};
      min-width: 0;
      height: ${36}px;
      /* No trailing gutter: the action icons run to the panel edge. */
      padding: 0 0 0 ${16}px;
      box-sizing: border-box;
      background: ${semantic.color.surface.brand};
      color: ${semantic.color.text.mutedOnBrand};
      /* A translucent ink rule, not border.decorative — decorative *is* the
         cream brand surface, so it disappears on the chrome band itself. */
      border-bottom: 1px solid ${semantic.color.state.pressed};
      & button {
        min-width: 28px;
        height: 100%;
        box-sizing: border-box;
        border: 0;
        border-radius: 0;
        background: transparent;
        color: inherit;
        font: inherit;
        cursor: pointer;
      }
      & button {
        transition: all 0.3s ease;
      }
      & button:hover:not([data-tsd-selected='true']) {
        background: ${semantic.color.state.hover};
      }
      @media (prefers-reduced-motion: reduce) {
        & button {
          transition: none;
        }
      }
      & button:focus-visible {
        outline: 2px solid ${semantic.color.border.focus};
        outline-offset: 2px;
      }
      @media (max-width: 430px) {
        gap: ${semantic.gap.tight};
        padding-inline-start: ${12}px;
        & button {
          min-width: 24px;
        }
      }
      @media (max-width: 360px) {
        gap: 2px;
        padding-inline-start: 4px;
        & button {
          padding-inline: 3px;
          font-size: 11px;
        }
      }
    `,
		workbenchLogo: css2`
      display: inline-flex;
      align-items: center;
      width: 16px;
      height: 21px;
      flex: 0 0 16px;
      color: ${semantic.color.text.primary};
      & > svg {
        width: 100%;
        height: 100%;
      }
      @media (max-width: 360px) {
        width: 14px;
        height: 18px;
        flex-basis: 14px;
      }
    `,
		workbenchDestinations: css2`
      display: inline-flex;
      align-items: stretch;
      align-self: stretch;
      gap: 0;
      /* The destinations are the part that must survive a narrow panel: let
         them scroll rather than letting flex squeeze the labels together. */
      min-width: 0;
      flex: 0 1 auto;
      overflow-x: auto;
      overflow-y: hidden;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
      margin: 0;
      padding: 0;
      & > button {
        flex: 0 0 auto;
      }
    `,
		workbenchNavButton: css2`
      margin: 0;
      padding-inline: 10px;
      font-size: ${semantic.type.bodyXs.size};
      font-weight: ${semantic.type.labelSm.weight};
      letter-spacing: ${semantic.type.labelSm.tracking};
      color: ${semantic.color.text.mutedOnBrand};
      &[data-tsd-selected='true'] {
        background: ${semantic.color.state.pressed};
        color: ${semantic.color.text.primary};
        font-weight: 700;
      }
      @media (max-width: 361px) {
        padding-inline: 4px;
      }
    `,
		workbenchActions: css2`
      display: inline-flex;
      align-items: center;
      gap: ${semantic.gap.tight};
      height: 100%;
      margin-left: auto;
      @media (max-width: 360px) {
        gap: 0;
      }
    `,
		workbenchActionButton: css2`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: ${36}px;
      min-width: ${36}px;
      height: ${36}px;
      flex: 0 0 ${36}px;
      padding: 0;
      color: ${semantic.color.text.mutedOnBrand};
      & svg {
        width: 20px;
        height: 20px;
      }
      &[data-tsd-selected='true'] {
        background: ${semantic.color.state.pressed};
        color: ${semantic.color.text.primary};
      }
      @media (max-width: 360px) {
        width: 32px;
        min-width: 32px;
        flex-basis: 32px;
      }
    `,
		/**
		* A pull tab protruding from the bottom edge of the lowest chrome band —
		* below the secondary strip when one is on screen, below the header when
		* not. It is positioned against the panel rather than nested inside the
		* strip, because the strip scrolls horizontally and would clip it.
		*
		* Collapsed is the exception: the panel is then only as tall as the header
		* and sits flush against the viewport edge, so a downward tab would be off
		* screen. There it flips to the panel's outer edge instead.
		*/
		/**
		* A pull tab protruding from the bottom edge of the subheader, dropping back
		* to the header's bottom edge once the subheader is folded away — so it
		* always hangs off whatever chrome band is lowest, always inside the panel.
		*
		* It is positioned against the panel rather than nested inside the strip,
		* because the strip scrolls horizontally and would clip it. Both bands are
		* border-box, so their hairlines already sit inside these heights.
		*/
		workbenchCollapseToggle: (isCollapsed) => css2`
      position: absolute;
      top: ${isCollapsed ? 36 : 80}px;
      inset-inline-end: 7%;
      z-index: 10;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 44px;
      height: 20px;
      box-sizing: border-box;
      padding: 0;
      /* Open at the top so it reads as attached to the band above it. */
      border: 1px solid ${semantic.color.state.pressed};
      border-top: 0;
      border-radius: 0 0 ${semantic.radius.group} ${semantic.radius.group};
      background: ${semantic.color.surface.brand};
      color: ${semantic.color.text.mutedOnBrand};
      cursor: pointer;
      transition: all 0.3s ease;
      &:hover {
        height: 24px;
        color: ${semantic.color.text.primary};
        background: ${semantic.color.surface.subtle};
      }
      &:focus-visible {
        outline: 2px solid ${semantic.color.border.focus};
        outline-offset: 2px;
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
        &:hover {
          height: 20px;
        }
      }
    `,
		workbenchCollapseIcon: css2`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
      & svg {
        width: 18px;
        height: 18px;
      }
      @media (prefers-reduced-motion: reduce) {
        transition-duration: 0ms;
      }
    `,
		workbenchWordmark: css2`
      white-space: nowrap;
      /* A wordmark is display type, not body copy. */
      font-family: ${semantic.font.display};
      font-size: ${semantic.type.headingCompact.size};
      font-weight: ${semantic.type.headingCompact.weight};
      line-height: ${semantic.type.headingCompact.lineHeight};
      letter-spacing: -0.01em;
      color: ${semantic.color.text.primary};
      margin-inline-end: ${semantic.space[2]};
      /* Give up the wordmark before the destination labels start colliding —
         the emblem still carries the branding. */
      @media (max-width: 560px) {
        display: none;
      }
    `,
		/**
		* The subheader slides rather than disappearing: it stays mounted and
		* animates its own height to zero, and the panel's strip row is auto-sized
		* so the row follows it. Folded it is `inert` so nothing inside stays
		* focusable behind a zero-height band.
		*/
		workbenchSecondaryTabs: (collapsed) => css2`
      display: flex;
      align-items: center;
      gap: ${semantic.gap.control};
      min-width: 0;
      box-sizing: border-box;
      padding-block: ${collapsed ? "0px" : "6px"};
      padding-inline-start: ${16}px;
      padding-inline-end: ${16}px;
      scroll-padding-inline-start: ${16}px;
      scroll-padding-inline-end: ${16}px;
      height: ${collapsed ? 0 : 44}px;
      min-height: 0;
      flex: 0 0 auto;
      opacity: ${collapsed ? 0 : 1};
      /* Chrome band: the strip belongs to the header, not to the canvas. */
      background: ${semantic.color.surface.brand};
      border-bottom: ${collapsed ? "0" : "1px"} solid
        ${semantic.color.state.pressed};
      overflow-x: ${collapsed ? "hidden" : "auto"};
      overflow-y: hidden;
      white-space: nowrap;
      ${thinScrollbars}
      transition: opacity 0.3s ease, height 0.3s ease, padding 0.3s ease,
        border-color 0.3s ease;
      /* Tabs must not shift as the strip scrolls, but they still animate their
         own hover and selected states. */
      & > * {
        transform: none;
      }
      & > :last-child {
        scroll-margin-inline-end: ${16}px;
      }
      @media (max-width: 430px) {
        padding-inline: ${12}px;
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		workbenchSecondaryTab: css2`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      /* A plugin entry can be dragged down into the workspace to place its pane,
         so it advertises that rather than looking like a plain button. */
      &[data-plugin-title-control] {
        cursor: grab;
      }
      min-height: 32px;
      padding: ${semantic.padding.controlBlock}
        ${semantic.padding.controlInline};
      border: 1px solid transparent;
      border-radius: ${semantic.radius.control};
      background: transparent;
      color: ${semantic.color.text.secondary};
      font-family: ${semantic.font.body};
      font-size: ${semantic.type.labelSm.size};
      font-weight: ${semantic.type.labelSm.weight};
      line-height: ${semantic.type.labelSm.lineHeight};
      letter-spacing: ${semantic.type.labelSm.tracking};
      cursor: pointer;
      flex: 0 0 auto;
      appearance: none;
      transition: all 0.3s ease;
      &:hover {
        background: ${semantic.color.state.hover};
        color: ${semantic.color.text.primary};
      }
      &[data-tsd-selected='true'] {
        background: ${semantic.color.state.selectionFill};
        border-color: ${semantic.color.state.selectionFill};
        color: ${semantic.color.state.selectionText};
      }
      &:focus-visible {
        outline: 2px solid ${semantic.color.border.focus};
        outline-offset: 2px;
      }
    `,
		pluginTitleText: css2`
      margin: 0;
      color: inherit;
      font-family: ${semantic.font.body};
      font-size: inherit;
      font-weight: inherit;
      line-height: inherit;
      letter-spacing: inherit;
    `,
		/**
		* A thin bar sitting on the panel's own edge. It must NOT be grown into a
		* fat hit area: at 24px tall it covered the top of the 36px header, so a
		* press aimed at a header button started a resize instead — which is what
		* made dragging feel like click, drag, click.
		*/
		dragHandle: (panelLocation) => css2`
      position: absolute;
      left: 0;
      ${panelLocation === "bottom" ? "top" : "bottom"}: 0;
      width: 100%;
      height: 5px;
      cursor: row-resize;
      user-select: none;
      touch-action: none;
      z-index: 100000;
      background-color: transparent;
      transition: all 0.3s ease;
      &:hover,
      &:focus-visible {
        background-color: ${semantic.color.border.control};
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		mainCloseBtn: css2`
      background: transparent;
      position: fixed;
      z-index: 99999;
      display: inline-flex;
      width: fit-content;
      cursor: pointer;
      appearance: none;
      border: 0;
      align-items: center;
      padding: 0;
      font-size: ${semantic.type.bodyXs.size};
      cursor: pointer;
      transition: opacity 0.25s ease-out;
      &:hide-until-hover {
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      }
      &:hide-until-hover:hover {
        opacity: 1;
        pointer-events: auto;
        visibility: visible;
      }
    `,
		mainCloseBtnDefault: css2`
      /* The rainbow mark paints its own circle. Keep the button transparent
         so a theme fill does not frame or wash over it. 56px matches the
         trigger size before the square chip. */
      background: transparent;
      width: 56px;
      height: 56px;
      justify-content: center;
      border-radius: 50%;
      box-shadow:
        inset 0 0 0 1px transparent,
        ${semantic.shadow.sm};
      /* Never transition left/top: floating mode writes those inline on every
         pointer move, and animating them makes the mark lag then overshoot. */
      transition:
        opacity 0.3s ease,
        box-shadow 0.3s ease,
        scale 0.3s ease;
      & > svg {
        display: block;
        width: 100%;
        height: 100%;
        outline: none;
      }
      /*
       * Hover keeps the rainbow fill: this chip floats over the user's page,
       * so a translucent overlay would muddy the gradient. Hover brings in
       * the edge ring and scales the chip up a touch.
       *
       * It animates the scale property rather than a transform: floating mode
       * sets transform inline to drive the drag, so a transform here would be
       * overridden and never apply.
       */
      &:hover {
        box-shadow:
          inset 0 0 0 1px ${semantic.color.border.control},
          ${semantic.shadow.overlay};
        scale: 1.06;
      }
      &:active {
        scale: 0.98;
      }
      @media (prefers-reduced-motion: reduce) {
        transition-property: opacity;
        &:hover,
        &:active {
          scale: 1;
        }
      }
      &:focus-visible {
        outline: 2px solid ${semantic.color.border.focus};
        outline-offset: 2px;
      }
    `,
		mainCloseBtnFloating: css2`
      /* Floating placement is driven by inline left/top, so don't animate
         position (would fight the drag/throw rAF loop). The hover treatment
         uses box-shadow and scale, both of which are safe to keep. */
      transition:
        opacity 0.3s ease,
        box-shadow 0.3s ease,
        scale 0.3s ease,
        background-color 0.3s ease,
        color 0.3s ease;
      /* Stays a pointer even though it is draggable: the trigger reads as a
         button first, and a grab cursor made it look like a handle. */
      cursor: pointer;
      touch-action: none;
      user-select: none;
    `,
		mainCloseBtnPosition: (position) => {
			return css2`
        ${position === "top-left" ? `top: ${semantic.space[2]}; left: ${semantic.space[2]};` : ""}
        ${position === "top-right" ? `top: ${semantic.space[2]}; right: ${semantic.space[2]};` : ""}
        ${position === "middle-left" ? `top: 50%; left: ${semantic.space[2]}; transform: translateY(-50%);` : ""}
        ${position === "middle-right" ? `top: 50%; right: ${semantic.space[2]}; transform: translateY(-50%);` : ""}
        ${position === "bottom-left" ? `bottom: ${semantic.space[2]}; left: ${semantic.space[2]};` : ""}
        ${position === "bottom-right" ? `bottom: ${semantic.space[2]}; right: ${semantic.space[2]};` : ""}
      `;
		},
		mainCloseBtnAnimation: (isOpen, hideUntilHover) => {
			if (!isOpen) return hideUntilHover ? css2`
              opacity: 0;

              &:hover {
                opacity: 1;
                pointer-events: auto;
                visibility: visible;
              }
            ` : css2`
              opacity: 1;
              pointer-events: auto;
              visibility: visible;
            `;
			return css2`
        opacity: 0;
        pointer-events: none;
        visibility: hidden;
      `;
		},
		tabContent: css2`
      transition: all 0.2s ease-in-out;
      width: 100%;
      max-width: 100%;
      min-width: 0;
      height: 100%;
      box-sizing: border-box;
      overflow-x: hidden;
    `,
		/**
		* A plugin's mount target, and the scroll boundary between that plugin and
		* the host page.
		*
		* `overscroll-behavior: contain` belongs HERE and on the other outermost
		* destination scrollers only — never on their descendants. Plugins nest
		* several `overflow: auto` wrappers that often have nothing to scroll; a
		* wheel over one of those is meant to chain up to this element. Containing
		* every descendant turns each empty wrapper into a dead end and the pane
		* stops scrolling altogether.
		*/
		pluginsTabContent: css2`
      /*
       * A positioning context per pane. Plugins position their own chrome
       * absolutely and assume their own root is the containing block, but a
       * plugin root is often statically positioned — without this, a top-zero
       * offset resolves against the whole Workbench and the plugin paints its
       * controls over our header. With three panes open they would all pile
       * into the same corner.
       */
      position: relative;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      overflow-y: auto;
      overflow-x: hidden;
      overscroll-behavior: contain;
      ${thinScrollbars}
      background: ${semantic.color.surface.workspace};
      border-radius: 0 0 ${semantic.radius.overlay} ${semantic.radius.overlay};
    `,
		pluginsEmptyState: css2`
      display: flex;
      flex: 1 1 auto;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: ${semantic.gap.control};
      min-width: 0;
      padding: ${16}px;
      text-align: center;
      background: ${semantic.color.surface.workspace};
    `,
		pluginsEmptyStateIcon: css2`
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      margin-bottom: ${semantic.space[1]};
      border-radius: 50%;
      background: ${semantic.color.surface.subtle};
      color: ${semantic.color.text.muted};
      & svg {
        width: 22px;
        height: 22px;
      }
    `,
		pluginsEmptyStateTitle: css2`
      margin: 0;
      font-family: ${semantic.font.display};
      font-size: ${semantic.type.headingPane.size};
      font-weight: ${semantic.type.headingPane.weight};
      line-height: ${semantic.type.headingPane.lineHeight};
      color: ${semantic.color.text.primary};
    `,
		pluginsEmptyStateHint: css2`
      margin: 0;
      max-width: 42ch;
      font-size: ${semantic.type.bodySm.size};
      font-weight: ${semantic.type.bodySm.weight};
      line-height: ${semantic.type.bodySm.lineHeight};
      color: ${semantic.color.text.secondary};
    `,
		/**
		* The panes' permanent home. Every pane is a direct child for its whole
		* life and is placed with inline offsets computed from the layout tree, so
		* a drag never re-parents it. That is what stops an iframe plugin reloading
		* and a canvas plugin losing its context every time the layout changes.
		*/
		pluginWorkspace: css2`
      position: relative;
      width: 100%;
      height: 100%;
      min-width: 0;
      min-height: 0;
      overflow: hidden;
      background: ${semantic.color.surface.brand};
    `,
		/**
		* Off-screen but still announced. Used for the live region that narrates
		* picking a pane up and putting it down, which is the only feedback a
		* screen-reader user gets from a move.
		*/
		pluginSrOnly: css2`
      position: absolute;
      width: 1px;
      height: 1px;
      margin: -1px;
      padding: 0;
      overflow: hidden;
      clip-path: inset(50%);
      white-space: nowrap;
      border: 0;
    `,
		/** A group's tab bar, sitting along the top edge of the group's rect. */
		pluginGroupTabs: css2`
      display: flex;
      align-items: stretch;
      gap: ${semantic.gap.tight};
      height: ${32}px;
      min-width: 0;
      padding: ${semantic.space[1]};
      box-sizing: border-box;
      overflow-x: auto;
      overflow-y: hidden;
      white-space: nowrap;
      ${thinScrollbars}
      background: ${semantic.color.surface.workspace};
      border-radius: ${semantic.radius.overlay} ${semantic.radius.overlay} 0 0;
    `,
		/**
		* Presentational wrapper holding the two sibling controls of one tab. They
		* are siblings rather than nested because a button inside a button is
		* invalid, and the inner one would be unreachable by keyboard.
		*/
		pluginGroupTabItem: css2`
      position: relative;
      display: inline-flex;
      align-items: stretch;
      flex: 0 0 auto;
      max-width: 200px;
      background: transparent;
      border: 0;
      border-radius: ${semantic.radius.control};
      box-sizing: border-box;
      transition: background 0.2s ease;
      &[data-tsd-selected='true'] {
        background: ${semantic.color.surface.brand};
      }
      &:hover:not([data-tsd-selected='true']) {
        background: ${semantic.color.state.hover};
      }
      &[data-tsd-held='true'] {
        outline: 2px solid ${semantic.color.border.focus};
        outline-offset: -2px;
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		/** The sortable item: exactly the draggable part of a tab, nothing else. */
		pluginGroupTabRow: css2`
      display: inline-flex;
      align-items: stretch;
      min-width: 0;
    `,
		pluginGroupTab: css2`
      display: inline-flex;
      align-items: center;
      min-width: 0;
      /* Room at the end for the close button, which sits over this one. */
      padding-inline: 8px 28px;
      border: 0;
      border-radius: 0;
      background: transparent;
      color: ${semantic.color.text.mutedOnBrand};
      font-family: ${semantic.font.body};
      font-size: ${semantic.type.bodyXs.size};
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      cursor: grab;
      &[aria-pressed='true'] {
        color: ${semantic.color.text.primary};
        cursor: default;
      }
    `,
		/**
		* 24px square, the smallest target WCAG 2.5.8 accepts, laid over the right end
		* of the tab. Positioned rather than in flow so it is a sibling of the
		* sortable row: the drag engine finds its target by walking up the tree, so a
		* close button nested inside the row would always be a drag surface.
		*/
		pluginGroupTabClose: css2`
      position: absolute;
      inset-inline-end: 2px;
      top: 50%;
      transform: translateY(-50%);
      z-index: 1;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      padding: 0;
      border: 0;
      border-radius: 2px;
      background: transparent;
      color: ${semantic.color.text.mutedOnBrand};
      cursor: pointer;
      &:hover {
        background: ${semantic.color.state.pressed};
      }
      & svg {
        width: 10px;
        height: 10px;
      }
    `,
		/**
		* A gutter between two panes of one split. It is a real focusable separator
		* so it can be driven from the keyboard, matching the whole-panel resizer.
		*/
		pluginSplitter: (dir) => css2`
      position: absolute;
      z-index: 20;
      box-sizing: border-box;
      background: transparent;
      cursor: ${dir === "row" ? "col-resize" : "row-resize"};
      touch-action: none;
      user-select: none;
      pointer-events: auto;
      &::after {
        content: '';
        position: absolute;
        pointer-events: none;
        background: transparent;
        border-radius: 999px;
        transition: background-color 0.15s ease;
        ${dir === "row" ? "top: 8px; bottom: 8px; left: 50%; width: 4px; transform: translateX(-50%);" : "left: 8px; right: 8px; top: 50%; height: 4px; transform: translateY(-50%);"}
      }
      &:hover::after,
      &:focus-visible::after {
        background: ${semantic.color.border.focus};
      }
      @media (prefers-reduced-motion: reduce) {
        &::after {
          transition: none;
        }
      }
      @media (forced-colors: active) {
        &:hover::after,
        &:focus-visible::after {
          background: Highlight;
        }
      }
    `,
		/**
		* The tab that follows the cursor while dragging, so it is obvious which pane
		* is being carried. Pointer-transparent, or it would sit between the pointer
		* and the drop zone being aimed at.
		*/
		pluginDragPreview: css2`
      position: fixed;
      z-index: 2147483646;
      display: inline-flex;
      align-items: center;
      gap: 6px;
      max-width: 220px;
      height: ${32}px;
      padding-inline: 10px;
      box-sizing: border-box;
      pointer-events: none;
      border: 1px solid ${semantic.color.border.focus};
      border-radius: 3px;
      background: ${semantic.color.surface.brand};
      color: ${semantic.color.text.primary};
      font-family: ${semantic.font.body};
      font-size: ${semantic.type.bodyXs.size};
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      opacity: 0.95;
      /* Sits just off the cursor so it never covers the pointer itself. */
      transform: translate(12px, 12px);
      @media (forced-colors: active) {
        border-color: Highlight;
      }
    `,
		/**
		* While a pane is being carried, every surface *inside the panel* shows the
		* grabbing cursor — the pointer travels well outside the tab it started on.
		* Applied to the panel, never to `<html>`: the host page's cursor is not ours
		* to change.
		*/
		pluginDraggingCursor: css2`
      &,
      & * {
        cursor: grabbing !important;
      }
    `,
		/** The highlight that shows where a dragged tab would land. */
		pluginDropOverlay: css2`
      position: absolute;
      z-index: 3;
      pointer-events: none;
      box-sizing: border-box;
      border: 2px solid ${semantic.color.border.focus};
      background: ${semantic.color.state.hover};
      @media (forced-colors: active) {
        border-color: Highlight;
      }
    `,
		pluginPaneSeparator: css2`
      flex: 0 0 1px;
      align-self: stretch;
      /* Plugins paint their own surface, which may be lighter or darker than
         ours, so this rule needs a mid tone that shows against both. */
      background: ${semantic.color.border.control};
      @media (forced-colors: active) {
        background: CanvasText;
      }
    `,
		settingsGroup: css2`
      display: flex;
      flex-direction: column;
      gap: 0.75rem;
    `,
		conditionalSetting: css2`
      margin-top: ${semantic.space[2]};
      margin-inline-start: ${16}px;
      padding: ${semantic.space[3]};
      border-inline-start: 2px solid ${semantic.color.border.decorative};
      background-color: ${semantic.color.surface.subtle};
      border-start-end-radius: ${semantic.radius.group};
      border-end-end-radius: ${semantic.radius.group};
    `,
		settingRow: css2`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;

      @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `,
		settingsModifiers: css2`
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    `,
		hotkeyTitle: css2`
      margin: 0;
      font-family: ${semantic.font.display};
      font-size: ${semantic.type.headingCompact.size};
      line-height: ${semantic.type.headingCompact.lineHeight};
      font-weight: ${semantic.type.headingCompact.weight};
      color: ${semantic.color.text.primary};
    `,
		hotkeyDescription: css2`
      margin: 0;
      font-size: ${semantic.type.bodyXs.size};
      line-height: ${semantic.type.bodyXs.lineHeight};
      color: ${semantic.color.text.secondary};
    `,
		hotkeyResult: css2`
      display: flex;
      align-items: center;
      gap: 6px;
      margin: 0;
      font-size: ${semantic.type.bodyXs.size};
      color: ${semantic.color.text.secondary};
    `,
		hotkeyResultKeys: css2`
      padding: 1px 6px;
      border: 1px solid ${semantic.color.border.decorative};
      border-radius: ${semantic.radius.control};
      background: ${semantic.color.surface.subtle};
      color: ${semantic.color.text.primary};
      font-family: ${semantic.font.mono};
      font-size: 11px;
    `,
		settingsStack: css2`
      display: flex;
      flex-direction: column;
      gap: 1rem;
    `,
		pluginMarketplace: css2`
      position: relative;
      display: flex;
      flex-direction: column;
      font-family: ${semantic.font.body};
      color: ${semantic.color.text.primary};
      width: 100%;
      min-width: 0;
      max-width: 100%;
      box-sizing: border-box;
      height: 100%;
      min-height: 0;
      overflow: hidden;
      background: ${semantic.color.surface.workspace};
      animation: ${fadeIn} 0.3s ease;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `,
		pluginMarketplaceScroll: css2`
      flex: 1 1 auto;
      min-height: 0;
      min-width: 0;
      box-sizing: border-box;
      overflow-y: auto;
      overscroll-behavior: contain;
      ${thinScrollbars}
      padding: ${16}px;
      @media (max-width: 430px) {
        padding: ${12}px;
      }
    `,
		pluginMarketplaceHeader: css2`
      margin-bottom: ${16}px;
      padding-bottom: ${semantic.space[3]};
      border-bottom: 1px solid ${semantic.color.border.decorative};
    `,
		pluginMarketplaceTitleRow: css2`
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: ${16}px;
      margin-bottom: 0;
      flex-wrap: wrap;
    `,
		/** Title + description stay together so the search box can't split them. */
		pluginMarketplaceTitleBlock: css2`
      display: flex;
      flex-direction: column;
      gap: ${semantic.gap.tight};
      min-width: 0;
    `,
		pluginMarketplaceControls: css2`
      display: flex;
      align-items: center;
      flex: 1 1 320px;
      width: 100%;
      max-width: 448px;
      min-width: 0;
      margin-left: auto;
    `,
		pluginMarketplaceTitle: css2`
      font-family: ${semantic.font.display};
      font-size: 1.125rem;
      line-height: 1.3;
      font-weight: 700;
      color: ${semantic.color.text.primary};
      margin: 0;
      letter-spacing: -0.02em;
    `,
		pluginMarketplaceDescription: css2`
      font-size: ${semantic.type.bodyXs.size};
      line-height: ${semantic.type.bodyXs.lineHeight};
      color: ${semantic.color.text.secondary};
      margin: 0;
      max-width: 72ch;
    `,
		pluginMarketplaceSearchWrapper: css2`
      position: relative;
      display: flex;
      align-items: center;
      flex: 1 1 0%;
      width: auto;
      max-width: 400px;
      min-width: 0;
      @media (max-width: 430px) {
        width: 100%;
        max-width: none;
      }

      svg {
        position: absolute;
        left: 8px;
        width: 14px;
        height: 14px;
        color: ${semantic.color.text.muted};
        pointer-events: none;
      }
    `,
		pluginMarketplaceSearch: css2`
      width: 100%;
      box-sizing: border-box;
      padding: 5px 10px 5px 28px;
      background: ${semantic.color.surface.app};
      border: 1px solid ${semantic.color.border.decorative};
      border-radius: ${semantic.radius.control};
      color: ${semantic.color.text.primary};
      font-size: ${semantic.type.bodyXs.size};
      line-height: ${semantic.type.bodyXs.lineHeight};
      font-family: ${semantic.font.body};
      transition: all 0.3s ease;

      &::placeholder {
        color: ${semantic.color.text.muted};
      }

      &:hover {
        border-color: ${semantic.color.border.control};
      }

      &:focus {
        outline: none;
        border-color: ${semantic.color.border.focus};
        background: ${semantic.color.surface.elevated};
        box-shadow: 0 0 0 2px ${semantic.color.state.pressed};
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		pluginMarketplaceTagsContainer: css2`
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      margin-top: ${semantic.space[3]};
      padding: 0;
      background: transparent;
      border: 0;
    `,
		pluginMarketplaceTagButton: css2`
      padding: 3px 10px;
      font-size: ${semantic.type.bodyXs.size};
      line-height: ${semantic.type.bodyXs.lineHeight};
      font-weight: 500;
      background: ${semantic.color.surface.subtle};
      border: 1px solid ${semantic.color.border.decorative};
      border-radius: 999px;
      color: ${semantic.color.text.secondary};
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background: ${semantic.color.state.hover};
        border-color: ${semantic.color.border.control};
        color: ${semantic.color.text.primary};
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		pluginMarketplaceTagButtonActive: css2`
      background: ${semantic.color.state.selectionFill} !important;
      border-color: ${semantic.color.state.selectionFill} !important;
      color: ${semantic.color.state.selectionText} !important;

      &:hover {
        background: ${semantic.color.state.selectionFill} !important;
        border-color: ${semantic.color.border.focus} !important;
      }
    `,
		pluginMarketplaceSettingsButton: css2`
      display: flex;
      align-items: center;
      justify-content: center;
      flex: 0 0 auto;
      padding: 5px;
      background: ${semantic.color.surface.subtle};
      border: 1px solid ${semantic.color.border.decorative};
      border-radius: ${semantic.radius.control};
      color: ${semantic.color.text.secondary};
      cursor: pointer;
      transition: all 0.3s ease;
      margin-left: 6px;

      & svg {
        width: 14px;
        height: 14px;
      }

      &:hover {
        background: ${semantic.color.state.hover};
        border-color: ${semantic.color.border.control};
        color: ${semantic.color.text.primary};
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		pluginMarketplaceSettingsPanel: css2`
      position: absolute;
      inset-block: 0;
      inset-inline-end: 0;
      width: 320px;
      max-width: 100%;
      box-sizing: border-box;
      background: ${semantic.color.surface.elevated};
      border-inline-start: 1px solid ${semantic.color.border.decorative};
      box-shadow: ${semantic.shadow.overlay};
      z-index: 2;
      display: flex;
      flex-direction: column;
      animation: ${slideInRight} 0.3s ease;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `,
		pluginMarketplaceSettingsPanelHeader: css2`
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: ${semantic.gap.control};
      padding: ${semantic.space[3]} ${16}px;
      border-bottom: 1px solid ${semantic.color.border.decorative};
    `,
		pluginMarketplaceSettingsPanelTitle: css2`
      font-family: ${semantic.font.display};
      font-size: ${semantic.type.headingCompact.size};
      line-height: ${semantic.type.headingCompact.lineHeight};
      font-weight: 700;
      color: ${semantic.color.text.primary};
      margin: 0;
    `,
		pluginMarketplaceSettingsPanelClose: css2`
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5rem;
      background: transparent;
      border: none;
      color: ${semantic.color.text.secondary};
      cursor: pointer;
      border-radius: 0.375rem;
      transition: all 0.3s ease;

      &:hover {
        background: ${semantic.color.state.hover};
        color: ${semantic.color.text.primary};
      }
    `,
		pluginMarketplaceSettingsPanelContent: css2`
      flex: 1;
      min-height: 0;
      padding: ${16}px;
      overflow-y: auto;
      overscroll-behavior: contain;
      ${thinScrollbars}
    `,
		pluginMarketplaceGrid: css2`
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(min(280px, 100%), 1fr));
      gap: ${semantic.gap.section};
      animation: ${slideUp} 0.4s ease;
      @media (prefers-reduced-motion: reduce) {
        animation: none;
      }
    `,
		pluginMarketplaceCard: css2`
      background: ${semantic.color.surface.elevated};
      border: 1px solid ${semantic.color.border.decorative};
      border-radius: ${semantic.radius.overlay};
      padding: ${16}px;
      display: flex;
      flex-direction: column;
      gap: ${semantic.gap.section};
      transition: all 0.3s ease;
      position: relative;
      overflow: hidden;

      /* Cards stay grounded: hover raises the shadow a step instead of lifting
         the card off the page. */
      &:hover {
        border-color: ${semantic.color.border.control};
        box-shadow: ${semantic.shadow.sm};
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		pluginMarketplaceCardIcon: css2`
      width: 32px;
      height: 32px;
      flex: 0 0 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: ${semantic.color.surface.subtle};
      border: 1px solid ${semantic.color.border.decorative};
      border-radius: ${semantic.radius.group};
      color: ${semantic.color.text.secondary};

      svg {
        width: 16px;
        height: 16px;
      }
    `,
		pluginMarketplaceCardHeader: css2`
      flex: 1;
    `,
		pluginMarketplaceCardTitle: css2`
      font-family: ${semantic.font.display};
      font-size: ${semantic.type.bodySm.size};
      line-height: ${semantic.type.bodySm.lineHeight};
      font-weight: 700;
      color: ${semantic.color.text.primary};
      /* Room on the trailing side so a long name never runs under the badge. */
      margin: 0 72px 4px 0;
    `,
		pluginMarketplaceCardPackageBadge: css2`
      margin-top: 4px;
      margin-bottom: 8px;
      font-size: 0.6875rem;
      font-family: ${semantic.font.mono};
      color: ${semantic.color.text.muted};
      padding: 0;
      word-break: break-all;
      display: inline-block;
    `,
		pluginMarketplaceCardDescriptionText: css2`
      margin-top: 0;
      font-size: ${semantic.type.bodyXs.size};
      line-height: ${semantic.type.bodySm.lineHeight};
      color: ${semantic.color.text.secondary};
    `,
		pluginMarketplaceCardVersionInfo: css2`
      margin-top: 8px;
      font-size: 0.6875rem;
      font-family: ${semantic.font.mono};
    `,
		pluginMarketplaceCardVersionSatisfied: css2`
      color: ${semantic.color.status.success.text};
    `,
		pluginMarketplaceCardVersionUnsatisfied: css2`
      color: ${semantic.color.status.error.text};
    `,
		pluginMarketplaceCardDocsLink: css2`
      display: inline-flex;
      align-items: center;
      gap: 0.25rem;
      font-size: 0.75rem;
      color: ${semantic.color.text.link};
      text-decoration: none;
      margin-top: 0.5rem;
      transition: all 0.3s ease;

      &:hover {
        color: ${semantic.color.text.link};
        text-decoration: underline;
      }

      svg {
        width: 12px;
        height: 12px;
      }
    `,
		pluginMarketplaceCardTags: css2`
      display: flex;
      flex-wrap: wrap;
      gap: 0.375rem;
      margin-top: 0.75rem;
    `,
		pluginMarketplaceCardTag: css2`
      font-size: 0.6875rem;
      font-weight: 500;
      padding: 0.25rem 0.5rem;
      background: ${semantic.color.surface.subtle};
      border: 1px solid ${semantic.color.border.decorative};
      border-radius: 999px;
      color: ${semantic.color.text.secondary};
    `,
		pluginMarketplaceCardImage: css2`
      width: 28px;
      height: 28px;
      object-fit: contain;
    `,
		pluginMarketplaceNewBanner: css2`
      display: inline-block;
      vertical-align: middle;
      margin-inline-start: 6px;
      background-color: ${semantic.color.status.success.subtleFill};
      color: ${semantic.color.status.success.text};
      padding: 1px 6px;
      font-family: ${semantic.font.body};
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 999px;
      letter-spacing: 0.05em;
    `,
		pluginMarketplaceCardFeatured: css2`
      border-color: ${semantic.color.border.control};
    `,
		pluginMarketplaceCardActive: css2`
      border-inline-start: 3px solid ${semantic.color.status.success.border};
    `,
		pluginMarketplaceCardStatus: css2`
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${semantic.color.status.success.text};
      animation: ${statusFadeIn} 0.3s ease;

      svg {
        width: 18px;
        height: 18px;
        animation: ${statusFadeIn} 120ms ease-out;
      }
    `,
		pluginMarketplaceCardSpinner: css2`
      width: 18px;
      height: 18px;
      border: 2px solid ${semantic.color.border.decorative};
      border-top-color: ${semantic.color.status.info.border};
      border-radius: 50%;
      animation: ${spin} 0.8s linear infinite;
    `,
		pluginMarketplaceCardStatusText: css2`
      font-size: 0.875rem;
      font-weight: 600;
    `,
		pluginMarketplaceCardStatusTextError: css2`
      font-size: 0.875rem;
      font-weight: 600;
      color: ${semantic.color.status.error.text};
    `,
		pluginMarketplaceEmpty: css2`
      padding: 3rem 2rem;
      text-align: center;
      background: ${semantic.color.surface.elevated};
      border: 2px dashed ${semantic.color.border.control};
      border-radius: 0.75rem;
      animation: ${fadeIn} 0.3s ease;
    `,
		pluginMarketplaceEmptyText: css2`
      font-size: 0.95rem;
      color: ${semantic.color.text.secondary};
      margin: 0;
      line-height: 1.6;
    `,
		pluginMarketplaceSection: css2`
      margin-bottom: ${24}px;

      &:last-child {
        margin-bottom: 0;
      }
    `,
		pluginMarketplaceSectionHeader: css2`
      margin-bottom: ${semantic.gap.section};
      padding: 0 0 6px;
      display: flex;
      align-items: center;
      gap: ${semantic.gap.tight};
      cursor: pointer;
      user-select: none;
      background: transparent;
      border: 0;
      border-bottom: 1px solid ${semantic.color.border.decorative};
      border-radius: 0;
      transition: all 0.3s ease;

      &:hover {
        border-bottom-color: ${semantic.color.border.control};
      }
      &:hover h3 {
        color: ${semantic.color.text.primary};
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		pluginMarketplaceSectionContent: css2`
      display: flex;
      flex-direction: column;
      gap: ${semantic.gap.sectionLarge};
    `,
		pluginMarketplaceSectionHeaderLeft: css2`
      display: flex;
      align-items: center;
      gap: 0.5rem;
    `,
		pluginMarketplaceSectionChevron: css2`
      width: 18px;
      height: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: ${semantic.color.text.secondary};
      transition: transform 0.2s ease;
    `,
		pluginMarketplaceSectionChevronCollapsed: css2`
      transform: rotate(-90deg);
    `,
		pluginMarketplaceSectionTitle: css2`
      font-family: ${semantic.font.display};
      font-size: ${semantic.type.headingPane.size};
      line-height: ${semantic.type.headingPane.lineHeight};
      font-weight: 700;
      color: ${semantic.color.text.secondary};
      margin: 0;
      display: flex;
      align-items: center;
      gap: ${semantic.gap.control};
      transition: all 0.3s ease;
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		pluginMarketplaceFeatureBanner: css2`
      margin-top: 0;
      padding: ${semantic.space[3]} ${16}px;
      background: ${semantic.color.surface.brand};
      border-radius: ${semantic.radius.overlay};
      border: 1px solid ${semantic.color.border.decorative};
      border-inline-start: 3px solid ${semantic.color.state.selectionFill};
      box-shadow: none;
    `,
		pluginMarketplaceFeatureBannerContent: css2`
      display: flex;
      flex-direction: column;
      gap: ${semantic.gap.control};
      align-items: flex-start;
    `,
		pluginMarketplaceFeatureBannerTitle: css2`
      font-family: ${semantic.font.display};
      font-size: ${semantic.type.headingCompact.size};
      line-height: ${semantic.type.headingCompact.lineHeight};
      font-weight: 700;
      color: ${semantic.color.text.primary};
      margin: 0;
      display: flex;
      align-items: center;
      gap: 6px;
    `,
		pluginMarketplaceFeatureBannerIcon: css2`
      width: 14px;
      height: 14px;
      display: inline-flex;
      color: ${semantic.color.text.secondary};
    `,
		pluginMarketplaceFeatureBannerText: css2`
      font-size: ${semantic.type.bodyXs.size};
      color: ${semantic.color.text.mutedOnBrand};
      line-height: ${semantic.type.bodySm.lineHeight};
      max-width: 78ch;
      margin: 0;
    `,
		pluginMarketplaceFeatureBannerButton: css2`
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 5px 12px;
      background: ${semantic.color.state.selectionFill};
      color: ${semantic.color.state.selectionText};
      font-weight: 600;
      font-size: ${semantic.type.bodyXs.size};
      border-radius: ${semantic.radius.control};
      border: none;
      cursor: pointer;
      transition: all 0.3s ease;
      text-decoration: none;
      align-self: flex-start;
      box-shadow: none;

      &:hover {
        opacity: 0.85;
      }
      &:focus-visible {
        outline: 2px solid ${semantic.color.border.focus};
        outline-offset: 2px;
      }
      @media (prefers-reduced-motion: reduce) {
        transition: none;
      }
    `,
		pluginMarketplaceFeatureBannerButtonIcon: css2`
      width: 14px;
      height: 14px;
    `,
		pluginMarketplaceCardDisabled: css2`
      opacity: 0.6;
      filter: grayscale(0.3);
      cursor: not-allowed;

      &:hover {
        transform: none;
        box-shadow: none;
      }
    `,
		pluginMarketplaceCardBadge: css2`
      position: absolute;
      top: ${16}px;
      right: ${16}px;
      padding: 1px 6px;
      font-size: 11px;
      font-weight: 600;
      text-transform: uppercase;
      border-radius: 999px;
      letter-spacing: 0.05em;
    `,
		pluginMarketplaceCardBadgeInstall: css2`
      background: ${semantic.color.status.success.subtleFill};
      color: ${semantic.color.status.success.text};
    `,
		pluginMarketplaceCardBadgeActive: css2`
      background: ${semantic.color.status.success.subtleFill};
      color: ${semantic.color.status.success.text};
    `,
		pluginMarketplaceCardBadgeAdd: css2`
      background: ${semantic.color.status.info.subtleFill};
      color: ${semantic.color.status.info.text};
    `,
		pluginMarketplaceCardBadgeBlocked: css2`
      background: ${semantic.color.status.warning.subtleFill};
      color: ${semantic.color.status.warning.text};
    `,
		pluginMarketplaceCardBadgeRequires: css2`
      background: ${semantic.color.status.neutral.subtleFill};
      color: ${semantic.color.status.neutral.text};
    `,
		pluginMarketplaceButtonInstalled: css2`
      opacity: 0.5;
    `
	};
};
function createStyles() {
	const { theme } = createTheme();
	const [styles, setStyles] = createSignal(stylesFactory(theme()));
	createEffect(() => {
		setStyles(stylesFactory(theme()));
	});
	return styles;
}
var _tmpl$ = [
	"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 18 18\" fill=\"none\" aria-hidden=\"true\" width=\"18\" height=\"18\"><circle cx=\"9\" cy=\"9\" r=\"9\" fill=\"",
	"\" fill-opacity=\"0.99\"></circle><path d=\"M11.223 13.665C10.5529 13.665 10.1862 13.8488 9.89289 13.9958C9.63954 14.1227 9.43953 14.2229 8.99949 14.2229C8.55946 14.2229 8.35944 14.1227 8.10609 13.9958C7.81274 13.8488 7.44604 13.665 6.77599 13.665C6.10594 13.665 5.73925 13.8488 5.44589 13.9958C5.19254 14.1227 4.99252 14.2229 4.55249 14.2229V15.1984C5.22254 15.1984 5.58924 15.0146 5.88259 14.8677C6.13594 14.7407 6.33596 14.6405 6.77599 14.6405C7.21602 14.6405 7.41604 14.7407 7.66939 14.8677C7.96275 15.0146 8.32944 15.1984 8.99949 15.1984C9.66954 15.1984 10.0362 15.0146 10.3296 14.8677C10.5829 14.7407 10.783 14.6405 11.223 14.6405C11.663 14.6405 11.863 14.7407 12.1164 14.8677C12.4097 15.0146 12.7764 15.1984 13.4465 15.1984V14.2229C13.0065 14.2229 12.8064 14.1227 12.5531 13.9958C12.2597 13.8488 11.893 13.665 11.223 13.665Z\" fill=\"#171717\"></path><path d=\"M12.5534 12.1082C12.26 11.9612 11.8933 11.7775 11.2233 11.7775C10.5532 11.7775 10.1865 11.9612 9.89316 12.1082C9.81648 12.1449 9.74648 12.1817 9.67314 12.2117C9.61647 12.1616 9.58313 12.0982 9.5798 12.0313L9.42312 6.80995L11.5433 8.72747C12.05 9.18513 12.82 8.59718 12.5067 7.98919C12.3333 7.65513 12.1 7.34445 11.8066 7.08054C11.3533 6.66964 10.8132 6.4191 10.2398 6.30886H12.83C13.5168 6.30886 13.6934 5.33674 13.0434 5.11292C12.6567 4.98263 12.2433 4.90914 11.8133 4.90914C11.0266 4.90914 10.2965 5.153 9.68647 5.5639L11.5433 3.88357C12.05 3.4259 11.5433 2.59743 10.9099 2.84798C10.5599 2.98828 10.2298 3.18872 9.93649 3.45597C9.47646 3.87355 9.16643 4.39802 8.99975 4.96927C8.83308 4.39802 8.52305 3.87355 8.06302 3.45597C7.76966 3.19206 7.43964 2.98828 7.08961 2.84798C6.45623 2.59743 5.94952 3.4259 6.45623 3.88357L8.31304 5.5639C7.70632 5.153 6.97627 4.90914 6.18621 4.90914C5.75618 4.90914 5.34281 4.97929 4.95612 5.11292C4.30607 5.3334 4.48608 6.30886 5.16947 6.30886H7.75966C7.18962 6.4191 6.64624 6.67298 6.19288 7.08054C5.89952 7.34445 5.66617 7.65179 5.49282 7.98919C5.17947 8.59384 5.94952 9.18179 6.45623 8.72747L8.54639 6.84002L8.38971 12.0347C8.38971 12.0982 8.35304 12.1583 8.30637 12.2084C8.2397 12.1783 8.17636 12.1483 8.10635 12.1115C7.813 11.9645 7.4463 11.7808 6.77625 11.7808C6.1062 11.7808 5.73951 11.9645 5.44615 12.1115C5.1928 12.2385 4.99279 12.3387 4.55275 12.3387V13.3141C5.2228 13.3141 5.5895 13.1304 5.88285 12.9834C6.13621 12.8565 6.33622 12.7563 6.77625 12.7563C7.21629 12.7563 7.4163 12.8565 7.66965 12.9834C7.96301 13.1304 8.3297 13.3141 8.99975 13.3141C9.66981 13.3141 10.0365 13.1304 10.3299 12.9834C10.5832 12.8565 10.7832 12.7563 11.2233 12.7563C11.6633 12.7563 11.8633 12.8565 12.1167 12.9834C12.41 13.1304 12.7767 13.3141 13.4468 13.3141V12.3387C13.0067 12.3387 12.8067 12.2385 12.5534 12.1115V12.1082Z\" fill=\"#171717\"></path><defs><linearGradient",
	" x1=\"8\" y1=\"0\" x2=\"8\" y2=\"18\" gradientUnits=\"userSpaceOnUse\"><stop stop-color=\"#FF5F5F\"></stop><stop offset=\"0.344449\" stop-color=\"#FFA05C\"></stop><stop offset=\"0.733354\" stop-color=\"#FFF27C\"></stop><stop offset=\"1\" stop-color=\"#74DCFF\"></stop></linearGradient></defs></svg>"
];
var TanStackTriggerMark = () => {
	const gradientId = `tsd-trigger-mark-${createUniqueId()}`;
	return ssr(_tmpl$, `url(#${escape(gradientId, true)})`, ssrAttribute("id", escape(gradientId, true), false));
};
var _tmpl$2 = "<div></div>";
var _tmpl$22 = [
	"<button type=\"button\" data-tsd-control aria-label=\"Open TanStack Devtools\"",
	" style=\"",
	"\">",
	"</button>"
];
var PADDING_RATIO = .5;
var clamp = (value, min, max) => Math.max(min, Math.min(max, value));
var Trigger = (props) => {
	const { settings, setSettings } = createDevtoolsSettings();
	const [containerRef, setContainerRef] = createSignal();
	const [buttonRef, setButtonRef] = createSignal();
	const [coords, setCoords] = createSignal(settings().triggerCoords ?? null);
	const styles = createStyles();
	const isFloating = createMemo(() => settings().triggerMode === "floating");
	const buttonStyle = createMemo(() => {
		return clsx(styles().mainCloseBtn, (!isFloating() || !coords()) && styles().mainCloseBtnPosition(settings().position), !settings().customTrigger && styles().mainCloseBtnDefault, styles().mainCloseBtnAnimation(props.isOpen(), settings().hideUntilHover), isFloating() && styles().mainCloseBtnFloating);
	});
	const edgePadding = (el) => {
		const fontSize = parseFloat(getComputedStyle(el).getPropertyValue("--tsrd-font-size"));
		return (Number.isFinite(fontSize) ? fontSize : 16) * PADDING_RATIO;
	};
	const bounds = (el) => {
		const pad = edgePadding(el);
		const rect = el.getBoundingClientRect();
		return {
			minX: pad,
			minY: pad,
			maxX: window.innerWidth - rect.width - pad,
			maxY: window.innerHeight - rect.height - pad
		};
	};
	const cancelThrow = () => {};
	const persist = () => setSettings({ triggerCoords: coords() ?? void 0 });
	createEffect(() => {
		if (!isFloating()) return;
		const el = buttonRef();
		if (!el) return;
		untrack(() => {
			const current = coords();
			if (!current) {
				const rect = el.getBoundingClientRect();
				setCoords({
					x: rect.left,
					y: rect.top
				});
				return;
			}
			const b = bounds(el);
			setCoords({
				x: clamp(current.x, b.minX, b.maxX),
				y: clamp(current.y, b.minY, b.maxY)
			});
		});
	});
	createEffect(() => {
		if (!isFloating()) return;
		const onResize = () => {
			const el = buttonRef();
			const current = coords();
			if (!el || !current) return;
			const b = bounds(el);
			setCoords({
				x: clamp(current.x, b.minX, b.maxX),
				y: clamp(current.y, b.minY, b.maxY)
			});
			persist();
		};
		window.addEventListener("resize", onResize);
		onCleanup(() => window.removeEventListener("resize", onResize));
	});
	onCleanup(cancelThrow);
	createEffect(() => {
		const triggerComponent = settings().customTrigger;
		const el = containerRef();
		if (triggerComponent && el) triggerComponent(el, { theme: settings().theme });
	});
	return createComponent(Show, {
		get when() {
			return !settings().triggerHidden;
		},
		get children() {
			return ssr(_tmpl$22, ssrAttribute("class", escape(buttonStyle(), true), false), ssrStyle(isFloating() && coords() ? {
				left: `${coords().x}px`,
				top: `${coords().y}px`,
				right: "auto",
				bottom: "auto",
				transform: "none"
			} : void 0), escape(createComponent(Show, {
				get when() {
					return settings().customTrigger;
				},
				get fallback() {
					return createComponent(TanStackTriggerMark, {});
				},
				get children() {
					return ssr(_tmpl$2);
				}
			})));
		}
	});
};
var _tmpl$3 = [
	"<nav",
	" data-workbench-secondary-tabs",
	" data-tsd-surface",
	" class=\"",
	"\">",
	"</nav>"
];
var _tmpl$23 = [
	"<button type=\"button\"",
	" data-testid=\"workbench-collapse-toggle\" data-tsd-control",
	"><span aria-hidden=\"true\"",
	" style=\"",
	"\">",
	"</span></button>"
];
var _tmpl$32 = [
	"<button type=\"button\"",
	" data-workbench-secondary-tab data-tsd-control",
	">",
	"</button>"
];
var WorkbenchSecondaryTabs = (props) => {
	const styles = createStyles();
	const { isCollapsed } = createCollapsed();
	return ssr(_tmpl$3, ssrAttribute("aria-label", escape(props.ariaLabel, true), false) + ssrAttribute("data-testid", escape(props.dataTestId, true), false), ssrAttribute("data-collapsed", isCollapsed() ? "true" : escape(void 0, true), false), ssrAttribute("inert", isCollapsed() || void 0, true) + ssrAttribute("aria-hidden", isCollapsed() ? "true" : escape(void 0, true), false), `${escape(styles().workbenchSecondaryTabs(isCollapsed()), true)} tsd-workbench-secondary-tabs`, escape(props.children));
};
var CollapseToggle = () => {
	const styles = createStyles();
	const { isCollapsed, toggleCollapsed } = createCollapsed();
	const label = () => `${isCollapsed() ? "Show" : "Hide"} the plugin and section tabs`;
	return ssr(_tmpl$23, ssrAttribute("aria-label", escape(label(), true), false) + ssrAttribute("title", escape(label(), true), false) + ssrAttribute("aria-expanded", !isCollapsed(), false), ssrAttribute("class", escape(styles().workbenchCollapseToggle(isCollapsed()), true), false), ssrAttribute("class", escape(styles().workbenchCollapseIcon, true), false), ssrStyleProperty("transform:", isCollapsed() ? "rotate(0deg)" : "rotate(180deg)"), escape(createComponent(ChevronDownIcon, {})));
};
var WorkbenchSecondaryTab = (props) => {
	const styles = createStyles();
	return ssr(_tmpl$32, ssrAttribute("aria-current", escape(props.ariaCurrent, true), false) + ssrAttribute("aria-pressed", escape(props.ariaPressed, true), false) + ssrAttribute("aria-labelledby", escape(props.ariaLabelledBy, true), false) + ssrAttribute("data-plugin-title-control", props.pluginTitleControl ? "" : escape(void 0, true), false), ssrAttribute("data-tsd-selected", props.selected ? "true" : escape(void 0, true), false) + ssrAttribute("class", escape(styles().workbenchSecondaryTab, true), false), escape(props.children));
};
var _tmpl$4 = [
	"<div",
	" data-testid=\"tanstack-devtools-panel\"",
	" data-tsd-surface style=\"",
	"\"",
	"><div data-testid=\"devtools-drawer-content\"",
	">",
	"</div>",
	"</div>"
];
var MainPanel = (props) => {
	const styles = createStyles();
	const { height } = createHeight();
	const { settings } = createDevtoolsSettings();
	const pip = createPiPWindow();
	const panelWindow = () => pip().pipWindow ?? (typeof window === "undefined" ? null : window);
	const readClientWidth = () => {
		const targetWindow = panelWindow();
		if (!targetWindow) return 0;
		return targetWindow.document.documentElement.clientWidth || targetWindow.innerWidth;
	};
	const [clientWidth, setClientWidth] = createSignal(readClientWidth());
	createEffect(() => {
		const targetWindow = panelWindow();
		if (!targetWindow) return;
		const targetRoot = targetWindow.document.documentElement;
		const syncClientWidth = () => {
			setClientWidth(targetRoot.clientWidth || targetWindow.innerWidth);
		};
		syncClientWidth();
		targetWindow.addEventListener("resize", syncClientWidth);
		const ResizeObserverConstructor = targetWindow.ResizeObserver ?? globalThis.ResizeObserver;
		const resizeObserver = ResizeObserverConstructor ? new ResizeObserverConstructor(syncClientWidth) : null;
		resizeObserver?.observe(targetRoot);
		onCleanup(() => {
			targetWindow.removeEventListener("resize", syncClientWidth);
			resizeObserver?.disconnect();
		});
	});
	const isAttached = () => pip().pipWindow === null;
	const panelHeight = () => pip().pipWindow ? "100vh" : `${height()}px`;
	const translation = () => {
		if (!isAttached() || props.isOpen()) return "translateY(0px)";
		return settings().panelLocation === "top" ? "translateY(-100%)" : "translateY(100%)";
	};
	return ssr(_tmpl$4, ssrAttribute("id", escape(TANSTACK_DEVTOOLS, true), false), ssrAttribute("data-open", escape(String(props.isOpen()), true), false) + ssrAttribute("data-subheader-collapsed", escape(String(props.isCollapsed()), true), false), ssrStyleProperty("height:", escape(panelHeight(), true)) + ssrStyleProperty(";inline-size:", isAttached() && clientWidth() > 0 ? `${escape(clientWidth(), true)}px` : "100%") + ssrStyleProperty(";max-inline-size:", "100%") + ssrStyleProperty(";inset-inline:", "0px") + ssrStyleProperty(";box-sizing:", "border-box") + ssrStyleProperty(";transform:", escape(translation(), true)) + ssrStyleProperty(";--tsd-main-panel-height:", escape(panelHeight(), true)), ssrAttribute("class", escape(clsx(styles().devtoolsPanelContainer(settings().panelLocation, Boolean(pip().pipWindow)), styles().devtoolsPanelContainerVisibility(props.isOpen()), styles().devtoolsPanelContainerResizing(props.isResizing)), true), false), ssrAttribute("class", escape(styles().devtoolsDrawerContent, true), false), escape(props.children), props.hasSubheader() ? escape(createComponent(CollapseToggle, {})) : escape(null));
};
var _tmpl$5 = [
	"<div data-testid=\"tanstack-devtools-content-panel\"",
	" data-tsd-surface style=\"",
	"\">",
	"",
	"</div>"
];
var _tmpl$24 = [
	"<div data-testid=\"tsd-resize-handle\"",
	" data-tsd-control data-tsd-separator=\"resize\" role=\"separator\" aria-orientation=\"horizontal\" aria-label=\"Resize TanStack Devtools panel\"",
	" tabindex=\"0\"></div>"
];
var ContentPanel = (props) => {
	const styles = createStyles();
	const { settings } = createDevtoolsSettings();
	const { height } = createHeight();
	const pip = createPiPWindow();
	const maxHeight = () => Math.floor(window.innerHeight * PANEL_MAX_VIEWPORT_RATIO);
	const clampedHeight = () => Math.min(maxHeight(), Math.max(70, Math.round(height())));
	return ssr(_tmpl$5, ssrAttribute("class", escape(styles().devtoolsPanel, true), false), ssrStyleProperty("flex-direction:", "column"), props.handleDragStart && pip().pipWindow === null ? ssr(_tmpl$24, ssrAttribute("class", escape(styles().dragHandle(settings().panelLocation), true), false), ssrAttribute("aria-valuemin", escape(70, true), false) + ssrAttribute("aria-valuemax", escape(maxHeight(), true), false) + ssrAttribute("aria-valuenow", escape(clampedHeight(), true), false)) : escape(null), escape(props.children));
};
var _tmpl$6 = [
	"<div",
	"><h4",
	">",
	"</h4><p",
	">",
	"</p><div",
	">",
	"</div>",
	"<p",
	">Final shortcut is <kbd",
	">",
	"</kbd></p></div>"
];
var MODIFIER_DISPLAY_NAMES = {
	Shift: "Shift",
	Alt: "Alt",
	Meta: "Meta",
	Control: "Control",
	CtrlOrMeta: "Ctrl Or Meta"
};
var HotkeyConfig = (props) => {
	const styles = createStyles();
	const toggleModifier = (modifier) => {
		if (props.hotkey.includes(modifier)) props.onHotkeyChange(props.hotkey.filter((key) => key !== modifier));
		else {
			const existingModifiers = props.hotkey.filter((key) => props.modifiers.includes(key));
			const otherKeys = props.hotkey.filter((key) => !props.modifiers.includes(key));
			props.onHotkeyChange([
				...existingModifiers,
				modifier,
				...otherKeys
			]);
		}
	};
	const getNonModifierValue = () => {
		return props.hotkey.filter((key) => !props.modifiers.includes(key)).join("+");
	};
	const handleKeyInput = (input) => {
		const makeModifierArray = (key) => {
			if (key.length === 1) return [uppercaseFirstLetter(key)];
			const modifiersArray = [];
			for (const character of key) {
				const newLetter = uppercaseFirstLetter(character);
				if (!modifiersArray.includes(newLetter)) modifiersArray.push(newLetter);
			}
			return modifiersArray;
		};
		const hotkeyModifiers = props.hotkey.filter((key) => props.modifiers.includes(key));
		const newKeys = input.split("+").flatMap((key) => makeModifierArray(key)).filter(Boolean);
		props.onHotkeyChange([...hotkeyModifiers, ...newKeys]);
	};
	const getDisplayHotkey = () => {
		return props.hotkey.join(" + ");
	};
	return ssr(_tmpl$6, ssrAttribute("class", escape(styles().settingsGroup, true), false), ssrAttribute("class", escape(styles().hotkeyTitle, true), false), escape(props.title), ssrAttribute("class", escape(styles().hotkeyDescription, true), false), escape(props.description), ssrAttribute("class", escape(styles().settingsModifiers, true), false), escape(createComponent(Show, {
		keyed: true,
		get when() {
			return props.hotkey;
		},
		get children() {
			return props.modifiers.map((modifier) => {
				const enabled = props.hotkey.includes(modifier);
				return createComponent(Button, {
					variant: "secondary",
					"aria-pressed": enabled,
					onclick: () => toggleModifier(modifier),
					outline: !enabled,
					get children() {
						return MODIFIER_DISPLAY_NAMES[modifier] || modifier;
					}
				});
			});
		}
	})), escape(createComponent(Input, {
		label: "Key",
		description: "Use '+' to combine keys (e.g., 'a+b' or 'd'). This will be used with the enabled modifiers from above",
		placeholder: "a",
		get value() {
			return getNonModifierValue();
		},
		onChange: handleKeyInput
	})), ssrAttribute("class", escape(styles().hotkeyResult, true), false), ssrAttribute("class", escape(styles().hotkeyResultKeys, true), false), escape(getDisplayHotkey()));
};
var _tmpl$7 = [
	"<div",
	">",
	"",
	"",
	"",
	"</div>"
];
var _tmpl$25 = [
	"<div",
	">",
	"</div>"
];
var _tmpl$33 = [
	"<div",
	">",
	"",
	"</div>"
];
var _tmpl$42 = [
	"<div",
	">",
	"<div",
	">",
	"",
	"</div></div>"
];
var _tmpl$52 = [
	"<div data-testid=\"settings-workspace\" data-tsd-surface style=\"",
	"\">",
	"</div>"
];
var SettingsTab = () => {
	const { setSettings, settings } = createDevtoolsSettings();
	const styles = createStyles();
	const modifiers = [
		"CtrlOrMeta",
		"Alt",
		"Shift"
	];
	return ssr(_tmpl$52, ssrStyleProperty("height:", "100%") + ssrStyleProperty(";min-height:", "0px"), escape(createComponent(MainPanel$1, {
		withPadding: true,
		get children() {
			return [
				createComponent(Section, { get children() {
					return [
						createComponent(SectionTitle, { get children() {
							return [createComponent(SectionIcon, { get children() {
								return createComponent(SettingsCog, {});
							} }), "General"];
						} }),
						createComponent(SectionDescription, { children: "Configure general behavior of the devtools panel." }),
						ssr(_tmpl$7, ssrAttribute("class", escape(styles().settingsGroup, true), false), escape(createComponent(Checkbox, {
							label: "Default open",
							description: "Automatically open the devtools panel when the page loads",
							onChange: () => setSettings({ defaultOpen: !settings().defaultOpen }),
							get checked() {
								return settings().defaultOpen;
							}
						})), escape(createComponent(Checkbox, {
							label: "Hide trigger until hovered",
							description: "Keep the devtools trigger button hidden until you hover over its area",
							onChange: () => setSettings({ hideUntilHover: !settings().hideUntilHover }),
							get checked() {
								return settings().hideUntilHover;
							}
						})), escape(createComponent(Checkbox, {
							label: "Completely hide trigger",
							description: "Completely removes the trigger from the DOM (you can still open it with the hotkey)",
							onChange: () => setSettings({ triggerHidden: !settings().triggerHidden }),
							get checked() {
								return settings().triggerHidden;
							}
						})), escape(createComponent(Select, {
							label: "Theme",
							options: [{
								label: "Dark",
								value: "dark"
							}, {
								label: "Light",
								value: "light"
							}],
							get value() {
								return settings().theme;
							},
							onChange: (theme) => setSettings({ theme })
						})))
					];
				} }),
				createComponent(Section, { get children() {
					return [
						createComponent(SectionTitle, { get children() {
							return [createComponent(SectionIcon, { get children() {
								return createComponent(Link, {});
							} }), "URL Configuration"];
						} }),
						createComponent(SectionDescription, { children: "Control when devtools are available based on URL parameters." }),
						ssr(_tmpl$33, ssrAttribute("class", escape(styles().settingsGroup, true), false), escape(createComponent(Checkbox, {
							label: "Require URL Flag",
							description: "Only show devtools when a specific URL parameter is present",
							get checked() {
								return settings().requireUrlFlag;
							},
							onChange: (checked) => setSettings({ requireUrlFlag: checked })
						})), escape(createComponent(Show, {
							get when() {
								return settings().requireUrlFlag;
							},
							get children() {
								return ssr(_tmpl$25, ssrAttribute("class", escape(styles().conditionalSetting, true), false), escape(createComponent(Input, {
									label: "URL flag",
									description: "Enter the URL parameter name (for example, 'debug' for ?debug=true)",
									placeholder: "debug",
									get value() {
										return settings().urlFlag;
									},
									onChange: (value) => setSettings({ urlFlag: value })
								})));
							}
						})))
					];
				} }),
				createComponent(Section, { get children() {
					return [
						createComponent(SectionTitle, { get children() {
							return [createComponent(SectionIcon, { get children() {
								return createComponent(Keyboard, {});
							} }), "Keyboard"];
						} }),
						createComponent(SectionDescription, { children: "Customize keyboard shortcuts for quick access." }),
						ssr(_tmpl$33, ssrAttribute("class", escape(styles().settingsStack, true), false), escape(createComponent(HotkeyConfig, {
							title: "Open/Close Devtools",
							description: "Hotkey to open/close devtools",
							get hotkey() {
								return settings().openHotkey;
							},
							modifiers,
							onHotkeyChange: (hotkey) => setSettings({ openHotkey: hotkey })
						})), escape(createComponent(HotkeyConfig, {
							title: "Source Inspector",
							description: "Hotkey to open source inspector",
							get hotkey() {
								return settings().inspectHotkey;
							},
							modifiers,
							onHotkeyChange: (hotkey) => setSettings({ inspectHotkey: hotkey })
						})))
					];
				} }),
				createComponent(Section, { get children() {
					return [
						createComponent(SectionTitle, { get children() {
							return [createComponent(SectionIcon, { get children() {
								return createComponent(GeoTag, {});
							} }), "Position"];
						} }),
						createComponent(SectionDescription, { children: "Adjust the position of the trigger button and devtools panel." }),
						ssr(_tmpl$42, ssrAttribute("class", escape(styles().settingsGroup, true), false), escape(createComponent(Select, {
							label: "Trigger Mode",
							description: "Fixed anchors the trigger to a corner. Floating lets you drag and throw it.",
							get value() {
								return settings().triggerMode;
							},
							options: [{
								label: "Fixed",
								value: "fixed"
							}, {
								label: "Floating",
								value: "floating"
							}],
							onChange: (value) => setSettings({ triggerMode: value })
						})), ssrAttribute("class", escape(styles().settingRow, true), false), escape(createComponent(Show, {
							get when() {
								return settings().triggerMode === "fixed";
							},
							get children() {
								return createComponent(Select, {
									label: "Trigger Position",
									options: [
										{
											label: "Bottom Right",
											value: "bottom-right"
										},
										{
											label: "Bottom Left",
											value: "bottom-left"
										},
										{
											label: "Top Right",
											value: "top-right"
										},
										{
											label: "Top Left",
											value: "top-left"
										},
										{
											label: "Middle Right",
											value: "middle-right"
										},
										{
											label: "Middle Left",
											value: "middle-left"
										}
									],
									get value() {
										return settings().position;
									},
									onChange: (value) => setSettings({ position: value })
								});
							}
						})), escape(createComponent(Select, {
							label: "Panel Position",
							get value() {
								return settings().panelLocation;
							},
							options: [{
								label: "Top",
								value: "top"
							}, {
								label: "Bottom",
								value: "bottom"
							}],
							onChange: (value) => setSettings({ panelLocation: value })
						})))
					];
				} })
			];
		}
	})));
};
var getButtonText = (card) => {
	if (card.status === "installing") return "Installing...";
	if (card.status === "success") return "Installed!";
	if (card.status === "error") return "Error";
	switch (card.actionType) {
		case "install": return "Install";
		case "install-devtools": return "Install Devtools";
		case "add-to-devtools": return "Add to Devtools";
		case "requires-package": return `Requires ${card.requiredPackageName}`;
		case "wrong-framework": return "Different Framework";
		case "already-installed": return "Already Installed";
		case "bump-version": return "Bump Version";
		case "version-mismatch": return "Version Mismatch";
		default: return "Install";
	}
};
var getButtonVariant = (card) => {
	if (card.actionType === "requires-package" || card.actionType === "wrong-framework" || card.actionType === "version-mismatch") return "danger";
	if (card.actionType === "bump-version") return "warning";
	if (card.actionType === "already-installed") return "secondary";
	return "primary";
};
var getBadgeClass = (card, styles) => {
	const s = styles();
	const base = s.pluginMarketplaceCardBadge;
	switch (card.actionType) {
		case "install":
		case "install-devtools": return `${base} ${s.pluginMarketplaceCardBadgeInstall}`;
		case "add-to-devtools": return `${base} ${s.pluginMarketplaceCardBadgeAdd}`;
		case "already-installed": return `${base} ${s.pluginMarketplaceCardBadgeActive}`;
		case "bump-version":
		case "version-mismatch": return `${base} ${s.pluginMarketplaceCardBadgeBlocked}`;
		case "requires-package":
		case "wrong-framework": return `${base} ${s.pluginMarketplaceCardBadgeRequires}`;
		default: return base;
	}
};
var getBadgeText = (card) => {
	switch (card.actionType) {
		case "install":
		case "install-devtools": return "Available";
		case "add-to-devtools": return "Installed";
		case "already-installed": return "Active";
		case "version-mismatch": return "Incompatible";
		case "requires-package": return "Unavailable";
		case "wrong-framework": return "Other Framework";
		default: return "";
	}
};
var _tmpl$8 = ["<img", ">"];
var _tmpl$26 = ["<span", ">New</span>"];
var _tmpl$34 = [
	"<span",
	">v",
	" • min v",
	"</span>"
];
var _tmpl$43 = [
	"<p",
	">",
	"</p>"
];
var _tmpl$53 = [
	"<a",
	" target=\"_blank\" rel=\"noopener noreferrer\"",
	">Documentation ",
	"</a>"
];
var _tmpl$62 = [
	"<div",
	">",
	"</div>"
];
var _tmpl$72 = [
	"<div data-tsd-surface class=\"",
	"\" style=\"",
	"\"><span",
	">",
	"</span><div class=\"",
	"\">",
	"</div><div",
	"><h3",
	">",
	"",
	"</h3><p",
	">",
	"</p><p",
	">",
	"</p>",
	"",
	"",
	"</div>",
	"</div>"
];
var _tmpl$82 = [
	"<span",
	">v",
	" • requires v",
	"+</span>"
];
var _tmpl$9 = [
	"<span",
	">",
	"</span>"
];
var _tmpl$0 = ["<div", "></div>"];
var _tmpl$1 = ["<span", ">Installing...</span>"];
var _tmpl$10 = ["<span", ">Installed!</span>"];
var _tmpl$11 = [
	"<div",
	" role=\"status\">",
	"",
	"",
	"</div>"
];
var PluginCardComponent = (props) => {
	const styles = createStyles();
	const { card } = props;
	return ssr(_tmpl$72, `${escape(styles().pluginMarketplaceCard || "", true)} ${!card.isCurrentFramework && card.actionType !== "already-installed" ? escape(escape(styles().pluginMarketplaceCardDisabled, true), true) : ""} ${!!card.metadata?.featured && card.actionType !== "already-installed" ? escape(escape(styles().pluginMarketplaceCardFeatured, true), true) : ""} ${card.actionType === "already-installed" ? escape(escape(styles().pluginMarketplaceCardActive, true), true) : ""}`, ssrStyleProperty("position:", "relative"), ssrAttribute("class", escape(getBadgeClass(card, styles), true), false), escape(getBadgeText(card)), `${escape(styles().pluginMarketplaceCardIcon || "", true)} ${!!card.metadata?.logoUrl ? "custom-logo" : ""}`, escape(createComponent(Show, {
		get when() {
			return card.metadata?.logoUrl;
		},
		get fallback() {
			return createComponent(PackageIcon, {});
		},
		get children() {
			return ssr(_tmpl$8, ssrAttribute("src", escape(card.metadata?.logoUrl, true), false) + ssrAttribute("alt", escape(card.metadata?.title || card.devtoolsPackage, true), false) + ssrAttribute("class", escape(styles().pluginMarketplaceCardImage, true), false));
		}
	})), ssrAttribute("class", escape(styles().pluginMarketplaceCardHeader, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceCardTitle, true), false), escape(card.metadata?.title || card.devtoolsPackage), escape(createComponent(Show, {
		get when() {
			return card.metadata?.isNew;
		},
		get children() {
			return ssr(_tmpl$26, ssrAttribute("class", escape(styles().pluginMarketplaceNewBanner, true), false));
		}
	})), ssrAttribute("class", escape(styles().pluginMarketplaceCardPackageBadge, true), false), escape(card.devtoolsPackage), ssrAttribute("class", escape(styles().pluginMarketplaceCardDescriptionText, true), false), card.actionType === "requires-package" ? `Requires ${escape(card.requiredPackageName)}` : card.actionType === "wrong-framework" ? `For different framework projects` : card.actionType === "already-installed" ? `Active in your devtools` : card.actionType === "version-mismatch" ? escape(card.versionInfo?.reason || "Version incompatible") : escape(card.metadata?.description || `For ${card.requiredPackageName}`), escape(createComponent(Show, {
		get when() {
			return card.versionInfo;
		},
		get children() {
			return ssr(_tmpl$43, ssrAttribute("class", escape(styles().pluginMarketplaceCardVersionInfo, true), false), escape(createComponent(Show, {
				get when() {
					return card.versionInfo?.satisfied;
				},
				get fallback() {
					return ssr(_tmpl$82, ssrAttribute("class", escape(styles().pluginMarketplaceCardVersionUnsatisfied, true), false), escape(card.versionInfo?.current), escape(card.versionInfo?.required));
				},
				get children() {
					return ssr(_tmpl$34, ssrAttribute("class", escape(styles().pluginMarketplaceCardVersionSatisfied, true), false), escape(card.versionInfo?.current), escape(card.versionInfo?.required));
				}
			})));
		}
	})), escape(createComponent(Show, {
		get when() {
			return card.metadata?.docsUrl;
		},
		get children() {
			return ssr(_tmpl$53, ssrAttribute("href", escape(card.metadata?.docsUrl, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceCardDocsLink, true), false), escape(createComponent(ExternalLinkIcon, {})));
		}
	})), escape(createComponent(Show, {
		get when() {
			return card.metadata?.tags && card.metadata.tags.length > 0;
		},
		get children() {
			return ssr(_tmpl$62, ssrAttribute("class", escape(styles().pluginMarketplaceCardTags, true), false), escape(createComponent(For, {
				get each() {
					return card.metadata?.tags;
				},
				children: (tag) => ssr(_tmpl$9, ssrAttribute("class", escape(styles().pluginMarketplaceCardTag, true), false), escape(tag))
			})));
		}
	})), escape(createComponent(Show, {
		get when() {
			return card.status === "idle";
		},
		get fallback() {
			return ssr(_tmpl$11, ssrAttribute("class", escape(styles().pluginMarketplaceCardStatus, true), false), escape(createComponent(Show, {
				get when() {
					return card.status === "installing";
				},
				get children() {
					return [ssr(_tmpl$0, ssrAttribute("class", escape(styles().pluginMarketplaceCardSpinner, true), false)), ssr(_tmpl$1, ssrAttribute("class", escape(styles().pluginMarketplaceCardStatusText, true), false))];
				}
			})), escape(createComponent(Show, {
				get when() {
					return card.status === "success";
				},
				get children() {
					return [createComponent(CheckCircleIcon, {}), ssr(_tmpl$10, ssrAttribute("class", escape(styles().pluginMarketplaceCardStatusText, true), false))];
				}
			})), escape(createComponent(Show, {
				get when() {
					return card.status === "error";
				},
				get children() {
					return [createComponent(XCircleIcon, {}), ssr(_tmpl$9, ssrAttribute("class", escape(styles().pluginMarketplaceCardStatusTextError, true), false), escape(card.error || "Failed to install"))];
				}
			})));
		},
		get children() {
			return createComponent(Button, {
				get variant() {
					return getButtonVariant(card);
				},
				onClick: () => props.onAction(card),
				get disabled() {
					return card.status !== "idle" || card.actionType === "requires-package" || card.actionType === "wrong-framework" || card.actionType === "already-installed" || card.actionType === "version-mismatch";
				},
				get ["class"]() {
					return card.actionType === "already-installed" ? styles().pluginMarketplaceButtonInstalled : "";
				},
				get children() {
					return getButtonText(card);
				}
			});
		}
	})));
};
var _tmpl$12 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"currentColor\"><path d=\"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z\"></path></svg>";
var _tmpl$27 = "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><rect x=\"2\" y=\"4\" width=\"20\" height=\"16\" rx=\"2\"></rect><path d=\"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7\"></path></svg>";
var _tmpl$35 = [
	"<div",
	"><div",
	"><h4",
	"><span",
	">",
	"</span>Want to be featured here?</h4><p",
	`>If you've built a plugin for TanStack Devtools and would like to showcase it in the featured section, we'd love to hear from you! Reach out to us to discuss partnership opportunities.</p><a href="mailto:partners+devtools@tanstack.com?subject=Featured%20Plugin%20Partnership%20Inquiry"`,
	"><span",
	">",
	"</span>Contact Us</a></div></div>"
];
var _tmpl$44 = [
	"<div",
	">",
	"<div",
	">",
	"</div></div>"
];
var _tmpl$54 = [
	"<div",
	"><div role=\"button\" tabindex=\"0\"",
	" data-tsd-control",
	"><div",
	"><div class=\"",
	"\">",
	"</div><h3",
	">",
	"</h3></div></div>",
	"</div>"
];
var StarIcon = () => ssr(_tmpl$12);
var MailIcon = () => ssr(_tmpl$27);
var PluginSectionComponent = (props) => {
	const styles = createStyles();
	return ssr(_tmpl$54, ssrAttribute("class", escape(styles().pluginMarketplaceSection, true), false), ssrAttribute("aria-expanded", !props.isCollapsed(), false), ssrAttribute("class", escape(styles().pluginMarketplaceSectionHeader, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceSectionHeaderLeft, true), false), `${escape(styles().pluginMarketplaceSectionChevron || "", true)} ${props.isCollapsed() ? escape(escape(styles().pluginMarketplaceSectionChevronCollapsed, true), true) : ""}`, escape(createComponent(ChevronDownIcon, {})), ssrAttribute("class", escape(styles().pluginMarketplaceSectionTitle, true), false), escape(props.section.displayName), escape(createComponent(Show, {
		get when() {
			return !props.isCollapsed();
		},
		get children() {
			return ssr(_tmpl$44, ssrAttribute("class", escape(styles().pluginMarketplaceSectionContent, true), false), escape(createComponent(Show, {
				get when() {
					return props.section.id === "featured";
				},
				get children() {
					return ssr(_tmpl$35, ssrAttribute("class", escape(styles().pluginMarketplaceFeatureBanner, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceFeatureBannerContent, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceFeatureBannerTitle, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceFeatureBannerIcon, true), false), escape(createComponent(StarIcon, {})), ssrAttribute("class", escape(styles().pluginMarketplaceFeatureBannerText, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceFeatureBannerButton, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceFeatureBannerButtonIcon, true), false), escape(createComponent(MailIcon, {})));
				}
			})), ssrAttribute("class", escape(styles().pluginMarketplaceGrid, true), false), escape(createComponent(For, {
				get each() {
					return props.section.cards;
				},
				children: (card) => createComponent(PluginCardComponent, {
					card,
					get onAction() {
						return props.onCardAction;
					}
				})
			})));
		}
	})));
};
var _tmpl$13 = [
	"<div",
	" data-tsd-surface role=\"dialog\" aria-label=\"Marketplace settings\"><div",
	"><h3",
	">Marketplace Settings</h3><button type=\"button\" aria-label=\"Close marketplace settings\" data-tsd-control",
	">",
	"</button></div><div",
	">",
	"</div></div>"
];
var SettingsPanel = (props) => {
	const styles = createStyles();
	return createComponent(Show, {
		get when() {
			return props.isOpen();
		},
		get children() {
			return ssr(_tmpl$13, ssrAttribute("class", escape(styles().pluginMarketplaceSettingsPanel, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceSettingsPanelHeader, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceSettingsPanelTitle, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceSettingsPanelClose, true), false), escape(createComponent(CloseIcon, {})), ssrAttribute("class", escape(styles().pluginMarketplaceSettingsPanelContent, true), false), escape(createComponent(Checkbox, {
				label: "Show active plugins",
				description: "Display installed plugins in a separate section",
				get checked() {
					return props.showActivePlugins();
				},
				onChange: (checked) => props.setShowActivePlugins(checked)
			})));
		}
	});
};
var _tmpl$14 = [
	"<div",
	">",
	"</div>"
];
var _tmpl$28 = [
	"<button type=\"button\" data-tsd-control",
	" class=\"",
	"\">",
	"</button>"
];
var TagFilters = (props) => {
	const styles = createStyles();
	return createComponent(Show, {
		get when() {
			return props.tags().length > 0;
		},
		get children() {
			return ssr(_tmpl$14, ssrAttribute("class", escape(styles().pluginMarketplaceTagsContainer, true), false), escape(createComponent(For, {
				get each() {
					return props.tags();
				},
				children: (tag) => ssr(_tmpl$28, ssrAttribute("data-tsd-selected", escape(props.selectedTags().has(tag), true), false) + ssrAttribute("aria-pressed", escape(props.selectedTags().has(tag), true), false), `${escape(styles().pluginMarketplaceTagButton || "", true)} ${props.selectedTags().has(tag) ? escape(escape(styles().pluginMarketplaceTagButtonActive, true), true) : ""}`, escape(tag))
			})));
		}
	});
};
var _tmpl$15 = [
	"<div",
	"><div",
	"><div",
	"><h2",
	">Plugin Marketplace</h2><p",
	">Discover and install devtools for TanStack Query, Router, Form, and Pacer</p></div><div data-testid=\"marketplace-controls\"",
	"><div",
	">",
	"<input type=\"text\" aria-label=\"Search plugins\" data-tsd-control",
	" placeholder=\"Search plugins...\"",
	"></div><button type=\"button\" aria-label=\"Marketplace settings\" data-tsd-control",
	">",
	"</button></div></div>",
	"</div>"
];
var MarketplaceHeader = (props) => {
	const styles = createStyles();
	return ssr(_tmpl$15, ssrAttribute("class", escape(styles().pluginMarketplaceHeader, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceTitleRow, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceTitleBlock, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceTitle, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceDescription, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceControls, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceSearchWrapper, true), false), escape(createComponent(SearchIcon, {})), ssrAttribute("class", escape(styles().pluginMarketplaceSearch, true), false), ssrAttribute("value", escape(props.searchInput(), true), false), ssrAttribute("class", escape(styles().pluginMarketplaceSettingsButton, true), false), escape(createComponent(SettingsIcon, {})), escape(createComponent(TagFilters, {
		get tags() {
			return props.tags;
		},
		get selectedTags() {
			return props.selectedTags;
		},
		get onToggleTag() {
			return props.onToggleTag;
		}
	})));
};
var FRAMEWORKS = [
	"react",
	"solid",
	"vue",
	"svelte",
	"angular"
];
var PLUGIN_REGISTRY = {
	"@tanstack/react-query-devtools": {
		packageName: "@tanstack/react-query-devtools",
		title: "TanStack Query Devtools",
		description: "Powerful devtools for TanStack Query - inspect queries, mutations, and cache",
		requires: {
			packageName: "@tanstack/react-query",
			minVersion: "5.0.0"
		},
		pluginId: "tanstack-query",
		docsUrl: "https://tanstack.com/query/latest/docs/devtools",
		author: "TanStack",
		framework: "react",
		featured: true,
		tags: [
			"TanStack",
			"data-fetching",
			"caching",
			"state-management"
		]
	},
	"@tanstack/solid-query-devtools": {
		packageName: "@tanstack/solid-query-devtools",
		title: "TanStack Query Devtools",
		description: "Powerful devtools for TanStack Query - inspect queries, mutations, and cache",
		requires: {
			packageName: "@tanstack/solid-query",
			minVersion: "5.0.0"
		},
		pluginId: "tanstack-query",
		docsUrl: "https://tanstack.com/query/latest/docs/devtools",
		author: "TanStack",
		framework: "solid",
		tags: [
			"TanStack",
			"data-fetching",
			"caching",
			"state-management"
		]
	},
	"@tanstack/react-router-devtools": {
		packageName: "@tanstack/react-router-devtools",
		title: "TanStack Router Devtools",
		description: "Inspect routes, navigation, and router state in real-time",
		requires: {
			packageName: "@tanstack/react-router",
			minVersion: "1.0.0"
		},
		pluginId: "tanstack-router",
		docsUrl: "https://tanstack.com/router/latest/docs/devtools",
		author: "TanStack",
		framework: "react",
		featured: true,
		tags: [
			"TanStack",
			"routing",
			"navigation"
		]
	},
	"@tanstack/solid-router-devtools": {
		packageName: "@tanstack/solid-router-devtools",
		title: "TanStack Router Devtools",
		description: "Inspect routes, navigation, and router state in real-time",
		requires: {
			packageName: "@tanstack/solid-router",
			minVersion: "1.0.0"
		},
		pluginId: "tanstack-router",
		docsUrl: "https://tanstack.com/router/latest/docs/devtools",
		author: "TanStack",
		framework: "solid",
		tags: [
			"TanStack",
			"routing",
			"navigation"
		]
	},
	"@tanstack/react-form-devtools": {
		packageName: "@tanstack/react-form-devtools",
		title: "TanStack Form Devtools",
		description: "Debug form state, validation, and field values",
		requires: {
			packageName: "@tanstack/react-form",
			minVersion: "1.23.0"
		},
		pluginImport: {
			importName: "FormDevtoolsPlugin",
			type: "function"
		},
		pluginId: "tanstack-form",
		docsUrl: "https://tanstack.com/form/latest/docs/devtools",
		author: "TanStack",
		framework: "react",
		isNew: true,
		tags: [
			"TanStack",
			"forms",
			"validation"
		]
	},
	"@tanstack/solid-form-devtools": {
		packageName: "@tanstack/solid-form-devtools",
		title: "TanStack Form Devtools",
		description: "Debug form state, validation, and field values",
		requires: {
			packageName: "@tanstack/solid-form",
			minVersion: "1.23.0"
		},
		pluginImport: {
			importName: "FormDevtoolsPlugin",
			type: "function"
		},
		pluginId: "tanstack-form",
		docsUrl: "https://tanstack.com/form/latest/docs/devtools",
		author: "TanStack",
		isNew: true,
		framework: "solid",
		tags: [
			"TanStack",
			"forms",
			"validation"
		]
	},
	"@tanstack/react-pacer-devtools": {
		packageName: "@tanstack/react-pacer-devtools",
		title: "Pacer Devtools",
		description: "Monitor and debug your Pacer animations and transitions",
		requires: {
			packageName: "@tanstack/react-pacer",
			minVersion: "0.16.4"
		},
		author: "TanStack",
		framework: "react",
		isNew: true,
		tags: ["TanStack"]
	},
	"@tanstack/solid-pacer-devtools": {
		packageName: "@tanstack/solid-pacer-devtools",
		title: "Pacer Devtools",
		description: "Monitor and debug your Pacer animations and transitions",
		requires: {
			packageName: "@tanstack/solid-pacer",
			minVersion: "0.14.4"
		},
		author: "TanStack",
		framework: "solid",
		isNew: true,
		tags: ["TanStack"]
	},
	"@tanstack/devtools-a11y": {
		packageName: "@tanstack/devtools-a11y",
		title: "Accessibility Devtools",
		description: "Audit accessibility issues in real-time with axe-core. Supports WCAG 2.1/2.2, live monitoring, and visual overlays.",
		pluginImport: {
			importName: "createA11yPlugin",
			type: "function"
		},
		pluginId: "devtools-a11y",
		docsUrl: "https://tanstack.com/devtools/latest/docs/plugins/a11y",
		author: "TanStack",
		framework: "react",
		isNew: true,
		tags: ["TanStack", "a11y"]
	},
	"@tanstack/react-ai-devtools": {
		packageName: "@tanstack/react-ai-devtools",
		title: "TanStack AI Devtools",
		description: "Debug TanStack AI - inspect messages, token usage, streaming chunks, tool calls, and reasoning.",
		requires: {
			packageName: "@tanstack/ai-react",
			minVersion: "0.8.0"
		},
		pluginImport: {
			importName: "aiDevtoolsPlugin",
			type: "function"
		},
		pluginId: "tanstack-ai",
		docsUrl: "https://tanstack.com/ai",
		repoUrl: "https://github.com/TanStack/ai",
		author: "TanStack",
		framework: "react",
		isNew: true,
		tags: [
			"TanStack",
			"AI",
			"streaming"
		]
	},
	"@dimano/ts-devtools-plugin-prefetch-heatmap": {
		packageName: "@dimano/ts-devtools-plugin-prefetch-heatmap",
		title: "Prefetch Heatmap",
		description: "Visualize TanStack Router prefetch intent, hits, and waste with a color overlay and a live metrics panel.",
		requires: {
			packageName: "@tanstack/react-router",
			minVersion: "1.0.0"
		},
		pluginImport: {
			importName: "registerPrefetchHeatmapPlugin",
			type: "function"
		},
		pluginId: "prefetch-heatmap",
		logoUrl: "https://raw.githubusercontent.com/dimitrianoudi/tanstack-prefetch-heatmap/main/assets/prefetch-heatmap-card.png",
		docsUrl: "https://github.com/dimitrianoudi/tanstack-prefetch-heatmap#prefetch-heatmap-devtools-plugin",
		repoUrl: "https://github.com/dimitrianoudi/tanstack-prefetch-heatmap",
		author: "Dimitris Anoudis (@dimitrianoudi)",
		framework: "react",
		isNew: true,
		tags: [
			"Router",
			"Prefetch",
			"Analytics",
			"Overlay",
			"TanStack"
		]
	},
	"@santosvilanculos/bevor-react": {
		packageName: "@santosvilanculos/bevor-react",
		title: "Inertia 3 Devtools",
		description: "Inertia 3 devtools built on top of TanStack DevTools",
		pluginImport: {
			importName: "inertiaDevtoolsPlugin",
			type: "function"
		},
		pluginId: "inertia-devtools",
		logoUrl: "https://raw.githubusercontent.com/santosvilanculos/bevor/main/logo.png",
		docsUrl: "https://github.com/SantosVilanculos/bevor/tree/main/packages/react",
		repoUrl: "https://github.com/SantosVilanculos/bevor",
		author: "Santos Vilanculos (santosvilanculos@yahoo.com)",
		framework: "react",
		isNew: true,
		tags: [
			"TanStack",
			"React",
			"Inertia",
			"Laravel"
		]
	}
};
function getAllPluginMetadata() {
	return Object.values(PLUGIN_REGISTRY);
}
function parseVersion(version) {
	if (!version) return null;
	const cleanVersion = version.replace(/^[v^~]/, "").split("-")[0]?.split("+")[0];
	if (!cleanVersion) return null;
	const parts = cleanVersion.split(".");
	if (parts.length < 2) return null;
	const major = parseInt(parts[0] ?? "0", 10);
	const minor = parseInt(parts[1] ?? "0", 10);
	const patch = parseInt(parts[2] ?? "0", 10);
	if (isNaN(major) || isNaN(minor) || isNaN(patch)) return null;
	return {
		major,
		minor,
		patch,
		raw: version
	};
}
function compareVersions(v1, v2) {
	if (v1.major !== v2.major) return v1.major - v2.major;
	if (v1.minor !== v2.minor) return v1.minor - v2.minor;
	return v1.patch - v2.patch;
}
function satisfiesMinVersion(currentVersion, minVersion) {
	const current = parseVersion(currentVersion);
	const min = parseVersion(minVersion);
	if (!current || !min) return true;
	return compareVersions(current, min) >= 0;
}
function satisfiesMaxVersion(currentVersion, maxVersion) {
	const current = parseVersion(currentVersion);
	const max = parseVersion(maxVersion);
	if (!current || !max) return true;
	return compareVersions(current, max) <= 0;
}
function satisfiesVersionRange(currentVersion, minVersion, maxVersion) {
	if (!minVersion && !maxVersion) return { satisfied: true };
	if (minVersion && !satisfiesMinVersion(currentVersion, minVersion)) return {
		satisfied: false,
		reason: `Requires v${minVersion} or higher (current: v${currentVersion})`
	};
	if (maxVersion && !satisfiesMaxVersion(currentVersion, maxVersion)) return {
		satisfied: false,
		reason: `Requires v${maxVersion} or lower (current: v${currentVersion})`
	};
	return { satisfied: true };
}
var detectFramework = (pkg, frameworks) => {
	const allDeps = {
		...pkg.dependencies,
		...pkg.devDependencies
	};
	const frameworkPackageMap = {
		react: ["react", "react-dom"],
		vue: ["vue", "@vue/core"],
		solid: ["solid-js"],
		svelte: ["svelte"],
		angular: ["@angular/core"]
	};
	for (const framework of frameworks) {
		const frameworkPackages = frameworkPackageMap[framework];
		if (frameworkPackages && frameworkPackages.some((pkg2) => allDeps[pkg2])) return framework;
	}
	return "unknown";
};
var isPluginRegistered = (registeredPlugins, packageName, pluginName, framework, pluginId) => {
	if (pluginId) return Array.from(registeredPlugins).some((id) => {
		const idLower = id.toLowerCase();
		const pluginIdLower = pluginId.toLowerCase();
		return idLower.startsWith(pluginIdLower) || idLower.includes(pluginIdLower);
	});
	if (registeredPlugins.has(packageName)) return true;
	const pluginWords = pluginName.toLowerCase().split(/[-_/@]/).filter((word) => word.length > 0);
	const frameworkPart = framework.toLowerCase();
	return Array.from(registeredPlugins).some((id) => {
		const idLower = id.toLowerCase();
		if (idLower.includes(pluginName.toLowerCase())) return true;
		const matchedWords = pluginWords.filter((word) => idLower.includes(word));
		if (matchedWords.length >= 2) return true;
		if (idLower.includes(frameworkPart) && matchedWords.length >= 1) return true;
		return false;
	});
};
var buildPluginCards = (pkg, currentFramework, registeredPlugins, existingCards) => {
	const allDeps = {
		...pkg.dependencies,
		...pkg.devDependencies
	};
	const allCards = [];
	getAllPluginMetadata().forEach((metadata) => {
		const devtoolsPackage = metadata.packageName;
		const isCurrentFramework = metadata.framework === currentFramework || metadata.framework === "other";
		const requiredPackageName = metadata.requires?.packageName;
		const hasPackage = requiredPackageName ? !!allDeps[requiredPackageName] : false;
		const hasDevtools = !!allDeps[devtoolsPackage];
		let versionInfo;
		if (hasPackage && metadata.requires) {
			const currentVersion = requiredPackageName ? allDeps[requiredPackageName] : void 0;
			if (currentVersion) {
				const versionCheck = satisfiesVersionRange(currentVersion, metadata.requires.minVersion, metadata.requires.maxVersion);
				versionInfo = {
					current: currentVersion,
					required: metadata.requires.minVersion,
					satisfied: versionCheck.satisfied,
					reason: versionCheck.reason
				};
			}
		}
		const isRegistered = isPluginRegistered(registeredPlugins, devtoolsPackage, metadata.packageName, metadata.framework, metadata.pluginId);
		let actionType;
		if (!isCurrentFramework) actionType = "wrong-framework";
		else if (metadata.requires && !hasPackage) actionType = "requires-package";
		else if (versionInfo && !versionInfo.satisfied) actionType = "bump-version";
		else if (hasDevtools && isRegistered) actionType = "already-installed";
		else if (hasDevtools && !isRegistered) actionType = "add-to-devtools";
		else if (!hasDevtools && metadata.requires && hasPackage) actionType = "install-devtools";
		else if (!hasDevtools) actionType = "install";
		else actionType = "install";
		const existing = existingCards.find((c) => c.devtoolsPackage === devtoolsPackage);
		allCards.push({
			requiredPackageName: requiredPackageName || "",
			devtoolsPackage,
			framework: metadata.framework,
			hasPackage,
			hasDevtools,
			isRegistered,
			actionType,
			status: existing?.status || "idle",
			error: existing?.error,
			isCurrentFramework,
			metadata,
			versionInfo
		});
	});
	return allCards;
};
var groupIntoSections = (allCards) => {
	const sections = [];
	const featuredCards = allCards.filter((c) => c.metadata?.featured && c.actionType !== "already-installed" && c.isCurrentFramework);
	sections.push({
		id: "featured",
		displayName: "Featured",
		cards: featuredCards
	});
	const activeCards = allCards.filter((c) => c.actionType === "already-installed" && c.isRegistered);
	if (activeCards.length > 0) sections.push({
		id: "active",
		displayName: "Active Plugins",
		cards: activeCards
	});
	const availableCards = allCards.filter((c) => c.isCurrentFramework && c.actionType !== "already-installed" && !c.metadata?.featured);
	if (availableCards.length > 0) sections.push({
		id: "available",
		displayName: "Available Plugins",
		cards: availableCards
	});
	return sections;
};
var _tmpl$16 = [
	"<div",
	"><p",
	">",
	"</p></div>"
];
var _tmpl$29 = [
	"<div",
	" data-testid=\"plugin-marketplace\" data-tsd-surface><div",
	">",
	"",
	"",
	"</div>",
	"</div>"
];
var PluginMarketplace = () => {
	const styles = createStyles();
	const { plugins } = createPlugins();
	const [pluginSections, setPluginSections] = createSignal([]);
	const [currentPackageJson, setCurrentPackageJson] = createSignal(null);
	const [searchInput, setSearchInput] = createSignal("");
	const [searchQuery, setSearchQuery] = createSignal("");
	const [collapsedSections, setCollapsedSections] = createSignal(/* @__PURE__ */ new Set());
	const [showActivePlugins, setShowActivePlugins] = createSignal(true);
	const [selectedTags, setSelectedTags] = createSignal(/* @__PURE__ */ new Set());
	const [isSettingsOpen, setIsSettingsOpen] = createSignal(false);
	let debounceTimeout;
	const handleSearchInput = (value) => {
		setSearchInput(value);
		if (debounceTimeout) clearTimeout(debounceTimeout);
		debounceTimeout = setTimeout(() => {
			setSearchQuery(value);
		}, 300);
	};
	const toggleSection = (framework) => {
		setCollapsedSections((prev) => {
			const newSet = new Set(prev);
			if (newSet.has(framework)) newSet.delete(framework);
			else newSet.add(framework);
			return newSet;
		});
	};
	const matchesSearch = (card, query) => {
		if (!query) return true;
		const lowerQuery = query.toLowerCase();
		return card.devtoolsPackage.toLowerCase().includes(lowerQuery) || card.requiredPackageName.toLowerCase().includes(lowerQuery) || card.framework.toLowerCase().includes(lowerQuery);
	};
	const getFilteredSections = () => {
		const query = searchQuery();
		const showActive = showActivePlugins();
		const tags = selectedTags();
		const pkg = currentPackageJson();
		if (!pkg) return [];
		let sections = groupIntoSections(buildPluginCards(pkg, detectFramework(pkg, FRAMEWORKS), new Set(plugins()?.map((p) => p.id || "") || []), pluginSections().flatMap((s) => s.cards)));
		if (!showActive) sections = sections.filter((section) => section.id !== "active");
		if (tags.size > 0) sections = sections.map((section) => ({
			...section,
			cards: section.cards.filter((card) => {
				if (!card.metadata?.tags) return false;
				return card.metadata.tags.some((tag) => tags.has(tag));
			})
		})).filter((section) => section.cards.length > 0);
		if (!query) return sections;
		return sections.map((section) => ({
			...section,
			cards: section.cards.filter((card) => matchesSearch(card, query))
		})).filter((section) => section.cards.length > 0);
	};
	onMount(() => {
		const cleanupJsonRead = devtoolsEventClient.on("package-json-read", (event) => {
			setCurrentPackageJson(event.payload.packageJson);
			updatePluginCards(event.payload.packageJson);
		});
		const cleanupJsonUpdated = devtoolsEventClient.on("package-json-updated", (event) => {
			setCurrentPackageJson(event.payload.packageJson);
			updatePluginCards(event.payload.packageJson);
		});
		const cleanupDevtoolsInstalled = devtoolsEventClient.on("devtools-installed", (event) => {
			setPluginSections((prevSections) => prevSections.map((section) => ({
				...section,
				cards: section.cards.map((card) => card.devtoolsPackage === event.payload.packageName ? {
					...card,
					status: event.payload.success ? "success" : "error",
					error: event.payload.error
				} : card)
			})));
		});
		const cleanupPluginAdded = devtoolsEventClient.on("plugin-added", (event) => {
			setPluginSections((prevSections) => prevSections.map((section) => ({
				...section,
				cards: section.cards.map((card) => card.devtoolsPackage === event.payload.packageName ? {
					...card,
					status: event.payload.success ? "success" : "error",
					error: event.payload.error
				} : card)
			})));
			if (event.payload.success) {
				const pkg = currentPackageJson();
				if (pkg) updatePluginCards(pkg);
			}
		});
		const requestPackageJson = () => devtoolsEventClient.emit("mounted", void 0);
		let refetchAttempts = 0;
		const refetchInterval = setInterval(() => {
			if (currentPackageJson() || refetchAttempts >= 10) {
				clearInterval(refetchInterval);
				return;
			}
			refetchAttempts++;
			requestPackageJson();
		}, 400);
		onCleanup(() => {
			cleanupJsonRead();
			cleanupJsonUpdated();
			cleanupDevtoolsInstalled();
			cleanupPluginAdded();
			clearInterval(refetchInterval);
		});
		requestPackageJson();
	});
	const updatePluginCards = (pkg) => {
		if (!pkg) return;
		const sections = groupIntoSections(buildPluginCards(pkg, detectFramework(pkg, FRAMEWORKS), new Set(plugins()?.map((p) => p.id || "") || []), pluginSections().flatMap((s) => s.cards)));
		setPluginSections(sections);
	};
	const handleAction = (card) => {
		if (card.actionType === "requires-package" || card.actionType === "wrong-framework" || card.actionType === "already-installed" || card.actionType === "version-mismatch") return;
		setPluginSections((prevSections) => prevSections.map((section) => ({
			...section,
			cards: section.cards.map((c) => c.devtoolsPackage === card.devtoolsPackage ? {
				...c,
				status: "installing"
			} : c)
		})));
		if (card.actionType === "bump-version") {
			devtoolsEventClient.emit("bump-package-version", {
				packageName: card.requiredPackageName,
				devtoolsPackage: card.devtoolsPackage,
				pluginName: card.metadata?.title || card.devtoolsPackage,
				minVersion: card.metadata?.requires?.minVersion,
				pluginImport: card.metadata?.pluginImport
			});
			return;
		}
		if (card.actionType === "add-to-devtools") {
			devtoolsEventClient.emit("add-plugin-to-devtools", {
				packageName: card.devtoolsPackage,
				pluginName: card.metadata?.title ?? card.devtoolsPackage,
				pluginImport: card.metadata?.pluginImport
			});
			return;
		}
		devtoolsEventClient.emit("install-devtools", {
			packageName: card.devtoolsPackage,
			pluginName: card.metadata?.title ?? card.devtoolsPackage,
			pluginImport: card.metadata?.pluginImport
		});
	};
	const getAllTags = () => {
		const tags = /* @__PURE__ */ new Set();
		pluginSections().forEach((section) => {
			if (section.id === "featured" || section.id === "available") section.cards.forEach((card) => {
				if (card.metadata?.tags) card.metadata.tags.forEach((tag) => tags.add(tag));
			});
		});
		return Array.from(tags).sort();
	};
	const toggleTag = (tag) => {
		setSelectedTags((prev) => {
			const newTags = new Set(prev);
			if (newTags.has(tag)) newTags.delete(tag);
			else newTags.add(tag);
			return newTags;
		});
	};
	return ssr(_tmpl$29, ssrAttribute("class", escape(styles().pluginMarketplace, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceScroll, true), false), escape(createComponent(MarketplaceHeader, {
		searchInput,
		onSearchInput: handleSearchInput,
		onSettingsClick: () => setIsSettingsOpen(!isSettingsOpen()),
		tags: getAllTags,
		selectedTags,
		onToggleTag: toggleTag
	})), escape(createComponent(Show, {
		get when() {
			return getFilteredSections().length > 0;
		},
		get children() {
			return createComponent(For, {
				get each() {
					return getFilteredSections();
				},
				children: (section) => createComponent(PluginSectionComponent, {
					section,
					isCollapsed: () => collapsedSections().has(section.id),
					onToggleCollapse: () => toggleSection(section.id),
					onCardAction: handleAction
				})
			});
		}
	})), escape(createComponent(Show, {
		get when() {
			return getFilteredSections().length === 0;
		},
		get children() {
			return ssr(_tmpl$16, ssrAttribute("class", escape(styles().pluginMarketplaceEmpty, true), false), ssrAttribute("class", escape(styles().pluginMarketplaceEmptyText, true), false), searchQuery() ? `No plugins found matching "${escape(searchQuery())}"` : "No additional plugins available. You have all compatible devtools installed and registered!");
		}
	})), escape(createComponent(SettingsPanel, {
		isOpen: isSettingsOpen,
		onClose: () => setIsSettingsOpen(false),
		showActivePlugins,
		setShowActivePlugins
	})));
};
var _tmpl$17 = [
	"<div data-tsd-surface",
	">",
	"</div>"
];
var PluginsTab = () => {
	const { plugins } = createPlugins();
	const styles = createStyles();
	return createComponent(Show, {
		get when() {
			return (plugins()?.length ?? 0) === 0;
		},
		get children() {
			return ssr(_tmpl$17, ssrAttribute("class", escape(styles().pluginsTabContent, true), false), escape(createComponent(PluginMarketplace, {})));
		}
	});
};
var isStyleNode = (node) => {
	return (node.nodeType === 3 ? node.parentNode : node)?.nodeName === "STYLE";
};
function createHeadChanges(onChange, opts = {}) {
	const { attributes = true, childList = true, subtree = true, observeTitle = true } = opts;
	onMount(() => {
		const headObserver = new MutationObserver((mutations) => {
			for (const m of mutations) if (m.type === "childList") {
				m.addedNodes.forEach((node) => {
					if (!isStyleNode(node)) onChange({
						kind: "added",
						node
					}, m);
				});
				m.removedNodes.forEach((node) => {
					if (!isStyleNode(node)) onChange({
						kind: "removed",
						node
					}, m);
				});
			} else if (m.type === "attributes") {
				if (isStyleNode(m.target)) continue;
				const el = m.target;
				onChange({
					kind: "attr",
					target: el,
					name: m.attributeName,
					oldValue: m.oldValue ?? null
				}, m);
			} else if (m.target.parentNode && m.target.parentNode.tagName.toLowerCase() === "title") onChange({
				kind: "title",
				title: document.title
			}, m);
		});
		headObserver.observe(document.head, {
			childList,
			attributes,
			subtree,
			attributeOldValue: attributes,
			characterData: true,
			characterDataOldValue: false
		});
		let titleObserver;
		if (observeTitle) {
			const titleEl = document.head.querySelector("title") || document.head.appendChild(document.createElement("title"));
			titleObserver = new MutationObserver(() => {
				onChange({
					kind: "title",
					title: document.title
				});
			});
			titleObserver.observe(titleEl, {
				childList: true,
				characterData: true,
				subtree: true
			});
		}
		onCleanup(() => {
			headObserver.disconnect();
			titleObserver?.disconnect();
		});
	});
}
var _tmpl$18 = [
	"<div",
	"><div",
	" data-testid=\"social-preview-heading\"><span aria-hidden=\"true\"",
	" style=\"",
	"\"></span>",
	" Preview</div>",
	"<div",
	" data-testid=\"social-preview-title\">",
	"</div><div",
	">",
	"</div><div",
	">",
	"</div></div>"
];
var _tmpl$210 = [
	"<img",
	" alt=\"Preview\"",
	">"
];
var _tmpl$36 = ["<div class=\"", "\">No image</div>"];
var _tmpl$45 = [
	"<div",
	">",
	"</div>"
];
var _tmpl$55 = [
	"<div>",
	"",
	"</div>"
];
var _tmpl$63 = [
	"<div",
	"><strong>Missing tags for ",
	":</strong><ul",
	">",
	"</ul></div>"
];
var _tmpl$73 = [
	"<li",
	">",
	"</li>"
];
var SOCIALS = [
	{
		network: "Facebook",
		tags: [
			{
				key: "og:title",
				prop: "title"
			},
			{
				key: "og:description",
				prop: "description"
			},
			{
				key: "og:image",
				prop: "image"
			},
			{
				key: "og:url",
				prop: "url"
			}
		],
		color: "#4267B2"
	},
	{
		network: "X/Twitter",
		tags: [
			{
				key: "twitter:title",
				prop: "title"
			},
			{
				key: "twitter:description",
				prop: "description"
			},
			{
				key: "twitter:image",
				prop: "image"
			},
			{
				key: "twitter:url",
				prop: "url"
			}
		],
		color: "#1DA1F2"
	},
	{
		network: "LinkedIn",
		tags: [
			{
				key: "og:title",
				prop: "title"
			},
			{
				key: "og:description",
				prop: "description"
			},
			{
				key: "og:image",
				prop: "image"
			},
			{
				key: "og:url",
				prop: "url"
			}
		],
		color: "#0077B5"
	},
	{
		network: "Discord",
		tags: [
			{
				key: "og:title",
				prop: "title"
			},
			{
				key: "og:description",
				prop: "description"
			},
			{
				key: "og:image",
				prop: "image"
			},
			{
				key: "og:url",
				prop: "url"
			}
		],
		color: "#5865F2"
	},
	{
		network: "Slack",
		tags: [
			{
				key: "og:title",
				prop: "title"
			},
			{
				key: "og:description",
				prop: "description"
			},
			{
				key: "og:image",
				prop: "image"
			},
			{
				key: "og:url",
				prop: "url"
			}
		],
		color: "#4A154B"
	},
	{
		network: "Mastodon",
		tags: [
			{
				key: "og:title",
				prop: "title"
			},
			{
				key: "og:description",
				prop: "description"
			},
			{
				key: "og:image",
				prop: "image"
			},
			{
				key: "og:url",
				prop: "url"
			}
		],
		color: "#6364FF"
	},
	{
		network: "Bluesky",
		tags: [
			{
				key: "og:title",
				prop: "title"
			},
			{
				key: "og:description",
				prop: "description"
			},
			{
				key: "og:image",
				prop: "image"
			},
			{
				key: "og:url",
				prop: "url"
			}
		],
		color: "#1185FE"
	}
];
function SocialPreview(props) {
	const styles = createStyles();
	return ssr(_tmpl$18, ssrAttribute("class", escape(styles().seoPreviewCard, true), false), ssrAttribute("class", escape(styles().seoPreviewHeader, true), false), ssrAttribute("class", escape(styles().seoPreviewNetworkDot, true), false), ssrStyleProperty("background:", escape(props.color, true)), escape(props.network), props.meta.image ? ssr(_tmpl$210, ssrAttribute("src", escape(props.meta.image, true), false), ssrAttribute("class", escape(styles().seoPreviewImage, true), false)) : ssr(_tmpl$36, `${escape(styles().seoPreviewImage, true)} ${escape(styles().seoPreviewImagePlaceholder, true)}`), ssrAttribute("class", escape(styles().seoPreviewTitle, true), false), escape(props.meta.title || "No Title"), ssrAttribute("class", escape(styles().seoPreviewDesc, true), false), escape(props.meta.description || "No Description"), ssrAttribute("class", escape(styles().seoPreviewUrl, true), false), escape(props.meta.url || window.location.href));
}
function SocialPreviewsSection() {
	const [reports, setReports] = createSignal(analyzeHead());
	const styles = createStyles();
	function analyzeHead() {
		const metaTags = Array.from(document.head.querySelectorAll("meta"));
		const reports2 = [];
		for (const social of SOCIALS) {
			const found = {};
			const missing = [];
			for (const tag of social.tags) {
				const meta = metaTags.find((m) => (tag.key.includes("twitter:") ? false : m.getAttribute("property") === tag.key) || m.getAttribute("name") === tag.key);
				if (meta && meta.getAttribute("content")) found[tag.prop] = meta.getAttribute("content") || void 0;
				else missing.push(tag.key);
			}
			reports2.push({
				network: social.network,
				found,
				missing
			});
		}
		return reports2;
	}
	createHeadChanges(() => {
		setReports(analyzeHead());
	});
	return createComponent(Section, { get children() {
		return [createComponent(SectionDescription, { children: "See how your current page will look when shared on popular social networks. The tool checks for essential meta tags and highlights any that are missing." }), ssr(_tmpl$45, ssrAttribute("class", escape(styles().seoPreviewSection, true), false), escape(createComponent(For, {
			get each() {
				return reports();
			},
			children: (report, i) => {
				const social = SOCIALS[i()];
				return ssr(_tmpl$55, escape(createComponent(SocialPreview, {
					get meta() {
						return report.found;
					},
					get color() {
						return social.color;
					},
					get network() {
						return social.network;
					}
				})), report.missing.length > 0 ? escape(ssr(_tmpl$63, ssrAttribute("class", escape(styles().seoMissingTagsSection, true), false), escape(social?.network), ssrAttribute("class", escape(styles().seoMissingTagsList, true), false), escape(createComponent(For, {
					get each() {
						return report.missing;
					},
					children: (tag) => ssr(_tmpl$73, ssrAttribute("class", escape(styles().seoMissingTag, true), false), escape(tag))
				})))) : escape(null));
			}
		})))];
	} });
}
var _tmpl$19 = [
	"<div",
	"><div",
	" data-testid=\"serp-preview-label\">",
	"</div><div",
	"><div",
	">",
	"<div",
	"><span",
	" data-testid=\"serp-preview-site-name\">",
	"</span><span",
	">",
	"</span></div></div><div",
	" data-testid=\"serp-preview-title\">",
	"</div>",
	"",
	"</div>",
	"</div>"
];
var _tmpl$211 = [
	"<img",
	" alt=\"favicon icon\"",
	">"
];
var _tmpl$37 = ["<div", "></div>"];
var _tmpl$46 = [
	"<div",
	">",
	"</div>"
];
var _tmpl$56 = [
	"<div",
	"><strong>Issues for ",
	":</strong><ul",
	">",
	"</ul></div>"
];
var _tmpl$64 = [
	"<li",
	">",
	"</li>"
];
var TITLE_MAX_CHARS = 60;
var DESCRIPTION_MAX_CHARS = 158;
var DESCRIPTION_MOBILE_MAX_CHARS = 120;
var ELLIPSIS = "...";
var COMMON_CHECKS = [
	{
		message: "No favicon or icon set on the page.",
		hasIssue: (data) => !data.favicon
	},
	{
		message: "No title tag set on the page.",
		hasIssue: (data) => !data.title.trim()
	},
	{
		message: "No meta description set on the page.",
		hasIssue: (data) => !data.description.trim()
	},
	{
		message: "The title is wider than 600px and it may not be displayed in full length.",
		hasIssue: (_, overflow) => overflow.titleOverflow
	}
];
var SERP_PREVIEWS = [{
	label: "Desktop preview",
	isMobile: false,
	extraChecks: [{
		message: "The meta description may get trimmed at ~960 pixels on desktop and at ~680px on mobile. Keep it below ~158 characters.",
		hasIssue: (_, overflow) => overflow.descriptionOverflow
	}]
}, {
	label: "Mobile preview",
	isMobile: true,
	extraChecks: [{
		message: "Description exceeds the 3-line limit for mobile view. Please shorten your text to fit within 3 lines.",
		hasIssue: (_, overflow) => overflow.descriptionOverflowMobile
	}]
}];
function truncateToChars(text, maxChars) {
	if (text.length <= maxChars) return text;
	if (maxChars <= ELLIPSIS.length) return ELLIPSIS;
	return text.slice(0, maxChars - ELLIPSIS.length) + ELLIPSIS;
}
function getSerpFromHead() {
	const title = document.title || "";
	const url = typeof window !== "undefined" ? window.location.href : "";
	const metaTags = Array.from(document.head.querySelectorAll("meta"));
	const description = metaTags.find((m) => m.getAttribute("name")?.toLowerCase() === "description")?.getAttribute("content")?.trim() || "";
	const siteName = metaTags.find((m) => m.getAttribute("property") === "og:site_name")?.getAttribute("content")?.trim() || (typeof window !== "undefined" ? window.location.hostname.replace(/^www\./, "") : "");
	let favicon = Array.from(document.head.querySelectorAll("link")).find((l) => l.getAttribute("rel")?.toLowerCase().split(/\s+/).includes("icon"))?.getAttribute("href") || null;
	if (favicon && typeof window !== "undefined") try {
		favicon = new URL(favicon, url).href;
	} catch {
		favicon = null;
	}
	return {
		title,
		description,
		siteName,
		favicon,
		url
	};
}
function getSerpIssues(data, overflow, checks) {
	return checks.filter((c) => c.hasIssue(data, overflow)).map((c) => c.message);
}
function SerpSnippetPreview(props) {
	const styles = createStyles();
	return ssr(_tmpl$19, ssrAttribute("class", escape(styles().serpPreviewBlock, true), false), ssrAttribute("class", escape(styles().serpPreviewLabel, true), false), escape(props.label), ssrAttribute("class", props.isMobile ? escape(styles().serpSnippetMobile, true) : escape(styles().serpSnippet, true), false), ssrAttribute("class", escape(styles().serpSnippetTopRow, true), false), props.data.favicon ? ssr(_tmpl$211, ssrAttribute("src", escape(props.data.favicon, true), false), ssrAttribute("class", escape(styles().serpSnippetFavicon, true), false)) : ssr(_tmpl$37, ssrAttribute("class", escape(styles().serpSnippetDefaultFavicon, true), false)), ssrAttribute("class", escape(styles().serpSnippetSiteColumn, true), false), ssrAttribute("class", escape(styles().serpSnippetSiteName, true), false), escape(props.data.siteName || props.data.url), ssrAttribute("class", escape(styles().serpSnippetSiteUrl, true), false), escape(props.data.url), ssrAttribute("class", escape(styles().serpSnippetTitle, true), false), escape(props.displayTitle || props.data.title || "No title"), !props.isMobile && ssr(_tmpl$46, ssrAttribute("class", escape(styles().serpSnippetDesc, true), false), escape(props.displayDescription || props.data.description || "No meta description.")), props.isMobile && ssr(_tmpl$46, ssrAttribute("class", escape(styles().serpSnippetDescMobile, true), false), escape(props.displayDescription || props.data.description || "No meta description.")), props.issues.length > 0 ? ssr(_tmpl$56, ssrAttribute("class", escape(styles().seoMissingTagsSection, true), false), escape(props.label), ssrAttribute("class", escape(styles().serpErrorList, true), false), escape(createComponent(For, {
		get each() {
			return props.issues;
		},
		children: (issue) => ssr(_tmpl$64, ssrAttribute("class", escape(styles().serpReportItem, true), false), escape(issue))
	}))) : escape(null));
}
function SerpPreviewSection() {
	const [serp, setSerp] = createSignal(getSerpFromHead());
	createHeadChanges(() => {
		setSerp(getSerpFromHead());
	});
	const serpPreviewState = createMemo(() => {
		const data = serp();
		const titleText = data.title || "No title";
		const descText = data.description || "No meta description.";
		return {
			displayTitle: truncateToChars(titleText, TITLE_MAX_CHARS),
			displayDescription: truncateToChars(descText, DESCRIPTION_MAX_CHARS),
			overflow: {
				titleOverflow: titleText.length > TITLE_MAX_CHARS,
				descriptionOverflow: descText.length > DESCRIPTION_MAX_CHARS,
				descriptionOverflowMobile: descText.length > DESCRIPTION_MOBILE_MAX_CHARS
			}
		};
	});
	return createComponent(Section, { get children() {
		return [createComponent(SectionDescription, { children: "See how your title tag and meta description may look in Google search results. Data is read from the current page." }), createComponent(For, {
			each: SERP_PREVIEWS,
			children: (preview) => {
				const issues = createMemo(() => getSerpIssues(serp(), serpPreviewState().overflow, [...COMMON_CHECKS, ...preview.extraChecks]));
				return createComponent(SerpSnippetPreview, {
					get data() {
						return serp();
					},
					get displayTitle() {
						return serpPreviewState().displayTitle;
					},
					get displayDescription() {
						return serpPreviewState().displayDescription;
					},
					get isMobile() {
						return preview.isMobile;
					},
					get label() {
						return preview.label;
					},
					get issues() {
						return issues();
					}
				});
			}
		})];
	} });
}
var _tmpl$20 = [
	"<div data-testid=\"seo-workspace\" data-tsd-surface",
	">",
	"",
	"</div>"
];
var SeoTab = () => {
	const [activeView, setActiveView] = createSignal("social-previews");
	const styles = createStyles();
	return ssr(_tmpl$20, ssrAttribute("class", escape(styles().seoWorkspace, true), false), escape(createComponent(WorkbenchSecondaryTabs, {
		ariaLabel: "SEO sections",
		get children() {
			return [createComponent(WorkbenchSecondaryTab, {
				get selected() {
					return activeView() === "social-previews";
				},
				get ariaCurrent() {
					return activeView() === "social-previews" ? "page" : void 0;
				},
				onClick: () => setActiveView("social-previews"),
				children: "Social previews"
			}), createComponent(WorkbenchSecondaryTab, {
				get selected() {
					return activeView() === "serp-preview";
				},
				get ariaCurrent() {
					return activeView() === "serp-preview" ? "page" : void 0;
				},
				onClick: () => setActiveView("serp-preview"),
				children: "SERP preview"
			})];
		}
	})), escape(createComponent(MainPanel$1, {
		withPadding: true,
		get ["class"]() {
			return styles().seoContent;
		},
		get children() {
			return [createComponent(Show, {
				get when() {
					return activeView() === "social-previews";
				},
				get children() {
					return createComponent(SocialPreviewsSection, {});
				}
			}), createComponent(Show, {
				get when() {
					return activeView() === "serp-preview";
				},
				get children() {
					return createComponent(SerpPreviewSection, {});
				}
			})];
		}
	})));
};
var tabs = [
	{
		name: "Plugins",
		id: "plugins",
		component: () => createComponent(PluginsTab, {})
	},
	{
		name: "SEO",
		id: "seo",
		component: () => createComponent(SeoTab, {})
	},
	{
		name: "Settings",
		id: "settings",
		component: () => createComponent(SettingsTab, {})
	}
];
var _tmpl$21 = [
	"<div",
	" data-testid=\"",
	"\" role=\"group\" aria-label=\"Panes in this group\"",
	" style=\"",
	"\">",
	"</div>"
];
var _tmpl$212 = [
	"<button type=\"button\" data-tsd-group-tab data-testid=\"",
	"\" data-tsd-control",
	">",
	"</button>"
];
var _tmpl$38 = [
	"<span",
	">",
	"<button type=\"button\" aria-label=\"",
	"\" data-testid=\"",
	"\" data-tsd-control",
	">",
	"</button></span>"
];
var _tmpl$47 = [
	"<div data-testid=\"plugins-empty-state\" data-tsd-surface",
	" style=\"",
	"\"><span aria-hidden=\"true\"",
	">",
	"</span><p",
	">No plugin open</p><p",
	">Pick a plugin from the strip above to open its panel. You can keep up to ",
	" open, split side by side or stacked as tabs.</p></div>"
];
var _tmpl$57 = [
	"<div data-testid=\"plugins-workspace\" data-tsd-surface",
	" style=\"",
	"\">",
	"",
	"",
	"<p aria-live=\"polite\" data-testid=\"plugin-workspace-status\"",
	">",
	"</p><p id=\"tsd-pane-move-hint\"",
	">Press Enter to pick this pane up and move it with the arrow keys.</p>",
	"</div>"
];
var _tmpl$65 = [
	"<div id=\"",
	"\" data-plugin-mount data-testid=\"",
	"\" data-tsd-surface",
	" style=\"",
	"\"></div>"
];
var _tmpl$74 = [
	"<div role=\"separator\" tabindex=\"0\" data-tsd-control data-tsd-separator=\"plugin-pane\" data-testid=\"plugin-splitter\"",
	" aria-label=\"Resize plugin panes\" aria-valuemin=\"0\" aria-valuemax=\"100\"",
	" style=\"",
	"\"></div>"
];
var _tmpl$83 = [
	"<div data-testid=\"plugin-drop-overlay\"",
	" style=\"",
	"\"></div>"
];
var _tmpl$92 = [
	"<span aria-hidden=\"true\" data-testid=\"plugin-drag-preview\"",
	" style=\"",
	"\">",
	"</span>"
];
var insetRect = (rect, inset) => ({
	left: rect.left + inset,
	top: rect.top + inset,
	width: Math.max(rect.width - inset * 2, 0),
	height: Math.max(rect.height - inset * 2, 0)
});
var expandSplitterRect = (handle, extra) => handle.dir === "row" ? {
	...handle.rect,
	left: handle.rect.left - extra,
	width: handle.rect.width + extra * 2
} : {
	...handle.rect,
	top: handle.rect.top - extra,
	height: handle.rect.height + extra * 2
};
var DRAG_HOLD_MS = 500;
var GroupTabBar = (props) => {
	const styles = createStyles();
	const sortable = createSortable({
		get items() {
			return props.tabs;
		},
		group: "tsd-plugin-panes",
		axis: "x",
		onReorder: (next) => props.onReorder(next),
		onTransfer: ({ item, to }) => props.onTransfer(item, to)
	});
	return ssr(_tmpl$21, ssrAttribute("data-tsd-group-tabs", escape(props.groupId, true), false), `plugin-group-tabs-${escape(props.groupId, true)}`, ssrAttribute("class", escape(styles().pluginGroupTabs, true), false), ssrStyleProperty("position:", "absolute") + ssrStyleProperty(";left:", `${escape(props.rect?.left ?? 0, true)}px`) + ssrStyleProperty(";top:", `${escape(props.rect?.top ?? 0, true)}px`) + ssrStyleProperty(";width:", `${escape(props.rect?.width ?? 0, true)}px`), escape(createComponent(For, {
		get each() {
			return props.tabs;
		},
		children: (tabId, index) => ssr(_tmpl$38, ssrAttribute("class", escape(styles().pluginGroupTabItem, true), false) + ssrAttribute("data-tsd-selected", index() === props.activeIndex ? "true" : escape(void 0, true), false) + ssrAttribute("data-tsd-held", props.heldTabId === tabId ? "true" : escape(void 0, true), false), ssrElement("span", mergeProps(() => sortable.row(tabId), { get ["class"]() {
			return styles().pluginGroupTabRow;
		} }), ssr(_tmpl$212, `plugin-tab-${escape(tabId, true)}`, ssrAttribute("aria-pressed", escape(index(), true) === escape(props.activeIndex, true), false) + ssrAttribute("aria-describedby", escape(props.moveHintId, true), false) + ssrAttribute("class", escape(styles().pluginGroupTab, true), false), escape(props.titleOf(tabId))), false), `Close ${escape(props.titleOf(tabId), true)}`, `plugin-tab-close-${escape(tabId, true)}`, ssrAttribute("class", escape(styles().pluginGroupTabClose, true), false), escape(createComponent(X, { "aria-hidden": "true" })))
	})));
};
var PluginWorkspace = (props) => {
	const { plugins, activePlugins, layout, setLayout } = createPlugins();
	const { acceptStripDrags } = createStripDrag();
	const { theme } = createTheme();
	const styles = createStyles();
	const [pluginRefs, setPluginRefs] = createSignal(/* @__PURE__ */ new Map());
	const [box, setBox] = createSignal({
		w: 0,
		h: 0
	});
	const [held, setHeld] = createSignal(null);
	const [dropTarget, setDropTarget] = createSignal(null);
	const [announcement, setAnnouncement] = createSignal("");
	const [previewAt, setPreviewAt] = createSignal(null);
	const moveHintId = "tsd-pane-move-hint";
	createEffect(() => {
		props.visible;
		props.isOpen;
	});
	const paddedBox = createMemo(() => ({
		w: Math.max(box().w - 16, 0),
		h: Math.max(box().h - 16, 0)
	}));
	const shift = (rect) => ({
		...rect,
		left: rect.left + 8,
		top: rect.top + 8
	});
	const groupRects = createMemo(() => {
		const raw = layoutRects(layout(), paddedBox(), 8);
		return Object.fromEntries(Object.entries(raw).map(([id, rect]) => [id, shift(rect)]));
	});
	const handles = createMemo(() => splitterHandles(layout(), paddedBox(), 8).map((handle) => ({
		...handle,
		rect: shift(handle.rect)
	})));
	const groups = createMemo(() => allGroups(layout()));
	const paneOrder = createMemo(() => [...activePlugins()].sort(), [], { equals: (a, b) => a.length === b.length && a.every((id, i) => id === b[i]) });
	const cardRect = (groupId) => groupRects()[groupId] ?? null;
	const tabBarRect = (groupId) => {
		const card = cardRect(groupId);
		if (!card) return null;
		return {
			...card,
			height: 32
		};
	};
	const paneRect = (groupId) => {
		const card = cardRect(groupId);
		if (!card) return null;
		return {
			left: card.left,
			top: card.top + 32,
			width: card.width,
			height: Math.max(card.height - 32, 0)
		};
	};
	const groupOf = (tabId) => findGroupOfTab(layout(), tabId);
	const isVisibleTab = (tabId) => {
		const group = groupOf(tabId);
		return group !== null && group.tabs[group.active] === tabId;
	};
	const pluginById = (id) => plugins()?.find((entry) => entry.id === id);
	const titleOf = (id) => {
		const plugin = pluginById(id);
		if (plugin === void 0) return id;
		return typeof plugin.name === "string" ? plugin.name : id;
	};
	createEffect(() => {
		for (const pluginId of activePlugins()) {
			const plugin = pluginById(pluginId);
			const ref = pluginRefs().get(pluginId);
			if (plugin && ref) plugin.render(ref, {
				theme: theme(),
				devtoolsOpen: props.isOpen
			});
		}
	});
	const clearDrag = () => {
		setHeld(null);
		setDropTarget(null);
		setPreviewAt(null);
	};
	createEffect(() => {});
	const announce = (message) => setAnnouncement(message);
	const resolveTarget = (groupId, point) => {
		const rect = groupRects()[groupId];
		if (!rect) return null;
		if (point.y <= rect.top + 32) return {
			groupId,
			zone: "center",
			willStack: true
		};
		const zone = zoneAt(point, paneRect(groupId) ?? rect, PANE_DROP_EDGE_RATIO);
		return {
			groupId,
			zone,
			willStack: zone === "center" || !canSplit(layout(), groupId, zone, MIN_PANE_SIZE, paddedBox(), 8)
		};
	};
	const commitDrop = (target, tabId) => {
		if (target === null) return;
		if (target.groupId === null) {
			setLayout(singleGroup([tabId]));
			return;
		}
		const next = target.willStack ? stackInto(layout(), target.groupId, tabId) : splitAt(layout(), target.groupId, target.zone, tabId);
		setLayout(next);
	};
	const toLocal = (point) => {
		return {
			x: point.x - 0,
			y: point.y - 0
		};
	};
	const localPoint = (event) => toLocal({
		x: event.clientX,
		y: event.clientY
	});
	const startTabDrag = (tabId, event) => {
		if (event.button !== 0) return;
		let dragging = false;
		let latest = {
			x: event.clientX,
			y: event.clientY
		};
		const holdTimer = window.setTimeout(() => {
			dragging = true;
			setHeld({ tabId });
			setPreviewAt(latest);
			setDropTarget(targetAt(toLocal(latest)));
		}, DRAG_HOLD_MS);
		const move = (moveEvent) => {
			latest = {
				x: moveEvent.clientX,
				y: moveEvent.clientY
			};
			if (!dragging) return;
			setPreviewAt(latest);
			setDropTarget(targetAt(localPoint(moveEvent)));
		};
		const up = () => {
			window.clearTimeout(holdTimer);
			document.removeEventListener("pointermove", move);
			document.removeEventListener("pointerup", up);
			if (dragging) commitDrop(dropTarget(), tabId);
			clearDrag();
		};
		document.addEventListener("pointermove", move);
		document.addEventListener("pointerup", up);
	};
	const groupAt = (point) => groups().find((entry) => {
		const rect = groupRects()[entry.id];
		return rect !== void 0 && point.x >= rect.left && point.x <= rect.left + rect.width && point.y >= rect.top && point.y <= rect.top + rect.height;
	});
	const insideWorkspace = (point) => point.x >= 0 && point.y >= 0 && point.x <= box().w && point.y <= box().h;
	const targetAt = (point) => {
		if (layout() === null) return insideWorkspace(point) ? {
			groupId: null,
			zone: "center",
			willStack: true
		} : null;
		const over = groupAt(point);
		return over ? resolveTarget(over.id, point) : null;
	};
	acceptStripDrags((pluginId, startPoint) => {
		const alreadyOpen = activePlugins().includes(pluginId);
		if (!alreadyOpen && activePlugins().length >= 18) {
			announce(`Already at the limit of 18 open plugins`);
			return;
		}
		setHeld({ tabId: pluginId });
		setPreviewAt(startPoint);
		const aim = (point) => setDropTarget(targetAt(point));
		aim(toLocal(startPoint));
		const move = (event) => {
			setPreviewAt({
				x: event.clientX,
				y: event.clientY
			});
			aim(localPoint(event));
		};
		const up = () => {
			document.removeEventListener("pointermove", move);
			document.removeEventListener("pointerup", up);
			const target = dropTarget();
			if (target === null) {
				if (!alreadyOpen) announce(`${titleOf(pluginId)} was not placed`);
			} else {
				commitDrop(target, pluginId);
				announce(`${titleOf(pluginId)} ${target.willStack ? "stacked as a tab" : `split to the ${target.zone}`}`);
			}
			clearDrag();
		};
		document.addEventListener("pointermove", move);
		document.addEventListener("pointerup", up);
	});
	const moveModeKeys = (tabId, event) => {
		const holding = held()?.tabId === tabId;
		if (event.key === "Escape" && holding) {
			event.preventDefault();
			clearDrag();
			announce(`${titleOf(tabId)} left where it was`);
			return;
		}
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			if (!holding) {
				setHeld({ tabId });
				setDropTarget(null);
				announce(`${titleOf(tabId)} picked up. Use the arrow keys to choose a place, Enter to drop, Escape to cancel.`);
				return;
			}
			const target = dropTarget();
			if (target === null) {
				clearDrag();
				announce(`${titleOf(tabId)} left where it was`);
			} else {
				commitDrop(target, tabId);
				clearDrag();
				announce(`${titleOf(tabId)} ${target.willStack ? "stacked as a tab" : `split to the ${target.zone}`}`);
			}
			return;
		}
		if (!holding) return;
		const zone = {
			ArrowLeft: "left",
			ArrowRight: "right",
			ArrowUp: "top",
			ArrowDown: "bottom"
		}[event.key];
		if (zone === void 0) return;
		event.preventDefault();
		const group = groupOf(tabId);
		if (group === null) return;
		const rect = groupRects()[group.id];
		const neighbour = groups().find((entry) => {
			if (entry.id === group.id) return false;
			const other = groupRects()[entry.id];
			if (!other || !rect) return false;
			return zone === "left" ? other.left + other.width <= rect.left + 1 : zone === "right" ? other.left >= rect.left + rect.width - 1 : zone === "top" ? other.top + other.height <= rect.top + 1 : other.top >= rect.top + rect.height - 1;
		});
		setDropTarget(neighbour ? {
			groupId: neighbour.id,
			zone: "center",
			willStack: true
		} : resolveTarget(group.id, {
			x: (rect?.left ?? 0) + (zone === "left" ? 1 : zone === "right" ? (rect?.width ?? 0) - 1 : (rect?.width ?? 0) / 2),
			y: (rect?.top ?? 0) + (zone === "top" ? 1 : zone === "bottom" ? (rect?.height ?? 0) - 1 : (rect?.height ?? 0) / 2)
		}));
	};
	const overlayRect = createMemo(() => {
		const target = dropTarget();
		if (target === null) return null;
		if (target.groupId === null) return insetRect({
			left: 0,
			top: 0,
			width: box().w,
			height: box().h
		}, 8);
		const rect = cardRect(target.groupId);
		if (!rect) return null;
		if (target.willStack) return rect;
		const half = (value) => value / 2;
		return target.zone === "left" ? {
			...rect,
			width: half(rect.width)
		} : target.zone === "right" ? {
			left: rect.left + half(rect.width),
			top: rect.top,
			width: half(rect.width),
			height: rect.height
		} : target.zone === "top" ? {
			...rect,
			height: half(rect.height)
		} : {
			left: rect.left,
			top: rect.top + half(rect.height),
			width: rect.width,
			height: half(rect.height)
		};
	});
	return ssr(_tmpl$57, ssrAttribute("data-tsd-dragging", held() ? "true" : escape(void 0, true), false) + ssrAttribute("class", escape(styles().pluginWorkspace, true), false), ssrStyleProperty("display:", props.visible ? "block" : "none"), escape(createComponent(Show, {
		get when() {
			return activePlugins().length > 0;
		},
		get children() {
			return [
				createComponent(For, {
					get each() {
						return groups();
					},
					children: (group) => createComponent(GroupTabBar, {
						get groupId() {
							return group.id;
						},
						get tabs() {
							return group.tabs;
						},
						get activeIndex() {
							return group.active;
						},
						get rect() {
							return tabBarRect(group.id);
						},
						get heldTabId() {
							return held()?.tabId ?? null;
						},
						titleOf,
						moveHintId,
						onReorder: (tabIds) => setLayout(setTabs(layout(), group.id, tabIds)),
						onTransfer: (tabId, index) => setLayout(moveTab(layout(), tabId, group.id, index)),
						onSelect: (tabId) => setLayout(activateTab(layout(), tabId)),
						onClose: (tabId) => setLayout(closeTab(layout(), tabId)),
						onPointerDown: startTabDrag,
						onKeyDown: moveModeKeys
					})
				}),
				createComponent(For, {
					get each() {
						return paneOrder();
					},
					children: (pluginId) => {
						onCleanup(() => {
							pluginById(pluginId)?.destroy?.(pluginId);
							setPluginRefs((previous) => {
								const next = new Map(previous);
								next.delete(pluginId);
								return next;
							});
						});
						const rect = () => paneRect(groupOf(pluginId)?.id ?? "");
						return ssr(_tmpl$65, `${escape(PLUGIN_CONTAINER_ID, true)}-${escape(pluginId, true)}`, `plugin-pane-${escape(pluginId, true)}`, ssrAttribute("class", escape(styles().pluginsTabContent, true), false), ssrStyleProperty("position:", "absolute") + ssrStyleProperty(";left:", `${escape(rect()?.left ?? 0, true)}px`) + ssrStyleProperty(";top:", `${escape(rect()?.top ?? 0, true)}px`) + ssrStyleProperty(";width:", `${escape(rect()?.width ?? 0, true)}px`) + ssrStyleProperty(";height:", `${escape(rect()?.height ?? 0, true)}px`) + ssrStyleProperty(";display:", isVisibleTab(pluginId) ? "block" : "none"));
					}
				}),
				createComponent(Index, {
					get each() {
						return handles();
					},
					children: (handle) => {
						const rect = () => expandSplitterRect(handle(), 8);
						return ssr(_tmpl$74, ssrAttribute("aria-orientation", handle().dir === "row" ? "vertical" : "horizontal", false), ssrAttribute("aria-valuenow", escape(Math.round((handle().dir === "row" ? handle().rect.left : handle().rect.top) / Math.max(handle().extent, 1) * 100), true), false) + ssrAttribute("class", escape(styles().pluginSplitter(handle().dir), true), false), ssrStyleProperty("left:", `${escape(rect().left, true)}px`) + ssrStyleProperty(";top:", `${escape(rect().top, true)}px`) + ssrStyleProperty(";width:", `${escape(rect().width, true)}px`) + ssrStyleProperty(";height:", `${escape(rect().height, true)}px`));
					}
				})
			];
		}
	})), escape(createComponent(Show, {
		get when() {
			return overlayRect();
		},
		children: (rect) => ssr(_tmpl$83, ssrAttribute("data-tsd-drop-intent", dropTarget()?.willStack ? "stack" : "split", false) + ssrAttribute("class", escape(styles().pluginDropOverlay, true), false), ssrStyleProperty("left:", `${escape(rect().left, true)}px`) + ssrStyleProperty(";top:", `${escape(rect().top, true)}px`) + ssrStyleProperty(";width:", `${escape(rect().width, true)}px`) + ssrStyleProperty(";height:", `${escape(rect().height, true)}px`))
	})), escape(createComponent(Show, {
		get when() {
			return previewAt();
		},
		children: (at) => createComponent(Portal, {
			get mount() {
				return document.body;
			},
			get children() {
				return ssr(_tmpl$92, ssrAttribute("class", escape(styles().pluginDragPreview, true), false), ssrStyleProperty("left:", `${escape(at().x, true)}px`) + ssrStyleProperty(";top:", `${escape(at().y, true)}px`), escape(titleOf(held()?.tabId ?? "")));
			}
		})
	})), ssrAttribute("class", escape(styles().pluginSrOnly, true), false), escape(announcement()), ssrAttribute("class", escape(styles().pluginSrOnly, true), false), escape(createComponent(Show, {
		get when() {
			return activePlugins().length === 0;
		},
		get children() {
			return ssr(_tmpl$47, ssrAttribute("class", escape(styles().pluginsEmptyState, true), false), ssrStyleProperty("position:", "absolute") + ssrStyleProperty(";inset:", "0"), ssrAttribute("class", escape(styles().pluginsEmptyStateIcon, true), false), escape(createComponent(PackageIcon, {})), ssrAttribute("class", escape(styles().pluginsEmptyStateTitle, true), false), ssrAttribute("class", escape(styles().pluginsEmptyStateHint, true), false), escape(18));
		}
	})));
};
var _tmpl$30 = [
	"<div",
	" data-tsd-surface style=\"",
	"\">",
	"",
	"</div>"
];
var TabContent = (props) => {
	const { state } = createDevtoolsState();
	const styles = createStyles();
	const component = createMemo(() => tabs.find((tab) => tab.id === state().activeTab)?.component || null);
	const showsPlugins = () => !props.showMarketplace && state().activeTab === "plugins";
	return ssr(_tmpl$30, ssrAttribute("class", escape(styles().tabContent, true), false), ssrStyleProperty("flex:", "1 1 0") + ssrStyleProperty(";min-height:", "0") + ssrStyleProperty(";position:", "relative"), escape(createComponent(PluginWorkspace, {
		get isOpen() {
			return props.isOpen;
		},
		get visible() {
			return showsPlugins();
		}
	})), props.showMarketplace ? escape(createComponent(PluginMarketplace, {})) : escape(component()?.({ isOpen: props.isOpen })));
};
var _tmpl$31 = [
	"<div style=\"",
	"\">",
	"</div>"
];
var _tmpl$213 = ["<div style=\"", "\"></div>"];
var SourceInspector = () => {
	const { settings } = createDevtoolsSettings();
	const highlightStateInit = () => ({
		element: null,
		bounding: {
			width: 0,
			height: 0,
			left: 0,
			top: 0
		},
		dataSource: ""
	});
	const [highlightState, setHighlightState] = createStore(highlightStateInit());
	const resetHighlight = () => {
		setHighlightState(highlightStateInit());
	};
	const [nameTagRef, setNameTagRef] = createSignal(null);
	const nameTagSize = createElementSize(() => nameTagRef());
	const [mousePosition, setMousePosition] = createStore({
		x: 0,
		y: 0
	});
	createEventListener(document, "mousemove", (e) => {
		setMousePosition({
			x: e.clientX,
			y: e.clientY
		});
	});
	const downList = useKeyDownList();
	const [disabledAfterClick, setDisabledAfterClick] = createSignal(false);
	const isHighlightingKeysHeld = createMemo(() => {
		return isHotkeyCombinationPressed(downList(), settings().inspectHotkey);
	});
	createEffect(() => {
		if (!isHighlightingKeysHeld()) setDisabledAfterClick(false);
	});
	const isActive = createMemo(() => isHighlightingKeysHeld() && !disabledAfterClick());
	createEffect(() => {
		if (isActive()) document.body.style.cursor = "pointer";
		else document.body.style.cursor = "";
	});
	createEffect(() => {
		if (!isActive()) {
			resetHighlight();
			return;
		}
		const target = document.elementFromPoint(mousePosition.x, mousePosition.y);
		if (!(target instanceof HTMLElement)) {
			resetHighlight();
			return;
		}
		if (target === highlightState.element) return;
		const dataSource = target.getAttribute("data-tsd-source");
		if (!dataSource) {
			resetHighlight();
			return;
		}
		const rect = target.getBoundingClientRect();
		const bounding = {
			width: rect.width,
			height: rect.height,
			left: rect.left,
			top: rect.top
		};
		setHighlightState({
			element: target,
			bounding,
			dataSource
		});
	});
	createEventListener(document, "click", (e) => {
		if (!highlightState.element) return;
		const source = highlightState.dataSource;
		window.getSelection()?.removeAllRanges();
		e.preventDefault();
		e.stopPropagation();
		setDisabledAfterClick(true);
		if (settings().sourceAction === "copy-path") {
			navigator.clipboard.writeText(source).catch(() => {});
			return;
		}
		const baseUrl = new URL("/", location.origin);
		const url = new URL(`__tsd/open-source?source=${encodeURIComponent(source)}`, baseUrl);
		fetch(url).catch(() => {});
	});
	const currentElementBoxStyles = createMemo(() => {
		if (highlightState.element) return {
			display: "block",
			width: `${highlightState.bounding.width}px`,
			height: `${highlightState.bounding.height}px`,
			left: `${highlightState.bounding.left}px`,
			top: `${highlightState.bounding.top}px`,
			"background-color": "oklch(55.4% 0.046 257.417 /0.25)",
			transition: "all 0.05s linear",
			position: "fixed",
			"z-index": 9999
		};
		return { display: "none" };
	});
	const fileNameStyles = createMemo(() => {
		if (highlightState.element && nameTagRef()) {
			const windowWidth = window.innerWidth;
			const nameTagHeight = nameTagSize.height || 26;
			const nameTagWidth = nameTagSize.width || 0;
			let left = highlightState.bounding.left;
			let top = highlightState.bounding.top - nameTagHeight - 4;
			if (top < 0) top = highlightState.bounding.top + highlightState.bounding.height + 4;
			if (left + nameTagWidth > windowWidth) left = windowWidth - nameTagWidth - 4;
			if (left < 0) left = 4;
			return {
				position: "fixed",
				left: `${left}px`,
				top: `${top}px`,
				"background-color": "oklch(55.4% 0.046 257.417 /0.80)",
				color: "white",
				padding: "2px 4px",
				fontSize: "12px",
				"border-radius": "2px",
				"z-index": 1e4,
				visibility: "visible",
				transition: "all 0.05s linear"
			};
		}
		return { display: "none" };
	});
	return [ssr(_tmpl$31, ssrStyle({
		...fileNameStyles(),
		"pointer-events": "none"
	}), escape(highlightState.dataSource)), ssr(_tmpl$213, ssrStyle({
		...currentElementBoxStyles(),
		"pointer-events": "none"
	}))];
};
var _tmpl$39 = [
	"<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64.04 83.84\" fill=\"currentColor\"",
	">",
	"<path d=\"M32.02,0c23.15,0,32.02,14.33,32.02,41.92s-8.87,41.92-32.02,41.92S0,69.53,0,41.92C0,14.33,8.87,0,32.02,0ZM42.61,61.08c-3.01,0-4.65.82-5.97,1.48-1.14.57-2.03,1.02-4.01,1.02s-2.87-.45-4.01-1.02c-1.32-.66-2.96-1.48-5.97-1.48s-4.65.82-5.97,1.48c-1.14.57-2.03,1.02-4.01,1.02v4.37c3.01,0,4.65-.82,5.97-1.48,1.14-.57,2.03-1.02,4.01-1.02s2.87.45,4.01,1.02c1.32.66,2.96,1.48,5.97,1.48s4.65-.82,5.97-1.48c1.14-.57,2.03-1.02,4.01-1.02s2.87.45,4.01,1.02c1.32.66,2.96,1.48,5.97,1.48v-4.37c-1.97,0-2.87-.45-4.01-1.02-1.32-.66-2.96-1.48-5.97-1.48ZM44.04,17.29c2.27-2.05,0-5.76-2.84-4.64-1.57.63-3.05,1.53-4.37,2.72-2.06,1.87-3.45,4.22-4.2,6.78-.75-2.56-2.14-4.91-4.2-6.78-1.32-1.18-2.8-2.09-4.37-2.72-2.84-1.12-5.11,2.59-2.84,4.64l8.33,7.52c-2.72-1.84-6-2.93-9.54-2.93-1.93,0-3.78.31-5.52.91-2.92.99-2.11,5.35.96,5.35h11.62c-2.56.49-4.99,1.63-7.03,3.45-1.32,1.18-2.36,2.56-3.14,4.07-1.41,2.71,2.05,5.34,4.32,3.31l9.38-8.45-.7,23.25c0,.28-.16.55-.37.78-.3-.13-.58-.27-.9-.43-1.32-.66-2.96-1.48-5.97-1.48s-4.65.82-5.97,1.48c-1.14.57-2.03,1.02-4.01,1.02v4.37c3.01,0,4.65-.82,5.97-1.48,1.14-.57,2.03-1.02,4.01-1.02s2.87.45,4.01,1.02c1.32.66,2.96,1.48,5.97,1.48s4.65-.82,5.97-1.48c1.14-.57,2.03-1.02,4.01-1.02s2.87.45,4.01,1.02c1.32.66,2.96,1.48,5.97,1.48v-4.37c-1.97,0-2.87-.45-4.01-1.02v-.02c-1.32-.66-2.96-1.48-5.97-1.48s-4.65.82-5.97,1.48c-.34.16-.66.33-.99.46-.25-.22-.4-.51-.42-.81l-.7-23.37,9.51,8.58c2.27,2.05,5.73-.58,4.32-3.31-.78-1.5-1.82-2.89-3.14-4.07-2.03-1.84-4.46-2.96-7.03-3.45h11.62c3.08,0,3.87-4.35.96-5.35-1.73-.58-3.59-.91-5.52-.91-3.53,0-6.8,1.09-9.54,2.93l8.33-7.52Z\"></path></svg>"
];
var _tmpl$214 = ["<title>", "</title>"];
var TanStackEmblem = (props) => ssr(_tmpl$39, ssrAttribute("aria-hidden", props.title ? escape(void 0, true) : "true", false) + ssrAttribute("role", props.title ? "img" : escape(void 0, true), false), props.title ? ssr(_tmpl$214, escape(props.title)) : escape(null));
var _tmpl$40 = [
	"<header aria-label=\"TanStack Devtools\" data-testid=\"workbench-header\" data-tsd-surface",
	"><span data-testid=\"workbench-logo\" aria-hidden=\"true\"",
	">",
	"</span><strong data-testid=\"workbench-wordmark\" class=\"",
	"\">TanStack Devtools</strong><nav aria-label=\"Workbench destinations\" data-testid=\"workbench-destinations\"",
	">",
	"</nav><span",
	"><button type=\"button\" aria-label=\"Settings\" title=\"Settings\" data-testid=\"tsd-tab-settings\" data-tsd-control",
	" data-icon=\"cogs\"",
	">",
	"</button>",
	"</span></header>"
];
var _tmpl$215 = [
	"<button type=\"button\" data-testid=\"",
	"\" data-tsd-control",
	">",
	"</button>"
];
var _tmpl$310 = [
	"<button type=\"button\" aria-label=\"Detach TanStack Devtools\" title=\"Detach into its own window\" data-testid=\"tsd-pip-button\" data-tsd-control",
	">",
	"</button>"
];
var _tmpl$48 = [
	"<button type=\"button\" aria-label=\"Close TanStack Devtools\" title=\"Close TanStack Devtools\" data-testid=\"tsd-close-button\" data-tsd-control",
	">",
	"</button>"
];
var WorkbenchHeader = (props) => {
	const { state, setState } = createDevtoolsState();
	const pip = createPiPWindow();
	const styles = createStyles();
	ensureWorkbenchGeometryStyles(document);
	const isSelected = (destination) => destination === "marketplace" ? props.showMarketplace() : !props.showMarketplace() && state().activeTab === destination;
	return ssr(_tmpl$40, ssrAttribute("class", escape(styles().workbenchHeader, true), false), ssrAttribute("class", escape(styles().workbenchLogo, true), false), escape(createComponent(TanStackEmblem, {})), `${escape(styles().workbenchWordmark, true)} tsd-workbench-wordmark`, ssrAttribute("class", escape(styles().workbenchDestinations, true), false), escape([
		"plugins",
		"marketplace",
		"seo"
	].map((destination) => {
		const label = destination === "seo" ? "SEO" : destination[0].toUpperCase() + destination.slice(1);
		return ssr(_tmpl$215, `tsd-tab-${escape(destination, true)}`, ssrAttribute("class", escape(styles().workbenchNavButton, true), false) + ssrAttribute("data-tsd-selected", isSelected(destination) ? "true" : escape(void 0, true), false) + ssrAttribute("aria-current", isSelected(destination) ? "page" : escape(void 0, true), false), escape(label));
	})), ssrAttribute("class", escape(styles().workbenchActions, true), false), ssrAttribute("class", escape(styles().workbenchActionButton, true), false), ssrAttribute("data-tsd-selected", isSelected("settings") ? "true" : escape(void 0, true), false) + ssrAttribute("aria-current", isSelected("settings") ? "page" : escape(void 0, true), false), escape(createComponent(Cogs, {})), pip().pipWindow === null ? escape([ssr(_tmpl$310, ssrAttribute("class", escape(styles().workbenchActionButton, true), false), escape(createComponent(PiP, {}))), ssr(_tmpl$48, ssrAttribute("class", escape(styles().workbenchActionButton, true), false), escape(createComponent(X, {})))]) : escape(null));
};
var _tmpl$41 = [
	"<h3 id=\"",
	"\" style=\"",
	"\"",
	"></h3>"
];
var DRAG_HOLD_MS2 = 500;
var PluginsStrip = (props) => {
	const { plugins, activePlugins, toggleActivePlugins } = createPlugins();
	const { setState } = createDevtoolsState();
	const { beginStripDrag } = createStripDrag();
	const { setCollapsed } = createCollapsed();
	const { theme } = createTheme();
	const styles = createStyles();
	let suppressClick = false;
	const selectPlugin = (pluginId) => {
		setState({ activeTab: "plugins" });
		toggleActivePlugins(pluginId);
	};
	const startStripDrag = (pluginId, event) => {
		if (event.button !== 0) return;
		suppressClick = false;
		let latest = {
			x: event.clientX,
			y: event.clientY
		};
		const holdTimer = window.setTimeout(() => {
			suppressClick = true;
			document.removeEventListener("pointermove", move);
			beginStripDrag(pluginId, latest);
		}, DRAG_HOLD_MS2);
		const move = (moveEvent) => {
			latest = {
				x: moveEvent.clientX,
				y: moveEvent.clientY
			};
		};
		const up = () => {
			window.clearTimeout(holdTimer);
			document.removeEventListener("pointermove", move);
			document.removeEventListener("pointerup", up);
		};
		document.addEventListener("pointermove", move);
		document.addEventListener("pointerup", up);
	};
	const available = createMemo(() => (plugins() ?? []).filter((plugin) => !activePlugins().includes(plugin.id)));
	createEffect((wasEmpty) => {
		const isEmpty = available().length === 0;
		if (isEmpty && wasEmpty === false) setCollapsed(true);
		if (!isEmpty && wasEmpty === true) setCollapsed(false);
		return isEmpty;
	});
	return createComponent(WorkbenchSecondaryTabs, {
		ariaLabel: "Plugin panels",
		dataTestId: "plugins-strip",
		get children() {
			return createComponent(For, {
				get each() {
					return available();
				},
				children: (plugin) => {
					let nameMounted = false;
					createEffect(() => {
						theme();
						props.isOpen();
						if (!nameMounted) {
							nameMounted = true;
							return;
						}
					});
					return createComponent(WorkbenchSecondaryTab, {
						get ariaLabelledBy() {
							return `${PLUGIN_TITLE_CONTAINER_ID}-${plugin.id}`;
						},
						pluginTitleControl: true,
						selected: false,
						onPointerDown: (event) => startStripDrag(plugin.id, event),
						onClick: () => {
							if (suppressClick) return;
							selectPlugin(plugin.id);
						},
						get children() {
							return ssr(_tmpl$41, `${escape(PLUGIN_TITLE_CONTAINER_ID, true)}-${escape(plugin.id, true)}`, ssrStyle(typeof plugin.name === "function" ? { all: "initial" } : void 0), ssrAttribute("class", typeof plugin.name === "string" ? escape(styles().pluginTitleText, true) : escape(void 0, true), false));
						}
					});
				}
			});
		}
	});
};
var _tmpl$49 = [
	"<div",
	">",
	"",
	"</div>"
];
var themeDocumentOwners = /* @__PURE__ */ new WeakMap();
var previousThemeAttributes = /* @__PURE__ */ new WeakMap();
var setDocumentTheme = (document2, owner, theme) => {
	let owners = themeDocumentOwners.get(document2);
	if (!owners) {
		owners = /* @__PURE__ */ new Map();
		themeDocumentOwners.set(document2, owners);
		previousThemeAttributes.set(document2, document2.documentElement.getAttribute("data-tanstack-devtools-theme"));
	}
	owners.delete(owner);
	owners.set(owner, theme);
	document2.documentElement.dataset.tanstackDevtoolsTheme = theme;
};
var clearDocumentTheme = (document2, owner) => {
	const owners = themeDocumentOwners.get(document2);
	if (!owners) return;
	owners.delete(owner);
	const themes = [...owners.values()];
	const currentTheme = themes[themes.length - 1];
	if (currentTheme) {
		document2.documentElement.dataset.tanstackDevtoolsTheme = currentTheme;
		return;
	}
	const previousTheme = previousThemeAttributes.get(document2);
	if (previousTheme === null || previousTheme === void 0) delete document2.documentElement.dataset.tanstackDevtoolsTheme;
	else document2.documentElement.dataset.tanstackDevtoolsTheme = previousTheme;
	themeDocumentOwners.delete(document2);
	previousThemeAttributes.delete(document2);
};
function DevTools() {
	const { settings } = createDevtoolsSettings();
	const { state } = createDevtoolsState();
	const { setHeight } = createHeight();
	const { persistOpen, setPersistOpen } = createPersistOpen();
	const [rootEl, setRootEl] = createSignal();
	const [isOpen, setIsOpen] = createSignal(settings().defaultOpen || persistOpen());
	const pip = createPiPWindow();
	let panelRef;
	const [isResizing, setIsResizing] = createSignal(false);
	const { isCollapsed } = createCollapsed();
	const [showMarketplace, setShowMarketplace] = createSignal(false);
	const themeOwner = /* @__PURE__ */ Symbol("tanstack-devtools-theme");
	const updateHeight = (nextHeight) => {
		setHeight(nextHeight);
		setIsOpen(nextHeight >= 70);
	};
	const toggleOpen = () => {
		if (pip().pipWindow) return;
		const newState = !isOpen();
		setIsOpen(newState);
		setPersistOpen(newState);
		devtoolsEventClient.emit("trigger-toggled", { isOpen: newState });
	};
	createEffect(() => {
		const unsubscribe = devtoolsEventClient.on("trigger-toggled", (event) => {
			if (pip().pipWindow) return;
			const payload = event.payload;
			if (payload.isOpen !== isOpen()) {
				setIsOpen(payload.isOpen);
				setPersistOpen(payload.isOpen);
			}
		});
		onCleanup(unsubscribe);
	});
	const showsPluginsStrip = () => state().activeTab === "plugins" && !showMarketplace();
	const showsSeoStrip = () => state().activeTab === "seo" && !showMarketplace();
	const hasSubheader = () => showsPluginsStrip() || showsSeoStrip();
	const handleDragStart = (panelElement, startEvent) => {
		if (startEvent.button !== 0 || true) return;
	};
	createEffect(() => {
		const onKeyDown = (event) => {
			if (event.key === "Escape" && isOpen()) toggleOpen();
		};
		window.addEventListener("keydown", onKeyDown);
		onCleanup(() => window.removeEventListener("keydown", onKeyDown));
	});
	createDisableTabbing(isOpen);
	createEffect(() => {
		const element = rootEl();
		if (element) element.style.setProperty("--tsrd-font-size", getComputedStyle(element).fontSize);
	});
	createEffect(() => {
		const isEditableTarget = (element) => {
			if (!element || !(element instanceof HTMLElement)) return false;
			if (element.isContentEditable) return true;
			if ([
				"INPUT",
				"TEXTAREA",
				"SELECT"
			].includes(element.tagName)) return true;
			return element.getAttribute("role") === "textbox";
		};
		for (const permutation of getHotkeyPermutations(settings().openHotkey)) createShortcut(permutation, () => {
			if (!isEditableTarget(document.activeElement)) toggleOpen();
		});
	});
	const { theme } = createTheme();
	createEffect(() => {
		const activeDocument = pip().pipWindow?.document ?? document;
		setDocumentTheme(activeDocument, themeOwner, theme());
		onCleanup(() => clearDocumentTheme(activeDocument, themeOwner));
	});
	return createComponent(ThemeContextProvider, {
		get theme() {
			return theme();
		},
		get children() {
			return createComponent(Portal, {
				get mount() {
					return (pip().pipWindow ?? window).document.body;
				},
				get children() {
					return ssr(_tmpl$49, ssrAttribute("data-testid", escape(TANSTACK_DEVTOOLS, true), false), escape(createComponent(Show, {
						get when() {
							return pip().pipWindow !== null ? true : settings().requireUrlFlag ? window.location.search.includes(settings().urlFlag) : true;
						},
						get children() {
							return [createComponent(Trigger, {
								isOpen,
								setIsOpen: toggleOpen
							}), createComponent(MainPanel, {
								isResizing,
								isOpen,
								isCollapsed,
								hasSubheader,
								get children() {
									return createComponent(ContentPanel, {
										handleDragStart: (event) => handleDragStart(panelRef, event),
										handleHeightChange: updateHeight,
										get children() {
											return [
												createComponent(WorkbenchHeader, {
													showMarketplace,
													setShowMarketplace,
													toggleOpen
												}),
												createComponent(Show, {
													get when() {
														return showsPluginsStrip();
													},
													get children() {
														return createComponent(PluginsStrip, { isOpen });
													}
												}),
												createComponent(TabContent, {
													get isOpen() {
														return isOpen();
													},
													get showMarketplace() {
														return showMarketplace();
													}
												})
											];
										}
									});
								}
							})];
						}
					})), escape(createComponent(SourceInspector, {})));
				}
			});
		}
	});
}
//#endregion
//#region node_modules/@tanstack/devtools-event-bus/dist/esm/utils/json.js
/**
* Safely stringify data that may contain BigInt values
* BigInt values are converted to objects with a special marker
*/
function stringifyWithBigInt(data) {
	return JSON.stringify(data, (_key, value) => {
		if (typeof value === "bigint") return {
			__type: "bigint",
			value: value.toString()
		};
		return value;
	});
}
/**
* Parse JSON and restore BigInt values
* Objects with __type: 'bigint' are converted back to BigInt
*/
function parseWithBigInt(json) {
	return JSON.parse(json, (_key, value) => {
		if (value && typeof value === "object" && value.__type === "bigint" && typeof value.value === "string") return BigInt(value.value);
		return value;
	});
}
//#endregion
//#region node_modules/@tanstack/devtools-event-bus/dist/esm/client/client.js
function getDefaultPort(configPort) {
	if (typeof __TANSTACK_DEVTOOLS_PORT__ !== "undefined") return __TANSTACK_DEVTOOLS_PORT__;
	return configPort;
}
function getDefaultHost(configHost) {
	if (typeof __TANSTACK_DEVTOOLS_HOST__ !== "undefined") return __TANSTACK_DEVTOOLS_HOST__;
	return configHost;
}
function getDefaultProtocol(configProtocol) {
	if (typeof __TANSTACK_DEVTOOLS_PROTOCOL__ !== "undefined") return __TANSTACK_DEVTOOLS_PROTOCOL__;
	return configProtocol;
}
var ClientEventBus = class {
	#port;
	#host;
	#protocol;
	#socket;
	#eventSource;
	#eventTarget;
	#debug;
	#connectToServerBus;
	#broadcastChannel;
	#pendingServerEvents = [];
	#dispatcher = (e) => {
		const event = e.detail;
		this.emitToServer(event);
		this.emitToClients(event);
	};
	#connectFunction = () => {
		this.debugLog("Connection request made to event-bus, replying back with success");
		this.#eventTarget.dispatchEvent(new CustomEvent("tanstack-connect-success"));
	};
	constructor({ port = getDefaultPort(4206), host = getDefaultHost("localhost"), protocol = getDefaultProtocol("http"), debug = false, connectToServerBus = false } = {}) {
		this.#debug = debug;
		this.#broadcastChannel = new BroadcastChannel("tanstack-devtools");
		this.#eventSource = null;
		this.#port = port;
		this.#host = host;
		this.#protocol = protocol;
		this.#socket = null;
		this.#connectToServerBus = connectToServerBus;
		this.#eventTarget = this.getGlobalTarget();
		this.#broadcastChannel.onmessage = (e) => {
			this.emitToClients(parseWithBigInt(e.data), true);
		};
		this.debugLog("Initializing client event bus");
	}
	emitToClients(event, fromBroadcastChannel = false) {
		this.debugLog("Emitting event from client bus", event);
		const specificEvent = new CustomEvent(event.type, { detail: event });
		this.debugLog("Emitting event to specific client listeners", event);
		this.#eventTarget.dispatchEvent(specificEvent);
		const globalEvent = new CustomEvent("tanstack-devtools-global", { detail: event });
		if (!fromBroadcastChannel) this.#broadcastChannel?.postMessage(stringifyWithBigInt(event));
		this.debugLog("Emitting event to global client listeners", event);
		this.#eventTarget.dispatchEvent(globalEvent);
	}
	flushPendingServerEvents() {
		if (!this.#socket || this.#socket.readyState !== WebSocket.OPEN) return;
		const pending = this.#pendingServerEvents;
		this.#pendingServerEvents = [];
		for (const json of pending) {
			this.debugLog("Flushing queued event to server via WS");
			this.#socket.send(json);
		}
	}
	emitToServer(event) {
		const json = stringifyWithBigInt(event);
		if (this.#socket) {
			if (this.#socket.readyState === WebSocket.OPEN) {
				this.debugLog("Emitting event to server via WS", event);
				this.#socket.send(json);
			} else if (this.#socket.readyState === WebSocket.CONNECTING) {
				this.debugLog("WebSocket still connecting, queueing event", event);
				this.#pendingServerEvents.push(json);
			}
			return;
		}
		if (this.#eventSource) {
			this.debugLog("Emitting event to server via SSE", event);
			fetch(`${this.#protocol}://${this.#host}:${this.#port}/__devtools/send`, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: json
			}).catch(() => {});
		}
	}
	start() {
		this.debugLog("Starting client event bus");
		if (typeof window === "undefined") return;
		if (this.#connectToServerBus) this.connect();
		this.#eventTarget = window;
		this.#eventTarget.addEventListener("tanstack-dispatch-event", this.#dispatcher);
		this.#eventTarget.addEventListener("tanstack-connect", this.#connectFunction);
	}
	stop() {
		this.debugLog("Stopping client event bus");
		if (typeof window === "undefined") return;
		this.#eventTarget.removeEventListener("tanstack-dispatch-event", this.#dispatcher);
		this.#eventTarget.removeEventListener("tanstack-connect", this.#connectFunction);
		this.#eventSource?.close();
		this.#socket?.close();
		this.#socket = null;
		this.#eventSource = null;
		this.#pendingServerEvents = [];
	}
	getGlobalTarget() {
		if (typeof window !== "undefined") return window;
		return new EventTarget();
	}
	debugLog(...messages) {
		if (this.#debug) console.log("🌴 [tanstack-devtools:client-bus]", ...messages);
	}
	connectSSE() {
		this.debugLog("Connecting to SSE server");
		this.#eventSource = new EventSource(`${this.#protocol}://${this.#host}:${this.#port}/__devtools/sse`);
		this.#eventSource.onmessage = (e) => {
			this.debugLog("Received message from SSE server", e.data);
			this.handleEventReceived(e.data);
		};
	}
	connectWebSocket() {
		this.debugLog("Connecting to WebSocket server");
		const wsProtocol = this.#protocol === "https" ? "wss" : "ws";
		this.#socket = new WebSocket(`${wsProtocol}://${this.#host}:${this.#port}/__devtools/ws`);
		this.#socket.onopen = () => {
			this.debugLog("WebSocket connection opened");
			this.flushPendingServerEvents();
		};
		this.#socket.onmessage = (e) => {
			this.debugLog("Received message from server", e.data);
			this.handleEventReceived(e.data);
		};
		this.#socket.onclose = () => {
			this.debugLog("WebSocket connection closed");
			this.#socket = null;
			this.#pendingServerEvents = [];
		};
		this.#socket.onerror = () => {
			this.debugLog("WebSocket connection error");
		};
	}
	connect() {
		try {
			this.connectWebSocket();
		} catch {
			if (typeof window === "undefined") return;
			this.connectSSE();
		}
	}
	handleEventReceived(data) {
		try {
			const event = parseWithBigInt(data);
			this.emitToClients(event);
		} catch {}
	}
};
//#endregion
//#region node_modules/@tanstack/devtools/dist/mount-impl/UZMC65JZ.js
var UZMC65JZ_exports = /* @__PURE__ */ __exportAll({ mountDevtools: () => mountDevtools });
function mountDevtools(options) {
	const { el, plugins, config, eventBusConfig, onSetPlugins } = options;
	const eventBus = new ClientEventBus(eventBusConfig);
	eventBus.start();
	const Devtools = lazy(() => Promise.resolve().then(() => JWB4EURD_exports));
	return {
		dispose: notSup(() => createComponent(DevtoolsProvider, {
			plugins,
			config,
			onSetPlugins,
			get children() {
				return createComponent(PiPProvider, { get children() {
					return createComponent(Portal, {
						mount: el,
						get children() {
							return createComponent(Devtools, {});
						}
					});
				} });
			}
		}), el),
		eventBus
	};
}
//#endregion
export { TanStackDevtoolsCore };
