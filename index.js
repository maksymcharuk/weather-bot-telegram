const dotenv = require("dotenv");
const TelegramBot = require("node-telegram-bot-api");

const apiService = require("./services/api.service");

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const message = msg.text;

  const response = await apiService.generateResponse(userId, message);

  bot.sendMessage(chatId, response.data);
});
