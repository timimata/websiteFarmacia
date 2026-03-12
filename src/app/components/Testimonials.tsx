import { useState, useEffect, useMemo } from 'react';
import { Star, Quote, User } from 'lucide-react';

type Testimonial = {
  name: string;
  rating: number;
  comment: string;
  image?: string;
};

const allTestimonials: Testimonial[] = [
  {
    name: 'Sandra Guerreiro',
    rating: 5,
    comment: 'Excelente atendimento, excelentes profissionais, só não resolvem mesmo o impossível. O meu muito obrigada pela ajuda e pelo carinho que têm demonstrado ao longo destes anos.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjXToaYj1ZvFP8lmuKjKSHDf1yv6EKB15RUVMWDpFXio7HBKRFry=w90-h90-p-rp-mo-ba2-br100',
  },
  {
    name: 'Filipe Garcia',
    rating: 5,
    comment: 'Bom atendimento, afabilidade, prestabilidade e simpatia. É, e será, a minha farmácia.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjW-J-9bD1AfygfLN_ErV4ERQLi2Lg6XUr8SjsGB8btuQJvhqPoK2w=w90-h90-p-rp-mo-ba3-br100',
  },
  {
    name: 'Zulmira Gago',
    rating: 5,
    comment: 'Pessoal muito competente. Tem sempre todos os medicamentos que precisamos e se não tem, encomenda no próprio dia.',
  },
  {
    name: 'João Correia',
    rating: 5,
    comment: 'Excelente serviço, profissionais fora de série.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjUoTSfmCckX_aLrTFwosf6FhCQugV8lKbrnhpRGfPtJvIgb8O6Q=w90-h90-p-rp-mo-ba4-br100',
  },
  {
    name: 'Bruno Oliveira',
    rating: 5,
    comment: 'Atendentes super educadas e ambiente claro e limpo.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjXYcfNW-mlcHovTiaxYsqC6Dg7DegnS_4WgbLAvHGrZUr9b17gYzA=w90-h90-p-rp-mo-ba4-br100',
  },
  {
    name: 'Eduardo Figueiredo',
    rating: 4,
    comment: 'Bom atendimento e inclusive serviço de enfermagem. Estacionamento na própria rua.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjUYyqsBFEQnI6grzg_5LlLq_ulEAcecguwsZv7KcIJgrUkDv2XL=w90-h90-p-rp-mo-ba4-br100',
  },
  {
    name: 'Rita Diniz',
    rating: 5,
    comment: 'Super recomendo! Excelente atendimento, rapidez e muito simpáticas.',
  },
  {
    name: 'Vasco Gonçalves',
    rating: 4,
    comment: 'Good pharmacy, excellent staff.',
  },
  {
    name: 'Olavo Gomes',
    rating: 5,
    comment: 'Pessoal super simpático.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjWKg7cFqZvi40zPqgcWquDbn27VxF75qgDhbwQnrdNw1HIF6r4hqQ=w90-h90-p-rp-mo-ba3-br100',
  },
  {
    name: 'António Ferreira',
    rating: 5,
    comment: 'Excelente atendimento. Horário alargado.',
  },
  {
    name: 'Liliana Venâncio',
    rating: 5,
    comment: 'Atendimento 5 estrelas. Estacionamento acessível.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjX__JfPJ0IDcbO3MRh6BEwfnYUx14qce3A0AJPp6wW_DVbGU3wy=w90-h90-p-rp-mo-ba5-br100',
  },
  {
    name: 'Paulo Vilela',
    rating: 5,
    comment: 'Bom atendimento e simpatia dos colaboradores.',
  },
  {
    name: 'Natalia SS',
    rating: 5,
    comment: 'Sempre com ótimo atendimento.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjWVv6o2qeGrvnEWxYYVrrUL3ped6cbSXFtlupVXN6RQ8WrPblx_6w=w90-h90-p-rp-mo-ba3-br100',
  },
  {
    name: 'Alberto Neves de Melo',
    rating: 5,
    comment: 'Uma excelente Farmácia!',
  },
  {
    name: 'Mafalda Oliveira',
    rating: 5,
    comment: 'Farmácia com atendimento espetacular.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjUL0_RvdyMtWdP9vfbZkh-hX8iCFrwGsSkj2iqcwMtCRocqMK4-aQ=w90-h90-p-rp-mo-ba2-br100',
  },
  {
    name: 'Alexandre Pereira',
    rating: 5,
    comment: 'Simpatia e bons profissionais.',
  },
  {
    name: 'Carlos Oliveira',
    rating: 4,
    comment: 'Local agradável e amplo.',
  },
  {
    name: 'Paulo Boletas',
    rating: 4,
    comment: 'Bom atendimento e muito prática. Estacionamento fácil.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjUv31x7EwEFzHc9M91N5LyYAd09opYYBqvN1DsR6gIi12blSLyi=w90-h90-p-rp-mo-ba4-br100',
  },
  {
    name: 'Vera Caldas',
    rating: 5,
    comment: 'Excelente atendimento!',
  },
  {
    name: 'Luis Moura',
    rating: 5,
    comment: 'Ótimo atendimento com os excelentes profissionais.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjXw3yut15DxA0FKMK2nLSfQrkrvZu89bYghSi2v5nS4blQSF7Jk=w90-h90-p-rp-mo-br100',
  },
  {
    name: 'João Vitor Picchi',
    rating: 5,
    comment: 'Atendimento muito bom.',
    image:
      'https://lh3.googleusercontent.com/a-/ALV-UjXsqsolicGjzRtrNMxvPYMsWkhutQTZC5-DuUVufdQhJ7X2S2_PXQ=w90-h90-p-rp-mo-ba3-br100',
  },
];

function shuffleArray<T>(array: T[]): T[] {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

export function Testimonials() {
  const shuffled = useMemo(() => shuffleArray(allTestimonials), []);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setOffset((prev) => (prev + 3) % shuffled.length);
    }, 10000);
    return () => clearInterval(timer);
  }, [shuffled.length]);

  const visible = [
    shuffled[offset % shuffled.length],
    shuffled[(offset + 1) % shuffled.length],
    shuffled[(offset + 2) % shuffled.length],
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
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
              <div className="relative w-5 h-5">
                <Star className="w-5 h-5 text-gray-200" />
                <div className="absolute inset-0 overflow-hidden" style={{ width: '40%' }}>
                  <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
                </div>
              </div>
            </div>
            <span className="text-lg font-bold text-gray-900">4,4</span>
            <span className="text-sm text-gray-500">· 82 opiniões no Google</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {visible.map((testimonial) => (
            <div 
              key={`${testimonial.name}-${offset}`}
              className="bg-white p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative animate-[fadeIn_0.5s_ease-in-out]"
            >
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 text-emerald-500 opacity-20">
                <Quote className="w-8 h-8 sm:w-12 sm:h-12" />
              </div>
              
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-emerald-100 to-teal-50 ring-2 sm:ring-4 ring-emerald-100 flex items-center justify-center overflow-hidden">
                  <User className="w-6 h-6 sm:w-8 sm:h-8 text-emerald-300" />
                  {testimonial.image ? (
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      loading="lazy"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={(event) => {
                        event.currentTarget.style.display = 'none';
                      }}
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                  ) : null}
                </div>
                <div>
                  <h4 className="font-bold text-sm sm:text-base text-gray-900">{testimonial.name}</h4>
                  <p className="text-xs sm:text-sm text-gray-500">Google Reviews</p>
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