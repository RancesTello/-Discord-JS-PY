module.exports = (client, message, args) => {  
const Discord = require('discord.js')
  let rpts = ["https://media.giphy.com/media/gk9OfhRXQTIVj10Nij/giphy.gif","https://media.giphy.com/media/S4Hy4kHGsOT9WG7Ohv/giphy.gif","https://media.giphy.com/media/UQ0KMD1iZ0HCfEdwOg/giphy.gif","https://media.giphy.com/media/MFOWRxFKBOGz3OzyRY/giphy.gif","https://media.giphy.com/media/Jr5RHIEHIN3fIchGhA/giphy.gif","https://media.giphy.com/media/Y4htO9xANel0UsM9yJ/giphy.gif","https://media.giphy.com/media/WpHy693QJwiaFAsioX/giphy.gif","https://media.giphy.com/media/WmiDcMqWwcPTHlLnFi/giphy.gif","https://media.giphy.com/media/TdEkEbfXvI3VXQNI6e/giphy.gif","https://media.giphy.com/media/RHDL2SWmgGLwYiS8l2/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
 let mencionado = message.mentions.users.first()
   let texto = args.slice().join(" ");
    if (!texto)
      return message.channel.send("Debes hacer una pregunta...");
  let embed = new Discord.MessageEmbed()
.setTitle(":°:∙ : "+user.username+" Ha comenzado toquetear a "+mencionado.username+" ;-;:°:∙ : ")
.setImage(ran)
.setColor(0xFFFC44)
.setTimestamp()

message.channel.send(embed)
  }
