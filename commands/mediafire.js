const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson } = require('../lib')
const { mediafiredl } = require("@bochilteam/scraper-downloader")
const { mediafireDl } = require('mfiredlcore-vihangayt')


cmd({
            pattern: "mediafire",
            alias: ["mf", "mfire", "mediaf"],
            desc: "Downloads zip from Mediafire.",
            react: "🗂️",
            category: "downloader",
            filename: __filename,
            use: '<url of mediafire>',
        },

        async(Void, citel, text) => {

  if (!text) {
    return citel.reply('*Please Give Me A Mediafire File Url* ❌')
  }
  if (!text.includes('mediafire.com')) {
    return citel.reply('The link you provided is invalid ❌')
  }
  try {
        
const textt = text.split("www.mediafire.com/file/")[1];
const mfire = textt.split("/file")[0] || textt;
const mfirel = "https://www.mediafire.com/file/" + mfire + "/file";

        const resul = await mediafireDl(mfirel);
        const data = resul;

        const res = await mediafiredl(mfirel);
        let fsize = res.filesizeH.split('MB')[0] || res.filesizeH.split('KB')[0] / (1024);
    if (fsize >= 400) {
      return citel.reply('*File Over Limit* ' + res.filesizeH )
    } else {
            
            let mimety;
            if(data.mime.includes("charset")) {
            const mim = res.filetype.toLowerCase() + "/" + res.ext.toLowerCase();
            mimety = mim;
            } else {
            const mi = data.mime;
            mimety = mi;
            }
            
            const txt2 = await Void.sendMessage(citel.chat, {image: {url: `https://i.ibb.co/6Xghf3j/mediafire-startuptalky-2.jpg`}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _📦 Mᴇᴅɪᴀғɪʀᴇ Dᴏᴡɴʟᴏᴀᴅᴇʀ ⬇️_ )* \n\n*┃⿻* *📄 ꜰɪʟᴇ ɴᴀᴍᴇ :* ${res.filename}\n\n*┃⿻* *⏰ ᴜᴘʟᴏᴀᴅᴇᴅ ᴛɪᴍᴇ :* ${res.aploud}\n\n*┃⿻* *📂 ꜰɪʟᴇ ᴛʏᴘᴇ :* ${mimety}\n\n*┃⿻* *🗃️ ꜰɪʟᴇ ꜱɪᴢᴇ :* ${res.filesizeH}\n\n*┃⿻* *🔗 ꜰɪʟᴇ ʟɪɴᴋ :* ${res.url2}\n\n*┗━━━━━━━━━━━━━━◆*\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0`}, { quoted: citel });

            await Void.sendMessage(citel.chat, { react: {
        text: "⬇️",
        key: txt2.key,
            } } );

                let buttonMessage = {
                    document: {
                        url: res.url,
                    },
                    fileName: res.filename,
                    mimetype: `${mimety}`,
                    caption: `_*📂 𝙷𝙴𝚁𝙴 𝚈𝙾𝚄𝚁 𝙼𝙴𝙳𝙸𝙰𝙵𝙸𝚁𝙴 𝙵𝙸𝙻𝙴 📂*_\n\n_*❂ ғɪʟᴇ ɴᴀᴍᴇ :* ${res.filename}_\n_*❂  ꜰɪʟᴇ ꜱɪᴢᴇ :* ${res.filesizeH}_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`,
                }

            await Void.sendMessage(citel.chat, { react: {
        text: "⬆️",
        key: txt2.key,
            } } );

            const txt3 = await Void.sendMessage(citel.chat, buttonMessage, { quoted: citel });

                await Void.sendMessage(citel.chat, { react: {
        text: "✅",
        key: txt2.key,
            } } );
                
                await Void.sendMessage(citel.chat, { react: {
        text: "📂",
        key: txt3.key,
            } } );
                
                await Void.sendMessage(citel.chat, { react: {
        text: "ℹ️",
        key: txt2.key,
            } } );
        }
          } catch (e) {
    console.log(e)
                    citel.reply('❗ *' + e + '*')

                    citel.react("❌");
                    
                    await Void.sendMessage(citel.chat, { react: {
        text: "❌",
        key: txt2.key,
            } } )
  }
})
