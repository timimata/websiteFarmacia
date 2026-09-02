export interface ActivePromotion {
  productId: string
  discountLabel: string
  note?: string
  validUntil: string
}

export const activePromotions: ActivePromotion[] = [
  { productId: 'gine-canesbalance', discountLabel: '-20%',    validUntil: '30 de setembro de 2026' },
  { productId: 'gine-canesfresh',   discountLabel: '-25%',    validUntil: '30 de setembro de 2026' },
  { productId: 'supradyn',    discountLabel: '-15%',    validUntil: '30 de setembro de 2026' },
  { productId: 'bepanthen-baby',    discountLabel: '-1,5€',    validUntil: '30 de setembro de 2026' },
  { productId: 'fortimel',           discountLabel: '-6€ na segunda embalagem',    validUntil: '30 de setembro de 2026' },
  { productId: 'zzzquil',             discountLabel: '-3€',    validUntil: '30 de setembro de 2026' },
  { productId: 'centrum',             discountLabel: '-5€',    validUntil: '30 de setembro de 2026' },
  { productId: 'parodontax',          discountLabel: '-2€',    validUntil: '30 de setembro de 2026' },
  { productId: 'vicks',               discountLabel: '-1€',    validUntil: '30 de setembro de 2026' },
  { productId: 'paranix-express',     discountLabel: '-25%',   validUntil: '30 de setembro de 2026' },
]
