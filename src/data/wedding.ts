/* Central content for the wedding invitation detail page. */

export interface CoupleMember {
  name: string
  firstName: string
  role: string
  parentsLabel: string
  parents: string
  handle: string
  photos: string[]
  alt: string
  offset?: boolean // stagger position on desktop
}

export interface EventBlock {
  kind: string
  time: string
  day: string
  venue: string
  address: string
}

export interface GalleryItem {
  tile: string
  photo: string
  alt: string
}

export interface GalleryPhoto {
  photo: string
  alt: string
}

export interface BankAccount {
  bank: string
  number: string
  holder: string
}

export interface Chapter {
  year: string
  title: string
  image: string
  alt: string
  quote: string
  description: string
}

export const COUPLE = {
  brideName: 'Chaca',
  groomName: 'Fedrik',
  dateShort: '10 • 10 • 2026',
}

export const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuARKBGV4hbLlJ5fBbkexjJTg19PFhtzPsV0y_HA5PAlV5b6BXo-tyvb3lA-U1vWKtVNb2M3kEAv3-KZ9lDeuQg-hYvbqqt9h-8L1j1XOAwlzT28TWsEtmAYw7dmiPWnFHcmnR5DyCgDsRsc8IZTtaTT0prvdiym-2RBLjcnT89jnVD1-sp6Q99Qfzbn_GvR68tcm_h4aDRE44r8o6TB7-yR6oskmLmV9gNXbyDY1_GemlxernJs7B5LQw'

/**
 * YouTube video used as the autoplay hero background (replaces HERO_IMAGE).
 * Change HERO_VIDEO_ID to your wedding video id (the part after ?v= in the URL).
 */
export const HERO_VIDEO_ID = 'aqz-KE-bpKQ'

export const CLOSING_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBXRuz6yWqxEVERi1H78b2FY-OEpb6cFr_-biZ0oCmlgFHDFTrEesoMPvBio2DOMFDVGAlylSltAFRtm4_aSLYdEOwtf9WHx2iqOtsXr0IXOyYp3OvCnO5jonTdIKveKsdtd0nenyLWN_MMDjzmwvWHaNaT0R6e2iM569T1XofHLVfhVMJcw97canTkmgOneGrqrBR5hYNnKvVt36AZhds8JLMjmGrHn98RO46_-IQ4UIwE0IQgpfNfnw'

export const COUPLE_MEMBERS: CoupleMember[] = [
  {
    name: 'Anastasia Imelda\nMei Liana Tobing',
    firstName: 'Chaca',
    role: 'HER',
    parentsLabel: 'Putri dari',
    parents: 'Bapak Tobing & Ibu Tobing',
    handle: '@CHACA',
    offset: false,
    photos: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0Xla4MK2WS2ybGpv6tMfkvsOkR-_3mT-fiqhGCGEtJo3sFicGQnKDcyOsNa7HMICs7F3Up1sUq86vVLVQ__oy0CSt9zNNaujZZqQw4gXkewHNa7MnS0hqbjVZO83nLL1VTC90GTj6Q2fsj_VAeT2FAJB39MD_W0IrfDf2Isfqk6Xfh9UZdWlqCzw9fRyhm56MZj0TROr2dz9vIvwJ1ARBlBwnl0tEvQmr_ZmnVTgkkwDL2XYq9vMBZw',
      'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80',
      'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80',
    ],
    alt: 'Portrait editorial Chaca dengan gaun sutra putih di latar ivory yang hangat',
  },
  {
    name: 'Fedrik Andrean\nLehilaka',
    firstName: 'Fedrik',
    role: 'HIM',
    parentsLabel: 'Putra dari',
    parents: 'Bapak Lehilaka & Ibu Lehilaka',
    handle: '@FEDRIK',
    offset: true,
    photos: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzxMC8XF7v5WPGMu74s6Xb-bmrFMaCsAF4PMpDlYb4oVUB4bmZt3HlXx6PUY94MPJ3IJH4XzooN3Cg2Z95yx_BUqrS0AV5gDJWsM9Yn5f-APoUiEvYrSdAJo4RxmPjTAOmiU6Auf6xaHiv3yXY-jWx-YM4jZ7Tx5AOJwVVTOss7hXAUXUQ__lq9VP07sSTBnlnQpjKz65Mj9QhQQG0nk0ZKrJTIVuEH9FywBA-XgxMjZhax-0AIXra6g',
      'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&q=80',
    ],
    alt: 'Potret editorial Fedrik dengan setelan hijau tua di latar ivory',
  },
]

export const EVENTS: EventBlock[] = [
  {
    kind: 'Pemberkatan',
    time: '09:00 WIB',
    day: 'Sabtu, 10 Oktober 2026',
    venue: 'Gereja GPIB Pengharapan',
    address: 'Jl. Nama Jalan No. 123, Kota, Provinsi',
  },
  {
    kind: 'Resepsi',
    time: '11:00 WIB',
    day: 'Sabtu, 10 Oktober 2026',
    venue: 'Gedung Welasih',
    address: 'Jl. Nama Jalan No. 456, Kota, Provinsi',
  },
]

export const GALLERY: GalleryItem[] = [
  {
    tile: 'a',
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80',
    alt: 'Pasangan berjalan di pantai saat sunset',
  },
  {
    tile: 'b',
    photo: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=600&q=80',
    alt: 'Momen sakral pernikahan di gereja',
  },
  {
    tile: 'c',
    photo: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=600&q=80',
    alt: 'Potret romantis pasangan dengan bunga',
  },
  {
    tile: 'd',
    photo: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=600&q=80',
    alt: 'Tangan bertautan dengan cincin',
  },
  {
    tile: 'e',
    photo: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80',
    alt: 'Pasangan tertawa bersama di taman',
  },
  {
    tile: 'f',
    photo: 'https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=600&q=80',
    alt: 'Momen intim pasangan di kafe',
  },
  {
    tile: 'g',
    photo: 'https://images.unsplash.com/photo-1529636798458-92182e662485?w=600&q=80',
    alt: 'Pasangan berjalan di jalanan kota',
  },
  {
    tile: 'h',
    photo: 'https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=600&q=80',
    alt: 'Potret close-up pasangan tersenyum',
  },
  {
    tile: 'i',
    photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
    alt: 'Pasangan duduk berdua di bangku',
  },
  {
    tile: 'j',
    photo: 'https://images.unsplash.com/photo-1494774157365-9e04c6720e47?w=600&q=80',
    alt: 'Pasangan di atas rooftop saat malam',
  },
  {
    tile: 'k',
    photo: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&q=80',
    alt: 'Momen bahagia pasangan dengan bunga',
  },
  {
    tile: 'l',
    photo: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80',
    alt: 'Pasangan berpelukan di area terbuka',
  },
]

export const GALLERY_CAROUSEL: GalleryPhoto[] = [
  {
    photo: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80',
    alt: 'Pasangan berjalan di pantai saat sunset',
  },
  {
    photo: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=1200&q=80',
    alt: 'Momen sakral pernikahan di gereja',
  },
  {
    photo: 'https://images.unsplash.com/photo-1606216794074-735e91aa2c92?w=1200&q=80',
    alt: 'Potret romantis pasangan dengan bunga',
  },
  {
    photo: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=1200&q=80',
    alt: 'Tangan bertautan dengan cincin',
  },
]

export const BANK_ACCOUNTS: BankAccount[] = [
  { bank: 'BCA', number: '1234 5678 90', holder: 'a.n Fedrik Andrean Lehilaka' },
  { bank: 'BRI', number: '0987 6543 21', holder: 'a.n Anastasia Imelda Mei Liana Tobing' },
]

export const CHAPTERS: Chapter[] = [
  {
    year: '2019',
    title: 'The First Hello',
    image: 'https://images.unsplash.com/photo-1529634806980-85c3dd6d34ac?w=800&q=80',
    alt: 'Foto pertemuan pertama pasangan',
    quote: 'Where a simple hello became the beginning.',
    description:
      'Berawal dari sebuah pertemuan sederhana yang mungkin saat itu terasa biasa saja. Tak pernah terpikir bahwa sapaan singkat tersebut akan membawa kami pada sebuah perjalanan indah yang tak terduga.',
  },
  {
    year: '2020',
    title: 'The Journey',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80',
    alt: 'Foto perjalanan cinta pasangan',
    quote: 'Through every storm, we found shelter in each other.',
    description:
      'Tahun yang mengajarkan kami arti kesabaran dan kebersamaan. Di tengah badai kehidupan, kami menemukan tempat pulang satu sama lain. Setiap tantangan justru semakin mempererat ikatan yang terjalin.',
  },
  {
    year: '2024',
    title: 'The Proposal',
    image: 'https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?w=800&q=80',
    alt: 'Foto momen lamaran pasangan',
    quote: 'The moment I knew forever wasn\'t long enough.',
    description:
      'Momen di mana waktu seolah berhenti. Dengan hati yang berdebar dan tangan yang gemetar, sebuah pertanyaan sederhana mengubah segalanya. Jawaban "ya" itu menjadi awal dari babak baru kehidupan kami.',
  },
]
