import { Meal, AllergenType } from "../../types/diet.types";

export const maintenancePostWorkout: Meal[] = [
  {
    title: "Pós-Treino 1",
    content: `
- 2 scoops whey protein (240 kcal)
- 50g aveia em flocos (187 kcal)
- 1 banana (105 kcal)
- 1 colher de mel (60 kcal)
Total: ~592 kcal
Proteína: 54g | Carboidratos: 60g | Gorduras: 8g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.GLUTEN]),
    calories: 592,
    protein: 54,
    carbs: 60,
    fats: 8,
  },
  {
    title: "Pós-Treino 2",
    content: `
- 4 ovos inteiros (280 kcal)
- 180g de batata doce (162 kcal)
- 1 banana (105 kcal)
Total: ~547 kcal
Proteína: 28g | Carboidratos: 50g | Gorduras: 20g`,
    allergens: new Set([AllergenType.EGGS]),
    calories: 547,
    protein: 28,
    carbs: 50,
    fats: 20,
  },
  {
    title: "Pós-Treino Hipoalergênico 1",
    content: `
- 180g de batata doce (162 kcal)
- 200g de frango grelhado (330 kcal)
- 2 bananas (210 kcal)
Total: ~702 kcal
Proteína: 45g | Carboidratos: 95g | Gorduras: 10g`,
    allergens: new Set([]),
    calories: 702,
    protein: 45,
    carbs: 95,
    fats: 10,
  },
  {
    title: "Pós-Treino Hipoalergênico 2",
    content: `
- 180g de arroz branco (234 kcal)
- 180g de carne magra (306 kcal)
- 100g de mandioca cozida (120 kcal)
Total: ~660 kcal
Proteína: 42g | Carboidratos: 90g | Gorduras: 12g`,
    allergens: new Set([]),
    calories: 660,
    protein: 42,
    carbs: 90,
    fats: 12,
  },
];
