const API_KEY = process.env.OPENWEATHERMAP_API_KEY;
const axios = require('axios');

const weatherEmojis = {
  'Thunderstorm': '⛈️',
  'Drizzle': '🌧️',
  'Rain': '🌧️',
  'Snow': '❄️',
  'Atmosphere': '🌫️',
  'Clear': '☀️',
  'Clouds': '☁️'
};

module.exports = async function cuaca(message, args) {
  const location = message.body.slice(7);

  if (!location) {
    message.reply('Mohon masukkan lokasi yang ingin Anda ketahui cuacanya.');
    return;
  }

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric&lang=id`);
    const data = response.data;

    const weatherDescription = data.weather[0].description;
    const weatherMain = data.weather[0].main;
    const temperature = data.main.temp;
    const feelsLike = data.main.feels_like;
    const humidity = data.main.humidity;

    // Gunakan emoji berdasarkan kategori cuaca
    const emoji = weatherEmojis[weatherMain] || '❓'; 

    message.reply(`
    *Cuaca di ${location}:*
      
      ${emoji}  *${weatherDescription}*
      🌡️  Suhu: *${temperature}°C*
      🥵  Terasa seperti: *${feelsLike}°C*
      💧  Kelembaban: *${humidity}%*
    `);
  } catch (error) {
    console.error(error);
    message.reply('Maaf, terjadi kesalahan saat mengambil data cuaca.');
  }
};