import { Meal, AllergenType } from "../../types/diet.types";

export const cuttingLunch: Meal[] = [
  {
    title: "Almoço 1",
    content: `
- 150g de frango grelhado (247 kcal)
- 150g de arroz branco (195 kcal)
- 100g de feijão preto (113 kcal)
- Salada de folhas à vontade
- 50g de abacate (80 kcal)
Total: ~635 kcal
Proteína: 55g | Carboidratos: 75g | Gorduras: 15g`,
    allergens: new Set([]),
    calories: 635,
    protein: 55,
    carbs: 75,
    fats: 15,
  },
  {
    title: "Almoço 2",
    content: `
- 150g de carne bovina magra (255 kcal)
- 150g de batata doce (135 kcal)
- 100g de grão de bico (177 kcal)
- Legumes grelhados (80 kcal)
Total: ~647 kcal
Proteína: 58g | Carboidratos: 70g | Gorduras: 18g`,
    allergens: new Set([]),
    calories: 647,
    protein: 58,
    carbs: 70,
    fats: 18,
  },
  {
    title: "Almoço 3",
    content: `
- 150g de salmão (309 kcal)
- 150g de arroz integral (162 kcal)
- 100g de brócolis (55 kcal)
- Azeite de oliva (60 kcal)
Total: ~586 kcal
Proteína: 42g | Carboidratos: 60g | Gorduras: 25g`,
    allergens: new Set([AllergenType.SEAFOOD]),
    calories: 586,
    protein: 42,
    carbs: 60,
    fats: 25,
  },
];
