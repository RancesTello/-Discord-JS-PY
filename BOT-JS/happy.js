module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/LSodJSFHSOwz7ad4nS/giphy.gif","https://media.giphy.com/media/kcZhhtM0vdU66ARPbr/giphy.gif","https://media.giphy.com/media/SrteLARln0hDnS0pW9/giphy.gif","https://media.giphy.com/media/WojPtQUfPQuxMseSoX/giphy.gif","https://media.giphy.com/media/ZYQxTSMTKzOghUm3ID/giphy.gif","https://media.giphy.com/media/gguJl5PoMVbt1u9HLR/giphy.gif","https://media.giphy.com/media/Y3AimSH4otuXJqdvaj/giphy.gif","https://media.giphy.com/media/UVHB7HhHTmXQTVcwKM/giphy.gif","https://media.giphy.com/media/KbkLdG0KaEXhD42nNG/giphy.gif","https://media.giphy.com/media/fZ824TcQt6pNZZ5im7/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let embed = new Discord.MessageEmbed()
.setTitle("∙:◦:"+user.username+" Esta contenta como una lombriz ^^∙:◦:")
.setImage(ran)
.setColor(0xF1FF0C)
.setTimestamp()

message.channel.send(embed)
  }
