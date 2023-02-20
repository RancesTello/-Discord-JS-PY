module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/Ri8LlexJxlY4YGxHcW/giphy.gif","https://media.giphy.com/media/dUZrxDNEDjlnH80Ohj/giphy.gif","https://media.giphy.com/media/KDPsBPmin2Lpc7Arn3/giphy.gif","https://media.giphy.com/media/Wsp3k2KlEGJCHdCuZV/giphy.gif","https://media.giphy.com/media/WnHt0p7KYZj9PIuli6/giphy.gif","https://media.giphy.com/media/XZh7LL0BOYI6tMhZKu/giphy.gif","https://media.giphy.com/media/h4ZfRXu2G14g7V3jvX/giphy.gif","https://media.giphy.com/media/JqEISQZYpNGo4aEH3f/giphy.gif","https://media.giphy.com/media/h255f2KAKmsbCeswFE/giphy.gif","https://media.giphy.com/media/fwsykqcJiNiJMFt8e2/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let embed = new Discord.MessageEmbed()
.setTitle("➻"+user.username+" Se a sonrojado >///< ➻")
.setImage(ran)
.setColor(0xF533C0)
.setTimestamp()
message.channel.send(embed)
  }
