import { Context } from "../types/context.types";
import { ConversationStep } from "../types/session.types";
import { InlineKeyboard } from "grammy";

export async function handleName(ctx: Context) {
  const name = ctx.message?.text;

  if (!name) {
    await ctx.reply("Por favor, digite seu nome.");
    return;
  }

  ctx.session.preferences.name = name;
  ctx.session.step = ConversationStep.AWAITING_GOAL;

  const keyboard = new InlineKeyboard()
    .add({ text: "1️⃣ Manutenção do Shape", callback_data: "1" })
    .row()
    .add({ text: "2️⃣ Ganho de Massa Magra", callback_data: "2" })
    .row()
    .add({ text: "3️⃣ Emagrecimento", callback_data: "3" });

  await ctx.reply(`Ótimo, ${name}! Agora me diga qual é seu objetivo:`, {
    reply_markup: keyboard,
  });
}
