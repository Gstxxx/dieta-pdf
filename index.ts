import { Bot } from "grammy";
import dotenv from "dotenv";
dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN as string);

bot.command("start", (ctx) => ctx.reply("Started!"));
bot.command("help", (ctx) => ctx.reply("Help text"));

bot.on(":text", (ctx) => ctx.reply("Text!"));
bot.on(":photo", (ctx) => ctx.reply("Photo!"));

bot.start();
