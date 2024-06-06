const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const fs = require('fs');
require('dotenv').config();

const client = new Client({
  puppeteer: {
    headless: true,
    args: ["--no-sandbox"],
  },
    authStrategy: new LocalAuth({
        clientId: "client-one"
    }),
    webVersionCache: {
        type: 'remote',
        remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2411.2.html',
    },
    authTimeoutMs: 60000,
    qrTimeout: 30000,
});

client.on('qr', (qr) => {
    qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('authenticated', () => {
    console.log('Client is authenticated!');
});

client.on('auth_failure', (msg) => {
    console.error('Authentication failure', msg);
});


async function loadCommands() {
    const commandHandlers = {};
    const commandFiles = fs.readdirSync('./src/commands').filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const commandName = `!${file.slice(0, -3)}`; // Mengambil nama command dari nama file
        const commandModule = await import(`./commands/${file}`); // Import modul command secara dinamis
        commandHandlers[commandName] = commandModule.default; // Simpan handler command
    }

    return commandHandlers;
}

async function handleMessage(message) {
    const commandHandlers = await loadCommands(); // Muat command saat pertama kali pesan diterima
    const command = message.body.split(" ")[0];
    const handler = commandHandlers[command];

    if (handler) {
        await handler(message);
    } else {
        console.log("Untuk melihat command '!help'", message);
    }
}

client.on("message", async (message) => {
    console.log("MESSAGE RECEIVED", message);
    await handleMessage(message);
});

client.initialize()
    .then(() => {
        console.log('Client initialized successfully');
    })
    .catch((err) => {
        console.error('Error initializing client', err);
    });