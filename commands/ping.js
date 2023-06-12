const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Secktor = require('../lib')
const Config = require('../config')
const { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, fetchJson,cmd, sck1 } = require("../lib");
const axios = require('axios')
const speed = require('performance-now')
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)

Secktor.cmd({
        pattern: "ping",
        desc: "To check ping",
        category: "general",
        filename: __filename,
    },
    async(Void, citel) => {
        var inital = new Date().getTime();
        const { key } = await Void.sendMessage(citel.chat, {text: '*_Ping of Dragon-MD-V4 ❗_*'});
        var final = new Date().getTime();
        await Secktor.sleep(1000)
       return await Void.sendMessage(citel.chat, {text: '☢️ *ᴘᴏɴɢ*\n ' + (final - inital) + ' ms', edit: key});
    }
);


Secktor.cmd({
            pattern: "system",
            desc: "Bot System info",
            category: "general",
            react: "📟",
            filename: __filename
        },
        async(Void, citel, text) => {
            var inital = new Date().getTime();
            await citel.reply(`*_Checking System Status of 🐉 Dragon-MD-V4 ❗_*`);
                var final = new Date().getTime();
                const uptime = process.uptime();
                timestampe = speed();
                latensie = speed() - timestampe;
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/COLOMBO')
                    .locale('id')
                const date = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
                return await citel.reply(`\n      *┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄*\n  *_⚕️𝙳𝚛𝚊𝚐𝚘𝚗 𝙼𝙳 - 𝚂𝚢𝚜𝚝𝚎𝚖 𝚂𝚝𝚊𝚝𝚞𝚜 ⚕️_*\n      *┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄*\n\n☢️ *ꜱᴘᴇᴇᴅ :-* ${latensie.toFixed(4)} ms\n⏱️ *ᴜᴘᴛɪᴍᴇ :-* ${runtime(process.uptime())} \n📟 *ᴍᴇᴍᴏʀʏ ᴜꜱᴀɢᴇ :-* ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n💽 *ꜰʀᴇᴇ ᴍᴇᴍᴏʀʏ :-* ${formatp(os.freemem())}\n📆 *ᴅᴀᴛᴇ :-* ${date}\n⏰ *ᴛɪᴍᴇ :-* ${time}\n🧬 *ᴠᴇʀᴛɪᴏɴ :-* 4.0\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`);
            }
    )