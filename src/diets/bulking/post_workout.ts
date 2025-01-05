import { Meal, AllergenType } from "../../types/diet.types";

export const bulkingPostWorkout: Meal[] = [
  {
    title: "Pós-Treino 1",
    content: `
- 2 scoops whey protein (240 kcal)
- 60g aveia em flocos (225 kcal)
- 1 banana (105 kcal)
- 1 colher de mel (60 kcal)
Total: ~630 kcal
Proteína: 54g | Carboidratos: 65g | Gorduras: 8g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.GLUTEN]),
    calories: 630,
    protein: 54,
    carbs: 65,
    fats: 8,
  },
  {
    title: "Pós-Treino 2",
    content: `
- 4 ovos inteiros (280 kcal)
- 200g de batata doce (180 kcal)
- 1 banana (105 kcal)
Total: ~565 kcal
Proteína: 28g | Carboidratos: 55g | Gorduras: 20g`,
    allergens: new Set([AllergenType.EGGS]),
    calories: 565,
    protein: 28,
    carbs: 55,
    fats: 20,
  },
];
