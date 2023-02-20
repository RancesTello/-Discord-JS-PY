module.exports = (client, message, args) => {  
const Discord = require('discord.js')
  let rpts = ["https://media.giphy.com/media/daxlWm99wwWD4RjfeH/giphy.gif","https://media.giphy.com/media/XGhNa7pUAkinceDSRO/giphy.gif","https://media.giphy.com/media/jRNSBR5TJeXeAU8erz/giphy.gif","https://media.giphy.com/media/TILIgoP5Y4YXVUOQDl/giphy.gif","https://media.giphy.com/media/MZ3AWrMPIVffvZZ668/giphy.gif","https://media.giphy.com/media/RISW2BDx9Cli9iwBs5/giphy.gif","https://media.giphy.com/media/Xfamb5TtcSmJlVNNBS/giphy.gif","https://media.giphy.com/media/iDJRUIgBMPMvqPZxvp/giphy.gif","https://media.giphy.com/media/Q8xymLX41JDdXm3XLT/giphy.gif","https://media.giphy.com/media/j2Gjvvw0Mw0oUUtoUK/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let embed = new Discord.MessageEmbed()
.setTitle("➻"+user.username+" Se a quedado dormido ~n~➻")
.setImage(ran)
.setColor(0x6973B0)
.setTimestamp()
message.channel.send(embed)
  }
