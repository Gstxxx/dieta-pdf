import { Meal, AllergenType } from "../../types/diet.types";

export const bulkingAfternoonSnack: Meal[] = [
  {
    title: "Lanche da Tarde 1",
    content: `
- 1 scoop whey protein (120 kcal)
- 2 bananas (210 kcal)
- 50g de aveia em flocos (185 kcal)
Total: ~515 kcal
Proteína: 30g | Carboidratos: 80g | Gorduras: 8g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.GLUTEN]),
    calories: 515,
    protein: 30,
    carbs: 80,
    fats: 8,
  },
  {
    title: "Lanche da Tarde 2",
    content: `
- 4 ovos cozidos (280 kcal)
- 2 fatias de pão integral (160 kcal)
- 1 maçã (95 kcal)
Total: ~535 kcal
Proteína: 32g | Carboidratos: 45g | Gorduras: 24g`,
    allergens: new Set([AllergenType.EGGS, AllergenType.GLUTEN]),
    calories: 535,
    protein: 32,
    carbs: 45,
    fats: 24,
  },
  {
    title: "Lanche da Tarde Hipoalergênico 1",
    content: `
- 150g de batata doce (135 kcal)
- 150g de frango desfiado (247 kcal)
- 1 banana (105 kcal)
Total: ~487 kcal
Proteína: 35g | Carboidratos: 65g | Gorduras: 7g`,
    allergens: new Set([]),
    calories: 487,
    protein: 35,
    carbs: 65,
    fats: 7,
  },
  {
    title: "Lanche da Tarde Hipoalergênico 2",
    content: `
- 150g de arroz integral (162 kcal)
- 120g de carne magra (204 kcal)
- 100g de abacate (160 kcal)
Total: ~526 kcal
Proteína: 28g | Carboidratos: 55g | Gorduras: 25g`,
    allergens: new Set([]),
    calories: 526,
    protein: 28,
    carbs: 55,
    fats: 25,
  },
  {
    title: "Lanche da Tarde 3",
    content: `
- 1 pote de iogurte grego (130 kcal)
- 30g de granola (150 kcal)
- 2 colheres de pasta de amendoim (190 kcal)
Total: ~470 kcal
Proteína: 28g | Carboidratos: 35g | Gorduras: 28g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 470,
    protein: 28,
    carbs: 35,
    fats: 28,
  },
  {
    title: "Lanche da Tarde 4",
    content: `
- 2 fatias de pão de forma (160 kcal)
- 2 fatias de queijo mussarela (160 kcal)
- 1 mamão papaya médio (170 kcal)
Total: ~490 kcal
Proteína: 25g | Carboidratos: 55g | Gorduras: 20g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.GLUTEN]),
    calories: 490,
    protein: 25,
    carbs: 55,
    fats: 20,
  },
  {
    title: "Lanche da Tarde Hipoalergênico 3",
    content: `
- 200g de mandioca cozida (240 kcal)
- 100g de atum em água (116 kcal)
- 1 laranja (140 kcal)
Total: ~496 kcal
Proteína: 32g | Carboidratos: 70g | Gorduras: 8g`,
    allergens: new Set([]),
    calories: 496,
    protein: 32,
    carbs: 70,
    fats: 8,
  },
  {
    title: "Lanche da Tarde Hipoalergênico 4",
    content: `
- 100g de inhame cozido (116 kcal)
- 150g de carne moída magra (255 kcal)
- 1 manga (134 kcal)
Total: ~505 kcal
Proteína: 33g | Carboidratos: 58g | Gorduras: 15g`,
    allergens: new Set([]),
    calories: 505,
    protein: 33,
    carbs: 58,
    fats: 15,
  },
];
