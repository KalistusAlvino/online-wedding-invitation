/* Central content for the wedding invitation detail page. */

export interface CoupleMember {
  name: string
  firstName: string
  role: string
  parentsLabel: string
  parents: string
  handle: string
  instagramUrl?: string
  photos: string[]
  alt: string
  offset?: boolean // stagger position on desktop
}

export interface EventBlock {
  kind: string
  kindSub?: string
  time: string
  day: string
  venue: string
  address: string
  mapUrl?: string
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

export interface GiftAddress {
  title: string
  subtitle: string
  recipient: string
  address: string
  phone: string
}

export interface Chapter {
  year: string
  title: string
  image: string
  alt: string
  quote: string
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
export const HERO_VIDEO_ID = 'W6zu7qhXkAA'

export const CLOSING_IMAGE =
  'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/9.webp'

export const COUPLE_MEMBERS: CoupleMember[] = [
  {
    name: 'Anastasia Imelda\nMei Liana Tobing',
    firstName: 'Chaca',
    role: 'HER',
    parentsLabel: 'Putri pertama dari',
    parents: 'Bapak Maruhum Pandapotan Tobing & Ibu Rosdiana Jeminar Butarbutar',
    handle: '@ch4ca__',
    instagramUrl: 'https://www.instagram.com/ch4ca__/?hl=id',
    offset: false,
    photos: [
      'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-bridge/The%20Bride%201.webp',
      'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-bridge/The%20Bride%202.webp',
    ],
    alt: 'Portrait editorial Chaca dengan gaun sutra putih di latar ivory yang hangat',
  },
  {
    name: 'Fedrik Andrean\nLehilaka',
    firstName: 'Fedrik',
    role: 'HIM',
    parentsLabel: 'Putra ketiga dari',
    parents: 'Bapak Jon Robinson Lehilaka (✝︎) & Ibu Soeharni',
    handle: '@fedrikstarsss',
    instagramUrl: 'https://www.instagram.com/fedrikstarsss/?hl=id',
    offset: true,
    photos: [
      'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-groom/The%20Groom%201.webp',
    ],
    alt: 'Potret editorial Fedrik dengan setelan hijau tua di latar ivory',
  },
]

export const EVENTS: EventBlock[] = [
  {
    kind: 'Holy Matrimony',
    kindSub: 'Pemberkatan',
    time: '09.00 - End',
    day: 'Saturday, October 10th, 2026',
    venue: 'Gereja GPIB Pengharapan',
    address: 'Jl. Komp. Bekang, Cibinong, Kec. Cibinong, Kabupaten Bogor, Jawa Barat 16911',
    mapUrl: 'https://share.google/t1AzvSZvf4kIa2G5p',
  },
  {
    kind: 'Wedding Reception',
    kindSub: 'Resepsi',
    time: '11.00 - 15.00 WIB',
    day: 'Saturday, October 10th, 2026',
    venue: 'Gedung Welasih',
    address: 'Jl. Baru Puspa Negara No.01, Puspanegara, Kec. Citeureup, Kabupaten Bogor, Jawa Barat 16810',
    mapUrl: 'https://share.google/x7BK9IyFaO8PmYRs6',
  },
]

export interface GalleryRow {
  items: GalleryItem[]
}

export const GALLERY_ROWS: GalleryRow[] = [
  {
    items: [
      { tile: 'a', photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/1.webp', alt: 'Foto 1' },
      { tile: 'b', photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/2.webp', alt: 'Foto 2' },
      { tile: 'c', photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/3.webp', alt: 'Foto 3' },
      { tile: 'd', photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/4.webp', alt: 'Foto 4' },
    ],
  },
  {
    items: [
      { tile: 'e', photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/5.webp', alt: 'Foto 5' },
      { tile: 'f', photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/6.webp', alt: 'Foto 6' },
      { tile: 'g', photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/7.webp', alt: 'Foto 7' },
    ],
  },
  {
    items: [
      { tile: 'h', photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/8.webp', alt: 'Foto 8' },
      { tile: 'i', photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/9.webp', alt: 'Foto 9' },
      { tile: 'j', photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/gallery/11.webp', alt: 'Foto 10' },
    ],
  },
]

export const GALLERY_CAROUSEL: GalleryPhoto[] = [
  {
    photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-capter/The%20Proposal.webp',
    alt: 'Momen besar bersama',
  },
  {
    photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/our-big-moments/Our%20Moment%20Big%202.webp',
    alt: 'Momen besar bersama',
  },
  {
    photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/our-big-moments/Our%20Moment%20Big%203.webp',
    alt: 'Momen besar bersama',
  },
  {
    photo: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/our-big-moments/Our%20Moment%20Big%204.webp',
    alt: 'Momen besar bersama',
  },
]

export const BANK_ACCOUNTS: BankAccount[] = [
  { bank: 'BCA', number: '1671567973', holder: 'a.n Fedrik Andrean Lehilaka' },
  { bank: 'BRI', number: '0531-01-016293-501', holder: 'a.n Anastasia Imelda Mei Liana Tobing' },
]

export const GIFT_ADDRESS: GiftAddress = {
  title: 'PHYSICAL GIFT',
  subtitle: 'For physical gifts, you may send them to the following address:',
  recipient: 'Chaca & Fedrik',
  address: 'Puri Nirwana 3 Blok DN 14 Jl. Anggur 1, Karadenan - Cibinong, Kab Bogor',
  phone: '+62 896-8821-6860',
}

export const CHAPTERS: Chapter[] = [
  {
    year: '2016',
    title: 'The First Hello',
    image: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-capter/The%20First%20Hello.webp',
    alt: 'Foto pertemuan pertama pasangan',
    quote: 'We met by chance, and the moment I saw her, it was love at first sight.',
  },
  {
    year: '2017',
    title: 'The Journey',
    image: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-capter/The%20Journey.webp',
    alt: 'Foto perjalanan cinta pasangan',
    quote: 'Our romantic journey officially began on October 19, 2017, with Dufan standing as the silent witness to my declaration of love.',
  },
  {
    year: '2024',
    title: 'The Proposal',
    image: 'https://fgtkusducqyaretrhvub.supabase.co/storage/v1/object/public/wedding-photos/the-capter/The%20Proposal.webp',
    alt: 'Foto momen lamaran pasangan',
    quote: 'On October 19, 2024 exactly seven years later I asked her to marry me. As a symbol of my love and commitment, I gave her a ring, with Ancol witnessing the start of our next chapter together.',
  },
]
