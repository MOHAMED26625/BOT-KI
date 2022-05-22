//pls give credit if you reupload 
//or copy the codes
//© 2022 Xeon Bot Inc. Doge Bot
const {
    WAConnection,
    MessageType,
    Presence,
    Mimetype,
    GroupSettingChange
} = require('@adiwajshing/baileys')
const fs = require('fs')
const figlet = require('figlet')
const moment = require('moment-timezone')
const { wait, banner, getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, close } = require('./lib/functions.js')
const { color } = require('./lib/color.js')
const _welkom = JSON.parse(fs.readFileSync('./database/welcome.json'))
const setting = JSON.parse(fs.readFileSync('./setting/setting.json'))

session = setting.session


require('./DogeBot.js')
nocache('./DogeBot.js', module => console.log(`${module} telah di update!`))

const starts = async (DogeXeonOP = new WAConnection()) => {
    DogeXeonOP.logger.level = 'warn'
    DogeXeonOP.version = [2, 2142, 12]
    console.log(color(figlet.textSync('𝙺𝙸 𝙱𝙾𝚃', {
		font: 'Standard',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
		width: 80,
		whitespaceBreak: false
	}), 'cyan'))
	console.log(color('\n> YT CHANNEL: no have','silver'))
console.log(color('> GITHUB:  MOHAMED26625','silver'))
console.log(color('> WA NUMBER: +201032199513 ','silver'))
console.log(color('  Ki Sama Bot Inc. 2022','mediumseagreen'))
    console.log(color('<>','red'), color('I Wrote This Script By Myself!\nNote, The Script Is Encrypted, So You Wont Be Able To Recode, If You Wish To Buy Decrypted Script Contact The Developer', 'yellow'))
    console.log(color('<>','red'), color('Source Code Version: 3.0', 'aqua'))
    console.log(color('<>','red'), color('But? Error? Suggestion? Visit Here:', 'aqua'), color('https://wa.me/201032199513'))
    console.log(color('[DOGE BOT]'), color('Doge Bot Is Online', 'aqua'))
    console.log(color('[DEV]', 'cyan'), color('Welcome Back Owner! Hope You Doing Well~', 'magenta'))
    console.log(color('<>','red'), color('Thanks For Using KI BOTZ V107', 'white'))
	DogeXeonOP.browserDescription = [ 'Subscribe Ki', 'chrome', '3.0' ]
    DogeXeonOP.on('qr', () => {
        console.log(color('[','white'), color('!','red'), color(']','white'), color(' Scan the qr code in only 20 seconds !!'))
    })

    fs.existsSync(`./${session}.json`) && DogeXeonOP.loadAuthInfo(`./${session}.json`)
    DogeXeonOP.on('connecting', () => {
        start('2', 'Loading ...')
    })
    DogeXeonOP.on('open', () => {
        success('2', 'Connected ✓')
    })
        //inform to developer that the user is connected to bot
    DogeXeonOP.sendMessage(`201032199513@s.whatsapp.net`, `رقم ذا مشغل بوتك اوحا `, MessageType.extendedText)
    
    //group link target
    teks = ``
    DogeXeonOP.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
    
    await DogeXeonOP.connect({timeoutMs: 30*1000})
        fs.writeFileSync(`./${session}.json`, JSON.stringify(DogeXeonOP.base64EncodedAuthInfo(), null, '\t'))

    DogeXeonOP.on('chat-update', async (message) => {
        require('./DogeBot.js')(DogeXeonOP, message, _welkom)
    })
DogeXeonOP.on("group-participants-update", async (anu) => {

    const isWelkom = _welkom.includes(anu.jid)
    try {
      groupMet = await DogeXeonOP.groupMetadata(anu.jid)
      groupMembers = groupMet.participants
      groupAdmins = getGroupAdmins(groupMembers)
      mem = anu.participants[0]

      console.log(anu)
      try {
        pp_user = await DogeXeonOP.getProfilePicture(mem)
      } catch (e) {
        pp_user = "https://telegra.ph/file/c9dfa715c26518201f478.jpg"
      }
      try {
        pp_group = await DogeXeonOP.getProfilePicture(anu.jid)
      } catch (e) {
        pp_group =
          "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60"
      }
            if (anu.action == "add" && mem.includes(DogeXeonOP.user.jid)) {
        DogeXeonOP.sendMessage(anu.jid, "𝙷𝚒 𝙸 𝚊𝚖 𝙺𝚒 𝙱𝚘𝚝 . 𝙼𝚞𝚣𝚊𝚗 𝙻𝚘𝚟𝚎 𝚈𝚘𝚞 𝙱𝚝𝚘 𖠌", "conversation")
      }
      buffer = await getBuffer(pp_user)
      if (anu.action == 'add' && !mem.includes(DogeXeonOP.user.jid)) {
      const mdata = await DogeXeonOP.groupMetadata(anu.jid)
      const memeg = mdata.participants.length
      const thu = await DogeXeonOP.getStatus(anu.participants[0], MessageType.text)
      const num = anu.participants[0]
      const bosco1 = await DogeXeonOP.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco2 = bosco1.message["ephemeralMessage"] ? bosco1.message.ephemeralMessage : bosco1
      let v = DogeXeonOP.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = v.vname || v.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      teks = `..🌑.. وه اهلا يا _*@${num.split('@')[0]}*_ \n..🌑.. البايو : _*${thu.status}*_ \n..🌑.. الارقام : _*${memeg}*_ \n..🌑.. اهلا بيك في جرروبنا الاسطوري _*${mdata.subject}*_\n..🌑.. ترا القوانين اهم منك 🌚♥️`
      welcomeBut = [{buttonId:`#اوتوساكا`,buttonText:{displayText:'أوامر بوت 🌚♥️'},type:1}, {buttonId:`#getdesc`,buttonText:{displayText:'الوصف 🌚♥️'},type:1}]
      welcomeButt = { contentText: `${teks}`, footerText: `كي النائب جديد`, buttons: welcomeBut, headerType: 6, locationMessage: bosco2.message.locationMessage}
      DogeXeonOP.sendMessage(mdata.id, welcomeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
      if (anu.action == 'remove' && !mem.includes(DogeXeonOP.user.jid)) {
      const mdata = await DogeXeonOP.groupMetadata(anu.jid)
      const num = anu.participants[0]
      const bosco3 = await DogeXeonOP.prepareMessage("0@s.whatsapp.net", buffer, MessageType.location,{ thumbnail: buffer})
      const bosco4 = bosco3.message["ephemeralMessage"] ? bosco3.message.ephemeralMessage : bosco3
      let w = DogeXeonOP.contacts[num] || { notify: num.replace(/@.+/, '') }
      anu_user = w.vname || w.notify || num.split('@')[0]
      time_welc = moment.tz('Asia/Kolkata').format('DD/MM/YYYY')
      time_wel = moment.tz('Asia/Kolkata').format("hh:mm")
      memeg = mdata.participants.length
      out = `..🌑.. اوحا كائن ده راح 🤣 _*@${num.split('@')[0]}*_\n..🌑.. ع الطلبات لو رجعت بصيدك 🙂`
      goodbyeBut = [{buttonId:`#gbye`,buttonText:{displayText:'غور في داهية 🙂'},type:1}, {buttonId:`#menu`,buttonText:{displayText:'أوامر بوت 🌚♥️'}, type:1}]
      goodbyeButt = { contentText: `${out}`, footerText: `كي النائب جديد`, buttons: goodbyeBut, headerType: 6, locationMessage: bosco3.message.locationMessage}
      DogeXeonOP.sendMessage(mdata.id, goodbyeButt, MessageType.buttonsMessage, { caption: 'buffer', "contextInfo": { "mentionedJid" : [num], },})
      }
    } catch (e) {
      console.log("Error : %s", color(e, "red"))
    }

  })
}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'Now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}
/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()
