import fg from 'api-dylux' 
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
╭──────⚔──────╮
ㅤㅤㅤ  𝟏𝟔 𝐕𝐒 𝟏𝟔 
╰──────⚔──────╯
╭──────────────╮
│ㅤ⏱ 𝐇𝐎𝐑𝐀𝐑𝐈𝐎 
│ㅤ🇲🇽 𝐌𝐄𝐗 : 
│ㅤ🇨🇴 𝐂𝐎𝐋 : 
│➥ 𝐌𝐎𝐃𝐀𝐋𝐈𝐃𝐀𝐃: 
│➥ 𝐉𝐔𝐆𝐀𝐃𝐎𝐑𝐀𝐒:
│
│   𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 1
│
│👑 ➤ 
│👸🏻 ➤ 
│👸🏻 ➤ 
│👸🏻 ➤ 
│
│   𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 2
│
│👑 ➤ 
│👸🏻 ➤ 
│👸🏻 ➤ 
│👸🏻 ➤ 
│
│   𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 3
│
│👑 ➤ 
│👸🏻 ➤ 
│👸🏻 ➤ 
│👸🏻 ➤ 
│
│   𝗘𝗦𝗖𝗨𝗔𝗗𝗥𝗔 4
│
│👑 ➤ 
│👸🏻 ➤ 
│👸🏻 ➤ 
│👸🏻 ➤ 
│
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│👸🏻 ➤ 
│👸🏻 ➤ 
╰─────────────
                 
` 
}
handler.help = ['16vs16']
handler.tags = ['freefire']
handler.command = /^(16vs16|vs16)$/i
handler.group = true
handler.admin = true
export default handler
