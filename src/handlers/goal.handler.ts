import { Context } from "../types/context.types";
import { ConversationStep } from "../types/session.types";
import { DietGoal } from "../types/diet.types";
import { InlineKeyboard } from "grammy";

export async function handleGoalSelection(ctx: Context) {
  const response = ctx.callbackQuery?.data;

  const goalMap: Record<string, DietGoal> = {
    "1": DietGoal.MAINTENANCE,
    "2": DietGoal.BULKING,
    "3": DietGoal.CUTTING,
  };

  if (response && goalMap[response]) {
    await ctx.answerCallbackQuery();
    ctx.session.preferences.goal = goalMap[response];
    ctx.session.step = ConversationStep.AWAITING_MEALS;

    const keyboard = new InlineKeyboard()
      .add({ text: "5", callback_data: "5" })
      .add({ text: "6", callback_data: "6" })
      .add({ text: "7", callback_data: "7" })
      .row()
      .add({ text: "8", callback_data: "8" })
      .add({ text: "9", callback_data: "9" })
      .add({ text: "10", callback_data: "10" })
      .row()
      .add({ text: "11", callback_data: "11" })
      .add({ text: "12", callback_data: "12" });

    await ctx.reply(
      "Ótimo! Agora me diga quantas refeições por dia você deseja fazer?",
      { reply_markup: keyboard }
    );
  }
}
