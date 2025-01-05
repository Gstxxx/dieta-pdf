import { Context } from "../types/context.types";
import { ConversationStep } from "../types/session.types";
import { handleStart } from "./start.handler";
import { PDFService } from "../services/pdf.service";
import fs from "fs";
import { InputFile } from "grammy";

export async function handleConfirmation(ctx: Context) {
  const response = ctx.callbackQuery?.data;

  if (response === "confirm") {
    await ctx.answerCallbackQuery();

    if (!ctx.session.preferences.goal || !ctx.session.preferences.mealsPerDay) {
      await ctx.reply("❌ Dados incompletos. Por favor, comece novamente.");
      await handleStart(ctx);
      return;
    }

    try {
      await ctx.reply("Gerando seu plano alimentar...");

      const preferences = {
        name: ctx.session.preferences.name || "Usuário",
        goal: ctx.session.preferences.goal,
        mealsPerDay: ctx.session.preferences.mealsPerDay,
        allergens: ctx.session.preferences.allergens,
      };

      const pdfPath = await PDFService.generatePlanPDF(preferences);
      const document = new InputFile(pdfPath);

      await ctx.replyWithDocument(document, {
        caption: "✅ Aqui está seu plano alimentar personalizado!",
      });

      fs.unlinkSync(pdfPath);

      const tmpDir = "./tmp";
      if (fs.existsSync(tmpDir) && fs.readdirSync(tmpDir).length === 0) {
        fs.rmdirSync(tmpDir);
      }

      ctx.session.step = ConversationStep.COMPLETED;
    } catch (error) {
      await ctx.reply(
        "❌ Desculpe, ocorreu um erro ao gerar seu plano. Por favor, tente novamente."
      );
    }
  } else if (response === "restart") {
    await ctx.answerCallbackQuery();
    ctx.session.step = ConversationStep.AWAITING_GOAL;
    await handleStart(ctx);
  }
}
