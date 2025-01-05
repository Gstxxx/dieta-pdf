import { Meal, AllergenType } from "../../types/diet.types";

export const maintenanceDinner: Meal[] = [
  {
    title: "Jantar 1",
    content: `
- 200g de frango grelhado (330 kcal)
- 150g de macarrão integral (195 kcal)
- Molho de tomate caseiro (80 kcal)
- Legumes salteados (100 kcal)
Total: ~705 kcal
Proteína: 58g | Carboidratos: 75g | Gorduras: 20g`,
    allergens: new Set([AllergenType.GLUTEN]),
    calories: 705,
    protein: 58,
    carbs: 75,
    fats: 20,
  },
  {
    title: "Jantar 2",
    content: `
- 200g de peixe branco (220 kcal)
- 200g de quinoa (222 kcal)
- Legumes assados (150 kcal)
- Azeite de oliva (120 kcal)
Total: ~712 kcal
Proteína: 52g | Carboidratos: 65g | Gorduras: 28g`,
    allergens: new Set([AllergenType.SEAFOOD]),
    calories: 712,
    protein: 52,
    carbs: 65,
    fats: 28,
  },
  {
    title: "Jantar 3",
    content: `
- 4 ovos inteiros (280 kcal)
- 200g de batata doce (180 kcal)
- Legumes refogados (100 kcal)
- 1 abacate pequeno (160 kcal)
Total: ~720 kcal
Proteína: 35g | Carboidratos: 60g | Gorduras: 40g`,
    allergens: new Set([AllergenType.EGGS]),
    calories: 720,
    protein: 35,
    carbs: 60,
    fats: 40,
  },
  {
    title: "Jantar Hipoalergênico 1",
    content: `
- 200g de carne magra (340 kcal)
- 200g de arroz integral (216 kcal)
- Legumes variados (120 kcal)
Total: ~676 kcal
Proteína: 48g | Carboidratos: 65g | Gorduras: 18g`,
    allergens: new Set([]),
    calories: 676,
    protein: 48,
    carbs: 65,
    fats: 18,
  },
];
