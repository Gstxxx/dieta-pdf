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
];
