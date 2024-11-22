const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config();

const apiBaseUrl = process.env.API_BASE_URL;

async function generateResponse(userId, message) {
  return await axios.post(`${apiBaseUrl}/llm/generate-response`, {
    userId,
    message,
  });
}

module.exports = {
  generateResponse,
};
