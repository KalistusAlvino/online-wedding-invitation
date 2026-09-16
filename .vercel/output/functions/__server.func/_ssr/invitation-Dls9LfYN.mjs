import { __toESM } from "../_runtime.mjs";
import { supabase } from "./supabase-BCsmZRy6.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { Route$1 } from "./router-DA8DP6cG.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invitation-Dls9LfYN.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Preloader({ progress, isComplete }) {
	if (isComplete) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "preloader",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "preloader__content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "preloader__spinner" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "preloader__text",
					children: "Memuat undangan..."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "preloader__bar",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "preloader__bar-fill",
						style: { width: `${progress}%` }
					})
				})
			]
		})
	});
}
function preloadImage(src) {
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.onload = () => resolve();
		img.onerror = () => reject(/* @__PURE__ */ new Error(`Failed to load image: ${src}`));
		img.src = src;
	});
}
function preloadVideo(src) {
	return new Promise((resolve) => {
		const video = document.createElement("video");
		video.preload = "auto";
		video.onloadeddata = () => resolve();
		video.onerror = () => resolve();
		video.src = src;
	});
}
function preloadAudio(src) {
	return new Promise((resolve) => {
		const audio = document.createElement("audio");
		audio.preload = "auto";
		audio.onloadeddata = () => resolve();
		audio.onerror = () => resolve();
		audio.src = src;
	});
}
function usePreload({ assets, onComplete }) {
	const [progress, setProgress] = (0, import_react.useState)(0);
	const [isComplete, setIsComplete] = (0, import_react.useState)(false);
	const completedRef = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		let loaded = 0;
		const total = assets.length;
		const promises = assets.map(async (asset) => {
			try {
				if (asset.type === "image") await preloadImage(asset.src);
				else if (asset.type === "video") await preloadVideo(asset.src);
				else if (asset.type === "audio") await preloadAudio(asset.src);
			} catch {}
			loaded++;
			setProgress(Math.round(loaded / total * 100));
		});
		Promise.all(promises).then(() => {
			setProgress(100);
			setIsComplete(true);
			if (!completedRef.current) {
				completedRef.current = true;
				onComplete?.();
			}
		});
	}, []);
	return {
		progress,
		isComplete
	};
}
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
var CLOSING_IMAGE = "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/9.webp";
var COUPLE_MEMBERS = [{
	name: "Anastasia Imelda\nMei Liana Tobing",
	firstName: "Chaca",
	role: "HER",
	parentsLabel: "Putri pertama dari",
	parents: "Bapak Maruhum Pandapotan Tobing & Ibu Rosdiana Jeminar Butarbutar",
	handle: "@ch4ca__",
	instagramUrl: "https://www.instagram.com/ch4ca__/?hl=id",
	offset: false,
	photos: ["https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-bridge/The%20Bride%201.webp", "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-bridge/The%20Bride%202.webp"],
	alt: "Portrait editorial Chaca dengan gaun sutra putih di latar ivory yang hangat"
}, {
	name: "Fedrik Andrean\nLehilaka",
	firstName: "Fedrik",
	role: "HIM",
	parentsLabel: "Putra ketiga dari",
	parents: "Bapak Jon Robinson Lehilaka (✝︎) & Ibu Soeharni",
	handle: "@fedrikstarsss",
	instagramUrl: "https://www.instagram.com/fedrikstarsss/?hl=id",
	offset: true,
	photos: ["https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-groom/The%20Groom%201.webp"],
	alt: "Potret editorial Fedrik dengan setelan hijau tua di latar ivory"
}];
var EVENTS = [{
	kind: "Holy Matrimony",
	kindSub: "Pemberkatan",
	time: "09.00 - End",
	day: "Saturday, October 10th, 2026",
	venue: "Gereja GPIB Pengharapan",
	address: "Jl. Komp. Bekang, Cibinong, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16911",
	mapUrl: "https://share.google/t1AzvSZvf4kIa2G5p"
}, {
	kind: "Wedding Reception",
	kindSub: "Resepsi",
	time: "11.00 - 15.00 WIB",
	day: "Saturday, October 10th, 2026",
	venue: "Gedung Welasih",
	address: "Jl. Baru Puspa Negara No.01, Puspanegara, Kec. Citeureup, Kabupaten Bogor, Jawa Barat 16810",
	mapUrl: "https://share.google/x7BK9IyFaO8PmYRs6"
}];
var GALLERY_ROWS = [
	{ items: [
		{
			tile: "a",
			photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/1.webp",
			alt: "Foto 1"
		},
		{
			tile: "b",
			photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/2.webp",
			alt: "Foto 2"
		},
		{
			tile: "c",
			photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/3.webp",
			alt: "Foto 3"
		},
		{
			tile: "d",
			photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/4.webp",
			alt: "Foto 4"
		}
	] },
	{ items: [
		{
			tile: "e",
			photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/5.webp",
			alt: "Foto 5"
		},
		{
			tile: "f",
			photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/6.webp",
			alt: "Foto 6"
		},
		{
			tile: "g",
			photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/7.webp",
			alt: "Foto 7"
		}
	] },
	{ items: [
		{
			tile: "h",
			photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/8.webp",
			alt: "Foto 8"
		},
		{
			tile: "i",
			photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/9.webp",
			alt: "Foto 9"
		},
		{
			tile: "j",
			photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/11.webp",
			alt: "Foto 10"
		}
	] }
];
var GALLERY_CAROUSEL = [
	{
		photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-capter/The%20Proposal.webp",
		alt: "Momen besar bersama"
	},
	{
		photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/our-big-moments/Our%20Moment%20Big%202.webp",
		alt: "Momen besar bersama"
	},
	{
		photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/our-big-moments/Our%20Moment%20Big%203.webp",
		alt: "Momen besar bersama"
	},
	{
		photo: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/our-big-moments/Our%20Moment%20Big%204.webp",
		alt: "Momen besar bersama"
	}
];
var BANK_ACCOUNTS = [{
	bank: "BCA",
	number: "1671567973",
	holder: "a.n Fedrik Andrean Lehilaka"
}, {
	bank: "BRI",
	number: "0531-01-016293-501",
	holder: "a.n Anastasia Imelda Mei Liana Tobing"
}];
var GIFT_ADDRESS = {
	title: "PHYSICAL GIFT",
	subtitle: "For physical gifts, you may send them to the following address:",
	recipient: "Chaca & Fedrik",
	address: "Puri Nirwana 3 Blok DN 14 Jl. Anggur 1, Karadenan - Cibinong, Kab Bogor",
	phone: "+62 896-8821-6860"
};
var CHAPTERS = [
	{
		year: "2016",
		title: "The First Hello",
		image: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-capter/The%20First%20Hello.webp",
		alt: "Foto pertemuan pertama pasangan",
		quote: "We met by chance, and the moment I saw her, it was love at first sight."
	},
	{
		year: "2017",
		title: "The Journey",
		image: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-capter/The%20Journey.webp",
		alt: "Foto perjalanan cinta pasangan",
		quote: "Our romantic journey officially began on October 19, 2017, with Dufan standing as the silent witness to my declaration of love."
	},
	{
		year: "2024",
		title: "The Proposal",
		image: "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-capter/The%20Proposal.webp",
		alt: "Foto momen lamaran pasangan",
		quote: "On October 19, 2024 exactly seven years later I asked her to marry me. As a symbol of my love and commitment, I gave her a ring, with Ancol witnessing the start of our next chapter together."
	}
];
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		id: "home",
		className: "hero",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero__content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero__top",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "hero__story",
						children: [
							"The Story",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"of Two"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero__rule" })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero__names-block",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "hero__name",
							children: COUPLE.brideName
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "hero__and",
							children: "and"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "hero__name",
							children: COUPLE.groomName
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero__bottom",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "hero__vline" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hero__date-stack",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero__date-dot",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "10" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hero__date-dot",
									children: "•"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "2026" })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "hero__tagline",
							children: [
								"a celebration of love",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"a promise made",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"for a lifetime"
							]
						})
					]
				})
			]
		})
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
function CoupleCard({ member }) {
	const [photoIdx, setPhotoIdx] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (member.photos.length <= 1) return;
		const id = window.setInterval(() => {
			setPhotoIdx((i) => (i + 1) % member.photos.length);
		}, 4e3);
		return () => window.clearInterval(id);
	}, [member.photos.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
		className: "couple-card",
		children: [
			member.photos.map((src, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: cx("couple-card__bg", i === photoIdx && "couple-card__bg--active"),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src,
					alt: member.alt
				})
			}, src)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "couple-card__overlay" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "couple-card__content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "couple-card__gender",
						children: member.role
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "couple-card__rule" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "couple-card__title-wrap",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "couple-card__title-row",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "couple-card__title",
								children: member.role === "HER" ? "The\nBride" : "The\nGroom"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "couple-card__script",
								children: member.firstName
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "couple-card__bottom",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "couple-card__vline" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "couple-card__info",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "couple-card__fullname",
									children: member.name.replace("\n", " ")
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "couple-card__parents-label",
									children: member.parentsLabel
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "couple-card__parents",
									children: member.parents
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									className: "couple-card__social",
									href: member.instagramUrl || "#",
									target: "_blank",
									rel: "noreferrer",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
											className: "couple-card__social-icon",
											viewBox: "0 0 24 24",
											fill: "currentColor",
											width: "14",
											height: "14",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.058 1.266.069 1.646.069 4.849 0 3.205-.012 3.584-.069 4.849-.054 1.17-.249 1.805-.413 2.227-.217.562-.477.96-.896 1.382-.42.419-.82.679-1.381.896-.422.164-1.057.36-2.227.413-1.266.058-1.646.069-4.849.069-3.204 0-3.584-.012-4.849-.069-1.17-.054-1.805-.249-2.227-.413a3.736 3.736 0 0 1-1.381-.896 3.642 3.642 0 0 1-.896-1.381c-.164-.422-.36-1.057-.413-2.227-.058-1.266-.069-1.646-.069-4.849 0-3.204.012-3.584.069-4.849.054-1.17.249-1.805.413-2.227.217-.562.477-.96.896-1.382a3.642 3.642 0 0 1 1.381-.896c.422-.164 1.057-.36 2.227-.413 1.266-.058 1.646-.069 4.849-.069M12 0C8.741 0 8.333.014 7.053.072 5.775.13 4.902.333 4.14.63a5.87 5.87 0 0 0-2.126 1.384A5.855 5.855 0 0 0 .63 4.14C.333 4.902.13 5.775.072 7.053.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.058 1.277.261 2.15.558 2.913a5.885 5.885 0 0 0 1.384 2.126A5.868 5.868 0 0 0 4.14 23.37c.764.297 1.637.5 2.913.558C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c1.277-.058 2.15-.261 2.913-.558a5.898 5.898 0 0 0 2.126-1.384 5.86 5.86 0 0 0 1.384-2.126c.297-.764.5-1.637.558-2.913.058-1.28.072-1.688.072-4.948s-.014-3.668-.072-4.948c-.058-1.277-.261-2.15-.558-2.913a5.87 5.87 0 0 0-1.384-2.126A5.855 5.855 0 0 0 19.86.63c-.764-.297-1.637-.5-2.913-.558C15.668.014 15.259 0 12 0Zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881Z" })
										}),
										"INSTAGRAM | ",
										member.handle
									]
								})
							]
						})]
					})
				]
			})
		]
	});
}
function CoupleSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "couple-section",
		children: COUPLE_MEMBERS.map((member) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoupleCard, { member }, member.name))
	});
}
var WEDDING_DATE = (/* @__PURE__ */ new Date("2026-10-10T09:00:00+07:00")).getTime();
function CountdownSection() {
	const [now, setNow] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		setNow(Date.now());
		const id = window.setInterval(() => setNow(Date.now()), 1e3);
		return () => window.clearInterval(id);
	}, []);
	const diff = Math.max(0, WEDDING_DATE - now);
	const days = Math.floor(diff / 864e5);
	const hours = Math.floor(diff / 36e5 % 24);
	const minutes = Math.floor(diff / 6e4 % 60);
	const seconds = Math.floor(diff / 1e3 % 60);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "countdown",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "countdown__content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "countdown__heading",
					children: [
						"The",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Wait"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "countdown__heading-rule" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "countdown__circle",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "countdown__circle-border" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "countdown__circle-inner",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "countdown__until",
								children: "UNTIL"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "countdown__until-sub",
								children: "WE SAY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "countdown__ido",
								children: "I Do"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "countdown__date",
								children: "10 · 10 · 2026"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "countdown__numbers",
								children: [
									{
										value: days,
										label: "DAYS"
									},
									{
										value: hours,
										label: "HOURS"
									},
									{
										value: minutes,
										label: "MINUTES"
									},
									{
										value: seconds,
										label: "SECONDS"
									}
								].map((u) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "countdown__unit",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "countdown__num",
										children: String(u.value).padStart(2, "0")
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "countdown__label",
										children: u.label
									})]
								}, u.label))
							})
						]
					})]
				})
			]
		})
	});
}
function ChaptersSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "section container",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			large: true,
			children: "The Chapters We Share"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "chapters",
			children: CHAPTERS.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "chapter",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "chapter__image-wrap",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "chapter__image",
						src: chapter.image,
						alt: chapter.alt,
						loading: "lazy"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "chapter__content",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "chapter__year",
							children: chapter.year
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
							className: "chapter__title",
							children: [
								chapter.title,
								" • ",
								chapter.year
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "chapter__quote",
							children: chapter.quote
						})
					]
				})]
			}, chapter.year))
		})]
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
						}), event.kindSub && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "event__day label-caps uppercase",
							style: { marginTop: 4 },
							children: [
								"(",
								event.kindSub,
								")"
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "event__when",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "event__day label-caps uppercase",
								style: { marginBottom: 4 },
								children: "Date & Time"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "event__time headline headline--md",
								children: event.time
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "event__day label-caps uppercase",
								children: event.day
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "event__venue",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "event__day label-caps uppercase",
								style: { marginBottom: 4 },
								children: "Location / Place"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "event__venue-name body--md",
								children: event.venue
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "event__venue-address body--sm",
								children: event.address
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "event__actions",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: event.mapUrl || "#",
							target: "_blank",
							rel: "noreferrer",
							className: "btn btn--ghost uppercase",
							children: "View Location"
						})
					})
				]
			})] }, event.venue))
		})]
	});
}
function GallerySection() {
	const [currentSlide, setCurrentSlide] = (0, import_react.useState)(0);
	const [touchStartX, setTouchStartX] = (0, import_react.useState)(null);
	const [touchEndX, setTouchEndX] = (0, import_react.useState)(null);
	const [isDragging, setIsDragging] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % GALLERY_CAROUSEL.length);
		}, 4e3);
		return () => clearInterval(timer);
	}, []);
	const getSlideIndex = (offset) => (currentSlide + offset + GALLERY_CAROUSEL.length) % GALLERY_CAROUSEL.length;
	const handleStart = (clientX) => {
		setTouchStartX(clientX);
		setTouchEndX(clientX);
		setIsDragging(true);
	};
	const handleMove = (clientX) => {
		if (!isDragging) return;
		setTouchEndX(clientX);
	};
	const handleEnd = () => {
		if (!isDragging || touchStartX === null || touchEndX === null) return;
		const distance = touchStartX - touchEndX;
		if (distance > 40) setCurrentSlide((prev) => (prev + 1) % GALLERY_CAROUSEL.length);
		else if (distance < -40) setCurrentSlide((prev) => (prev - 1 + GALLERY_CAROUSEL.length) % GALLERY_CAROUSEL.length);
		setTouchStartX(null);
		setTouchEndX(null);
		setIsDragging(false);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "section container",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { children: "Our Moments" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gallery__carousel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery__carousel-viewport",
					style: {
						cursor: isDragging ? "grabbing" : "grab",
						userSelect: "none",
						touchAction: "pan-y"
					},
					onTouchStart: (e) => handleStart(e.touches[0].clientX),
					onTouchMove: (e) => handleMove(e.touches[0].clientX),
					onTouchEnd: handleEnd,
					onMouseDown: (e) => handleStart(e.clientX),
					onMouseMove: (e) => handleMove(e.clientX),
					onMouseUp: handleEnd,
					onMouseLeave: handleEnd,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery__carousel-side gallery__carousel-side--left",
							onClick: () => setCurrentSlide((prev) => (prev - 1 + GALLERY_CAROUSEL.length) % GALLERY_CAROUSEL.length),
							style: { cursor: "pointer" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "gallery__carousel-side-img",
								src: GALLERY_CAROUSEL[getSlideIndex(-1)].photo,
								alt: GALLERY_CAROUSEL[getSlideIndex(-1)].alt,
								loading: "lazy",
								draggable: false
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery__carousel-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "gallery__carousel-center-img",
								src: GALLERY_CAROUSEL[currentSlide].photo,
								alt: GALLERY_CAROUSEL[currentSlide].alt,
								loading: "lazy",
								draggable: false
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery__carousel-side gallery__carousel-side--right",
							onClick: () => setCurrentSlide((prev) => (prev + 1) % GALLERY_CAROUSEL.length),
							style: { cursor: "pointer" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "gallery__carousel-side-img",
								src: GALLERY_CAROUSEL[getSlideIndex(1)].photo,
								alt: GALLERY_CAROUSEL[getSlideIndex(1)].alt,
								loading: "lazy",
								draggable: false
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "gallery__carousel-dots",
					children: GALLERY_CAROUSEL.map((photo, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: cx("gallery__carousel-dot", index === currentSlide && "gallery__carousel-dot--active"),
						onClick: () => setCurrentSlide(index),
						"aria-label": `Slide ${index + 1}`
					}, index))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gallery__collage",
				children: GALLERY_ROWS.flatMap((row) => row.items).map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: cx("gallery__collage-item", `gallery__collage-item--${item.tile}`),
					style: { animationDelay: `${index * 60}ms` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "gallery__collage-img",
						src: item.photo,
						alt: item.alt,
						loading: "lazy"
					})
				}, item.tile))
			})
		]
	});
}
function GiftSection() {
	const { name: guestName } = Route$1.useSearch();
	const [copiedBank, setCopiedBank] = (0, import_react.useState)(null);
	const [submitting, setSubmitting] = (0, import_react.useState)(false);
	const [submitMsg, setSubmitMsg] = (0, import_react.useState)(null);
	const [messages, setMessages] = (0, import_react.useState)([]);
	const [msgLimit, setMsgLimit] = (0, import_react.useState)(4);
	const refreshMessages = async () => {
		const { data, error } = await supabase.from("messages").select("id, name, attendance, message, created_at").order("created_at", { ascending: false }).limit(50);
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
		const name = String(fd.get("name") || "").trim();
		const attendance = String(fd.get("attendance") || "hadir");
		const message = String(fd.get("message") || "").trim();
		if (!name) return;
		setSubmitting(true);
		setSubmitMsg(null);
		const { error } = await supabase.from("messages").insert({
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
					className: "panel__column",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gift__intro",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "gift__eyebrow label-caps uppercase",
								children: "Wedding Gift"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gift__rule" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "gift__title",
								children: [
									"A Token",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"of Love"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "gift__vline" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "gift__desc",
								children: [
									"Your kindness",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"means the world to us.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Thank you for being",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"part of our journey."
								]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "gift__accounts",
						children: [BANK_ACCOUNTS.map((account) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
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
						}, account.bank)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "gift__account",
							style: { marginTop: 8 },
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "gift__bank label-caps uppercase",
									children: GIFT_ADDRESS.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "body--sm",
									style: {
										color: "rgba(255, 255, 255, 0.7)",
										fontSize: "13px",
										margin: "4px 0"
									},
									children: GIFT_ADDRESS.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "gift__account-detail",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "gift__holder body--md",
											style: {
												color: "#fff",
												fontWeight: 500
											},
											children: GIFT_ADDRESS.recipient
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "gift__holder body--sm",
											children: GIFT_ADDRESS.address
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "gift__holder body--sm",
											children: ["Phone: ", GIFT_ADDRESS.phone]
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "gift__copy label-caps uppercase",
									onClick: () => handleCopy(`${GIFT_ADDRESS.recipient}\n${GIFT_ADDRESS.address}\nPhone: ${GIFT_ADDRESS.phone}`, "ADDRESS"),
									children: copiedBank === "ADDRESS" ? "Tersalin ✓" : "Copy Address"
								})
							]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel__column",
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
										htmlFor: "rsvp-name",
										children: "Full Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										className: "field__control body--md",
										id: "rsvp-name",
										name: "name",
										type: "text",
										placeholder: "Enter your name",
										defaultValue: guestName || "",
										required: true
									}, guestName || "empty")]
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
								children: [msg.name, msg.attendance === "tidak_hadir" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "wish-card__badge wish-card__badge--absent",
									children: "tidak hadir"
								})]
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
var STILL_LANDSCAPE = CLOSING_IMAGE;
var STILL_PORTRAIT = "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/7.webp";
function useIsPortrait() {
	const [isPortrait, setIsPortrait] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia("(orientation: portrait)");
		setIsPortrait(mq.matches);
		const handler = (e) => setIsPortrait(e.matches);
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);
	return isPortrait;
}
function StillSection() {
	const stillImage = useIsPortrait() ? STILL_PORTRAIT : STILL_LANDSCAPE;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "still",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "still__media",
				style: { backgroundImage: `url('${stillImage}')` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "still__scrim" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "still__content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "still__word",
						children: "STILL"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "still__line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "still__word",
						children: "HERE"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "still__line" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "still__word",
						children: "TOGETHER"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "still__line" })
				]
			})
		]
	});
}
function ClosingSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "closing",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "closing__content",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "closing__intro",
					children: [
						"We can't wait to start",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"this beautiful journey together."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "closing__title",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "closing__title-script",
						children: "Thank"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "closing__title-serif",
						children: "YOU"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "closing__subtitle",
					children: [
						"SEE YOU",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"AT THE AISLE"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "closing__divider" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "closing__note",
					children: [
						"For being part of our special day",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"and for your kind wishes, love, and",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"prayers."
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "closing__names",
					children: [
						COUPLE.brideName,
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "closing__names-amp",
							children: "&"
						}),
						" ",
						COUPLE.groomName
					]
				})
			]
		})
	});
}
var VIDEO_DESKTOP = "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/background/Landscape.mp4";
var VIDEO_MOBILE = "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/background/Potrait.mp4";
var AUDIO_SRC = "https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/lagu/lagu.mp3";
var AUDIO_START = 131;
var MOBILE_BREAKPOINT = 768;
function useIsMobile() {
	const [isMobile, setIsMobile] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const mq = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT}px)`);
		setIsMobile(mq.matches);
		const handler = (e) => setIsMobile(e.matches);
		mq.addEventListener("change", handler);
		return () => mq.removeEventListener("change", handler);
	}, []);
	return isMobile;
}
function InvitationPage() {
	useRevealOnScroll();
	const videoSrc = useIsMobile() ? VIDEO_MOBILE : VIDEO_DESKTOP;
	const audioRef = (0, import_react.useRef)(null);
	const [isPlaying, setIsPlaying] = (0, import_react.useState)(true);
	const { progress, isComplete } = usePreload({ assets: [
		{
			type: "video",
			src: VIDEO_DESKTOP
		},
		{
			type: "video",
			src: VIDEO_MOBILE
		},
		{
			type: "audio",
			src: AUDIO_SRC
		}
	] });
	(0, import_react.useEffect)(() => {
		if (!isComplete) return;
		const audio = audioRef.current;
		if (!audio) return;
		audio.currentTime = AUDIO_START;
		audio.play().then(() => setIsPlaying(true)).catch(() => {
			setIsPlaying(false);
			const playOnInteraction = () => {
				audio.currentTime = AUDIO_START;
				audio.play().then(() => setIsPlaying(true)).catch(() => {});
				document.removeEventListener("click", playOnInteraction);
				document.removeEventListener("touchstart", playOnInteraction);
			};
			document.addEventListener("click", playOnInteraction, { once: true });
			document.addEventListener("touchstart", playOnInteraction, { once: true });
		});
	}, [isComplete]);
	const toggleMusic = () => {
		const audio = audioRef.current;
		if (!audio) return;
		if (audio.paused) audio.play().then(() => setIsPlaying(true)).catch(() => {});
		else {
			audio.pause();
			setIsPlaying(false);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Preloader, {
		progress,
		isComplete
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		style: {
			opacity: isComplete ? 1 : 0,
			transition: "opacity 0.6s ease"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed-bg",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("video", {
					className: "fixed-bg__video",
					autoPlay: true,
					muted: true,
					loop: true,
					playsInline: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						src: videoSrc,
						type: "video/mp4"
					})
				}, videoSrc), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed-bg__overlay" })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoupleSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "verse-countdown",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerseSection, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownSection, {})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChaptersSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StillSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("audio", {
				ref: audioRef,
				loop: true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
					src: AUDIO_SRC,
					type: "audio/mpeg"
				})
			}),
			isComplete && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				className: "music-fab",
				onClick: toggleMusic,
				"aria-label": isPlaying ? "Pause music" : "Play music",
				children: isPlaying ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 5L6 9H2v6h4l5 4V5z" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
					width: "20",
					height: "20",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M11 5L6 9H2v6h4l5 4V5z" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "23",
							y1: "9",
							x2: "17",
							y2: "15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
							x1: "17",
							y1: "9",
							x2: "23",
							y2: "15"
						})
					]
				})
			})
		]
	})] });
}
//#endregion
export { InvitationPage as component };
