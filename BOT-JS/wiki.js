module.exports = async (client, message, args) => { 
  const Discord = require('discord.js')
const wtf = require("wtf_wikipedia")
  let busqueda = args.join(" ")
if(!busqueda) return message.channel.send("Escribe algo para buscar")
wtf.fetch(busqueda, 'es').then((doc) => { 
 const embed = new Discord.MessageEmbed()
.setColor(0xFFC7F5)
.setTitle(`:mag_right: ${busqueda} :mag:`)
.setDescription(`${doc.sentences(0).text()} ${doc.sentences(1).text()}`)
.setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/8/80/Wikipedia-logo-v2.svg/1200px-Wikipedia-logo-v2.svg.png")
.setFooter(`Pedido por ${message.member.displayName}`)
.setTimestamp()
message.channel.send(embed)
}).catch((err) => message.channel.send("Busqueda no encontrada"))

} 
//