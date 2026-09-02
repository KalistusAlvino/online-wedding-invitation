/* Central content for the wedding invitation detail page. */

export interface CoupleMember {
  name: string
  role: string
  handle: string
  photo: string
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
  tile: 'a' | 'b' | 'c' | 'd'
  photo: string
  alt: string
}

export interface BankAccount {
  bank: string
  number: string
  holder: string
}

export const COUPLE = {
  brideName: 'Chaca',
  groomName: 'Fedrik',
  dateShort: '10 • 10 • 2026',
}

export const HERO_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuARKBGV4hbLlJ5fBbkexjJTg19PFhtzPsV0y_HA5PAlV5b6BXo-tyvb3lA-U1vWKtVNb2M3kEAv3-KZ9lDeuQg-hYvbqqt9h-8L1j1XOAwlzT28TWsEtmAYw7dmiPWnFHcmnR5DyCgDsRsc8IZTtaTT0prvdiym-2RBLjcnT89jnVD1-sp6Q99Qfzbn_GvR68tcm_h4aDRE44r8o6TB7-yR6oskmLmV9gNXbyDY1_GemlxernJs7B5LQw'

export const CLOSING_IMAGE =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBXRuz6yWqxEVERi1H78b2FY-OEpb6cFr_-biZ0oCmlgFHDFTrEesoMPvBio2DOMFDVGAlylSltAFRtm4_aSLYdEOwtf9WHx2iqOtsXr0IXOyYp3OvCnO5jonTdIKveKsdtd0nenyLWN_MMDjzmwvWHaNaT0R6e2iM569T1XofHLVfhVMJcw97canTkmgOneGrqrBR5hYNnKvVt36AZhds8JLMjmGrHn98RO46_-IQ4UIwE0IQgpfNfnw'

export const COUPLE_MEMBERS: CoupleMember[] = [
  {
    name: 'Anastasia Imelda Mei Liana Tobing',
    role: 'Daughter of Mr. & Mrs. Tobing',
    handle: '@CHACA',
    offset: false,
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD0Xla4MK2WS2ybGpv6tMfkvsOkR-_3mT-fiqhGCGEtJo3sFicGQnKDcyOsNa7HMICs7F3Up1sUq86vVLVQ__oy0CSt9zNNaujZZqQw4gXkewHNa7MnS0hqbjVZO83nLL1VTC90GTj6Q2fsj_VAeT2FAJB39MD_W0IrfDf2Isfqk6Xfh9UZdWlqCzw9fRyhm56MZj0TROr2dz9vIvwJ1ARBlBwnl0tEvQmr_ZmnVTgkkwDL2XYq9vMBZw',
    alt: 'Portrait editorial Chaca dengan gaun sutra putih di latar ivory yang hangat',
  },
  {
    name: 'Fedrik Andrean Lehilaka',
    role: 'Son of Mr. & Mrs. Lehilaka',
    handle: '@FEDRIK',
    offset: true,
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCzxMC8XF7v5WPGMu74s6Xb-bmrFMaCsAF4PMpDlYb4oVUB4bmZt3HlXx6PUY94MPJ3IJH4XzooN3Cg2Z95yx_BUqrS0AV5gDJWsM9Yn5f-APoUiEvYrSdAJo4RxmPjTAOmiU6Auf6xaHiv3yXY-jWx-YM4jZ7Tx5AOJwVVTOss7hXAUXUQ__lq9VP07sSTBnlnQpjKz65Mj9QhQQG0nk0ZKrJTIVuEH9FywBA-XgxMjZhax-0AIXra6g',
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
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDjGJHl5U4UBAMH3XDUlo1loZngwSzmNmTCjeEzVRU5TLTF6Y1sePBLtG3_-ddVIumSvVQtMGLLzis2QmLFuumfafLEyoDnpBLBwL4t4pFMpjGLRmFgMLHfHaJ2L5108Vdaidi6hDr2UNY68lL5mi5mUwzETKTpiNPK5SFZ45vHKwGGDYoZsfBIE2oT-s8e3T7Y3vvYnaXOkM-dT9kv10nmOFO9Znt6VaWYVO7D3TNRGhDC0Yqh7FiLDQ',
    alt: 'Foto cinematic pasangan di tebing menghadap lautan saat golden hour',
  },
  {
    tile: 'b',
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5MpvOX-d75hCialOt65VWP1aLuFzPqmS1m2dYtpdS9ToM_4fH11rwXo7IAuakYN9RIp7AjfuC4_bSIqJLT_9Vr2u2mrMESoZWHRL4zvFueS2bFh_GjCiYD6tnjqVCYvRtOyagcd-WFwWlJ_21ZXVgjZ6WmgjcAmlS6bqnYzHSjp1LTx_HLjSRmihnkbsNKlfK_BXfg3Eu9ZPFtJVsOVxV_JoFgwd1YhpXsjOtQrQZcAb1jVZsIlQNWQ',
    alt: 'Makro intim tangan pasangan dengan cincin pertunangan',
  },
  {
    tile: 'c',
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB5QlF2GdFZ2xtizRTIl1Soj1CJxIRWqsmfmivarf0ZviCGT4f7Ic2FcbZFOHXGl54HT_QhBugdebY0DqH3q_pJxgxXWoCaUA1Ye5cdVsfZoiEZxWDFnLVYd_tyss0KsiE1x5u9dGJ1kzvGtfIWcOPJCqDqmXwWmV_arJqxv6RBXKMyS5FnyAxdmrgUtb68O5kaQWTazyvYdIQfAYs-S_aesLsXmXfFYWKQi_Zr8uFJkxusGYHoEAVI7g',
    alt: 'Potret hitam-putih pasangan yang tertawa bersama',
  },
  {
    tile: 'd',
    photo:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAt5lRv_7Vrk-c_RhSU-M_pTaLE1LoWPCX8xDFqPZ0JvB9b1PkUSZQOkXfqBJjTNe0yKaiX0_2VPGMhItfCqT9BLdV0ad_RjOZwEqBipx17VVLvfTnFCOSndrMwyl82Euz8_QznY06fOK9o43BgXv4tt9q505JZzxpr4JvfDsSV48Vylq3IxjzubsSnuJKX6CgRzXEyBS7egM724tkCsznjsqPB6EDgzcAW6LvENgn-yeGOOt-dGi1yEA',
    alt: 'Shot artistik pasangan menari di aula dengan jendela lengkung yang megah',
  },
]

export const BANK_ACCOUNTS: BankAccount[] = [
  { bank: 'BCA', number: '1234 5678 90', holder: 'a.n Fedrik Andrean Lehilaka' },
  { bank: 'BRI', number: '0987 6543 21', holder: 'a.n Anastasia Imelda Mei Liana Tobing' },
]
