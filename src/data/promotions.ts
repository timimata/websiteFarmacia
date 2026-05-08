import { productCatalog } from './productCatalog'
import { activePromotions } from './activePromotions'

export interface Promotion {
  id: number
  title: string
  tagline: string
  category: string
  description: string
  discountLabel: string
  note?: string
  validUntil: string
  image: string
  badge: string
}

export const promotions: Promotion[] = activePromotions.flatMap((active, index) => {
  const product = productCatalog.find((p) => p.id === active.productId)
  if (!product) return []
  const { id: _productId, ...productData } = product
  return [{
    id: index + 1,
    ...productData,
    discountLabel: active.discountLabel,
    note: active.note,
    validUntil: active.validUntil,
    badge: 'Promoção ativa',
  }]
})
