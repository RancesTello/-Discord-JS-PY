const Discord = require('discord.js')
module.exports = async (client, message, args) => {
  const nekos = require("nekos.life");
    const neko = new nekos();
  let aA = message.author
let imagen = await neko.sfw.wallpaper(2).then(image => {
         const embed = new Discord.MessageEmbed()
          .setDescription("°:∙ : **"+aA.username+"** aqui tienes un fondo°:∙ : ")
          .setImage(image.url)
          .setImage(image.url)
          .setColor("RANDOM")
        .setFooter(client.user.username)
        .setTimestamp();
      
message.channel.send(embed);
      })
}