import { AllergenType, DietGoal } from "./diet.types";

export interface UserSession {
  step: ConversationStep;
  currentAllergenIndex?: number;
  preferences: {
    name?: string;
    goal?: DietGoal;
    mealsPerDay?: number;
    allergens: AllergenType[];
  };
}

export enum ConversationStep {
  IDLE = "idle",
  AWAITING_NAME = "AWAITING_NAME",
  AWAITING_GOAL = "AWAITING_GOAL",
  AWAITING_MEALS = "awaiting_meals",
  AWAITING_ALLERGENS = "awaiting_allergens",
  CONFIRMING_PLAN = "confirming_plan",
  COMPLETED = "completed",
}
