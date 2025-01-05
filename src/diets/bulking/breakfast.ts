import { Meal, AllergenType } from "../../types/diet.types";

export const bulkingBreakfast: Meal[] = [
  {
    title: "Café da Manhã 1",
    content: `
- 4 ovos mexidos (280 kcal)
- 3 fatias de pão integral (240 kcal)
- 2 fatias de queijo branco (200 kcal)
- 1 banana (105 kcal)
Total: ~825 kcal
Proteína: 48g | Carboidratos: 65g | Gorduras: 38g`,
    allergens: new Set([
      AllergenType.EGGS,
      AllergenType.LACTOSE,
      AllergenType.GLUTEN,
    ]),
    calories: 825,
    protein: 48,
    carbs: 65,
    fats: 38,
  },
  {
    title: "Café da Manhã 2",
    content: `
- 300g de iogurte grego (180 kcal)
- 30g de granola sem açúcar (120 kcal)
- 2 bananas (210 kcal)
- 30g de pasta de amendoim (180 kcal)
Total: ~690 kcal
Proteína: 32g | Carboidratos: 85g | Gorduras: 28g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 690,
    protein: 32,
    carbs: 85,
    fats: 28,
  },
  {
    title: "Café da Manhã 3",
    content: `
- Panqueca proteica:
  - 2 scoops whey (240 kcal)
  - 2 ovos inteiros (140 kcal)
  - 60g aveia em flocos (240 kcal)
- Mel (60 kcal)
Total: ~680 kcal
Proteína: 65g | Carboidratos: 70g | Gorduras: 20g`,
    allergens: new Set([
      AllergenType.LACTOSE,
      AllergenType.EGGS,
      AllergenType.GLUTEN,
    ]),
    calories: 680,
    protein: 65,
    carbs: 70,
    fats: 20,
  },
];
