import { Meal, AllergenType } from "../../types/diet.types";

export const maintenanceAfternoonSnack: Meal[] = [
  {
    title: "Lanche da Tarde 1",
    content: `
- 1 scoop whey protein (120 kcal)
- 1 banana (105 kcal)
- 40g de aveia em flocos (148 kcal)
Total: ~373 kcal
Proteína: 28g | Carboidratos: 55g | Gorduras: 6g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.GLUTEN]),
    calories: 373,
    protein: 28,
    carbs: 55,
    fats: 6,
  },
  {
    title: "Lanche da Tarde 2",
    content: `
- 3 ovos cozidos (210 kcal)
- 1 fatia de pão integral (80 kcal)
- 1 maçã (95 kcal)
Total: ~385 kcal
Proteína: 28g | Carboidratos: 35g | Gorduras: 18g`,
    allergens: new Set([AllergenType.EGGS, AllergenType.GLUTEN]),
    calories: 385,
    protein: 28,
    carbs: 35,
    fats: 18,
  },
  {
    title: "Lanche da Tarde Hipoalergênico 1",
    content: `
- 120g de batata doce (108 kcal)
- 130g de frango desfiado (214 kcal)
- 1 banana (105 kcal)
Total: ~427 kcal
Proteína: 32g | Carboidratos: 50g | Gorduras: 6g`,
    allergens: new Set([]),
    calories: 427,
    protein: 32,
    carbs: 50,
    fats: 6,
  },
  {
    title: "Lanche da Tarde Hipoalergênico 2",
    content: `
- 120g de arroz integral (130 kcal)
- 110g de carne magra (187 kcal)
- 70g de abacate (112 kcal)
Total: ~429 kcal
Proteína: 26g | Carboidratos: 45g | Gorduras: 20g`,
    allergens: new Set([]),
    calories: 429,
    protein: 26,
    carbs: 45,
    fats: 20,
  },
];
