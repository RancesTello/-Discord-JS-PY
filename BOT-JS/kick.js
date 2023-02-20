module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/RiE9Q0T0sgXK6UqQE5/giphy.gif","https://media.giphy.com/media/WtOmDyEMFE6dxWLVi5/giphy.gif","https://media.giphy.com/media/THTRjSFDyVh9LmZRMa/giphy.gif","https://media.giphy.com/media/fW58GaUkt4AgJorhpn/giphy.gif","https://media.giphy.com/media/H6EXJxxfcEjHNu0XQf/giphy.gif","https://media.giphy.com/media/eNFSVuG9L5IEtSwGtd/giphy.gif","https://media.giphy.com/media/SsrkggylfCwoQ27hA6/giphy.gif","https://media.giphy.com/media/RetkltCLFLu90a5qGw/giphy.gif","https://media.giphy.com/media/kBkdNaRYvKuvHahkDS/giphy.gif","https://media.giphy.com/media/ZA4bvb0KG1zdGHIXPZ/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
let mencionado = message.mentions.users.first()
  let embed = new Discord.MessageEmbed()
.setTitle("∙:~:∙"+user.username+" Le acomodo las ideas a "+mencionado.username+" :o∙:~:∙")
.setImage(ran)
.setColor(0xD9BAB2)
.setTimestamp()

message.channel.send(embed)
  }