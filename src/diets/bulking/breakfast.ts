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
  {
    title: "Café da Manhã Hipoalergênico 1",
    content: `
- 200g de batata doce assada (180 kcal)
- 150g de frango desfiado (247 kcal)
- 1 banana (105 kcal)
- Azeite de oliva (120 kcal)
Total: ~652 kcal
Proteína: 42g | Carboidratos: 75g | Gorduras: 22g`,
    allergens: new Set([]),
    calories: 652,
    protein: 42,
    carbs: 75,
    fats: 22,
  },
  {
    title: "Café da Manhã Hipoalergênico 2",
    content: `
- 200g de arroz integral (216 kcal)
- 150g de carne moída magra (255 kcal)
- 100g de abacate (160 kcal)
- Legumes salteados (80 kcal)
Total: ~711 kcal
Proteína: 38g | Carboidratos: 70g | Gorduras: 32g`,
    allergens: new Set([]),
    calories: 711,
    protein: 38,
    carbs: 70,
    fats: 32,
  },
];
