import { Meal, AllergenType } from "../../types/diet.types";

export const maintenanceLunch: Meal[] = [
  {
    title: "Almoço 1",
    content: `
- 180g de frango grelhado (297 kcal)
- 180g de arroz branco (234 kcal)
- 120g de feijão preto (136 kcal)
- Salada de folhas à vontade
- 70g de abacate (112 kcal)
Total: ~779 kcal
Proteína: 60g | Carboidratos: 90g | Gorduras: 22g`,
    allergens: new Set([]),
    calories: 779,
    protein: 60,
    carbs: 90,
    fats: 22,
  },
  {
    title: "Almoço 2",
    content: `
- 180g de carne bovina magra (306 kcal)
- 180g de batata doce (162 kcal)
- 120g de grão de bico (212 kcal)
- Legumes grelhados (80 kcal)
Total: ~760 kcal
Proteína: 65g | Carboidratos: 85g | Gorduras: 22g`,
    allergens: new Set([]),
    calories: 760,
    protein: 65,
    carbs: 85,
    fats: 22,
  },
  {
    title: "Almoço 3",
    content: `
- 180g de salmão (371 kcal)
- 180g de arroz integral (194 kcal)
- 100g de brócolis (55 kcal)
- Azeite de oliva (90 kcal)
Total: ~710 kcal
Proteína: 44g | Carboidratos: 70g | Gorduras: 32g`,
    allergens: new Set([AllergenType.SEAFOOD]),
    calories: 710,
    protein: 44,
    carbs: 70,
    fats: 32,
  },
];
