import { __toESM } from "../_runtime.mjs";
import { require_jsx_runtime, require_react, useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { Route$3 } from "./router-Cx8WXPq9.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CToj3j71.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var WEDDING = {
	groomName: "Fedrik",
	brideName: "Chaca",
	date: "10 OCTOBER 2026",
	recipient: "Bapak/Ibu Tamu",
	bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeh2RjuzzvJ2fTRprJ0os5DcRmf9OSmT14ofJmQ3ElbwVXggWxf1DEO67JT3DjPYhWOEA6zJXKMULVgdIt8kZ2Fp8yQUfreBZJh7cS-gn8IKKwIEUh_CWjDeHF_JvoMmxQUeSbEsiC4Q7U42QOoryfd1dC_M7IDgNLq6E9Od9gtZKytVg-AO-BE7jTvKEySSPY5d9p0I73M9SZ-rn15blgGD_kgIx5rV7wrzVatqBU79Px8L-yemX5lQ"
};
function LandingPage() {
	const navigate = useNavigate();
	const { to, name } = Route$3.useSearch();
	const hasGuest = Boolean(to && name);
	const recipientLabel = hasGuest ? `${to} ${name}` : WEDDING.recipient;
	(0, import_react.useEffect)(() => {
		if (!hasGuest) return;
		const title = `Kepada ${to} ${name} — The Wedding of Chaca & Fedrik`;
		const desc = `Sabtu, 10 Oktober 2026 — Kami mengundang ${to} ${name} untuk merayakan momen istimewa bersama kami.`;
		document.title = title;
		const setMeta = (attr, key, content) => {
			let el = document.querySelector(`meta[${attr}="${key}"]`);
			if (!el) {
				el = document.createElement("meta");
				el.setAttribute(attr, key);
				document.head.appendChild(el);
			}
			el.setAttribute("content", content);
		};
		setMeta("property", "og:title", title);
		setMeta("property", "og:description", desc);
		setMeta("name", "twitter:title", title);
		setMeta("name", "twitter:description", desc);
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "cover__top cover__content fade-in-up",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "cover__eyebrow label-caps text-muted",
					children: "THE WEDDING OF"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "cover__divider",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "cover__divider-line" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cover__divider-icon material-symbols-outlined",
							children: "replace_video"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "cover__divider-line" })
					]
				})]
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
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "cover__cta btn btn--primary fade-in-up delay-700",
						onClick: () => navigate({ to: "/invitation" }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "BUKA UNDANGAN" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "cover__cta-icon material-symbols-outlined",
							children: "expand_more"
						})]
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
