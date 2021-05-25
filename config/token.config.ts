import * as dotenv from "dotenv";
dotenv.config();

export default {
  TelegramToken: process.env.TELEGRAM_TOKEN ?? '',
 }