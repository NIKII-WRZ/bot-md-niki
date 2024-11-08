const fs = require('fs')
const chalk = require('chalk')

// APIKEY OPEN AI
global.jeropenai  = "ISI APIKEY LU AMBIL DI OPENAI.COM" // ISI APIKEY LU

// API , BAGIAN SINI JAN UBAH SAMA SEKALI \\
global.APIs = {
	alfa: 'https://api.zeeoneofc.my.id', // GAK USAH UBAH LOL
	btz: 'https://api.betabotz.eu.org' // JAN UBAH
}

// APIKEY \\
global.APIKeys = {
	'https://api.zeeoneofc.my.id': 'V24', // ISI APIKEY LU
	'https://api.betabotz.eu.org': 'V36' // Isi key lu
}

global.btz = 'V36'// KEY LU

global.namabot = "JER-BOTZ MD" // UBAH JADI NAMA LU
global.namaowner = "JER OFC" // NAMA OWNER
global.footer_text = "©" + namabot // NAMA BOT
global.pp_bot = fs.readFileSync("./image/allmenubot.jpg") // FOTO BOT MAX 50KB BIAR GA DELAY
global.qris = fs.readFileSync("./image/qris.jpg") // FOTO QRIS MAX 50KB BIAR GA DELLAY
global.owner = ['6283136394680', '6283136394680'] // UBAH NOMOR YANG MAU DI JADIKAN OWNER
global.owner2 = ['6283136394680']
global.pairingNumber = "" // ISI NOMOR BOT LU
// - \\
global.sessionName = 'session' // GAK USAH UBAH
global.prefa = ['', '!', '.', '🐦', '🐤', '🗿'] // GAK USAH UBAH
global.sewabot = ("SEWA CHAT OWNER") // ISI HARGA SEWA BOT LU
global.grubbot = (`*INI KAK LINK GRUB NYA*\n\nhttps://chat.whatsapp.com/DaFIV489FMzL1TCX4tUEa7`) // GANTI LINK GRUB BOT LU \\
// -- \\

// FALSE OR TRUE \\
// TRUE = AKTIF
// FALSE = MATI

global.onlydaftar = false // BEBAS
global.autoTyping = false // BEBAS
global.welcome = false // KALO MAU AUTO WELCOME UBAH JADI true
global.left = false // KALO MAU AUTO LEFT UBAH JADI true
global.anticall = true // TRUE AJA
global.autoblok212 = false // BEBAS
global.autoread = true // BEBAS
global.autorespon = false // BEBAS
global.onlyprem = false // BEBAS
global.onlygrub = true // BEBAS
global.onlygrub2 = false // BEBAS
global.onlypc = false // BEBAS
global.antispam = false // TRUE KALO MAU GA DI SPAM

// - \\
// PEMISAH \\
global.packname = '© JER-BOTZ' //sticker wm ubah
global.author = 'Di Buat Oleh JER OFC' //sticker wm ganti nama kalian

// PANEL
global.seller = ['6283136394680', '6281330969719', '62895336763965'] // UBAH NOMOR YANG MAU DI JADIKAN SELLER PANEL
global.domain = "https://" // DOMAIN PANEL LU
global.apikey = '' // APIKEY PLTA LU
global.capikey = '' // APIKEY PLTC LU
global.eggsnya = '' // ID EGGS
global.docker = 'ghcr.io/parkervcp/yolks:nodejs_21' // NODEJS
global.location = '' // id location
global.storepanel = '© JER OFC'

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})