import { __toESM } from "../_runtime.mjs";
import { supabase } from "./supabase-BCsmZRy6.mjs";
import { require_jsx_runtime, require_react } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/invitation-DCNO155i.js
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
var HERO_VIDEO_ID = "9aAwjS6v1g0";
var CLOSING_IMAGE = "https://lh3.googleusercontent.com/aida-public/AB6AXuBXRuz6yWqxEVERi1H78b2FY-OEpb6cFr_-biZ0oCmlgFHDFTrEesoMPvBio2DOMFDVGAlylSltAFRtm4_aSLYdEOwtf9WHx2iqOtsXr0IXOyYp3OvCnO5jonTdIKveKsdtd0nenyLWN_MMDjzmwvWHaNaT0R6e2iM569T1XofHLVfhVMJcw97canTkmgOneGrqrBR5hYNnKvVt36AZhds8JLMjmGrHn98RO46_-IQ4UIwE0IQgpfNfnw";
var COUPLE_MEMBERS = [{
	name: "Anastasia Imelda\nMei Liana Tobing",
	firstName: "Chaca",
	role: "HER",
	parentsLabel: "Putri dari",
	parents: "Bapak Tobing & Ibu Tobing",
	handle: "@CHACA",
	offset: false,
	photos: [
		"https://lh3.googleusercontent.com/aida-public/AB6AXuD0Xla4MK2WS2ybGpv6tMfkvsOkR-_3mT-fiqhGCGEtJo3sFicGQnKDcyOsNa7HMICs7F3Up1sUq86vVLVQ__oy0CSt9zNNaujZZqQw4gXkewHNa7MnS0hqbjVZO83nLL1VTC90GTj6Q2fsj_VAeT2FAJB39MD_W0IrfDf2Isfqk6Xfh9UZdWlqCzw9fRyhm56MZj0TROr2dz9vIvwJ1ARBlBwnl0tEvQmr_ZmnVTgkkwDL2XYq9vMBZw",
		"https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80",
		"https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80"
	],
	alt: "Portrait editorial Chaca dengan gaun sutra putih di latar ivory yang hangat"
}, {
	name: "Fedrik Andrean\nLehilaka",
	firstName: "Fedrik",
	role: "HIM",
	parentsLabel: "Putra dari",
	parents: "Bapak Lehilaka & Ibu Lehilaka",
	handle: "@FEDRIK",
	offset: true,
	photos: [
		"https://lh3.googleusercontent.com/aida-public/AB6AXuCzxMC8XF7v5WPGMu74s6Xb-bmrFMaCsAF4PMpDlYb4oVUB4bmZt3HlXx6PUY94MPJ3IJH4XzooN3Cg2Z95yx_BUqrS0AV5gDJWsM9Yn5f-APoUiEvYrSdAJo4RxmPjTAOmiU6Auf6xaHiv3yXY-jWx-YM4jZ7Tx5AOJwVVTOss7hXAUXUQ__lq9VP07sSTBnlnQpjKz65Mj9QhQQG0nk0ZKrJTIVuEH9FywBA-XgxMjZhax-0AIXra6g",
		"https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
		"https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80"
	],
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
		photo: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80",
		alt: "Pasangan berjalan di pantai saat sunset"
	},
	{
		tile: "b",
		photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80",
		alt: "Momen sakral pernikahan di gereja"
	},
	{
		tile: "c",
		photo: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80",
		alt: "Potret romantis pasangan dengan bunga"
	},
	{
		tile: "d",
		photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80",
		alt: "Tangan bertautan dengan cincin"
	},
	{
		tile: "e",
		photo: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80",
		alt: "Pasangan tertawa bersama di taman"
	},
	{
		tile: "f",
		photo: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80",
		alt: "Momen intim pasangan di kafe"
	},
	{
		tile: "g",
		photo: "https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80",
		alt: "Pasangan berjalan di jalanan kota"
	},
	{
		tile: "h",
		photo: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&q=80",
		alt: "Potret close-up pasangan tersenyum"
	},
	{
		tile: "i",
		photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
		alt: "Pasangan duduk berdua di bangku"
	},
	{
		tile: "j",
		photo: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&q=80",
		alt: "Pasangan di atas rooftop saat malam"
	},
	{
		tile: "k",
		photo: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80",
		alt: "Momen bahagia pasangan dengan bunga"
	},
	{
		tile: "l",
		photo: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
		alt: "Pasangan berpelukan di area terbuka"
	}
];
var GALLERY_CAROUSEL = [
	{
		photo: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
		alt: "Pasangan berjalan di pantai saat sunset"
	},
	{
		photo: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80",
		alt: "Momen sakral pernikahan di gereja"
	},
	{
		photo: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80",
		alt: "Potret romantis pasangan dengan bunga"
	},
	{
		photo: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80",
		alt: "Tangan bertautan dengan cincin"
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
var CHAPTERS = [
	{
		year: "2019",
		title: "The First Hello",
		image: "https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80",
		alt: "Foto pertemuan pertama pasangan",
		quote: "Where a simple hello became the beginning.",
		description: "Berawal dari sebuah pertemuan sederhana yang mungkin saat itu terasa biasa saja. Tak pernah terpikir bahwa sapaan singkat tersebut akan membawa kami pada sebuah perjalanan indah yang tak terduga."
	},
	{
		year: "2020",
		title: "The Journey",
		image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80",
		alt: "Foto perjalanan cinta pasangan",
		quote: "Through every storm, we found shelter in each other.",
		description: "Tahun yang mengajarkan kami arti kesabaran dan kebersamaan. Di tengah badai kehidupan, kami menemukan tempat pulang satu sama lain. Setiap tantangan justru semakin mempererat ikatan yang terjalin."
	},
	{
		year: "2024",
		title: "The Proposal",
		image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80",
		alt: "Foto momen lamaran pasangan",
		quote: "The moment I knew forever wasn't long enough.",
		description: "Momen di mana waktu seolah berhenti. Dengan hati yang berdebar dan tangan yang gemetar, sebuah pertanyaan sederhana mengubah segalanya. Jawaban \"ya\" itu menjadi awal dari babak baru kehidupan kami."
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
									href: "https://instagram.com",
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
		className: "couple-section js-reveal",
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
		className: "section container js-reveal",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
			large: true,
			children: "The Chapters We Share"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "chapters",
			children: CHAPTERS.map((chapter) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				className: "chapter js-reveal",
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
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "chapter__desc",
							children: chapter.description
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
		className: "section container js-reveal",
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
	const [currentSlide, setCurrentSlide] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % GALLERY_CAROUSEL.length);
		}, 4e3);
		return () => clearInterval(timer);
	}, []);
	const getSlideIndex = (offset) => (currentSlide + offset + GALLERY_CAROUSEL.length) % GALLERY_CAROUSEL.length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "gallery",
		className: "section container js-reveal",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, { children: "Our Moments" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "gallery__carousel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "gallery__carousel-viewport",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery__carousel-side gallery__carousel-side--left",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "gallery__carousel-side-img",
								src: GALLERY_CAROUSEL[getSlideIndex(-1)].photo,
								alt: GALLERY_CAROUSEL[getSlideIndex(-1)].alt,
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery__carousel-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "gallery__carousel-center-img",
								src: GALLERY_CAROUSEL[currentSlide].photo,
								alt: GALLERY_CAROUSEL[currentSlide].alt,
								loading: "lazy"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "gallery__carousel-side gallery__carousel-side--right",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								className: "gallery__carousel-side-img",
								src: GALLERY_CAROUSEL[getSlideIndex(1)].photo,
								alt: GALLERY_CAROUSEL[getSlideIndex(1)].alt,
								loading: "lazy"
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
					}, photo.alt))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "gallery__masonry",
				children: GALLERY.map((item, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: cx("gallery__masonry-item", `gallery__masonry-item--${item.tile}`, "js-reveal"),
					style: { animationDelay: `${index * 60}ms` },
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						className: "gallery__masonry-img",
						src: item.photo,
						alt: item.alt,
						loading: "lazy"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "gallery__shade" })]
				}, item.tile))
			})
		]
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
		className: "section section--tan-strong js-reveal",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "panel",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "panel__column js-reveal",
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
function StillSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "still js-reveal",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "still__media",
				style: { backgroundImage: `url('${CLOSING_IMAGE}')` }
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
		className: "closing js-reveal",
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
function InvitationPage() {
	useRevealOnScroll();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "fixed-bg",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				className: "fixed-bg__video",
				title: "Video latar belakang undangan",
				src: `https://www.youtube.com/embed/${HERO_VIDEO_ID}?autoplay=1&mute=1&controls=0&loop=1&playlist=${HERO_VIDEO_ID}&playsinline=1&rel=0&modestbranding=1`,
				allow: "autoplay; encrypted-media; picture-in-picture",
				allowFullScreen: true
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "fixed-bg__overlay" })]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CoupleSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "verse-countdown js-reveal",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VerseSection, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CountdownSection, {})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChaptersSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(EventsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GallerySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GiftSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StillSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingSection, {})
	] });
}
//#endregion
export { InvitationPage as component };
