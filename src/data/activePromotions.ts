export interface ActivePromotion {
  productId: string
  discountLabel: string
  note?: string
  validUntil: string
}

export const activePromotions: ActivePromotion[] = [
  { productId: 'supradyn',            discountLabel: 'até -7€', validUntil: '31 de outubro de 2026' },
  { productId: 'zzzquil',             discountLabel: '-3€',     validUntil: '31 de outubro de 2026' },
  { productId: 'parodontax',          discountLabel: '-2€',     validUntil: '31 de outubro de 2026' },
  { productId: 'vicks',               discountLabel: '-1€',     validUntil: '31 de outubro de 2026' },
  { productId: 'redoxon',             discountLabel: '-3€',     validUntil: '31 de outubro de 2026' },
  { productId: 'dorminatur',          discountLabel: '-3€',     validUntil: '31 de outubro de 2026' },
]
