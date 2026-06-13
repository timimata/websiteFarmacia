// ============================================================
//  PROMOÇÕES ATIVAS — edita este ficheiro todo o mês
// ============================================================
//
//  Como usar:
//   • Adicionar produto em promoção  → adiciona uma linha { productId, discountLabel, validUntil }
//   • Remover promoção               → apaga a linha
//   • Alterar desconto               → muda o discountLabel
//   • Nota extra (ex: "na compra de 2") → adiciona note: '...'
//
//  productId deve corresponder ao id em productCatalog.ts
//  Para adicionar um produto NOVO ao catálogo, edita productCatalog.ts primeiro.
// ============================================================

export interface ActivePromotion {
  productId: string
  discountLabel: string
  note?: string
  validUntil: string
}

export const activePromotions: ActivePromotion[] = [
  { productId: 'fullmarks',         discountLabel: '-4€',    validUntil: '31 de maio de 2026' },
  { productId: 'centrum',           discountLabel: 'até -5€',validUntil: '31 de maio de 2026' },
  { productId: 'supradyn',          discountLabel: 'até -7€',validUntil: '31 de maio de 2026' },
  { productId: 'gine-canesbalance', discountLabel: '-3€',    validUntil: '31 de maio de 2026' },
  { productId: 'gine-canesfresh',   discountLabel: '-2€',    validUntil: '31 de maio de 2026' },
  { productId: 'parodontax',        discountLabel: '-2€',    validUntil: '31 de maio de 2026' },
  { productId: 'fortimel',          discountLabel: '-6€',    note: 'Na compra de 2 embalagens', validUntil: '31 de maio de 2026' },
]
