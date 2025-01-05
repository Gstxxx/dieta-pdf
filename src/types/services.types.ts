import {
  DietGoal,
  Meal,
  AllergenType,
  DietPlan,
  UserPreferences,
} from "./diet.types";

export interface IDietService {
  createMealPlan(preferences: UserPreferences): DietPlan;
  getMealOptions(goal: DietGoal): Record<string, Meal[]>;
  getSuitableMeal(meals: Meal[], allergens: Set<AllergenType>): Meal | null;
  calculateMealTimes(mealsPerDay: number): string[];
}

export interface ITelegramService {
  startDietPlanCreation(chatId: number): Promise<void>;
  askForGoal(chatId: number): Promise<void>;
  askForMealsPerDay(chatId: number): Promise<void>;
  askForAllergens(chatId: number): Promise<void>;
  sendDietPlan(chatId: number, plan: DietPlan): Promise<void>;
}
