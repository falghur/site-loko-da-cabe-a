# Registro de revisão visual — GOAL 01.1

Cada proposta recebeu uma rodada de revisão visual em desktop e mobile. A revisão foi feita nas capturas atuais com Microsoft Edge e Playwright para Node; as versões Python de Playwright/Pillow exigidas pelos scripts da skill não estavam instaladas, então `polish.py shot` e `design_lint.py check/compare` foram pulados. As capturas finais estão em `design-demos/screenshots/`.

## dir-1.html · 第 1 轮

### 最伤的三处

1. Os rótulos de apoio estavam abaixo do mínimo legível de 12 px.
2. Os textos sobre as ilustrações dos veículos não tinham base visual suficiente e perdiam contraste.
3. No mobile, o hero ocupava espaço demais e empurrava a ação principal para fora da primeira tela.

### 这一轮改了什么

- Elevados os rótulos pequenos para 12 px e adicionada uma base de contraste aos rótulos das imagens.
- Enxugada a composição do hero mobile para deixar o CTA visível mais cedo.
- Capturas finais: `screenshots/dir-1.png`, `screenshots/dir-1-full.png`, `screenshots/dir-1-mobile.png`, `screenshots/dir-1-mobile-full.png`.

## dir-2.html · 第 1 轮

### 最伤的三处

1. O título do hero não preservava uma quebra curta e perdia força sobre a fotografia.
2. Um segundo cabeçalho repetia a navegação logo após o hero.
3. Rótulos pequenos e textos sobre as ilustrações precisavam de tamanho e contraste melhores.

### 这一轮改了什么

- Ajustada a largura e a escala do título para manter a frase em duas linhas.
- Removido o cabeçalho duplicado após o hero.
- Elevados os rótulos para 12 px e incluída uma base de contraste nos rótulos das imagens.
- Reposicionado o aviso demonstrativo vertical no mobile como uma faixa horizontal acima do texto, evitando que cruze o título.
- Capturas finais: `screenshots/dir-2.png`, `screenshots/dir-2-full.png`, `screenshots/dir-2-mobile.png`, `screenshots/dir-2-mobile-full.png`.

## dir-3.html · 第 1 轮

### 最伤的三处

1. O título principal extrapolava sua área e ficava cortado nas larguras desktop e mobile.
2. Os rótulos menores ficavam abaixo do mínimo legível de 12 px.
3. Os rótulos colocados sobre a ilustração do veículo tinham contraste insuficiente.

### 这一轮改了什么

- Reduzida a escala do título para caber na grade sem cortes em desktop e mobile.
- Elevados os rótulos para 12 px e adicionada uma base de contraste nos rótulos das imagens.
- Capturas finais: `screenshots/dir-3.png`, `screenshots/dir-3-full.png`, `screenshots/dir-3-mobile.png`, `screenshots/dir-3-mobile-full.png`.

## Verificações da rodada

- Playwright/Edge em 320 × 760, 375 × 812, 390 × 844, 768 × 1024 e 1440 × 900: sem overflow horizontal, clipping de título, erro de console ou imagem quebrada.
- Auditoria adicional: alvos interativos com pelo menos 44 × 44 px; parágrafos de conteúdo com 14 px no desktop e 16 px no mobile; rótulos pequenos com pelo menos 12 px.
- `design_lint.py ledger check`: passou sem histórico anterior.
- `design_lint.py check/compare` e `polish.py shot`: não executados porque o runtime Python não tem Playwright/Pillow; revisão visual e screenshots foram feitos com Playwright de Node.
- Após a rodada visual, as três fotos carregadas foram convertidas para WebP e as capturas foram atualizadas; os JPG originais permanecem preservados.
