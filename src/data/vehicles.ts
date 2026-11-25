import type { Vehicle } from "../types/vehicle";

/** Demonstrative content copied from the original homepage. */
export const vehicles = [
  {
    id: "sedan-executivo",
    make: "Marca demonstrativa",
    name: "Sedã Executivo",
    image: "vehicle-sedan.svg",
    imageAlt: "Ilustração demonstrativa de um sedã escuro.",
    year: 2024,
    mileage: 12_500,
    priceBrl: 189_900,
  },
  {
    id: "suv-premium",
    make: "Marca demonstrativa",
    name: "SUV Premium",
    image: "vehicle-suv.svg",
    imageAlt: "Ilustração demonstrativa de um SUV escuro.",
    year: 2023,
    mileage: 18_000,
    priceBrl: 219_900,
  },
  {
    id: "cupe-esportivo",
    make: "Marca demonstrativa",
    name: "Cupê Esportivo",
    image: "vehicle-coupe.svg",
    imageAlt: "Ilustração demonstrativa de um cupê esportivo escuro.",
    year: 2022,
    mileage: 24_500,
    priceBrl: 249_900,
  },
] satisfies Vehicle[];
