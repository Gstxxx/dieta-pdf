import { Meal, AllergenType } from "../../types/diet.types";

export const maintenanceSupper: Meal[] = [
  {
    title: "Ceia 1",
    content: `
- 1 scoop caseína (120 kcal)
- 200ml de leite integral (122 kcal)
- 30g de pasta de amendoim (180 kcal)
Total: ~422 kcal
Proteína: 35g | Carboidratos: 15g | Gorduras: 22g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 422,
    protein: 35,
    carbs: 15,
    fats: 22,
  },
  {
    title: "Ceia 2",
    content: `
- 250g de iogurte grego (150 kcal)
- 40g de granola (160 kcal)
- 1 colher de mel (60 kcal)
Total: ~370 kcal
Proteína: 20g | Carboidratos: 45g | Gorduras: 15g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 370,
    protein: 20,
    carbs: 45,
    fats: 15,
  },
  {
    title: "Ceia Hipoalergênica 1",
    content: `
- 150g de batata doce (135 kcal)
- 150g de frango desfiado (247 kcal)
- Legumes cozidos (50 kcal)
Total: ~432 kcal
Proteína: 35g | Carboidratos: 45g | Gorduras: 8g`,
    allergens: new Set([]),
    calories: 432,
    protein: 35,
    carbs: 45,
    fats: 8,
  },
  {
    title: "Ceia Hipoalergênica 2",
    content: `
- 100g de arroz integral (108 kcal)
- 120g de carne magra (204 kcal)
- 50g de abacate (80 kcal)
Total: ~392 kcal
Proteína: 25g | Carboidratos: 35g | Gorduras: 18g`,
    allergens: new Set([]),
    calories: 392,
    protein: 25,
    carbs: 35,
    fats: 18,
  },
];
