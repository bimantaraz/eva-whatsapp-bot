const fs = require('fs');

// Membaca file teka_teki.json
const riddles = JSON.parse(fs.readFileSync('./teka_teki.json', 'utf-8'));

let currentRiddle = null;

// Fungsi untuk mendapatkan teka-teki acak
function getRandomRiddle() {
  const randomIndex = Math.floor(Math.random() * riddles.length);
  return riddles[randomIndex];
}

module.exports = function tekaTeki(message) {
  const args = message.body.split(' '); // Memisahkan pesan menjadi array berdasarkan spasi

  if (args[0] === '!tekateki') { // Memeriksa apakah pesan dimulai dengan '!tekateki'
    if (args[1] === 'mulai') {
      if (currentRiddle) {
        return message.reply('Masih ada teka-teki yang belum terjawab!');
      }

      currentRiddle = getRandomRiddle();
      return message.reply(currentRiddle.question); // Mengembalikan pesan agar fungsi berhenti di sini
    } else if (args[1] === 'jawab') {
      if (!currentRiddle) {
        return message.reply('Tidak ada teka-teki yang aktif. Ketik !tekateki mulai untuk memulai.');
      }

      const userAnswer = args.slice(2).join(' ').toLowerCase(); // Mengambil jawaban pengguna dengan benar
      if (userAnswer === currentRiddle.answer.toLowerCase()) { // Membandingkan jawaban tanpa case-sensitive
        message.reply('Benar! ');
        currentRiddle = null;
      } else {
        message.reply(`Salah, coba lagi!`); // Tidak memberikan jawaban yang benar secara langsung
      }
    } else {
      message.reply(`
        Cara bermain teka-teki:
        - Ketik !tekateki mulai untuk memulai teka-teki baru.
        - Ketik !tekateki jawab [jawabanmu] untuk menjawab teka-teki.
      `);
    }
  }
};