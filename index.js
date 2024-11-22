const dotenv = require("dotenv");
const TelegramBot = require("node-telegram-bot-api");
const apiService = require("./services/apiService");

dotenv.config();

const bot = new TelegramBot(process.env.TELEGRAM_BOT_TOKEN, { polling: true });

bot.on("message", async (msg) => {
  const chatId = msg.chat.id;
  const userId = msg.from.id;
  const text = msg.text;

  // Decide if weather data is needed (e.g., check if the message is asking for weather)
  const responseRaw = await apiService.generateResponse(userId, text);
  const response = responseRaw.data;

  console.log("response", response);

  // Send response back to the user
  bot.sendMessage(chatId, response);
});
