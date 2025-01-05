import { Meal, AllergenType } from "../../types/diet.types";

export const cuttingDinner: Meal[] = [
  {
    title: "Jantar 1",
    content: `
- 180g de frango grelhado (297 kcal)
- 100g de macarrão integral (130 kcal)
- Molho de tomate caseiro (50 kcal)
- Legumes salteados (80 kcal)
Total: ~557 kcal
Proteína: 52g | Carboidratos: 55g | Gorduras: 15g`,
    allergens: new Set([AllergenType.GLUTEN]),
    calories: 557,
    protein: 52,
    carbs: 55,
    fats: 15,
  },
  {
    title: "Jantar 2",
    content: `
- 180g de peixe branco (198 kcal)
- 150g de quinoa (166 kcal)
- Legumes assados (120 kcal)
- Azeite de oliva (60 kcal)
Total: ~544 kcal
Proteína: 48g | Carboidratos: 50g | Gorduras: 20g`,
    allergens: new Set([AllergenType.SEAFOOD]),
    calories: 544,
    protein: 48,
    carbs: 50,
    fats: 20,
  },
  {
    title: "Jantar 3",
    content: `
- 3 claras + 1 ovo inteiro (155 kcal)
- 150g de batata doce (135 kcal)
- Legumes refogados (80 kcal)
- 50g de abacate (80 kcal)
Total: ~450 kcal
Proteína: 28g | Carboidratos: 45g | Gorduras: 20g`,
    allergens: new Set([AllergenType.EGGS]),
    calories: 450,
    protein: 28,
    carbs: 45,
    fats: 20,
  },
  {
    title: "Jantar Hipoalergênico 1",
    content: `
- 180g de carne magra (306 kcal)
- 150g de arroz integral (162 kcal)
- Legumes variados (100 kcal)
Total: ~568 kcal
Proteína: 45g | Carboidratos: 50g | Gorduras: 15g`,
    allergens: new Set([]),
    calories: 568,
    protein: 45,
    carbs: 50,
    fats: 15,
  },
];
