import { Bot, session } from "grammy";
import dotenv from "dotenv";
import { Context } from "./types/context.types";
import { UserSession, ConversationStep } from "./types/session.types";
import { handleStart } from "./handlers/start.handler";
import { handleGoalSelection } from "./handlers/goal.handler";
import { handleMealsPerDay } from "./handlers/meals.handler";
import { handleAllergens } from "./handlers/allergens.handler";
import { handleConfirmation } from "./handlers/confirmation.handler";
import { handleName } from "./handlers/name.handler";

dotenv.config();

const BOT_TOKEN = process.env.BOT_TOKEN;

if (!BOT_TOKEN) {
  throw new Error("BOT_TOKEN não encontrado no arquivo .env");
}

const bot = new Bot<Context>(BOT_TOKEN);

bot.use(
  session({
    initial(): UserSession {
      return {
        step: ConversationStep.IDLE,
        preferences: {
          allergens: [],
        },
      };
    },
  })
);

bot.command("start", handleStart);

bot.on("callback_query", async (ctx) => {
  switch (ctx.session.step) {
    case ConversationStep.AWAITING_GOAL:
      await handleGoalSelection(ctx);
      break;
    case ConversationStep.AWAITING_MEALS:
      await handleMealsPerDay(ctx);
      break;
    case ConversationStep.AWAITING_ALLERGENS:
      await handleAllergens(ctx);
      break;
    case ConversationStep.CONFIRMING_PLAN:
      await handleConfirmation(ctx);
      break;
  }
});

bot.on("message:text", async (ctx) => {
  if (ctx.session.step === ConversationStep.AWAITING_NAME) {
    await handleName(ctx);
  }
});

bot.start();
console.log("Bot iniciado com sucesso!");
