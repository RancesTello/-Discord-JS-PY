module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/SwCGK1XMESLIylDNtW/giphy.gif"," https://media.giphy.com/media/mEc17PujwfBCeHRa0s/giphy.gif"," https://media.giphy.com/media/S9u9mRXGo2P29HUKeX/giphy.gif"+" https://media.giphy.com/media/gIYXhKAcv0wRN8tqze/giphy.gif"," https://media.giphy.com/media/hp3z7JVBuHXHlwh0LT/giphy.gif"," https://media.giphy.com/media/SuHrikS54nlKWe93rw/giphy.gif"," https://media.giphy.com/media/fS9dLJA3pkS9Li9iJv/giphy.gif"+" https://media.giphy.com/media/iePFp4dnRynuscQfse/giphy.gif"," https://media.giphy.com/media/XEy64R5709Acz9dbmD/giphy.gif"," https://media.giphy.com/media/hT7MMJIlOdzramRVtF/giphy.gif"];
   let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
 let mencionado = message.mentions.users.first()
   let texto = args.slice().join(" ");
    if (!texto)
      return message.channel.send("Debes mencionar a alguien");
  let embed = new Discord.MessageEmbed()
.setTitle(":°:∙ : "+user.username+" comenzo a nalguear a "+mencionado.username+" ;-;:°:∙ : ")
.setImage(ran)
.setColor(0xE7E7E7)
.setTimestamp()

message.channel.send(embed)
  }