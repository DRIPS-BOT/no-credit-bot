let handler = async (m, { conn, command, usedPrefix }) => {
let picture = './drips.jpg'
let name = await conn.getName(m.sender)
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) { process.send('uptime')
_muptime = await new Promise(resolve => { process.once('message', resolve) 
setTimeout(resolve, 1000) }) * 1000}
let uptime = clockString(_uptime)
let estado =`
β­β[ *ππ¨π­* ]
β *HI CHOMIE${name}*
β
β *NO CREDIT BOT*
β *BOT ACTIVE*
β *BOT WORKING PUBLIC*
β *UPTIME: ${uptime}*
β°βββββββββββββββ
`.trim()

conn.sendHydrated(m.chat, estado, m, picture, 'https://github.com/zim-bot', 'πΆITHUB', null, null, [
['MENU', '/menu']
], m)}

handler.help = ['alive']
handler.tags = ['main']
handler.command = /^(alive|hey|hi|bot|bot)$/i
export default handler

function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
