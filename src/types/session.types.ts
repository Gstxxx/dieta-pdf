import { AllergenType, DietGoal } from "./diet.types";

export interface UserSession {
  step: ConversationStep;
  currentAllergenIndex?: number;
  preferences: {
    goal?: DietGoal;
    mealsPerDay?: number;
    allergens: AllergenType[];
  };
}

export enum ConversationStep {
  IDLE = "idle",
  AWAITING_GOAL = "awaiting_goal",
  AWAITING_MEALS = "awaiting_meals",
  AWAITING_ALLERGENS = "awaiting_allergens",
  CONFIRMING_PLAN = "confirming_plan",
  COMPLETED = "completed",
}
