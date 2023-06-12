const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
const { fetchJson, cmd, citel, getBuffer, Config, tlang } = require('../lib')
const axios = require('axios')
const cheerio = require('cheerio')

cmd({

            pattern: "ss",

            desc: "web ss", 

            react: "📸",

            category: "downloader"

            

            

        },

        async(Void, citel, text) => {

            if (!text) return

            citel.reply (`*Screenshot is taking, please wait...*`)

const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)

       Void.sendMessage(citel.chat, {

                image: {

                    url: `https://api-fgmods.ddns.net/api/tools/ssweb?link=${text}&apikey=${apis.fgapi}` ,

                },

                caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _📄 WEB CAPTURE 📸_ )* \n\n*┃⿻* *🔗 ᴡᴇʙꜱɪᴛᴇ :* ${text}\n\n*┃⿻* *📸 ᴄᴀᴘᴛᴜʀᴇᴅ ʙʏ :* desktop\n\n*┗━━━━━━━━━━━━━━◆*\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0`,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "ssd",

            desc: "web ss", 

            react: "📸",

            category: "downloader"

            

            

        },

        async(Void, citel, text) => {

            if (!text) return

            citel.reply (`*Screenshot is taking, please wait...*`)

       Void.sendMessage(citel.chat, {

                image: {

                    url: `https://saipulanuar.ga/api/download/ssweb?url=${text}` ,

                },

                caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _📄 WEB CAPTURE 📸_ )* \n\n*┃⿻* *🔗 ᴡᴇʙꜱɪᴛᴇ :* ${text}\n\n*┃⿻* *📸 ᴄᴀᴘᴛᴜʀᴇᴅ ʙʏ :* desktop\n\n*┗━━━━━━━━━━━━━━◆*\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0`,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "wikipedia",
            
            alias: ["wiki"],
            
            desc: "search on wikipedia",

            react: "📰",
            
            category: "search"


        },

        async(Void, citel, text) => {

            if (!text) return
            
        const res = await axios.get(`https://id.m.wikipedia.org/w/index.php?search=${text}`)
        const $ = cheerio.load(res.data)
        const hasil = []

let wiki = $('#mf-section-0').find('p').text()
let thumb = $('#mf-section-0').find('div > a > img').attr('src')
thumb = thumb ? thumb : '//pngimg.com/uploads/wikipedia/wikipedia_PNG35.png'
thumb = 'https:' + thumb
let judul = $('h1#section_0').text()

            Void.sendMessage(citel.chat, {image: {url: thumb}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _📰 WIKI PEDIA 📖_ )* \n\n*┃⿻* *🗒️ ᴛᴏᴘɪᴄ :* ${judul}\n\n*┃⿻* *📖 ɪɴꜰᴏʀᴍᴀᴛɪᴏɴ :* \n ${wiki}\n\n*┗━━━━━━━━━━━━━━◆*\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0`}, {

                quoted: citel,

            });

 }

)

cmd({
            pattern: "downmp4",
            alias: ["mp4down","downloadvideo","downvideo"],
            desc: "download mp4 from url.",
            react: "📽️",
            category: "misc",
            use: '<url>',
            filename: __filename,
         },
         async(Void, citel, text) => {
             if (!text) return citel.reply(`Where's the link ❓`);

        citel.reply(`⬇️ Please wait I'm Downloading Your Video 🎦`)

        return Void.sendMessage(citel.chat, {

                document: {

                             url: text.split(" ")[0] ,

                            },

                mimetype: 'video/mp4',

                fileName: `ᴅʀᴀɢᴏɴ-ᴍᴅ-ᴠɪᴅᴇᴏ ᴜʀʟ- ${text}.mp4`,

                caption: `_*📽 ️𝙷𝙴𝚁𝙴 𝚈𝙾𝚄𝚁 𝚅𝙸𝙳𝙴𝙾 🎞️*_\n\n_*❂ ᴠɪᴅᴇᴏ ᴜʀʟ :* ${text}_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,

                headerType: 4,

                contextInfo: {
                    externalAdReply: {
                        title: `🐲 ᴅʀᴀɢᴏɴ-ᴍᴅ-ᴠ4 🎞️`,
                        body: `🎥 ᴀɴʏ ᴠɪᴅᴇᴏ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ⬇️`,
                        thumbnail: await getBuffer(`https://i.ibb.co/98YRSh8/com-vidstar-download-allvideodownloader-Hi-App-Here-com-icon.png`),
                        mediaType: 2,
                        mediaUrl: ``,
                        sourceUrl: `https://youtube.com/@Dragon-MD-OFC`,
                            },
                        },

                    },{ quoted: citel });

         }
     )

cmd({

            pattern: "fb",

            alias: ["facebook","facebookvideo","fbvideo"],

            desc: "fb down",

            react: "🎥",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)

const fbdl = await fetchJson(`https://api-fgmods.ddns.net/api/dowloader/fbdl?url=${text}&apikey=${apis.fgapi}`)

const videodlink = fbdl.result.videoUrl
const videotitle = fbdl.result.title

        citel.reply(`Please wait I'm Downloading Your Fb Video 🔁`)

       return Void.sendMessage(citel.chat, {

                video: {

                    url: videodlink ,

                },
                
                mimetype: 'video/mp4',
                
                fileName: `${videotitle}.mp4`,
                
                caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎞️ FB DOWNLOADER 🎊_ )* \n\n*┃⿻* *📄 ᴛɪᴛʟᴇ :* ${videotitle}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${text}\n\n*┗━━━━━━━━━━━━━━◆*\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "tt",

            alias: ["tiktok","tiktokvideo","ttvideo"],

            desc: "tiktok downloader",

            react:"🎥",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)

const ttdl = await fetchJson(`https://api-fgmods.ddns.net/api/dowloader/tikok?url=${text}&apikey=${apis.fgapi}`)
   
const videolink = ttdl.result.play
const authorname = ttdl.result.nickname
const authorusaername = ttdl.result.unique_id
const downloads = ttdl.result.download_count
const durationFormatted = ttdl.result.duration
const title = ttdl.result.description

            Void.sendMessage(citel.chat, {image: {url: `https://i.ibb.co/YRqQSY6/tiktok.png`}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎞️ TIKTOK DOWNLOADER 🎊_ )* \n\n*┃⿻* *📄 ᴛɪᴛʟᴇ :* ${title}\n\n*┃⿻* *🎛 ᴀᴜᴛʜᴇʀ ɴᴀᴍᴇ :* ${authorname}\n\n*┃⿻* *🔗 ᴀᴜᴛʜᴏʀ ᴄʜᴀɴɴᴇʟ :* https://www.tiktok.com/@${authorusaername}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${durationFormatted}\n\n*┃⿻* *⬇️ ᴅᴏᴡɴʟᴏᴀᴅꜱ :* ${downloads}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${text}\n\n*┗━━━━━━━━━━━━━━◆*`}, { quoted: citel });

       return Void.sendMessage(citel.chat, {

                video: {

                    url: videolink ,

                },
                
                mimetype: 'video/mp4',
               
                fileName: `dragon-md-tiktok-dl.mp4`,
                
                caption: `\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,

            }, {

                quoted: citel,

            });

 }

)

cmd({

            pattern: "tts",

            alias: ["tiktokaudio","tiktoksong","ttsong","ttaudio"],

            desc: "tiktok song downloader",

            react:"🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)

const ttdlp = await fetchJson(`https://api-fgmods.ddns.net/api/dowloader/tikok2?url=${text}&apikey=${apis.fgapi}`)

const thumb = ttdlp.pp

const ttdl = await fetchJson(`https://api-fgmods.ddns.net/api/dowloader/tikok2?url=${text}&apikey=${apis.fgapi}`)

const authorname = ttdl.result.nickname
const authorusaername = ttdl.result.unique_id
const durationFormatted = ttdl.result.duration
const title = ttdl.result.description
const ttsd = ttdl.result.audio

            Void.sendMessage(citel.chat, {image: {url: thumb}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎞️ TIKTOK DOWNLOADER 🎊_ )* \n\n*┃⿻* *🎼 ᴠɪᴅᴇᴏ ɴᴀᴍᴇ :* ${title}\n\n*┃⿻* *🎛 ᴀᴜᴛʜᴇʀ ɴᴀᴍᴇ :* ${authorname}\n\n*┃⿻* *🔗 ᴀᴜᴛʜᴏʀ ᴄʜᴀɴɴᴇʟ :* https://www.tiktok.com/@${authorusaername}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${durationFormatted}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${text}\n\n*┗━━━━━━━━━━━━━━◆*`}, { quoted: citel });

       return Void.sendMessage(citel.chat, {

                audio: {

                    url: ttsd ,

                },
                
                mimetype: 'audio/mpeg',
                
                fileName: `${music}.mp3`,
                
                caption: `\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,
                
            }, {

                quoted: citel,

            });

 }

)


cmd({

            pattern: "fbs",

            alias: ["facebookaudio","faceboksong","fbsong","fbaudio"],

            desc: "fb down",

            react: "🎶",

            category: "downloader"

        },

        async(Void, citel, text) => {

            if (!text) return

const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)

const fbdls = await fetchJson(`https://apimu.my.id/downloader/fbdl3?link=${text}`)

const audiodlink = fbdls.result.audio
const videotitle = fbdls.result.title
const videolink = fbdls.result.url
const duration = fbdls.result.time

const thumb = await fetchJson(`https://i.ibb.co/h9sNyLX/facebook-logo-5-0-0-0-0.jpg`)

Void.sendMessage(citel.chat, {image: {url: `https://i.ibb.co/h9sNyLX/facebook-logo-5-0-0-0-0.jpg`}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _🎞️ FB DOWNLOADER 🎊_ )* \n\n*┃⿻* *📄 ᴠɪᴅᴇᴏ ᴛɪᴛʟᴇ :* ${videotitle}\n\n*┃⿻* *⏳ ᴅᴜʀᴀᴛɪᴏɴ :* ${duration}\n\n*┃⿻* *🖇️ ᴠɪᴅᴇᴏ ʟɪɴᴋ :* ${videolink}\n\n*┗━━━━━━━━━━━━━━◆*`}, { quoted: citel });

       return Void.sendMessage(citel.chat, {

                audio: {

                    url: audiodlink ,

                },

                mimetype: 'audio/mpeg',
                
                fileName: `${videotitle}.mp3`,
                
                caption: `\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,

            }, {

                quoted: citel,

            });

        }

    )

  cmd({

            pattern: "dadu",

            desc: "dadu", 

            react: "🔄",

            category: "downloader"

            

            

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply(`*Give Me A Text*`);

           

            pack = `ᴅʀᴀɢᴏɴ-ᴍᴅ (𝟺.𝟷.𝟶) ✔️`

            author = `ᴀᴍᴇᴇꜱʜᴀ\nᴍᴀᴅᴇ ʙʏ ᴅʀᴀɢᴏɴ-ᴍᴅ 🎊`

            

                let image = `https://api.botcahx.biz.id/api/randomgambar/dadu?apikey=${Config.botapikey}`

                citel.react("🎲");

                let sticker = new Sticker(image, {

                    pack: pack, // The pack name

                    author: author, // The author name

                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,

                    categories: ["🤩", "🎉"], // The sticker category

                    id: "12345", // The sticker id

                    quality: 75, // The quality of the output file

                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();

                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });

           

        }

    )


cmd({
            
            pattern: "ttp",

            desc: "emoji infomation",

            react: "🔄",

            category: "downloader"

            
            
            
            
        },

        async(Void, citel, text) => {

            if (!text) return citel.reply(`*Give Me A Text*`);

           

            pack = `ᴅʀᴀɢᴏɴ-ᴍᴅ (v𝟺.𝟶) ✔️`

            author = `ᴀᴍᴇᴇꜱʜᴀ\nᴍᴀᴅᴇ ʙʏ ᴅʀᴀɢᴏɴ-ᴍᴅ 🎊`

                const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)         

                let image = await fetchJson(`https://api-fgmods.ddns.net/api/maker/ttp?text=${text}&apikey=${apis.fgapi}`)

                citel.react("✔️");

                let sticker = new Sticker(image, {

                    pack: pack, // The pack name

                    author: author, // The author name

                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,

                    categories: ["🤩", "🎉"], // The sticker category

                    id: "12345", // The sticker id

                    quality: 75, // The quality of the output file

                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();

                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });

           

        }

    )

cmd({

            
            pattern: "attp",

            desc: "Makes glowing sticker of text.",

            react: "🔄",

            category: "downloader"

            

         
            

        },

        async(Void, citel, text) => {

            if (!text) return citel.reply(`*Give Me A Text*`);

           

            pack = `ᴅʀᴀɢᴏɴ-ᴍᴅ (ᴠ𝟺.𝟶) ✔️`

            author = `ᴀᴍᴇᴇꜱʜᴀ\nᴍᴀᴅᴇ ʙʏ ᴅʀᴀɢᴏɴ-ᴍᴅ 🎊`

                const apis = await fetchJson(`https://gist.githubusercontent.com/TechwithAmee1/a88de5b36f9d08470149f87fcbaf76fd/raw/15608e9ba09e2fd539738f426049caf2ecefb0a2/data.js`)

                let image = `https://api-fgmods.ddns.net/api/maker/attp?text=${text}&apikey=${apis.fgapi}`

                citel.react("✔️");

                let sticker = new Sticker(image, {

                    pack: pack, // The pack name

                    author: author, // The author name

                    type: text.includes("--crop" || '-c') ? StickerTypes.CROPPED : StickerTypes.FULL,

                    categories: ["🤩", "🎉"], // The sticker category

                    id: "12345", // The sticker id

                    quality: 75, // The quality of the output file

                    background: "transparent", // The sticker background color (only for full stickers)

                });

                const stikk = await sticker.toBuffer();

                return Void.sendMessage(citel.chat, {  sticker: stikk   }, {    quoted: citel });

           

        }

    )
