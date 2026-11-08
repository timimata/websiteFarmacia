export interface ActivePromotion {
  productId: string
  discountLabel: string
  note?: string
  validUntil: string
}

export const activePromotions: ActivePromotion[] = [
  { productId: 'fortimel',            discountLabel: '-6€',     note: 'Em duas embalagens', validUntil: '30 de novembro de 2026' },
  { productId: 'nan-optipro',         discountLabel: '-4€',     validUntil: '30 de novembro de 2026' },
  { productId: 'nan-care',            discountLabel: '-2€',     validUntil: '30 de novembro de 2026' },
  { productId: 'kukident',            discountLabel: '-2€',     validUntil: '30 de novembro de 2026' },
  { productId: 'sterimar',            discountLabel: '-2€',     validUntil: '30 de novembro de 2026' },
  { productId: 'artelac',             discountLabel: '-2€',     validUntil: '30 de novembro de 2026' },
  { productId: 'bepanthen-baby',      discountLabel: '-1,5€',   validUntil: '30 de novembro de 2026' },
  { productId: 'letibalm',            discountLabel: '-1,5€',   validUntil: '30 de novembro de 2026' },
]
