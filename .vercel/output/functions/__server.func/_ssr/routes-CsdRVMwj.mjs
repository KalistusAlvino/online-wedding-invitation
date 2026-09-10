import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react, useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { Route$3, WEDDING } from "./router-h6tbjF91.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CsdRVMwj.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LandingPage() {
	const navigate = useNavigate();
	const { to, name } = Route$3.useSearch();
	const hasGuest = Boolean(to && name);
	const [recipientLabel, setRecipientLabel] = (0, import_react.useState)(WEDDING.recipient);
	(0, import_react.useEffect)(() => {
		setRecipientLabel(hasGuest ? `${to} ${name}` : WEDDING.recipient);
		if (hasGuest) document.title = `Kepada ${to} ${name} — The Wedding of Chaca & Fedrik`;
	}, [
		hasGuest,
		to,
		name
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "cover",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "cover__media",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "cover__media-img",
						style: { backgroundImage: `url('${WEDDING.bgImage}')` },
						role: "img",
						"aria-label": "Pasangan pengantin Chaca dan Fedrik"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cover__overlay" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cover__media-fade" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "cover__top cover__content fade-in-up",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "cover__eyebrow label-caps text-muted",
					children: "THE WEDDING OF"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "cover__middle cover__content",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
					className: "cover__names display-hero text-primary",
					children: [
						WEDDING.brideName,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "display-hero__amp",
							children: "&"
						}),
						" ",
						WEDDING.groomName
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "cover__date body--lg text-muted fade-in-up delay-300",
					children: WEDDING.date
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "cover__bottom cover__content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "cover__guest fade-in-up delay-500",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cover__guest-label body--sm text-muted",
								children: "Kepada Yth."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cover__guest-name headline headline--md text-primary",
								children: recipientLabel
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "cover__guest-place body--sm text-muted",
								children: "di tempat"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "cover__cta btn btn--primary fade-in-up delay-700",
						onClick: () => navigate({
							to: "/invitation",
							search: {
								to,
								name
							}
						}),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BUKA UNDANGAN" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "cover__hint label-caps animate-bounce-subtle",
						children: "Tap untuk membuka undangan"
					})
				]
			})
		]
	});
}
//#endregion
export { LandingPage as component };
