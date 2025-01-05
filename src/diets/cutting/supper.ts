import { Meal, AllergenType } from "../../types/diet.types";

export const cuttingSupper: Meal[] = [
  {
    title: "Ceia 1",
    content: `
- 1 scoop caseína (120 kcal)
- 200ml de leite desnatado (70 kcal)
- 15g de pasta de amendoim (90 kcal)
Total: ~280 kcal
Proteína: 32g | Carboidratos: 10g | Gorduras: 12g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 280,
    protein: 32,
    carbs: 10,
    fats: 12,
  },
  {
    title: "Ceia 2",
    content: `
- 200g de iogurte grego (120 kcal)
- 20g de granola (80 kcal)
- 1 colher de mel (30 kcal)
Total: ~230 kcal
Proteína: 18g | Carboidratos: 30g | Gorduras: 8g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 230,
    protein: 18,
    carbs: 30,
    fats: 8,
  },
  {
    title: "Ceia Hipoalergênica 1",
    content: `
- 100g de batata doce (90 kcal)
- 120g de frango desfiado (198 kcal)
- Legumes cozidos (50 kcal)
Total: ~338 kcal
Proteína: 32g | Carboidratos: 35g | Gorduras: 6g`,
    allergens: new Set([]),
    calories: 338,
    protein: 32,
    carbs: 35,
    fats: 6,
  },
  {
    title: "Ceia Hipoalergênica 2",
    content: `
- 80g de arroz integral (86 kcal)
- 100g de carne magra (170 kcal)
- 30g de abacate (48 kcal)
Total: ~304 kcal
Proteína: 22g | Carboidratos: 25g | Gorduras: 12g`,
    allergens: new Set([]),
    calories: 304,
    protein: 22,
    carbs: 25,
    fats: 12,
  },
];
