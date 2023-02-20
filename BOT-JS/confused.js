module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/QUF5dujhuWaHX2kLLt/giphy.gif","https://media.giphy.com/media/efVGPbUcDMQbl4QQjC/giphy.gif","https://media.giphy.com/media/RNPtES4o67tmQRuo04/giphy.gif","https://media.giphy.com/media/lOOE8rKCv18XWVyfw6/giphy.gif","https://media.giphy.com/media/elnAvShChnLGrpLCH9/giphy.gif","https://media.giphy.com/media/YrNmdfU4joGSHcz1Bz/giphy.gif","https://media.giphy.com/media/ii2d6ngnhMD14UQgBj/giphy.gif","https://media.giphy.com/media/jsOB3nrUf9Njb9sLq0/giphy.gif","https://media.giphy.com/media/Thuc3YwIUx4JasZVuh/giphy.gif","https://media.giphy.com/media/jn370iQRuoSAWOmExo/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
let mencionado = message.mentions.users.first()
  let embed = new Discord.MessageEmbed()
.setTitle("↭"+user.username+" Esta confundido y no entiende ↭")
.setImage(ran)
.setColor(0xB0B0B0)
.setTimestamp()


message.channel.send(embed)
  }
