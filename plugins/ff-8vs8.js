import fg from 'api-dylux' 
import fetch from 'node-fetch'
import axios from 'axios'
let handler = async (m, { conn, args, command, usedPrefix }) => {
if (!args[0]) throw `
╭──────⚔──────╮
ㅤㅤㅤ8 𝐕𝐄𝐑𝐒𝐔𝐒 8
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
│ㅤʚ 𝐒𝐔𝐏𝐋𝐄𝐍𝐓𝐄:
│👸🏻 ➤ 
│👸🏻 ➤ 
╰─────────────
                 
` 
}
handler.help = ['8vs8']
handler.tags = ['freefire']
handler.command = /^(vs8|8vs8)$/i
handler.group = true
handler.admin = true
export default handler
