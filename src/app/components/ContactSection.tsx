import { MapPin, Phone, Mail, Clock, ArrowRight, BadgeCheck, ExternalLink } from 'lucide-react';
import { contactInfo, openingHours, pharmacyContact } from '@/data/contact';

export function ContactSection() {
  const iconMap = {
    location: MapPin,
    phone: Phone,
    email: Mail,
  };

  return (
    <section id="contactos" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-emerald-600 to-teal-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxNWMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02AyLjY4NiA2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLW9wYWNpdHk9Ii4wNSIgc3Ryb2tlLXdpZHRoPSIyIi8+PC9nPjwvc3ZnPg==')] opacity-30"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              Entre em Contacto
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-emerald-50 mb-6 sm:mb-8 lg:mb-10">
              Tem dúvidas? Estamos aqui para ajudar. Entre em contacto connosco a qualquer momento.
            </p>
            
            <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8 lg:mb-10">
              {contactInfo.map((info, index) => {
                const Icon = iconMap[info.type];
                return (
                  <div key={index} className="flex items-start gap-3 sm:gap-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-white/20 backdrop-blur flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm text-emerald-100 mb-0.5 sm:mb-1">{info.label}</div>
                      <div className="font-semibold text-base sm:text-lg">{info.value}</div>
                      <div className="text-xs sm:text-sm text-emerald-100">{info.subvalue}</div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            <a
              href={`tel:${pharmacyContact.phone.replace(/\s/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-emerald-600 rounded-full font-semibold hover:bg-emerald-50 transition-all shadow-xl min-h-[56px] sm:min-h-0"
            >
              Contactar Agora
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </a>
          </div>
          
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <Clock className="w-6 h-6 sm:w-8 sm:h-8 text-white flex-shrink-0" />
              <h3 className="text-xl sm:text-2xl font-bold">Horário de Funcionamento</h3>
            </div>
            
            <div className="space-y-3 sm:space-y-4">
              {openingHours.map((schedule, index) => (
                <div key={index} className="flex items-center justify-between py-3 sm:py-4 border-b border-white/20 last:border-0">
                  <span className="font-semibold text-sm sm:text-base">{schedule.day}</span>
                  <span className="text-emerald-100 text-sm sm:text-base text-right">{schedule.time}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-emerald-500/30 rounded-xl sm:rounded-2xl border border-emerald-400/30 backdrop-blur">
              <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2">
                <BadgeCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white flex-shrink-0" />
                <p className="font-bold text-white text-sm sm:text-base">Encerrado nos feriados de Ano Novo, Páscoa e Natal.</p>
              </div>
              <p className="text-xs sm:text-sm text-emerald-50">
                Nos meses de verão (julho, agosto e setembro) encerramos aos domingos.
              </p>
            </div>
          </div>
        </div>

        {/* Premium Location Card */}
        <div className="mt-12 sm:mt-16 lg:mt-20 max-w-7xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden border border-emerald-100/50">
            {/* Header */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 px-6 sm:px-8 py-4 sm:py-5 border-b border-emerald-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-teal-600 flex items-center justify-center shadow-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">Localização</h3>
                  <p className="text-sm text-gray-600">Visite-nos pessoalmente</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 p-6 sm:p-8 lg:p-10">
              {/* Map Embed - Takes more space on desktop */}
              <div className="lg:col-span-3 order-2 lg:order-1">
                <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[400px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-200">
                  <iframe
                    title="Localização da Farmácia Ascensão Nunes"
                    src="https://maps.google.com/maps?q=Farm%C3%A1cia+Ascens%C3%A3o+Nunes,+Rua+Anta+da+Agualva+12A,+Agualva-Cac%C3%A9m&t=&z=16&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    /* Security: sandbox the iframe to restrict capabilities (OWASP) */
                    sandbox="allow-scripts allow-same-origin allow-popups"
                    className="absolute inset-0"
                  />
                </div>
              </div>

              {/* Address Info - Side panel on desktop, top on mobile */}
              <div className="lg:col-span-2 order-1 lg:order-2 flex flex-col justify-center space-y-5 sm:space-y-6">
                {/* Address Display */}
                <div className="space-y-3 sm:space-y-4">
                  <div className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-medium">
                    A nossa morada
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-lg sm:text-xl font-bold text-gray-900 leading-snug">
                      {pharmacyContact.addressLine1}
                    </p>
                    <p className="text-base sm:text-lg text-gray-600">
                      {pharmacyContact.addressLine2}
                    </p>
                    <p className="text-sm sm:text-base text-gray-500">
                      {pharmacyContact.city}
                    </p>
                  </div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

                {/* Quick Info */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">
                      Fácil acesso e próximo da A16
                    </p>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-emerald-600"></div>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700">
                      A 5 minutos da estação de Agualva-Cacém
                    </p>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={pharmacyContact.mapsDirections}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 sm:py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-full font-semibold hover:shadow-xl hover:from-emerald-700 hover:to-teal-700 transition-all min-h-[56px] sm:min-h-0 group"
                >
                  Abrir no Google Maps
                  <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}