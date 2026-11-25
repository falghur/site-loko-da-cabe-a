# Regras do projeto

## Objetivo e escopo

- Este projeto é um site profissional de concessionária, com catálogo público, negociação e painel administrativo planejados para etapas futuras.
- Não invente requisitos, dados de veículos, marcas, preços ou conteúdo comercial. Confirme requisitos ausentes antes de implementá-los.
- Implemente somente o objetivo solicitado. Não avance para outro GOAL automaticamente.
- Não altere arquivos fora do escopo autorizado.

## Implementação

- O frontend ativo usa Astro, TypeScript strict e geração estática. A fonte da página está em `src/`; arquivos servidos sem processamento ficam em `public/`.
- Mantenha componentes reutilizáveis, código legível, tipado, seguro e responsivo.
- Escreva textos voltados ao usuário em português brasileiro e use reais (BRL) quando houver valores definidos.
- Use identificadores de código em inglês.
- Evite dependências desnecessárias e não instale pacotes sem necessidade para o objetivo atual.
- Não implemente recursos comerciais, administrativos, backend ou banco de dados sem solicitação explícita para a etapa correspondente.
- Preserve `index.html`, `css/`, `js/` e `assets/` legados até que a equivalência esteja validada e sua remoção seja necessária e autorizada pelo escopo.
- Nunca exponha credenciais. Segredos e arquivos locais de ambiente não devem ser versionados.

## Design e acessibilidade

- Consulte `docs/DESIGN_SYSTEM.md` antes de criar ou alterar interfaces.
- As três propostas em `design-demos/` ainda aguardam escolha. Não incorpore uma delas à interface Astro de produção até a usuária selecionar uma direção.
- Marque claramente nome, conteúdo, preços e imagens demonstrativos; não os apresente como estoque ou ofertas reais.
- Preserve HTML semântico, navegação por teclado, foco visível, contraste legível, responsividade e `prefers-reduced-motion`.
- Use imagens com origem e licença documentadas; fotos atmosféricas não devem sugerir associação com dados demonstrativos.

## Documentação e entrega

- Mantenha o README alinhado à arquitetura e às instruções reais de execução.
- Atualize `docs/PROJECT_STATUS.md` ao finalizar cada GOAL, registrando escopo, validação e pendências.
- Valide as alterações pertinentes com `npm run check` e `npm run build` e informe o que foi validado.
- Não execute commit, push, merge ou deploy sem autorização explícita.
