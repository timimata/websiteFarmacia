import { useState, useRef, useEffect } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';
import { promotions } from '@/data/promotions';

const MESES = ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro','Outubro','Novembro','Dezembro']
const mesAtual = MESES[new Date().getMonth()]

export function PromotionsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const leftBtnRef = useRef<HTMLButtonElement>(null);
  const rightBtnRef = useRef<HTMLButtonElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    const bar = progressRef.current;
    const leftBtn = leftBtnRef.current;
    const rightBtn = rightBtnRef.current;
    if (!el || !bar) return;
    const onScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      const pct = maxScroll > 0 ? (el.scrollLeft / maxScroll) * 100 : 0;
      bar.style.width = `${Math.max(10, pct)}%`;
      if (leftBtn) leftBtn.style.display = el.scrollLeft <= 5 ? 'none' : '';
      if (rightBtn) rightBtn.style.display = el.scrollLeft >= maxScroll - 5 ? 'none' : '';
    };
    onScroll();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => el.removeEventListener('scroll', onScroll);
  }, [isExpanded]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  const handleExpandToggle = () => {
    setIsExpanded(!isExpanded);
    if (!isExpanded && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  };

  const ProductCard = ({ promo }: { promo: typeof promotions[number] }) => (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl hover:border-emerald-200 transition-all duration-300 group h-full flex flex-col">
      {/* Image */}
      <div className="relative h-44 sm:h-56 overflow-hidden bg-gradient-to-br from-gray-50 to-emerald-50/30">
        <img
          src={promo.image}
          srcSet={`${promo.image.replace('.webp', '-small.webp')} 400w, ${promo.image} 800w`}
          sizes="(max-width: 640px) 75vw, (max-width: 1024px) 45vw, 25vw"
          alt={promo.title}
          loading="lazy"
          decoding="async"
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
        {/* Discount Badge */}
        <div className="absolute top-3 right-3">
          <div className="px-3 py-1.5 rounded-full bg-emerald-600 flex items-center justify-center shadow-lg">
            <span className="text-sm font-bold text-white">{promo.discountLabel}</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-2.5 flex-1 flex flex-col">
        {/* Category */}
        <div className="inline-block px-2.5 py-0.5 bg-teal-50 text-teal-700 rounded-full text-xs font-medium self-start">
          {promo.category}
        </div>

        {/* Title */}
        <h4 className="text-base font-bold text-gray-900 leading-tight line-clamp-2">
          {promo.title}
        </h4>

        {/* Tagline */}
        <p className="text-xs text-gray-500 italic line-clamp-2 flex-1">
          {promo.tagline}
        </p>

        {/* Note */}
        {promo.note && (
          <p className="text-xs text-gray-500 italic">{promo.note}</p>
        )}
      </div>
    </div>
  );

  return (
    <section
      ref={sectionRef}
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-emerald-50/30 to-white"
      id="promocoes"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-center justify-center gap-4 sm:gap-6 mb-8 sm:mb-10 lg:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4">
              <Sparkles className="w-4 h-4" />
              <span>Poupe agora</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Promoções de {mesAtual}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-xl">
              Aproveite as nossas ofertas especiais em produtos selecionados só em {mesAtual}.
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Promoções exclusivas para aderentes do{' '}
              <a
                href="https://www.farmaciasportuguesas.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-emerald-700 underline hover:text-emerald-800 transition-colors"
              >
                Cartão Farmácias Portuguesas
              </a>
            </p>
          </div>
          <img
            src="/produtos/cartaoFarmaciaPortuguesa.webp"
            alt="Cartão Farmácias Portuguesas"
            className="h-32 sm:h-40 md:h-52 w-auto object-contain flex-shrink-0"
          />
        </div>

        {/* Horizontal Scroll Section */}
        {!isExpanded && (
          <div className="relative">
            {/* Scroll Left Button */}
            <button
              ref={leftBtnRef}
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl hover:bg-emerald-50 transition-all group"
              aria-label="Scroll esquerda"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors" />
            </button>

            {/* Scroll Right Button */}
            <button
              ref={rightBtnRef}
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 z-10 w-10 h-10 items-center justify-center bg-white rounded-full shadow-xl hover:shadow-2xl hover:bg-emerald-50 transition-all group"
              aria-label="Scroll direita"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-emerald-600 transition-colors" />
            </button>

            {/* Scrollable Cards */}
            <div
              ref={scrollRef}
              className="flex gap-5 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {promotions.map((promo) => (
                <div key={promo.id} className="flex-none w-[75vw] sm:w-[45vw] lg:w-[calc(25%-15px)] snap-start">
                  <ProductCard promo={promo} />
                </div>
              ))}
            </div>

            {/* Scroll Progress Bar (draggable) */}
            <div className="flex justify-center mt-5">
              <div className="py-2 cursor-pointer" onMouseDown={(e) => {
                const track = trackRef.current;
                const el = scrollRef.current;
                if (!track || !el) return;
                const setPos = (clientX: number) => {
                  const rect = track.getBoundingClientRect();
                  const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
                  el.scrollLeft = pct * (el.scrollWidth - el.clientWidth);
                };
                setPos(e.clientX);
                const onMove = (ev: MouseEvent) => setPos(ev.clientX);
                const onUp = () => {
                  document.removeEventListener('mousemove', onMove);
                  document.removeEventListener('mouseup', onUp);
                };
                document.addEventListener('mousemove', onMove);
                document.addEventListener('mouseup', onUp);
              }}
              onTouchStart={(e) => {
                const track = trackRef.current;
                const el = scrollRef.current;
                if (!track || !el) return;
                const setPos = (clientX: number) => {
                  const rect = track.getBoundingClientRect();
                  const pct = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
                  el.scrollLeft = pct * (el.scrollWidth - el.clientWidth);
                };
                setPos(e.touches[0].clientX);
                const onMove = (ev: TouchEvent) => setPos(ev.touches[0].clientX);
                const onEnd = () => {
                  document.removeEventListener('touchmove', onMove);
                  document.removeEventListener('touchend', onEnd);
                };
                document.addEventListener('touchmove', onMove);
                document.addEventListener('touchend', onEnd);
              }}>
                <div
                  ref={trackRef}
                  className="w-32 h-3 bg-gray-200 rounded-full overflow-hidden relative"
                >
                  <div
                    ref={progressRef}
                    className="h-full bg-emerald-600 rounded-full pointer-events-none"
                    style={{ width: '10%' }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* View All Button */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={handleExpandToggle}
            className="inline-flex items-center gap-2 px-6 py-3 min-h-[44px] text-emerald-600 font-semibold hover:text-emerald-700 transition-all group hover:bg-emerald-50 rounded-full"
            aria-expanded={isExpanded}
            aria-controls="all-promotions-grid"
          >
            <span>{isExpanded ? 'Mostrar menos promoções' : 'Ver todas as promoções'}</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expandable Mosaic Grid */}
        {isExpanded && (
          <div
            id="all-promotions-grid"
            className="mt-8 flex flex-wrap justify-center gap-5 sm:gap-6"
          >
            {promotions.map((promo) => (
              <div key={promo.id} className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]">
                <ProductCard promo={promo} />
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
