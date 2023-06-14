const { tlang, ringtone, cmd,fetchJson, sleep, botpic, getBuffer, pinterest, prefix, Config, citel } = require('../lib')
const { mediafire } = require("../lib/mediafire.js");
const googleTTS = require("google-tts-api");
const ytdl = require('ytdl-secktor')
const fs = require('fs-extra')
var videotime = 60000 // 1000 min
var dlsize = 440 // 440mb
    //---------------------------------------------------------------------------
cmd({
            pattern: "tts",
            react: "🎙️",
            desc: "text to speech.",
            category: "downloader",
            filename: __filename,
            use: '<Hii,this is Secktor>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('Please give me Sentence to change into audio.')
            let texttts = text
            citel.react("📢");
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            });
           const txt = await Void.sendMessage(citel.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsiCitelVoid.m4a`,
            }, {
                quoted: citel,
            });
            
            await Void.sendMessage(citel.chat, { react: {
        text: "🎼",
        key: txt.key,
            } } )
        }

    )
    
    //---------------------------------------------------------------------------
cmd({
            pattern: "ttsi",
            desc: "text to speech.",
            category: "downloader",
            filename: __filename,
            use: '<හායි,කොහොම ද ඔයාට ?>',
            react: "🎙️",
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply('Please give me Sentence to change into audio.')
            let texttts = text
            citel.react("📢");
            const ttsurl = googleTTS.getAudioUrl(texttts, {
                lang: "si",
                slow: false,
                host: "https://translate.google.com",
            });
            const txt = await Void.sendMessage(citel.chat, {
                audio: {
                    url: ttsurl,
                },
                mimetype: "audio/mpeg",
                fileName: `ttsiCitelVoid.m4a`,
            }, {
                quoted: citel,
            });
            
            await Void.sendMessage(citel.chat, { react: {
        text: "🎼",
        key: txt.key,
            } } )
            
        }

    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "videolist",
            desc: "Downloads video from yt.",
            category: "downloader",
            filename: __filename,
            use: '<faded-Alan Walker>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example : ${prefix}audio Back in black`)
            let yts = require("secktor-pack")
            let search = await yts(text)
            listSerch = []
            teskd = `\nResult got from ${text}.\n`
            for (let i of search.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp4 ${i.url}`,
                    description: `Dragon / ${i.timestamp}`
                })
            }
            const sections = [

                {
                    title: "Total Search🔍" + search.all.length,
                    rows: listSerch
                }

            ]
            const listMessage = {
                text: teskd,
                footer: tlang().footer,
                title: ` *Youtube Search results by  ${tlang().title}.*`,
                buttonText: "Videos",
                mentions: await Void.parseMention(teskd),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {
                quoted: citel
            })

        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "play",
            alias: ["සොයන්න",".ytsearch"],
            desc: "Sends info about the query(of youtube video/audio).",
            category: "downloader",
            react: "🎦",
            filename: __filename,
            use: '<faded-Alan walker.>',
        },
async(Void, citel, text) => {
        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            reply(`❌ URL is empty! \nSend ${prefix}ytmp3 url`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("")) {
                citel.reply(`_*🖇️ Give me a YouTube Link or Name ❗*_\n*eg:-* _${prefix}song [name or link]_`);
                return;
            }
            let infoYt = await ytdl.getInfo(anu.url);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
           const txt = await Void.sendMessage(citel.chat, {image: {url: anu.thumbnail}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎞️ YT DOWNLOADER 🎶_ )* \n\n*┃⿻* *🎧 ᴀᴜᴅɪᴏ ᴛɪᴛʟᴇ :* ${anu.title}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${anu.timestamp}\n\n*┃⿻* 🗃️ *ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB\n\n*┃⿻* *👀 ️ᴠɪᴇᴡꜱ :* ${anu.views}\n\n*┃⿻* *👍 ʟɪᴋᴇꜱ :* ${anu.like}\n\n*┃⿻* *⏰ ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ${anu.ago}\n\n*┃⿻* *🗃️ ᴄᴀᴛᴇɢᴏʀʏ :* ${anu.genre}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${anu.url}\n\n*┃⿻* *📹 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ${anu.author.name}\n\n*┃⿻* *📎 ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ${anu.author.url}\n\n*┃⿻* *📰 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${anu.description}\n\n*┗━━━━━━━━━━━━━━◆*`}, { quoted: citel });

        await Void.sendMessage(citel.chat, { react: {
        text: "⬇️",
        key: txt.key,
            } } )

                let search = await yts(text);
                let buttonMessage = {
                        document: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'audio/mpeg',
                        fileName: `${titleYt}.mp4`,
                                                caption: `_*❂  ᴀᴜᴅɪᴏ ɴᴀᴍᴇ :* ${anu.title}_\n_*❂  ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB_\n_*❂  ᴀᴜᴅɪᴏ ǫᴜᴀʟɪᴛʏ :* 128 kbps_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,
                        headerType: 4,
                    }
            await Void.sendMessage(citel.chat, { react: {
        text: "⬆️",
        key: txt.key,
            } } )
        
            const txt2 = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })
                    
                    await Void.sendMessage(citel.chat, { react: {
        text: "🎶️",
        key: txt.key,
            } } )
 
                    await Void.sendMessage(citel.chat, { react: {
        text: "✅",
        key: txt.key,
            } } )
                                        
                    await Void.sendMessage(citel.chat, { react: {
        text: "🎧",
        key: txt2.key,
            } } )

    await Void.sendMessage(citel.chat, { react: {
        text: "⬇️",
        key: txt.key,
      } } )

const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)

const ytdweb = await fetchJson(`https://api-fgmods.ddns.net/api/dowloader/ytdl?url=${anu.url}&apikey=${apis.fgapi}`)

const downloadlink = ytdweb.result.mp4.result
const filesize = ytdweb.result.mp4.size
const vidq = ytdweb.result.mp4.quality

    await Void.sendMessage(citel.chat, { react: {
        text: "⬆️",
        key: txt.key,
      } } )

                let buttonMessage2 = {

                        document: {

                             url: downloadlink ,

                            },

                        jpegThumbnail: log0,

                        mimetype: 'video/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `_*❂  ᴠɪᴅᴇᴏ ɴᴀᴍᴇ :* ${anu.title}_\n_*❂  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* ${vidq}_\n_*❂  ꜰɪʟᴇ ꜱɪᴢᴇ :* ${filesize}_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,

                        headerType: 4,

                    }


            const txt3 = await Void.sendMessage(citel.chat, buttonMessage2, { quoted: citel })
   
                    await Void.sendMessage(citel.chat, { react: {
        text: "🎞️",
        key: txt.key,
            } } )

        await Void.sendMessage(citel.chat, { react: {
        text: "✅",
        key: txt.key,
            } } )

        await Void.sendMessage(citel.chat, { react: {
        text: "🎥️",
        key: txt3.key,
            } } )

                } else {
                   const txt4 = await citel.reply(`*The limit has been exceeded.*❗`);

                    citel.react("❌");
                    
                    await Void.sendMessage(citel.chat, { react: {
        text: "❌",
        key: txt4.key,
            } } )
                }

                fs.unlinkSync(`./${randomName}`);
            } catch (e) {
                console.log(e)
            }
        }
    )

  //---------------------------------------------------------------------------

cmd({
            pattern: "ringtone",
            desc: "Downloads ringtone.",
            category: "downloader",
            filename: __filename,
            use: '<ringtone name>',
            react: "📳",
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example: ${prefix}ringtone back in black`)
            let anu = await ringtone(text)
            let result = anu[Math.floor(Math.random() * anu.length)]
            return Void.sendMessage(citel.chat, { audio: { url: result.audio }, fileName: result.title + '.mp3', mimetype: 'audio/mpeg' }, { quoted: citel })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "pint",
            desc: "Downloads image from pinterest.",
            category: "downloader",
            filename: __filename,
            use: '<text|image name>',
            react: "🖼️",
        },
        async(Void, citel, text) => {
            if (!text) return reply("What picture are you looking for?") && Void.sendMessage(citel.chat, {
                react: {
                    text: '❗',
                    key: citel.key
                }
            })
            try {
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                let buttonMessage = {
                    image: {
                        url: result
                    },
                    caption: ` `,
                    footer: tlang().footer,
                    headerType: 4,
                    contextInfo: {
                        externalAdReply: {
                            title: `Here it is✨`,
                            body: `${Config.ownername}`,
                            thumbnail: log0,
                            mediaType: 2,
                            mediaUrl: ``,
                            sourceUrl: ``
                        }
                    }
                }
                return Void.sendMessage(citel.chat, buttonMessage, {
                    quoted: citel
                })
            } catch (e) {
                console.log(e)
            }
        })
    //---------------------------------------------------------------------------
cmd({
            pattern: "mediafire",
            desc: "Downloads zip from Mediafire.",
            react: "🗂️",
            category: "downloader",
            filename: __filename,
            use: '<url of mediafire>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Give link ${tlang().greet}`);
            let urlYt = text;
            if (!urlYt.startsWith("http")) {
                citel.reply(`❌ Give youtube link!`);
                                return;

            }
            
            const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)
            
            const mediafire = await fetchJson(`https://api-fgmods.ddns.net/api/dowloader/mediafire?url=${text}&apikey=${apis.fgapi}`)
            const res = mediafire.result

            let fileSizeInBytes = res.filesize;
            let fileSizeInMegabytes = fileSizeInBytes / (1000);
            if (fileSizeInMegabytes <= dlsize) {

const thumb = await fetchJson(`https://i.ibb.co/6Xghf3j/mediafire-startuptalky-2.jpg`)

let fext = res.ext
let flext = fext.toLowerCase();
let ftype = res.filetype
let fltype = ftype.toLowerCase();

            const txt2 = await Void.sendMessage(citel.chat, {image: {url: `https://i.ibb.co/6Xghf3j/mediafire-startuptalky-2.jpg`}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _📦 Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ ⬇️_ )* \n\n*┃⿻* *📄 ꜰɪʟᴇ ɴᴀᴍᴇ :* ${res.filename}\n\n*┃⿻* *⏳ ᴜᴘʟᴏᴀᴅᴇᴅ ᴀᴛ :* ${res.upload_date}\n\n*┃⿻* *📂 ꜰɪʟᴇ ᴛʏᴘᴇ :* ${res.filetype} / ${res.ext}\n\n*┃⿻* *🗃️ ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB\n\n*┃⿻* *🔗 ꜰɪʟᴇ ʟɪɴᴋ :* ${res.url2}\n\n*┗━━━━━━━━━━━━━━◆*\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0`}, { quoted: citel });

        await Void.sendMessage(citel.chat, { react: {
        text: "⬆️",
        key: txt2.key,
            } } )

            const txt3 = await Void.sendMessage(citel.chat, {
                    document: {
                        url: res.url,
                    },
                    fileName: res.filename,
                    mimetype: `${fltype}/${flext}`,
                    caption: `_*📂 𝙷𝙴𝚁𝙴 𝚈𝙾𝚄𝚁 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴 𝙵𝙸𝙻𝙴 📂*_\n\n_*❂ ғɪʟᴇ ᴜʀʟ :* ${res.url2}_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,
                }, {
                    quoted: citel,
                })
                
                await Void.sendMessage(citel.chat, { react: {
        text: "✅",
        key: txt2.key,
            } } )
                
                await Void.sendMessage(citel.chat, { react: {
        text: "📂",
        key: txt3.key,
            } } )
                
                await Void.sendMessage(citel.chat, { react: {
        text: "ℹ️️️",
        key: txt2.key,
            } } )
                
                } else {
                    
                   const txt4 = await citel.reply(`_*The is so big.*_❗`);

                    citel.react("❌");
                    
                    await Void.sendMessage(citel.chat, { react: {
        text: "❌",
        key: txt4.key,
            } } )
                    
                    }

        }
    )
    
    //---------------------------------------------------------------------------
cmd({
            pattern: "songlist",
            desc: "Downloads audio from youtube.",
            category: "downloader",
            filename: __filename,
            use: '<text>',
        },
        async(Void, citel, text) => {
            if (!text) return citel.reply(`Example : ${prefix + command} Back in black`)
            let yts = require("secktor-pack")
            let search = await yts(text)
            listSerch = []
            teskd = `Result From ${text}.\n_+ ${search.all.length} more results._`
            for (let i of search.all) {
                listSerch.push({
                    title: i.title,
                    rowId: `${prefix}ytmp3 ${i.url}`,
                    description: `Dragon / ${i.timestamp}`
                })
            }
            const sections = [

                {
                    title: "Total Search🔍" + search.all.length,
                    rows: listSerch
                }

            ]
            const listMessage = {
                text: teskd,
                footer: tlang().footer,
                title: ``,
                buttonText: "Songs",
                mentions: await Void.parseMention(teskd),
                sections
            }
            return Void.sendMessage(citel.chat, listMessage, {
                quoted: citel
            })
        }
    )
    //---------------------------------------------------------------------------
cmd({
            pattern: "yts",
            alias: ["සොයන්න","ytsearch"],
            desc: "Gives descriptive info of query from youtube..",
            react: "🔍",
            category: "downloader",
            filename: __filename,
            use: '<yt search text>',
        },
        async(Void, citel, text) => {
            let yts = require("secktor-pack")
            if (!text) return citel.reply(`_*🖇️ Give me a YouTube Video Name ❗*_\n*eg:-* _${prefix}yts [video name]_`);
            citel.reply(`🔎 _*Searching on YouTube*_ 🌎`)
            let search = await yts(text);
            let textt = "*┌─[🐉DRAGON-MD-V4🐉]─❂*\n\n*┣━( _🎥 YT SEARCHER ‍🎞️_ )*\n\n*┃⿻ 🔍 ʏᴏᴜ ꜱᴇᴀʀᴄʜᴇᴅ ᴡᴏʀᴅ* *"+ text +".*\n\n*┃⿻ 📝 ɴᴏ. ᴏꜰ ʀᴇꜱᴜʟᴛꜱ* _"+ search.all.length +"_\n\n┗━━━━━━━━━━━❂\n\n";
            let no = 1;
            for (let i of search.all) {
                textt += `┏━━[ _*🌐 No : ${no++}*_ ]━━━━━━◆\n┇\n┃⿻   ℹ ️ᴛɪᴛʟᴇ : ${i.title}\n┃_*⿻   👀 ᴠɪᴇᴡꜱ :*_ ${i.views}\n┃_*⿻   🕑 ᴅᴜʀᴀᴛɪᴏɴ :*_ ${i.timestamp}\n┃_*⿻   ⬆️️️️ ᴜᴘʟᴏᴀᴅᴇᴅ ᴅᴀᴛᴇ :*_ ${i.ago}\n┃_*⿻   💬 ᴀᴜᴛʜᴏʀ :*_ ${i.author.name}\n┃_*⿻   🖇️ ᴜʀʟ :*_ ${i.url}\n┇\n┗━━━━━━━━━━━◆\n\n`;
            }
            return Void.sendMessage(citel.chat, {
                image: {
                    url: search.all[0].thumbnail,
                },
                caption: textt,
            }, {
                quoted: citel,
            });
        }
    )
    //---------------------------------------------------------------------------

cmd({

        pattern: "video",

        alias: ["ytmp4","ytv"], 

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "🎞️",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)

const ytdweb = await fetchJson(`https://api-fgmods.ddns.net/api/dowloader/ytdl?url=&apikey=${apis.fgapi}`)

        const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            citel.reply(`_*🖇️ Give me a YouTube Link or Name ❗*_\n*eg:-* _${prefix}video [name or link]_`);

            return;

        }

        try {

            let status = ytdweb.status

            if (status = false) {

                citel.reply(`_*❌ A Internal Server Error Occured* ❗. *Try again Later*_ 🕑.`);

                return;

            }

            let infoYt = await ytdl.getInfo(anu.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

            if (440 <= dlsize) {

                let yts = require("secktor-pack");

            const txt2 = await Void.sendMessage(citel.chat, {image: {url: anu.thumbnail}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎞️ YT DOWNLOADER 🎶_ )* \n\n*┃⿻* *📽️ ᴠɪᴅᴇᴏ ᴛɪᴛʟᴇ :* ${anu.title}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${anu.timestamp}\n\n*┃⿻* *👀 ️ᴠɪᴇᴡꜱ :* ${anu.views}\n\n*┃⿻* *👍 ʟɪᴋᴇꜱ :* ${anu.like}\n\n*┃⿻* *⏰ ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ${anu.ago}\n\n*┃⿻* *🗃️ ᴄᴀᴛᴇɢᴏʀʏ :* ${anu.genre}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${anu.url}\n\n*┃⿻* *📹 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ${anu.author.name}\n\n*┃⿻* *📎 ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ${anu.author.url}\n\n*┃⿻* *📰 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${anu.description}\n\n*┗━━━━━━━━━━━━━━◆*`}, { quoted: citel })
          
                let search = await yts(text);

    await Void.sendMessage(citel.chat, { react: {
        text: "⬇️",
        key: txt2.key,
      } } )

const ytdweb = await fetchJson(`https://api-fgmods.ddns.net/api/dowloader/ytdl?url=${anu.url}&apikey=${apis.fgapi}`)

const downloadlink = ytdweb.result.mp4.result
const filesize = ytdweb.result.mp4.size
const vidq = ytdweb.result.mp4.quality

    await Void.sendMessage(citel.chat, { react: {
        text: "⬆️",
        key: txt2.key,
      } } )

                let buttonMessage = {

                        video: {

                             url: downloadlink ,

                            },

                        mimetype: 'video/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `_*❂  ᴠɪᴅᴇᴏ ɴᴀᴍᴇ :* ${anu.title}_\n_*❂  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* ${vidq}_\n_*❂  ꜰɪʟᴇ ꜱɪᴢᴇ :* ${filesize}_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n\n ${Config.caption}`,

                    }

            const txt3 = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

    await Void.sendMessage(citel.chat, { react: {
        text: "🎥️",
        key: txt3.key,
            } } )
    
        await Void.sendMessage(citel.chat, { react: {
        text: "✅",
        key: txt2.key,
            } } )

                } else {

                   const txt4 = await citel.reply(`*The limit has been exceeded.*❗`);

                    citel.react("❌");
                    
                    await Void.sendMessage(citel.chat, { react: {
        text: "❌",
        key: txt4.key,
            } } )

                }

            } catch (e) {

                console.log(e)

            }

        }

    )

  //---------------------------------------------------------------------------
cmd({
        pattern: "song",
        alias: ["ytmp3","yta"], 
        desc: "Downloads audio by yt link.",
        category: "downloader",
        react: "🎶",
        use: '<yt video url>',
    },
    async(Void, citel, text) => {
        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];
        const getRandom = (ext) => {
            return `${Math.floor(Math.random() * 10000)}${ext}`;
        };

        if (text.length === 0) {
            citel.reply(`_*🖇️ Give me a YouTube Link or Name ❗*_\n*eg:-* _${prefix}song [name or link]_`);
            return;
        }
        try {
            let urlYt = text;
            if (!urlYt.startsWith("")) {
                citel.reply(`_*🖇️ Give me a YouTube Link or Name ❗*_\n*eg:-* _${prefix}song [name or link]_`);
                return;
            }
            let infoYt = await ytdl.getInfo(anu.url);
            //30 MIN
            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);
            let titleYt = infoYt.videoDetails.title;
            let randomName = getRandom(".mp3");
            const stream = ytdl(anu.url, {
                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,
                })
                .pipe(fs.createWriteStream(`./${randomName}`));
            await new Promise((resolve, reject) => {
                stream.on("error", reject);
                stream.on("finish", resolve);
            });

            let stats = fs.statSync(`./${randomName}`);
            let fileSizeInBytes = stats.size;
            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);
            if (fileSizeInMegabytes <= dlsize) {
                let yts = require("secktor-pack");
            const txt2 = await Void.sendMessage(citel.chat, {image: {url: anu.thumbnail}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎞️ YT DOWNLOADER 🎶_ )* \n\n*┃⿻* *🎧 ᴀᴜᴅɪᴏ ᴛɪᴛʟᴇ :* ${anu.title}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${anu.timestamp}\n\n*┃⿻* 🗃️ *ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB\n\n*┃⿻* *👀 ️ᴠɪᴇᴡꜱ :* ${anu.views}\n\n*┃⿻* *👍 ʟɪᴋᴇꜱ :* ${anu.like}\n\n*┃⿻* *⏰ ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ${anu.ago}\n\n*┃⿻* *🗃️ ᴄᴀᴛᴇɢᴏʀʏ :* ${anu.genre}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${anu.url}\n\n*┃⿻* *📹 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ${anu.author.name}\n\n*┃⿻* *📎 ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ${anu.author.url}\n\n*┃⿻* *📰 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${anu.description}\n\n*┗━━━━━━━━━━━━━━◆*`}, { quoted: citel });

    await Void.sendMessage(citel.chat, { react: {
        text: "⬇️",
        key: txt2.key,
      } } )
                let search = await yts(text);
                let buttonMessage = {
                        audio: fs.readFileSync(`./${randomName}`),
                        jpegThumbnail: log0,
                        mimetype: 'audio/mpeg',
                        fileName: `${titleYt}.mp3`,
                        caption: `_*❂  ᴀᴜᴅɪᴏ ɴᴀᴍᴇ :* ${anu.title}_\n_*❂  ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB_\n_*❂  ᴀᴜᴅɪᴏ ǫᴜᴀʟɪᴛʏ :* 128 kbps_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,
                        headerType: 4,
                        contextInfo: {
                            externalAdReply: {
                            title: titleYt,
                            body: `🐲 ᴅʀᴀɢᴏɴ-ᴍᴅ-ᴠ4 🎧`,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: `https://youtube.com/@Dragon-MD-OFC`,
                                    },
                            },
                    }
    await Void.sendMessage(citel.chat, { react: {
        text: "⬆️",
        key: txt2.key,
      } } )

            const txt3 = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

    await Void.sendMessage(citel.chat, { react: {
        text: "🎧",
        key: txt3.key,
            } } )
    
        await Void.sendMessage(citel.chat, { react: {
        text: "✅",
        key: txt2.key,
            } } )
                } else {
                   const txt4 = await citel.reply(`*The limit has been exceeded.*❗`);

                    citel.react("❌");
                    
                    await Void.sendMessage(citel.chat, { react: {
        text: "❌",
        key: txt4.key,
            } } )
                }

                fs.unlinkSync(`./${randomName}`);
            } catch (e) {
                console.log(e)
            }
        }
    )

  //---------------------------------------------------------------------------
cmd({

        pattern: "docsong",

        alias: ["document song"],

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "📂",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

        const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            citel.reply(`_*🖇️ Give me a YouTube Link or Name ❗*_\n*eg:-* _${prefix}docsong [name or link]_`);

            return;

        }

        try {

            let urlYt = text;

            if (!urlYt.startsWith("")) {

                citel.reply(`_*🖇️ Give me a YouTube Link or Name ❗*_\n*eg:-* _${prefix}docsong [name or link]_`);

                return;

            }

            let infoYt = await ytdl.getInfo(anu.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

            let randomName = getRandom(".mp3");

            const stream = ytdl(anu.url, {

                    filter: (info) => info.audioBitrate == 160 || info.audioBitrate == 128,

                })

                .pipe(fs.createWriteStream(`./${randomName}`));

            await new Promise((resolve, reject) => {

                stream.on("error", reject);

                stream.on("finish", resolve);

            });

            let stats = fs.statSync(`./${randomName}`);

            let fileSizeInBytes = stats.size;

            let fileSizeInMegabytes = fileSizeInBytes / (1024 * 1024);

            if (fileSizeInMegabytes <= dlsize) {

                let yts = require("secktor-pack");

            const txt2 = await Void.sendMessage(citel.chat, {image: {url: anu.thumbnail}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎞️ YT DOWNLOADER 🎶_ )* \n\n*┃⿻* *🎧 ᴀᴜᴅɪᴏ ᴛɪᴛʟᴇ :* ${anu.title}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${anu.timestamp}\n\n*┃⿻* 🗃️ *ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB\n\n*┃⿻* *👀 ️ᴠɪᴇᴡꜱ :* ${anu.views}\n\n*┃⿻* *👍 ʟɪᴋᴇꜱ :* ${anu.like}\n\n*┃⿻* *⏰ ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ${anu.ago}\n\n*┃⿻* *🗃️ ᴄᴀᴛᴇɢᴏʀʏ :* ${anu.genre}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${anu.url}\n\n*┃⿻* *📹 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ${anu.author.name}\n\n*┃⿻* *📎 ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ${anu.author.url}\n\n*┃⿻* *📰 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${anu.description}\n\n*┗━━━━━━━━━━━━━━◆*`}, { quoted: citel });

    await Void.sendMessage(citel.chat, { react: {
        text: "⬇️",
        key: txt2.key,
      } } )

                let search = await yts(text);

                let buttonMessage = {

                        document: fs.readFileSync(`./${randomName}`),

                        jpegThumbnail: log0,

                        mimetype: 'audio/mpeg',

                        fileName: `${titleYt}.mp3`,

                        caption: `_*❂  ᴀᴜᴅɪᴏ ɴᴀᴍᴇ :* ${anu.title}_\n_*❂  ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB_\n_*❂  ᴀᴜᴅɪᴏ ǫᴜᴀʟɪᴛʏ :* 128 kbps_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,

                        headerType: 4,

                        contextInfo: {
                            externalAdReply: {
                            title: titleYt,
                            body: `🐲 ᴅʀᴀɢᴏɴ-ᴍᴅ-ᴠ4 🎧`,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: `https://youtube.com/@Dragon-MD-OFC`,
                                    },
                            },

                    }

    await Void.sendMessage(citel.chat, { react: {
        text: "⬆️",
        key: txt2.key,
      } } )

            const txt3 = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

    await Void.sendMessage(citel.chat, { react: {
        text: "🎧",
        key: txt3.key,
            } } )
    
        await Void.sendMessage(citel.chat, { react: {
        text: "✅",
        key: txt2.key,
            } } )

                } else {

                   const txt4 = await citel.reply(`*The limit has been exceeded.*❗`);

                    citel.react("❌");
                    
                    await Void.sendMessage(citel.chat, { react: {
        text: "❌",
        key: txt4.key,
            } } )

                }

                fs.unlinkSync(`./${randomName}`);

            } catch (e) {

                console.log(e)

            }

        }

    )

  //---------------------------------------------------------------------------
cmd({

        pattern: "docvideo",

        alias: ["document video"],

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "📂",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)

const ytdwebs = await fetchJson(`https://api-fgmods.ddns.net/api/dowloader/ytdl?url&apikey=${apis.fgapi}`)

        const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            citel.reply(`_*🖇️ Give me a YouTube Link or Name ❗*_\n*eg:-* _${prefix}docvideo [name or link]_`);

            return;

        }

        try {

            let status = ytdwebs.status

            if (status = false) {

                citel.reply(`_*❌ A Internal Server Error Occured* ❗. *Try again Later*_ 🕑.`);

                return;

            }

            let infoYt = await ytdl.getInfo(anu.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

            if (440 <= dlsize) {

                let yts = require("secktor-pack");

            const txt2 = await Void.sendMessage(citel.chat, {image: {url: anu.thumbnail}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎞️ YT DOWNLOADER 🎶_ )* \n\n*┃⿻* *📽️ ᴠɪᴅᴇᴏ ᴛɪᴛʟᴇ :* ${anu.title}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${anu.timestamp}\n\n*┃⿻* *👀 ️ᴠɪᴇᴡꜱ :* ${anu.views}\n\n*┃⿻* *👍 ʟɪᴋᴇꜱ :* ${anu.like}\n\n*┃⿻* *⏰ ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ${anu.ago}\n\n*┃⿻* *🗃️ ᴄᴀᴛᴇɢᴏʀʏ :* ${anu.genre}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${anu.url}\n\n*┃⿻* *📹 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ${anu.author.name}\n\n*┃⿻* *📎 ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ${anu.author.url}\n\n*┃⿻* *📰 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${anu.description}\n\n*┗━━━━━━━━━━━━━━◆*`}, { quoted: citel })
          
                let search = await yts(text);

    await Void.sendMessage(citel.chat, { react: {
        text: "⬇️",
        key: txt2.key,
      } } )

const ytdweb = await fetchJson(`https://api-fgmods.ddns.net/api/dowloader/ytdl?url=${anu.url}&apikey=${apis.fgapi}`)

const downloadlink = ytdweb.result.mp4.result
const filesize = ytdweb.result.mp4.size
const vidq = ytdweb.result.mp4.quality

    await Void.sendMessage(citel.chat, { react: {
        text: "⬆️",
        key: txt2.key,
      } } )

                let buttonMessage = {

                        document: {

                             url: downloadlink ,

                            },

                        jpegThumbnail: log0,

                        mimetype: 'video/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `_*❂  ᴠɪᴅᴇᴏ ɴᴀᴍᴇ :* ${anu.title}_\n_*❂  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* ${vidq}_\n_*❂  ꜰɪʟᴇ ꜱɪᴢᴇ :* ${filesize}_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,

                        headerType: 4,

                        contextInfo: {
                            externalAdReply: {
                            title: titleYt,
                            body: `🐲 ᴅʀᴀɢᴏɴ-ᴍᴅ-ᴠ4 🎥`,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: `https://youtube.com/@Dragon-MD-OFC`,
                                    },
                            },

                    }


            const txt3 = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

    await Void.sendMessage(citel.chat, { react: {
        text: "🎥️",
        key: txt3.key,
            } } )
    
        await Void.sendMessage(citel.chat, { react: {
        text: "✅",
        key: txt2.key,
            } } )
      
                } else {

                   const txt4 = await citel.reply(`*The limit has been exceeded.*❗`);

                    citel.react("❌");
                    
                    await Void.sendMessage(citel.chat, { react: {
        text: "❌",
        key: txt4.key,
            } } )

                }
            } catch (e) {

                console.log(e)

            }

        }

    )
    
cmd({

        pattern: "highvid",

        alias: ["highvideo","videohigh","vidhigh"],

        desc: "Downloads audio by yt link.",

        category: "downloader",

        react: "🎞️",

        use: '<yt video url>',

    },

    async(Void, citel, text) => {

        let yts = require("secktor-pack");

            let search = await yts(text);

            let anu = search.videos[0];

        const getRandom = (ext) => {

            return `${Math.floor(Math.random() * 10000)}${ext}`;

        };

        if (text.length === 0) {

            citel.reply(`_*🖇️ Give me a YouTube Link or Name ❗*_\n*eg:-* _${prefix}highvideo [name or link]_`);

            return;

        }

        try {

            let urlYt = text;

            if (!urlYt.startsWith("")) {

                citel.reply(`_*🖇️ Give me a YouTube Link or Name ❗*_\n*eg:-* _${prefix}highvideo [name or link]_`);

                return;

            }

            let infoYt = await ytdl.getInfo(anu.url);

            //30 MIN

            if (infoYt.videoDetails.lengthSeconds >= videotime) return citel.reply(`*The limit has been exceeded.*❗`);

            let titleYt = infoYt.videoDetails.title;

const ytdweb = await fetchJson(`https://darkalphaxteam-api.cyclic.app/api/download/ytmp4?url=${anu.url}&apikey=prabath`)

const vidlink = ytdweb.download

            let fileSizeInBytes = ytdweb.size;

            let fileSizeInMegabytes = fileSizeInBytes / (1024);

            if (fileSizeInMegabytes <= dlsize) {

                let yts = require("secktor-pack");

            const txt2 = await Void.sendMessage(citel.chat, {image: {url: anu.thumbnail}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎞️ YT DOWNLOADER 🎶_ )* \n\n*┃⿻* *📽️ ᴠɪᴅᴇᴏ ᴛɪᴛʟᴇ :* ${anu.title}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${anu.timestamp}\n\n*┃⿻* 🗃️ *ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB\n\n*┃⿻* *👀 ️ᴠɪᴇᴡꜱ :* ${anu.views}\n\n*┃⿻* *👍 ʟɪᴋᴇꜱ :* ${anu.like}\n\n*┃⿻* *⏰ ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ${anu.ago}\n\n*┃⿻* *🗃️ ᴄᴀᴛᴇɢᴏʀʏ :* ${anu.genre}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${anu.url}\n\n*┃⿻* *📹 ʏᴛ ᴄʜᴀɴɴᴇʟ :* ${anu.author.name}\n\n*┃⿻* *📎 ᴄʜᴀɴɴᴇʟ ʟɪɴᴋ :* ${anu.author.url}\n\n*┃⿻* *📰 ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${anu.description}\n\n*┗━━━━━━━━━━━━━━◆*`}, { quoted: citel })

    await Void.sendMessage(citel.chat, { react: {
        text: "⬇️",
        key: txt2.key,
      } } )

                let search = await yts(text);

                let buttonMessage = {

                        document: {

                             url: vidlink ,

                            },

                        jpegThumbnail: log0,

                        mimetype: 'video/mp4',

                        fileName: `${titleYt}.mp4`,

                        caption: `_*❂  ᴠɪᴅᴇᴏ ɴᴀᴍᴇ :* ${anu.title}_\n_*❂  ᴠɪᴅᴇᴏ ǫᴜᴀʟɪᴛʏ :* 720p_\n_*❂  ꜰɪʟᴇ ꜱɪᴢᴇ :* ${fileSizeInMegabytes} MB_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,

                        headerType: 4,

                        contextInfo: {
                            externalAdReply: {
                            title: titleYt,
                            body: `🐲 ᴅʀᴀɢᴏɴ-ᴍᴅ-ᴠ4 🎥`,
                            renderLargerThumbnail: true,
                            thumbnailUrl: search.all[0].thumbnail,
                            mediaUrl: text,
                            mediaType: 1,
                            thumbnail: await getBuffer(search.all[0].thumbnail),
                            sourceUrl: `https://youtube.com/@Dragon-MD-OFC`,
                                    },
                            },

                    }

    await Void.sendMessage(citel.chat, { react: {
        text: "⬆️",
        key: txt2.key,
      } } )

            const txt3 = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel })

    await Void.sendMessage(citel.chat, { react: {
        text: "🎥️",
        key: txt3.key,
            } } )
    
        await Void.sendMessage(citel.chat, { react: {
        text: "✅",
        key: txt2.key,
            } } )

                } else {

                   const txt4 = await citel.reply(`*The limit has been exceeded.*❗`);

                    citel.react("❌");
                    
                    await Void.sendMessage(citel.chat, { react: {
        text: "❌",
        key: txt4.key,
            } } )

                }
            } catch (e) {

                console.log(e)

            }

        }

    )