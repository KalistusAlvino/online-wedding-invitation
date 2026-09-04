import { HeadContent, Scripts, createFileRoute, createRootRoute, createRouter, lazyRouteComponent, require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { object, string } from "../_libs/zod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BLK7tFOr.js
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-gRENXOJX.css";
var Route$4 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "The Wedding of Chaca & Fedrik" },
			{
				name: "description",
				content: "Undangan Pernikahan Chaca & Fedrik — Sabtu, 10 Oktober 2026. Kami mengundang Anda untuk merayakan momen istimewa bersama kami."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				property: "og:title",
				content: "The Wedding of Chaca & Fedrik"
			},
			{
				property: "og:description",
				content: "Sabtu, 10 Oktober 2026 — Kami mengundang Anda untuk merayakan momen istimewa bersama kami."
			},
			{
				property: "og:image",
				content: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeh2RjuzzvJ2fTRprJ0os5DcRmf9OSmT14ofJmQ3ElbwVXggWxf1DEO67JT3DjPYhWOEA6zJXKMULVgdIt8kZ2Fp8yQUfreBZJh7cS-gn8IKKwIEUh_CWjDeHF_JvoMmxQUeSbEsiC4Q7U42QOoryfd1dC_M7IDgNLq6E9Od9gtZKytVg-AO-BE7jTvKEySSPY5d9p0I73M9SZ-rn15blgGD_kgIx5rV7wrzVatqBU79Px8L-yemX5lQ"
			},
			{
				property: "og:image:width",
				content: "1200"
			},
			{
				property: "og:image:height",
				content: "630"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:title",
				content: "The Wedding of Chaca & Fedrik"
			},
			{
				name: "twitter:description",
				content: "Sabtu, 10 Oktober 2026 — Kami mengundang Anda untuk merayakan momen istimewa bersama kami."
			},
			{
				name: "twitter:image",
				content: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeh2RjuzzvJ2fTRprJ0os5DcRmf9OSmT14ofJmQ3ElbwVXggWxf1DEO67JT3DjPYhWOEA6zJXKMULVgdIt8kZ2Fp8yQUfreBZJh7cS-gn8IKKwIEUh_CWjDeHF_JvoMmxQUeSbEsiC4Q7U42QOoryfd1dC_M7IDgNLq6E9Od9gtZKytVg-AO-BE7jTvKEySSPY5d9p0I73M9SZ-rn15blgGD_kgIx5rV7wrzVatqBU79Px8L-yemX5lQ"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
var WEDDING = {
	groomName: "Fedrik",
	brideName: "Chaca",
	date: "10 OCTOBER 2026",
	recipient: "Bapak/Ibu Tamu",
	bgImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuAeh2RjuzzvJ2fTRprJ0os5DcRmf9OSmT14ofJmQ3ElbwVXggWxf1DEO67JT3DjPYhWOEA6zJXKMULVgdIt8kZ2Fp8yQUfreBZJh7cS-gn8IKKwIEUh_CWjDeHF_JvoMmxQUeSbEsiC4Q7U42QOoryfd1dC_M7IDgNLq6E9Od9gtZKytVg-AO-BE7jTvKEySSPY5d9p0I73M9SZ-rn15blgGD_kgIx5rV7wrzVatqBU79Px8L-yemX5lQ"
};
var $$splitComponentImporter$3 = () => import("./routes-CzfI4L0_.mjs");
var guestSchema = object({
	to: string().optional(),
	name: string().optional()
});
var Route$3 = createFileRoute("/")({
	component: lazyRouteComponent($$splitComponentImporter$3, "component"),
	validateSearch: guestSchema,
	head: ({ search }) => {
		const to = search?.to || "Bapak/Ibu";
		const name = search?.name || "Tamu";
		const hasGuest = Boolean(search?.to && search?.name);
		const title = hasGuest ? `Kepada ${to} ${name} — The Wedding of Chaca & Fedrik` : "The Wedding of Chaca & Fedrik";
		const desc = hasGuest ? `Sabtu, 10 Oktober 2026 — Kami mengundang ${to} ${name} untuk merayakan momen istimewa bersama kami.` : "Sabtu, 10 Oktober 2026 — Kami mengundang Anda untuk merayakan momen istimewa bersama kami.";
		return { meta: [
			{ title },
			{
				name: "description",
				content: desc
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: desc
			},
			{
				property: "og:image",
				content: WEDDING.bgImage
			},
			{
				name: "twitter:title",
				content: title
			},
			{
				name: "twitter:description",
				content: desc
			},
			{
				name: "twitter:image",
				content: WEDDING.bgImage
			}
		] };
	}
});
var $$splitComponentImporter$2 = () => import("./dashboard-WTCRr8oL.mjs");
var Route$2 = createFileRoute("/dashboard")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./invitation-BRGx_nvt.mjs");
var Route$1 = createFileRoute("/invitation")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./messages-T9hGn3dB.mjs");
var Route = createFileRoute("/messages")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var rootRouteChildren = {
	IndexRoute: Route$3.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$4
	}),
	DashboardRoute: Route$2.update({
		id: "/dashboard",
		path: "/dashboard",
		getParentRoute: () => Route$4
	}),
	InvitationRoute: Route$1.update({
		id: "/invitation",
		path: "/invitation",
		getParentRoute: () => Route$4
	}),
	MessagesRoute: Route.update({
		id: "/messages",
		path: "/messages",
		getParentRoute: () => Route$4
	})
};
var routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { Route$3, WEDDING, router_exports };
