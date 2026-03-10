import { useEffect, useState } from 'react';

const photos = [
  '/foto1.jpeg',
  '/foto2.jpeg',
  '/foto3.jpeg',
  '/foto4.jpeg',
  '/foto5.jpeg',
  '/foto6.jpeg',
  '/foto7.jpeg',
];

export function InstitutionalSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % photos.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="sobre" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 space-y-12 sm:space-y-16 lg:space-y-20">
        {/* Sobre nós Section */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">
          {/* Carousel - Appears first on mobile */}
          <div className="relative order-1 lg:order-1">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl sm:rounded-[2rem] transform -rotate-3 opacity-20"></div>
            <div className="relative rounded-2xl sm:rounded-[2rem] shadow-2xl w-full h-80 sm:h-96 lg:h-[620px] overflow-hidden">
              {photos.map((src, i) => (
                <img
                  key={src}
                  src={src}
                  alt={`Farmácia Ascensão Nunes ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
                  style={{ opacity: i === current ? 1 : 0 }}
                />
              ))}
              {/* Dots */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {photos.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`w-2 h-2 rounded-full transition-all ${i === current ? 'bg-white scale-125' : 'bg-white/50'}`}
                    aria-label={`Foto ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Text Content - Appears second on mobile */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-medium">
              A Nossa História
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Sobre nós
            </h2>
            
            <div className="p-4 sm:p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl border-l-4 border-emerald-600">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                A Farmácia Ascensão Nunes é um pilar de confiança na comunidade de Agualva-Cacém há mais de duas décadas.
              </p>
            </div>
            
            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Fundada em 2003, a nossa farmácia tem vindo a servir a comunidade de Agualva-Cacém com dedicação, profissionalismo e um compromisso constante com a saúde e o bem-estar dos nossos utentes.
              </p>
              
              <p>
                Localizada na Rua Anta de Agualva nº 12A, em Agualva-Cacém, somos um espaço de confiança onde cada pessoa é atendida com proximidade, atenção e aconselhamento personalizado.
              </p>

              <p>
                Estamos sempre disponíveis para o ajudar, oferecendo aconselhamento seguro, atendimento próximo e soluções pensadas para o seu bem‑estar.
              </p>

              <p>
                A nossa equipa é composta por Farmacêuticos e Técnicos de Farmácia qualificados, preparados para prestar um serviço de excelência, garantindo rigor, segurança e acompanhamento adequado em todas as áreas da saúde.
              </p>

              <p>
                Trabalhamos com dedicação, responsabilidade e atenção, garantindo que encontra na farmácia um espaço de confiança, apoio e acompanhamento em cada etapa da sua saúde.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-1.5 sm:gap-4 pt-4 sm:pt-6">
              <div className="text-center p-2.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-md">
                <div className="text-xl sm:text-3xl font-bold text-emerald-600 mb-0.5 sm:mb-1">23+</div>
                <div className="text-xs sm:text-sm text-gray-600">Anos de Serviço</div>
              </div>
              <div className="text-center p-2.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-md">
                <div className="text-xl sm:text-3xl font-bold text-emerald-600 mb-0.5 sm:mb-1">750+</div>
                <div className="text-xs sm:text-sm text-gray-600">Clientes Ativos</div>
              </div>
              <div className="text-center p-2.5 sm:p-4 bg-white rounded-xl sm:rounded-2xl shadow-md">
                <div className="text-xl sm:text-3xl font-bold text-emerald-600 mb-0.5 sm:mb-1">10</div>
                <div className="text-xs sm:text-sm text-gray-600">Profissionais</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
