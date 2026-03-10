# 🏥 Farmácia Ascensão Nunes — Website

Website institucional da **Farmácia Ascensão Nunes**, localizada em Agualva-Cacém, Sintra.  
Desenvolvido com React, TypeScript, Vite e Tailwind CSS, com foco em performance, acessibilidade e segurança.

🔗 **Produção:** [www.farmaciaascensaonunes.pt](https://www.farmaciaascensaonunes.pt)

---

## 📋 Índice

- [Funcionalidades](#-funcionalidades)
- [Tecnologias](#-tecnologias)
- [Estrutura do Projeto](#-estrutura-do-projeto)
- [Segurança](#-segurança)
- [Começar](#-começar)
- [Scripts Disponíveis](#-scripts-disponíveis)
- [Deploy](#-deploy)
- [Autor](#-autor)

---

## ✨ Funcionalidades

- **Hero Section** — Apresentação da farmácia com CTA para contacto
- **Promoções** — Carrossel interativo com produtos em promoção (react-slick)
- **Serviços** — Lista dos serviços farmacêuticos disponíveis
- **Destaques** — Razões para escolher a Farmácia Ascensão Nunes
- **Dicas de Saúde** — Conselhos de bem-estar para os visitantes
- **Sobre Nós** — História, valores e responsabilidade social/ambiental
- **Equipa** — Apresentação dos profissionais da farmácia
- **Testemunhos** — Avaliações de clientes
- **Contactos** — Informações de contacto, horários e mapa Google Maps
- **SEO Completo** — Open Graph, Twitter Cards, Schema.org (Pharmacy), sitemap.xml, robots.txt
- **Acessibilidade** — Skip-to-content, aria-labels, botões com tamanho mínimo de 44px
- **Lazy Loading** — Componentes pesados carregados com `React.lazy()` + `Suspense`
- **Responsive** — Design adaptável a mobile, tablet e desktop

---

## 🛠 Tecnologias

| Tecnologia | Versão | Uso |
|---|---|---|
| **React** | 18.3 | UI framework |
| **TypeScript** | 5.9 | Tipagem estática |
| **Vite** | 6.4 | Build tool + dev server |
| **Tailwind CSS** | 4.1 | Utility-first CSS |
| **Lucide React** | 0.487 | Ícones SVG |
| **react-slick** | 0.31 | Carrossel de promoções |
| **DOMPurify** | latest | Sanitização de HTML (XSS protection) |
| **Vitest** | 2.1 | Testes unitários |
| **ESLint** | 9.34 | Linting + regras de segurança |
| **Prettier** | 3.6 | Formatação de código |

---

## 📁 Estrutura do Projeto

```
websitefarmacia/
├── public/                          # Ficheiros estáticos
│   ├── .well-known/security.txt     # Divulgação responsável (RFC 9116)
│   ├── favicon.svg                  # Favicon
│   ├── logo.svg                     # Logo da farmácia
│   ├── og-image.svg                 # Imagem para redes sociais
│   ├── robots.txt                   # Configuração para crawlers
│   └── sitemap.xml                  # Mapa do site para SEO
├── src/
│   ├── app/
│   │   ├── components/              # Componentes React
│   │   │   ├── ContactSection.tsx   # Secção de contactos + mapa
│   │   │   ├── Footer.tsx           # Rodapé
│   │   │   ├── Header.tsx           # Navegação principal
│   │   │   ├── HealthTips.tsx       # Dicas de saúde
│   │   │   ├── Hero.tsx             # Secção principal (hero)
│   │   │   ├── InstitutionalSection.tsx  # Sobre nós + responsabilidade social
│   │   │   ├── PharmacyHighlights.tsx    # Destaques da farmácia
│   │   │   ├── PopularServices.tsx  # Serviços populares
│   │   │   ├── PromotionsSection.tsx # Promoções com carrossel
│   │   │   ├── TeamSection.tsx      # Equipa
│   │   │   ├── Testimonials.tsx     # Testemunhos de clientes
│   │   │   └── TopInfoBar.tsx       # Barra superior (telefone, horário)
│   │   ├── App.tsx                  # Componente raiz
│   │   └── App.test.tsx             # Testes do App
│   ├── config/
│   │   └── site.ts                  # Configurações do site (URL, nome, etc.)
│   ├── data/
│   │   ├── contact.ts               # Dados de contacto e horários
│   │   ├── promotions.ts            # Dados das promoções
│   │   └── services.ts              # Dados dos serviços
│   ├── lib/
│   │   └── security/                # 🔒 Módulos de segurança
│   │       ├── index.ts             # Barrel export
│   │       ├── inputValidation.ts   # Validação e sanitização de inputs
│   │       └── rateLimiter.ts       # Rate limiter client-side
│   ├── styles/
│   │   ├── index.css                # Entry point dos estilos
│   │   ├── tailwind.css             # Config Tailwind
│   │   └── theme.css                # Variáveis CSS do tema
│   ├── main.tsx                     # Entry point da aplicação
│   └── vite-env.d.ts                # TypeScript declarations do Vite
├── .env.example                     # Template de variáveis de ambiente
├── .gitignore                       # Ficheiros ignorados pelo Git
├── .npmrc                           # Segurança npm (supply-chain)
├── .prettierrc                      # Config Prettier
├── DEPLOY.md                        # Checklist de deploy
├── eslint.config.js                 # Config ESLint + regras de segurança
├── index.html                       # HTML principal (com meta CSP)
├── netlify.toml                     # Config deploy Netlify
├── package.json                     # Dependências e scripts
├── tsconfig.json                    # Config TypeScript
├── vercel.json                      # Config deploy Vercel
├── vite.config.ts                   # Config Vite + aliases
└── vitest.setup.ts                  # Setup dos testes
```

---

## 🔒 Segurança

O projeto segue as **melhores práticas OWASP** para aplicações web. Abaixo estão todas as medidas implementadas:

### Security Headers (Netlify + Vercel)

| Header | Valor | Proteção |
|---|---|---|
| `Content-Security-Policy` | Restringe origens de scripts, estilos, imagens, frames | XSS, injeção de código |
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains; preload` | Força HTTPS |
| `X-Frame-Options` | `DENY` | Clickjacking |
| `X-Content-Type-Options` | `nosniff` | MIME sniffing |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Fuga de informação |
| `Permissions-Policy` | Bloqueia câmara, microfone, geolocalização, pagamentos, USB, sensores, FLoC | Abuso de APIs do browser |
| `Cross-Origin-Opener-Policy` | `same-origin` | Ataques Spectre |
| `Cross-Origin-Resource-Policy` | `same-origin` | Ataques Spectre |
| `X-DNS-Prefetch-Control` | `off` | DNS prefetch a domínios externos |
| `X-XSS-Protection` | `1; mode=block` | XSS (browsers legacy) |

### Content Security Policy (CSP) detalhada

```
default-src 'self';
script-src 'self';
style-src 'self' 'unsafe-inline';
img-src 'self' data: https://images.unsplash.com https://lh3.googleusercontent.com;
font-src 'self' data:;
frame-src https://www.google.com/maps/;
connect-src 'self';
object-src 'none';
base-uri 'self';
form-action 'self';
frame-ancestors 'none';
upgrade-insecure-requests;
require-trusted-types-for 'script';
```

### Rate Limiting (Client-Side)

Módulo em `src/lib/security/rateLimiter.ts`:
- **Sliding window** por chave (ação / utilizador)
- `contactFormLimiter` — 5 pedidos por minuto
- `apiLimiter` — 30 pedidos por minuto
- Retorna `allowed`, `remaining` e `retryAfterMs` para UX (estilo HTTP 429)

```typescript
import { contactFormLimiter } from '@/lib/security';

const result = contactFormLimiter.check('contact-form');
if (!result.allowed) {
  alert(`Tente novamente em ${Math.ceil(result.retryAfterMs! / 1000)}s`);
}
```

### Validação & Sanitização de Inputs

Módulo em `src/lib/security/inputValidation.ts`:

| Função | Descrição |
|---|---|
| `sanitizeString()` | Remove HTML/XSS via DOMPurify (ALLOWED_TAGS vazio) |
| `sanitizeHtml()` | Permite subset seguro de tags (b, i, a, p, ul, etc.) |
| `escapeHtml()` | Codifica `&<>"'/` para entidades HTML |
| `validateString()` | Verifica tipo + comprimento mínimo/máximo |
| `validateEmail()` | Regex RFC 5322 simplificado + limite 254 chars |
| `validatePhone()` | Formato português (+351 / 9 dígitos) |
| `validateContactForm()` | Schema-based: valida todos os campos, **rejeita campos inesperados** |

```typescript
import { validateContactForm } from '@/lib/security';

const result = validateContactForm({ name: 'Maria', email: 'maria@test.com', message: 'Olá!' });
if (!result.valid) console.error(result.errors);
// result.sanitized contém os dados limpos
```

### Outras Medidas

| Medida | Ficheuro | Descrição |
|---|---|---|
| **DOMPurify** | `inputValidation.ts` | Sanitização robusta de HTML (referência da indústria) |
| **Trusted Types** | CSP header | Previne DOM-based XSS |
| **Iframe sandbox** | `ContactSection.tsx` | Google Maps restrito a `allow-scripts allow-same-origin allow-popups` |
| **security.txt** | `public/.well-known/security.txt` | Divulgação responsável de vulnerabilidades (RFC 9116) |
| **eslint-plugin-security** | `eslint.config.js` | Deteta `eval`, regex inseguros, timing attacks |
| **.npmrc hardening** | `.npmrc` | `ignore-scripts`, `save-exact`, `audit=true` |
| **Cache-Control** | Headers | `no-store` no HTML, `immutable` nos assets |
| **Meta CSP fallback** | `index.html` | CSP via `<meta>` caso os headers do servidor falhem |
| **.gitignore** | `.gitignore` | Todos os `.env.*` ignorados (exceto `.env.example`) |
| **Zero dangerouslySetInnerHTML** | Codebase | Auditado — nenhum uso de `dangerouslySetInnerHTML`, `eval`, `innerHTML` |

---

## 🚀 Começar

### Pré-requisitos

- **Node.js** ≥ 18
- **npm** ≥ 9

### Instalação

```bash
# 1. Clonar o repositório
git clone https://github.com/timimata/websiteFarmacia.git
cd websiteFarmacia

# 2. Copiar as variáveis de ambiente
cp .env.example .env

# 3. Instalar dependências (nota: ignore-scripts está ativo no .npmrc)
npm install --ignore-scripts

# 4. Iniciar o servidor de desenvolvimento
npm run dev
```

O site estará disponível em **http://localhost:5173/**

---

## 📜 Scripts Disponíveis

| Script | Comando | Descrição |
|---|---|---|
| `dev` | `npm run dev` | Servidor de desenvolvimento (Vite) |
| `build` | `npm run build` | Build de produção para `dist/` |
| `preview` | `npm run preview` | Preview local do build de produção |
| `test` | `npm test` | Correr testes (Vitest) |
| `test:watch` | `npm run test:watch` | Testes em modo watch |
| `lint` | `npm run lint` | ESLint (inclui regras de segurança) |
| `format` | `npm run format` | Formatar código com Prettier |

---

## 🌐 Deploy

O projeto está preparado para deploy em **Netlify** e **Vercel**:

- **Netlify** → configurado em `netlify.toml`
- **Vercel** → configurado em `vercel.json`

Ambos incluem:
- Build automático (`npm run build`)
- SPA routing (redirect para `index.html`)
- Security headers completos
- Cache otimizado (assets imutáveis, HTML sem cache)

Consulta o [DEPLOY.md](DEPLOY.md) para a checklist completa de pré-deploy.

### Variáveis de Ambiente

| Variável | Descrição | Obrigatória |
|---|---|---|
| `VITE_SITE_URL` | URL do site em produção (sem `/` final) | Sim |

> ⚠️ **Nunca** prefixes segredos (API keys, tokens) com `VITE_` — essas variáveis são expostas no bundle do cliente.

---

## 👤 Autor

**Tiago Machado** — [@timimata](https://github.com/timimata)

---

## 📄 Licença

Todos os direitos reservados © 2026 Farmácia Ascensão Nunes.
