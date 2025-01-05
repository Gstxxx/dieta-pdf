import { Meal, AllergenType } from "../../types/diet.types";

export const maintenancePreWorkout: Meal[] = [
  {
    title: "Pré-Treino 1",
    content: `
- 2 bananas médias (210 kcal)
- 2 torradas integrais com pasta de amendoim (300 kcal)
- 1 café preto
Total: ~510 kcal
Proteína: 14g | Carboidratos: 65g | Gorduras: 14g`,
    allergens: new Set([AllergenType.GLUTEN, AllergenType.NUTS]),
    calories: 510,
    protein: 14,
    carbs: 65,
    fats: 14,
  },
  {
    title: "Pré-Treino 2",
    content: `
- 50g de aveia em flocos (200 kcal)
- 1 scoop whey protein (120 kcal)
- 1 banana (105 kcal)
- 15g de mel (45 kcal)
Total: ~470 kcal
Proteína: 30g | Carboidratos: 70g | Gorduras: 7g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.GLUTEN]),
    calories: 470,
    protein: 30,
    carbs: 70,
    fats: 7,
  },
  {
    title: "Pré-Treino Hipoalergênico 1",
    content: `
- 180g de batata doce (162 kcal)
- 120g de frango grelhado (198 kcal)
- 2 bananas (210 kcal)
Total: ~570 kcal
Proteína: 32g | Carboidratos: 85g | Gorduras: 6g`,
    allergens: new Set([]),
    calories: 570,
    protein: 32,
    carbs: 85,
    fats: 6,
  },
  {
    title: "Pré-Treino Hipoalergênico 2",
    content: `
- 180g de arroz branco (234 kcal)
- 120g de carne magra (204 kcal)
- 1 batata doce média (103 kcal)
Total: ~541 kcal
Proteína: 28g | Carboidratos: 80g | Gorduras: 9g`,
    allergens: new Set([]),
    calories: 541,
    protein: 28,
    carbs: 80,
    fats: 9,
  },
];
