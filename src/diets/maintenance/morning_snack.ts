import { Meal, AllergenType } from "../../types/diet.types";

export const maintenanceMorningSnack: Meal[] = [
  {
    title: "Lanche da Manhã 1",
    content: `
- 1 iogurte grego (130 kcal)
- 30g de granola (120 kcal)
- 1 banana (105 kcal)
- 15g de mel (45 kcal)
Total: ~400 kcal
Proteína: 18g | Carboidratos: 60g | Gorduras: 10g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 400,
    protein: 18,
    carbs: 60,
    fats: 10,
  },
  {
    title: "Lanche da Manhã 2",
    content: `
- 2 fatias de pão integral (160 kcal)
- 40g de pasta de amendoim (240 kcal)
- 1 maçã (95 kcal)
Total: ~495 kcal
Proteína: 20g | Carboidratos: 45g | Gorduras: 28g`,
    allergens: new Set([AllergenType.GLUTEN, AllergenType.NUTS]),
    calories: 495,
    protein: 20,
    carbs: 45,
    fats: 28,
  },
  {
    title: "Lanche da Manhã Hipoalergênico 1",
    content: `
- 2 bananas (210 kcal)
- 80g de frango desfiado (132 kcal)
- 80g de batata doce (72 kcal)
Total: ~414 kcal
Proteína: 20g | Carboidratos: 65g | Gorduras: 4g`,
    allergens: new Set([]),
    calories: 414,
    protein: 20,
    carbs: 65,
    fats: 4,
  },
  {
    title: "Lanche da Manhã Hipoalergênico 2",
    content: `
- 180g de arroz branco (234 kcal)
- 90g de carne moída magra (153 kcal)
- 1 banana (105 kcal)
Total: ~492 kcal
Proteína: 20g | Carboidratos: 75g | Gorduras: 7g`,
    allergens: new Set([]),
    calories: 492,
    protein: 20,
    carbs: 75,
    fats: 7,
  },
];
