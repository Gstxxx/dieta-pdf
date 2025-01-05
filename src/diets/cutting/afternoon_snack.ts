import { Meal, AllergenType } from "../../types/diet.types";

export const cuttingAfternoonSnack: Meal[] = [
  {
    title: "Lanche da Tarde 1",
    content: `
- 1 scoop whey protein (120 kcal)
- 1 banana (105 kcal)
- 30g de aveia em flocos (111 kcal)
Total: ~336 kcal
Proteína: 28g | Carboidratos: 45g | Gorduras: 5g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.GLUTEN]),
    calories: 336,
    protein: 28,
    carbs: 45,
    fats: 5,
  },
  {
    title: "Lanche da Tarde 2",
    content: `
- 3 claras + 1 ovo inteiro (155 kcal)
- 1 fatia de pão integral (80 kcal)
- 1 maçã (95 kcal)
Total: ~330 kcal
Proteína: 25g | Carboidratos: 30g | Gorduras: 12g`,
    allergens: new Set([AllergenType.EGGS, AllergenType.GLUTEN]),
    calories: 330,
    protein: 25,
    carbs: 30,
    fats: 12,
  },
  {
    title: "Lanche da Tarde Hipoalergênico 1",
    content: `
- 100g de batata doce (90 kcal)
- 120g de frango desfiado (198 kcal)
- 1 tangerina (40 kcal)
Total: ~328 kcal
Proteína: 32g | Carboidratos: 35g | Gorduras: 5g`,
    allergens: new Set([]),
    calories: 328,
    protein: 32,
    carbs: 35,
    fats: 5,
  },
  {
    title: "Lanche da Tarde Hipoalergênico 2",
    content: `
- 100g de arroz integral (108 kcal)
- 100g de carne magra (170 kcal)
- 50g de abacate (80 kcal)
Total: ~358 kcal
Proteína: 25g | Carboidratos: 35g | Gorduras: 15g`,
    allergens: new Set([]),
    calories: 358,
    protein: 25,
    carbs: 35,
    fats: 15,
  },
];
