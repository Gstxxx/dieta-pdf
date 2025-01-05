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
/* eslint-disable @typescript-eslint/no-unused-vars */
export enum ConversationStep {
  IDLE = "idle",
  AWAITING_NAME = "awaiting_name",
  AWAITING_GOAL = "awaiting_goal",
  AWAITING_MEALS = "awaiting_meals",
  AWAITING_ALLERGENS = "awaiting_allergens",
  CONFIRMING_PLAN = "confirming_plan",
  COMPLETED = "completed",
}
