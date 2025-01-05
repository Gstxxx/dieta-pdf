import { Meal, AllergenType } from "../../types/diet.types";

export const bulkingSupper: Meal[] = [
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
];
