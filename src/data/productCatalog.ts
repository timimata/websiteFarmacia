export interface Product {
  id: string
  title: string
  tagline: string
  category: string
  description: string
  image: string
}

export const productCatalog: Product[] = [
  {
    id: 'aptamil',
    title: 'Aptamil',
    tagline: 'Leites de transição e bebidas lacteas infantis.',
    category: 'Bebé e Mamã',
    description:
      'Leite infantil de qualidade premium com nutrientes essenciais para o desenvolvimento saudável do seu bebé. Fórmula avançada e cientificamente comprovada.',
    image: '/produtos/aptamil.webp',
  },
  {
    id: 'bepanthen-baby',
    title: 'Bepanthen Baby',
    tagline: 'Protege e regenera a pele do rabinho do bebé.',
    category: 'Bebé e Mamã',
    description:
      'Pomada protetora para a zona da fralda. Protege contra irritações e ajuda a regenerar a pele delicada do bebé. Sem conservantes nem fragrâncias.',
    image: '/produtos/bepanthenBaby.webp',
  },
  {
    id: 'cebion',
    title: 'Cebion',
    tagline: 'Vitamina C, imunidade, sabor a laranja.',
    category: 'Suplementos',
    description:
      'Vitamina C efervescente para reforçar o sistema imunitário. Sabor agradável e absorção rápida. Ideal para toda a família durante todo o ano.',
    image: '/produtos/cebion.webp',
  },
  {
    id: 'centrum',
    title: 'Centrum',
    tagline: 'Multivitamínico para toda a família.',
    category: 'Suplementos',
    description:
      'Multivitamínico completo com vitaminas e minerais essenciais. Fórmula equilibrada para apoiar a energia, imunidade e bem-estar geral.',
    image: '/produtos/Centrum.webp',
  },
  {
    id: 'corega',
    title: 'Corega',
    tagline: 'Fixação e limpeza para próteses dentárias.',
    category: 'Saúde Oral',
    description:
      'Creme fixador para próteses dentárias. Fixação forte e duradoura durante todo o dia. Ajuda a prevenir a entrada de partículas de alimentos.',
    image: '/produtos/corega.webp',
  },
  {
    id: 'fortimel',
    title: 'Fortimel',
    tagline: 'Alimentos para fins medicais específicos.',
    category: 'Nutrição Clínica',
    description:
      'Suplemento nutricional oral hiperproteico e hipercalórico. Ideal para complementar a alimentação em situações de necessidades nutricionais aumentadas.',
    image: '/produtos/fortimel.webp',
  },
  {
    id: 'nan-optipro',
    title: 'NAN Optipro',
    tagline: 'Fórmulas infantis e leites de crescimento.',
    category: 'Bebé e Mamã',
    description:
      'Leite infantil com fórmula avançada para o desenvolvimento saudável. Enriquecido com nutrientes essenciais para as necessidades do bebé.',
    image: '/produtos/nan.webp',
  },
  {
    id: 'parodontax',
    title: 'Parodontax',
    tagline: 'Cuidado das gengivas.',
    category: 'Saúde Oral',
    description:
      'Pasta dentífrica especializada para gengivas. Ajuda a parar e prevenir o sangramento das gengivas. Uso diário para uma saúde oral completa.',
    image: '/produtos/parodontax.webp',
  },
  {
    id: 'pic',
    title: 'PiC',
    tagline: 'Monitorização da tensão arterial.',
    category: 'Essenciais de Farmácia',
    description:
      'Dispositivos médicos de qualidade para monitorização e cuidados de saúde em casa. Fiabilidade e precisão para o dia a dia.',
    image: '/produtos/pic.webp',
  },
  {
    id: 'supradyn',
    title: 'Supradyn',
    tagline: 'Multivitamínico bem estar geral.',
    category: 'Suplementos',
    description:
      'Multivitamínico com coenzima Q10 para energia e vitalidade. Combinação de vitaminas e minerais para combater o cansaço e a fadiga.',
    image: '/produtos/supradyn.webp',
  },
  {
    id: 'symbiosys',
    title: 'Symbiosys',
    tagline: 'Probioticos intestinais.',
    category: 'Suplementos',
    description:
      'Probiótico para o equilíbrio da flora intestinal. Estirpes selecionadas para apoiar a saúde digestiva e o sistema imunitário.',
    image: '/produtos/symbiosys.webp',
  },
  {
    id: 'zzzquil',
    title: 'ZzzQuil',
    tagline: 'Dormir toda a noite.',
    category: 'Suplementos',
    description:
      'Suplemento alimentar para ajudar a adormecer mais rapidamente. Com melatonina e extratos naturais. Sem criar habituação.',
    image: '/produtos/zzzquil.webp',
  },
  {
    id: 'oleoban',
    title: 'Oleoban',
    tagline: 'Rotina de banho e hidratação para toda a família.',
    category: 'Beleza',
    description:
      'Linha de cuidado da pele indicada para pele seca e sensível. Gel de banho, creme lavante, duche diário e creme diário com óleos vegetais. Adequada para toda a família, incluindo bebés.',
    image: '/produtos/oleoban.webp',
  },
  {
    id: 'fullmarks',
    title: 'Fullmarks',
    tagline: 'Tratamento contra piolhos e lêndeas.',
    category: 'Cabelos',
    description:
      'Spray e loção anti-piolhos e anti-lêndeas clinicamente comprovados. Elimina piolhos e lêndeas em apenas 5 minutos. Inclui pente de metal. Sem inseticidas. Para adultos e crianças com mais de 2 anos.',
    image: '/produtos/fullmarks.webp',
  },
  {
    id: 'clearblue',
    title: 'Clearblue',
    tagline: 'Teste de gravidez com indicador de semanas.',
    category: 'Planeamento Familiar',
    description:
      'Teste de gravidez digital que indica quantas semanas desde a conceção: 1-2, 2-3 ou 3+. Precisão superior a 99%. A marca mundial nº1 em vendas. Dispositivo médico de diagnóstico in-vitro.',
    image: '/produtos/clearblue.webp',
  },
  {
    id: 'gine-canesbalance',
    title: 'Gine-Canesbalance',
    tagline: 'Tratamento da vaginose bacteriana.',
    category: 'Higiene Íntima',
    description:
      'Gel vaginal com ácido láctico e glicogénio para tratamento dos sintomas da vaginose bacteriana. Restabelece o equilíbrio do pH vaginal. Reduz o odor, limita bactérias nocivas e auxilia a flora vaginal. Dispositivo Médico.',
    image: '/produtos/GineCanesbalance.webp',
  },
  {
    id: 'gine-canesfresh',
    title: 'Gine-Canesfresh',
    tagline: 'Higiene íntima feminina diária.',
    category: 'Higiene Íntima',
    description:
      'Linha de higiene íntima feminina com pH fisiológico vaginal. Fórmula Calm para pele sensível e Daily para higiene diária. Sem colorantes nem sabão. Proteção e frescura ao longo do dia.',
    image: '/produtos/GineCanesfresh.webp',
  },
  {
    id: 'kukident',
    title: 'Kukident',
    tagline: 'Creme adesivo para próteses dentárias.',
    category: 'Saúde Oral',
    description:
      'Creme adesivo para próteses dentárias completas e parciais. Pro Plus com firmeza ao mastigar e fixação todo o dia. Pro Ultimate com conforto e barreira anti-comida. Sem sabor.',
    image: '/produtos/kukident.webp',
  },
]
