module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/KBDDJ0CHnHmRZM63Rs/giphy.gif","https://media.giphy.com/media/W6ioOBoCJszhWIAQTm/giphy.gif"," https://media.giphy.com/media/f8PMYCANLQugSFgkby/giphy.gif"," https://media.giphy.com/media/jVO89pcK3VIHrE2ITf/giphy.gif"," https://media.giphy.com/media/VgZK9hUPEa4tipd09f/giphy.gif"," https://media.giphy.com/media/SX08Zt5w3U9YczXrVx/giphy.gif"," https://media.giphy.com/media/VzkR4ogIhOjqcbjAUm/giphy.gif"," https://media.giphy.com/media/VewW5gLH94pTzzfmdY/giphy.gif"," https://media.giphy.com/media/XHX8Py4heYeTwE0JWe/giphy.gif"," https://media.giphy.com/media/QW4yVtsMZdIaVPyBcA/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
let mencionado = message.mentions.users.first()
  let embed = new Discord.MessageEmbed()
.setTitle("∙:~:∙"+user.username+" Le ha dado un buen puñetazo a"+mencionado.username+" >:o ∙:~:∙")
.setImage(ran)
.setColor(0xADD9C1)
.setTimestamp()

message.channel.send(embed)
  }