import type { Benefit } from "../types/benefit";

export const benefits = [
  {
    title: "Veículos selecionados",
    description:
      "Uma curadoria pensada para destacar qualidade e ajudar você a escolher com confiança.",
    icon: "selection",
  },
  {
    title: "Transparência na negociação",
    description:
      "Informações apresentadas com clareza para que cada etapa seja mais simples de entender.",
    icon: "transparency",
  },
  {
    title: "Atendimento personalizado",
    description:
      "Uma conversa próxima, orientada pelas suas necessidades e pelo seu momento.",
    icon: "personalized-service",
  },
  {
    title: "Possibilidade de financiamento",
    description:
      "Este espaço ilustra como alternativas de financiamento poderão ser apresentadas.",
    icon: "financing",
    label: "Conteúdo demonstrativo",
    demonstration: true,
  },
] satisfies Benefit[];
