const os = require('os')
const moment = require("moment-timezone")
const fs = require("fs")
const Config = require('../config')
let { fancytext, tlang, tiny, runtime, formatp, botpic, prefix, sck1, getBuffer } = require("../lib");
const long = String.fromCharCode(8206)
const readmore = long.repeat(4001)
const Secktor = require('../lib/commands')
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "help",
            alias: ["menu"],
            desc: "Help list",
            category: "general",
            react: "📜",
            filename: __filename
        },
        async(Void, citel, text) => {
            const { commands } = require('../lib');
            if (text.split(" ")[0]) {
                let arr = [];
                const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
                if (!cmd) return await citel.reply("*❌No Such commands.*");
                else arr.push(`*🍁Command:* ${cmd.pattern}`);
                if (cmd.category) arr.push(`*🧩Category:* ${cmd.category}`);
                if (cmd.alias) arr.push(`*🧩Alias:* ${cmd.alias}`);
                if (cmd.desc) arr.push(`*🧩Description:* ${cmd.desc}`);
                if (cmd.use) arr.push(`*〽️Usage:*\n \`\`\`${prefix}${cmd.pattern} ${cmd.use}\`\`\``);
                return await citel.reply(arr.join('\n'));
            } else {
                const cmds = {}
                commands.map(async(command, index) => {
                    if (command.dontAddCommandList === false && command.pattern !== undefined) {
                        if (!cmds[command.category]) cmds[command.category] = []
                        cmds[command.category].push(command.pattern)
                    }
                })
                const time = moment(moment())
                    .format('HH:mm:ss')
                moment.tz.setDefault('Asia/COLOMBO')
                    .locale('id')
                const date = moment.tz('Asia/Colombo').format('DD/MM/YYYY')
                let total = await sck1.countDocuments()
                let str = `❂┏「 Hi 👋 , ${citel.pushName} 」❂\n┏┫✑  How Are You? 🤭\n┇┗━━━━━━━━━━━━┉◈\n┗━「 𝘽𝙊𝙏 𝙄𝙉𝙁𝙊 」       \n    ┇✘ʀᴜɴᴛɪᴍᴇ : ${runtime(process.uptime())}\n    ┇✘ᴅᴀᴛᴇ : ${date}\n    ┇✘ᴛɪᴍᴇ : ${time}\n    ┇✘ʙᴏᴛ ɴᴀᴍᴇ : Dragon MD V4\n    ┋✘ᴄᴏᴍᴍᴀɴᴅꜱ : ${commands.length}\n    ┋✘ᴍᴇᴍᴏʀʏ ᴜꜱᴀɢᴇ : ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}\n    ┋✘ʟᴀɴɢᴜᴀɢᴇ : ${tlang().lang}\n    ┋✘ᴄᴏᴍᴍᴀɴᴅ ᴘʀᴇꜰɪx : [ ${prefix} ]\n    ┋✘ʙᴏᴛ ᴜꜱᴇʀꜱ : ${total}\n    ┇✘ᴏᴡɴᴇʀ ɴᴀᴍᴇ :${Config.ownername}\n    ┋✘ᴅᴇᴠᴇʟᴏᴘᴇʀ ɴᴀᴍᴇ : 𝙼𝚁.𝙰𝙼𝙴𝙴𝚂𝙷𝙰\n┏━┫✘ᴏᴡɴᴇʀ ɴᴏ : 94767453646\n┇  ┗━━━━━━━━━━━━┉ ⳹\n┗━「 🎊 Subscribe YT Channel 🎊 」\n   ┇ https://youtube.com/@Dragon-MD-OFC\n   ┗┳━━━━━━━━━━┉ ⳹\n     ┗━━━━━━━━━━━━━┉◈\n\n◉┈──『 𝘾𝞗𝞛𝞛𝞓𝞜𝘿𝙎』──┈◉\n\n┏━━❰『 ᴅᴏᴡɴʟᴏᴀᴅᴇʀ 』❱━━❐\n┃\n┇ ❂➻✯ .song\n┇ ❂➻✯ .video\n┇ ❂➻✯ .docsong\n┇ ❂➻✯ .docvideo\n┇ ❂➻✯ .highvideo\n┇ ❂➻✯ .songlist\n┇ ❂➻✯ .videolist\n┇ ❂➻✯ .mediafire\n┇ ❂➻✯ .ringtone\n┇ ❂➻✯ .tgs\n┇ ❂➻✯ .insta\n┇ ❂➻✯ .pint\n┇ ❂➻✯ .play\n┇ ❂➻✯ .fb\n┇ ❂➻✯ .tt\n┇ ❂➻✯ .fbs\n┇ ❂➻✯ .tts\n┇ ❂➻✯ .apk\n┇ ❂➻✯ .dadu\n┇ ❂➻✯ .playlist\n┇\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ɢᴇɴᴇʀᴀʟ 』❱━━❐\n┃\n┇ ❂➻✯ .paste\n┇ ❂➻✯ .help\n┇ ❂➻✯ .devmenu\n┇ ❂➻✯ .owner\n┇ ❂➻✯ .file\n┇ ❂➻✯ .pastebin\n┇ ❂➻✯ .chat\n┇ ❂➻✯ .script\n┇ ❂➻✯ .status\n┇ ❂➻✯ .leaderboard\n┇ ❂➻✯ .ping\n┇ ❂➻✯ .system\n┇ ❂➻✯ .alive\n┇\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ɢᴀᴍᴇ 』❱━━❐\n┃\n┇ ❂➻✯ .delttt\n┇ ❂➻✯ .ttt\n┇\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ꜰᴜɴ 』❱━━❐\n┃\n┇ ❂➻✯ .ship\n┇ ❂➻✯ .question\n┇ ❂➻✯ .truth\n┇ ❂➻✯ .dare\n┇ ❂➻✯ .meme\n┇\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ᴏᴡɴᴇʀ 』❱━━❐\n┃\n┇ ❂➻✯ .plugin\n┇ ❂➻✯ .remove\n┇ ❂➻✯ .install\n┇ ❂➻✯ .join\n┇ ❂➻✯ .unblock\n┇ ❂➻✯ .ujid\n┇ ❂➻✯ .block\n┇ ❂➻✯ .addnote\n┇ ❂➻✯ .qr\n┇ ❂➻✯ .shell\n┇ ❂➻✯ .eval\n┇ ❂➻✯ .delnote\n┇ ❂➻✯ .delallnotes\n┇ ❂➻✯ .ban\n┇ ❂➻✯ .unban\n┇ ❂➻✯ .allnotes\n┇ ❂➻✯ .restart\n┇\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ᴍɪꜱᴄ 』❱━━❐\n┃\n┇ ❂➻✯ .getvar\n┇ ❂➻✯ .getallvar\n┇ ❂➻✯ .setvar\n┇ ❂➻✯ .delvar\n┇ ❂➻✯ .setwelcome\n┇ ❂➻✯ .setgoodbye\n┇ ❂➻✯ .readmore\n┇ ❂➻✯ .uptime\n┇ ❂➻✯ .pick\n┇ ❂➻✯ .nsfw\n┇ ❂➻✯ .fliptext\n┇ ❂➻✯ .mp4fromurl\n┇ ❂➻✯ .events\n┇ ❂➻✯ .emix\n┇ ❂➻✯ .chatbot\n┇ ❂➻✯ .ebinary\n┇ ❂➻✯ .dbinary\n┇ ❂➻✯ .botpic\n┇ ❂➻✯ .url\n┇\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ᴜꜱᴇʀ 』❱━━❐\n┃\n┇ ❂➻✯ .approve\n┇ ❂➻✯ .disapprove\n┇ ❂➻✯ .fullpp\n┇\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ᴄᴏɴᴠᴇʀᴛᴇʀ 』❱━━❐\n┃\n┇ ❂➻✯ .tophoto\n┇ ❂➻✯ .fancy\n┇ ❂➻✯ .tiny\n┇ ❂➻✯ .toaudio\n┇ ❂➻✯ .logo\n┇ ❂➻✯ .ss\n┇ ❂➻✯ .ssd\n┇ ❂➻✯ .trt\n┃\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ᴇᴄᴏɴᴏᴍʏ 』❱━━❐\n┃\n┇ ❂➻✯ .daily\n┇ ❂➻✯ .resetwallet\n┇ ❂➻✯ .capacity\n┇ ❂➻✯ .deposit\n┇ ❂➻✯ .lb\n┇ ❂➻✯ .transfer\n┇ ❂➻✯ .wallet\n┇ ❂➻✯ .give\n┇ ❂➻✯ .bank\n┇ ❂➻✯ .rob\n┇ ❂➻✯ .withdraw\n┇ ❂➻✯ .gamble\n┇ ❂➻✯ .slot2\n┇ ❂➻✯ .slot\n┇\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ɢʀᴏᴜᴘ 』❱━━❐\n┃\n┇ ❂➻✯ .support\n┇ ❂➻✯ .warn\n┇ ❂➻✯ .tagall\n┇ ❂➻✯ .request\n┇ ❂➻✯ .retrive\n┇ ❂➻✯ .resetwarn\n┇ ❂➻✯ .poll\n┇ ❂➻✯ .profile\n┇ ❂➻✯ .rank\n┇ ❂➻✯ .promote\n┇ ❂➻✯ .kick\n┇ ❂➻✯ .memegen\n┇ ❂➻✯ .group\n┇ ❂➻✯ .grouppic\n┇ ❂➻✯ .hidetag\n┇ ❂➻✯ .add\n┇ ❂➻✯ .getjids\n┇ ❂➻✯ .demote\n┇ ❂➻✯ .del\n┇ ❂➻✯ .checkwarn\n┇ ❂➻✯ .broadcast\n┇ ❂➻✯ .antilink\n┇ ❂➻✯ .act\n┇ ❂➻✯ .deact\n┇\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ꜱᴛɪᴄᴋᴇʀ 』❱━━❐\n┃\n┇ ❂➻✯ .attp\n┇ ❂➻✯ .steal\n┇ ❂➻✯ .attp\n┇ ❂➻✯ .ptt\n┇ ❂➻✯ .sticker\n┇ ❂➻✯ .quotely\n┃\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ꜱᴇᴀʀᴄʜ 』❱━━❐\n┃\n┇ ❂➻✯ .findvideo\n┇ ❂➻✯ .findsong\n┇ ❂➻✯ .yts\n┇ ❂➻✯ .npm\n┇ ❂➻✯ .movie\n┇ ❂➻✯ .weather\n┇ ❂➻✯ .horo\n┇ ❂➻✯ .google\n┇ ❂➻✯ .img\n┇ ❂➻✯ .couplepp\n┇ ❂➻✯ .iswa\n┇\n┗━━━━━━━━━━━❏\n\n┏━━❰『 ᴍᴏᴅᴇʀᴀᴛɪᴏɴ 』❱━━❐\n┃\n┇ ❂➻✯ .amute\n┇ ❂➻✯ .aunmute\n┇ ❂➻✯ .dunmute\n┇ ❂➻✯ .dmute\n┇\n┗━━━━━━━━━━━❏`

                let buttonMessaged = {
                    image: { url: `https://i.ibb.co/NF7FbF2/20230604-132133.png` },
                    caption: str,
                    headerType: 4,
                    contextInfo: {
                            externalAdReply: {
                            title: `🐲 ᴅʀᴀɢᴏɴ-ᴍᴅ-ᴠ4 🐉`,
                            body: `ᴍᴀᴅᴇ ʙʏ ៚֟ᴍ֢ʀͥ.ᴀͣᴍͫᴇ̐̈́ᴇ͖ꜱ͒ʜ͙ᴀ֮͢༒֩͢⁸⁵⁴¹༆࿐`,
                            renderLargerThumbnail: true,
                            thumbnailUrl: `https://i.ibb.co/wRgDy33/20221104-225109.png`,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(`https://i.ibb.co/wRgDy33/20221104-225109.png`),
                            sourceUrl: `https://youtube.com/@Dragon-MD-OFC`,
                                    },
                            },
                    };
                const txt2 = await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });
        await Void.sendMessage(citel.chat, { react: {
        text: "🐉",
        key: txt2.key,
            } } )
            }
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
            pattern: "devmenu",
            desc: "list menu",
            category: "general",
            react: "🐉"
        },
        async(Void, citel) => {
            const { commands } = require('../lib');
            let str = `
╭━━〘 ` + fancytext(Config.ownername.split(' ')[0], 58) + ` 〙━━──⊷`
            str += '```' + `
┃ ⛥╭──────────────      
┃ ⛥│ User: ${citel.pushName}
┃ ⛥│ Theme: ${tlang().title}
┃ ⛥│ Prefix: ${prefix}
┃ ⛥│ Owner: ${Config.ownername}
┃ ⛥│ Commands: ${commands.length}
┃ ⛥│ Uptime: ${runtime(process.uptime())}
┃ ⛥│ Mem: ${formatp(os.totalmem() - os.freemem())}/${formatp(os.totalmem())}
┃ ⛥│  
┃ ⛥╰───────────
╰━━━━━━━━━━━──⊷\n` + '```'
            str += `╭━━━━━━━━━━━────⊷\n`
            str += `┃ ⛥ ╭─────────────\n`
            for (let i = 0; i < commands.length; i++) {
             if(commands[i].pattern==undefined) continue
                str += `┃ ⛥ │ ➛ ${i+1}. ` + commands[i].pattern + '\n'
            }
            str += `┃ ⛥ ╰─────────────\n`
            str += `╰━━━━━━━━━━━───⊷\n`
            return Void.sendMessage(citel.chat, { image: { url: THUMB_IMAGE }, caption: str })
        }
    )
    //---------------------------------------------------------------------------
Secktor.cmd({
        pattern: "owner",
        desc: "To check ping",
        category: "general",
        react: "🤵",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + Config.ownername + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=' + owner[0] + ':+' + owner[0] + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: Config.ownername,
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: `https://wa.me/+` + owner[0] + '?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
        pattern: "dev",
        alias: ["developer"],
        desc: "To check ping",
        category: "general",
        react: "👨‍💻",
        filename: __filename
    },
    async(Void, citel) => {
        const Config = require('../config')
        const vcard = 'BEGIN:VCARD\n' +
            'VERSION:3.0\n' +
            'FN:' + '៚֟ᴍ֢ʀͥ.ᴀͣᴍͫᴇ̐̈́ᴇ͖ꜱ͒ʜ͙ᴀ֮͢༒֩͢⁸⁵⁴¹༆࿐' + '\n' +
            'ORG:;\n' +
            'TEL;type=CELL;type=VOICE;waid=94767453646:+94767453646' + '\n' +
            'END:VCARD'
        let buttonMessaged = {
            contacts: { displayName: Config.ownername, contacts: [{ vcard }] },
            contextInfo: {
                externalAdReply: {
                    title: '៚֟ᴍ֢ʀͥ.ᴀͣᴍͫᴇ̐̈́ᴇ͖ꜱ͒ʜ͙ᴀ֮͢༒֩͢⁸⁵⁴¹༆࿐',
                    body: 'Touch here.',
                    renderLargerThumbnail: true,
                    thumbnailUrl: ``,
                    thumbnail: log0,
                    mediaType: 2,
                    mediaUrl: '',
                    sourceUrl: 'https://wa.me/+94767453646?text=Hii bro,I am ' + citel.pushName,
                },
            },
        };
        return await Void.sendMessage(citel.chat, buttonMessaged, {
            quoted: citel,
        });

    }
)

Secktor.cmd({
    pattern: "file",
    desc: "to get extact name where that command is in repo.\nSo any user can edit that.",
    category: "general",
    react: "✨",
    filename: __filename
},
async(Void, citel, text) => {
 const { commands } = require('../lib');
 let arr = [];
        const cmd = commands.find((cmd) => cmd.pattern === (text.split(" ")[0].toLowerCase()))
        if (!cmd) return await citel.reply("*❌No Such commands.*");
        else arr.push(`*🍁Command:* ${cmd.pattern}`);
        if (cmd.category) arr.push(`*🧩Type:* ${cmd.category}`);
        if(cmd.filename) arr.push(`✨FileName: ${cmd.filename}`)
        return await citel.reply(arr.join('\n'));


})
