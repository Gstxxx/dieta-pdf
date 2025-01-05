import PDFDocument from "pdfkit";
import { UserPreferences, AllergenType } from "../types/diet.types";
import fs from "fs";
import { MealService } from "./meal.service";
import path from "path";

const currentDirPath = __dirname;

export class PDFService {
  private static goalNames = {
    maintenance: "Manutenção do Shape",
    bulking: "Ganho de Massa",
    cutting: "Emagrecimento",
  };

  private static allergenEmojis = {
    [AllergenType.LACTOSE]: "🥛",
    [AllergenType.GLUTEN]: "🌾",
    [AllergenType.NUTS]: "🥜",
    [AllergenType.EGGS]: "🥚",
    [AllergenType.SEAFOOD]: "🦐",
  };

  static async generatePlanPDF(preferences: UserPreferences): Promise<string> {
    try {
      console.log("Iniciando geração do PDF com preferências:", preferences);

      const doc = new PDFDocument({
        size: "A4",
        margin: 50,
      });

      doc.registerFont(
        "NotoEmoji",
        path.join(currentDirPath, "../../assets/fonts/NotoEmoji-Regular.ttf")
      );

      const fileName = `plano_alimentar_${preferences.name.replace(
        /\s+/g,
        "_"
      )}.pdf`;
      const filePath = path.join("./tmp", fileName);

      console.log("Criando diretório tmp se não existir");
      if (!fs.existsSync("./tmp")) {
        fs.mkdirSync("./tmp");
      }

      console.log("Criando stream de arquivo:", filePath);
      const stream = fs.createWriteStream(filePath);
      doc.pipe(stream);

      console.log("Organizando refeições");
      const organizedMeals = MealService.organizeMealsByTime(
        preferences.mealsPerDay,
        preferences.goal,
        preferences.allergens
      );

      console.log("Refeições organizadas:", organizedMeals);

      const totals = organizedMeals.reduce(
        (acc, { meal }) => {
          acc.calories += meal.calories || 0;
          acc.protein += meal.protein || 0;
          acc.carbs += meal.carbs || 0;
          acc.fats += meal.fats || 0;
          return acc;
        },
        { calories: 0, protein: 0, carbs: 0, fats: 0 }
      );

      doc
        .fontSize(20)
        .text(`Plano Alimentar - ${preferences.name}`, {
          align: "center",
        })
        .moveDown()
        .fontSize(12)
        .text(`Objetivo: ${this.goalNames[preferences.goal]}`)
        .moveDown()
        .text(`Calorias: ${Math.round(totals.calories)}kcal`)
        .moveDown()
        .text(`Proteína: ${Math.round(totals.protein)}g`)
        .moveDown()
        .text(`Carboidratos: ${Math.round(totals.carbs)}g`)
        .moveDown()
        .text(`Gorduras: ${Math.round(totals.fats)}g`);

      if (preferences.allergens.length > 0) {
        doc
          .font("Helvetica")
          .text("Alergias: ", { continued: true })
          .font("NotoEmoji")
          .text(
            preferences.allergens.map((a) => this.allergenEmojis[a]).join(" "),
            { continued: true }
          )
          .font("Helvetica")
          .text(` - ${preferences.allergens.join(", ")}`)
          .moveDown(2);
      } else {
        doc.font("Helvetica").text("Alergias: Nenhuma").moveDown(2);
      }

      organizedMeals.forEach(({ time, meal }) => {
        console.log(`Escrevendo refeição: ${meal.title} às ${time}`);
        doc.font("Helvetica-Bold").fontSize(14).text(`${meal.title} (${time})`);

        if (meal.allergens.size > 0) {
          doc
            .font("NotoEmoji")
            .text(
              Array.from(meal.allergens)
                .map((a) => this.allergenEmojis[a])
                .join(" ")
            )
            .moveDown(0.5);
        }

        doc.font("Helvetica").fontSize(12).text(meal.content).moveDown(1);
      });

      console.log("Finalizando PDF");
      doc.end();

      return new Promise((resolve, reject) => {
        stream.on("finish", () => {
          console.log("PDF gerado com sucesso:", filePath);
          resolve(filePath);
        });
        stream.on("error", (error) => {
          console.error("Erro ao gerar PDF:", error);
          reject(error);
        });
      });
    } catch (error) {
      console.error("Erro durante geração do PDF:", error);
      throw error;
    }
  }
}
