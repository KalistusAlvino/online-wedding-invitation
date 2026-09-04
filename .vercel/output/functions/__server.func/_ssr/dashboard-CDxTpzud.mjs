import { __toESM } from "../_runtime.mjs";
import { supabase } from "./supabase-CIK0RTCb.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@tanstack/react-devtools+[...].mjs";
import { readSync, utils } from "../_libs/xlsx.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-CDxTpzud.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var PLACEHOLDER_HOST = "https://your-domain.com";
var toastId = 0;
function DashboardPage() {
	const [guests, setGuests] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [toInput, setToInput] = (0, import_react.useState)("Bapak/Ibu");
	const [nameInput, setNameInput] = (0, import_react.useState)("");
	const [copiedIdx, setCopiedIdx] = (0, import_react.useState)(null);
	const [addLoading, setAddLoading] = (0, import_react.useState)(false);
	const [importLoading, setImportLoading] = (0, import_react.useState)(false);
	const [clearLoading, setClearLoading] = (0, import_react.useState)(false);
	const [toasts, setToasts] = (0, import_react.useState)([]);
	const fileRef = (0, import_react.useRef)(null);
	const showToast = (0, import_react.useCallback)((type, message) => {
		const id = ++toastId;
		setToasts((prev) => [...prev, {
			id,
			type,
			message
		}]);
		window.setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), 3500);
	}, []);
	(0, import_react.useEffect)(() => {
		supabase.from("guest").select("id, sapaan, name").order("id", { ascending: true }).then(({ data, error }) => {
			if (!error && data) setGuests(data);
			setLoading(false);
		});
	}, []);
	const addGuest = (0, import_react.useCallback)(async () => {
		const name = nameInput.trim();
		if (!name) return;
		setAddLoading(true);
		const sapaan = toInput.trim() || "Bapak/Ibu";
		const { data, error } = await supabase.from("guest").insert({
			sapaan,
			name
		}).select("id, sapaan, name").single();
		setAddLoading(false);
		if (error) showToast("error", `Gagal menambahkan: ${error.message}`);
		else if (data) {
			setGuests((prev) => [...prev, data]);
			setNameInput("");
			showToast("success", `${sapaan} ${name} berhasil ditambahkan`);
		}
	}, [
		nameInput,
		toInput,
		showToast
	]);
	const removeGuest = (0, import_react.useCallback)(async (id) => {
		const { error } = await supabase.from("guest").delete().eq("id", id);
		if (error) showToast("error", `Gagal menghapus: ${error.message}`);
		else {
			setGuests((prev) => prev.filter((g) => g.id !== id));
			showToast("success", "Tamu berhasil dihapus");
		}
	}, [showToast]);
	const clearAll = (0, import_react.useCallback)(async () => {
		if (!window.confirm("Hapus semua data tamu?")) return;
		setClearLoading(true);
		const { error } = await supabase.from("guest").delete().neq("id", 0);
		setClearLoading(false);
		if (error) showToast("error", `Gagal menghapus semua: ${error.message}`);
		else {
			setGuests([]);
			showToast("success", "Semua data tamu berhasil dihapus");
		}
	}, [showToast]);
	const handleExcel = (0, import_react.useCallback)((file) => {
		setImportLoading(true);
		const reader = new FileReader();
		reader.onload = async (e) => {
			const wb = readSync(e.target?.result, { type: "array" });
			const ws = wb.Sheets[wb.SheetNames[0]];
			const rows = utils.sheet_to_json(ws);
			const parsed = [];
			for (const row of rows) {
				const nameVal = row["Nama"] || row["nama"] || row["Name"] || row["name"] || "";
				const toVal = row["Sapaan"] || row["sapaan"] || row["To"] || row["to"] || row["Title"] || row["title"] || "";
				const name = String(nameVal).trim();
				if (!name) continue;
				parsed.push({
					sapaan: String(toVal).trim() || "Bapak/Ibu",
					name
				});
			}
			if (parsed.length === 0) {
				setImportLoading(false);
				showToast("error", "File terbaca, tapi tidak ada data nama ditemukan.");
				return;
			}
			const { data, error } = await supabase.from("guest").insert(parsed).select("id, sapaan, name");
			setImportLoading(false);
			if (error) showToast("error", `Gagal import: ${error.message}`);
			else if (data) {
				setGuests((prev) => [...prev, ...data]);
				showToast("success", `Berhasil import ${data.length} tamu dari "${file.name}"`);
			}
		};
		reader.readAsArrayBuffer(file);
	}, [showToast]);
	const buildLink = (0, import_react.useCallback)((guest) => {
		return `${window.location.origin}/?${new URLSearchParams({
			to: guest.sapaan,
			name: guest.name
		}).toString()}`;
	}, []);
	const copyLink = (0, import_react.useCallback)(async (guest) => {
		try {
			await navigator.clipboard.writeText(buildLink(guest));
		} catch {}
		setCopiedIdx(guest.id);
		window.setTimeout(() => setCopiedIdx(null), 1500);
	}, [buildLink]);
	const copyAllLinks = (0, import_react.useCallback)(async () => {
		const all = guests.map((g) => `${g.sapaan} ${g.name} → ${buildLink(g)}`).join("\n");
		try {
			await navigator.clipboard.writeText(all);
		} catch {}
		setCopiedIdx(-1);
		window.setTimeout(() => setCopiedIdx(null), 1500);
	}, [guests, buildLink]);
	const downloadTemplate = (0, import_react.useCallback)(() => {
		const csv = "Sapaan,Nama\n" + [
			"Bapak,Ahmad Susanto",
			"Ibu,Dewi Lestari",
			"Keluarga,Keluarga Besar Bpk. Suharto",
			"Saudara,Rizky Pratama",
			"Saudari,Ayu Maharani",
			"Dr.,Siti Aminah",
			",Budi Santoso"
		].join("\n");
		const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const a = document.createElement("a");
		a.href = url;
		a.download = "template-undangan.csv";
		a.click();
		URL.revokeObjectURL(url);
	}, []);
	const handleFileChange = (0, import_react.useCallback)((e) => {
		const file = e.target.files?.[0];
		if (!file) return;
		handleExcel(file);
		e.target.value = "";
	}, [handleExcel]);
	const base = typeof window !== "undefined" ? window.location.origin : PLACEHOLDER_HOST;
	const stats = (0, import_react.useMemo)(() => {
		const titles = guests.reduce((acc, g) => {
			acc[g.sapaan] = (acc[g.sapaan] || 0) + 1;
			return acc;
		}, {});
		return {
			total: guests.length,
			titles
		};
	}, [guests]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		style: S.page,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("style", { children: `@keyframes toastIn { from { opacity: 0; transform: translateX(40px); } to { opacity: 1; transform: translateX(0); } }` }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				style: S.card,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						style: S.title,
						children: "Dashboard Undangan"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						style: S.subtitle,
						children: "Upload Excel atau input manual untuk membuat link undangan personal."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: S.section,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: S.sectionTitle,
							children: "Input Manual"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: S.formRow,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: S.fieldSmall,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										style: S.label,
										children: "Sapaan"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										style: S.select,
										value: toInput,
										onChange: (e) => setToInput(e.target.value),
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Bapak/Ibu",
												children: "Bapak/Ibu"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Bapak",
												children: "Bapak"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Ibu",
												children: "Ibu"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Saudara",
												children: "Saudara"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Saudari",
												children: "Saudari"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Keluarga",
												children: "Keluarga"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Dr.",
												children: "Dr."
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
												value: "Prof.",
												children: "Prof."
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									style: S.fieldLarge,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										style: S.label,
										children: "Nama Lengkap"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										style: S.input,
										type: "text",
										value: nameInput,
										onChange: (e) => setNameInput(e.target.value),
										onKeyDown: (e) => e.key === "Enter" && addGuest(),
										placeholder: "Contoh: Ahmad Susanto"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									style: {
										...S.btnPrimary,
										opacity: addLoading ? .6 : 1
									},
									onClick: addGuest,
									disabled: addLoading,
									children: addLoading ? "Menambahkan..." : "Tambah"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: S.section,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								style: S.sectionTitle,
								children: "Import Excel"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: S.guide,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: S.guideTitle,
										children: "Format kolom yang dibutuhkan:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: S.guideTableWrap,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											style: S.guideTable,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													style: S.guideTh,
													children: "Kolom"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													style: S.guideTh,
													children: "Wajib?"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													style: S.guideTh,
													children: "Keterangan"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
													style: S.guideTh,
													children: "Contoh Isi"
												})
											] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTdName,
													children: "Sapaan"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTd,
													children: "Opsional"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTd,
													children: "Gelar atau sapaan. Default: \"Bapak/Ibu\""
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTdCode,
													children: "Bapak, Ibu, Keluarga, Dr."
												})
											] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTdName,
													children: "Nama"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: {
														...S.guideTd,
														fontWeight: 600,
														color: "#b44"
													},
													children: "Wajib"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTd,
													children: "Nama lengkap tamu undangan"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTdCode,
													children: "Ahmad Susanto"
												})
											] })] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										style: {
											...S.guideTitle,
											marginTop: 16
										},
										children: "Contoh isi Excel:"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										style: S.guideTableWrap,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
											style: S.guideTable,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: S.guideTh,
												children: "Sapaan"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
												style: S.guideTh,
												children: "Nama"
											})] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTd,
													children: "Bapak"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTdCode,
													children: "Ahmad Susanto"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTd,
													children: "Ibu"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTdCode,
													children: "Dewi Lestari"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTd,
													children: "Keluarga"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTdCode,
													children: "Keluarga Besar Bpk. Suharto"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTd,
													children: "Saudara"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTdCode,
													children: "Rizky Pratama"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTd,
													children: "Dr."
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTdCode,
													children: "Siti Aminah"
												})] }),
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { style: S.guideTd }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
													style: S.guideTdCode,
													children: "Budi Santoso (otomatis \"Bapak/Ibu\")"
												})] })
											] })]
										})
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										style: S.guideNote,
										children: [
											"Jika kolom \"Sapaan\" kosong, otomatis jadi \"Bapak/Ibu\". Nama kolom harus tepat: ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Sapaan" }),
											" dan ",
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Nama" }),
											" (huruf besar/kecil tidak masalah)."
										]
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: S.formRow,
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										ref: fileRef,
										type: "file",
										accept: ".xlsx,.xls,.csv",
										style: { display: "none" },
										onChange: handleFileChange
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										style: {
											...S.btnOutline,
											opacity: importLoading ? .6 : 1
										},
										onClick: () => fileRef.current?.click(),
										disabled: importLoading,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "material-symbols-outlined",
											style: { fontSize: 18 },
											children: importLoading ? "hourglass_top" : "upload_file"
										}), importLoading ? "Mengimport..." : "Pilih File Excel"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										style: S.btnOutline,
										onClick: downloadTemplate,
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "material-symbols-outlined",
											style: { fontSize: 18 },
											children: "download"
										}), "Download Template"]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: S.section,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: S.listHeader,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								style: S.sectionTitle,
								children: [
									"Daftar Tamu (",
									stats.total,
									")"
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								style: S.listActions,
								children: guests.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									style: S.btnSmall,
									onClick: copyAllLinks,
									children: copiedIdx === -1 ? "✓ Tersalin" : "Copy Semua Link"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									style: {
										...S.btnSmallDanger,
										opacity: clearLoading ? .6 : 1
									},
									onClick: clearAll,
									disabled: clearLoading,
									children: clearLoading ? "Menghapus..." : "Hapus Semua"
								})] })
							})]
						}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: S.empty,
							children: "Memuat data dari Supabase..."
						}) : guests.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							style: S.empty,
							children: "Belum ada data tamu. Tambahkan atau import Excel."
						}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							style: S.tableWrap,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
								style: S.table,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										style: {
											...S.th,
											width: 40
										},
										children: "#"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										style: {
											...S.th,
											width: 130
										},
										children: "Sapaan"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										style: S.th,
										children: "Nama"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										style: {
											...S.th,
											width: 180
										},
										children: "Link Undangan"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { style: {
										...S.th,
										width: 80
									} })
								] }) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: guests.map((guest, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
									style: S.tr,
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: S.td,
											children: idx + 1
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: S.td,
											children: guest.sapaan
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: S.tdName,
											children: guest.name
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
											style: S.tdLink,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												style: S.linkPreview,
												children: [base, "/?to=...&name=..."]
											})
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
											style: S.tdActions,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												style: S.btnCopy,
												onClick: () => copyLink(guest),
												children: copiedIdx === guest.id ? "✓" : "📋"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
												type: "button",
												style: S.btnRemove,
												onClick: () => removeGuest(guest.id),
												children: "✕"
											})]
										})
									]
								}, guest.id)) })]
							})
						})]
					}),
					guests.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: S.section,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							style: S.sectionTitle,
							children: "Ringkasan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							style: S.stats,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: S.statCard,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: S.statNum,
									children: stats.total
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: S.statLabel,
									children: "Total Tamu"
								})]
							}), Object.entries(stats.titles).map(([title, count]) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								style: S.statCard,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: S.statNum,
									children: count
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									style: S.statLabel,
									children: title
								})]
							}, title))]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				style: S.toastContainer,
				children: toasts.map((toast) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					style: {
						...S.toast,
						background: toast.type === "success" ? "#0f2019" : "#922"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						style: { fontSize: 16 },
						children: toast.type === "success" ? "✓" : "✕"
					}), toast.message]
				}, toast.id))
			})
		]
	});
}
var S = {
	page: {
		minHeight: "100dvh",
		background: "#f4f1ec",
		padding: "32px 16px",
		fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif"
	},
	card: {
		maxWidth: 960,
		margin: "0 auto",
		background: "#fff",
		borderRadius: 12,
		padding: "40px 32px",
		boxShadow: "0 4px 24px rgba(0,0,0,.06)"
	},
	title: {
		fontFamily: "'Cormorant Garamond', Georgia, serif",
		fontSize: 32,
		fontWeight: 400,
		color: "#0f2019",
		marginBottom: 4
	},
	subtitle: {
		fontSize: 14,
		color: "#737874",
		marginBottom: 32
	},
	section: {
		marginBottom: 32,
		paddingBottom: 24,
		borderBottom: "1px solid #e6e2db"
	},
	sectionTitle: {
		fontFamily: "'Cormorant Garamond', Georgia, serif",
		fontSize: 18,
		fontWeight: 600,
		color: "#0f2019",
		marginBottom: 12,
		letterSpacing: "0.05em",
		textTransform: "uppercase"
	},
	hint: {
		fontSize: 13,
		color: "#737874",
		marginBottom: 12,
		lineHeight: 1.5
	},
	formRow: {
		display: "flex",
		gap: 12,
		alignItems: "flex-end",
		flexWrap: "wrap"
	},
	fieldSmall: { flex: "0 0 160px" },
	fieldLarge: { flex: "1 1 240px" },
	label: {
		display: "block",
		fontSize: 11,
		fontWeight: 600,
		letterSpacing: "0.08em",
		textTransform: "uppercase",
		color: "#0f2019",
		marginBottom: 6
	},
	input: {
		width: "100%",
		padding: "10px 12px",
		border: "1px solid #c2c8c3",
		borderRadius: 6,
		fontSize: 14,
		fontFamily: "inherit",
		outline: "none",
		transition: "border-color .2s"
	},
	select: {
		width: "100%",
		padding: "10px 12px",
		border: "1px solid #c2c8c3",
		borderRadius: 6,
		fontSize: 14,
		fontFamily: "inherit",
		background: "#fff",
		outline: "none"
	},
	btnPrimary: {
		padding: "10px 24px",
		background: "#0f2019",
		color: "#fff",
		border: "none",
		borderRadius: 6,
		fontSize: 14,
		fontWeight: 500,
		cursor: "pointer",
		whiteSpace: "nowrap"
	},
	btnOutline: {
		display: "inline-flex",
		alignItems: "center",
		gap: 8,
		padding: "10px 20px",
		background: "transparent",
		border: "1px solid #c2c8c3",
		borderRadius: 6,
		fontSize: 14,
		fontWeight: 500,
		color: "#0f2019",
		cursor: "pointer"
	},
	listHeader: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		flexWrap: "wrap",
		gap: 8
	},
	listActions: {
		display: "flex",
		gap: 8
	},
	btnSmall: {
		padding: "6px 14px",
		background: "#0f2019",
		color: "#fff",
		border: "none",
		borderRadius: 6,
		fontSize: 12,
		fontWeight: 500,
		cursor: "pointer"
	},
	btnSmallDanger: {
		padding: "6px 14px",
		background: "transparent",
		color: "#b44",
		border: "1px solid #ecc",
		borderRadius: 6,
		fontSize: 12,
		fontWeight: 500,
		cursor: "pointer"
	},
	empty: {
		fontSize: 14,
		color: "#aaa",
		textAlign: "center",
		padding: "32px 0"
	},
	tableWrap: {
		overflowX: "auto",
		marginTop: 8
	},
	table: {
		width: "100%",
		borderCollapse: "collapse",
		fontSize: 14
	},
	th: {
		textAlign: "left",
		padding: "10px 12px",
		borderBottom: "2px solid #e6e2db",
		fontSize: 11,
		fontWeight: 600,
		letterSpacing: "0.08em",
		textTransform: "uppercase",
		color: "#737874"
	},
	tr: {},
	td: {
		padding: "10px 12px",
		borderBottom: "1px solid #f0ede8",
		color: "#424844"
	},
	tdName: {
		padding: "10px 12px",
		borderBottom: "1px solid #f0ede8",
		color: "#0f2019",
		fontWeight: 500
	},
	tdLink: {
		padding: "10px 12px",
		borderBottom: "1px solid #f0ede8"
	},
	linkPreview: {
		fontSize: 11,
		color: "#aaa",
		fontFamily: "monospace"
	},
	tdActions: {
		padding: "10px 8px",
		borderBottom: "1px solid #f0ede8",
		textAlign: "center",
		whiteSpace: "nowrap"
	},
	btnCopy: {
		background: "none",
		border: "none",
		cursor: "pointer",
		fontSize: 16,
		padding: "2px 6px"
	},
	btnRemove: {
		background: "none",
		border: "none",
		cursor: "pointer",
		fontSize: 14,
		color: "#b44",
		padding: "2px 6px"
	},
	stats: {
		display: "flex",
		gap: 12,
		flexWrap: "wrap"
	},
	statCard: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		padding: "16px 24px",
		background: "#fdf9f2",
		borderRadius: 8,
		minWidth: 100
	},
	statNum: {
		fontFamily: "'Cormorant Garamond', Georgia, serif",
		fontSize: 28,
		fontWeight: 600,
		color: "#0f2019"
	},
	statLabel: {
		fontSize: 11,
		fontWeight: 600,
		letterSpacing: "0.08em",
		textTransform: "uppercase",
		color: "#737874",
		marginTop: 4
	},
	guide: {
		background: "#fdf9f2",
		border: "1px solid #e6e2db",
		borderRadius: 8,
		padding: "20px 24px",
		marginBottom: 16
	},
	guideTitle: {
		fontSize: 13,
		fontWeight: 600,
		color: "#0f2019",
		marginBottom: 8
	},
	guideTableWrap: { overflowX: "auto" },
	guideTable: {
		width: "100%",
		borderCollapse: "collapse",
		fontSize: 13
	},
	guideTh: {
		textAlign: "left",
		padding: "8px 12px",
		borderBottom: "2px solid #e6e2db",
		fontSize: 11,
		fontWeight: 600,
		letterSpacing: "0.06em",
		textTransform: "uppercase",
		color: "#737874"
	},
	guideTd: {
		padding: "8px 12px",
		borderBottom: "1px solid #f0ede8",
		color: "#424844",
		verticalAlign: "top"
	},
	guideTdName: {
		padding: "8px 12px",
		borderBottom: "1px solid #f0ede8",
		color: "#0f2019",
		fontWeight: 600,
		fontFamily: "monospace",
		verticalAlign: "top"
	},
	guideTdCode: {
		padding: "8px 12px",
		borderBottom: "1px solid #f0ede8",
		color: "#424844",
		fontFamily: "monospace",
		fontSize: 12,
		verticalAlign: "top"
	},
	guideNote: {
		fontSize: 12,
		color: "#737874",
		marginTop: 12,
		lineHeight: 1.5
	},
	toastContainer: {
		position: "fixed",
		top: 24,
		right: 24,
		zIndex: 9999,
		display: "flex",
		flexDirection: "column",
		gap: 8
	},
	toast: {
		display: "flex",
		alignItems: "center",
		gap: 10,
		padding: "12px 20px",
		borderRadius: 8,
		color: "#fff",
		fontSize: 14,
		fontWeight: 500,
		boxShadow: "0 8px 24px rgba(0,0,0,.15)",
		animation: "toastIn .3s ease",
		maxWidth: 400
	}
};
//#endregion
export { DashboardPage as component };
