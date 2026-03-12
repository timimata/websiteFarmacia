import { useState, useEffect } from 'react';
import { ArrowRight, Star, CheckCircle } from 'lucide-react';

function isPharmacyOpen(): boolean {
  const now = new Date();
  const day = now.getDay(); // 0=Sun, 1=Mon...6=Sat
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const time = hours * 60 + minutes;

  if (day >= 1 && day <= 5) {
    // Segunda a Sexta: 09h00–20h00
    return time >= 540 && time < 1200;
  } else if (day === 6) {
    // Sábado: 09h00–19h00
    return time >= 540 && time < 1140;
  } else {
    // Domingo e Feriados: 10h00–13h00 | 14h00–19h00
    return (time >= 600 && time < 780) || (time >= 840 && time < 1140);
  }
}

function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80;
    const top = el.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }
}

export function Hero() {
  const [open, setOpen] = useState(isPharmacyOpen);

  useEffect(() => {
    const interval = setInterval(() => setOpen(isPharmacyOpen()), 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden bg-white">
      <div style={{ maxWidth: '1600px', margin: '0 auto', padding: '80px 64px 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center', position: 'relative' }}>

        {/* Texto */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: '#ecfdf5', border: '1px solid #d1fae5', padding: '6px 14px', borderRadius: '50px', fontSize: '13px', fontWeight: 500, color: '#047857', marginBottom: '24px' }}>
            <span style={{ width: '6px', height: '6px', background: '#10b981', borderRadius: '50%', display: 'inline-block' }}></span>
            Farmácia de Confiança
          </div>

          <h1 style={{ fontSize: '52px', lineHeight: 1.1, color: '#111827', margin: '0 0 20px', letterSpacing: '-1px' }}>
            Cuidamos da sua <span style={{ color: '#059669' }}>saúde</span> todos os dias
          </h1>

          <p style={{ fontSize: '17px', lineHeight: 1.7, color: '#4b5563', maxWidth: '460px', margin: '0 0 36px' }}>
            Aconselhamento seguro, atendimento próximo e soluções pensadas para o seu bem-estar na sua farmácia de confiança em Agualva-Cacém.
          </p>

          <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
            <button
              onClick={() => scrollToSection('contactos')}
              style={{ background: '#059669', color: '#fff', padding: '14px 28px', borderRadius: '50px', border: 'none', cursor: 'pointer', fontSize: '15px', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              Contactar
              <ArrowRight size={16} />
            </button>
            <button
              onClick={() => scrollToSection('servicos')}
              style={{ background: 'transparent', color: '#111827', padding: '14px 28px', borderRadius: '50px', cursor: 'pointer', fontSize: '15px', fontWeight: 500, border: '1.5px solid rgba(0,0,0,0.12)', display: 'inline-flex', alignItems: 'center' }}
            >
              Ver Serviços
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 60px rgba(0,0,0,0.1)', aspectRatio: '4/3' }}>
            <img
              src="/fachada.jpg.jpeg"
              alt="Farmácia Ascensão Nunes"
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
          </div>

          {/* +750 clientes */}
          <div style={{ position: 'absolute', bottom: '-20px', left: '-20px', background: '#fff', borderRadius: '14px', padding: '16px 20px', boxShadow: '0 8px 30px rgba(0,0,0,0.08)', display: 'flex', alignItems: 'center', gap: '12px', animation: 'floatUp 3s ease-in-out infinite' }}>
            <div style={{ width: '40px', height: '40px', background: '#ecfdf5', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Star size={20} color="#059669" />
            </div>
            <div style={{ fontSize: '13px', color: '#4b5563' }}>
              <strong style={{ display: 'block', color: '#111827', fontSize: '14px' }}>+1000 clientes</strong>
              confiam em nós
            </div>
          </div>

          {/* Aberta agora */}
          {open && (
          <div style={{ position: 'absolute', top: '-16px', right: '-10px', background: '#059669', color: '#fff', borderRadius: '12px', padding: '12px 18px', boxShadow: '0 8px 24px rgba(5,150,105,0.3)', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', fontWeight: 500, animation: 'floatUp 3s ease-in-out 1.5s infinite' }}>
            <CheckCircle size={16} />
            Aberta agora
          </div>
          )}
        </div>

      </div>
    </section>
  );
}