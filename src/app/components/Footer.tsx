import { MapPin, Phone, Mail, Facebook, Instagram, Github } from 'lucide-react';
import { pharmacyContact } from '@/data/contact';
import { footerServices } from '@/data/services';

export function Footer() {
  const navigation = {
    services: [
      ...footerServices,
    ],
    quickLinks: [
      { label: 'Sobre Nós', id: 'sobre' },
      { label: 'Equipa', id: 'equipa' },
      { label: 'Serviços', id: 'servicos' },
      { label: 'Promoções', id: 'promocoes' },
      { label: 'Contacto', id: 'contactos' },
    ],
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 lg:gap-12 mb-10 sm:mb-12">
          {/* Brand Section */}
          <div className="sm:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <img
                src="/logo.png"
                alt="Logo Farmácia Ascensão Nunes"
                className="w-9 h-9 sm:w-10 sm:h-10"
              />
              <span className="text-xl sm:text-2xl font-bold">Farmácia Ascensão Nunes</span>
            </div>
            <p className="text-sm sm:text-base text-gray-400 leading-relaxed mb-4 sm:mb-6">
              O seu parceiro de confiança em saúde e bem-estar. Prestando cuidados farmacêuticos profissionais com um toque pessoal.
            </p>
            <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
              <div className="flex items-start gap-2 sm:gap-3 text-gray-400 text-sm sm:text-base">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span>{`${pharmacyContact.addressLine1}, ${pharmacyContact.addressLine2}`}</span>
              </div>
              <a href={pharmacyContact.phoneHref} className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                <span>{pharmacyContact.phone}</span>
              </a>
              <a href={pharmacyContact.phoneHref2} className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                <span>{pharmacyContact.phone2}</span>
              </a>
              <a href={`mailto:${pharmacyContact.email}`} className="flex items-center gap-2 sm:gap-3 text-gray-400 hover:text-emerald-400 transition-colors text-sm sm:text-base">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-500 flex-shrink-0" />
                <span>{pharmacyContact.email}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Serviços</h3>
            <ul className="space-y-2 sm:space-y-3">
              {navigation.services.map((item, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('servicos')}
                    className="text-sm sm:text-base text-gray-400 hover:text-emerald-400 transition-colors text-left py-1.5 min-h-[44px] sm:min-h-0 flex items-center"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">Links Rápidos</h3>
            <ul className="space-y-2 sm:space-y-3">
              {navigation.quickLinks.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="text-sm sm:text-base text-gray-400 hover:text-emerald-400 transition-colors text-left py-1.5 min-h-[44px] sm:min-h-0 flex items-center"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <p className="text-gray-400 text-xs sm:text-sm text-center md:text-left">
              © 2026 Farmácia Ascensão Nunes. Todos os direitos reservados.
            </p>

            <div className="flex gap-3 sm:gap-4">
              <a
                href="https://www.facebook.com/FarmaciaAscensaoNunes/?locale=pt_PT"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-all min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.instagram.com/farmacia_ascensaonunes/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-all min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.tiktok.com/@farmacia.a.nunes"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-emerald-600 transition-all min-h-[44px] min-w-[44px] sm:min-h-0 sm:min-w-0"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Developer Credit */}
          <div className="flex items-center justify-center md:justify-end gap-1.5 pt-4 sm:pt-5 text-gray-500 text-xs">
            <span>Desenvolvido por</span>
            <a
              href="https://github.com/timimata"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-gray-400 hover:text-emerald-400 transition-colors font-medium"
            >
              Tiago Machado
              <Github className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}