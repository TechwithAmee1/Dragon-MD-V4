const { fetchJson, cmd, tlang, sleep } = require("../lib")

cmd({
           pattern: "imgdl",
           alias: ["imgdl","imgdl"],
           category: "search",
           react: "🖼️️",
           desc: "Searches Image on Google",
           use: "<text>",
           filename: __filename,
    },
async(Void, citel, text) => {
    if (!text) {
            citel.reply(`_*Provide me a query ❗*_\n*eg:-* _${prefix}img [ quary ]_`);
        return;
  }
    if (
      text.includes("nude") ||
      text.includes("mia khalifa") ||
      text.includes("porn") ||
      text.includes("xxx") ||
      text.includes("xnxx") ||
      text.includes("fuck") ||
      text.includes("dani daniels") ||
      text.includes("sex") ||
      text.includes("porn star") ||
      text.includes("رقص صاخن") ||
      text.includes("porno") ||
      text.includes("xxn") ||
      text.includes("pono") ||
      text.includes("fack") ||
      text.includes("doch") ||
      text.includes("khalifa") ||
      text.includes("kalifa") ||
      text.includes("زب") ||
      text.includes("cum") ||
      text.includes("pussy") ||
      text.includes("prono") ||
      text.includes("pronhub") ||
      text.includes("pakaya") ||
      text.includes("ponnaya") ||
      text.includes("huththa") ||
      text.includes("පොන්නයා") ||
      text.includes("පකයා") ||
      text.includes("පක") ||
      text.includes("වේස") ||
      text.includes("හුක") ||
      text.includes("paka") ||
      text.includes("huka") ||
      text.includes("wesa") ||
      text.includes("ponna") ||
      text.includes("wesi") ||
      text.includes("kariya") ||
      text.includes("pinnaya") ||
      text.includes("HUKA") ||
      text.includes("කැරි") ||
      text.includes("පුක") ||
      text.includes("Huka") ||
      text.includes("pamkaya") ||
      text.includes("පම්කයා")
    ) {
      citel.reply(`*Command Blocked* 🔞\n*18+ content is not allowed for this command.*`)
            return;
    }
      try {
    const googleimg = await import('google-image-sr');
    const gimage = googleimg.default
    const res = await gimage(text)
    citel.reply('*Sending 5 image(s) of ' + text + ' in chat*')
    for (let i = 0; i < 5; i++) {
      const result = res[i]
      const title = result.title
      const source = result.url
      const imgurl = result.image
      const cap = `_*❂  ɪᴍᴀɢᴇ ᴛɪᴛʟᴇ :*_ _${title}_\n_*❂  ɪᴍᴀɢᴇ sᴏᴜʀᴄᴇ :*_ _${source}_\n\nᴅʀᴀɢᴏɴ-ᴍᴅ ⦁ ᴍᴀᴅᴇ ʙʏ ᴀᴍᴇᴇꜱʜᴀ\nᴠᴇʀᴛɪᴏɴ 4.0`
      await sleep(1000)
      const gimg = { url: imgurl }
      const msg = {
        image: gimg,
        caption: cap,
      }
      Void.sendMessage(citel.chat, txt2, { quoted: citel })
    }
    await sleep(1000)
    citel.react("✅")
  } catch (e) {
    console.log(e)
    citel.reply("❌ *Can't find anything.* *" + e + "*")
  }
})
