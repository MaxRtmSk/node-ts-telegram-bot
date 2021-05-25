import dotenv from "dotenv";
import TelegramBot  from "node-telegram-bot-api"

dotenv.config();

const token = process.env.TELEGRAM_TOKEN;

console.log(token);
//es2015
