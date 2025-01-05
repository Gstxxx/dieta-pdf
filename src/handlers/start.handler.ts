import { Context } from "../types/context.types";
import { ConversationStep } from "../types/session.types";

export async function handleStart(ctx: Context) {
  ctx.session.step = ConversationStep.AWAITING_NAME;

  await ctx.reply(
    "👋 Olá! Vou te ajudar a criar um plano alimentar personalizado.\n\n" +
      "Para começar, qual é o seu nome?"
  );
}
