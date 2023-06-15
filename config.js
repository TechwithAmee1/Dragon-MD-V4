const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })

//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'amiyaprogramer@gmail.com'
global.github = 'https://github.com/TechwithAmee1/Dragon-MD-V3'
global.location = 'Sri Lanka'
global.gurl = 'https://instagram.com/mr.amiya.ofc' // add your username
global.sudo = process.env.SUDO || '94767453646'
global.devs = '94767453646';
global.website = 'https://github.com/TechwithAmee1/' //wa.me/+91000000000000
global.THUMB_IMAGE = 'https://i.ibb.co/wRgDy33/20221104-225109.png'
module.exports = {
  aliveimg: process.env.ALIVE_IMAGE || 'https://i.ibb.co/NF7FbF2/20230604-132133.png',
  botname: process.env.BOT_NAME || '𝐃𝐫𝐚𝐠𝐨𝐧 𝐁𝐨𝐭',
  ownername:process.env.OWNER_NAME || '៚֟ᴍ֢ʀͥ.ᴀͣᴍͫɪʏ͙ᴀ֮༒֘ᴏꜰ̐̈́ᴄ֮༒֘ʏᴛ͢⁸⁵⁴¹༆࿐',
  sessionName: process.env.SESSION_ID || 'PUT-HERE',
  author: process.env.PACK_INFO.split(";")[0] || '៚֟ᴍ֢ʀͥ.ᴀͣᴍͫᴇ̐̈́ᴇ͖ꜱ͒ʜ͙ᴀ֮͢༒֩͢⁸⁵⁴¹༆࿐', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Dragon-MD',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  caption: process.env.CAPTION || '_*🪄 𝐒𝐮𝐛𝐬𝐜𝐫𝐢𝐛𝐞 𝐎𝐮𝐫 𝐎𝐟𝐟𝐢𝐜𝐢𝐚𝐥 𝐂𝐡𝐚𝐧𝐧𝐞𝐥 🪄*_ \nhttps://youtube.com/@Dragon-MD-OFC',
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'dragon-md',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || `💯 _*Deverloper*_ :- _៚֟ᴍ֢ʀͥ.ᴀͣᴍͫᴇ̐̈́ᴇ͖ꜱ͒ʜ͙ᴀ֮͢༒֩͢⁸⁵⁴¹༆࿐_\n💯 _*Owner*_ :- _${process.env.OWNER_NAME}_\n💯 _*Bot Name*_ :- 🐉 ᎠᎡᎪᏀϴΝ-ᙢᎠ-Ꮙ4 🧬\n💯 _*Vertion*_ :- 🐉 _Dragon MD V4.0_ ♾\n\n_🐉 .𝚊𝚕𝚒𝚟𝚎 = 𝚋𝚘𝚝 𝚒𝚜 𝚘𝚗𝚕𝚒𝚗𝚎 𝚌𝚑𝚎𝚌𝚔_\n_🐉 .𝚖𝚎𝚗𝚞 = 𝚐𝚎𝚝 𝚋𝚘𝚝 𝚖𝚎𝚗𝚞_\n_🐉 .song = 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚢𝚘𝚞𝚝𝚞𝚋𝚎 𝚜𝚘𝚗𝚐_\n_🐉 .video = 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚢𝚘𝚞𝚝𝚞𝚋𝚎 𝚟𝚒𝚍𝚎𝚘_\n_🐉 .yt = 𝚜𝚎𝚊𝚛𝚌𝚑 𝚒𝚗 𝚢𝚘𝚞𝚝𝚞𝚋𝚎_`,
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'put-key-here',
  heroku: process.env.heroku || false,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '1abfce1e-1bee-4334-9f6c-f4c1cb1cafab' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? 'zeropgg' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v4.0' : process.env.VERSION,
  LANG: process.env.THEME|| 'SI',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
