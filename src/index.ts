import * as dotenv from "dotenv";
import TelegramBot  from "node-telegram-bot-api"

dotenv.config()

const token = process.env.TELEGRAM_TOKEN || ''

console.log(token);

const bot = new TelegramBot(token,{polling:true})

bot.setMyCommands([
  {command: '/start', description:'Start'},
  {command: '/info', description:'Info'}
])



const start = () => {
  bot.on('message', async msg=>{
    const {text, chat} = msg
    const {id : chatId} = chat
    
  
    if (text === '/start') {
      await bot.sendSticker(chatId, 'https://cdn.serif.com/affinity/img/photo/home/0121/og-photo-200120210858.jpg')
      return bot.sendMessage(chatId, `Это учебный проект`)
    }
  
    if (text === '/info') {
      return bot.sendMessage(chatId, `Тебя зовуь ${msg.from?.first_name}`)
    }

    if (text === '/game') {
      await bot.sendMessage(chatId, `Сейчас я загадаю тебе число`)
    }
  
    return bot.sendMessage(chatId, `Я тебя не понимаю`)
  })
}

start()