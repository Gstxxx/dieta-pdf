import { Context } from "../types/context.types";
import { ConversationStep } from "../types/session.types";
import { AllergenType } from "../types/diet.types";
import { InlineKeyboard } from "grammy";

const allergenQuestions = [
  { allergen: AllergenType.LACTOSE, emoji: "🥛", name: "Lactose" },
  { allergen: AllergenType.GLUTEN, emoji: "🌾", name: "Glúten" },
  { allergen: AllergenType.NUTS, emoji: "🥜", name: "Castanhas/Amendoim" },
  { allergen: AllergenType.EGGS, emoji: "🥚", name: "Ovos" },
  { allergen: AllergenType.SEAFOOD, emoji: "🦐", name: "Frutos do Mar" },
];

export async function handleAllergens(ctx: Context) {
  if (!ctx.callbackQuery?.data) {
    ctx.session.currentAllergenIndex = 0;
    ctx.session.preferences.allergens = [];
    await askCurrentAllergen(ctx);
    return;
  }

  const response = ctx.callbackQuery.data;
  const currentIndex = ctx.session.currentAllergenIndex ?? 0;

  if (response === "yes") {
    ctx.session.preferences.allergens.push(
      allergenQuestions[currentIndex].allergen
    );
  }

  ctx.session.currentAllergenIndex = currentIndex + 1;
  await ctx.answerCallbackQuery();

  if (ctx.session.currentAllergenIndex >= allergenQuestions.length) {
    delete ctx.session.currentAllergenIndex;
    ctx.session.step = ConversationStep.CONFIRMING_PLAN;
    await showPlanConfirmation(ctx);
  } else {
    await askCurrentAllergen(ctx);
  }
}

async function askCurrentAllergen(ctx: Context) {
  const index = ctx.session.currentAllergenIndex ?? 0;
  const currentAllergen = allergenQuestions[index];

  const keyboard = new InlineKeyboard()
    .add({ text: "✅ Sim", callback_data: "yes" })
    .add({ text: "❌ Não", callback_data: "no" });

  await ctx.reply(
    `Você tem alergia a ${currentAllergen.emoji} ${currentAllergen.name}?`,
    { reply_markup: keyboard }
  );
}

async function showPlanConfirmation(ctx: Context) {
  const { goal, mealsPerDay, allergens } = ctx.session.preferences;

  const allergenNames = allergens.map((allergen) => {
    const found = allergenQuestions.find((q) => q.allergen === allergen);
    return found ? `${found.emoji} ${found.name}` : allergen;
  });

  const keyboard = new InlineKeyboard()
    .add({ text: "✅ Confirmar", callback_data: "confirm" })
    .add({ text: "❌ Recomeçar", callback_data: "restart" });

  await ctx.reply(
    "📋 Aqui está seu plano alimentar:\n\n" +
      `Objetivo: ${goal}\n` +
      `Refeições: ${mealsPerDay}x ao dia\n` +
      `Alergias: ${
        allergenNames.length ? allergenNames.join(", ") : "Nenhuma"
      }\n\n` +
      "Deseja confirmar este plano?",
    { reply_markup: keyboard }
  );
}
