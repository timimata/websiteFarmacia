import { User } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    { name: 'Dra. Lurdes Nunes', role: 'Proprietária e Farmacêutica' },
    { name: 'Dra. Rita Diniz', role: 'Farmacêutica' },
    { name: 'Joana Ramos', role: 'Técnica Auxiliar de Farmácia' },
    { name: 'Dra. Cláudia Santos', role: 'Farmacêutica' },
    { name: 'Marta Martins', role: 'Técnica Auxiliar de Farmácia' },
    { name: 'Isilda Alves', role: 'Administrativa' },
    { name: 'Dra. Inês Gonçalves', role: 'Farmacêutica' },
    { name: 'Dra. Paula Barreto', role: 'Farmacêutica' },
    { name: 'Inês Monteiro', role: 'Técnica Superior de Diagnóstico e Terapêutica' },
    { name: 'Dra. Catarina Cordeiro', role: 'Farmacêutica' },
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
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center aspect-square">
                <User className="w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-emerald-300" />
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