export interface ActivePromotion {
  productId: string
  discountLabel: string
  note?: string
  validUntil: string
}

export const activePromotions: ActivePromotion[] = [
  { productId: 'fortimel',            discountLabel: '-6€ em duas embalagens',validUntil: '30 de novembro de 2026' },
  { productId: 'nan-optipro',         discountLabel: '-4€',     validUntil: '30 de novembro de 2026' },
  { productId: 'nan-care',            discountLabel: '-2€',     validUntil: '30 de novembro de 2026' },
  { productId: 'kukident',            discountLabel: '-2€',     validUntil: '30 de novembro de 2026' },
  { productId: 'sterimar',            discountLabel: '-2€',     validUntil: '30 de novembro de 2026' },
  { productId: 'artelac',             discountLabel: '-2€',     validUntil: '30 de novembro de 2026' },
  { productId: 'bepanthen-baby',      discountLabel: '-1,5€',   validUntil: '30 de novembro de 2026' },
  { productId: 'letibalm',            discountLabel: '-1,5€',   validUntil: '30 de novembro de 2026' },
  { productId: 'aptamil',              discountLabel: '-3€',     validUntil: '30 de novembro de 2026' },
  { productId: 'centrum',              discountLabel: 'até -5€',     validUntil: '30 de novembro de 2026' },
  { productId: 'corega',               discountLabel: 'até -2€',     validUntil: '30 de novembro de 2026' },
  { productId: 'redoxon',              discountLabel: '-3€',     validUntil: '30 de novembro de 2026' },
  { productId: 'supradyn',              discountLabel: 'até -7€',     validUntil: '30 de novembro de 2026' },
  { productId: 'zarbees',             discountLabel: 'até -3€', validUntil: '30 de novembro de 2026' },
  { productId: 'bisolnatural',        discountLabel: '-3€',     validUntil: '30 de novembro de 2026' },
  { productId: 'artrozen',            discountLabel: '-3€',     validUntil: '30 de novembro de 2026' },
  { productId: 'rhinomer-plus',       discountLabel: '-2€',     validUntil: '30 de novembro de 2026' },
]
