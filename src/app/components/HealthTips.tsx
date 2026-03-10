import { Apple, Droplets, Moon, Activity } from 'lucide-react';

export function HealthTips() {
  const tips = [
    {
      icon: Apple,
      title: 'Alimentação Equilibrada',
      tip: 'Inclua frutas e vegetais coloridos em todas as refeições para uma nutrição ideal.',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Droplets,
      title: 'Hidratação',
      tip: 'Beba pelo menos 8 copos de água por dia para manter as funções corporais e energia.',
      color: 'from-cyan-500 to-teal-500',
    },
    {
      icon: Moon,
      title: 'Sono de Qualidade',
      tip: 'Procure dormir 7-9 horas por noite para apoiar a saúde imunitária e clareza mental.',
      color: 'from-teal-500 to-emerald-500',
    },
    {
      icon: Activity,
      title: 'Movimento Regular',
      tip: 'Mantenha-se ativo com pelo menos 30 minutos de exercício moderado na maioria dos dias.',
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Dicas de Saúde
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Hábitos simples para uma vida mais saudável e feliz
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div 
                key={index}
                className="group relative overflow-hidden p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-xl transition-all duration-300 border border-emerald-100"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-br ${tip.color} opacity-10 rounded-full -mr-12 sm:-mr-16 -mt-12 sm:-mt-16 group-hover:scale-150 transition-transform duration-500`}></div>
                
                <div className="relative">
                  <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-gradient-to-br ${tip.color} flex items-center justify-center mb-3 sm:mb-4 shadow-lg`}>
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 sm:mb-3">
                    {tip.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {tip.tip}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}