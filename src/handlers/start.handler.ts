import { Context } from "../types/context.types";
import { ConversationStep } from "../types/session.types";
import { InlineKeyboard } from "grammy";

export async function handleStart(ctx: Context) {
  ctx.session.step = ConversationStep.AWAITING_GOAL;

  const keyboard = new InlineKeyboard()
    .add({ text: "1️⃣ Manutenção do Shape", callback_data: "1" })
    .row()
    .add({ text: "2️⃣ Ganho de Massa Magra", callback_data: "2" })
    .row()
    .add({ text: "3️⃣ Emagrecimento", callback_data: "3" });

  await ctx.reply(
    "👋 Olá! Vou te ajudar a criar um plano alimentar personalizado.\n\n" +
      "Escolha seu objetivo:",
    { reply_markup: keyboard }
  );
}
