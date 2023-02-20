module.exports = (client, message, args) => {  
const Discord = require('discord.js')
let rpts = ["https://media.giphy.com/media/JoyLTn6JcWOxUfFskN/giphy.gif","https://media.giphy.com/media/QsbL1jnGq145pt0XMU/giphy.gif","https://media.giphy.com/media/VbVwhQwpufBtS7BTBu/giphy.gif","https://media.giphy.com/media/XxuvfNa6cW7CK9M7Q8/giphy.gif","https://media.giphy.com/media/l4ihLmlE4NYaWFFRAb/giphy.gif","https://media.giphy.com/media/f7BNznKZRXittGMzJR/giphy.gif","https://media.giphy.com/media/kH6vHPgxH0OGwP3YDV/giphy.gif","https://media.giphy.com/media/QszB1QMdhGotBnCq9t/giphy.gif","https://media.giphy.com/media/loAMSSk56mPGQTnWGr/giphy.gif","https://media.giphy.com/media/IdfBd0RaFb4xqxGCbR/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let embed = new Discord.MessageEmbed()
.setTitle(":ﾟ:*•: "+user.username+" Esta pensando:ﾟ:*•:")
.setImage(ran)
.setColor(0x54C5FF)
.setTimestamp()

message.channel.send(embed)
  }
