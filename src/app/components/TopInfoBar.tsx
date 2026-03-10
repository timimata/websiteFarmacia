import { Phone, Clock, MapPin, Facebook, Instagram } from 'lucide-react';
import { pharmacyContact } from '@/data/contact';

export function TopInfoBar() {
  return (
    <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-between gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm">
          {/* Phone */}
          <a 
            href={pharmacyContact.phoneHref}
            className="flex items-center gap-1.5 sm:gap-2 hover:text-emerald-100 transition-colors min-h-[44px] sm:min-h-0"
          >
            <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="font-medium whitespace-nowrap">{pharmacyContact.phone}</span>
          </a>
          
          {/* Opening Hours */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Clock className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="font-medium whitespace-nowrap">{pharmacyContact.topBarHours}</span>
          </div>
          
          {/* Location - Hidden on smallest mobile, shown on sm and up */}
          <a 
            href={pharmacyContact.mapsQuery}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 hover:text-emerald-100 transition-colors"
          >
            <MapPin className="w-4 h-4 flex-shrink-0" />
            <span className="font-medium">{`${pharmacyContact.addressLine1}, Agualva-Cacém`}</span>
          </a>

          {/* Social Icons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://www.facebook.com/FarmaciaAscensaoNunes/?locale=pt_PT"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-100 transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a
              href="https://www.instagram.com/farmacia_ascensaonunes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-100 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://www.tiktok.com/@farmacia.a.nunes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-100 transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.7a8.16 8.16 0 0 0 4.76 1.52v-3.4a4.85 4.85 0 0 1-1-.13z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
