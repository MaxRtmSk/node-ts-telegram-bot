import TelegramBot  from "node-telegram-bot-api"
import token from './config/token.config'

console.log(token);

const bot = new TelegramBot(token.TelegramToken,{polling:true})