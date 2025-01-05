import { Bot, Context, session } from "grammy";
import { UserSession, ConversationStep } from "../types/session.types";
import { DietGoal, AllergenType } from "../types/diet.types";
import { DietService } from "./diet.service";

export class TelegramService {
  private bot: Bot;
  private dietService: DietService;

  constructor(token: string) {
    this.bot = new Bot(token);
    this.dietService = new DietService();
    this.setupMiddleware();
    this.setupHandlers();
  }

  private setupMiddleware() {
    this.bot.use(
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
  }

  private setupHandlers() {
    // Comando inicial
    this.bot.command("start", this.handleStart.bind(this));

    // Handlers baseados no estado da conversa
    this.bot.on("message", async (ctx) => {
      const session = ctx.session as UserSession;

      switch (session.step) {
        case ConversationStep.AWAITING_GOAL:
          await this.handleGoalSelection(ctx);
          break;
        case ConversationStep.AWAITING_MEALS:
          await this.handleMealsPerDay(ctx);
          break;
        case ConversationStep.AWAITING_ALLERGENS:
          await this.handleAllergens(ctx);
          break;
        case ConversationStep.CONFIRMING_PLAN:
          await this.handleConfirmation(ctx);
          break;
      }
    });
  }

  private async handleStart(ctx: Context) {
    const session = ctx.session as UserSession;
    session.step = ConversationStep.AWAITING_GOAL;

    await ctx.reply(
      "👋 Olá! Vou te ajudar a criar um plano alimentar personalizado.\n\n" +
        "Escolha seu objetivo:\n" +
        "1️⃣ Manutenção do Shape\n" +
        "2️⃣ Ganho de Massa Magra\n" +
        "3️⃣ Emagrecimento\n\n" +
        "Digite o número da sua escolha (1-3):"
    );
  }

  private async handleGoalSelection(ctx: Context) {
    const session = ctx.session as UserSession;
    const text = ctx.message?.text;

    const goalMap: Record<string, DietGoal> = {
      "1": DietGoal.MAINTENANCE,
      "2": DietGoal.BULKING,
      "3": DietGoal.CUTTING,
    };

    if (text && goalMap[text]) {
      session.preferences.goal = goalMap[text];
      session.step = ConversationStep.AWAITING_MEALS;

      await ctx.reply(
        "Ótimo! Agora me diga quantas refeições por dia você deseja fazer?\n" +
          "Digite um número entre 5 e 12:"
      );
    } else {
      await ctx.reply("❌ Por favor, escolha uma opção válida (1-3):");
    }
  }

  private async handleMealsPerDay(ctx: Context) {
    const session = ctx.session as UserSession;
    const text = ctx.message?.text;
    const meals = Number(text);

    if (meals >= 5 && meals <= 12) {
      session.preferences.mealsPerDay = meals;
      session.step = ConversationStep.AWAITING_ALLERGENS;

      await ctx.reply(
        "Agora vamos verificar suas alergias.\n\n" +
          "Você tem alguma dessas alergias? Responda S ou N para cada uma:\n\n" +
          "🥛 Lactose?"
      );
    } else {
      await ctx.reply("❌ Por favor, digite um número entre 5 e 12:");
    }
  }

  private async handleAllergens(ctx: Context) {
    const session = ctx.session as UserSession;
    const text = ctx.message?.text?.toLowerCase();

    const allergenQuestions = [
      { allergen: AllergenType.LACTOSE, emoji: "🥛", name: "Lactose" },
      { allergen: AllergenType.GLUTEN, emoji: "🌾", name: "Glúten" },
      { allergen: AllergenType.NUTS, emoji: "🥜", name: "Castanhas/Amendoim" },
      { allergen: AllergenType.EGGS, emoji: "🥚", name: "Ovos" },
      { allergen: AllergenType.SEAFOOD, emoji: "🦐", name: "Frutos do Mar" },
    ];

    if (text === "s" || text === "n") {
      const currentAllergenIndex = session.preferences.allergens.length;

      if (text === "s") {
        session.preferences.allergens.push(
          allergenQuestions[currentAllergenIndex].allergen
        );
      }

      if (currentAllergenIndex < allergenQuestions.length - 1) {
        const nextAllergen = allergenQuestions[currentAllergenIndex + 1];
        await ctx.reply(`${nextAllergen.emoji} ${nextAllergen.name}?`);
      } else {
        session.step = ConversationStep.CONFIRMING_PLAN;
        await this.showPlanConfirmation(ctx);
      }
    } else {
      await ctx.reply("❌ Por favor, responda apenas com S ou N:");
    }
  }

  private async showPlanConfirmation(ctx: Context) {
    const session = ctx.session as UserSession;
    const plan = this.dietService.createMealPlan(session.preferences);

    await ctx.reply(
      "📋 Aqui está seu plano alimentar:\n\n" +
        `Objetivo: ${plan.name}\n` +
        `Calorias: ${plan.calories} kcal\n` +
        `Refeições: ${plan.mealsPerDay}x ao dia\n\n` +
        "Deseja confirmar este plano? (S/N)"
    );
  }

  private async handleConfirmation(ctx: Context) {
    const session = ctx.session as UserSession;
    const text = ctx.message?.text?.toLowerCase();

    if (text === "s") {
      const plan = this.dietService.createMealPlan(session.preferences);
      await this.sendCompletePlan(ctx, plan);
      session.step = ConversationStep.COMPLETED;
    } else if (text === "n") {
      session.step = ConversationStep.AWAITING_GOAL;
      await this.handleStart(ctx);
    } else {
      await ctx.reply("❌ Por favor, responda apenas com S ou N:");
    }
  }

  public start() {
    this.bot.start();
    console.log("Bot iniciado com sucesso!");
  }
}
