import { X, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { scrollToSection } from '@/lib/scroll';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 10);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMobileMenuOpen(false);
  };

  const menuItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Sobre nós', id: 'sobre' },
    { label: 'Equipa', id: 'equipa' },
    { label: 'Contactos', id: 'contactos' },
  ];

  return (
    <>
      <header className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg' : 'shadow-sm'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => handleNavClick('inicio')}
              className="flex items-center gap-2 sm:gap-3 group min-h-[44px]"
            >
              <img
                src="/logo.png"
                alt="Logo Farmácia Ascensão Nunes"
                className="w-9 h-9 sm:w-10 sm:h-10 group-hover:scale-105 transition-transform"
              />
              <div className="hidden sm:block text-left">
                <div className="font-bold text-base sm:text-lg text-gray-900 leading-tight">
                  Farmácia Ascensão Nunes
                </div>
                <div className="text-xs text-emerald-600 font-medium">
                  Cuidamos da sua saúde
                </div>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navegação principal">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className="px-4 py-2 text-gray-700 font-medium hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-all"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <button 
              onClick={() => handleNavClick('contactos')}
              className="hidden lg:inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg transition-all"
            >
              Contacte-nos
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-emerald-600 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div 
            className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          <div className="absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-2xl">
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <img
                    src="/logo.png"
                    alt="Logo Farmácia Ascensão Nunes"
                    className="w-10 h-10"
                  />
                  <div>
                    <div className="font-bold text-gray-900">
                      Farmácia Ascensão Nunes
                    </div>
                    <div className="text-xs text-emerald-600 font-medium">
                      Cuidamos da sua saúde
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Menu Items */}
              <nav className="flex-1 overflow-y-auto py-6 px-4">
                {menuItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className="w-full text-left px-6 py-4 text-lg font-semibold text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 rounded-2xl transition-all mb-2 min-h-[56px] flex items-center"
                  >
                    {item.label}
                  </button>
                ))}
              </nav>

              {/* Mobile Menu CTA */}
              <div className="p-6 border-t border-gray-100">
                <button 
                  onClick={() => handleNavClick('contactos')}
                  className="w-full py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-lg transition-all min-h-[56px]"
                >
                  Contacte-nos
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
