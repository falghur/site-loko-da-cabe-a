# Design system — Prime Motors

**Direção aprovada:** Direção 2 — campanha em percurso, com títulos reforçados pela tipografia editorial da Direção 1. Os valores comerciais e o nome Prime Motors permanecem demonstrativos e provisórios.

## Identidade e conteúdo

- “Prime Motors” é nome provisório. O monograma P é uma identificação tipográfica temporária, não um logotipo oficial.
- A interface é em português brasileiro. Valores monetários, quando definidos, usam BRL.
- Veículos, valores, especificações e contatos são demonstrativos; não representam estoque, ofertas ou condições comerciais.
- Fotos atmosféricas aparecem como imagens ilustrativas e não correspondem aos veículos demonstrativos nem representam associação com a concessionária.
- Não criar depoimentos, marcas parceiras, avaliações, funcionalidades ou dados comerciais sem fonte e autorização.

## Direção visual aprovada

- O hero fotográfico em tela ampla, a trilha de seções, a composição editorial e a faixa institucional com fotografia seguem a Direção 2.
- O hero e a faixa institucional usam tratamento escuro localizado para manter contraste sobre as fotos. A área de veículos e a área de diferenciais usam superfícies claras para preservar respiro, leitura e apresentação comercial.
- Títulos principais usam uma família serifada de sistema, em escala ampla e peso moderado, com itálico para dar ênfase. Textos, navegação e dados usam uma família sem serifa de sistema.
- Os cards usam fundo claro, borda fina, sombra discreta e ilustrações demonstrativas em destaque. Cor de ênfase em terracota e lilás suave; não usar vermelho de alerta como cor principal.
- Não são necessárias fontes externas nem dependências adicionais.

## Tokens visuais

Os tokens são definidos em `src/styles/global.css` e devem ser preferidos a valores isolados em novos componentes.

| Token | Valor | Uso |
| --- | --- | --- |
| `--color-page` | `#f4f1eb` | Fundo principal e seção de veículos |
| `--color-page-soft` | `#ebe7df` | Seção de diferenciais |
| `--color-surface` | `#fcfbf8` | Superfície base de cards e controles claros |
| `--color-surface-raised` | `#ffffff` | Cards de veículos |
| `--color-ink` | `#28272c` | Texto principal sobre fundo claro |
| `--color-ink-soft` | `#4e4d52` | Texto secundário de alto contraste |
| `--color-muted` | `#69686c` | Texto auxiliar sobre superfícies claras |
| `--color-muted-on-dark` | `#d1cfd4` | Texto auxiliar sobre fundo escuro |
| `--color-accent` | `#a76b50` | Ênfase, links e numeração sobre fundo claro |
| `--color-accent-bright` | `#c08465` | Ênfase sobre fundo escuro |
| `--color-lilac` | `#dcc5e8` | Itálico de títulos sobre fotografia |
| `--color-night` | `#201f25` | Rodapé |
| `--color-line` | `#d9d4cb` | Bordas e divisores claros |
| `--color-line-on-dark` | `rgb(255 255 255 / 21%)` | Divisores sobre fundos escuros |
| `--font-body` | Aptos, Segoe UI, Roboto, Arial | Corpo, navegação, cards e controles |
| `--font-display` | Georgia, Times New Roman, serif | Títulos principais |
| `--content-width` | `1280px` | Largura máxima de seções internas |
| `--container-gutter` | `clamp(22px, 6vw, 88px)` | Margens laterais fluidas |
| `--space-section` | `clamp(82px, 9vw, 132px)` | Respiro vertical das seções |
| `--motion-fast` | `180ms ease` | Estados breves de links e controles |
| `--motion-medium` | `320ms ease` | Elevação e destaque dos cards |

## Regras de interface e acessibilidade

- Usar HTML semântico, hierarquia de títulos coerente, rótulos associados e nomes acessíveis para controles.
- Garantir navegação por teclado, indicador de foco visível e contraste de texto normal de pelo menos 4,5:1.
- Corpo de texto com pelo menos 14 px (16 px em interfaces mobile); rótulos com pelo menos 12 px; alvos interativos de pelo menos 44 × 44 px.
- Respeitar `prefers-reduced-motion`; movimento deve ser discreto e não carregar informação essencial.
- Validar layouts em 375, 768, 1024 e 1440 px e garantir ausência de rolagem horizontal não intencional.
- Interfaces devem continuar funcionais sem imagens externas; assets usados precisam ter origem e licença documentadas.

## Implementação e evolução

- O site ativo usa Astro, TypeScript strict, geração estática e conteúdo tipado em `src/data/`.
- Componentes compartilhados ficam em `src/components/`; o layout base fica em `src/layouts/`.
- Imagens fotográficas aprovadas para a homepage ficam em `public/images/`; fontes e licença estão em `design-demos/ASSET_SOURCES.md`.
- Mudanças futuras devem atualizar este arquivo e validar tipos, build, teclado, movimento reduzido e telas responsivas.
