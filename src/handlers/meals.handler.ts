import { Context } from "../types/context.types";
import { ConversationStep } from "../types/session.types";
import { InlineKeyboard } from "grammy";

export async function handleMealsPerDay(ctx: Context) {
  const response = ctx.callbackQuery?.data;
  const meals = Number(response);

  if (meals >= 5 && meals <= 12) {
    await ctx.answerCallbackQuery();
    ctx.session.preferences.mealsPerDay = meals;
    ctx.session.step = ConversationStep.AWAITING_ALLERGENS;

    // Inicia o processo de verificação de alergias
    ctx.session.preferences.allergens = [];
    await askNextAllergen(ctx);
  }
}

async function askNextAllergen(ctx: Context) {
  const allergenQuestions = [
    { allergen: "LACTOSE", emoji: "🥛", name: "Lactose" },
    { allergen: "GLUTEN", emoji: "🌾", name: "Glúten" },
    { allergen: "NUTS", emoji: "🥜", name: "Castanhas/Amendoim" },
    { allergen: "EGGS", emoji: "🥚", name: "Ovos" },
    { allergen: "SEAFOOD", emoji: "🦐", name: "Frutos do Mar" },
  ];

  const currentAllergenIndex = ctx.session.preferences.allergens.length;
  const currentAllergen = allergenQuestions[currentAllergenIndex];

  const keyboard = new InlineKeyboard()
    .add({ text: "✅ Sim", callback_data: "yes" })
    .add({ text: "❌ Não", callback_data: "no" });

  await ctx.reply(
    `Você tem alergia a ${currentAllergen.emoji} ${currentAllergen.name}?`,
    { reply_markup: keyboard }
  );
}
