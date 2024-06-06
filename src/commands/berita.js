const axios = require('axios');

const NEWS_API_KEY = process.env.NEWS_API; // Ganti dengan API Key Anda dari NewsAPI.org
const BASE_URL = 'https://newsapi.org/v2/top-headlines';

module.exports = async function berita(message) {
  const args = message.body.split(' ');
  let category = 'general'; // Default category

  if (args.length > 1) {
    category = args[1].toLowerCase(); // Ambil kategori dari argumen
  }

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        country: 'id', // Kode negara (Indonesia)
        category: category,
        apiKey: NEWS_API_KEY,
      },
    });

    const articles = response.data.articles;

    if (articles.length === 0) {
      return message.reply(`Maaf, tidak ada berita ditemukan.`);
    }

    let newsList = `5 Berita terbaru":\n\n`;
    articles.slice(0, 5).forEach((article, index) => { // Tampilkan 5 berita teratas
      newsList += `${index + 1}. *${article.title}*\n${article.url}\n\n`;
    });

    message.reply(newsList);
  } catch (error) {
    console.error(`Gagal mengambil data berita: ${error.message}`);
    message.reply(`Maaf, terjadi kesalahan saat mengambil berita.`);
  }
};