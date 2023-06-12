const { addnote,cmd, sck1, delnote, allnotes, delallnote, tlang, botpic, runtime, prefix, Config } = require('../lib')
    //---------------------------------------------------------------------------
cmd({
            pattern: "addnote",
            category: "owner",
            desc: "Adds a note on db.",
            filename: __filename
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            if (!text) return citel.reply("🔍 Please provide me a valid gist url.")
            await addnote(text)
            return citel.reply(`New note ${text} added in mongodb.`)

        }
    )
 
    //---------------------------------------------------------------------------
cmd({
            pattern: "qr",
            category: "owner",
            filename: __filename,
            desc: "Sends CitelsVoid Qr code to scan and get your session id."
        },
        async(Void, citel, text) => {
            if (text) {
                let h = await getBuffer(`https://api.qrserver.com/v1/create-qr-code/?size=500x500&data=${text}`)
                await Void.sendMessage(citel.chat, { image: h })
                return
            }

            let buttonMessaged = {
                image: { url: 'citel-x.herokuapp.com/session' },
                caption: `*_Scan Qr within 15 seconds_*\nYou'll get session id in your log number.`,
                footer: ` Session`,
                headerType: 4,
                contextInfo: {
                    externalAdReply: {
                        title: 'Dragon Session',
                        body: 'Get you Session ID',
                        thumbnail: log0,
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: ``,
                    },

                },

            };
            await Void.sendMessage(citel.chat, buttonMessaged, {
                quoted: citel,

            });
            await sleep(20 * 1000)
            return citel.reply('Your session is over now.')


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "unban",
            category: "misc",
            filename: __filename,
            desc: "Unbans banned user (from using bot)."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply("This command is onlt for my Owner")
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply("Please mention any user.❌")
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        console.log(usr.ban)
                        return citel.reply(`${pushnamer} is unbanned.`)
                    } else {
                        console.log(usr.ban)
                        if (usr.ban !== "true") return citel.reply(`${usr.name} is already unbanned.`)
                        await sck1.updateOne({ id: users }, { ban: "false" })
                        return citel.reply(`${usr.name} is free as a bird now`)
                    }
                })
            } catch {
                return citel.reply("Please mention any user.❌")
            }


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "url",
            category: "misc",
            filename: __filename,
            desc: "image to url."
        },
        async(Void, citel, text) => {
            if (!citel.quoted) return citel.reply(`Pls mention me any image/video and type ${prefix + command} to upload my ${tlang().greet}`);
            let mime = citel.quoted.mtype
            let media = await Void.downloadAndSaveMediaMessage(citel.quoted);
            if (/image/.test(mime)) {
                let anu = await TelegraPh(media);
                return citel.reply(`Here is url of your uploaded Media on Telegraph.\n\n` + util.format(anu));
            } else if (!/image/.test(mime)) {
                let anu = await TelegraPh(media);
                await fs.unlinkSync(media);
                return citel.reply(`Here is url of your uploaded Media on Telegraph.\n\n` + util.format(anu));
            }
            await fs.unlinkSync(media);
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "trt",
            category: "misc",
            filename: __filename,
            desc: "Translate\'s given text in desird language."
        },
        async(Void, citel, text) => {
            const translatte = require("translatte");
            if (!citel.quoted) return citel.reply("*Please reply to any message.*");
            if (!citel.quoted) return citel.reply(`Please mention or give tex.`);
            let textt = citel.quoted.text;
            whole = await translatte(textt, {
                from: text.split("/")[0] || "auto",
                to: text.split("/")[1] || "si",
            });
            if ("text" in whole) {
                return await citel.reply("*Translated Into🔎:* " + " ```" + (text.split(" ")[0] || "Auto to Sinhala") + "```\n" + " *From Language🔎:* " + " ```" + (text[1] || "Auto Detect") + "```\n" + "*Result️:* " + " ```" + whole.text + "```");
            }

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "shell",
            category: "owner",
            filename: __filename,
            desc: "Runs command in Heroku(server) shell."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return citel.reply(tlang().owner)
            const { exec } = require("child_process")
            exec(text, (err, stdout) => {
                if (err) return citel.reply(`----${tlang().title}----\n\n` + err)
                if (stdout) {
                    return citel.reply(`----${tlang().title}----\n\n` + stdout)
                }
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "eval",
            category: "owner",
            filename: __filename,
            desc: "Runs js code on node server."
        },
        async(Void, citel, text,{ isCreator }) => {
            if (!isCreator) return
            try {
                let resultTest = eval('const a = async()=>{\n' + text + '\n}\na()');
                if (typeof resultTest === "object")
                    citel.reply(JSON.stringify(resultTest));
                else citel.reply(resultTest.toString());
            } catch (err) {
                return  citel.reply(err.toString());
            }
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "delnote",
            category: "owner",
            filename: __filename,
            desc: "Deletes note from db."
        },
        async(Void, citel, text,{ isCreator }) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delnote(text.split(" ")[0])
             return citel.reply(`Id: ${text.split(" ")[0]}\'s note has been deleted from mongodb.`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "delallnotes",
            category: "owner",
            filename: __filename,
            desc: "Deletes all notes from db."
        },
        async(Void, citel, text, isCreator) => {
            const { tlang } = require('../lib/scraper')
            if (!isCreator) return citel.reply(tlang().owner)
            await delallnote()
             return citel.reply(`All notes deleted from mongodb.`)

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "ban",
            category: "owner",
            filename: __filename,
            desc: "Bans user from using bot."
        },
        async(Void, citel, text,{ isCreator}) => {
            if (!isCreator) return citel.reply(tlang().owner)
            try {
                let users = citel.mentionedJid ? citel.mentionedJid[0] : citel.msg.contextInfo.participant || false;
                if (!users) return citel.reply(`❌ Please mention any user ${tlang().greet}.`)
                let pushnamer = Void.getName(users);
                sck1.findOne({ id: users }).then(async(usr) => {
                    if (!usr) {
                        await new sck1({ id: users, ban: "true" }).save()
                        return citel.reply(`_Banned ${usr.name} from Using Commands._`)
                    } else {
                        if (usr.ban == "true") return citel.reply(`${pushnamer} is already Banned from Using Commands`)
                        await sck1.updateOne({ id: users }, { ban: "true" })
                        return citel.reply(`_Successfully Banned ${usr.name} from Using Commands._`)
                    }
                })
            } catch (e) {
                console.log(e)
                return citel.reply("Please mention any user.❌ ")
            }


        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "alive",
            category: "general",
            filename: __filename,
            desc: "is bot alive??",
            react: "🐲"
        },
        async(Void, citel, text) => {

            let alivemessage = `${Config.ALIVE_MESSAGE}` || `💯 _*Deverloper*_ :- _៚֟ᴍ֢ʀͥ.ᴀͣᴍͫᴇ̐̈́ᴇ͖ꜱ͒ʜ͙ᴀ֮͢༒֩͢⁸⁵⁴¹༆࿐_\n💯 _*Owner*_ :- _${Config.ownername}_\n💯 _*Bot Name*_ :- 🐉 ᎠᎡᎪᏀϴΝ-ᙢᎠ-Ꮙ4 🧬\n💯 _*Uptime*_ :- ${runtime(process.uptime())}\n💯 _*Vertion*_ :- 🐉 _Dragon MD V4.0_ ♾\n\n_🐉 .𝚊𝚕𝚒𝚟𝚎 = 𝚋𝚘𝚝 𝚒𝚜 𝚘𝚗𝚕𝚒𝚗𝚎 𝚌𝚑𝚎𝚌𝚔_\n_🐉 .𝚖𝚎𝚗𝚞 = 𝚐𝚎𝚝 𝚋𝚘𝚝 𝚖𝚎𝚗𝚞_\n_🐉 .song = 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚢𝚘𝚞𝚝𝚞𝚋𝚎 𝚜𝚘𝚗𝚐_\n_🐉 .video = 𝚍𝚘𝚠𝚗𝚕𝚘𝚊𝚍 𝚢𝚘𝚞𝚝𝚞𝚋𝚎 𝚟𝚒𝚍𝚎𝚘_\n_🐉 .yt = 𝚜𝚎𝚊𝚛𝚌𝚑 𝚒𝚗 𝚢𝚘𝚞𝚝𝚞𝚋𝚎_`
 
           const alivtxt = '\n🤖 ℍ𝕖𝕪 *' + citel.pushName + '* , 𝔹𝕠𝕥 𝕚𝕤 𝕆𝕟𝕝𝕚𝕟𝕖 ℕ𝕠𝕨 🤖\n\n⚕️ ɯԋαƚ ყσυ ɯαɳƚ ƚσ ԃσ? ⚕️\n👨‍💻 *Tԋιʂ ιʂ 🐉 ᎠᎡᎪᏀϴΝ-ᙢᎠ-Ꮙ4 🧬.*\n*🐲 A bot developed by ❰ 🧬 ៚֟ᴍ֢ʀͥ.ᴀͣᴍͫᴇ̐̈́ᴇ͖ꜱ͒ʜ͙ᴀ֮͢༒֩͢⁸⁵⁴¹༆࿐ 🤵‍♂️ ❱*\n\n⏱️ *_𝚄𝙿𝚃𝙸𝙼𝙴_ :* ' + runtime(process.uptime()) + '\n\n*_🌐 𝚈𝙾𝚄𝚃𝚄𝙱𝙴 𝙲𝙷𝙰𝙽𝙽𝙴𝙻_ :* https://youtube.com/@Dragon-MD-OFC\n\n👨‍💻 *_𝙲𝙾𝙽𝚃𝙰𝙲𝚃 𝙳𝙴𝚅𝙴𝙻𝙾𝙿𝙴𝚁_ :* +94767453646\n\n```❣️ Thank You for Using Dragon-MD ❤️``` \n\n' + alivemessage + '\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n';
 
            let buttonMessage = {
                image: {
                    url: Config.aliveimg,
                },
                caption: alivtxt,
                footer: `ᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0`,
                headerType: 4,
            };
            return Void.sendMessage(citel.chat, buttonMessage, {
                quoted: citel,
            });

        }
    )
    //---------------------------------------------------------------------------
cmd({
        pattern: "allnotes",
        category: "owner",
        filename: __filename,
        desc: "Shows list of all notes."
    },
    async(Void, citel, text,{ isCreator }) => {
        const { tlang } = require('../lib')
        if (!isCreator) return citel.reply(tlang().owner)
        const note_store = new Array()
        let leadtext = `All Available Notes are:-\n\n`
        leadtext += await allnotes()
        return citel.reply(leadtext)

    }
)
