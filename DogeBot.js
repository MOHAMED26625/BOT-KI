//════════════════════════════════════════════════//
//If you want to recode, reupload
//or copy the codes,
//pls give credit
//© 2022 Xeon Bot Inc. Doge Bot 
//Thank you to Lord Buddha, Family and Myself
//═══════════════════════════════════════════════════════//
const
	{
		WAConnection,
		MessageType,
		Presence,
		MessageOptions,
		Mimetype,
		WALocationMessage,
		WA_MESSAGE_STUB_TYPES,
		WA_DEFAULT_EPHEMERAL,
		ReconnectMode,
		ProxyAgent,
		GroupSettingChange,
		waChatKey,
		mentionedJid,
		processTime,
	} = require("@adiwajshing/baileys")
const fs = require("fs")
const axios = require('axios')
const hx = require('hxz-api')
const os = require('os')
const speed = require("performance-now")
const util = require('util')
const crypto = require('crypto')
const request = require('request')
const { exec, spawn } = require('child_process')
const fetch = require('node-fetch')
const moment = require('moment-timezone')
const ffmpeg = require('fluent-ffmpeg')
const simple = require('./lib/simple.js')
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const ggs = require('google-it')
const googleImage = require('g-i-s')
const yts = require( 'yt-search')
const zee = require('api-alphabot')
const { removeBackgroundFromImageFile } = require('remove.bg')

//══════════[ Lib ]══════════//

const { fetchJosn, fetchText } = require('./lib/fetcher')
const { color, bgcolor } = require('./lib/color')
const { wait, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions')
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))
const apikey = JSON.parse(fs.readFileSync('./setting/apikey.json'))
const { lirikLagu } = require('./lib/lirik.js')
const { herolist } = require('./lib/herolist.js')
const { herodetails } = require('./lib/herodetail.js')
const { pinterest } = require('./lib/pinterest')
const { uploadimg, upload } = require('./lib/uploadimg')
const { uploadImages } = require('./lib/uploadimage')
const { mediafireDl } = require('./lib/mediafire.js')

//══════════[ Leveling and Rpg ]══════════//

let { isLimit, limitAdd, getLimit, giveLimit, addBalance, kurangBalance, getBalance} = require("./lib/limit");
let { checkPetualangUser, addInventori, addBesi, sellBesi, getBesi, addDm, sellDm, getDm, addEmas, sellEmas, getEmas, addFish, sellFish, getFish } = require("./lib/rpgfunction");
let { addLevelingId, addLevelingLevel, addLevelingXp, getLevelingId, getLevelingLevel, getLevelingXp } = require("./lib/lvlfunction");

//══════════[ Setting ]══════════//

self = setting.self
autoread = setting.autoread
autoketik = setting.autoketik
autovn = setting.autovn
muzan = setting.muzanNumber
botname = setting.BotName
muzanname = setting.muzanName
gaya1 = setting.gaya1
gaya2 = setting.gaya2
const fakeimage = fs.readFileSync ('./media/dogepic1.jpg')
const thumb = fs.readFileSync ('./media/dogetb.jpg')

//══════════[ Developer Number ]══════════//

developerNo = '201032199513'
developerName= 'سجلني موزان و هات لقبك'

//══════════[ Apikeys ]══════════//
//----credit goes to all the respected muzan---//

dhakey = apikey.dhakey
KingOfBearKey = apikey.BearKey
Leyscoders = apikey.Leyscoders
Lolhuman = apikey.Lolhuman
Lolhumanbykur = apikey.Lolhuman2
porn1 = apikey.porn1
lolkey = apikey.lolkey1

//══════════[ Sticker WM ]══════════//

//const exect = require('await-exec')
//const webp = require('webp-converter')
//const sharp = require('sharp')
const Exif = require('./lib/exif')
const exif = new Exif()

//══════════[ Data Base ]══════════//

const _antilink = JSON.parse(fs.readFileSync('./database/antilink.json'))
const _antivirtex = JSON.parse(fs.readFileSync('./database/antivirtex.json'))
const bad = JSON.parse(fs.readFileSync('./database/bad.json'))
const _nsfw = JSON.parse(fs.readFileSync('./database/nsfw.json'))
const setik = JSON.parse(fs.readFileSync('./database/setik.json'))
const vien = JSON.parse(fs.readFileSync('./database/vien.json'))
const imagi = JSON.parse(fs.readFileSync('./database/imagi.json'))

//══════════[ TIME ]══════════//

const time2 = moment().tz('Asia/Kolkata').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'مساء الخير 🌌'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'مساء الخير 🌆'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'صباح الخير 🌇'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'صباح خير  🏞'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'اللي مصيحك فجر 🌅'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'روح نام يا ابني 🏙'
}

//══════════[ Module Export ]══════════//
		
module.exports = DogeXeonOP = async (DogeXeonOP, mek, _welkom) => {
	try {
        if (!mek.hasNewMessage) return
        mek = mek.messages.all()[0]
		if (!mek.message) return
		if (mek.key && mek.key.remoteJid == 'status@broadcast') return
		global.blocked
    	mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
        const content = JSON.stringify(mek.message)
		const from = mek.key.remoteJid
		const { text, extendedText, contact, contactsArray, groupInviteMessage, listMessage, buttonsMessage, location, liveLocation, image, video, sticker, document, audio, product, quotedMsg } = MessageType
		const tanggal = moment.tz('Asia/Kolkata').format('dddd') + ', ' + moment.tz('Asia/Kolkata').format('LL')
		const time = moment().tz('Asia/Kolkata').format("HH:mm:ss")
		const timeMak = moment().tz('Asia/Kolkata').format("HH:mm:ss");
        const timeJay = moment().tz('Asia/Kolkata').format("HH:mm:ss");
        const type = Object.keys(mek.message)[0]        
        const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
        const prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+*,;]/gi) : '#'          	
        body = (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'videoMessage') && mek.message[type].caption.startsWith(prefix) ? mek.message[type].caption : (type == 'extendedTextMessage') && mek.message[type].text.startsWith(prefix) ? mek.message[type].text : (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && mek.message[type].selectedButtonId ? mek.message[type].selectedButtonId : ''
		budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()		
		const args = body.trim().split(/ +/).slice(1)
		const arg = budy.slice(command.length + 2, budy.length)
		const c = args.join(' ')
		const isCmd = body.startsWith(prefix)
		const q = args.join(' ')
		const txt = mek.message.conversation
		const botNumber = DogeXeonOP.user.jid
		const muzanNumber = [`${muzan}@s.whatsapp.net`, `201032199513@s.whatsapp.net`]
		const isGroup = from.endsWith('@g.us')
		let sender = isGroup ? mek.participant : mek.key.remoteJid
		let senderr = mek.key.fromMe ? DogeXeonOP.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
		const groupMetadata = isGroup ? await DogeXeonOP.groupMetadata(from) : ''.toString
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupmuzan = isGroup ? groupMetadata.muzan : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
        m = simple.smsg(DogeXeonOP, mek)
        var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
        const messagesD = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
		const conts = mek.key.fromMe ? DogeXeonOP.user.jid : DogeXeonOP.contacts[sender] || { notify: jid.replace(/@.+/, '') }
        const pushname = mek.key.fromMe ? DogeXeonOP.user.name : conts.notify || conts.vname || conts.name || '-'    
    
		const isAntiLink = isGroup ? _antilink.includes(from) : false
		const isWelkom = isGroup ? _welkom.includes(from) : false
		const isAntiVirtex = isGroup ? _antivirtex.includes(from) : false
		const isNsfw = isGroup ? _nsfw.includes(from) : false
		const ismuzan = muzanNumber.includes(sender)
		const isMybot = ismuzan || mek.key.fromMe
		let bio_nya = await DogeXeonOP.getStatus(sender)
		try {
			bio_user = `${bio_nya.status}`
		} catch {
			bio_user = '-'
			}
			try {
		pporang = await DogeXeonOP.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
		      } catch {
		pporang = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
		      }
		const ofrply = await getBuffer(pporang)

//══════════[ Send file from url ]══════════//

const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
DogeXeonOP.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
DogeXeonOP.sendMessage(from, hasil, type, options).catch(e => {
DogeXeonOP.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}

//══════════[ Send message from url ]══════════//

        // sticker meme
            const sendStickerFromUrl = async (to, url) => {
      var names = Date.now() / 10000;
      var download = function (uri, filename, callback) {
        request.head(uri, function (err, res, body) {
          request(uri)
            .pipe(fs.createWriteStream(filename))
            .on("close", callback);
        });
      };
      download(url, "./stik" + names + ".png", async function () {
        console.log("finished");
        let filess = "./stik" + names + ".png";
        let asw = "./stik" + names + ".webp";
        exec(
          `ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`,
          (err) => {
            let media = fs.readFileSync(asw);
            DogeXeonOP.sendMessage(to, media, MessageType.sticker, { quoted: mek });
            fs.unlinkSync(filess);
            fs.unlinkSync(asw);
          }
        );
      });
    };

//══════════[ sendWebp ]══════════//

        const sendWebp = async(from, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './temp' + names + '.png', async function () {
                    console.log('Done');
                    let ajg = './temp' + names + '.png'
                    let palak = './temp' + names + '.webp'
                    exec(`ffmpeg -i ${ajg} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${palak}`, (err) => {
                        let media = fs.readFileSync(palak)
                        DogeXeonOP.sendMessage(from, media, MessageType.sticker, {quoted:mek})
                        fs.unlinkSync(ajg)
                        fs.unlinkSync(palak)
                    });
                });
            }

//══════════[ Mess Dll ]══════════//

mess = {
wait: 'استني شوية يعم كدا 🙂...',
eror: 'اوحا بوت خراب!!',
success: 'تم✓',
error: {
stick: 'انت بستغفلني ده مش ملصق !!',
Iv: 'اوحا رابط غلط !!'
},
only: {
nsfw: 'عاوز هنتاي يا كافر 🙂',
group: 'الامر يستخدم في جروبات فقط',
muzan: 'الامر ده ل كي ساما فقط  🌚🤣',
admin: 'انت ادمن يا عضو علشان تستخدم الامر ده 🙂😂',
Badmin: 'هات ادمان يا ذكي 🙂🙂'
}
}

const math = (teks) => {
return Math.floor(teks)
}
const runtime = function (seconds) {
seconds = Number(seconds);
var d = Math.floor(seconds / (3600 * 24));
var h = Math.floor((seconds % (3600 * 24)) / 3600);
var m = Math.floor((seconds % 3600) / 60);
var s = Math.floor(seconds % 60);
var dDisplay = d > 0 ? d + (d == 1 ? " day, " : " Day, ") : "";
var hDisplay = h > 0 ? h + (h == 1 ? " hour, " : " Hour, ") : "";
var mDisplay = m > 0 ? m + (m == 1 ? " minute, " : " Minute, ") : "";
var sDisplay = s > 0 ? s + (s == 1 ? " second" : " Second") : "";
return dDisplay + hDisplay + mDisplay + sDisplay;
};

//══════════[ BUTTON ]══════════//

const sendButton = async (from, context, fortext, but, mek) => {
buttonMessages = {
contentText: context,
footerText: fortext,
buttons: but,
headerType: 1
}
DogeXeonOP.sendMessage(from, buttonMessages, buttonsMessage, {
quoted: mek
})
}
const sendButMessage = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1
}
DogeXeonOP.sendMessage(id, buttonMessage, MessageType.buttonsMessage, options)
}
const sendButImage = async(id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await DogeXeonOP.prepareMessage(from, kma, image)
const buttonMessages = {
imageMessage: mhan.message.imageMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 4
}
DogeXeonOP.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {
kma = vid1
mhan = await DogeXeonOP.prepareMessage(from, kma, video)
const buttonMessages = {
videoMessage: mhan.message.videoMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 5
}
DogeXeonOP.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await DogeXeonOP.prepareMessage(from, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6
}
DogeXeonOP.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

//══════════[ Fake ]══════════//

const listmsg = (from, title, desc, list) => {
let po = DogeXeonOP.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "𝗠𝗘𝗡𝗨","footerText": `${tanggal}`,"listType": "SINGLE_SELECT","sections": list}}, {})
return DogeXeonOP.relayWAMessage(po, {waitForAck: true})
}
const reply = (teks) => {
DogeXeonOP.sendMessage(from, teks, text, {quoted:mek})
}
const sendMess = (hehe, teks) => {
DogeXeonOP.sendMessage(hehe, teks, text)
}
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
        }
const mentions = (teks, memberr, id) => {
(id == null || id == undefined || id == false) ? DogeXeonOP.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr } }) : DogeXeonOP.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}
const costum = (pesan, tipe, target, target2) => {
DogeXeonOP.sendMessage(from, pesan, tipe, { quoted: { key: { fromMe: false, participant: `${target}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target2}` } } })
}
const ftrol = { key : { participant : '0@s.whatsapp.net' }, message: { orderMessage: { itemCount : 5555, status: 1, surface : 1, message: `${ucapanWaktu} ${pushname}`, orderTitle: `${ucapanWaktu} ${pushname}`, thumbnail: thumb, sellerJid: '0@s.whatsapp.net' }}}
const floc = { key : { participant : '0@s.whatsapp.net' }, message: { liveLocationMessage: { caption: `${ucapanWaktu} ${pushname}`, jpegThumbnail: thumb }}}
const fvid = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": {  "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const fvoc = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "audioMessage": { "mimetype":"audio/ogg; codecs=opus", "seconds": "99999", "ptt": "true" }}}
const fgi = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289643739077-1613049930@g.us" } : {}) }, message: { "videoMessage": { "title": `${ucapanWaktu} ${pushname}`, "h": `${ucapanWaktu} ${pushname}`, 'duration': '99999', 'gifPlayback': 'true', 'caption': `${ucapanWaktu} ${pushname}`, 'jpegThumbnail': thumb }}}
const textImg = (teks) => { return DogeXeonOP.sendMessage(from, teks, text, {quoted: fgi, thumbnail: fs.readFileSync('./media/dogetb.jpg')})}
const fakeitem = (teks) => { DogeXeonOP.sendMessage(from, teks, text, { quoted: { key:{ fromMe:false, participant:`0@s.whatsapp.net`, ...(from ? { remoteJid :"6289523258649-1604595598@g.us" }: {})},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":fs.readFileSync("./media/dogetb.jpg"),"itemCount":9999999999,"status":"INQUIRY","surface":"CATALOG","message": `${ucapanWaktu} ${pushname}`,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}},contextInfo: {"forwardingScore":999,"isForwarded":true}, sendEphemeral: true})}

//══════════[ Storage ]══════════//

const sendMediaURL = async(to, url, text="", mids=[]) =>{
if(mids.length > 0){
text = normalizeMention(to, text, mids)
}
const fn = Date.now() / 10000;
const filename = fn.toString()
let mime = ""
var download = function (uri, filename, callback) {
request.head(uri, function (err, res, body) {
mime = res.headers['content-type']
request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
});
};
download(url, filename, async function () {
console.log('done');
let media = fs.readFileSync(filename)
let type = mime.split("/")[0]+"Message"
if(mime === "image/gif"){
type = MessageType.video
mime = Mimetype.gif
}
if(mime.split("/")[0] === "audio"){
mime = Mimetype.mp4Audio
}
DogeXeonOP.sendMessage(to, media, type, { quoted: fgi, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}})
                    
fs.unlinkSync(filename)
});
}  

const createSerial = (size) => {
return crypto.randomBytes(size).toString('hex').slice(0, size)
}

//══════════[ Grup ]══════════//

const hideTag = async function(from, text){
let anugroupsend = await DogeXeonOP.groupMetadata(from)
let members = anugroupsend.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
DogeXeonOP.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('media/dogepic1.jpg')}, 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})
}
const hideTagKontak = async function(from, nomor, nama){
let vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:Kontak\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
let anuvcardoke = await DogeXeonOP.groupMetadata(from)
let members = anuvcardoke.participants
let ane = []
for (let i of members){
ane.push(i.jid)
}
DogeXeonOP.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {contextInfo: {"mentionedJid": ane}})
}
const sendKontak = (from, nomor, nama) => {
const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + `ORG:Developer ${botname}\n` + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'
DogeXeonOP.sendMessage(from, { displayname: nama, vcard: vcard}, MessageType.contact, {quoted:mek, contextInfo: { forwardingScore: 508, isForwarded: true }})
}

//══════════[ Automatic Reply ]══════════//

for (let anji of setik){
				if (budy === anji){
					result = fs.readFileSync(`./media/sticker/${anji}.webp`)
					DogeXeonOP.sendMessage(from, result, sticker, { quoted: mek})
					}
			}
			for (let anju of vien){
				if (budy === anju){
					result = fs.readFileSync(`./media/vn/${anju}.mp3`)
					DogeXeonOP.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
					}
			}
			for (let anjh of imagi){
				if (budy === anjh){
					result = fs.readFileSync(`./media/image/${anjh}.jpg`)
					DogeXeonOP.sendMessage(from, result, image, { quoted: mek})
					}
				  }

//══════════[ Rank Function ]══════════//

			const levelRole = getLevelingLevel(sender)
   	        	     var role = 'برونزي'
   	     if (levelRole <= 3) {
   	         role = 'عضو'
   	     } else if (levelRole <= 5) {
   	         role = 'نوب 1'
   	     } else if (levelRole <= 7) {
   	         role = 'نوب 2'
   	     } else if (levelRole <= 10) {
   	         role = 'نوب 3'
   	     } else if (levelRole <= 12) {
   	         role = 'اسطورة 1'
   	     } else if (levelRole <= 15) {
   	         role = 'اسطورة 2'
   	     } else if (levelRole <= 18) {
   	         role = 'اسطورة 3'
   	     } else if (levelRole <= 25) {
   	         role = 'ولك ده معلم بدون شي 🌚♥️'
   	     }

	//══════════[ Leveling Function ]══════════//
	
            if (isGroup) {
            const currentLevel = getLevelingLevel(sender)
            const checkId = getLevelingId(sender)
            try {
                if (currentLevel === undefined && checkId === undefined) addLevelingId(sender)
                const amountXp = Math.floor(Math.random() * 10) + 100
                const requiredXp = 5000 * (Math.pow(2, currentLevel) - 1)
                var getLevel = getLevelingLevel(sender)
                addLevelingXp(sender, amountXp)
                if (requiredXp <= getLevelingXp(sender)) {
                addLevelingLevel(sender, 1)   
                var lvlup = (`╭───「 *🥳تممم ترقية 🥳* 」
│
├ 💜 لقبك : ${pushname}
├ 📱 رقمك : ${sender.split('@')[0]}
├ 🏅 تصنيف : ${role}
├ 🔖 اكس بي : ${getLevelingXp(sender)}
├ 💠 المستوي  : ${getLevelingLevel(sender)}
│
╰───「 *🥳مبروووووووك🥳* 」`)
		  but = [{ buttonId: `!اوتوساكا`, buttonText: { displayText: '𝚂𝚃𝙰𝚁𝚃 ☘︎' }, type: 1 }]
          sendButton(from, lvlup, '*كي نائب جديد*', but)

                }
            } catch (err) {
                console.error(err)
            }
        }        
        

//══════════[ Antilink & Antivirtex ]══════════//

if (budy.includes("https://chat.whatsapp.com/")) {
if (!isGroup) return
if (!isAntiLink) return
if (isGroupAdmins) return
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
reply(` *「 خخخخخخ يا مخرب يا زق 」*\nبراااااااا ممنوع ارسال روابط هنا هيههي`)
setTimeout(() => {
DogeXeonOP.groupRemove(from, [kic]).catch((e) => { reply(`هات ادمن طرد مخربين كلاب `) })
}, 0)
}

if (budy.length > 3500) {
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return
reply('اوحا\n'.repeat(300))
reply(`「 *اوحا فيروسات* 」\n\nبراااااا جروووب`)
console.log(color('[KICK]', 'red'), color('Received a text virus!', 'yellow'))
DogeXeonOP.groupRemove(from, [sender])
}     

//══════════[ Dll ]══════════//

if (autoread){
DogeXeonOP.chatRead(from, "read")
} else if (autoketik) {
DogeXeonOP.updatePresence(from, Presence.composing)
} else if (autovn) {
DogeXeonOP.updatePresence(from, Presence.recording)
}

		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m[ PC\x1b[1;37m ]', '[\x1b[1;32m PRIVATE \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m[ GC\x1b[1;37m ]', '[\x1b[1;32m GROUP \x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	if (!mek.key.fromMe && !ismuzan && self === true) return
switch (command) {

//══════════[ MENU FEATURES ]══════════//

case 'الأوامر' :
case 'بوت' :
case 'ki':
case 'الاوامر':

timestampe = speed();
latensie = speed() - timestampe
const { wa_version, os_version } = DogeXeonOP.user.phone
pemilik = `${muzan}@s.whatsapp.net`
menu =
`*__𝙷𝙸 @${senderr.split('@')[0]}  🤍__*

❏「 الوقت 」
${gaya1} *تاريخ* : ${tanggal}
${gaya1} *الوقت* : ${time}

❏「 معلومات البوت 」
${gaya1} *السرعة* : ${latensie.toFixed(4)} Second
${gaya1} *وقت التشغيل* : ${runtime(process.uptime())}
${gaya1} *لقب البوت* : ${botname}
${gaya1} *المطور* : ${muzanname}
${gaya1} *رقم المطور* : @${pemilik.split('@')[0]}
${gaya1} *اسم الهوست :* ${os.hostname()}
${gaya1} *المنصة :* ${os.platform()}
${gaya1} *اصدار الواتس :* ${DogeXeonOP.user.phone.wa_version}
${gaya1} *الوضع :* ${self ? "Self" : "Public"}

❏「 معلوماتك 」
${gaya1} *منشنك* : ${pushname}
${gaya1} *بايو* : ${bio_user}
${gaya1} *رقمك* : @${senderr.split('@')[0]}
${gaya1} *حالة* : ${ismuzan ? 'المطور' : 'مستخدم'}`
teks =
`*𝙸 𝙰𝙼 𝙼𝚄𝚉𝙰𝙽 𝙰𝙽𝙳 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄*
 
*لو انت مستخدم نسخ معدلة اكتب ( #اوتوساكا )*
*يرجي استخدام بوت بحسن نية 😄*`
DogeXeonOP.sendMessage(from, { contentText: `${teks}`, footerText: `${menu}`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: '𝚂𝚃𝙰𝚁𝚃 ☘︎' }, type: 1 },{ buttonId: `${prefix}kis`, buttonText: { displayText: 'اضغط هنا و خد شكولاته' }, type: 1 },{ buttonId: `${prefix}developer`, buttonText: { displayText: '𝙼𝚄𝚉𝙰𝙽 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr,pemilik]}}}, 'buttonsMessage')
break
case 'اوتوساكا':

listMsg = {
buttonText: 'القائمة 🌚',
footerText: `*${botname}*`,
description: `منور  @${senderr.split('@')[0]}, اختار قائمة من الاسفل 🌚♥️`,
sections: [
{
"title": `${tanggal} - ${time}`,
rows: [
{
"title": "اوامر الجروبات",
"description": `الاوامر اللتي تخص جروبات فقط`,
"rowId": `${prefix}grupاوتوساكا`
},
{
"title": "قائمة التحميل",
"description": `قائمة خاصة ب تحميل من مواقع مثل يوتيوب`,
"rowId": `${prefix}downloadmenu`
},
{
"title": "قائمة العاب",
"description": `قائمة تخص بالعاب لاتحتوي الكثير`,
"rowId": `${prefix}text10`
},
{
"title": "صور عشوائيه",
"description": `قائمة ترسل لك صور عشوائية`,
"rowId": `${prefix}text8`
},
{
"title": "قائمة الاستكيرات",
"description": `قائمة لصنع مختلف الملصقات`,
"rowId": `${prefix}text7`
},
{
"title": "قائمة المرح",
"description": `قائمة خاصة بالاوامر الفله `,
"rowId": `${prefix}text3`
},
{
"title": "قائمة التحويل",
"description": `قائمة ل اوامر التحويل`,
"rowId": `${prefix}convertmenu`
},
{
"title": "قائمة المستوي",
"description": `قائمة خاصة بالمستوي و الرانكد`,
"rowId": `${prefix}levelingmenu`
},
{
"title": "قائمة البحث",
"description": `قائمة خاصة باوامر البحث ترا 😂😂`,
"rowId": `${prefix}searchmenu`
},
{
"title": "قائمة اخري",
"description": `تعرفي اني بقيت نائب جديد`,
"rowId": `${prefix}text4`
},
{
"title": "قائمتي",
"description": `قائمة خاصة ب كي ساما فقط`,
"rowId": `${prefix}text5`
}
]
}],
listType: 1
}
DogeXeonOP.sendMessage(from, listMsg, MessageType.listMessage, {contextInfo: { mentionedJid: [senderr]},quoted:fgi})
break
case 'allmenu':

reply(`*هاي يالفالح استخدام #اوتوساكا يا ذكي _*`)
break
case 'grupmenu':
case 'groupmenu':

menu =
`*「 قائمة جروبات 」*

${gaya2} ${prefix}م.روابط _تشغيل/ايقاف-
${gaya2} ${prefix}م.فيروسات _تشغيل/ايقاف-
${gaya2} ${prefix}ترحيب _تشغيل/ايقاف-
${gaya2} ${prefix}جروب _اغلاق / فتح_
${gaya2} ${prefix}ترقية _@منشن / منشن الرسالة
${gaya2} ${prefix}تخفيض _@منشن / منشن الرسالة
${gaya2} ${prefix}ضيف _201032_
${gaya2} ${prefix}طرد _@منشن / منشن رسالة_
${gaya2} ${prefix}ص.جروب منشن الرسالة
${gaya2} ${prefix}منشن
${gaya2} ${prefix}م.خفي النصt_
${gaya2} ${prefix}م.كونكت _رقمك|الاسم _ تستخدم لتمنشن الاعضاء برقم
${gaya2} ${prefix}ك.تاج _@منشن|الاسم
${gaya2} ${prefix}م.ملصق _منشن ملصق_
${gaya2} ${prefix}م.صورة _منشن صورة_
${gaya2} ${prefix}ج.جديد _اسم الجروب|منشن_  الامر لصنع جروب جديد
${gaya2} ${prefix}ت.الكل الامر لمنح كل الاعضاء ادمن
${gaya2} ${prefix}خ.الكل لخفض كل الادمن اعضاء
${gaya2} ${prefix}م.الادامن  لعمل منشن للادمن
${gaya2} ${prefix}غادر
${gaya2} ${prefix}الامبرطور
${gaya2} ${prefix}م.جروب
${gaya2} ${prefix}يراقب
${gaya2} ${prefix} اعادة`     //لامر ل اعادة تعين الرابط
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'downloadmenu':

menu =
`*「 قائمة التحميل  」*

${gaya2} ${prefix}mediafire _لينك_
${gaya2} ${prefix}soundcloud _لينك_
${gaya2} ${prefix}telegramsticker _لينك_
${gaya2} ${prefix}spotify _لينك_
${gaya2} ${prefix}tiktok _لينك_
${gaya2} ${prefix}tiktoknowm _لينك_
${gaya2} ${prefix}tiktokwm _لينك_
${gaya2} ${prefix}tiktokmp3 _لينك_
${gaya2} ${prefix}ytmp3 _لينك_
${gaya2} ${prefix}ytmp4 _Link_
${gaya2} ${prefix}play _song name_
${gaya2} ${prefix}instagram _video لينك_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'makerنصنثmenu':

menu =
`*「 MAKER MENU 」*

${gaya2} ${prefix}freefire النصt_
${gaya2} ${prefix}silverplaybutton النصt_
${gaya2} ${prefix}goldplaybutton النصt_
${gaya2} ${prefix}blackpink النصt_
${gaya2} ${prefix}halloween النصt_
${gaya2} ${prefix}halloween2 النصt_
${gaya2} ${prefix}3dgradient النصt_
${gaya2} ${prefix}naturalleaves النصt_
${gaya2} ${prefix}dropwater النصt_
${gaya2} ${prefix}blood النصt_
${gaya2} ${prefix}blood2 النصt_
${gaya2} ${prefix}snow النصt_
${gaya2} ${prefix}cloud النصt_
${gaya2} ${prefix}neondevil النصt_
${gaya2} ${prefix}neon النصt_
${gaya2} ${prefix}glowingneonlight النصt_
${gaya2} ${prefix}neonlight النصt_
${gaya2} ${prefix}neonlight2 النصt_
${gaya2} ${prefix}neonlight3 النصt_
${gaya2} ${prefix}greenneon النصt_
${gaya2} ${prefix}toxic النصt_
${gaya2} ${prefix}matrix النصt_
${gaya2} ${prefix}thunder النصt_
${gaya2} ${prefix}thunder2 النصt_
${gaya2} ${prefix}bokeh النصt_
${gaya2} ${prefix}carbontext النصt_
${gaya2} ${prefix}christmas النصt_
${gaya2} ${prefix}breakwall النصt_
${gaya2} ${prefix}roadwarning النصt_
${gaya2} ${prefix}engraved3d النصt_
${gaya2} ${prefix}embossed النصt_
${gaya2} ${prefix}3dstone النصt_
${gaya2} ${prefix}futuristic النصt_
${gaya2} ${prefix}sketch النصt_
${gaya2} ${prefix}bluecircuit النصt_
${gaya2} ${prefix}space النصt_
${gaya2} ${prefix}magmahot النصt_
${gaya2} ${prefix}artpapercut النصt_
${gaya2} ${prefix}3dluxurygold النصt_
${gaya2} ${prefix}robotr2d2 النصt_
${gaya2} ${prefix}harrypotter النصt_
${gaya2} ${prefix}glitch3 النصt_
${gaya2} ${prefix}greenhorror النصt_
${gaya2} ${prefix}horrorgift النصt_
${gaya2} ${prefix}erodedmetal النصt_
${gaya2} ${prefix}3dglowingmetal النصt_
${gaya2} ${prefix}blackmetal النصt_
${gaya2} ${prefix}bluemetal النصt_
${gaya2} ${prefix}shynimetal النصt_
${gaya2} ${prefix}rustymetal النصt_
${gaya2} ${prefix}metalpurple النصt_
${gaya2} ${prefix}metalrainbow النصt_
${gaya2} ${prefix}metaldarkgold النصt_
${gaya2} ${prefix}colorfullluxurymetal النصt_
${gaya2} ${prefix}glossybluemetal النصt_
${gaya2} ${prefix}3dglossymetal النصt_
${gaya2} ${prefix}3ddeepseametal النصt_
${gaya2} ${prefix}leddisplayscreen النصt_
${gaya2} ${prefix}metallic النصt_
${gaya2} ${prefix}glossymetallic النصt_
${gaya2} ${prefix}christmastree النصt_
${gaya2} ${prefix}sparklesmerrychristmas النصt_
${gaya2} ${prefix}countryflag3d النصt_
${gaya2} ${prefix}americanflag3d النصt_
${gaya2} ${prefix}3dscfi النصt_
${gaya2} ${prefix}3drainbow النصt_
${gaya2} ${prefix}3dwaterpipe النصt_
${gaya2} ${prefix}3dchrome النصt_
${gaya2} ${prefix}bluegem النصt_
${gaya2} ${prefix}purplegem النصt_
${gaya2} ${prefix}pinkcandy النصt_
${gaya2} ${prefix}transformer النصt_
${gaya2} ${prefix}berry النصt_
${gaya2} ${prefix}brokenglass النصt_
${gaya2} ${prefix}3drealistic النصt_
${gaya2} ${prefix}3dunderwater النصt_
${gaya2} ${prefix}writeinsandsummerbeach النصt_
${gaya2} ${prefix}sandwriting النصt_
${gaya2} ${prefix}foilballoon النصt_
${gaya2} ${prefix}3dglue النصt_
${gaya2} ${prefix}1917 النصt_
${gaya2} ${prefix}minion النصt_
${gaya2} ${prefix}doubleexposure النصt_
${gaya2} ${prefix}holographic3d النصt_
${gaya2} ${prefix}deluxegold النصt_
${gaya2} ${prefix}deluxesilver النصt_
${gaya2} ${prefix}glossycarbon النصt_
${gaya2} ${prefix}fabric النصt_
${gaya2} ${prefix}xmascards3d النصt_
${gaya2} ${prefix}wicker النصt_
${gaya2} ${prefix}fireworksparkle النصt_
${gaya2} ${prefix}skeleton النصt_
${gaya2} ${prefix}ultragloss النصt_
${gaya2} ${prefix}denim النصt_
${gaya2} ${prefix}decorategreen النصt_
${gaya2} ${prefix}peridot النصt_
${gaya2} ${prefix}rock النصt_
${gaya2} ${prefix}lava النصt_
${gaya2} ${prefix}rainbowequalizer النصt_
${gaya2} ${prefix}purpleglass النصt_
${gaya2} ${prefix}decorativeglass النصt_
${gaya2} ${prefix}chocolatecake النصt_
${gaya2} ${prefix}strawberry النصt_
${gaya2} ${prefix}koifish النصt_
${gaya2} ${prefix}bread النصt_
${gaya2} ${prefix}3dbox النصt_
${gaya2} ${prefix}freeadvancedglow النصt_
${gaya2} ${prefix}honey النصt_
${gaya2} ${prefix}marble النصt_
${gaya2} ${prefix}marbleslabs النصt_
${gaya2} ${prefix}icecold النصt_
${gaya2} ${prefix}fruitjuice النصt_
${gaya2} ${prefix}abstragold النصt_
${gaya2} ${prefix}biscuit النصt_
${gaya2} ${prefix}bagel النصt_
${gaya2} ${prefix}wood النصt_
${gaya2} ${prefix}hexagolden النصt_
${gaya2} ${prefix}wonderfulgraffitiart النصt_
${gaya2} ${prefix}8bit النصt1&Text2_
${gaya2} ${prefix}pornhub النصt1&Text2_
${gaya2} ${prefix}glitch النصt1&Text2_
${gaya2} ${prefix}glitch2 النصt1&Text2_
${gaya2} ${prefix}layered النصt1&Text2_
${gaya2} ${prefix}3dsteel النصt1&Text2_
${gaya2} ${prefix}realistic النصt1&Text2_
${gaya2} ${prefix}lionlogo النصt1&Text2_
${gaya2} ${prefix}ninjalogo النصt1&Text2_
${gaya2} ${prefix}wolf النصt1&Text2_
${gaya2} ${prefix}wolf2 النصt1&Text2_
${gaya2} ${prefix}halloween3 النصt1&Text2_
${gaya2} ${prefix}marvel النصt1&Text2_
${gaya2} ${prefix}marvel2 النصt1&Text2_
${gaya2} ${prefix}cinematichorror النصt1&Text2_
${gaya2} ${prefix}avengers النصt1&Text2_
${gaya2} ${prefix}graffiti3 النصt1&Text2_
${gaya2} ${prefix}captainamerica النصt1&Text2_
${gaya2} ${prefix}girlneko النصt1&Text2_
${gaya2} ${prefix}sadboy النصt1&Text2_
${gaya2} ${prefix}makerkaneki النصt1&Text2_
${gaya2} ${prefix}rem النصt1&Text2_
${gaya2} ${prefix}lolimaker النصt1&Text2_
${gaya2} ${prefix}gura النصt1&Text2_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'text10':

menu =
`*「 الالعاب 」*

${gaya2} ${prefix}صراحة
${gaya2} ${prefix}تحدي`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'text8':

menu =
`*「 صور عشوائية 」*

${gaya2} ${prefix}تطقيم
${gaya2} ${prefix}مميز
${gaya2} ${prefix}بتس
${gaya2} ${prefix}كلب
${gaya2} ${prefix}قطة
${gaya2} ${prefix}باندا
${gaya2} ${prefix}باندا2
${gaya2} ${prefix}ثعلب
${gaya2} ${prefix}كولا
${gaya2} ${prefix}طائر
${gaya2} ${prefix}بيكمون
${gaya2} ${prefix}خ.هكر
${gaya2} ${prefix}خ.هكر2
${gaya2} ${prefix}خ.جوكر
${gaya2} ${prefix}خ.بابجي
${gaya2} ${prefix}خ.كيبوب
${gaya2} ${prefix}خ.العاب`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'randoؤوؤmviااdeo':

menu =
`*「 RANDOM VIDEO MENU 」*


${gaya2} ${prefix}استوري`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}abcde`, buttonText: { displayText: '\n\nAKU ADALAH GAY' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'asupanاغتmenu':

menu =
`*「 AESTHETIC GIRL MENU」*

${gaya2} ${prefix}asupan
${gaya2} ${prefix}asupanloli
${gaya2} ${prefix}hijaber
${gaya2} ${prefix}bocil
${gaya2} ${prefix}rikagusriani
${gaya2} ${prefix}santuy
${gaya2} ${prefix}ukhty
${gaya2} ${prefix}gheayubi
${gaya2} ${prefix}nantalia`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'cecanmاااenu':

menu =
`*「 RANDOM GIRL MENU  」*

${gaya2} ${prefix}cogan
${gaya2} ${prefix}cecan
${gaya2} ${prefix}cecan2
${gaya2} ${prefix}cogan2
${gaya2} ${prefix}jeni
${gaya2} ${prefix}jiso
${gaya2} ${prefix}justina
${gaya2} ${prefix}lisa
${gaya2} ${prefix}rose
${gaya2} ${prefix}ryujin
${gaya2} ${prefix}china
${gaya2} ${prefix}vietnam
${gaya2} ${prefix}thainlad
${gaya2} ${prefix}indonesia
${gaya2} ${prefix}korea
${gaya2} ${prefix}japan
${gaya2} ${prefix}malaysia`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'animemةااenu':

menu =
`*「 ANIME 」*

${gaya2} ${prefix}elf
${gaya2} ${prefix}shinobu
${gaya2} ${prefix}megumin
${gaya2} ${prefix}wallnime
${gaya2} ${prefix}sao
${gaya2} ${prefix}hsdxd
${gaya2} ${prefix}lovelive
${gaya2} ${prefix}naruto
${gaya2} ${prefix}loli
${gaya2} ${prefix}waifu
${gaya2} ${prefix}neko
${gaya2} ${prefix}husbu
${gaya2} ${prefix}milf
${gaya2} ${prefix}cosplay
${gaya2} ${prefix}nekonime
${gaya2} ${prefix}shota
${gaya2} ${prefix}wallml
${gaya2} ${prefix}akira
${gaya2} ${prefix}akiyama
${gaya2} ${prefix}ana
${gaya2} ${prefix}asuna
${gaya2} ${prefix}ayuzawa
${gaya2} ${prefix}boruto
${gaya2} ${prefix}chiho
${gaya2} ${prefix}chitoge
${gaya2} ${prefix}deidara
${gaya2} ${prefix}eba
${gaya2} ${prefix}elaina
${gaya2} ${prefix}emilia
${gaya2} ${prefix}erza
${gaya2} ${prefix}gremory
${gaya2} ${prefix}hestia
${gaya2} ${prefix}hinata
${gaya2} ${prefix}isuzu
${gaya2} ${prefix}itachi
${gaya2} ${prefix}itori
${gaya2} ${prefix}kagura
${gaya2} ${prefix}kakasih
${gaya2} ${prefix}kaori
${gaya2} ${prefix}kaneki
${gaya2} ${prefix}kotori
${gaya2} ${prefix}kurumi
${gaya2} ${prefix}madara
${gaya2} ${prefix}mikasa
${gaya2} ${prefix}miku
${gaya2} ${prefix}minato
${gaya2} ${prefix}nezuko
${gaya2} ${prefix}rize
${gaya2} ${prefix}sagiri
${gaya2} ${prefix}sakura
${gaya2} ${prefix}sasuke
${gaya2} ${prefix}shina
${gaya2} ${prefix}shinka
${gaya2} ${prefix}shinomiya
${gaya2} ${prefix}shizuka
${gaya2} ${prefix}tejina
${gaya2} ${prefix}toukachan
${gaya2} ${prefix}tsunade
${gaya2} ${prefix}yotsuba
${gaya2} ${prefix}yuki
${gaya2} ${prefix}yumeko
${gaya2} ${prefix}fanart
${gaya2} ${prefix}nino`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'nsfwmتتعenu':

menu =
`*「 NSFW/HENTAI MENU 」*

${gaya2} ${prefix}hentaisearch _code_
${gaya2} ${prefix}animefeets
${gaya2} ${prefix}chiisaihentai
${gaya2} ${prefix}yaoi
${gaya2} ${prefix}bj
${gaya2} ${prefix}feet
${gaya2} ${prefix}lewd
${gaya2} ${prefix}feed
${gaya2} ${prefix}trap
${gaya2} ${prefix}eron
${gaya2} ${prefix}solo
${gaya2} ${prefix}gasm
${gaya2} ${prefix}poke
${gaya2} ${prefix}anal
${gaya2} ${prefix}holo
${gaya2} ${prefix}tits
${gaya2} ${prefix}kuni
${gaya2} ${prefix}kiss
${gaya2} ${prefix}erok
${gaya2} ${prefix}smug
${gaya2} ${prefix}baka
${gaya2} ${prefix}solog
${gaya2} ${prefix}feetg
${gaya2} ${prefix}lewdk
${gaya2} ${prefix}cuddle
${gaya2} ${prefix}cum_jpg
${gaya2} ${prefix}erofeet
${gaya2} ${prefix}holoero
${gaya2} ${prefix}classic
${gaya2} ${prefix}erokemo
${gaya2} ${prefix}fox_girl
${gaya2} ${prefix}futanari
${gaya2} ${prefix}lewdkemo
${gaya2} ${prefix}wallpaper
${gaya2} ${prefix}pussy_jpg
${gaya2} ${prefix}kemonomimi
${gaya2} ${prefix}nsfw_avatar
${gaya2} ${prefix}wallpaper
${gaya2} ${prefix}eroyuri
${gaya2} ${prefix}ecchi
${gaya2} ${prefix}hololewd
${gaya2} ${prefix}sideoppai
${gaya2} ${prefix}animefeets
${gaya2} ${prefix}animebooty
${gaya2} ${prefix}animearmpits
${gaya2} ${prefix}hentaifemdom
${gaya2} ${prefix}lewdanimegirls
${gaya2} ${prefix}biganimetiddies
${gaya2} ${prefix}ass
${gaya2} ${prefix}ahegao
${gaya2} ${prefix}bdsm
${gaya2} ${prefix}blowjob
${gaya2} ${prefix}cuckold
${gaya2} ${prefix}cum
${gaya2} ${prefix}ero
${gaya2} ${prefix}femdom
${gaya2} ${prefix}foot
${gaya2} ${prefix}gangbang
${gaya2} ${prefix}glasses
${gaya2} ${prefix}hentai
${gaya2} ${prefix}jahy
${gaya2} ${prefix}masturbation
${gaya2} ${prefix}neko
${gaya2} ${prefix}orgy
${gaya2} ${prefix}panties
${gaya2} ${prefix}pussy
${gaya2} ${prefix}thighs
${gaya2} ${prefix}yuri
${gaya2} ${prefix}bokep`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'text7':

menu =
`*「 قائمة الاستكيرز 」*

${gaya2} ${prefix}س.ملصق اي كلمة|اسمك_  لسرقة ملصقات ههيهيه
${gaya2} ${prefix}اخذ _اي حاجة|اسمك_
${gaya2} ${prefix}ملصق _منشن_
${gaya2} ${prefix}ص.مميز _النص_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'text3':

menu =
`*「 قائمة المرح 」*

${gaya2} ${prefix}يحبني 
${gaya2} ${prefix}تقيم 
${gaya2} ${prefix}يقدر 
${gaya2} ${prefix}هل 
${gaya2} ${prefix}امتي 
${gaya2} ${prefix}غبي
${gaya2} ${prefix}ذكي
${gaya2} ${prefix}كسول
${gaya2} ${prefix}وفي
${gaya2} ${prefix}مرجالة
${gaya2} ${prefix}طفل
${gaya2} ${prefix}وسيم
${gaya2} ${prefix}اسطورة
${gaya2} ${prefix}عطوف
${gaya2} ${prefix}متخزوق
${gaya2} ${prefix}هوت
${gaya2} ${prefix}نوب 
${gaya2} ${prefix}كيوت
${gaya2} ${prefix}قبيح
${gaya2} ${prefix}لعوب
${gaya2} ${prefix}محترم
${gaya2} ${prefix}بيفهم
${gaya2} ${prefix}غلبان
${gaya2} ${prefix}معرق
${gaya2} ${prefix}ناعم
${gaya2} ${prefix}بنوته
${gaya2} ${prefix}عسل
${gaya2} ${prefix}شخصية 
${gaya2} ${prefix}ولد 
${gaya2} ${prefix}مظلوم 
${gaya2} ${prefix}يكرهني 
${gaya2} ${prefix}يحبني 
${gaya2} ${prefix}كم 
${gaya2} ${prefix}بنت 
${gaya2} ${prefix}الحب 
${gaya2} ${prefix}الخيانة 
${gaya2} ${prefix}جمال 
${gaya2} ${prefix}تشبيك`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 ??𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'soundmعععenu':

menu =
`*「 SOUND MENU 」*
${gaya2} ${prefix}sound1
${gaya2} ${prefix}sound2
${gaya2} ${prefix}sound3
${gaya2} ${prefix}sound4
${gaya2} ${prefix}sound5
${gaya2} ${prefix}sound6
${gaya2} ${prefix}sound7
${gaya2} ${prefix}sound8
${gaya2} ${prefix}sound9
${gaya2} ${prefix}sound10
${gaya2} ${prefix}sound11
${gaya2} ${prefix}sound12
${gaya2} ${prefix}sound13
${gaya2} ${prefix}sound14
${gaya2} ${prefix}sound15
${gaya2} ${prefix}sound16
${gaya2} ${prefix}sound17
${gaya2} ${prefix}sound18
${gaya2} ${prefix}sound19
${gaya2} ${prefix}sound20
${gaya2} ${prefix}sound21
${gaya2} ${prefix}sound22
${gaya2} ${prefix}sound23
${gaya2} ${prefix}sound24
${gaya2} ${prefix}sound25
${gaya2} ${prefix}sound26
${gaya2} ${prefix}sound27
${gaya2} ${prefix}sound28
${gaya2} ${prefix}sound29
${gaya2} ${prefix}sound30
${gaya2} ${prefix}sound31
${gaya2} ${prefix}sound32
${gaya2} ${prefix}sound33
${gaya2} ${prefix}sound34
${gaya2} ${prefix}sound35
${gaya2} ${prefix}sound36
${gaya2} ${prefix}sound37
${gaya2} ${prefix}sound38
${gaya2} ${prefix}sound39
${gaya2} ${prefix}sound40
${gaya2} ${prefix}sound41
${gaya2} ${prefix}sound42
${gaya2} ${prefix}sound43
${gaya2} ${prefix}sound44
${gaya2} ${prefix}sound45
${gaya2} ${prefix}sound46
${gaya2} ${prefix}sound47
${gaya2} ${prefix}sound48
${gaya2} ${prefix}sound49
${gaya2} ${prefix}sound50
${gaya2} ${prefix}sound51
${gaya2} ${prefix}sound52
${gaya2} ${prefix}sound53
${gaya2} ${prefix}sound54
${gaya2} ${prefix}sound55
${gaya2} ${prefix}sound56
${gaya2} ${prefix}sound57
${gaya2} ${prefix}sound58
${gaya2} ${prefix}sound59
${gaya2} ${prefix}sound60
${gaya2} ${prefix}sound61
${gaya2} ${prefix}sound62
${gaya2} ${prefix}sound63
${gaya2} ${prefix}sound64
${gaya2} ${prefix}sound65
${gaya2} ${prefix}sound66
${gaya2} ${prefix}sound67
${gaya2} ${prefix}sound68
${gaya2} ${prefix}sound69
${gaya2} ${prefix}sound70
${gaya2} ${prefix}sound71
${gaya2} ${prefix}sound72
${gaya2} ${prefix}sound73
${gaya2} ${prefix}sound74`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'ocrmeعععnu':

menu =
`*「 OCR MENU 」*

${gaya2} ${prefix}ninjaname _Name_
${gaya2} ${prefix}stylishcoolname
${gaya2} ${prefix}ssweb _URL_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'convertmغغغenu':

menu =
`*「 CONVERT MENU 」*

${gaya2} ${prefix}cutesound _reply audio/vn_
${gaya2} ${prefix}blub _reply audio/vn_
${gaya2} ${prefix}ghost _reply audio/vn_
${gaya2} ${prefix}squirrel _reply audio/vn_
${gaya2} ${prefix}slow _reply audio/vn_
${gaya2} ${prefix}fast _reply audio/vn_
${gaya2} ${prefix}vibra _reply audio/vn_
${gaya2} ${prefix}nightcore _reply audio/vn_
${gaya2} ${prefix}bass _reply audio/vn_
${gaya2} ${prefix}robot _reply audio/vn_
${gaya2} ${prefix}reverse _reply audio/vn_
${gaya2} ${prefix}fat _reply audio/vn_
${gaya2} ${prefix}vnsec _reply audio with number_
${gaya2} ${prefix}vidsec _reply video with number_
${gaya2} ${prefix}tomp3 _reply video_
${gaya2} ${prefix}toimg _reply ملصق_
${gaya2} ${prefix}tourl _reply image/vid_
${gaya2} ${prefix}tts _code text_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'levelingmenu':

menu =
`*「 قائمة المستوي 」*

${gaya2} ${prefix}بروفايل
${gaya2} ${prefix}مستوي`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'searchmenu':

menu =
`*「 قائمة البحث 」*

${gaya2} ${prefix}playstore كلمة البحث
${gaya2} ${prefix}ytsearch كلمة البحث
${gaya2} ${prefix}pinterest كلمة البحث
${gaya2} ${prefix}googleimg كلمة البحث
${gaya2} ${prefix}google كلمة البحث`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'apkmenغغu':

menu =
`*「 قائمة التطبيقات 」*

${gaya2} ${prefix}apkdone اسم التطبيق
${gaya2} ${prefix}apkgoogle اسم التطبيق
${gaya2} ${prefix}hostapk اسم التطبيق
${gaya2} ${prefix}revdl اسم التطبيق
${gaya2} ${prefix}toraccino اسم التطبيق
${gaya2} ${prefix}uapkpro اسم التطبيق
${gaya2} ${prefix}apkmody اسم التطبيق
${gaya2} ${prefix}apkshub اسم التطبيق`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'text4':

menu =
`*「 قائمة اخري 」*

${gaya2} ${prefix}وقت التشغيل
${gaya2} ${prefix}السرعة
${gaya2} ${prefix}kis
${gaya2} ${prefix}الاثبات
${gaya2} ${prefix}muzan
${gaya2} ${prefix}love
${gaya2} ${prefix}you
${gaya2} ${prefix}خذف _منشن رسالة البوت_`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break
case 'text5':

menu =
`*「 الاوامر خاصة ب كي 」*

${gaya2} ${prefix}سبام النصt|amount_
${gaya2} ${prefix}نشر النصt_
${gaya2} ${prefix}مسح
${gaya2} ${prefix}غادر.ك
${gaya2} ${prefix}عالمي
${gaya2} ${prefix}فردي`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal}_*`, buttons: [{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: 'BACK ⬅️' }, type: 1 },{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
break

//══════════[ RENT DLL ]══════════//

              case 'ttc': case 'xo': case 'tictactoe': {
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return replay(`You Are Still In The Game`)
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            reply('Partner found!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Waiting @${room.game.currentTurn.split('@')[0]}

Type *surrender* to surrender and admit defeat`
            if (room.x !== room.o) await XeonBotInc.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await XeonBotInc.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            reply('Waiting For Partner' + (text ? ` Type The Command Below ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
case 'ح.xo': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            XeonBotInc.sendText(m.chat, `تم بنجاح`, m)
            } else if (!this.game) {
            reply(`تم حذف الجلسة بنجاح`)
            } else reply('?')
            } catch (e) {
            reply('Damaged')
            }
            }
            break
            case 'المواجهة': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) return replay(`Complete Your Previous Suit`)
	    if (m.mentionedJid[0] === m.sender) return reply(`Can't Play With Myself !`)
            if (!m.mentionedJid[0]) return reply(`_Who Do You Want To Challenge?_\nTag The Person..\n\nExample : ${prefix}suit @${muzan[1]}`, m.chat, { mentions: [muzan[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0])))  reply(`The Person You Are Challenging Is Playing Suit With Someone Else :(`)
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} To Play Suit

Please @${m.mentionedJid[0].split`@`[0]} To Type Accept/Reject`
            this.suit[id] = {
            chat: await XeonBotInc.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) XeonBotInc.sendText(m.chat, `_Suit Time Out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break


case 'kis':
gambar = fs.readFileSync('./media/kis.jpg')
menu =
`*وه منور يا @${senderr.split('@')[0]}*
 
بس حبيت اقول انو نائب قديم اعطني منصبها بس 
شكرا للنائب حبيبي والله`
DogeXeonOP.sendMessage(from, { contentText: `${menu}`, footerText: `*_${tanggal} - ${time}_*`, buttons: [{ buttonId: `${prefix}الاثبات`, buttonText: { displayText: 'الاثبات 😔♥️' }, type: 1 },{ buttonId: `${prefix}developer`, buttonText: { displayText: '𝙼𝚄𝚉𝙰𝙽 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: fakeimage, contextInfo: {mentionedJid: [senderr]}}}, 'buttonsMessage')
break
case 'الاثبات':
case 'اكاي':
case 'الاستماره':

gambar = fs.readFileSync('./media/kis.jpg')
menunya = `*「 الاثبات 」*

هيهيههيهيهيهيهيهي`
but = [
{ buttonId: `${prefix}اوتوساكا`, buttonText: { displayText: '𝚂𝚃𝙰𝚁𝚃 ☘︎' }, type: 1 },
{ buttonId: `${prefix}muzan`, buttonText: { displayText: '𝐌𝐔𝐙𝐀𝐍 𝐋𝐎𝐕𝐄 𝐘𝐎𝐔 ♡︎' }, type: 1 }
]
sendButImage(from, menunya, `*_${tanggal} - ${time}_*`, gambar, but)
break

//══════════[ DOWNLOAD FEATURES ]══════════//
/*Help case ?
give credit too / add in at tqtq
--> Xeon*/

      case 'mediafire':
        if (args.length < 1) return reply('وين الرابط يعم? ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        reply(mess.wait)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader

Name : ${res[0].nama}
Size : ${res[0].size}
Link : ${res[0].link}

Please Choose Whether Document, Audio or Video Below`
        sendButMessage(from, result, `*كي نائب جديد*`, [
          {
            buttonId: `${prefix}fire ${teks}`,
            buttonText: {
              displayText: `🖨️ Document/Other`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}fire1 ${teks}`,
            buttonText: {
              displayText: `🖨️ Video`,
            },
            type: 1,
          },
          {
            buttonId: `${prefix}fire2 ${teks}`,
            buttonText: {
              displayText: `🖨️ Audio`,
            },
            type: 1,
          },
        ]);
        break;
              case 'fire':
        if (args.length < 1) return reply('وين الرابط يعم  ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `In process...`
        reply(result)
        sendFileFromUrl(res[0].link, document, { mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
        break
              case 'fire1':
        if (args.length < 1) return reply('وين الرابط يعم  ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `In process...`
        reply(result)
        sendFileFromUrl(res[0].link, video, { quoted: mek, mimetype: 'video/mp4', filename: res[0].output })
        break
              case 'fire2':
        if (args.length < 1) return reply('وين الرابط يعم  ')
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)
        teks = args.join(' ')
        res = await mediafireDl(teks)
        result = `Media Fire Downloader
  Wait for the Process of Sending Media......`
        reply(result)
        sendFileFromUrl(res[0].link, audio, { quoted: mek, mimetype: 'video/mp3', filename: res[0].output })
        break
case 'spotify':{
    if (args.length == 0) return reply(`Example: ${prefix + command} https://open.spotify.com/track/0ZEYRVISCaqz5yamWZWzaA`)
    url = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/spotify?apikey=${lolkey}&url=${url}`)
    get_result = get_result.result
    ini_txt = `لانك تقريبل : ${get_result.title}\n`
    ini_txt += `الهوية : ${get_result.artists}\n`
    ini_txt += `Duration : ${get_result.duration}\n`
    ini_txt += `Popularity : ${get_result.popularity}\n`
    ini_txt += `اافورز : ${get_result.preview_url}\n`
    thumbnail = await getBuffer(get_result.thumbnail)
    await DogeXeonOP.sendMessage(from, thumbnail, image, { quoted: mek, caption: ini_txt })
    get_audio = await getBuffer(get_result.link)
    await DogeXeonOP.sendMessage(from, get_audio, audio, { mimetype: 'audio/mpeg', filename: `${get_result.title}.mp3`, quoted: mek})
    }
    break
   case 'soundcloud':
                if(!q)return reply(`Example : ${prefix + command} sound cloud link`)
                if (!q.includes('m.soundcloud.com')) return reply('Thats not a SoundCloud link')
                await reply(lang.wait())
				zee.SoundCloud(`${q}`).then(async (data) => {
                    let txt = `*----「 SOUNDCLOUD DOWNLOAD 」----*\n\n`
                    txt += `*• Title :* ${data.title}\n`
                    txt += `*• Duration :* ${data.duration}\n`
					txt += `*• Quality :* ${data.medias[1].quality}\n`
					txt += `*• Ext :* ${data.medias[0].extension}\n`
                    txt += `*• Size :* ${data.medias[0].formattedSize}\n`
                    txt += `*• Url  :* ${data.url}\n\n`
                    txt += `*Please wait a moment, in the process of delivery...*`
                    sendFileFromUrl(from, data.thumbnail, txt, mek)
                    DogeXeonOP.sendMessage(from , await getBuffer(data.medias[0].url), audio,{ quoted: mek, mimetype: 'audio/mp4' })
				})
			break
	case 'telesticker': case 'telegramsticker': case 'tstiker': {
			if (!q) return reply(`Example: ${prefix + command} *https://t.me/addstickers/geestickerpack*`)
			if (!q.includes('t.me')) return reply('This is not a telegram sticker link')
			var telestc = await zee.Telesticker(`${q}`)
			await reply(mess.wait)
			for (let i = 0; i < (telestc.length < 10 ? telestc.length : 10); i++) {
			DogeXeonOP.sendMessage(from, await getBuffer(telestc[i].url), sticker, {mimetype:'image/webp',quoted: mek})
			}
		}
		break
case 'tiktoknowm':
   case 'tiktok':
			if (!q) return reply('The link?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
			let nowem = q
			zee.Ttdownloader(nowem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					noweem = await getBuffer(nowm)
					DogeXeonOP.sendMessage(from,noweem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Invalid link`))
			
             break 
case 'tiktokwm':
			if (!q) return reply('The link?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid link')
			reply(mess.wait)
			let wem = args.join(' ')
			zee.Ttdownloader(wem)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
				.then(async (a) => {
					me = `*Link* : ${a.data}`
					weem = await getBuffer(wm)
					DogeXeonOP.sendMessage(from,weem , MessageType.video, {mimetype: 'video/mp4',quoted: mek})
					})
				}).catch((err) => reply(`Invalid link`))
			
             break 
case 'tiktokmusic':
 case 'tiktokaudio':  
 case 'tiktokmp3':
			if (!q) return reply('The link?')
			if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply('Invalid Link')
			reply(mess.wait)
			let audi = q
			zee.Ttdownloader(audi)
			.then(result => {
				const { wm, nowm, audio } = result
				axios.get(`https://tinyurl.com/api-create.php?url=${audio}`)
				.then(async (a) => {
					audnha = await getBuffer(audio)
					DogeXeonOP.sendMessage(from,audnha , MessageType.document, {mimetype: 'audio/mp4',filename: `Tiktok Music.mp3`,quoted: mek})
					})
				}).catch((err) => reply(`Invalid link`))
			
             break
case 'ig':
case 'igdl':
case 'instagram':
if (!c) return reply('The link?')
var { igDownloader } = require('./lib/igdown')
   res = await igDownloader(`${c}`).catch(e => {
reply(mess.error.api)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
                    break
case 'lyrics':
reply(mess.wait)
if (args.length < 1) return reply('What is the name of the song?')
teks = body.slice(7)
lirikLagu(teks).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break
case 'herolist':
await herolist().then((ress) => {
let listt = `*List of heroes for features ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
res = await herodetails(body.slice(12))
her = `*Hero Details ${body.slice(12)}*

*Name* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Hero Features* : ${res.hero_feature}
*Special* : ${res.speciality}
*Recommended Lane* : ${res.laning_recommendation}
*Price* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Release* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
break
              case 'play':
if (args.length ==0)return reply('Whats the title of the song?')
bo = args.join(" ")
reply(mess.wait)
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=KingOfBear`)
thmb = await getBuffer(ini.thumb)
ply1 =`*Title:* ${ini.title}\n*Channel:* ${ini.channel}\n*View:* ${ini.views}\n*Publish Time:* ${ini.published}`
ply2 =`Please Select Media Below`
but = [
{ buttonId: `${prefix}mp3 ${args.join(" ")}`, buttonText: { displayText: 'MUSIC 🎵' }, type: 1 },
{ buttonId: `${prefix}mp4 ${args.join(" ")}`, buttonText: { displayText: 'VIDEO 📽️' }, type: 1 }
]
sendButLocation(from, ply1, ply2, thmb, but)
break
case 'mp4':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp4?query=${bo}&apikey=${KingOfBearKey}`)
mp4 = await getBuffer(ini.url)
DogeXeonOP.sendMessage(from, mp4, video, { quoted: mek, caption: `Here is your video🐶` })
break
case 'mp3':
reply(mess.wait)
bo = args.join(" ")
ini = await fetchJson(`https://apikey-bear3.herokuapp.com/api/yt/playmp3?query=${bo}&apikey=${KingOfBearKey}`)
mp3 = await getBuffer(ini.url)
DogeXeonOP.sendMessage(from, mp3, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
break
case 'ytmp3':

if (args.length < 1) return reply("وين الرابط يعم ")
url = args.join(' ')
anump3 = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp3?url=${url}&apikey=${dhakey}`)
ytmp3 = await getBuffer(anump3.result.url)
reply(`_Audio is being processed, please wait a while longer_`)
DogeXeonOP.sendMessage(from, ytmp3, audio, {mimetype:"audio/mp4", quoted:mek})
break
case 'ytmp4':

if (args.length < 1) return reply("وين الرابط يعم ")
url = args.join(' ')
anump4 = await fetchJson(`https://apidhani.herokuapp.com/api/download/ytmp4?url=${url}&apikey=${dhakey}`)
ytmp4 = await getBuffer(anump4.result.url)
reply(`_The video is being processed, please wait a few more moments_`)
DogeXeonOP.sendMessage(from, ytmp4, video, {caption:`Done✓`, thumbnail:Buffer.alloc(0), quoted:mek})
break

//══════════[ INTAKE FEATURES ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Xeon*/

case 'asupan':
case 'asupanloli':
case 'bocil':
case 'rikagusriani':
case 'santuy':
case 'ukhty':
case 'gheayubi':
case 'nantalia':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command} `
sendButVideo(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break
case 'hijaber':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/asupan/hijaber?apikey=${dhakey}`)
Teks = `Click Next To Go to Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break

//══════════[ RANDOM GIRL FEATURES ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Xeon*/

case 'cecan':
case 'cogan':
case 'cecan2':
case 'cogan2':
case 'jeni':
case 'jiso':
case 'justina':
case 'lisa':
case 'rose':
case 'ryujin':
case 'indonesia':
case 'vietnam':
case 'thailand':
case 'korea':
case 'china':
case 'japan':
case 'malaysia':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/cecan/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break

//══════════[ RANDOM TEXT ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Xeon*/

case 'pantun2':
case 'puisi':
case 'faktaunik':
case 'katabijak':
case 'katailham':
case 'katasindiran':
case 'katabucin':
case 'katabucin2':
case 'kataml':
case 'katagalau':
case 'katagombal':
case 'quotesislami':
case 'quotesanime':
case 'quotesdilan':
case 'quotesff':
case 'quotespubg':
case 'quoteshacker':

oke = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/${command}?apikey=${dhakey}`)
dhani = (oke.result)
sendButMessage(from, dhani, `Click To Go To Next ${command}`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},]);
break;
case 'quotes':

anuquotes = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes?apikey=${dhakey}`)
dhani = (anuquotes.result.quotes)
sendButMessage(from, dhani, `Click To Go To The Next Quotes`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},]);
break;
case 'quoteskanye':

anuq = await fetchJson(`https://apidhani.herokuapp.com/api/randomtext/quotes/kanye?apikey=${dhakey}`)
dhani = (anuq.result.text_id)
sendButMessage(from, dhani, `Click To Go To The Next Quotes`, [
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},]);
break;

//══════════[ RANDOM IMAGE FEATURES ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Xeon*/

                case 'بتس':
                case 'exo':
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhumanbykur}`).then((gambar) => {
                        DogeXeonOP.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                   case 'ثعلب':  
                   anufox= await fetchJson(`https://some-random-api.ml/img/fox`)
                   anu1 = await getBuffer(anufox.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `𝙼𝚄𝚉𝙰𝙽/𝙺𝙸/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 (•̀ᴗ•́)و`, quoted: mek})
                   break
case 'انمي':  
                   anufox= await fetchJson(`https://some-random-api.ml/img/anime`)
                   anu1 = await getBuffer(anufox.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `𝙼𝚄𝚉𝙰𝙽/𝙺𝙸/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 (•̀ᴗ•́)و`, quoted: mek})
                   break
                   case 'كلب':  
                   anudog = await fetchJson(`https://some-random-api.ml/img/dog`)
                   anu1 = await getBuffer(anudog.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `𝙼𝚄𝚉𝙰𝙽/𝙺𝙸/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 (•̀ᴗ•́)و`, quoted: mek})
                   break
                   case 'قطة':
                   anucat = await fetchJson(`https://some-random-api.ml/img/cat`)
                   anu1 = await getBuffer(anucat.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `𝙼𝚄𝚉𝙰𝙽/𝙺𝙸/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 (•̀ᴗ•́)و`, quoted: mek})
                   break
                   case 'باندا':  
                   anupanda = await fetchJson(`https://some-random-api.ml/img/panda`)
                   anu1 = await getBuffer(anupanda.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `𝙼𝚄𝚉𝙰𝙽/𝙺𝙸/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 (•̀ᴗ•́)و`, quoted: mek})
                   break
                   case 'باندا2':  
                   anupandao = await fetchJson(`https://some-random-api.ml/img/red_panda`)
                   anu1 = await getBuffer(anupandao.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `𝙼𝚄𝚉𝙰𝙽/𝙺𝙸/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 (•̀ᴗ•́)و`, quoted: mek})
                   break
                   case 'طائر': 
                   anubird = await fetchJson(`https://some-random-api.ml/img/birb`)
                   anu1 = await getBuffer(anubird.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `𝙼𝚄𝚉𝙰𝙽/𝙺𝙸/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 (•̀ᴗ•́)و`, quoted: mek})
                   break
                   case 'كولا':  
                   anukoala = await fetchJson(`https://some-random-api.ml/img/koala`)
                   anu1 = await getBuffer(anukoala.link)
                   DogeXeonOP.sendMessage(from, anu1, image, {caption: `𝙼𝚄𝚉𝙰𝙽/𝙺𝙸/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 (•̀ᴗ•́)و`, quoted: mek})
                   break
case 'ppcp':
case 'تطقيم':

anucpp = await fetchJson(`https://apidhani.herokuapp.com/api/text8/ppcouple?apikey=${dhakey}`)
cowo = await getBuffer(anucpp.result.male)
Cowok = `_This is the boy_`
sendButImage(from, Cowok, `*_${tanggal} - ${time}_*`, cowo, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
cewe = await getBuffer(anu.result.female)
Cewek = `_This is the girl_`
sendButImage(from, Cewek, `*_${tanggal} - ${time}_*`, cewe, [                      
{
buttonId: `${prefix + command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break
case 'مميز':

reply(mess.wait)
anumeme = await fetchJson(`https://apidhani.herokuapp.com/api/text8/meme?apikey=${dhakey}`)
buffer = await getBuffer(anumeme.result.url)
Teks = `Click Next To Go The Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break
case 'خ.هكر':
case 'خ.هكر2':
case 'wallpaperharley':
case 'خ.جوكر':
case 'خ.بابجي':
case 'wallpaperhp':
case 'wallpaperhp2':
case 'خ.كيبوب':
case 'wallpaperblackpink':
case 'خ.العاب':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/text8/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To The Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break
case 'quotesimage':
case 'katakataimage':
case 'renungan':
case 'memeindo':
case 'aesthetic':
case 'yulibocil':
case 'doraemon':
case 'بيكمون':
case 'pentol':
case 'tatasurya':
case 'kartun':
case 'anjing':
case 'kucing':
case 'satanic':
case 'boneka':
case 'mobil':
case 'motor':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/text8/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break
case 'darkjoker':
case 'darkjokes':
case 'darkjokesindo':
case 'darkjokers':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/text8/darkjokes?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break

//----> ANIME FEATURES <----//


                case 'elf':
                case 'loli2':
                case 'neko2':
                case 'waifu2':
                case 'shota2':
                case 'husbu2':
                case 'sagiri2':
                case 'shinobu':
                case 'megumin':
                case 'wallnime':
                                case 'art':
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=${Lolhumanbykur}`).then((gambar) => {
                        DogeXeonOP.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
case 'waifu':
case 'neko':
case 'naruto':
case 'loli':
case 'husbu':
case 'milf':
case 'cosplay':
case 'nekonime':
case 'shota':
case 'wallml':
case 'akira':
case 'akiyama':
case 'ana':
case 'asuna':
case 'ayuzawa':
case 'boruto':
case 'chiho':
case 'chitoge':
case 'deidara':
case 'eba':
case 'elaina':
case 'emilia':
case 'erza':
case 'gremory':
case 'hestia':
case 'hinata':
case 'isuzu':
case 'itachi':
case 'itori':
case 'kagura':
case 'kakasih':
case 'kaori':
case 'kaneki':
case 'kotori':
case 'kurumi':
case 'madara':
case 'mikasa':
case 'miku':
case 'minato':
case 'nezuko':
case 'rize':
case 'sagiri':
case 'sakura':
case 'sasuke':
case 'shina':
case 'shinka':
case 'shinomiya':
case 'shizuka':
case 'tejina':
case 'toukachan':
case 'tsunade':
case 'yotsuba':
case 'yuki':
case 'yumeko':
case 'fanart':
case 'nino':

buffer = await getBuffer(`https://apidhani.herokuapp.com/api/anime/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break
             case 'sao':
                reply(mess.wait)
				DogeXeonOP.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/swortartonline.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 swordartonline = await getBuffer(randKey.result)
                 DogeXeonOP.sendMessage(from, swordartonline, image, {quoted: mek, caption: 'swort art online\nDogeBot'})
				 break
				case 'hsdxd':
				reply(mess.wait)
				 DogeXeonOP.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/highschooldxd.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 highschooldxd = await getBuffer(randKey.result)
                 DogeXeonOP.sendMessage(from, highschooldxd, image, {quoted: mek, caption: 'Here u go!'})
				break
				 case 'lovelive':
				reply(mess.wait)
				 DogeXeonOP.updatePresence(from, Presence.composing) 
				 data = fs.readFileSync('./lib/lovelive.js');
                 jsonData = JSON.parse(data);
                 randIndex = Math.floor(Math.random() * jsonData.length);
                 randKey = jsonData[randIndex];
                 lovelive = await getBuffer(randKey.result)
                 DogeXeonOP.sendMessage(from, lovelive, image, {quoted: mek, caption: 'Here u go!'})
				break
				
//----> NSFW FEATURES <----//

case 'hentaisearch': case 'nhentai':{
	if (!isGroup) return reply('Bullshit! there is a child po*n\nIts better to just be in the group so that everyone will be sinned 😂')
if (!isNsfw) return reply(mess.only.nsfw)
    if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)
    henid = args[0]
    get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=${lolkey}`)
    get_result = get_result.result
    ini_txt = `Title Romaji : ${get_result.title_romaji}\n`
    ini_txt += `Title Native : ${get_result.title_native}\n`
    ini_txt += `Read Online : ${get_result.read}\n`
    get_info = get_result.info
    ini_txt += `Parodies : ${get_info.parodies}\n`
    ini_txt += `Character : ${get_info.characters.join(", ")}\n`
    ini_txt += `Tags : ${get_info.tags.join(", ")}\n`
    ini_txt += `Artist : ${get_info.artists}\n`
    ini_txt += `Group : ${get_info.groups}\n`
    ini_txt += `Languager : ${get_info.languages.join(", ")}\n`
    ini_txt += `Categories : ${get_info.categories}\n`
    ini_txt += `Pages : ${get_info.pages}\n`
    ini_txt += `Uploaded : ${get_info.uploaded}\n`
    reply(ini_txt)}
    break
case 'ass':
case 'ahegao':
case 'bdsm':
case 'blowjob':
case 'cuckold':
case 'cum':
case 'ero':
case 'femdom':
case 'foot':
case 'gangbang':
case 'glasses':
case 'hentai':
case 'jahy':
case 'masturbation':
case 'neko':
case 'orgy':
case 'panties':
case 'pussy':
case 'thighs':
case 'yuri':

if (!isGroup) return reply('Bullshit! there is a child po*n\nIts better to just be in the group so that everyone will be sinned 😂')
if (!isNsfw) return reply(mess.only.nsfw)
anu23 = await fetchJson(`https://apidhani.herokuapp.com/api/nsfw/${command}?apikey=${dhakey}`)
buffer = await getBuffer(anu23.result)
Teks = `Click Next To Go To Next ${command}`
sendButImage(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break
					case 'bokep':
					if (!isGroup) return reply('Bullshit! there is a child po*n\nIts better to just be in the group so that everyone will be sinned 😂')
if (!isNsfw) return reply(mess.only.nsfw)
reply(mess.wait)
get_result = await getBuffer(`${porn1}/api/bokep?apikey=RakuKeyTod`)
pll = `Here u go my friend! dont forget to masterbate, okay?😂`
sendButVideo(from, pll, `*كي نائب جديد*`, get_result, [      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
])            
break
                case 'chiisaihentai':
                case 'yaoi':
                case 'ecchi':
                case 'hololewd':
                case 'sideoppai':
                case 'animefeets':
                case 'animebooty':
                case 'animethighss':
                case 'hentaiparadise':
                case 'animearmpits':
                case 'hentaifemdom':
                case 'lewdanimegirls':
                case 'biganimetiddies':
                case 'animebellybutton':
                case 'hentai4everyone':
                if (!isGroup) return reply('Bullshit! there is a child po*n\nIts better to just be in the group so that everyone will be sinned 😂')
if (!isNsfw) return reply(mess.only.nsfw)
                reply(mess.wait)
                    await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=${Lolhuman}`).then((gambar) => {
                       DogeXeonOP.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break
                case 'bj':
                case 'feet':
                case 'trap':
                case 'lewd':
                case 'feed':
                case 'eron':
                case 'solo':
                case 'gasm':
                case 'poke':
                case 'anal':
                case 'holo':
                case 'tits':
                case 'kuni':
                case 'kiss':
                case 'erok':
                case 'smug':
                case 'baka':
                case 'solog':
                case 'feetg':
                case 'lewdk':
                case 'cuddle':
                case 'eroyuri':
                case 'cum_jpg':
                case 'erofeet':
                case 'holoero':
                case 'classic':
                case 'erokemo':
                case 'fox_girl':
                case 'futanari':
                case 'lewdkemo':
                case 'wallpaper':
                case 'pussy_jpg':
                case 'kemonomimi':
                case 'nsfw_avatar':
                if (!isGroup) return reply('Bullshit! there is a child po*n\nIts better to just be in the group so that everyone will be sinned 😂')
if (!isNsfw) return reply(mess.only.nsfw)
                reply(mess.wait)
                    getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=${Lolhumanbykur}`).then((gambar) => {
                        DogeXeonOP.sendMessage(from, gambar, image, { quoted: mek })
                    })
                    break

//══════════[ RANDOM VIDEO ]══════════//

case 'beatvn':
case 'jedagjedugff':
case 'jedagjedugml':
case 'jedagjedugpubg':
case 'استوري':
case 'storywa':
case 'storygalau':
case 'storytruk':
case 'storybus':

reply(mess.wait)
buffer = await getBuffer(`https://apidhani.herokuapp.com/api/randomvideo/${command}?apikey=${dhakey}`)
Teks = `Click Next To Go To Next ${command}`
sendButVideo(from, Teks, `*_${tanggal} - ${time}_*`, buffer, [                      
{
buttonId: `${prefix+command}`,
buttonText: {
displayText: `اللي بعدوو 🌚`,
},
type: 1,
},
]);
break

//══════════[ MAKER FEATURES ]══════════//
/*Help case ?
just give credit / add in tqtq
--> Xeon*/

//----> 1 TEXT <----//

                case 'goldplaybutton':          
                case 'silverplaybutton':          
                case 'freefire':          
                    if (args.length == 0) return reply(`Example: ${prefix + command} Xeon`)
                    ini_txt = args.join(" ")
                    getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=${lolkey}&text=${ini_txt}`).then((gambar) => {
                        DogeXeonOP.sendMessage(from, gambar, image, {thumbnail: Buffer.alloc(0), caption: `𝙼𝚄𝚉𝙰𝙽/𝙺𝙸/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 (•̀ᴗ•́)و`, quoted : mek}) 
                    })
                    break
case 'blackpink':
case 'halloween':
case 'halloween2':
case '3dgradient':
case 'naturalleaves':
case 'dropwater':
case 'blood':
case 'blood2':
case 'snow':
case 'cloud':
case 'neondevil':
case 'neon':
case 'glowingneonlight':
case 'neonlight':
case 'neonlight2':
case 'neonlight3':
case 'greenneon':
case 'toxic':
case 'matrix':
case 'thunder':
case 'thunder2':
case 'bokeh':
case 'carbontext':
case 'christmas':
case 'breakwall':
case 'roadwarning':
case 'engraved3d':
case 'embossed':
case '3dstone':
case 'futuristic':
case 'sketch':
case 'bluecircuit':
case 'space':
case 'magmahot':
case 'artpapercut':
case '3dluxurygold':
case 'robotr2d2':
case 'harrypotter':
case 'glitch3':
case 'greenhorror':
case 'horrorgift':
case 'hotmetal':
case 'erodedmetal':
case '3dglowingmetal':
case 'blackmetal':
case 'bluemetal':
case 'shynimetal':
case 'rustymetal':
case 'metalpurple':
case 'metalrainbow':
case 'metaldarkgold':
case 'colorfullluxurymetal':
case 'glossybluemetal':
case '3dglossymetal':
case 'metallic':
case 'glossymetallic':
case 'christmastree':
case 'sparklesmerrychristmas':
case 'countryflag3d':
case 'americanflag3d':
case '3dscfi':
case '3drainbow':
case '3dwaterpipe':
case '3dchrome':
case 'bluegem':
case 'purplegem':
case 'pinkcandy':
case 'transformer':
case 'berry':
case 'brokenglass':
case '3drealistic':
case '3dunderwater':
case 'writeinsandsummerbeach':
case 'sandwriting':
case 'foilballoon':
case '3dglue':
case '1917':
case 'minion':
case 'doubleexposure':
case 'holographic3d':
case 'deluxegold':
case 'deluxesilver':
case 'glossycarbon':
case 'fabric':
case 'xmascards3d':
case 'wicker':
case 'fireworksparkle':
case 'skeleton':
case 'ultragloss':
case 'denim':
case 'decorategreen':
case 'peridot':
case 'rock':
case 'lava':
case 'rainbowequalizer':
case 'purpleglass':
case 'decorativeglass':
case 'chocolatecake':
case 'strawberry':
case 'koifish':
case 'bread':
case '3dbox':
case 'freeadvancedglow':
case 'honey':
case 'marble':
case 'marbleslabs':
case 'icecold':
case 'fruitjuice':
case 'abstragold':
case 'biscuit':
case 'bagel':
case 'wood':
case 'hexagolden':
case '3ddeepseametal':
case 'leddisplayscreen':
case 'wonderfulgraffitiart':

if (args.length < 1) return reply(`*Where is the text?*\n_Example : ${prefix + command} your name_`) 
teks = args.join(" ")
reply(mess.wait)
anuapidhani = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/${command}?apikey=${dhakey}&text=${teks}`)
oke = await getBuffer(anuapidhani.result)
DogeXeonOP.sendMessage(from, oke, image, {quoted: mek, caption: 'Here u go!😛'})
break
case 'hartatahta': 

if (args.length < 1) return reply(`*Wher is the text?*\n_Example : ${prefix + command} your name_`) 
teks = args.join(" ")
reply(mess.wait)
harta = await getBuffer(`https://apidhani.herokuapp.com/api/maker/harta-tahta?apikey=${dhakey}&text=${teks}`)
DogeXeonOP.sendMessage(from, harta, image, {quoted: mek, caption: 'Here u go!😛'})
break

//----> 2 TEXT <----//

case '8bit':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anubit = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/8bit?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anubit.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'pornhub':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuphub = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/pornhub?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuphub.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'glitch':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuglitch = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuglitch.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'glitch2':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anug2 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/glitch2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anug2.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'layered':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anulayered = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/layered?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anulayered.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case '3dsteel':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anu3dstl = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/3dsteel?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anu3dstl.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'realistic':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anurlstc = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/realistic?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anurlstc.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'lionlogo':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anullo = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/lionlogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anullo.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'ninjalogo':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anunlogo = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/ninjalogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anunlogo.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'wolf':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuwolf = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuwolf.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'wolf2':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(6)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuw2 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/logowolf2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuw2.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'halloween3':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(11)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuh3 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/halloween3?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuh3.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'marvel':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anumvl = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anumvl.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'marvel2':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anumvl2 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/marvelstudio2?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anumvl2.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'cinematichorror':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(16)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anucmcr = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/cinematichorror?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anucmcr.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'avengers':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(8)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anuavgr = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/avengerslogo?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anuavgr.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'graffiti3':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(10)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anugrf3 = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/coolwallgraffiti?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anugrf3.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'captainamerica':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(15)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
anucaptainca = await fetchJson(`https://apidhani.herokuapp.com/api/textpro/captainamerica?apikey=${dhakey}&text1=${F1}&text2=${F2}`)
pornhub = await getBuffer(anucaptainca.result)
DogeXeonOP.sendMessage(from, pornhub, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'girlneko':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko = await getBuffer(`https://apidhani.herokuapp.com/api/maker/girlneko?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlneko, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'sadboy':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(7)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko2 = await getBuffer(`https://apidhani.herokuapp.com/api/maker/sadboy?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlneko2, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'makerkaneki':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(12)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko8383 = await getBuffer(`https://apidhani.herokuapp.com/api/maker/kaneki?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlneko8383, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'rem':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(4)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlneko11111 = await getBuffer(`https://apidhani.herokuapp.com/api/maker/rem?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlneko11111, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'lolimaker':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(9)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlnekojkjk = await getBuffer(`https://apidhani.herokuapp.com/api/maker/lolimaker?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlnekojkjk, image, {caption: `Here u go!😛`, quoted: mek})
break
case 'gura':

if (args.length < 1) return reply(`*Example : ${prefix + command} name1&name2*`)
var F = body.slice(5)
var F1 = F.split("&")[0];
var F2 = F.split("&")[1]; 
reply(mess.wait)
girlnekoooo = await getBuffer(`https://apidhani.herokuapp.com/api/maker/gura?apikey=${dhakey}&text=${F1}&text2=${F2}`)
DogeXeonOP.sendMessage(from, girlnekoooo, image, {caption: `Here u go!😛`, quoted: mek})
break
                         case 'wolf3':
                         
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(6)
                   reply(mess.wait)
                   anuwolf3 = await getBuffer(`${ApiZeks}/api/wolflogo?apikey=${zeksApikey}&text1=zeeoneofc&text2=${F}`)
                   DogeXeonOP.sendMessage(from, anuwolf3, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it?`, quoted: mek})
                   break
                          case 't3d':
                          
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(5)
                   reply(mess.wait)
                   anut3d = await getBuffer(`${ApiZeks}/api/text3dbox?apikey=${zeksApikey}&text=${F}`)
                   DogeXeonOP.sendMessage(from, anut3d, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'logoa':
       
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
                   var F = body.slice(7)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anulogoa = await getBuffer(`${ApiZeks}/api/logoaveng?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   DogeXeonOP.sendMessage(from, anulogoa, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'phlogo':  
       
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
                   var F = body.slice(9)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anuphlogo = await getBuffer(`${ApiZeks}/api/phlogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   DogeXeonOP.sendMessage(from, anuphlogo, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'marvel3':
       
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon&lol*`)
                   var F = body.slice(8)
				   var F1 = F.split("|")[0];
				   var F2 = F.split("|")[1]; 
                   reply(mess.wait)
                   anumrvl3 = await getBuffer(`${ApiZeks}/api/marvellogo?text1=${F1}&text2=${F2}&apikey=${zeksApikey}`)
                   DogeXeonOP.sendMessage(from, anumrvl3, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'leavest':  
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(9)
                   reply(mess.wait)
                   anulvst = await getBuffer(`${ApiZeks}/api/leavest?text=${F}&apikey=${zeksApikey}`)
                   DogeXeonOP.sendMessage(from, anulvst, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break                   
       case 'notewrite':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anunw = await getBuffer(`${ApiZeks}/api/nulis?text=${F}&apikey=${zeksApikey}`)
                   DogeXeonOP.sendMessage(from, anunw, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break
       case 'neon2':
                   if (args.length < 1) return reply(`[  ×  ] Example :\n*${prefix}${command} Xeon*`)
                   F = body.slice(7)
                   reply(mess.wait)
                   anunion2 = await getBuffer(`${ApiZeks}/api/bneon?apikey=${zeksApikey}&text=${F}`)
                   DogeXeonOP.sendMessage(from, anunion2, image, {thumbnail: Buffer.alloc(0),caption: `OK it's done\n\nHow is it? `, quoted: mek})
                   break 

//══════════[ OTHER FEATURES ]══════════//
case 'muzan':

members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${muzanname}\n`
+ `ORG: 𝙼𝚞𝚣𝚊𝚗 𝚂𝚊𝚖𝚊 ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${muzan}:${muzan}\n`
+ 'END:VCARD'.trim()
DogeXeonOP.sendMessage(from, {displayName: `The muzan ${botname}`, vcard: vcard2}, contact, 
{ quoted: fgi, 
})
reply(`_𝙷𝙸 𝙻𝚘𝚟𝚎 𝚢𝚘𝚞_`)
break
case 'developer':

members_ids = []
for (let mem of groupMembers) {
members_ids.push(mem.jid)
}
vcard2 = 'BEGIN:VCARD\n'
+ 'VERSION:3.0\n'
+ `FN:${developerName}\n`
+ `ORG:𝙼𝚞𝚣𝚊𝚗 𝙻𝚘𝚟𝚎 𝚈𝚘𝚞 ;\n`
+ `TEL;type=CELL;type=VOICE;waid=${developerNo}:${developerNo}\n`
+ 'END:VCARD'.trim()
DogeXeonOP.sendMessage(from, {displayName: `The muzan ${botname}`, vcard: vcard2}, contact, 
{ quoted: fgi, 
})
const devsound = fs.readFileSync('./media/botdev.mp3')
DogeXeonOP.sendMessage(from, devsound, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
break
case 'sc':
case 'script':
case 'sourcode':

scpic = fs.readFileSync('./media/scpic.jpg')
scsell = `*بوت خاص ب كي ساما*_`
but = [
{ buttonId: `${prefix}kis`, buttonText: { displayText: 'كي نائب جديد' }, type: 1 },
{ buttonId: `${prefix}developer`, buttonText: { displayText: '𝙼𝚄𝚉𝙰𝙽 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄' }, type: 1 }
]
sendButImage(from, scsell, `*_${tanggal} - ${time}_*`, scpic, but)
break
case 'وقت التشغيل':

textImg(`Bot Active Since ${runtime(process.uptime())}`)
break
case 'ping':
case 'السرعة':

timestampe = speed();
latensie = speed() - timestampe
textImg(`「 *𝗦𝗣𝗘𝗘𝗗 𝗧𝗘𝗦𝗧* 」\nRespond in ${latensie.toFixed(4)} Sec 💬`)
break
case 'd':
case 'del':
case 'delete':

DogeXeonOP.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break

 //══════════[ SEARCH FEATURES ]══════════//

    case 'playstore':
            if(!c) return reply('what are you looking for?')
            let play = await hx.playstore(`${c}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY lSTORE* 」*\n
- *Name* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Dev Link* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
case 'ytsearch':
          if (args.length < 1) return reply('Yang mau di cari apaan?')
          teks = args.join(' ')
          reply(mess.wait)
          res = await yts(`${teks}`)
          kant = ``
          for (let i of res.videos) {
          kant += (`❒「  YtSearch  」\n• Title : ${i.title}\n• Views : ${i.views}\n• Uploaded On : ${i.ago}\n• Duration : ${i.timestamp}\n• Channel : ${i.author.name}\n• Video Link : ${i.url}\n\n\n`)
          }
          var akhir = kant.trim()
          sendFileFromUrl(res.all[0].image, image, {quoted: mek, caption: akhir})
          break
case 'pinterest':
if (!c) return reply('what are you looking for?')
pinterest(`${c}`).then( data => {
const amsulah = data.result
const pimterest = amsulah[Math.floor(Math.random() * amsulah.length)]
sendMediaURL (from ,pimterest , `Pinterest : ${c}`)
})
break
case 'google':
case 'googlesearch':
case 'ggs':
if (args.length < 1) return reply('What are you looking for??')
teks = args.join(' ')
reply(mess.wait)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Title* : ${i.title}
*Link* : ${i.link}
*Description* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
break
case 'gimage':
case 'googleimage':
case 'googleimg':
if (args.length < 1) return reply('What do you want to search?')
reply(mess.wait)
teks = args.join(' ')
res = await googleImage(teks, google)
function google(error, result){
if (error){ return reply('_[ ! ] Api Error Or Result Not Found_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Search Result :* ${teks}`})
}
}
break

 //══════════[ APK FEATURES ]══════════//

case 'uapkpro':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/uapkpro?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the steamkpro.org platform and provide the result data 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      case 'toraccino':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/toraccino?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Searching for Applications through the website and sending a data which is the result of the search! 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `Upload : ${x.apps_upload}\n`
          ini_txt += `Author : ${x.apps_author}\n`
          ini_txt += `Desc : ${x.apps_desc}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      case 'revdl':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/revdl?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Searching for Applications through the website and sending a data which is the result of the search! 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      case 'hostapk':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/hostapk?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the hostapk.com website and provide data from the search results 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Released : ${x.apps_released}\n`
          ini_txt += `Author : ${x.apps_author}\n`
          ini_txt += `Desc : ${x.apps_desc}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
      case 'apkshub':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkshub?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the apkshub.com platform and provide the result data 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Views :${x.apps_views}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
case 'apkmody':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkmody?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the apkmody.io platform and provide the result data 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Desc :${x.apps_desc}\n`
          ini_txt += `Link : ${x.apps_linkdl}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
case 'apkgoogle':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkgoogle?apps=${query}&page=1&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the apkgoogle.org platform and provide the result data 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Tag : ${x.apps_tag}\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break
              case 'apkdone':
        if (args.length == 0) return reply(`Example: ${prefix + command} Bgmi`)
        query = args.join(' ')
        get_result = await fetchJson(`https://dhn-api.herokuapp.com/api/apk/apkdone?apps=${query}&apikey=cabd55849002ea851ce8`, { method: 'get' })
        kontol = get_result.result
        ini_txt = '「 Search for applications on the apkdone.com website and provide data from the search results 」\n\n'
        for (var x of kontol) {
          ini_txt += `Name : ${x.apps_name}\n`
          ini_txt += `Link :${x.apps_linkdl}\n`
          ini_txt += `Version : ${x.apps_version}\n`
          ini_txt += `Rate : ${x.apps_rate}\n`
          ini_txt += `Tag : ${x.apps_tag}\n\n`
          ini_txt += `\n`
        }
        reply(ini_txt)
        break

 //══════════[ SOUND FEATURES ]══════════//
case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
ini_buffer = await getBuffer(`https://github.com/saipulanuar/Api-Github/raw/main/sound/${command}.mp3`)
await DogeXeonOP.sendMessage(from, ini_buffer, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})
break
       
//══════════[ OCR FEATURES ]══════════//

case 'ninjaname':  
if (args.length < 1) return reply(`[❗] Example :\n*${prefix}${command} Naruto*`)  
F = body.slice(11)
anunname = await fetchJson(`https://docs-jojo.herokuapp.com/api/ninja_name?name=${F}`)
anu189 = `🐶 *NAME* : ${anunname.your_name}\n`
anu000 = `🐶 *NINJA* : ${anu189.result}\n`
reply(anu000)
break
case 'stylishcoolname':
anuscn = await fetchJson(`https://leyscoders-api.herokuapp.com/api/nick-epep?apikey=${Leyscoders}`)
reply(`*🐶HERE IS YOUR RANDOM STYLISH NAME🐶*\n\n${anuscn.result}`)
break
case 'ssweb':
case 'ss':
if (args.length < 1) return reply('Where is the url?')
teks = q
anussweb = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${teks}`)
buff = await getBuffer(anussweb.screenshot)
DogeXeonOP.sendMessage(from, buff, image, {quoted: mek, caption : teks})
break

//══════════[ CONVERT FEATURES ]══════════//

      case 'squirrel':
        encmedia012 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia012)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -af atempo=1/2,asetrate=44500*2/1 ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          DogeXeonOP.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
          fs.unlinkSync(ran)
        })
        break
      case 'blub':
        if (!isQuotedAudio) return reply('Reply audio ')
        encmediakekek = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await DogeXeonOP.downloadAndSaveMediaMessage(encmediakekek)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=0.9,asetrate=95100" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          DogeXeonOP.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
          fs.unlinkSync(ran)
        })
        break
      case 'ghost':
        encmedia777 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia777)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          hah = fs.readFileSync(ran)
          DogeXeonOP.sendMessage(from, hah, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
          fs.unlinkSync(ran)
        })
        break
      case 'cutesound':
        encmedia100 = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
        media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia100)
        ran = getRandom('.mp3')
        exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
          fs.unlinkSync(media)
          if (err) return reply('Error!')
          riu = fs.readFileSync(ran)
          DogeXeonOP.sendMessage(from, riu, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
          fs.unlinkSync(ran)
        })
        break
case 'slowmo': case 'slow':{
								try {
										encmedia22 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia22)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											uhh = fs.readFileSync(ran)
											DogeXeonOP.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
											}
									break
case 'fast':{
									try {
										encmedia11 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
										media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia11)
										ran = getRandom('.mp3')
										exec(`ffmpeg -i ${media} -filter:a "atempo=1.3,asetrate=43000" ${ran}`, (err, stderr, stdout) => {
											fs.unlinkSync(media)
											if (err) return reply('Error!')
											hah = fs.readFileSync(ran)
											DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
											fs.unlinkSync(ran)
											})
											} catch (e) {
												reply('Error!')
												}  
										}
									break
case 'vibra': case 'vibrato':{
									encmedia33 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
									media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia33)
									ran = getRandom('.mp3')
									exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=16" ${ran}`, (err, stderr, stdout) => {
										fs.unlinkSync(media)
										if (err) return reply('Error!')
										hah = fs.readFileSync(ran)
										DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
										fs.unlinkSync(ran)
										})
										}
									break
    case 'nightcore':            
      	  if (!isQuotedAudio) return reply('Reply Audionya')
		  night = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
		  core = await DogeXeonOP.downloadAndSaveMediaMessage(night)
		  ran = getRandom('.mp3')
		  reply(mess.wait)
		  exec(`ffmpeg -i ${core} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
		  fs.unlinkSync(core)
		  if (err) return reply('Error!')
		  hah = fs.readFileSync(ran)
		  DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:false, quoted: mek, ptt: true})
		  fs.unlinkSync(ran)
		  })
	      break
 case 'vnsec':
encmediam = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediam = await DogeXeonOP.downloadAndSaveMediaMessage(encmediam)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(mediam)
						DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
						fs.unlinkSync(mediam)
				break
				case 'vidsec':
				encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					median = await DogeXeonOP.downloadAndSaveMediaMessage(encmedian)
					cokmatane = Number(args[0])
					hah = fs.readFileSync(median)
						DogeXeonOP.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
						fs.unlinkSync(median)
				break
 case 'robot':
encmedial = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
medial = await DogeXeonOP.downloadAndSaveMediaMessage(encmedial)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${medial} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(medial)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
break
case 'fat':
					encmediaz = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediaz = await DogeXeonOP.downloadAndSaveMediaMessage(encmediaz)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediaz} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediaz)
						if (err) return ephe('Error!')
						hah = fs.readFileSync(ran)
					DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
					break
case 'reverse':
	encmediau = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	mediau = await DogeXeonOP.downloadAndSaveMediaMessage(encmediau)
	ran = getRandom('.mp3')
	exec(`ffmpeg -i ${mediau} -filter_complex "areverse" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(mediau)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
fs.unlinkSync(ran)
	})
break
case 'bass':                 
					encmediao = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					mediao = await DogeXeonOP.downloadAndSaveMediaMessage(encmediao)
					ran = getRandom('.mp3')
					exec(`ffmpeg -i ${mediao} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
						fs.unlinkSync(mediao)
						if (err) return reply('Error!')
						hah = fs.readFileSync(ran)
						DogeXeonOP.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt: true, duration: 359996400, quoted:mek})
						fs.unlinkSync(ran)
					})
				break
 case 'tomp3':
					DogeXeonOP.updatePresence(from, Presence.composing)
					if (!isQuotedVideo) return reply('Reply to the video')
					reply(mess.wait)
					encmediad = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					mediad = await DogeXeonOP.downloadAndSaveMediaMessage(encmediad)
					ran = getRandom('.mp4')
					exec(`ffmpeg -i ${mediad} ${ran}`, (err) => {
						fs.unlinkSync(mediad)
						if (err) return reply(mess.error.api)
						mhee = fs.readFileSync(ran)
						DogeXeonOP.sendMessage(from, mhee, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek })
						fs.unlinkSync(ran)
					})
					break
 case 'toimg':

if (!isQuotedSticker) return reply('reply sticker')
encmediatoimg = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await DogeXeonOP.downloadAndSaveMediaMessage(encmediatoimg)
ran = getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Failed, when converting sticker to image')
buffer = fs.readFileSync(ran)
DogeXeonOP.sendMessage(from, buffer, image, {quoted: mek, caption: 'Here'})
fs.unlinkSync(ran)
})
break
case 'tts':
					  try{
        if (args.length > 1) {
        const gtts = require('./lib/gtts')(args[0])
        if (args.length < 2) return DogeXeonOP.sendMessage(from, 'Where is the text bro??', text, {quoted: mek})
        ngab = budy.slice(7)
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        ngab.length > 600
        ? reply('The text is too much bro, max words 600')
        : gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply('Failed bro:(')
                DogeXeonOP.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	} else if ( args.length === 1 ){
		ngab = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
		const gtts = require('./lib/gtts')(args[0])
        ranm = getRandom('.mp3')
        rano = getRandom('.ogg')
        gtts.save(ranm, ngab, function() {
            exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
                fs.unlinkSync(ranm)
                buff = fs.readFileSync(rano)
                if (err) return reply(mess.error.api)
                DogeXeonOP.sendMessage(from, buff, audio, {quoted:mek,ptt:true})
                fs.unlinkSync(rano)
            })
        })
	}
} catch (e){
	reply(mess.error.api)
}
break
                    case 'tourl':
    if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
            boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
            owgi = await DogeXeonOP.downloadMediaMessage(boij)
            res = await upload(owgi)
            reply(res)
            } else {
            reply('send/reply pictures/videos')
            }
            break

//══════════[ LEVELING FEATURES ]══════════//

	case 'مستوي':
					if (!isGroup) return reply(mess.group)
					const userLevel = getLevelingLevel(sender)
					const userXp = getLevelingXp(sender)
					if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
					const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
					resul = `◪ *مستواك*\n  ├─ ► منشنك : ${pushname}\n  ├─ ► التصنيف : ${role}\n  ├─ ► اكس بي : ${userXp}/${requiredXp}\n  └─ ► المستوي : ${userLevel}\n`
					DogeXeonOP.sendMessage(from, resul, text, { quoted: mek})
					.catch(async (err) => {
					console.error(err)
					await reply(`Error!\n${err}`)
					})
					break
					case 'بروفايل':
					if (!isGroup) return reply(mess.group)
				    let anuprofileoke = await DogeXeonOP.groupMetadata(from)
                    const thu = await DogeXeonOP.getStatus(anuprofileoke.participants[0], MessageType.text)
    				DogeXeonOP.updatePresence(from, Presence.composing)
    				try {
					ppimg = await DogeXeonOP.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
					} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
					}
					profile = `╭─「 *💖بروفايل القمر 💖* 」\n│• لقبك : ${pushname}\n│• رقمك : ${sender.split("@")[0]}\n│• البايو : ${bio_user}\n│• اكس بي : ${getLevelingXp(sender)}\n│• المستوي : ${getLevelingLevel(sender)}\n│• التصنيف : ${role}\n│• رابطك ♥️ : wa.me/${sender.split("@")[0]}\n╰──────────────────`
					buffer = await getBuffer(ppimg)
					DogeXeonOP.sendMessage(from, buffer, image, {quoted: mek, caption: profile})
					break

//══════════[ STICKER FEATURES ]══════════//

case 'ttp4':  
				case 'ttp2':  
				case 'ttp3':  
				case 'ttp':  
				case 'attp':
            
					if (!c) return reply(`Where is the text bro?\nExample :\n${prefix}attp DogeBot`)
					atetepe12 = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${lolkey}&text=${encodeURIComponent(c)}`)
					DogeXeonOP.sendMessage(from, atetepe12, sticker, { quoted: mek })
					break
case 'ص.مميز': case 'memegen':{
									if (args.length < 1) return reply(`Reply to sticker with up and down text for example *${prefix + command}* top text|bottom text`)
									if (!q.includes('|')) return reply(`Send orders *${prefix + command}* top text|bottom text`)
									try {
										if (!isQuotedImage) return reply(`Reply To An Image!`)
										reply(mess.wait)
										var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
										var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
										var enmediaokekek = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
									   var mediiia = await DogeXeonOP.downloadMediaMessage(enmediaokekek)
										var njay = await uploadImages(mediiia)
										var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay}`)
										DogeXeonOP.sendMessage(from, resu, image, {caption:'.stikerin bang', thumbnail: Buffer.alloc(0), quoted: mek})
										fs.unlinkSync(mediiia)
										} catch (e) {
											reply(mess.eror)
											console.log(e)
										}
										}
									break
 	case 'م.م': case 'memesticker': case 'memestick': case 'stickmeme': case 'stcmeme': case 'smeme':{
						if (args.length < 1) return reply(`Send orders *${prefix + command}* DogeBot`)
									if (q.includes('|')) return reply(`Reply to an image with a caption, For Example *${prefix + command}* Xeon`)
									try {
										if (!isQuotedImage) return reply(`Reply to an image!`)
										reply(mess.wait)
										var teks2 = args.join(' ')
										var enmedialel = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
										var mediia = await DogeXeonOP.downloadMediaMessage(enmedialel)
										var njay = await uploadImages(mediia)
										var resu = `https://api.memegen.link/images/custom/-/${teks2}.png?background=${njay}`
										sendStickerFromUrl(from,`${resu}`)	
										} catch (e) {
											reply(mess.eror)
											console.log(e)
										}
										}
									break
case 'اخذا':
case 'خذ':
					case 'اخذ':
						if (!isQuotedSticker) return reply(`Reply sticker with caption *${prefix}takestick name|author*`)
						ppp = `${args.join(' ')}`
						const encmediaoo1 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
						const media2 = await DogeXeonOP.downloadAndSaveMediaMessage(encmediaoo1, `./sticker/${sender}`)
						const packname = ppp.split('|')[0]
						const author = ppp.split('|')[1]
						exif.create(packname, author, `takestick_${sender}`)
						exec(`webpmux -set exif ./sticker/takestick_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
							if (error) return reply(mess.error.api)
							DogeXeonOP.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
							fs.unlinkSync(media2)
							fs.unlinkSync(`./sticker/takestick_${sender}.exif`)
						})
						break
case 'م.سرقة':
					case 'swm':
						if (isMedia && !mek.message.videoMessage || isQuotedImage) {
							ppp = `${args.join(' ')}`
							const encmedia9191 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedia9191, `./sticker/${sender}`)
							const packname1 = ppp.split('|')[0]
							const author1 = ppp.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							await ffmpeg(`${media}`)
									.input(media)
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											DogeXeonOP.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: mek})
											fs.unlinkSync(media)	
											fs.unlinkSync(`./sticker/${sender}.webp`)	
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else if ((isMedia && mek.message.videoMessage.fileLength < 10000000 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {
							wmsti = body.slice(11)
							if (!wmsti.includes('|')) return reply(`Send a picture or reply to an image with a caption *${prefix}stickerwm nama|author*`)
							const encmediaokekak = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
							const media = await DogeXeonOP.downloadAndSaveMediaMessage(encmediaokekak, `./sticker/${sender}`)
							const packname1 = wmsti.split('|')[0]
							const author1 = wmsti.split('|')[1]
							exif.create(packname1, author1, `stickwm_${sender}`)
							sticWait(from)
								await ffmpeg(`${media}`)
									.inputFormat(media.split('.')[4])
									.on('start', function (cmd) {
										console.log(`Started : ${cmd}`)
									})
									.on('error', function (err) {
										console.log(`Error : ${err}`)
										fs.unlinkSync(media)
										tipe = media.endsWith('.mp4') ? 'video' : 'gif'
										reply(mess.error.api)
									})
									.on('end', function () {
										console.log('Finish')
										exec(`webpmux -set exif ./sticker/stickwm_${sender}.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {
											if (error) return reply(mess.error.api)
											DogeXeonOP.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: ftex})
											fs.unlinkSync(media)
											fs.unlinkSync(`./sticker/${sender}.webp`)
											fs.unlinkSync(`./sticker/stickwm_${sender}.exif`)
										})
									})
									.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
									.toFormat('webp')
									.save(`./sticker/${sender}.webp`)
						} else {
							reply(`Send picture/video with caption ${prefix}stickerwm name|author or image/video tags that have been sent\nNote : Maximum video duration is 10 seconds`)
						}
						break
case 'م.ايموجي':
			if (args === 0) return reply('Where is the emoji?')   
		   aku4 = args.join(' ')
           emoji.get(`${aku4}`).then(emoji => {
           link = `${emoji.images[10].url}`
		   sendWebp(from, `${link}`).catch(() => reply('fail'))
           })
    	   break
case 'gifstiker':
case 's':
case 'stickergif':  
case 'ملصق':
case 'stiker':

if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedialoli = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedialoli)
ran = '666.webp'
await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
reply('error')
})
.on('end', function () {
console.log('Finish')
DogeXeonOP.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedialoli22 = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
const media = await DogeXeonOP.downloadAndSaveMediaMessage(encmedialoli22)
ran = '999.webp'
reply(mess.wait)
await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)
})
.on('end', function () {
console.log('Finish')
DogeXeonOP.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
.addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Send a picture with a caption ${prefix}sticker\nVideo Sticker Duration 1-9 Seconds`)
}
break
case 'stcmemepic': case 'stickermemepic':

if (args.length < 1) return reply(`Send orders *${prefix + command}* top text|bottom text`)
if (!q.includes('|')) return reply(`Send orders *${prefix + command}* top text|bottom text`)
try {
if (!isQuotedImage && !isQuotedSticker) return reply(`REPLY PICTURE OR STICKER!!`)
reply(mess.wait)
var teks1 = q.split('|')[0] ? q.split('|')[0] : ''
var teks2 = q.split('|')[1] ? q.split('|')[1] : ''
var imgbb = require('imgbb-uploader')
var enmediahe1 = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var media = await DogeXeonOP.downloadAndSaveMediaMessage(enmediahe1)
var njay = await imgbb('520bd6f6209077d1777c2a4f20c509c2', media)
var resu = await getBuffer(`https://api.memegen.link/images/custom/${teks1}/${teks2}.png?background=${njay.display_url}`)
DogeXeonOP.sendMessage(from, resu, image, {quoted: mek})
fs.unlinkSync(media)
} catch (e) {
return reply(`${e}`)
console.log(e)
}
break

//══════════[ FUN FEATURES ]══════════//
case 'تقيم':
				case 'نسبة':
case 'يكرهني':
case 'ولد' :
case 'بنت': 
case 'مرجالة' :
case 'كيوت' :
case 'مسكين' :
case 'مظلوم' :
case 'خروف':
case 'سيمب' :
case 'يحبني':
					rate = body.slice(1)
					const ra =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const te = ra[Math.floor(Math.random() * ra.length)]
					DogeXeonOP.sendMessage(from, 'نسبة 😘 : '+ te+'%', text, { quoted: mek})
					break
                case 'يقدر':
					bisakah = body.slice(1)
					const bisa =['اوماللل', 'يعم اتنيل هو يقدر يعمل حاجة', 'انت بتقول ايه 😂','اوحا','ليه بتسال سوال عجيب ليه انا عملت ايه 😂🙂','انت متاكد من سوال']
					const keh = bisa[Math.floor(Math.random() * bisa.length)]
					DogeXeonOP.sendMessage(from, 'مفروض ردي : '+ keh, text, { quoted: mek })
					break
				case 'امتي':
					kapankah = body.slice(1)
					const kapan =['بكرا😔','بعدبكرا😘','عن قريب😉','4 ايام كدا 🥸','5 ايام كدا 🥸','6 ايام كدا 🥸','1 اسبوع كمان 🌚','اسبوعين 😔♥️','3 اسبايع كمان 🌚','1 شهر كدا 😔😂','شهرين','3 شهور كدا 😔😂','4 شهور كدا 😔😂','5 شهور كدا 😔😂','6 شهور كدا 😔😂 Again']
					const koh = kapan[Math.floor(Math.random() * kapan.length)]
					DogeXeonOP.sendMessage(from, 'اللي هو ان شاء الله : '+ koh, text, { quoted: mek })
					break
         			  case 'هل':
					apakah = body.slice(1)
					const apa =['بالتاكيد','لا يعم','هممم يمكن','لو هعرف هقولك','اسال فرخة','انت بتقول ايه']
					const kah = apa[Math.floor(Math.random() * apa.length)]
					DogeXeonOP.sendMessage(from, 'Question : *'+apakah+'*\n\nAnswer : '+ kah, text, { quoted: mek })
					break
case 'غبي':
      case 'ذكي':
      case 'نشيط':
      case 'كسول':
      case 'سيمب':
      case 'يحبك':
      case 'وفي':
      case 'مرجالة':
      case 'طفل':
      case 'وسيم':
      case 'متخزوق':
      case 'اسطورة':
      case 'نوب':
      case 'كيوت':
      case 'عطوف':
      case 'هوت':
      case 'قبيح':
      case 'لعوب':
      case 'محترم':
      case 'بيفهم':
      case 'غلبان':
      case 'معرق':
      case 'ناعم':
      case 'بنوته':
      case 'عسل':
      case 'نثن':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nigga':
      case 'sexy':
      case 'hot':
      if (!isGroup) return reply(mess.only.group)
        membr = []
        const pff = groupMembers
        const go = groupMembers
        const goo = pff[Math.floor(Math.random() * pff.length)]
        const oe = go[Math.floor(Math.random() * go.length)]
        teks = `*اكترا شخص  ${command} هنا:* @${goo.jid.split('@')[0]}`
        membr.push(goo.jid)
        mentions(teks, membr, true, { quoted: mek })
        break
                     case "تشبيك":
					jds = []
					const jdii = groupMembers
					const koss = groupMembers
					const akuu = jdii[Math.floor(Math.random() * jdii.length)]
					const diaa = koss[Math.floor(Math.random() * koss.length)]
					teks = `اوع حالة حب هنا خطيرة 😂😔 @${akuu.jid.split('@')[0]} ♥️👀 اوببببب @${diaa.jid.split('@')[0]} `
					jds.push(akuu.jid)
					jds.push(diaa.jid)
					mentions(teks, jds, true)
					break
					                        case 'uglycheck':
					// source code by xeon⛔
                  sange = body.slice(1)
					const sang =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const nge = sang[Math.floor(Math.random() * sang.length)]
					DogeXeonOP.sendMessage(from, 'Question : *'+sange+'*\n\nAnswer: '+ nge+'%', text, { quoted: mek })
					break
                case 'الحب':
					// source code by xeon⛔
                  gayy = body.slice(1)
					const gay =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const yag = gay[Math.floor(Math.random() * gay.length)]
					DogeXeonOP.sendMessage(from, 'شوف بيحبك بنسبة كم شوف 🌞 : '+ yag+'%', text, { quoted: mek })
					break
                case 'الخيانة':
                case 'lesbiaيززسncheck':
					// source code by xeon⛔
                  lesbii = body.slice(1)
					const lesbi =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const bi = lesbi[Math.floor(Math.random() * lesbi.length)]
					DogeXeonOP.sendMessage(from, 'هو /هي بتخونك و انت/ي سكتها حصلخير شوف نسبة  : '+ bi+'%', text, { quoted: mek })
					break
                case 'جمال':
					// source code by xeon⛔
ganteng = body.slice(1)
					const gan =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const teng = gan[Math.floor(Math.random() * gan.length)]
					DogeXeonOP.sendMessage(from, 'Question : *'+ganteng+'*\n\nAnswer : '+ teng+'%', text, { quoted: mek })
					break
		case 'كم':
					// source code by xeon⛔
cantik = body.slice(1)
					const can =['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const tik = can[Math.floor(Math.random() * can.length)]
					DogeXeonOP.sendMessage(from, 'العدد يعم اهو  : '+ tik+' 😔', text, { quoted: mek })
					break
		case 'شخصية':
					// source code by xeon⛔
watak = body.slice(1)
					const wa =['اللي بيتفرج ع ...','العبقري اللي فينا','الاجنبي اللي بيرتم انجليزي كل يوم','المتاخد 🌞 اللي هو تكاين يوسخ','منعرفش له حاجة ده 🌞','ها ماشي حالو ','بتاع بنات و سيمب و بتخزوق','اوو عمنا ابو قلب كبير ♥️','احم بلاش افضح','UwU','الكريزما في اي مكان ','المساعد الاول في الجروب']
					const tak = wa[Math.floor(Math.random() * wa.length)]
					DogeXeonOP.sendMessage(from, 'الكائن 🌚 : '+ tak, text, { quoted: mek })
				        break
				
//══════════[ GAME FEATURES ]══════════//
       case 'تحدي':
              const dare =[
"تناول ملعقتين كبيرتين من الشطة بدون أي أطباق جانبية",
    "صور خلفية الشاشة الان",
    "كلم الكراش او الاكس و هات سكرين",  
    "اسقاط هاتف في كل مره تقول ( انا ).",
    "ادخل ل كل ناس في الخاص قول ازيكم انا هبقي اول مليونير",
    "كلم الاكس قول مشتقلك",
    "غني اخر اغنية سمعتها فويس",
    "روح ل الكراش /الاكس قول هاي (اسمك) بدي اتصال لاني مشتقلك جددداااا🥺👉🏼👈🏼",
	"روح ل باب بيتك و دق باب لين شخص يفتح لك من عيلتك",
    "اخبر شخص عشوائي لا تعرفها انك توأهم و تم فصلكم عن بعض و تم عمل عملية جراحية لنا و انا مشتقلك يا توأمي",
    "أكتب لقب الاكس",
    "اعمل اعادة تسيمة ل جهة اتصال عشوائي عن طريق منشن عشوائي!",
    "هات سكرين للجروبات الشات من برا",
    "كلم شخص عشوائي بروسي و هات سكرين",
    "تروح تقول ل امك بحبك",
    "منشن شخص بتكرهوا",
    "غير منشنك ل كي نائب جديد لمدة 24 ساعة",
    "روح ل نص بيتك قول انا بحب بحب الانمي انا بحب بحب الانمي",
    "هات اخر سناب او بوست ل كراش/الاكس",
    "قولي مسجل حبيبتك ايه!",
    "قول ل حبيبتك عندي كراش و ابي اخد منها بوسة و لو صار الاوامر خرا خذ ذا سكرين قولها البوت بيسلم عليك",
    "سجل صوت و انت بتقول اوني تشان 🌚ومنشن المطور عليها",
    "اكتب في شات الاكس او الكراش *i love u, please come back.* من غير انك تقول انو تحدي !",
    "ادختار منشن عشوائي عن طريق بطارية و مثل شحني ١٦ % ادخل للمنشن ١٦ ... قول لو العالم لعبة ف انا حجر 😂",
    "اكتب في البايو عمي (المنشن الرابع) لمدة 5 ساعات",
    "اكتب في الجروب ذا لمدة 24 ساعة",
    "استخدام الصور لرد ع الناس لمدة 4 ايام",
    "هات اكترا اغنية محرجه عندك",
    "ابعت صوت بشكل هوتي و قول هل يمكنني ان اتصل بك يا بيبي",
    "هات سكرين شوت ل مكالمات الواتس",
    "اي ولد يدخل قول له انت جميلللل جدا بدون كذاب او العكس للبنات!",
    "مشنن اعضاء الجروب قول تعالوا مضاربة",
    "سجل فويس و قول ياميتي كوداساي🤣🤣",
    "ابعت رسالة ل كراش او الاكس الحين و ابعت اسكرين",
    "كلم كراش او الاكس الحين و صور لنا",
    "ادخل لجروب عشوائي قول انا بحب (ل اول منشن بنت لو انت ولد و البنت العكس)",
    "غير منشنك ل 🏳️‍🌈 لمدة 8 ساعاات",
    "ادخل ل اي شخص عشوائي و خبرها انت حبيبي/حبيتبي لمده ٢٤ ساعة",
]
              const der = dare[Math.floor(Math.random() * dare.length)]
              buffer = await getBuffer(`https://telegra.ph/file/49628696ea30c6e526c8d.jpg`)
              DogeXeonOP.sendMessage(from, buffer, image, { quoted: mek, caption: '_*𝙼𝚄𝚉𝙰𝙽/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 ʕ•ᴥ•ʔ*_\n'+ der })
              break
                            break
       case 'صراحة':
              const truth =[
    "إذا كان بإمكانك أو إذا أردت, أي gc / خارج gc تريد تكوين صداقات معه؟ (ربما يكون مختلفًا / نفس النوع)",
    "هل سبق لك أن أحببت شخصًا ما وشعرت أن هذا الشخص معجب بك أيضًا؟",
    "ما هو اسم صديقة صديقك السابقة التي اعتدت أن تحبها سراً؟",
    "هل سبق لك أن سرقت المال من والدك أو والدتك؟ السبب؟",
    "ما الذي يجعلك سعيدا عندما تكون حزينا؟",
    "هل كان لديك حب من جانب واحد؟ إذا كان الأمر كذلك فمن؟ كيف تشعر يا أخي؟",
    "هل كانت عشيقة شخص ما؟",
    "الشيء الأكثر رعبا",
    "من هو أكثر شخص مؤثر في حياتك؟",
    "ما هو الشيء الفخور الذي حصلت عليه هذا العام",
    "من هو الشخص الذي يمكنه أن يجعلك رائعًا",
    "من هو الشخص الذي جعلك سعيدا جدا؟",
    "من هو الأقرب إلى نوع شريكك المثالي هنا",
    "مع من تحب اللعب ؟؟",
    "هل سبق لك أن رفضت الناس؟ والسبب لماذا؟",
    "اذكر حادثة أصابتك ما زلت تتذكرها",
    "ما هي الإنجازات التي حققتها هذا العام ؟؟",
    "ما هي أسوأ عادتك في المدرسة ؟؟",
    "ما هي الأغنية التي تغنيها أكثر في الحمام",
    "هل مررت بتجربة الاقتراب من الموت من قبل",
    "متى كانت آخر مرة كنت فيها غاضبًا حقًا. لماذا؟",
    "من هو آخر شخص اتصل بك",
    "هل لديك أي مواهب خفية, ما هي",
    "ما هي أكثر كلمة تكرهها؟",
    "ما هو آخر فيديو يوتيوب شاهدته؟",
    "ما هو آخر شيء بحثت عنه في Google",
    "مع من في هذه المجموعة تريد مبادلة الحياة معه لمدة أسبوع",
    "ما هو الشيء الأكثر رعبا الذي حدث لك على الإطلاق",
    "هل سبق لك إطلاق الريح وإلقاء اللوم على شخص آخر",
    "متى كانت آخر مرة بكيت فيها شخصًا آخر",
    "هل خدعت صديقًا من قبل",
    "هل رأيت جثة من قبل",
    "أي من أفراد عائلتك يزعجك أكثر ولماذا",
    "إذا اضطررت إلى حذف تطبيق واحد من هاتفك, فأي تطبيق سيكون",
    "ما التطبيق الذي تضيع فيه معظم الوقت",
    "هل سبق لك أن زيفت مرضًا للعودة إلى المنزل من المدرسة",
    "ما هو العنصر الأكثر إحراجًا في غرفتك",
    "ما هي العناصر الخمسة التي ستحضرها إذا علقت في جزيرة صحراوية",
    "هل سبق لك أن ضحكت بشدة لدرجة أنك تبولت في سروالك",
    "هل تشم رائحة فرتس الخاص بك",
    "هل تبولت يومًا على السرير أثناء النوم ðŸ¤ £ ðŸ¤ £",
    "ما هو أكبر خطأ ارتكبته على الإطلاق",
    "هل سبق لك الغش في الامتحان",
    "ما هو أسوأ شيء فعلته على الإطلاق",
    "متى كانت آخر مرة بكيت فيها",
    "من تحب أكثر بين والديك",
    "هل تضع أحيانًا إصبعك في أنفك ðŸ¤ £",
    "من أعجبك خلال أيام المدرسة",
    "قل بصدق, هل تحب أي فتى في هذه المجموعة",
    "هل أحببت أي شخص من قبل؟ إلى متى؟",
    "هل لديك gf / bf", "ما هو أكبر مخاوفك؟",
    "هل أحببت شخصًا من قبل وشعرت أن هذا الشخص معجب بك أيضًا؟",
    "ما اسم صديقك السابق لصديقك الذي أحببته بهدوء ذات مرة؟",
    "هل سرقت أموال أمهاتك أو أموال والدك",
    "ما الذي يجعلك سعيدا عندما تكون حزينا",
    "هل تحب شخصًا في هذه المجموعة؟ إذا كنت إذن من؟",
    "هل سبق لك أن تعرضت للخداع من قبل الناس؟",
    "من هو أهم شخص في حياتك",
    "ما هي الأشياء التي تفتخر بها هذا العام",
    "من هو الشخص الذي يمكن أن يجعلك سعيدًا عندما تكون حزينًا",
    "من هو الشخص الذي جعلك تشعر بعدم الارتياح",
    "هل كذبت يومًا على والديك",
    "هل ما زلت تحب حبيبك السابق",
    "مع من تحب أن تلعب معه؟",
    "هل سبق لك أن سرقت شيئًا كبيرًا في حياتك؟ السبب وراء ذلك؟",
    "اذكر الحادثة التي تسبب لك الأذى والتي ما زلت تتذكرها",
    "ما هي الإنجازات التي حققتها هذا العام؟",
    "ما هي أسوأ عادتك في المدرسة؟",
    "هل تحب منشئ الروبوت, زيون؟",
    "هل فكرت يومًا في الانتقام من معلمك؟",
    "هل تحب رئيس الوزراء الحالي لبلدك",
    "أنت غير نباتي أو نباتي",
    "إذا كان بإمكانك أن تكون غير مرئي, فما هو أول شيء ستفعله",
    "ما هو السر الذي أخفته عن والديك",
    "من تحبها بسرية",
    "من هو آخر شخص زحفته على وسائل التواصل الاجتماعي",
    "إذا منحك الجني ثلاث أمنيات, فماذا تطلب",
    "ما هو أكبر ندمك",
    "ما هو الحيوان الذي تظن أنك تشبهه أكثر من غيرك",
    "كم عدد الصور الذاتية التي تلتقطها في اليوم",
    "ما هو برنامج الطفولة المفضل لديك",
    "إذا كان بإمكانك أن تصبح شخصية خيالية ليوم واحد, فمن ستختار",
    "لمن تراسل أكثر",
    "ما هي أكبر كذبة قلتها لوالديك على الإطلاق",
    "من هو حبيبك من الفنانين",
    "ما هو أغرب حلم رأيته في حياتك",
    "هل تلعب ببجي, إذا أرسلت بعد ذلك رقم معرفك"
]
              const trut = truth[Math.floor(Math.random() * truth.length)]
              buffer = await getBuffer(`https://telegra.ph/file/49628696ea30c6e526c8d.jpg`)
              DogeXeonOP.sendMessage(from, buffer, image, { quoted: mek, caption: '_*𝙼𝚄𝚉𝙰𝙽/𝙾𝚃𝙾𝚂𝙰𝙺𝙰 𝙻𝙾𝚅𝙴 𝚈𝙾𝚄 ʕ•ᴥ•ʔ*_\n'+ trut })
              break
              
//══════════[ muzan FEATURES ]══════════//

case 'نشر':
             
             if (!ismuzan && !mek.key.fromMe) return  reply(mess.only.muzan)
             if (args.length < 1) return reply('فين النشر')
             anu100 = await DogeXeonOP.chats.all()
             if (isMedia && !DogeXeonOP.message.videoMessage || isQuotedImage) {
             const encmediaboomb = isQuotedImage ? JSON.parse(JSON.stringify(DogeXeonOP).replace('quotedM','m')).message.extendedTextMessage.contextInfo : DogeXeonOP
             bc100 = await DogeXeonOP.downloadMediaMessage(encmediaboomb)
             for (let _ of anu100) {
             DogeXeonOP.sendMessage(_.jid, bc100, image, {quoted: fgi, caption: `*「 نشر اوتوساكا」*\n\n${body.slice(4)}`})
}
             reply('تم النشر بنجاح')
             } else {
             for (let _ of anu100) {
             DogeXeonOP.sendMessage(_.jid, 
			{"contentText": `*「 رسالة من بوت اوتوساكا *نشر* 」*\n\n${body.slice(4)}`,
			"footerText": `${tanggal}`,
			"buttons": [
			{"buttonId": `${prefix}اوتوساكا`,
			"buttonText": {"displayText": "اسفين ع الازعاج ♥️"
			},"type": "RESPONSE"}
			], "headerType": 'LOCATION',
			locationMessage: { degreesLatitude: '',
			degreesLongitude: '',
			jpegThumbnail: fakeimage,
			}}, MessageType.buttonsMessage )
}
             reply('Broadcast success')
}
             break
case 'bظيظيc2':

if (!ismuzan && !mek.key.fromMe) return reply(mess.only.muzan)
if (args.length < 1) return reply('The text?')
anubc2 = await DogeXeonOP.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia12345 = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await DogeXeonOP.downloadMediaMessage(encmedia12345)
for (let _ of anubc2) {
DogeXeonOP.sendMessage(_.jid, buff, image, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Broadcast success ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmediaki = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await DogeXeonOP.downloadMediaMessage(encmediaki)
for (let _ of anubc2) {
DogeXeonOP.sendMessage(_.jid, buff, video, { viewOnce:true, caption: `${body.slice(4)}`})
}
reply(`Broadcast success ${body.slice(4)}`)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmediadirk = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
buff = await DogeXeonOP.downloadMediaMessage(encmediadirk)
for (let _ of anubc2) {
DogeXeonOP.sendMessage(_.jid, buff, video, { mimetype: Mimetype.gif, quoted: finv, contextInfo: { forwardingScore: 508, isForwarded: true}, caption: `${body.slice(4)}` })
}
reply(`Broadcast success ${body.slice(4)}`)
} else {
for (let _ of anubc2) {
sendMess(_.jid, `Bot Broadcast\n\n${body.slice(4)}`)
}
reply(`Broadcast Success`)
}
break
case 'ن.جروبات':

if (!ismuzan && !mek.key.fromMe) return reply(mess.only.muzan)
if (args.length < 1) return reply('فين النشر')
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmediabcgc = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
bcgc = await DogeXeonOP.downloadMediaMessage(encmediabcgc)
for (let _ of groupMembers) {
DogeXeonOP.sendMessage(_.jid, bcgc, image, { caption: `*「 DOGE BOT BROADCAST 」*\n*Group* : ${groupName}\n\n${body.slice(6)}` })
}
reply('')
} else {
for (let _ of groupMembers) {
sendMess(_.jid, `*「 DOGE BOT BROADCAST 」*\n*Group* : ${groupName}\n\n${body.slice(6)}`)
}
reply('Success broadcast group')
}
break
case 'مسح':

if (!ismuzan && !mek.key.fromMe) return  reply(mess.only.muzan)
anuclearall = await DogeXeonOP.chats.all()
DogeXeonOP.setMaxListeners(25)
for (let _ of anuclearall) {
DogeXeonOP.deleteChat(_.jid)
}
textImg('تم مسح الشات بالكامل')
break
case 'setbotpp':
case 'setppbot':
if (!ismuzan && !mek.key.fromMe) return reply(mess.only.muzan)
if (!isQuotedImage) return reply(`Send a picture with a caption ${prefix}setppbot or tag images that have already been sent`)
enmediaheheh = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media = await DogeXeonOP.downloadAndSaveMediaMessage(enmediaheheh, './database/sampah/media_user')
await DogeXeonOP.updateProfilePicture(botNumber, media)
reply('Thank you for the new profile photo, my dear muzan 😚')
break
case 'setbotbio':
case 'setbio':
if (!ismuzan && !mek.key.fromMe) return reply(mess.only.muzan)
if (args.length < 1) return reply('The text?')
iyek = body.slice(8)
DogeXeonOP.setStatus(`${iyek}`)
reply(`Success changing bio to ${body.slice(8)}`)
break
case 'setbotname':

if (!ismuzan && !mek.key.fromMe) return reply(mess.only.muzan)
if (args.length < 1) return reply('Teksnya?')
anuoke112 = body.slice(11)
DogeXeonOP.updateProfileName(anuoke112)
reply(`Success in changing the name of the bot to ${body.slice(11)}`)
break
case 'عالمي':
if (!mek.key.fromMe && !ismuzan) return reply('Luh Siapa Sih Bang ?')
if (self === false) return
self = false
reply(`\`\`\`MODE - PUBLIC\`\`\``)
break
case 'فردي':
if (!mek.key.fromMe && !ismuzan) return reply('Who the hell is it bro ?')
if (self === true) return
self = true
reply(`\`\`\`MODE - SELF\`\`\``)
break
case 'autoread':
if (!mek.key.fromMe && !ismuzan) return reply(mess.only.muzan)
if(args[0] == 'on'){
autoread = true
reply('Success..')
} else if(args[0] == 'off'){
autoread = false
reply('Success..')
}
break
case 'autotype':
if (!mek.key.fromMe && !ismuzan) return reply(mess.only.muzan)
if(args[0] == 'on'){
autoketik = true
reply('Success..')
reply('Remember if autovn is on, please turn it off first')
} else if(args[0] == 'off'){
autoketik = false
reply('Success..')
}
break
case 'autorecord':
if (!mek.key.fromMe && !ismuzan) return reply(mess.only.muzan)
if(args[0] == 'on'){
autovn = true
reply('Succes..')
reply('Remember if autotype is on, please turn it off first')
} else if(args[0] == 'off'){
autovn = false
reply('Success..')
}
break
break
case 'tospam':
              if (!ismuzan && !mek.key.fromMe) return reply('كي بس اللي يقدر يسوي ازعاج')
              if (!arg) return reply(`Reply to sticker, contact, doc, or media with ${prefix}tospam amount in number`)
if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length > 10) {
teks = body.slice(8)
oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('بااكبير ٥٠!')
if (!Number(oi2)) return reply('يعم ركز!')
	  for (let i = 0; i < oi2; i++) {
	  DogeXeonOP.sendMessage(from, `${oi1}`, MessageType.text)
	  }
} else if (!isQuotedSticker && !isQuotedAudio && !isQuotedImage && budy.length < 10) {
teks = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
if (!Number(args[0])) return reply('ركز بقاااا')
if (Number(args[0]) >= 50) return reply('بالكبير ٥٠')
	  for (let i = 0; i < args[0]; i++) {
	  DogeXeonOP.sendMessage(from, teks, MessageType.text)
	  }
} else if (isQuotedSticker) {
	encmedian = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	         median = await DogeXeonOP.downloadAndSaveMediaMessage(encmedian)
				anutospem = fs.readFileSync(median)
	if (!Number(args[0])) return reply('Amount must be a number!')
	if (Number(args[0]) >= 50) return reply('Max 50!')
	  for (let i = 0; i < args[0]; i++) {
	  DogeXeonOP.sendMessage(from, anutospem, sticker)
	  }
} else if (isQuotedAudio) {
	encmediat = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
	            mediat = await DogeXeonOP.downloadAndSaveMediaMessage(encmediat)
				anutospem2 = fs.readFileSync(mediat)
	if (!Number(args[0])) return reply('Amount must be a number!')
	if (Number(args[0]) >= 50) return reply('Max 50!')
	  for (let i = 0; i < args[0]; i++) {
	  DogeXeonOP.sendMessage(from, anu2spem2, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt:true})
	  }
} else if (isQuotedImage) {
	boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
	delb = await DogeXeonOP.downloadMediaMessage(boij)
	teks = body.slice(6)
	oi1 = teks.split('|')[0]
oi2 = teks.split('|')[1]
if (Number(oi2) >= 50) return reply('Max 50!')
	if (!Number(oi2)) return reply('Amount must be a number!')
	  for (let i = 0; i < oi2; i++) {
	  DogeXeonOP.sendMessage(from, delb, MessageType.image, {caption: oi1})
	  }
}
	  break
	case 'سبام':
				if (!ismuzan && !mek.key.fromMe) return reply(mess.muzan)
					if (!arg) return reply(`Use ${prefix}spam text|amount`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Use ${prefix}spam text|amount`)
				if (Number(argzi[1]) >= 50) return reply('الاقصي 50!')
				if (isNaN(argzi[1])) return reply(`must be a number`)
				for (let i = 0; i < argzi[1]; i++){
					DogeXeonOP.sendMessage(from, argzi[0], MessageType.text)
				}
				break
				 
				      case 'غادر.ك':
             if (!ismuzan) return  reply(mess.only.muzan)
             let totalgroup = DogeXeonOP.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)
             for (let id of totalgroup) {
             sendMess(id, 'byee!', null)
             DogeXeonOP.groupLeave(id)
}
             break
             case 'addvn':
					if (!ismuzan && !mek.key.fromMe) return reply(mess.muzan)
					if (!isQuotedAudio) return reply('Reply audio')
					nm = body.slice(7)
					if (!nm) return reply('Whats the vn name??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await DogeXeonOP.downloadMediaMessage(boij)
					vien.push(`${nm}`)
					fs.writeFileSync(`./media/vn/${nm}.mp3`, delb)
					fs.writeFileSync('./database/vien.json', JSON.stringify(vien))
					DogeXeonOP.sendMessage(from, `Success, please check with *${prefix}vnlist*`, MessageType.text, { quoted: mek })
					break
					case 'delvn':
					if (!ismuzan && !mek.key.fromMe) return reply(mess.muzan)
					try {
					 nmm = body.slice(7)
					 wanudelvn = vien.indexOf(nmm)
					 vien.splice(wanudelvn, 1)
					 fs.unlinkSync(`./media/vn/${nmm}.mp3`)
					reply(`Successfully deleted vn ${body.slice(7)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'vnlist':
				case 'listvn':
					teks = '*VN List :*\n\n'
					for (let awokwkwk of vien) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${vien.length}*\n\n_To retrieve the vn, please reply to this message with the caption of the vn name_`
					DogeXeonOP.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": vien } })
					break
					case 'addimage':
				if (!ismuzan && !mek.key.fromMe) return reply(mess.muzan)
					if (!isQuotedImage) return reply('Reply image')
					nm = body.slice(10)
					if (!nm) return reply('Whats the name of the image??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await DogeXeonOP.downloadMediaMessage(boij)
					imagi.push(`${nm}`)
					fs.writeFileSync(`./media/image/${nm}.jpg`, delb)
					fs.writeFileSync('./database/imagi.json', JSON.stringify(imagi))
					DogeXeonOP.sendMessage(from, `Success, please check with *${prefix}imglist*`, MessageType.text, { quoted: mek })
					break
				case 'delimage':
				if (!ismuzan && !mek.key.fromMe) return reply(mess.muzan)
					try {
					 nmm = body.slice(10)
					 wanudelimg = imagi.indexOf(nmm)
					 imagi.splice(wanudelimg, 1)
					 fs.unlinkSync(`./media/image/${nmm}.jpg`)
					 reply(`Successfully deleted image ${body.slice(10)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
					case 'imagelist':
				case 'listimage':
					teks = '*IMAGE List :*\n\n'
					for (let awokwkwk of imagi) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${imagi.length}*\n\n_To take a picture, please reply to this message with the caption of the image name_`
					DogeXeonOP.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": imagi } })
					break
					case 'addsticker':
				if (!ismuzan && !mek.key.fromMe) return reply(mess.muzan)
					if (!isQuotedSticker) return reply('Reply sticker')
					nm = body.slice(12)
					if (!nm) return reply('What is the name of the sticker??')
					boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
					delb = await DogeXeonOP.downloadMediaMessage(boij)
					setik.push(`${nm}`)
					fs.writeFileSync(`./media/sticker/${nm}.webp`, delb)
					fs.writeFileSync('./database/setik.json', JSON.stringify(setik))
					DogeXeonOP.sendMessage(from, `Success, please check with *${prefix}liststicker*`, MessageType.text, { quoted: mek })
					break
				case 'delsticker':
				if (!ismuzan && !mek.key.fromMe) return reply(mess.muzan)
					try {
					 nmm = body.slice(12)
					 wanudelstick = setik.indexOf(nmm)
					 setik.splice(wanudelstick, 1)
					 fs.unlinkSync(`./media/sticker/${nmm}.webp`)
					 reply(`Successfully deleted the sticker ${body.slice(12)}`)
					} catch (err){
						console.log(err)
						reply(mess.error.api)
					}
					break
				case 'stickerlist':
				case 'liststicker':
					teks = '*Sticker List :*\n\n'
					for (let awokwkwk of setik) {
						teks += `- ${awokwkwk}\n`
					}
					teks += `\n*Total : ${setik.length}*\n\n_To take a sticker, please reply to this message with the caption of the sticker name_`
					DogeXeonOP.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": setik } })
					break
					break
					
//══════════[ GROUP FEATURES ]══════════//

                   case 'creategroup':
			case 'creategrup':
			if (!isGroup) return reply(mess.only.group)
				if (args.length < 1) return reply(`Use ${prefix}creategrup group name|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anucgc = []
						anucgc.push(mentioned[i])
                    }
					DogeXeonOP.groupCreate(argz[0], anucgc)
					reply(`Success in creating a group ${argz[0]}`)
                }
				break
case 'getbio':
	  var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await DogeXeonOP.getStatus(`${yy}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply(mess.error.api)
}
break
case 'getpict':
case 'getpp':
case 'getdp':
				case 'getpic':
					if (!isGroup) return reply(mess.only.group)
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            pictt = await DogeXeonOP.getProfilePicture(mentioned)
            pict = await getBuffer(pictt)
            DogeXeonOP.sendMessage(from, pict, image, {quoted: mek})
            break
                    case 'getname':
        var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = DogeXeonOP.contacts[ambl] != undefined ? DogeXeonOP.contacts[ambl].notify = undefined ? PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international') : DogeXeonOP.contacts[ambl].notify || DogeXeonOP.contacts[ambl].vname : PhoneNumber('+' + ambl.replace('@s.whatsapp.net', '')).getNumber('international')
reply(sname)
break
case 'غادر':
            if (!isGroup) return reply(mess.only.group)
                    if (isGroupAdmins || ismuzan) {
                    	DogeXeonOP.groupLeave(from)
                    } else {
                        reply(mess.only.admin)
                    }
                    break
case 'getdescgc':
				case 'getdesc':
              
				if (!isGroup) return reply(mess.only.group)
					anugetdescgc = from
			   metadete = await DogeXeonOP.groupMetadata(anugetdescgc)
				DogeXeonOP.sendMessage(from, metadete.desc, text, {quoted:mek})
				  break
case 'nsfw':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Ketik :\n${prefix}nsfw on untuk mengaktifkan\n${prefix}nsfw off untuk menonaktifkan`)
if ((args[0]) === 'on') {
if (isNsfw) return reply('*nsfw is active !!*')
_nsfw.push(from)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
reply(`\`\`\`Success ✅, Activating the nsfw feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isNsfw) return reply('*nsfw is already off before !!*')
_nsfw.splice(from, 1)
fs.writeFileSync('./database/nsfw.json', JSON.stringify(_nsfw))
reply(`\`\`\`Success ✅, Disabling the nsfw feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on to enable, off to disable*')
}
break
case 'ترحيب':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (args.length < 1) return reply(`Type :\n${prefix}welcome on to activate\n${prefix}welcome off to disable`)
if ((args[0]) === 'on') {
if (isWelkom) return reply('*welcome is active !!*')
_welkom.push(from)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Success ✅, Activating the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
} else if ((args[0]) === 'off') {
if (!isWelkom) return reply('*welcome has been off before !!*')
_welkom.splice(from, 1)
fs.writeFileSync('./database/welcome.json', JSON.stringify(_welkom))
reply(`\`\`\`Success ✅, Disabling the welcome feature in the group\`\`\` *${groupMetadata.subject}*`)
} else {
reply('*on to enable, off to disable*')
}
break
case 'م.روابط':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`اختار تشغيل او ايقاف `)
if (args[0].toLowerCase() === 'تشغيل'){
if (isAntiLink) return reply(`الامر متفعل يا عسلية ترا`)
_antilink.push(from)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`\`\`\`شاور بس ع اي حد يبعت روابط في جروب *${groupMetadata.subject} وانا اطردوا*`)
} else if (args[0].toLowerCase() === 'ايقاف'){
let anuantilink = _antilink.indexOf(from)
_antilink.splice(anuantilink, 1)
fs.writeFileSync('./database/antilink.json', JSON.stringify(_antilink))
reply(`اها ما دلوقتي طز في بوت لانو مالو لازمه 😔`)
} else {
reply(`_اختار تشغيل او ايقاف_`)
}
break
case 'م.فيروسات':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (!q) return reply(`Choose on or off`)
if (args[0].toLowerCase() === 'تشغيل'){
if (isAntiVirtex) return reply(`Already active`)
_antivirtex.push(from)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`متخافش طول مانا معك همنع اي حدا يفيرسك ♥️\`\`\` *${groupMetadata.subject}*`)
} else if (args[0].toLowerCase() === 'ايقاف'){
let anuantivtex = _antivirtex.indexOf(from)
_antivirtex.splice(anuantivtex, 1)
fs.writeFileSync('./database/antivirtex.json', JSON.stringify(_antivirtex))
reply(`\`\`\`براحتككككك يا جميل هتعيش و تفتكر\`\`\` *${groupMetadata.subject}*`)
} else {
reply(`_اختار تشغيل او ايقاف_`)
}
break
case 'gc': case 'جروب':
buttonss = [{buttonId: `${prefix}opengc`, buttonText: {displayText: 'فتح ⚙️'}, type: 1},{buttonId: `${prefix}closegc`, buttonText: {displayText: 'غلق ⚙️'}, type: 1}]
const bMess = {
    contentText: 'اقفل او افتح الجروب',
    footerText: 'اختار واحده 🌚',
    buttons: buttonss,
    headerType: 1
}
await DogeXeonOP.sendMessage(from, bMess, MessageType.buttonsMessage, {quoted: mek})
break
					case 'opengc':
					if (!isGroup) return reply(mess.only.group)
					if (!isGroupAdmins) return reply(mess.group)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
                   reply(`Successful opening group ${groupName}`)
						DogeXeonOP.groupSettingChange(from, GroupSettingChange.messageSend, false)
						break
						case 'closegc':
						if (!isGroup) return reply(mess.only.group)
						if (!isGroupAdmins) return reply(mess.only.admin)
                   if (!isBotGroupAdmins) return sticNotAdmin(from)
						reply(`Successfully closing the group ${groupName}`)
						DogeXeonOP.groupSettingChange(from, GroupSettingChange.messageSend, true)
					break
case 'ج.رابط':
case 'gruplink':
case 'gclink':
case 'linkgroup':
case 'linkgrup':
case 'linkgc':

if (!isGroup) return reply(mess.only.group)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
linkgc = await DogeXeonOP.groupInviteCode(from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n*${groupName}* group link`
DogeXeonOP.sendMessage(from, yeh, text, { quoted: fgi })
break
case 'ترقية' :

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the target who wants to be an admin!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'مبروووووك بقيت ادمن 🌚♥️ :\n'
for (let _ of mentioned) {
teks += ` المز @${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
DogeXeonOP.groupMakeAdmin(from, mentioned)
} else {
mentions(`Order received, Promoted : @${mentioned[0].split('@')[0]} to an admin in *${groupMetadata.subject}*`, mentioned, true)
DogeXeonOP.groupMakeAdmin(from, mentioned)
}
break
case 'تخفيض' :

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (mek.message.extendedTextMessage === undefined || mek.message.extendedTextMessage === null) return reply('Tag the admin you want to demote!')
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
if (mentioned.length > 1) {
teks = 'بقيت عضو يا عضو 😔 :\n'
for (let _ of mentioned) {
teks += ` المز برضو @${_.split('@')[0]}\n`
}
mentions(teks, mentioned, true)
DogeXeonOP.groupDemoteAdmin(from, mentioned)
} else {
mentions(`Order received, Demoted : @${mentioned[0].split('@')[0]} to a member`, mentioned, true)
DogeXeonOP.groupDemoteAdmin(from, mentioned)
}
break
case 'خ.الكل':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
DogeXeonOP.groupDemoteAdmin(from, members_id)
break
case 'ت.الكل':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
members_id = []
for (let mem of groupMembers) {
members_id.push(mem.jid)
}
DogeXeonOP.groupMakeAdmin(from, members_id)
break
case 'ضيف' :

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (args.length < 1) return reply('هتضيف مين  لو تبي مساعدة بغششك (اكتب #ضيف رقم)??')
if (args[0].startsWith('08')) return reply('كود دولة يانجم')
try {
num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
DogeXeonOP.groupAdd(from, [num])
} catch (e) {
console.log('Error :', e)
reply('لازم تباعت دعوه له 🌞')
}
break
case "طرد":

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (
mek.message.extendedTextMessage === undefined ||
mek.message.extendedTextMessage === null
)
return reply("مشن ع الكائن اللي هينطرد!");
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid;
if (mentioned.length > 1) {
DogeXeonOP.groupRemove(from, mentioned);
reply(mess.success);
} else if (mentioned.length < 1) {
anukick = mek.message.extendedTextMessage.contextInfo.participant;
DogeXeonOP.groupRemove(from, [anukick]);
reply(mess.success);
} else {
DogeXeonOP.groupRemove(from, mentioned);
reply(mess.success);
}
break;
case 'منشن':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
members_id = []
teks = (args.length > 1) ? args.join(' ').trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `•المز : @${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'ت.الاسم':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
DogeXeonOP.groupUpdateSubject(from, `${body.slice(9)}`)
DogeXeonOP.sendMessage(from, `\`\`\`تم بنجاح تسميت الجروب ب\`\`\` *${body.slice(9)}*`, text, { quoted: mek })
break
case 'ت.الوصف':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
DogeXeonOP.groupUpdateDescription(from, `${body.slice(9)}`)
DogeXeonOP.sendMessage(from, `\`\`\`وه اتغير الوصف نقابة\`\`\` *${groupMetadata.subject}* ل و بقي شياكة: *${body.slice(9)}*`, text, { quoted: fgi })
break
case 'setgrouppp':
case 'setgruppp':
case 'ص.جروب':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
if (isQuotedImage) {
let encmediasetppgc = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
let media = await DogeXeonOP.downloadMediaMessage(encmediasetppgc)
DogeXeonOP.updateProfilePicture(from, media)
.then((res) => reply(jsonformat(res)))
.catch((err) => reply(jsonformat(err)))
} else {
reply(`Send or tag an image with a caption ${prefix}setppgrup`)
}
break
case 'م.خفي':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !ismuzan && !mek.key.fromMe) return reply(mess.only.admin)
try {
quotedText = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
hideTag(from, `${quotedText}`)
} catch {
hideTag(from, `${q}`)
}
break
case 'infogc':
case 'infogrup':
case 'infogrouup':
case 'grupinfo':
case 'م.جروب':
case 'gcinfo':

if (!isGroup) return reply(mess.only.group)
try {
var pic = await DogeXeonOP.getProfilePicture(from)
} catch {
var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'
}
let ingfo = `*معلومات الجروب 😔♥️*\n\n*الاسم :* ${groupName}\n*الايدي تباع الجروب:* ${from}\n*تاريخ الانشاء :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Kolkata').format('DD/MM/YYYY HH:mm:ss')}\n*المؤسس :* @${groupMetadata.muzan.split('@')[0]}\n*عدد المشرفين :* ${groupAdmins.length}\n*عدد الاعضاء الكفوو :* ${groupMembers.length}\n*الترحيب :* ${isWelkom ? 'مطفي' : 'شغال'}\n*مانع الروابط :* ${isAntiLink ? 'مطفي' : 'شغال'}\n*الوصف :* \n\n${groupMetadata.desc}`
DogeXeonOP.sendMessage(from, await getBuffer(pic), image, {quoted: mek, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.muzan.replace('@c.us', '@s.whatsapp.net')]}})
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'revoke':
case 'resetlink':
case 'اعادة.ت.ر':
case 'اعادة':
case 'resetgruplink':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
if (!isBotGroupAdmins) return reply(mess.only.Badmin)
json = ['action', 'inviteReset', from]
DogeXeonOP.query({json, expect200: true})
reply('تم تغير رابط بنجاح')
break
       case 'online':
       case 'يراقب':
       case 'listonline':
       case 'here':                
             if (!isGroup) return reply(`جروبات بس`)
             try {
             let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
             let online = [...Object.keys(DogeXeonOP.chats.get(ido).presences), DogeXeonOP.user.jid]
             DogeXeonOP.sendMessage(from, 'المراقبين و فاتحين الواتس 🌚:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: mek, contextInfo: { mentionedJid: online }})
             } catch (e) {
             reply(`${e}`)
}
             break
                           case 'منشن':
                case 'tag':
					if (!isGroup) return reply(mess.group)
					if (!isGroupAdmins && !mek.key.fromMe) return reply('only admin and bot muzan can use this feature')
					members_id = []
					teks = (args.length > 1) ? body.slice(8).trim() : ''
					teks += '\n\n'
					for (let mem of groupMembers) {
						teks += `𖠌 @${mem.jid.split('@')[0]}\n`
						members_id.push(mem.jid)
					}
					mentions(teks, members_id, true)
					break

case 'totag':
case 'sticktag':
			if (!isGroup) return reply(mess.only.group)
			if (!isGroupAdmins && !mek.key.fromMe) return reply('only admin and bot muzan can use this feature')
            if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
            encmediau = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await DogeXeonOP.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await DogeXeonOP.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            DogeXeonOP.sendMessage(from, ini_buffer, sticker, options)
            fs.unlinkSync(file)
            } else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
            encmediau = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await DogeXeonOP.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await DogeXeonOP.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            DogeXeonOP.sendMessage(from, ini_buffer, image, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
            encmediau = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await DogeXeonOP.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await DogeXeonOP.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'audio/mp4', duration: 359996400,
                ptt : true,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            DogeXeonOP.sendMessage(from, ini_buffer, audio, options)
            fs.unlinkSync(file)
         } else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await DogeXeonOP.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await DogeXeonOP.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/gif',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            DogeXeonOP.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedDocument) && args.length == 0) {
            encmediau = isQuotedDocument ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await DogeXeonOP.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await DogeXeonOP.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'text/plain',
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            DogeXeonOP.sendMessage(from, ini_buffer, document, options)
            fs.unlinkSync(file)
        }  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
            encmediau = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
            file = await DogeXeonOP.downloadAndSaveMediaMessage(encmediau, filename = getRandom())
            value = args.join(" ")
            var group = await DogeXeonOP.groupMetadata(from)
            var member = group['participants']
            var mem = []
            member.map(async adm => {
            mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
            })
            var options = {
                mimetype : 'video/mp4', duration: 359996400,
                contextInfo: { mentionedJid: mem },
                quoted: mek
            }
            ini_buffer = fs.readFileSync(file)
            DogeXeonOP.sendMessage(from, ini_buffer, video, options)
            fs.unlinkSync(file)
        } else{
          reply(`reply image/document/gif/sticker/audio/video with caption ${prefix}totag`)
        }
        break   
case 'م.الادمن':
case 'adminlist':

if (!isGroup) return reply(mess.only.group)
teks = `Admin list of group *${groupMetadata.subject}*\nTotal : ${groupAdmins.length}\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `${no.toString()}. @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break
case 'الامبراطور':
case 'muzangroup':

if (!isGroup) return reply(mess.only.group)
options = {
text: `Here is the group muzan : https://wa.me/${from.split("-")[0]}`,
contextInfo: { mentionedJid: [from] }
}
DogeXeonOP.sendMessage(from, options, text, { quoted: mek })
break
case 'ك.منشن':

if (!isGroup) return reply(mess.only.group)
if (!isGroupAdmins && !mek.key.fromMe) return reply(mess.only.admin)
argzi = arg.split('|')
if (!argzi) return reply(`Use ${prefix}kontag @tag|name`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
} else {
hideTagKontak(from, argzi[0], argzi[1])
}
break
case 'م.كونكت':

if (!isGroup) return reply(mess.only.group)
argzu = arg.split('|')
if (!argzu) return reply(`Use ${prefix}contact @tag|name`)
if (mek.message.extendedTextMessage != undefined){
mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
sendKontak(from, mentioned[0].split('@')[0], argzu[1])
} else {
sendKontak(from, argzu[0], argzu[1])
}
break


//━━━━━━━━━━━━━━━[ THE END OF ALL FEATURES ]━━━━━━━━━━━━━━━━━//
				
default:
if (ismuzan) {
if (budy.startsWith('$')){
if (!mek.key.fromMe && !ismuzan) return
qur = budy.slice(2)
exec(qur, (err, stdout) => {
if (err) return reply(`${err}`)
if (stdout) {
reply(stdout)
}
})
}
if (ismuzan) {
if (budy.startsWith('>')) {
console.log(color('[ EVAL ]'), color(moment(mek.messageTimestamp * 1000).format('DD/MM/YY HH:mm:ss'), 'yellow'), color(`eval return`))
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
reply(`${evaled}`)
} catch (err) {
reply(`${err}`)
}
}
}
}
}
	} catch (e) {
    e = String(e)
    if (!e.includes("this.isZero") && !e.includes("jid")) {
	console.log('Error : %s', color(e, 'red'))
	DogeXeonOP.sendMessage(`${muzan}@s.whatsapp.net`, `─────「 *ALERT-ERROR* 」─────\n\n\`\`\`${e}\`\`\`\n\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Dream Guy Xeon",body:"Dont forget to subscribe Xeon",previewType:"PHOTO",thumbnail:fs.readFileSync('./media/dogepic1.jpg'),sourceUrl:"https://wa.me/201032199513"}}})
        }
	// console.log(e)
	}
}


	
    
