module.exports = (client, message, args) => {  
 const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/lMfLBVvqRiVpoXsqJI/giphy.gif","https://media.giphy.com/media/LkYbsbDQIhKhQuVVeO/giphy.gif","https://media.giphy.com/media/h2Z8sGs5cyYXw2i7pc/giphy.gif","https://media.giphy.com/media/Kei1YiEz1xOUw78G2u/giphy.gif","https://media.giphy.com/media/YTKK5nyzDHzI2Ca9oy/giphy.gif","https://media.giphy.com/media/J6DGKdYuEB5JM2JPtu/giphy.gif","https://media.giphy.com/media/UVqE4YmOsO19gXceW7/giphy.gif","https://media.giphy.com/media/kGdRdL39CsvBv94k79/giphy.gif","https://media.giphy.com/media/d7kNrsjS1zoxeFhQ4E/giphy.gif","https://media.giphy.com/media/JRtCBR3v1270TFF5Dq/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let mencionado = message.mentions.users.first()
  let embed = new Discord.MessageEmbed()
.setTitle("°:◦:∙"+user.username+" Esta bailando al ritmo de la rola owo °:◦:∙")
.setImage(ran)
.setColor(0x6C9CD9)
.setTimestamp()

message.channel.send(embed)
  }
