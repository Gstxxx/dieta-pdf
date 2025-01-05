import { Meal, AllergenType, DietGoal } from "../types/diet.types";
import { bulkingBreakfast } from "../diets/bulking/breakfast";
import { bulkingPreWorkout } from "../diets/bulking/pre_workout";
import { bulkingPostWorkout } from "../diets/bulking/post_workout";
import { bulkingMorningSnack } from "../diets/bulking/morning_snack";
import { bulkingAfternoonSnack } from "../diets/bulking/afternoon_snack";
import { bulkingSupper } from "../diets/bulking/supper";

export class MealService {
  private static filterMealsByAllergies(
    meals: Meal[],
    allergens: AllergenType[]
  ): Meal[] {
    if (allergens.length === 0) return meals;

    return meals.filter((meal) => {
      const userAllergies = new Set(allergens);
      const intersection = new Set(
        Array.from(meal.allergens).filter((x) => userAllergies.has(x))
      );

      return intersection.size === 0;
    });
  }

  private static getMealsByType(
    goal: DietGoal,
    allergens: AllergenType[]
  ): Record<string, Meal[]> {
    const allMeals = {
      breakfast: [...bulkingBreakfast],
      pre_workout: [...bulkingPreWorkout],
      post_workout: [...bulkingPostWorkout],
      morning_snack: [...bulkingMorningSnack],
      afternoon_snack: [...bulkingAfternoonSnack],
      supper: [...bulkingSupper],
    };

    return {
      breakfast: this.filterMealsByAllergies(allMeals.breakfast, allergens),
      pre_workout: this.filterMealsByAllergies(allMeals.pre_workout, allergens),
      post_workout: this.filterMealsByAllergies(
        allMeals.post_workout,
        allergens
      ),
      morning_snack: this.filterMealsByAllergies(
        allMeals.morning_snack,
        allergens
      ),
      afternoon_snack: this.filterMealsByAllergies(
        allMeals.afternoon_snack,
        allergens
      ),
      supper: this.filterMealsByAllergies(allMeals.supper, allergens),
    };
  }

  static getRandomMeal(meals: Meal[]): Meal {
    const index = Math.floor(Math.random() * meals.length);
    return meals[index];
  }

  static organizeMealsByTime(
    mealsPerDay: number,
    goal: DietGoal,
    allergens: AllergenType[]
  ): { time: string; meal: Meal }[] {
    const meals = this.getMealsByType(goal, allergens);
    const times = this.calculateMealTimes(mealsPerDay);
    const organizedMeals: { time: string; meal: Meal }[] = [];

    const workoutIndex = Math.floor(mealsPerDay / 2);
    organizedMeals.push(
      {
        time: times[workoutIndex - 1],
        meal: this.getRandomMeal(meals.pre_workout),
      },
      {
        time: times[workoutIndex],
        meal: this.getRandomMeal(meals.post_workout),
      }
    );

    const remainingTimes = times.filter(
      (_, i) => i !== workoutIndex && i !== workoutIndex - 1
    );
    const mealTypes = [
      "breakfast",
      "morning_snack",
      "afternoon_snack",
      "supper",
    ];

    remainingTimes.forEach((time, index) => {
      const mealType = mealTypes[index % mealTypes.length];
      organizedMeals.push({
        time,
        meal: this.getRandomMeal(meals[mealType]),
      });
    });

    return organizedMeals.sort((a, b) => a.time.localeCompare(b.time));
  }

  private static calculateMealTimes(mealsPerDay: number): string[] {
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
}
