module.exports = (client, message, args) => {  
  const Discord = require('discord.js') 
module.exports = async (client, message, args) => {
  const nekos = require("nekos.life");
    const neko = new nekos();
  let embed = new Discord.MessageEmbed()
  let aA = message.author
  let aB = message.mentions.users.first()
  if(!aB){return message.channel.send("Debes mencionar a alguien...")}
  if(aA.id == aB.id){return message.channel.send("No puedes besarte a ti mismo, menciona  a alguien...")}
let imagen = await neko.sfw.kiss().then(image => {
        const embed = new Discord.MessageEmbed()
          .setDescription("**"+aA.username+"** ha besado a **"+aB.username+"**")
          .setImage(image.url)
          .setColor("RANDOM")
        .setFooter(client.user.username)
        .setTimestamp();
  
message.channel.send(embed)
} ) } 
} 