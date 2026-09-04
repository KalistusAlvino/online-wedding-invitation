import { __toESM } from "../_runtime.mjs";
import { supabase } from "./supabase-CIK0RTCb.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/messages-CYtEKhLE.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function MessagesPage() {
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	(0, import_react.useEffect)(() => {
		supabase.from("messages").select("id, sapaan, name, attendance, message, created_at").order("created_at", { ascending: false }).then(({ data, error }) => {
			if (!error && data) setMessages(data);
			setLoading(false);
		});
	}, []);
	const hadir = messages.filter((m) => m.attendance === "hadir");
	const tidakHadir = messages.filter((m) => m.attendance !== "hadir");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
		className: "messages-page",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "messages-page__inner",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "messages-page__header",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
					href: "/invitation",
					className: "messages-page__back",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "material-symbols-outlined",
						style: { fontSize: 18 },
						children: "arrow_back"
					}), "Kembali ke Undangan"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "messages-page__title-wrap",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "messages-page__title",
							children: "Ucapan & Doa"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "messages-page__botanical",
							"aria-hidden": "true",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								viewBox: "0 0 120 34",
								fill: "none",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 30 C 38 27, 84 17, 114 5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
									cx: "115",
									cy: "4.5",
									r: "1.6",
									fill: "currentColor"
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "messages-page__subtitle",
							children: [messages.length, " ucapan dari tamu undangan"]
						})
					]
				})]
			}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "messages-page__empty",
				children: "Memuat data..."
			}) : messages.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "messages-page__empty",
				children: "Belum ada ucapan."
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "messages-page__stats",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "messages-page__stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "messages-page__stat-num",
							children: messages.length
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "messages-page__stat-label",
							children: "Total"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "messages-page__stat messages-page__stat--hadir",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "messages-page__stat-num",
							children: hadir.length
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "messages-page__stat-label",
							children: "Hadir"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "messages-page__stat messages-page__stat--absent",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "messages-page__stat-num",
							children: tidakHadir.length
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "messages-page__stat-label",
							children: "Tidak Hadir"
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "messages-page__list",
				children: messages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: "messages-page__item",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "messages-page__item-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "messages-page__item-name",
								children: [
									msg.sapaan,
									" ",
									msg.name
								]
							}), msg.attendance === "hadir" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "messages-page__badge messages-page__badge--hadir",
								children: "Hadir"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "messages-page__badge messages-page__badge--absent",
								children: "Tidak Hadir"
							})]
						}),
						msg.message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "messages-page__item-msg",
							children: [
								"“",
								msg.message,
								"”"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("time", {
							className: "messages-page__item-date",
							children: new Date(msg.created_at).toLocaleDateString("id-ID", {
								day: "numeric",
								month: "long",
								year: "numeric",
								hour: "2-digit",
								minute: "2-digit"
							})
						})
					]
				}, msg.id))
			})] })]
		})
	});
}
//#endregion
export { MessagesPage as component };
