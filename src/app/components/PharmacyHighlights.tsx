import { Shield, Clock, Heart, Award } from 'lucide-react';

export function PharmacyHighlights() {
  const highlights = [
    {
      icon: Shield,
      title: 'Equipa Farmacêutica Certificada',
      description: 'Os nossos farmacêuticos certificados prestam cuidados especializados e orientação para todas as suas necessidades de saúde.',
      color: 'emerald',
    },
    {
      icon: Clock,
      title: 'Atendimento Rápido',
      description: 'Aviamento de receitas rápido e serviço eficiente para que possa seguir o seu caminho mais rapidamente.',
      color: 'teal',
    },
    {
      icon: Heart,
      title: 'Cuidado Personalizado',
      description: 'Dedicamos tempo para compreender as suas necessidades e fornecer soluções de saúde personalizadas.',
      color: 'emerald',
    },
    {
      icon: Award,
      title: 'Qualidade Garantida',
      description: 'Apenas medicamentos genuínos de fontes confiáveis com rigorosos padrões de qualidade.',
      color: 'teal',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Porque escolher a Farmácia Ascensão Nunes
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Confiança e cuidado profissional no coração de tudo o que fazemos
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <div 
                key={index}
                className="group p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-gray-50 to-emerald-50/30 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
              >
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {highlight.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}