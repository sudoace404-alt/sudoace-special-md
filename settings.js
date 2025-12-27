const fs = require('fs');

const chalk = require('chalk');



/*

	* Create By Sudoace

	* Follow https://github.com/sudoace404-alt

*/



//~~~~~~~~~~~~< GLOBAL SETTINGS >~~~~~~~~~~~~\\



global.owner = ['6283867677851'] 

global.author = 'sudoace'

global.botname = 'sudoace Bot'

global.packname = 'Bot WhatsApp'

global.listprefix = ['+','!','.']



/*

- Setting Author, Packname, Botname sekarang pakai command

- Walau sudah diganti tidak berubah

- setbotauthor, setbotpackname, setbotname

*/



global.listv = ['•','●','■','✿','▲','➩','➢','➣','➤','✦','✧','△','❀','○','□','♤','♡','◇','♧','々','〆']

global.tempatDB = 'database.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'

global.tempatStore = 'baileys_store.json' // Taruh url mongodb di sini jika menggunakan mongodb. Format : 'mongodb+srv://...'

global.pairing_code = true

global.number_bot = '' // Kalo pake panel bisa masukin nomer di sini, jika belum ambil session. Format : '628xx'



global.fake = {

  listfakedocs: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','application/vnd.openxmlformats-officedocument.presentationml.presentation','application/vnd.openxmlformats-officedocument.wordprocessingml.document','application/pdf'],

}



global.limit = {

	free: 20,

	premium: 999,

	vip: 9999

}



global.money = {

	free: 10000,

	premium: 1000000,

	vip: 10000000

}



global.mess = {

	owner: 'Fitur Khusus Owner!',

	admin: 'Fitur Khusus Admin!',

	botAdmin: 'Bot Bukan Admin!',

	group: 'Gunakan Di Group!',

	private: 'Gunakan Di Privat Chat!',

	limit: 'Limit Anda Telah Habis!',

	prem: 'Khusus User Premium!',

	wait: 'Loading...',

	error: 'Error!',

	done: 'Done'

}



// Lainnya



global.badWords = ['tolol','goblok','asu','pantek','kampret','ngentot','jancok','kontol','memek','lonte']

global.chatLength = 1000



//~~~~~~~~~~~~~~~< PROCESS >~~~~~~~~~~~~~~~\\



let file = require.resolve(__filename)

fs.watchFile(file, () => {

	fs.unwatchFile(file)

	console.log(chalk.redBright(`Update ${__filename}`))

	delete require.cache[file]

	require(file)

});
