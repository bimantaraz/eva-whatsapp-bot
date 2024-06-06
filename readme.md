# Eva WhatsApp Bot

Eva adalah bot WhatsApp yang dapat membantu Anda dengan berbagai tugas, seperti menjawab pertanyaan, memberikan informasi cuaca, berita terbaru, dan bahkan memainkan teka-teki.

## Fitur

- **Ask AI**: Ajukan pertanyaan apa pun, dan Eva akan mencoba menjawabnya dengan bantuan AI.
- **Cuaca**: Dapatkan informasi cuaca terkini untuk lokasi tertentu.
- **Berita**: Dapatkan berita terbaru dari berbagai kategori.
- **Teka-teki**: Mainkan teka-teki dan pecahkan jawabannya.
- **Bantuan**: Tampilkan daftar perintah yang tersedia.
- **Status Server**: Periksa informasi tentang server tempat Eva berjalan.

## Persyaratan

- Node.js (versi terbaru)
- Akun WhatsApp
- API Key untuk OpenWeatherMap (untuk fitur cuaca)
- API Key untuk NewsAPI (untuk fitur berita)
- API Key untuk Groq (untuk fitur Ask AI)

## Instalasi

1. Klon repositori ini:

git clone https://github.com/username/eva-whatsapp-bot.git

2. Masuk ke direktori proyek:

cd eva-whatsapp-bot

3. Install dependensi:

npm install

4. Buat file `.env` di direktori proyek dan tambahkan variabel lingkungan berikut:

OPENWEATHERMAP_API_KEY=<your_openweathermap_api_key> NEWS_API=<your_news_api_key> GROQ_API_KEY=<your_groq_api_key>


5. Jalankan bot:
node src/index.js


Bot akan memindai kode QR WhatsApp dan siap digunakan setelah berhasil terhubung.

## Penggunaan

Untuk menggunakan Eva, kirimkan pesan ke nomor WhatsApp bot dengan format:

- `!ask <pertanyaan>`: Ajukan pertanyaan apa pun.
- `!cuaca <lokasi>`: Dapatkan informasi cuaca untuk lokasi tertentu.
- `!berita`: Dapatkan berita terbaru (kategori default: umum).
- `!berita <kategori>`: Dapatkan berita terbaru untuk kategori tertentu.
- `!tekateki mulai`: Mulai permainan teka-teki baru.
- `!tekateki jawab <jawaban>`: Jawab teka-teki yang sedang berlangsung.
- `!help`: Tampilkan daftar perintah yang tersedia.
- `!server`: Periksa informasi tentang server tempat Eva berjalan.

## Kontribusi

Kontribusi sangat diapresiasi! Jika Anda menemukan bug atau memiliki saran untuk perbaikan, silakan buat issue baru atau kirimkan pull request.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).


Pastikan untuk mengganti <your_openweathermap_api_key>, <your_news_api_key>, dan <your_groq_api_key> dengan kunci API yang sebenarnya. Anda juga dapat menyesuaikan bagian lain dari README sesuai dengan kebutuhan proyek Anda.