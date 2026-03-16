export type ServiceIcon =
  | 'salad'
  | 'footprints'
  | 'syringe'
  | 'droplets'
  | 'activity'
  | 'pillBottle'
  | 'testTube'
  | 'ear'

export interface ServiceItem {
  icon: ServiceIcon
  title: string
  description?: string
  gradient: string
}

export const popularServices: ServiceItem[] = [
  {
    icon: 'salad',
    title: 'Nutrição',
    description:
      'Acompanhamento nutricional personalizado para uma vida mais saudável e equilibrada.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: 'footprints',
    title: 'Podologia',
    description:
      'Cuidados especializados aos pés, prevenção e tratamento de patologias podológicas.',
    gradient: 'from-teal-500 to-cyan-500',
  },
  {
    icon: 'syringe',
    title: 'Administração de Vacinas e Injetáveis',
    description:
      'Administração de injetáveis por profissionais certificados em ambiente seguro.',
    gradient: 'from-cyan-500 to-teal-500',
  },
  {
    icon: 'droplets',
    title: 'Medição de Colesterol',
    description:
      'Rastreio rápido dos níveis de colesterol com aconselhamento personalizado.',
    gradient: 'from-teal-500 to-emerald-500',
  },
  {
    icon: 'activity',
    title: 'Medição de Glicémia',
    description:
      'Controlo dos níveis de glicose no sangue com acompanhamento especializado.',
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    icon: 'pillBottle',
    title: 'PIM',
    description:
      'Preparação Individualizada de Medicação para maior segurança e adesão terapêutica.',
    gradient: 'from-emerald-500 to-teal-500',
  },
  {
    icon: 'testTube',
    title: 'Teste Rápido Infeção Aguda da Orofaringe',
    description:
      'Diagnóstico rápido de infrações da orofaringe para adequado aconselhamento farmacêutico.',
    gradient: 'from-cyan-500 to-emerald-500',
  },
  {
    icon: 'ear',
    title: 'Furação de Orelhas',
    description: 'Furação indolor e segura realizada por profissionais certificados.',
    gradient: 'from-teal-500 to-green-500',
  },
]

export const footerServices = [
  'Nutrição',
  'Podologia',
  'Administração de Injetáveis',
  'Medição de Colesterol',
  'Medição de Glicémia',
  'PIM',
  'Teste Rápido Infeção da Orofaringe',
]
