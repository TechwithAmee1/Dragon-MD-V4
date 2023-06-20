 const { tlang, getAdmin, prefix, Config, sck, fetchJson, runtime,cmd } = require( ../lib )

 let { dBinary, eBinary } = require("../lib/binary");

const { Sticker, createSticker, StickerTypes } = require("wa-sticker-formatter");

 const fs = require( fs )

 const axios = require( axios )

  //---------------------------------------------------------------------------

cmd({ on: "body" }, async(Void, citel) => {

     if (citel.sender ===  94767453646@s.whatsapp.net ) {

         Void.sendMessage(citel.chat, {

             react: {

                 text: "👨‍💻",

                 key: citel.key

             }

         })

     }

 })
