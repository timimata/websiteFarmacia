import { useState, useEffect } from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';
import { scrollToSection } from '@/lib/scroll';

function isPharmacyOpen(): boolean {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon...6=Sat
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = hours * 60 + minutes;

  if (day >= 1 && day <= 5) {
    // Segunda a Sexta: 09h00–20h00
    return time >= 540 && time < 1200;
  } else if (day === 6) {
    // Sábado: 09h00–19h00
    return time >= 540 && time < 1140;
  } else {
    // Domingo e Feriados: 10h00–13h00 | 14h00–19h00
    return (time >= 600 && time < 780) || (time >= 840 && time < 1140);
  }
}


export function Hero() {
  const [open, setOpen] = useState(isPharmacyOpen);

  useEffect(() => {
    const interval = setInterval(() => setOpen(isPharmacyOpen()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center relative">

        {/* Texto */}
        <div className="relative z-[1] order-2 lg:order-1 text-left">
          <div className="inline-flex items-center gap-1.5 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium text-emerald-700 mb-5 sm:mb-6">
            <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full inline-block"></span>
            Farmácia de Confiança
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-[44px] leading-[1.1] text-gray-900 mb-4 sm:mb-5 tracking-tight">
            Cuidamos da sua <span className="text-emerald-600">saúde</span> todos os dias
          </h1>

          <p className="text-base sm:text-lg leading-relaxed text-gray-600 max-w-[460px] mb-7 sm:mb-9">
            Aconselhamento seguro, atendimento próximo e soluções pensadas para o seu bem-estar na sua farmácia de confiança em Agualva-Cacém.
          </p>

          <div className="flex gap-3 sm:gap-3.5 items-center justify-start">
            <button
              onClick={() => scrollToSection('contactos')}
              className="bg-emerald-600 text-white px-5 sm:px-7 py-3 sm:py-3.5 rounded-full border-none cursor-pointer text-sm sm:text-[15px] font-medium inline-flex items-center gap-2 hover:bg-emerald-700 transition-colors min-h-[44px]"
            >
              Contactar
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              className="bg-transparent text-gray-900 px-5 sm:px-7 py-3 sm:py-3.5 rounded-full cursor-pointer text-sm sm:text-[15px] font-medium border border-gray-200 inline-flex items-center hover:bg-gray-50 transition-colors min-h-[44px]"
            >
              Ver Serviços
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="relative z-[1] order-1 lg:order-2">
          <div className="rounded-2xl sm:rounded-[20px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] aspect-[4/3]">
            <img
              src="/fachada.webp"
              srcSet="/fachada-small.webp 600w, /fachada.webp 1200w"
              sizes="(max-width: 1024px) 100vw, 50vw"
              alt="Farmácia Ascensão Nunes"
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={640}
              height={480}
              className="w-full h-full object-cover block"
            />
          </div>

          {/* +1000 clientes */}
          <div className="absolute bottom-2 left-2 sm:bottom-[-20px] sm:left-[-20px] bg-white rounded-xl sm:rounded-[14px] px-3 py-2.5 sm:px-5 sm:py-4 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-2.5 sm:gap-3 animate-[floatUp_3s_ease-in-out_infinite]">
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-emerald-50 rounded-lg sm:rounded-[10px] flex items-center justify-center">
              <Star size={18} color="#059669" className="sm:w-5 sm:h-5" />
            </div>
            <div className="text-xs sm:text-[13px] text-gray-600">
              <strong className="block text-gray-900 text-sm sm:text-[14px]">+1000 clientes</strong>
              confiam em nós
            </div>
          </div>

          {/* Aberta agora */}
          {open && (
          <div className="absolute top-2 right-2 sm:top-[-16px] sm:right-[-10px] bg-emerald-600 text-white rounded-lg sm:rounded-xl px-3 py-2 sm:px-4 sm:py-3 shadow-[0_8px_24px_rgba(5,150,105,0.3)] flex items-center gap-2 text-xs sm:text-[13px] font-medium animate-[floatUp_3s_ease-in-out_1.5s_infinite]">
            <CheckCircle size={14} className="sm:w-4 sm:h-4" />
            Aberta agora
          </div>
          )}
        </div>

      </div>
    </section>
  );
}