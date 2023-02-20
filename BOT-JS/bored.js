module.exports = (client, message, args) => {  
const Discord = require('discord.js')
let rpts = ["https://media.giphy.com/media/daxcmHuBWcxr0KIqJR/giphy.gif"," https://media.giphy.com/media/jQycuPgrScrIFaw2ut/giphy.gif"," https://media.giphy.com/media/IeckhpqStyc43TEEr5/giphy.gif"," https://media.giphy.com/media/W2nukW5aiUNj2tw46R/giphy.gif"," https://media.giphy.com/media/mCynKbNWO2cLRXXPiv/giphy.gif"," https://media.giphy.com/media/U6H8v2bbJ13A1iQ5SY/giphy.gif"," https://media.giphy.com/media/QAPmTJrtUC2qOJQQ16/giphy.gif"," https://media.giphy.com/media/IbOcPCFDhk0b6WWQvT/giphy.gif"," https://media.giphy.com/media/dsRUh0SXA5zBnkiW3C/giphy.gif"," https://media.giphy.com/media/ej2KQtXtoLruJC2nkB/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let embed = new Discord.MessageEmbed()
.setTitle(":ﾟ:*•: "+user.username+" Esta muuyy aburridooo:ﾟ:*•:")
.setImage(ran)
.setColor(0x4CD6C4)
.setTimestamp()

message.channel.send(embed)
  }
