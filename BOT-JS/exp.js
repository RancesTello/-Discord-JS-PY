module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
if("command === kick") {
let user = message.mentions.users.first()

let razon = args.slice(1).join()

let permiso = message.member.hasPermission("ADMINISTRATOR");
if(!permiso){

const noeo = new Discord.MessageEmbed()
.setColor('RANDOM')
.setFooter(`ejecutado por: ${message.author.tag}`)
.setDescription(`**__no se pudo usar este comando porque no cuenta con el permiso__**`)

message.channel.send(noeo)
}

if(!message.mentions.users.size) { 

return message.reply(`\`debes mecionar alguien para kickear\``)

}

if (!razon) return message.reply(`\`debes colocar una razon para que el comando fucione\``)

if (!message.guild.member(user).kickable) return message.reply(`\`no puedo kickear a ese usuario porque cuenta con mayor rango que yo\``)

message.guild.member(user).kick(razon);

const kickx2 = new Discord.MessageEmbed()
.setColor('RANDOM')
.setFooter(`ejecutado por: ${message.author.tag}`)
.addField(`**__el comando fue hecho perfectamente:__**
\`datos\`

\Razon: ${razon}
Author: ${message.author.tag}
User kickeado: ${user}\``)

message.channel.send(kickx2)

}
}