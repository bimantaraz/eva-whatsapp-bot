module.exports = async function help(message) {
    const helper = `
        *Berikut adalah daftar perintah yang tersedia:*

        1. *!ask* <pertanyaan> 🤔 - Ajukan pertanyaan apa pun!
        2. *!cuaca* <lokasi> ☀️ - Cek cuaca di lokasi tertentu.
        3. *!help* ℹ️ - Tampilkan pesan bantuan ini.
        4. *!server* 🖥️ - Periksa status server.
        5. *!berita* 📰 - Dapatkan berita terbaru.
        6. *!tekateki* <mulai> ❓ - Pecahkan teka-teki! Untuk menjawab, gunakan *!tekateki jawab <jawabanmu>*.
    `;

    message.reply(helper);
}
