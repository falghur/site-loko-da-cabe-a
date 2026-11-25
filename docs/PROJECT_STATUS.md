# Estado do projeto

## GOAL 00 — Fundação do projeto

- **Status:** concluído em 2026-11-23.
- **Escopo:** regras permanentes, documentação inicial e estrutura estática sem recursos comerciais.

## GOAL 01 — Homepage demonstrativa

- **Status:** concluído em 2026-11-23.
- **Escopo:** homepage responsiva com nome Prime Motors provisório; navegação, hero, três veículos demonstrativos, diferenciais, apresentação institucional e rodapé.
- **Nota:** a implementação original foi preservada nos arquivos legados durante a migração para Astro.

## GOAL 01.1 — Migração Astro e identidade visual

- **Status:** migração técnica concluída; propostas visuais apresentadas; aguardando a escolha da usuária para finalizar a identidade de produção.
- **Stack:** Astro 7.4.13, TypeScript 6.0.3 em configuração strict, Node.js 26.13.1 LTS; saída estática em `dist/`.
- **Arquitetura:** página Astro, layout, componentes, dados e tipos em `src/`; imagens servidas de `public/`. Nenhum backend, banco de dados ou recurso comercial foi adicionado.
- **Validação da migração:** `npm run check` passou sem erros, avisos ou dicas; `npm run build` concluiu com sucesso e gerou `dist/index.html`.
- **Validação no servidor de desenvolvimento:** em 375, 768, 1024 e 1440 px não houve overflow horizontal, imagem quebrada, título cortado, âncora sem destino ou erro de console. O menu mobile abriu, fechou com Escape e restaurou foco; links de navegação também o fecharam.
- **Propostas:** três páginas completas em `design-demos/`, cada uma com screenshot de primeira tela e página completa em desktop e mobile. A revisão em Edge/Playwright verificou larguras de 320, 375, 390, 768, 1024 e 1440 px, sem overflow horizontal, erros de console, imagens quebradas ou títulos cortados. Auditoria extra ajustou alvos interativos para 44 × 44 px e parágrafos para 14 px no desktop/16 px no mobile. Os JPG originais das fotos foram preservados; os protótipos usam derivados WebP com 44% menos bytes no conjunto.
- **Limitação das ferramentas visuais:** os scripts Python `design_lint.py check/compare` e `polish.py shot` não executaram porque Playwright/Pillow de Python não estão instalados. A revisão e as capturas foram feitas no Edge por Playwright de Node; o ledger sem histórico passou.
- **Pendência:** a usuária deve escolher uma das três direções. Depois disso, integrar a escolhida à homepage Astro, finalizar `docs/DESIGN_SYSTEM.md` com seus tokens e executar a validação final.
- **Comandos para executar em uma instalação nova:** `npm install` e `npm run dev`.

## Fora do escopo

Catálogo operacional, negociação, painel administrativo, API, backend, banco de dados, publicação e GOAL 02 não foram iniciados.
