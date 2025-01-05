import { Meal, AllergenType } from "../../types/diet.types";

export const cuttingBreakfast: Meal[] = [
  {
    title: "Café da Manhã 1",
    content: `
- 3 claras + 1 ovo inteiro (155 kcal)
- 2 fatias de pão integral (160 kcal)
- 1 fatia de queijo branco (100 kcal)
- 1 banana (105 kcal)
Total: ~520 kcal
Proteína: 42g | Carboidratos: 55g | Gorduras: 15g`,
    allergens: new Set([
      AllergenType.EGGS,
      AllergenType.LACTOSE,
      AllergenType.GLUTEN,
    ]),
    calories: 520,
    protein: 42,
    carbs: 55,
    fats: 15,
  },
  {
    title: "Café da Manhã 2",
    content: `
- 250g de iogurte grego (150 kcal)
- 20g de granola sem açúcar (80 kcal)
- 1 banana (105 kcal)
- 20g de pasta de amendoim (120 kcal)
Total: ~455 kcal
Proteína: 28g | Carboidratos: 55g | Gorduras: 18g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 455,
    protein: 28,
    carbs: 55,
    fats: 18,
  },
  {
    title: "Café da Manhã 3",
    content: `
- Panqueca proteica:
  - 1.5 scoops whey (180 kcal)
  - 2 claras + 1 ovo (155 kcal)
  - 40g aveia em flocos (160 kcal)
- 10g de mel (30 kcal)
Total: ~525 kcal
Proteína: 55g | Carboidratos: 50g | Gorduras: 12g`,
    allergens: new Set([
      AllergenType.LACTOSE,
      AllergenType.EGGS,
      AllergenType.GLUTEN,
    ]),
    calories: 525,
    protein: 55,
    carbs: 50,
    fats: 12,
  },
  {
    title: "Café da Manhã Hipoalergênico 1",
    content: `
- 150g de batata doce assada (135 kcal)
- 150g de frango desfiado (247 kcal)
- 1 banana (105 kcal)
- 1 colher de azeite (40 kcal)
Total: ~527 kcal
Proteína: 42g | Carboidratos: 60g | Gorduras: 12g`,
    allergens: new Set([]),
    calories: 527,
    protein: 42,
    carbs: 60,
    fats: 12,
  },
  {
    title: "Café da Manhã Hipoalergênico 2",
    content: `
- 150g de arroz integral (162 kcal)
- 150g de carne moída magra (255 kcal)
- 50g de abacate (80 kcal)
- Legumes salteados (50 kcal)
Total: ~547 kcal
Proteína: 38g | Carboidratos: 55g | Gorduras: 18g`,
    allergens: new Set([]),
    calories: 547,
    protein: 38,
    carbs: 55,
    fats: 18,
  },
];
