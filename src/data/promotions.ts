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

export const promotions: Promotion[] = [
  {
    id: 1,
    title: 'Aptamil',
    tagline: 'Leites de transição e bebidas lacteas infantis.',
    category: 'Bebé e Mamã',
    description:
      'Leite infantil de qualidade premium com nutrientes essenciais para o desenvolvimento saudável do seu bebé. Fórmula avançada e cientificamente comprovada.',
    discountLabel: '-3€',
    validUntil: '31 de março de 2026',
    image: '/produtos/aptamil.png',
    badge: 'Promoção ativa',
  },
  {
    id: 2,
    title: 'Bepanthen Baby',
    tagline: 'Protege e regenera a pele do rabinho do bebé.',
    category: 'Bebé e Mamã',
    description:
      'Pomada protetora para a zona da fralda. Protege contra irritações e ajuda a regenerar a pele delicada do bebé. Sem conservantes nem fragrâncias.',
    discountLabel: '-1,50€',
    validUntil: '31 de março de 2026',
    image: '/produtos/bepanthenBaby.png',
    badge: 'Promoção ativa',
  },
  {
    id: 3,
    title: 'Cebion',
    tagline: 'Vitamina C, imunidade, sabor a laranja.',
    category: 'Suplementos',
    description:
      'Vitamina C efervescente para reforçar o sistema imunitário. Sabor agradável e absorção rápida. Ideal para toda a família durante todo o ano.',
    discountLabel: '-2€',
    validUntil: '31 de março de 2026',
    image: '/produtos/cebion.png',
    badge: 'Promoção ativa',
  },
  {
    id: 4,
    title: 'Centrum',
    tagline: 'Multivitamínico para toda a família.',
    category: 'Suplementos',
    description:
      'Multivitamínico completo com vitaminas e minerais essenciais. Fórmula equilibrada para apoiar a energia, imunidade e bem-estar geral.',
    discountLabel: 'até -5€',
    validUntil: '31 de março de 2026',
    image: '/produtos/Centrum.png',
    badge: 'Promoção ativa',
  },
  {
    id: 5,
    title: 'Corega',
    tagline: 'Fixação e limpeza para próteses dentárias.',
    category: 'Saúde Oral',
    description:
      'Creme fixador para próteses dentárias. Fixação forte e duradoura durante todo o dia. Ajuda a prevenir a entrada de partículas de alimentos.',
    discountLabel: '-2€',
    validUntil: '31 de março de 2026',
    image: '/produtos/corega.png',
    badge: 'Promoção ativa',
  },
  {
    id: 6,
    title: 'Fortimel',
    tagline: 'Alimentos para fins medicais específicos.',
    category: 'Nutrição Clínica',
    description:
      'Suplemento nutricional oral hiperproteico e hipercalórico. Ideal para complementar a alimentação em situações de necessidades nutricionais aumentadas.',
    discountLabel: '-6€',
    note: 'Na compra de 2 embalagens',
    validUntil: '31 de março de 2026',
    image: '/produtos/fortimel.png',
    badge: 'Promoção ativa',
  },
  {
    id: 7,
    title: 'NAN Optipro',
    tagline: 'Fórmulas infantis e leites de crescimento.',
    category: 'Bebé e Mamã',
    description:
      'Leite infantil com fórmula avançada para o desenvolvimento saudável. Enriquecido com nutrientes essenciais para as necessidades do bebé.',
    discountLabel: '-4€',
    validUntil: '31 de março de 2026',
    image: '/produtos/nan.png',
    badge: 'Promoção ativa',
  },
  {
    id: 8,
    title: 'Parodontax',
    tagline: 'Cuidado das gengivas.',
    category: 'Saúde Oral',
    description:
      'Pasta dentífrica especializada para gengivas. Ajuda a parar e prevenir o sangramento das gengivas. Uso diário para uma saúde oral completa.',
    discountLabel: '-2€',
    validUntil: '31 de março de 2026',
    image: '/produtos/parondontax.png',
    badge: 'Promoção ativa',
  },
  {
    id: 9,
    title: 'PiC',
    tagline: 'Monitorização da tensão arterial.',
    category: 'Essenciais de Farmácia',
    description:
      'Dispositivos médicos de qualidade para monitorização e cuidados de saúde em casa. Fiabilidade e precisão para o dia a dia.',
    discountLabel: '-10€',
    validUntil: '31 de março de 2026',
    image: '/produtos/pic.png',
    badge: 'Promoção ativa',
  },
  {
    id: 10,
    title: 'Supradyn',
    tagline: 'Multivitamínico bem estar geral.',
    category: 'Suplementos',
    description:
      'Multivitamínico com coenzima Q10 para energia e vitalidade. Combinação de vitaminas e minerais para combater o cansaço e a fadiga.',
    discountLabel: 'até -7€',
    validUntil: '31 de março de 2026',
    image: '/produtos/supradyn.png',
    badge: 'Promoção ativa',
  },
  {
    id: 11,
    title: 'Symbiosys',
    tagline: 'Probioticos intestinais.',
    category: 'Suplementos',
    description:
      'Probiótico para o equilíbrio da flora intestinal. Estirpes selecionadas para apoiar a saúde digestiva e o sistema imunitário.',
    discountLabel: '-2€',
    validUntil: '31 de março de 2026',
    image: '/produtos/symbiosys.png',
    badge: 'Promoção ativa',
  },
  {
    id: 12,
    title: 'ZzzQuil',
    tagline: 'Dormir toda a noite.',
    category: 'Suplementos',
    description:
      'Suplemento alimentar para ajudar a adormecer mais rapidamente. Com melatonina e extratos naturais. Sem criar habituação.',
    discountLabel: 'até -3€',
    validUntil: '31 de março de 2026',
    image: '/produtos/zzzquil.png',
    badge: 'Promoção ativa',
  },
]
