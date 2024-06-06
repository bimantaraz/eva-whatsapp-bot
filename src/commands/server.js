const os = require('os');

module.exports = async function server(message) {
    message.reply(`
    🖥️  Informasi Server:

    🧠  Prosesor: ${os.cpus()[0].model}
    💾  Memori: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB
    💿  Disk: ${(os.totalmem() / 1024 / 1024 / 1024).toFixed(2)} GB
    ⏰  Waktu Aktif: ${Math.floor(os.uptime() / 3600)} jam
    `);
}