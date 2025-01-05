import { AllergenType, Meal, UserPreferences } from "../types/diet.types";

export class DietService {
  static calculateMealTimes(mealsPerDay: number): string[] {
    const wakeUp = new Date();
    wakeUp.setHours(6, 0, 0);

    const sleep = new Date();
    sleep.setHours(22, 0, 0);

    const totalMinutes = (sleep.getTime() - wakeUp.getTime()) / 1000 / 60;
    const interval = totalMinutes / (mealsPerDay - 1);

    const times: string[] = [];
    let current = wakeUp;

    for (let i = 0; i < mealsPerDay; i++) {
      times.push(
        current.toLocaleTimeString("pt-BR", {
          hour: "2-digit",
          minute: "2-digit",
        })
      );
      current = new Date(current.getTime() + interval * 60 * 1000);
    }

    return times;
  }

  static getSuitableMeals(
    allMeals: Record<string, Meal[]>,
    mealType: string,
    allergens: AllergenType[]
  ): Meal[] {
    return (
      allMeals[mealType]?.filter(
        (meal) =>
          !Array.from(meal.allergens).some((allergen: AllergenType) =>
            allergens.includes(allergen)
          )
      ) || []
    );
  }

  static setupMeals(
    preferences: UserPreferences,
    allMeals: Record<string, Meal[]>
  ): Meal[] {
    const meals: Meal[] = [];

    // Sempre inclui pré e pós treino
    const preWorkout = this.getSuitableMeals(
      allMeals,
      "pre_workout",
      preferences.allergens
    )[0];
    const postWorkout = this.getSuitableMeals(
      allMeals,
      "post_workout",
      preferences.allergens
    )[0];

    if (preWorkout && postWorkout) {
      meals.push(preWorkout, postWorkout);
    }

    // Distribui as refeições restantes
    const remainingMeals = preferences.mealsPerDay - 2;
    const mealTypes = [
      "breakfast",
      "morning_snack",
      "lunch",
      "afternoon_snack",
      "dinner",
      "supper",
    ];

    for (let i = 0; i < remainingMeals; i++) {
      const mealType = mealTypes[i % mealTypes.length];
      const suitableMeals = this.getSuitableMeals(
        allMeals,
        mealType,
        preferences.allergens
      );
      if (suitableMeals.length > 0) {
        meals.push(suitableMeals[0]);
      }
    }

    return meals;
  }
}
