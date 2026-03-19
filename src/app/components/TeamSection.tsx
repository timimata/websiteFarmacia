import { User } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    { name: 'Dra. Lurdes Nunes', role: 'Proprietária e Farmacêutica', photo: '/equipa_fotos/drMaria.webp' },
    { name: 'Dra. Rita Diniz', role: 'Farmacêutica', photo: '/equipa_fotos/drRita.webp' },
    { name: 'Joana Ramos', role: 'Técnica Auxiliar de Farmácia', photo: '/equipa_fotos/joana.webp' },
    { name: 'Dra. Cláudia Santos', role: 'Farmacêutica', photo: null },
    { name: 'Marta Martins', role: 'Técnica Auxiliar de Farmácia', photo: '/equipa_fotos/marta.webp' },
    { name: 'Isilda Alves', role: 'Administrativa', photo: '/equipa_fotos/isilda.webp' },
    { name: 'Dra. Inês Gonçalves', role: 'Farmacêutica', photo: null },
    { name: 'Dra. Paula Barreto', role: 'Farmacêutica', photo: '/equipa_fotos/drPaula.webp' },
    { name: 'Inês Monteiro', role: 'Técnica Superior de Diagnóstico e Terapêutica', photo: '/equipa_fotos/ines.webp' },
    { name: 'Dra. Catarina Cordeiro', role: 'Farmacêutica', photo: '/equipa_fotos/drCatarina.webp' },
  ];

  return (
    <section id="equipa" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            Equipa
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Profissionais dedicados ao seu bem-estar
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-5 lg:gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden aspect-square">
                {member.photo ? (
                  <img
                    src={member.photo}
                    srcSet={`${member.photo!.replace('.webp', '-small.webp')} 300w, ${member.photo} 600w`}
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center">
                    <User className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-emerald-300" />
                  </div>
                )}
              </div>

              <div className="p-3 sm:p-4 lg:p-5 text-center">
                <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mb-0.5 sm:mb-1">
                  {member.name}
                </h3>
                <p className="text-xs sm:text-sm text-emerald-600 font-medium">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
