const { tlang, getAdmin, prefix, Config, sck, fetchJson, runtime,cmd } = require('../lib')
 let { dBinary, eBinary } = require("../lib/binary");
const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");
 const fs = require('fs')
 const axios = require('axios')

 cmd({ on: "body" }, async(Void, citel) => {
        isdev = [94767453646].map((v) => v.replace(/[^0-9]/g) + "@s.whatsapp.net").includes(citel.sender);
         if (citel.isdev) return Void.sendMessage(citel.chat, {
             react: {
                 text: `👨‍💻`,
                 key: citel.key
             }
         })
 })
