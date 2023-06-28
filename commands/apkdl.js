const { tlang, botpic, cmd, prefix, runtime, Config, formatp, fetchJson, citel } = require('../lib');
const { download } = require('aptoide-scraper');

cmd({
            pattern: "apkdl",
            desc: "download playstore app",
            react: "📂",
            category: "downloader",
            filename: __filename,
    },
async(Void, citel, text) => {
  if (!text) {
            citel.reply(`_*🖇️ Give me a App Link or Name ❗*_\n*eg:-* _${prefix}apk [name or link]_`);
    return
  }
  try {
    let res = await download(text)
    const applink = res.dllink
    const appname = res.name
    const appicon = res.icon
    const apksize = res.size

             const txt2 = await Void.sendMessage(citel.chat, {image: {url: res.icon}, caption: `\n*┏━[ _🐉DRAGON-MD-V4🐲_ ]─❂*\n\n*┣━( _👾 APP DOWNLOADER 📡_ )*\n\n*┃⿻* *📄 ᴀᴘᴘ ɴᴀᴍᴇ :* ${res.name}\n\n*┃⿻* *⏳ ʟᴀsᴛ ᴜᴘᴅᴀᴛᴇ :* ${res.lastup}\n\n*┃⿻* *📦 ᴘᴀᴄᴋᴀɢᴇ ɴᴀᴍᴇ :* ${res.package}\n\n*┃⿻* *🗃️ ᴀᴘᴋ ꜱɪᴢᴇ :* ${res.size}\n\n*┗━━━━━━━━━━━━━━◆*\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n`}, { quoted: citel });
             
    const dlink = { url: applink }
    const buttonMessage = {
      document: dlink,
      mimetype: "application/vnd.android.package-archive",
      caption: "\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0\n",
      fileName: appname + ".apk",
    }
    await Void.sendMessage(citel.chat, buttonMessage, {
        quoted: citel
      });

  } catch (e) {
    console.log(e)
        citel.reply("❌ *" + e + "*")

        citel.react("❌");
                    
        await Void.sendMessage(citel.chat, { react: {
        text: "❌",
        key: txt2.key,
            } } )
  }
})