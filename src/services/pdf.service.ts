import PDFDocument from "pdfkit";
import { UserPreferences } from "../types/diet.types";
import { AllergenType } from "../types/diet.types";
import fs from "fs";

export class PDFService {
  private static goalNames = {
    maintenance: "Manutenção do Shape",
    bulking: "Ganho de Massa",
    cutting: "Emagrecimento",
  };

  private static allergenQuestions = [
    { allergen: AllergenType.LACTOSE, emoji: "🥛", name: "Lactose" },
    { allergen: AllergenType.GLUTEN, emoji: "🌾", name: "Glúten" },
    { allergen: AllergenType.NUTS, emoji: "🥜", name: "Castanhas/Amendoim" },
    { allergen: AllergenType.EGGS, emoji: "🥚", name: "Ovos" },
    { allergen: AllergenType.SEAFOOD, emoji: "🦐", name: "Frutos do Mar" },
  ];

  static async generatePlanPDF(preferences: UserPreferences): Promise<string> {
    const doc = new PDFDocument({
      size: "A4",
      margin: 50,
    });

    const fileName = `plano_alimentar_${Date.now()}.pdf`;
    const filePath = `./tmp/${fileName}`;

    if (!fs.existsSync("./tmp")) {
      fs.mkdirSync("./tmp");
    }

    const stream = fs.createWriteStream(filePath);
    doc.pipe(stream);

    // Registra a fonte de emoji apenas para uso específico
    doc.registerFont("NotoEmoji", "./assets/fonts/NotoEmoji-Regular.ttf");

    // Usa fonte padrão para o título
    doc
      .font("Helvetica-Bold")
      .fontSize(20)
      .text("Plano Alimentar Personalizado", { align: "center" })
      .moveDown(2);

    // Usa fonte padrão para texto normal
    doc
      .font("Helvetica")
      .fontSize(14)
      .text(`Objetivo: ${this.goalNames[preferences.goal]}`)
      .moveDown()
      .text(`Refeições por dia: ${preferences.mealsPerDay}`)
      .moveDown()
      .text(`Alergias`)
      .moveDown();

    doc
      .font("NotoEmoji")
      .text(`${this.formatAllergies(preferences.allergens)}`);

    doc.end();

    return new Promise((resolve, reject) => {
      stream.on("finish", () => resolve(filePath));
      stream.on("error", reject);
    });
  }

  private static formatAllergies(allergens: AllergenType[]): string {
    if (!allergens.length) return "Nenhuma";
    return allergens
      .map((allergen) => {
        const found = this.allergenQuestions.find(
          (q) => q.allergen === allergen
        );
        return found ? found.emoji : allergen;
      })
      .join(" ");
  }
}
