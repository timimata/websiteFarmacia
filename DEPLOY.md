# Deploy Checklist — Farmácia Ascensão Nunes

## Pré-deploy (antes de publicar)

- [ ] Definir o domínio real em `.env` → `VITE_SITE_URL=https://www.farmaciaascensaonunes.pt`
- [ ] Atualizar `public/robots.txt` → linha `Sitemap:` com o domínio real
- [ ] Atualizar `public/sitemap.xml` → `<loc>` com o domínio real
- [ ] Substituir `public/og-image.svg` por uma imagem PNG real (1200×630px) e atualizar referências em `index.html`
- [ ] Verificar que `npm run build` passa sem erros
- [ ] Verificar que `npm run lint` passa sem warnings
- [ ] Verificar que `npm run test` passa (3/3)
- [ ] Verificar que `npm audit` mostra 0 vulnerabilidades

## Deploy no Netlify (recomendado)

1. Criar conta em [netlify.com](https://netlify.com)
2. "Add new site" → "Import an existing project"
3. Conectar repositório GitHub/GitLab
4. Build settings já estão no `netlify.toml` (automático)
5. Em **Site settings → Environment variables**, adicionar:
   - `VITE_SITE_URL` = `https://www.farmaciaascensaonunes.pt`
6. Em **Domain management**, adicionar domínio customizado
7. Ativar HTTPS (automático com Let's Encrypt)
8. Deploy!

## Deploy no Vercel (alternativa)

1. Criar conta em [vercel.com](https://vercel.com)
2. "New Project" → importar repositório
3. Framework é detetado automaticamente (Vite)
4. Em **Settings → Environment Variables**, adicionar:
   - `VITE_SITE_URL` = `https://www.farmaciaascensaonunes.pt`
5. Em **Settings → Domains**, adicionar domínio customizado
6. HTTPS é automático
7. Deploy!

## Deploy no GitHub Pages (gratuito)

1. Adicionar ao `vite.config.ts`: `base: '/nome-do-repo/'`
2. Criar `.github/workflows/deploy.yml` com GitHub Actions
3. Build: `npm run build`
4. Publicar conteúdo da pasta `dist/`
5. Nota: GitHub Pages não suporta SPA routing nativo — necessário `404.html` hack

## Pós-deploy

- [ ] Testar todas as secções no browser (desktop + mobile)
- [ ] Testar partilha da URL no WhatsApp/Facebook (verificar og:image + og:title)
- [ ] Verificar favicon na tab do browser
- [ ] Testar Google PageSpeed Insights (objetivo: 90+ performance)
- [ ] Submeter sitemap no [Google Search Console](https://search.google.com/search-console)
- [ ] Criar perfil no [Google Business Profile](https://business.google.com/) (essencial para SEO local)
- [ ] (Opcional) Configurar Google Analytics 4 ou Plausible Analytics
- [ ] (Opcional) Criar páginas de Política de Privacidade e Termos de Serviço
