import { Meal, AllergenType } from "../../types/diet.types";

export const bulkingPreWorkout: Meal[] = [
  {
    title: "Pré-Treino 1",
    content: `
- 2 bananas médias (210 kcal)
- 2 torradas integrais com pasta de amendoim (400 kcal)
- 1 café preto
Total: ~610 kcal
Proteína: 16g | Carboidratos: 70g | Gorduras: 16g`,
    allergens: new Set([AllergenType.GLUTEN, AllergenType.NUTS]),
    calories: 610,
    protein: 16,
    carbs: 70,
    fats: 16,
  },
  {
    title: "Pré-Treino 2",
    content: `
- 60g de aveia em flocos (240 kcal)
- 1 scoop whey protein (120 kcal)
- 1 banana (105 kcal)
- 20g de mel (60 kcal)
Total: ~525 kcal
Proteína: 32g | Carboidratos: 80g | Gorduras: 8g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.GLUTEN]),
    calories: 525,
    protein: 32,
    carbs: 80,
    fats: 8,
  },
  {
    title: "Pré-Treino Hipoalergênico 1",
    content: `
- 200g de batata doce (180 kcal)
- 150g de frango grelhado (247 kcal)
- 2 bananas (210 kcal)
Total: ~637 kcal
Proteína: 35g | Carboidratos: 95g | Gorduras: 8g`,
    allergens: new Set([]),
    calories: 637,
    protein: 35,
    carbs: 95,
    fats: 8,
  },
  {
    title: "Pré-Treino Hipoalergênico 2",
    content: `
- 200g de arroz branco (260 kcal)
- 150g de carne magra (255 kcal)
- 1 batata doce média (103 kcal)
Total: ~618 kcal
Proteína: 32g | Carboidratos: 90g | Gorduras: 10g`,
    allergens: new Set([]),
    calories: 618,
    protein: 32,
    carbs: 90,
    fats: 10,
  },
];
