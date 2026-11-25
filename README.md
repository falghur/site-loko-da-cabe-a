# Prime Motors

Homepage demonstrativa de uma concessionária. **Prime Motors é um nome provisório**; veículos, características, preços, contatos e fotografias são ilustrativos e não representam estoque, ofertas ou dados comerciais reais.

## Arquitetura

- **Frontend:** Astro com TypeScript estrito e geração estática (`output: "static"`).
- **Página:** `src/pages/index.astro`, com estrutura reutilizável em `src/layouts/` e `src/components/`.
- **Conteúdo tipado:** `src/data/` e `src/types/`.
- **Comportamento e estilos:** `src/scripts/` e `src/styles/`.
- **Imagens da aplicação:** ilustrações demonstrativas e fotos atmosféricas em `public/images/`; fontes em `design-demos/ASSET_SOURCES.md`.
- **Saída de produção:** `dist/`.
- **Backend e banco de dados:** não implementados.

Os arquivos de origem anteriores (`index.html`, `css/`, `js/` e `assets/`) foram preservados durante a migração. O Astro usa `src/` e `public/` como fonte ativa.

## Requisitos

Node.js `>=22.23.4` e npm. As versões e as fontes técnicas consultadas estão registradas em [`product-facts.md`](product-facts.md).

## Executar localmente

```bash
npm install
npm run dev
```

O Astro informa o endereço local no terminal, normalmente `http://localhost:4321`.

## Validar e gerar

```bash
npm run check
npm run build
npm run preview
```

`npm run check` executa a verificação de tipos e diagnósticos Astro. `npm run build` gera a versão estática em `dist/`; `npm run preview` serve essa saída localmente.

## Propostas visuais

As três propostas completas e seus screenshots de avaliação estão em [`design-demos/`](design-demos/README.md) e [`directions.md`](directions.md). A Direção 2 foi aprovada e consolidada na homepage Astro, com títulos editoriais reforçados e áreas claras para veículos e diferenciais. O estado e as pendências estão em [`docs/PROJECT_STATUS.md`](docs/PROJECT_STATUS.md); os tokens e princípios aprovados estão em [`docs/DESIGN_SYSTEM.md`](docs/DESIGN_SYSTEM.md).
