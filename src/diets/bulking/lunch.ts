import { Meal, AllergenType } from "../../types/diet.types";

export const bulkingLunch: Meal[] = [
  {
    title: "Almoço 1",
    content: `
- 200g de frango grelhado (330 kcal)
- 200g de arroz branco (260 kcal)
- 150g de feijão preto (170 kcal)
- Salada de folhas à vontade
- 1 abacate pequeno (160 kcal)
Total: ~920 kcal
Proteína: 65g | Carboidratos: 110g | Gorduras: 28g`,
    allergens: new Set([]),
    calories: 920,
    protein: 65,
    carbs: 110,
    fats: 28,
  },
  {
    title: "Almoço 2",
    content: `
- 200g de carne bovina magra (340 kcal)
- 200g de batata doce (180 kcal)
- 150g de grão de bico (265 kcal)
- Legumes grelhados (80 kcal)
Total: ~865 kcal
Proteína: 70g | Carboidratos: 95g | Gorduras: 25g`,
    allergens: new Set([]),
    calories: 865,
    protein: 70,
    carbs: 95,
    fats: 25,
  },
  {
    title: "Almoço 3",
    content: `
- 200g de salmão (412 kcal)
- 200g de arroz integral (216 kcal)
- 100g de brócolis (55 kcal)
- Azeite de oliva (120 kcal)
Total: ~803 kcal
Proteína: 46g | Carboidratos: 80g | Gorduras: 35g`,
    allergens: new Set([AllergenType.SEAFOOD]),
    calories: 803,
    protein: 46,
    carbs: 80,
    fats: 35,
  },
];
