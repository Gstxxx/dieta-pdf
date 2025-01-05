import { Meal, AllergenType } from "../../types/diet.types";

export const bulkingMorningSnack: Meal[] = [
  {
    title: "Lanche da Manhã 1",
    content: `
- 1 iogurte grego (130 kcal)
- 40g de granola (160 kcal)
- 1 banana (105 kcal)
- 30g de mel (90 kcal)
Total: ~485 kcal
Proteína: 20g | Carboidratos: 75g | Gorduras: 12g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 485,
    protein: 20,
    carbs: 75,
    fats: 12,
  },
  {
    title: "Lanche da Manhã 2",
    content: `
- 2 fatias de pão integral (160 kcal)
- 60g de pasta de amendoim (360 kcal)
- 1 maçã (95 kcal)
Total: ~615 kcal
Proteína: 22g | Carboidratos: 55g | Gorduras: 38g`,
    allergens: new Set([AllergenType.GLUTEN, AllergenType.NUTS]),
    calories: 615,
    protein: 22,
    carbs: 55,
    fats: 38,
  },
  {
    title: "Lanche da Manhã Hipoalergênico 1",
    content: `
- 2 bananas (210 kcal)
- 100g de frango desfiado (165 kcal)
- 100g de batata doce (90 kcal)
Total: ~465 kcal
Proteína: 25g | Carboidratos: 70g | Gorduras: 5g`,
    allergens: new Set([]),
    calories: 465,
    protein: 25,
    carbs: 70,
    fats: 5,
  },
  {
    title: "Lanche da Manhã Hipoalergênico 2",
    content: `
- 200g de arroz branco (260 kcal)
- 100g de carne moída magra (170 kcal)
- 1 banana (105 kcal)
Total: ~535 kcal
Proteína: 22g | Carboidratos: 85g | Gorduras: 8g`,
    allergens: new Set([]),
    calories: 535,
    protein: 22,
    carbs: 85,
    fats: 8,
  },
];
