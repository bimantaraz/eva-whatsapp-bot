const Groq = require("groq-sdk");
require('dotenv').config();
const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY
});

module.exports = async function ask(message) {
    const query = message.body.slice(5);
    try {
        const chatCompletion = await getGroqChatCompletion(query);
        const reply = chatCompletion.choices[0]?.message?.content.trim() || '';
        message.reply(reply);
    } catch (error) {
        console.error('Error with Groq API:', error);
        message.reply('Bot gagal menjalankan AI, silahkan coba beberapa saat lagi');
    }
}

async function getGroqChatCompletion(query) {
    return groq.chat.completions.create({
        messages: [
            {
                role: "user",
                content: query
            }
        ],
        model: "mixtral-8x7b-32768"
    });
}