import { Meal, AllergenType } from "../../types/diet.types";

export const maintenanceBreakfast: Meal[] = [
  {
    title: "Café da Manhã 1",
    content: `
- 3 ovos mexidos (210 kcal)
- 3 fatias de pão integral (240 kcal)
- 2 fatias de queijo branco (200 kcal)
- 1 banana (105 kcal)
Total: ~755 kcal
Proteína: 45g | Carboidratos: 60g | Gorduras: 32g`,
    allergens: new Set([
      AllergenType.EGGS,
      AllergenType.LACTOSE,
      AllergenType.GLUTEN,
    ]),
    calories: 755,
    protein: 45,
    carbs: 60,
    fats: 32,
  },
  {
    title: "Café da Manhã 2",
    content: `
- 300g de iogurte grego (180 kcal)
- 30g de granola sem açúcar (120 kcal)
- 2 bananas (210 kcal)
- 25g de pasta de amendoim (150 kcal)
Total: ~660 kcal
Proteína: 32g | Carboidratos: 75g | Gorduras: 24g`,
    allergens: new Set([AllergenType.LACTOSE, AllergenType.NUTS]),
    calories: 660,
    protein: 32,
    carbs: 75,
    fats: 24,
  },
  {
    title: "Café da Manhã 3",
    content: `
- Panqueca proteica:
  - 2 scoops whey (240 kcal)
  - 2 ovos inteiros (140 kcal)
  - 50g aveia em flocos (200 kcal)
- 20g de mel (60 kcal)
Total: ~640 kcal
Proteína: 60g | Carboidratos: 65g | Gorduras: 18g`,
    allergens: new Set([
      AllergenType.LACTOSE,
      AllergenType.EGGS,
      AllergenType.GLUTEN,
    ]),
    calories: 640,
    protein: 60,
    carbs: 65,
    fats: 18,
  },
  {
    title: "Café da Manhã Hipoalergênico 1",
    content: `
- 180g de batata doce assada (162 kcal)
- 180g de frango desfiado (297 kcal)
- 1 banana (105 kcal)
- 2 colheres de azeite (80 kcal)
Total: ~644 kcal
Proteína: 45g | Carboidratos: 70g | Gorduras: 18g`,
    allergens: new Set([]),
    calories: 644,
    protein: 45,
    carbs: 70,
    fats: 18,
  },
  {
    title: "Café da Manhã Hipoalergênico 2",
    content: `
- 180g de arroz integral (194 kcal)
- 180g de carne moída magra (306 kcal)
- 70g de abacate (112 kcal)
- Legumes salteados (80 kcal)
Total: ~692 kcal
Proteína: 42g | Carboidratos: 65g | Gorduras: 25g`,
    allergens: new Set([]),
    calories: 692,
    protein: 42,
    carbs: 65,
    fats: 25,
  },
];
