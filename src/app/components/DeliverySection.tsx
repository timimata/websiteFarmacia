import { Truck, Clock, MapPin, Phone } from 'lucide-react';

export function DeliverySection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12 items-center">

          {/* Text Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-emerald-100 text-emerald-700 rounded-full text-xs sm:text-sm font-medium">
              Serviço de Entrega
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Entregas ao <span className="text-emerald-600">Domicílio</span>
            </h2>

            <div className="p-4 sm:p-6 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl sm:rounded-2xl border-l-4 border-emerald-600">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                Receba os seus medicamentos e produtos de saúde comodamente em casa, com rapidez e segurança.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-600 leading-relaxed">
              <p>
                Sabemos que nem sempre é fácil deslocar-se até à farmácia. Como tal, oferecemos um serviço de entrega ao domicílio pensado para a sua comodidade e bem-estar.
              </p>
              <p>
                Faça a sua encomenda por telefone e receba os seus produtos sem sair de casa. Entregamos a sua medicação, produtos de saúde e de dermocosmética, e muito mais.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-2">
              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Truck className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Entrega Rápida</div>
                  <div className="text-xs text-gray-500">No próprio dia</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Zona Local</div>
                  <div className="text-xs text-gray-500">Concelho de Sintra</div>
                </div>
              </div>
              <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-xl">
                <div className="w-9 h-9 rounded-lg bg-emerald-600 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm">Fácil Contacto</div>
                  <div className="text-xs text-gray-500">Por telefone</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <Clock className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <p className="text-sm text-gray-500">Encomendas aceites pelo <a href="tel:214324097" className="text-emerald-600 font-medium hover:underline">214 324 097</a>.</p>
            </div>

            <div className="flex items-center gap-3 pt-0">
              <Clock className="w-4 h-4 text-amber-500 flex-shrink-0" />
              <p className="text-sm text-amber-700 font-medium">Este serviço tem uma taxa de entrega associada.</p>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl sm:rounded-[2rem] transform rotate-3 opacity-20"></div>
            <img
              src="public\foto8.jpeg"
              alt="Entrega ao domicílio - Farmácia Ascensão Nunes"
              loading="lazy"
              decoding="async"
              className="relative rounded-2xl sm:rounded-[2rem] shadow-2xl w-full h-80 sm:h-96 lg:h-[620px] object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
