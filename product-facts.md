# Fatos técnicos — GOAL 01.1

Consulta registrada em 2026-11-23. Dados do site e informações comerciais não foram pesquisados ou inventados; permanecem demonstrativos.

| Fato | Registro no projeto | Fonte primária |
| --- | --- | --- |
| Node.js 26.13.1 | Runtime usado para a migração; release LTS publicada em 2026-11-11. | [Release oficial do Node.js 26.13.1](https://nodejs.org/en/blog/release/v26.13.1/) |
| Node.js mínimo | `package.json` define `>=22.23.4`, requisito atual do pacote Astro consultado. | [Manifesto oficial do Astro](https://github.com/withastro/astro/blob/main/packages/astro/package.json) |
| Astro 7.4.13 | Dependência no `package.json`; documentação oficial consultada identifica esta como a versão mais recente. | [Guia oficial de atualização do Astro](https://docs.astro.build/en/upgrade-astro/) |
| TypeScript 6.0.3 | Dependência no `package.json`; lockfile registra as versões instaladas. | [Documentação oficial de TypeScript do Astro](https://docs.astro.build/en/guides/typescript/) |
| TypeScript strict | `tsconfig.json` estende `astro/tsconfigs/strict`; Astro recomenda `strict` ou `strictest` para projetos TypeScript. | [Documentação oficial de TypeScript do Astro](https://docs.astro.build/en/guides/typescript/) |
| Saída estática | `astro.config.mjs` usa `output: "static"`. | [Visão geral oficial de configuração do Astro](https://docs.astro.build/en/guides/configuring-astro/) |

Os números de versão acima descrevem a instalação usada neste GOAL. Confira os requisitos atuais antes de atualizar a stack.
