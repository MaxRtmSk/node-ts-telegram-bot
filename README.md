# Telegram bot

Общение с облочной базой данных postgress
deploy на облачный сервер, подключение к серверу по SSH

## Libraries

node-telegram-bot-api
nodemon
dotenv

### Install Typescript

npm install -D typescript
npm install -D tslint

npm install -S express
npm install -D @types/express

Вторая команда устанавливает типы Express для поддержки TypeScript. Типы в TypeScript — это файлы, которые обычно имеют расширение .d.ts. Файлы используются для предоставления типовой информации об API, в данном случае структуры Express.

Этот пакет требуется, потому что TypeScript и Express являются независимыми пакетами. Без пакета @types/express у TypeScript нет способа узнавать типы классов Express.

npm i --save-dev @types/node-telegram-bot-api
