import { User } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    { name: 'Dra. Lurdes Nunes', role: 'Proprietária e Farmacêutica' },
    { name: 'Dra. Rita Diniz', role: 'Farmacêutica' },
    { name: 'Joana Ramos', role: 'Técnica Auxiliar de Farmácia' },
    { name: 'Cláudia Santos', role: 'Farmacêutica' },
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className="relative overflow-hidden bg-gradient-to-br from-emerald-100 to-teal-50 flex items-center justify-center h-64 sm:h-72 lg:h-80">
                <User className="w-20 h-20 text-emerald-300" />
              </div>
              
              <div className="p-5 sm:p-6 text-center">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-1 sm:mb-2">
                  {member.name}
                </h3>
                <p className="text-sm sm:text-base text-emerald-600 font-medium">
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