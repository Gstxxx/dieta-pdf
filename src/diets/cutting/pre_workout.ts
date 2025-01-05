import { Meal, AllergenType } from "../../types/diet.types";

export const cuttingPreWorkout: Meal[] = [
  {
    title: "Pré-Treino 1",
    content: `
- 1 banana média (105 kcal)
- 1 torrada integral com pasta de amendoim (200 kcal)
- 1 café preto
Total: ~305 kcal
Proteína: 10g | Carboidratos: 45g | Gorduras: 8g`,
    allergens: new Set([AllergenType.GLUTEN, AllergenType.NUTS]),
    calories: 305,
    protein: 10,
    carbs: 45,
    fats: 8,
  },
  {
    title: "Pré-Treino 2",
    content: `
- 40g de aveia em flocos (160 kcal)
- 1 scoop whey protein (120 kcal)
- 1 banana (105 kcal)
Total: ~385 kcal
Proteína: 28g | Carboidratos: 55g | Gorduras: 6g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.GLUTEN]),
    calories: 385,
    protein: 28,
    carbs: 55,
    fats: 6,
  },
  {
    title: "Pré-Treino Hipoalergênico 1",
    content: `
- 150g de batata doce (135 kcal)
- 100g de frango grelhado (165 kcal)
- 1 banana (105 kcal)
Total: ~405 kcal
Proteína: 28g | Carboidratos: 65g | Gorduras: 4g`,
    allergens: new Set([]),
    calories: 405,
    protein: 28,
    carbs: 65,
    fats: 4,
  },
  {
    title: "Pré-Treino Hipoalergênico 2",
    content: `
- 150g de arroz branco (195 kcal)
- 100g de carne magra (170 kcal)
- 1 batata doce pequena (90 kcal)
Total: ~455 kcal
Proteína: 25g | Carboidratos: 70g | Gorduras: 8g`,
    allergens: new Set([]),
    calories: 455,
    protein: 25,
    carbs: 70,
    fats: 8,
  },
];
