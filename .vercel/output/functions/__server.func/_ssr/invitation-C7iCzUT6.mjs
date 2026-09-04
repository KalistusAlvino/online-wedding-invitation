import { __toESM } from "../_runtime.mjs";
import { supabase } from "./supabase-CIK0RTCb.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@tanstack/react-devtools+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invitation-C7iCzUT6.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
/**
* Adds `.is-visible` to every `.js-reveal` element once it scrolls into view.
* Call after the content that contains reveal elements has mounted.
*/
function useRevealOnScroll() {
	(0, import_react.useEffect)(() => {
		const elements = Array.from(document.querySelectorAll(".js-reveal"));
		if (elements.length === 0) return;
		if (typeof IntersectionObserver === "undefined") {
			elements.forEach((el) => el.classList.add("is-visible"));
			return;
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("is-visible");
					observer.unobserve(entry.target);
				}
			});
		}, { threshold: .1 });
		elements.forEach((el) => observer.observe(el));
		const frame = requestAnimationFrame(() => {
			elements.forEach((el) => {
				if (el.getBoundingClientRect().top < window.innerHeight) el.classList.add("is-visible");
			});
		});
		return () => {
			cancelAnimationFrame(frame);
			observer.disconnect();
		};
	}, []);
}
var COUPLE = {
	brideName: "Chaca",
	groomName: "Fedrik",
	dateShort: "10 • 10 • 2026"
};
/**
* YouTube video used as the autoplay hero background (replaces HERO_IMAGE).
* Change HERO_VIDEO_ID to your wedding video id (the part after ?v= in the URL).
*/
var HERO_VIDEO_ID = "aqz-KE-bpKQ";
var CLOSING_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBXRuz6yWqxEVERi1H78b2FY-OEpb6cFr_-biZ0oCmlgFHDFTrEesoMPvBio2DOMFDVGAlylSltAFRtm4_aSLYdEOwtf9WHx2iqOtsXr0IXOyYp3OvCnO5jonTdIKveKsdtd0nenyLWN_MMDjzmwvWHaNaT0R6e2iM569T1XofHLVfhVMJcw97canTkmgOneGrqrBR5hYNnKvVt36AZhds8JLMjmGrHn98RO46_-IQ4UIwE0IQgpfNfnw";
var COUPLE_MEMBERS = [{
	name: "Anastasia Imelda Mei Liana Tobing",
	role: "Daughter of Mr. & Mrs. Tobing",
	handle: "@CHACA",
	offset: false,
	photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0Xla4MK2WS2ybGpv6tMfkvsOkR-_3mT-fiqhGCGEtJo3sFicGQnKDcyOsNa7HMICs7F3Up1sUq86vVLVQ__oy0CSt9zNNaujZZqQw4gXkewHNa7MnS0hqbjVZO83nLL1VTC90GTj6Q2fsj_VAeT2FAJB39MD_W0IrfDf2Isfqk6Xfh9UZdWlqCzw9fRyhm56MZj0TROr2dz9vIvwJ1ARBlBwnl0tEvQmr_ZmnVTgkkwDL2XYq9vMBZw",
	alt: "Portrait editorial Chaca dengan gaun sutra putih di latar ivory yang hangat"
}, {
	name: "Fedrik Andrean Lehilaka",
	role: "Son of Mr. & Mrs. Lehilaka",
	handle: "@FEDRIK",
	offset: true,
	photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuCzxMC8XF7v5WPGMu74s6Xb-bmrFMaCsAF4PMpDlYb4oVUB4bmZt3HlXx6PUY94MPJ3IJH4XzooN3Cg2Z95yx_BUqrS0AV5gDJWsM9Yn5f-APoUiEvYrSdAJo4RxmPjTAOmiU6Auf6xaHiv3yXY-jWx-YM4jZ7Tx5AOJwVVTOss7hXAUXUQ__lq9VP07sSTBnlnQpjKz65Mj9QhQQG0nk0ZKrJTIVuEH9FywBA-XgxMjZhax-0AIXra6g",
	alt: "Potret editorial Fedrik dengan setelan hijau tua di latar ivory"
}];
var EVENTS = [{
	kind: "Pemberkatan",
	time: "09:00 WIB",
	day: "Sabtu, 10 Oktober 2026",
	venue: "Gereja GPIB Pengharapan",
	address: "Jl. Nama Jalan No. 123, Kota, Provinsi"
}, {
	kind: "Resepsi",
	time: "11:00 WIB",
	day: "Sabtu, 10 Oktober 2026",
	venue: "Gedung Welasih",
	address: "Jl. Nama Jalan No. 456, Kota, Provinsi"
}];
var GALLERY = [
	{
		tile: "a",
		photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuDjGJHl5U4UBAMH3XDUlo1loZngwSzmNmTCjeEzVRU5TLTF6Y1sePBLtG3_-ddVIumSvVQtMGLLzis2QmLFuumfafLEyoDnpBLBwL4t4pFMpjGLRmFgMLHfHaJ2L5108Vdaidi6hDr2UNY68lL5mi5mUwzETKTpiNPK5SFZ45vHKwGGDYoZsfBIE2oT-s8e3T7Y3vvYnaXOkM-dT9kv10nmOFO9Znt6VaWYVO7D3TNRGhDC0Yqh7FiLDQ",
		alt: "Foto cinematic pasangan di tebing menghadap lautan saat golden hour"
	},
	{
		tile: "b",
		photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuD5MpvOX-d75hCialOt65VWP1aLuFzPqmS1m2dYtpdS9ToM_4fH11rwXo7IAuakYN9RIp7AjfuC4_bSIqJLT_9Vr2u2mrMESoZWHRL4zvFueS2bFh_GjCiYD6tnjqVCYvRtOyagcd-WFwWlJ_21ZXVgjZ6WmgjcAmlS6bqnYzHSjp1LTx_HLjSRmihnkbsNKlfK_BXfg3Eu9ZPFtJVsOVxV_JoFgwd1YhpXsjOtQrQZcAb1jVZsIlQNWQ",
		alt: "Makro intim tangan pasangan dengan cincin pertunangan"
	},
	{
		tile: "c",
		photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuB5QlF2GdFZ2xtizRTIl1Soj1CJxIRWqsmfmivarf0ZviCGT4f7Ic2FcbZFOHXGl54HT_QhBugdebY0DqH3q_pJxgxXWoCaUA1Ye5cdVsfZoiEZxWDFnLVYd_tyss0KsiE1x5u9dGJ1kzvGtfIWcOPJCqDqmXwWmV_arJqxv6RBXKMyS5FnyAxdmrgUtb68O5kaQWTazyvYdIQfAYs-S_aesLsXmXfFYWKQi_Zr8uFJkxusGYHoEAVI7g",
		alt: "Potret hitam-putih pasangan yang tertawa bersama"
	},
	{
		tile: "d",
		photo: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt5lRv_7Vrk-c_RhSU-M_pTaLE1LoWPCX8xDFqPZ0JvB9b1PkUSZQOkXfqBJjTNe0yKaiX0_2VPGMhItfCqT9BLdV0ad_RjOZwEqBipx17VVLvfTnFCOSndrMwyl82Euz8_QznY06fOK9o43BgXv4tt9q505JZzxpr4JvfDsSV48Vylq3IxjzubsSnuJKX6CgRzXEyBS7egM724tkCsznjsqPB6EDgzcAW6LvENgn-yeGOOt-dGi1yEA",
		alt: "Shot artistik pasangan menari di aula dengan jendela lengkung yang megah"
	}
];
var BANK_ACCOUNTS = [{
	bank: "BCA",
	number: "1234 5678 90",
	holder: "a.n Fedrik Andrean Lehilaka"
}, {
	bank: "BRI",
	number: "0987 6543 21",
	holder: "a.n Anastasia Imelda Mei Liana Tobing"
}];
function cx(...parts) {
	return parts.filter(Boolean).join(" ");
}
function BotanicalSprig() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "section-head__botanical",
		"aria-hidden": "true",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 120 34",
			fill: "none",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M4 30 C 38 27, 84 17, 114 5" }),
				[
					{
						x: 30,
						y: 26,
						r: -70,
						s: .9
					},
					{
						x: 48,
						y: 23,
						r: -118,
						s: .8
					},
					{
						x: 68,
						y: 19,
						r: -68,
						s: 1
					},
					{
						x: 87,
						y: 15,
						r: -118,
						s: .72
					},
					{
						x: 103,
						y: 11,
						r: -66,
						s: .68
					}
				].map((leaf, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					transform: `translate(${leaf.x} ${leaf.y}) scale(${leaf.s}) rotate(${leaf.r})`,
					d: "M-7 0 C -3 -4.5, 3 -4.5, 7 0 C 3 4.5, -3 4.5, -7 0 Z"
				}, index)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "115",
					cy: "4.5",
					r: "1.6"
				})
			]
		})
	});
}
function SectionHead({ children, large = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cx("section-head", large && "section-head--large"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "section-head__title",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BotanicalSprig, {})]
	});
}
function HeroSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		className: "hero",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero__media hero__media--video",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
					className: "hero__video",
					title: "Video latar belakang undangan",
					src: `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${HERO_VIDEO_ID}&playsinline=1&rel=0&modestbranding=1`,
					allow: "autoplay; encrypted-media; picture-in-picture",
					allowFullScreen: true
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hero__overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero__content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero__eyebrow label-caps uppercase",
						children: "The Wedding of"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "hero__title display-hero",
						children: [
							COUPLE.brideName,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display-hero__amp",
								children: "&"
							}),
							" ",
							COUPLE.groomName
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero__meta",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero__meta-line" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero__meta-date headline headline--md",
								children: COUPLE.dateShort
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero__meta-line" })
						]
					})
				]
			})
		]
	});
}
function VerseSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section verse",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container verse__content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "cross js-reveal" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "verse__quote headline headline--lg js-reveal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "“Demikianlah mereka bukan lagi dua, melainkan satu. Karena itu, apa yang telah dipersatukan Allah, tidak boleh diceraikan manusia.”" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "verse__cite label-caps label-caps--wide js-reveal",
					children: "Matius 19:6"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "verse__ornament js-reveal",
					"aria-hidden": "true",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 100 100",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 90 C50 60, 20 40, 20 10 M50 90 C50 60, 80 40, 80 10 M50 90 L50 40 M35 50 C40 40, 60 40, 65 50" })
					})
				})
			]
		})
	});
}
function CoupleSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section section--tan",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				large: true,
				children: "The Couple"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "couple__grid",
				children: COUPLE_MEMBERS.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
					className: cx("couple js-reveal", member.offset && "couple--second"),
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "couple__frame",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "couple__photo",
								src: member.photo,
								alt: member.alt,
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "couple__details",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "couple__name headline headline--lg",
								children: member.name
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "couple__role label-caps",
								children: member.role
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							className: "couple__social label-caps",
							href: "https://instagram.com",
							target: "_blank",
							rel: "noreferrer",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "material-symbols-outlined",
								children: "link"
							}), member.handle]
						})
					]
				}, member.name))
			})]
		})
	});
}
function EventsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "event",
		className: "section container",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			large: true,
			children: "Event Details"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "events",
			children: EVENTS.map((event, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_react.Fragment, { children: [index > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "events__divider" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "event js-reveal",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "event__kind-wrap",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "event__kind headline headline--md uppercase",
							children: event.kind
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "event__when",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "event__time headline headline--md",
								children: event.time
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "event__day label-caps uppercase",
								children: event.day
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "event__venue",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "event__venue-name body--md",
							children: event.venue
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "event__venue-address body--sm",
							children: event.address
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "event__actions",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "btn btn--ghost",
							children: "Lihat Lokasi"
						})
					})
				]
			})] }, event.venue))
		})]
	});
}
function GallerySection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "section container",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { children: "Our Moments" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "gallery__grid",
			children: GALLERY.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cx("gallery__item", `gallery__item--${item.tile}`, "js-reveal"),
				style: { animationDelay: `${index * 60}ms` },
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					className: "gallery__img",
					src: item.photo,
					alt: item.alt,
					loading: "lazy"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gallery__shade" })]
			}, item.tile))
		})]
	});
}
function GiftSection() {
	const [copiedBank, setCopiedBank] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitMsg, setSubmitMsg] = (0, import_react.useState)(null);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [msgLimit, setMsgLimit] = (0, import_react.useState)(4);
	const refreshMessages = async () => {
		const { data, error } = await supabase.from("messages").select("id, sapaan, name, attendance, message, created_at").order("created_at", { ascending: false }).limit(50);
		if (error) console.error("[Messages] Error:", error.code, error.message, error.details);
		else {
			console.log("[Messages] Loaded:", data?.length ?? 0, "rows", data);
			setMessages(data ?? []);
		}
	};
	(0, import_react.useEffect)(() => {
		refreshMessages();
	}, []);
	(0, import_react.useEffect)(() => {
		const mqMobile = window.matchMedia("(max-width: 47rem)");
		const mqTablet = window.matchMedia("(max-width: 80rem)");
		const update = () => {
			if (mqMobile.matches) setMsgLimit(4);
			else if (mqTablet.matches) setMsgLimit(6);
			else setMsgLimit(8);
		};
		update();
		mqMobile.addEventListener("change", update);
		mqTablet.addEventListener("change", update);
		return () => {
			mqMobile.removeEventListener("change", update);
			mqTablet.removeEventListener("change", update);
		};
	}, []);
	const handleCopy = async (number, bank) => {
		try {
			await navigator.clipboard.writeText(number.replace(/\s/g, ""));
		} catch {}
		setCopiedBank(bank);
		window.setTimeout(() => setCopiedBank(null), 1600);
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		const form = event.currentTarget;
		const fd = new FormData(form);
		const sapaan = String(fd.get("sapaan") || "Bapak/Ibu");
		const name = String(fd.get("name") || "").trim();
		const attendance = String(fd.get("attendance") || "hadir");
		const message = String(fd.get("message") || "").trim();
		if (!name) return;
		setSubmitting(true);
		setSubmitMsg(null);
		const { error } = await supabase.from("messages").insert({
			sapaan,
			name,
			attendance,
			message
		});
		setSubmitting(false);
		if (error) setSubmitMsg({
			type: "err",
			text: "Gagal mengirim. Coba lagi."
		});
		else {
			setSubmitMsg({
				type: "ok",
				text: "Terima kasih atas doa dan ucapannya!"
			});
			form.reset();
			refreshMessages();
		}
	};
	const visibleMessages = messages.slice(0, msgLimit);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "rsvp",
		className: "section section--tan-strong",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel__column js-reveal",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gift__intro",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "gift__title uppercase",
							children: "Wedding Gift"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "gift__desc body--sm",
							children: "Your presence is the greatest gift. However, if you wish to honor us with a gift, you may do so through the details below."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "gift__accounts",
						children: BANK_ACCOUNTS.map((account) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gift__account",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "gift__bank label-caps uppercase",
									children: account.bank
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "gift__account-detail",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "gift__number headline headline--md",
										children: account.number
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "gift__holder body--sm",
										children: account.holder
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "gift__copy label-caps uppercase",
									onClick: () => handleCopy(account.number, account.bank),
									children: copiedBank === account.bank ? "Tersalin ✓" : "Copy Rekening"
								})
							]
						}, account.bank))
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel__column js-reveal",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "panel__intro",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "panel__title uppercase",
								children: "RSVP"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body--sm",
								children: "Kindly confirm your attendance by October 1st, 2026."
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "form",
							onSubmit: handleSubmit,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "field__label label-caps uppercase",
										htmlFor: "rsvp-sapaan",
										children: "Sapaan"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field__control field__control--select body--md",
										id: "rsvp-sapaan",
										name: "sapaan",
										required: true,
										defaultValue: "Bapak/Ibu",
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
											})
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "field__label label-caps uppercase",
										htmlFor: "rsvp-name",
										children: "Full Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field__control body--md",
										id: "rsvp-name",
										name: "name",
										type: "text",
										placeholder: "Enter your name",
										required: true
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "field__label label-caps uppercase",
										htmlFor: "rsvp-attendance",
										children: "Will you attend?"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
										className: "field__control field__control--select body--md",
										id: "rsvp-attendance",
										name: "attendance",
										required: true,
										defaultValue: "hadir",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "hadir",
											children: "Yes, gladly"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: "tidak_hadir",
											children: "Regretfully decline"
										})]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "field",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "field__label label-caps uppercase",
										htmlFor: "rsvp-message",
										children: "Message for the Couple"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
										className: "field__control field__control--area body--md",
										id: "rsvp-message",
										name: "message",
										rows: 3,
										placeholder: "Write your wishes here..."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "submit",
									className: "btn btn--primary btn--block uppercase",
									disabled: submitting,
									style: { opacity: submitting ? .6 : 1 },
									children: submitting ? "Mengirim..." : "Send Confirmation"
								})
							]
						}),
						submitMsg && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body--sm",
							style: {
								marginTop: 12,
								padding: "10px 14px",
								borderRadius: 6,
								background: submitMsg.type === "ok" ? "#e8f5e9" : "#fdecea",
								color: submitMsg.type === "ok" ? "#1b5e20" : "#b71c1c"
							},
							children: submitMsg.text
						})
					]
				})]
			})
		})
	}), messages.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "section",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { children: "Ucapan & Doa" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "wishes__grid",
					children: visibleMessages.map((msg) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "wish-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "wish-card__name",
								children: [
									msg.sapaan,
									" ",
									msg.name,
									msg.attendance === "tidak_hadir" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "wish-card__badge wish-card__badge--absent",
										children: "tidak hadir"
									})
								]
							}),
							msg.message && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "wish-card__message",
								children: [
									"“",
									msg.message,
									"”"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "wish-card__time",
								children: new Date(msg.created_at).toLocaleDateString("id-ID", {
									day: "numeric",
									month: "long",
									year: "numeric"
								})
							})
						]
					}, msg.id))
				}),
				messages.length > msgLimit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					style: {
						textAlign: "center",
						marginTop: 40
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "/messages",
						className: "btn btn--ghost uppercase",
						children: [
							"Lihat Semua Pesan (",
							messages.length,
							")"
						]
					})
				})
			]
		})
	})] });
}
function ClosingSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "closing",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "closing__media",
				style: { backgroundImage: `url('${CLOSING_IMAGE}')` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "closing__scrim" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "closing__content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "closing__eyebrow label-caps uppercase",
						children: "Thank You"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "closing__title display-hero",
						children: [
							COUPLE.brideName,
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "display-hero__amp",
								children: "&"
							}),
							" ",
							COUPLE.groomName
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "closing__note headline headline--lg",
						children: "With Love."
					})
				]
			})
		]
	});
}
function InvitationPage() {
	useRevealOnScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerseSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoupleSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingSection, {})
	] });
}
//#endregion
export { InvitationPage as component };
