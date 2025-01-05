import { Meal, AllergenType } from "../../types/diet.types";

export const cuttingMorningSnack: Meal[] = [
  {
    title: "Lanche da Manhã 1",
    content: `
- 1 iogurte grego (130 kcal)
- 20g de granola (80 kcal)
- 1 banana (105 kcal)
Total: ~315 kcal
Proteína: 18g | Carboidratos: 45g | Gorduras: 8g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 315,
    protein: 18,
    carbs: 45,
    fats: 8,
  },
  {
    title: "Lanche da Manhã 2",
    content: `
- 1 fatia de pão integral (80 kcal)
- 30g de pasta de amendoim (180 kcal)
- 1 maçã (95 kcal)
Total: ~355 kcal
Proteína: 15g | Carboidratos: 35g | Gorduras: 19g`,
    allergens: new Set([AllergenType.GLUTEN, AllergenType.NUTS]),
    calories: 355,
    protein: 15,
    carbs: 35,
    fats: 19,
  },
  {
    title: "Lanche da Manhã Hipoalergênico 1",
    content: `
- 1 banana (105 kcal)
- 100g de frango desfiado (165 kcal)
- 50g de batata doce (45 kcal)
Total: ~315 kcal
Proteína: 25g | Carboidratos: 40g | Gorduras: 4g`,
    allergens: new Set([]),
    calories: 315,
    protein: 25,
    carbs: 40,
    fats: 4,
  },
  {
    title: "Lanche da Manhã Hipoalergênico 2",
    content: `
- 150g de arroz branco (195 kcal)
- 80g de carne moída magra (136 kcal)
- 1 tangerina (40 kcal)
Total: ~371 kcal
Proteína: 18g | Carboidratos: 60g | Gorduras: 6g`,
    allergens: new Set([]),
    calories: 371,
    protein: 18,
    carbs: 60,
    fats: 6,
  },
];
