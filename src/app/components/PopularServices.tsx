import { Salad, Footprints, Syringe, Droplets, Activity, PillBottle, TestTubeDiagonal, Ear } from 'lucide-react';
import { popularServices } from '@/data/services';

export function PopularServices() {
  const iconMap = {
    salad: Salad,
    footprints: Footprints,
    syringe: Syringe,
    droplets: Droplets,
    activity: Activity,
    pillBottle: PillBottle,
    testTube: TestTubeDiagonal,
    ear: Ear,
  };

  return (
    <section id="servicos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Os nossos serviços
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Serviços farmacêuticos abrangentes adaptados às suas necessidades
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          {popularServices.map((service, index) => {
            const Icon = iconMap[service.icon];
            return (
              <div
                key={index}
                className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] group bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-emerald-200 cursor-pointer"
              >
                <div className={`w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3">
                  {service.title}
                </h3>
                {service.description && (
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}