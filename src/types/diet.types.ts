export enum AllergenType {
  LACTOSE = "lactose",
  GLUTEN = "gluten",
  NUTS = "nuts",
  EGGS = "eggs",
  SEAFOOD = "seafood",
}

export enum DietGoal {
  MAINTENANCE = "maintenance",
  BULKING = "bulking",
  CUTTING = "cutting",
}

export interface Meal {
  title: string;
  content: string;
  allergens: Set<AllergenType>;
  calories: number;
  protein: number;
  carbs: number;
  fats: number;
}

export interface DietDescription {
  name: string;
  objective: string;
  calories: string;
  macronutrients: string;
  strategies: string;
  indication: string;
}

export interface DietPlan {
  name: string;
  mealsPerDay: number;
  goal: DietGoal;
  calories: number;
  allergens: Set<AllergenType>;
  meals: Meal[];
}

export interface UserPreferences {
  goal: DietGoal;
  mealsPerDay: number;
  allergens: AllergenType[];
}
