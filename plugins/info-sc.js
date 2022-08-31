let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Knp kak ${ye} Lagi Nyari Sc Ya? 

𝘊𝘈𝘙𝘐 𝘈𝘑𝘈 𝘋𝘐 𝘠𝘖𝘜 𝘛𝘜𝘉𝘌

𝚈𝙾𝚄 𝚃𝚄𝙱𝙴 :
https://youtu.be/4cQwSCtZo1Q

JOIN GC BOT:
•GC¹
https://chat.whatsapp.com/ItwCvXL02hg11U5qNaLSBe
•GC²
https://chat.whatsapp.com/LHfAOQ4sa2g40Bu5sXDWva`

conn.sendBut(m.chat, esce, 'Jangan Lupa subscribe ', 'Thanks', '.menu', m) 
}
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler
