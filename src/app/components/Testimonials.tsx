import { Star, Quote } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      role: 'Cliente Regular',
      rating: 5,
      comment: 'A equipa é extremamente competente e atenciosa. Sempre disponíveis para esclarecer dúvidas e garantir que compreendo os meus medicamentos.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
    },
    {
      name: 'João Pereira',
      role: 'Cliente Sénior',
      rating: 5,
      comment: 'Frequento esta farmácia há anos. O serviço personalizado e a atenção aos detalhes são incomparáveis. Preocupam-se genuinamente com os clientes.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
    },
    {
      name: 'Ana Costa',
      role: 'Profissional de Saúde',
      rating: 5,
      comment: 'Como enfermeira, confio nesta farmácia para as necessidades de saúde da minha família. Profissionais, eficientes e sempre dispostos a ajudar.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-emerald-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
            O Que Dizem os Nossos Clientes
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto px-4">
            Não acredite apenas na nossa palavra - ouça os nossos clientes
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-emerald-500 opacity-20">
                <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  loading="lazy"
                  decoding="async"
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover ring-2 sm:ring-4 ring-emerald-100"
                />
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex gap-0.5 sm:gap-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                "{testimonial.comment}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}