import TelegramBot  from "node-telegram-bot-api"

const token = '1887742426:AAElRmy2KUglYhvQ_UX-aaQPl5uPtMllmPw'

console.log(token);

const bot = new TelegramBot(token,{polling:true})

bot.on('message', msg=>{
  const {text, chat} = msg
  const {id : chatId} = chat
  bot.sendMessage(chatId, `${text}`)
  console.log(text, chatId)
})