import { Meal, AllergenType } from "../../types/diet.types";

export const cuttingPostWorkout: Meal[] = [
  {
    title: "Pós-Treino 1",
    content: `
- 2 scoops whey protein (240 kcal)
- 40g aveia em flocos (150 kcal)
- 1 banana (105 kcal)
Total: ~495 kcal
Proteína: 52g | Carboidratos: 50g | Gorduras: 6g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.GLUTEN]),
    calories: 495,
    protein: 52,
    carbs: 50,
    fats: 6,
  },
  {
    title: "Pós-Treino 2",
    content: `
- 3 claras + 1 ovo inteiro (155 kcal)
- 150g de batata doce (135 kcal)
- 1 banana (105 kcal)
Total: ~395 kcal
Proteína: 25g | Carboidratos: 45g | Gorduras: 12g`,
    allergens: new Set([AllergenType.EGGS]),
    calories: 395,
    protein: 25,
    carbs: 45,
    fats: 12,
  },
  {
    title: "Pós-Treino Hipoalergênico 1",
    content: `
- 150g de batata doce (135 kcal)
- 180g de frango grelhado (297 kcal)
- 1 banana (105 kcal)
Total: ~537 kcal
Proteína: 42g | Carboidratos: 75g | Gorduras: 8g`,
    allergens: new Set([]),
    calories: 537,
    protein: 42,
    carbs: 75,
    fats: 8,
  },
  {
    title: "Pós-Treino Hipoalergênico 2",
    content: `
- 150g de arroz branco (195 kcal)
- 150g de carne magra (255 kcal)
- 80g de mandioca cozida (96 kcal)
Total: ~546 kcal
Proteína: 38g | Carboidratos: 75g | Gorduras: 10g`,
    allergens: new Set([]),
    calories: 546,
    protein: 38,
    carbs: 75,
    fats: 10,
  },
];
