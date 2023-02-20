module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/RIqyTiQfBj9SMeISPu/giphy.gif","https://media.giphy.com/media/dsW1cYNSdwhWhYTGRh/giphy.gif","https://media.giphy.com/media/QvG47NezcmMyFWMgqM/giphy.gif","https://media.giphy.com/media/TIL1UqrsUMTxekteM3/giphy.gif","https://media.giphy.com/media/MXj2mTvQNRMF9LCXWj/giphy.gif","https://media.giphy.com/media/mFkF9Gnyv27PFft93u/giphy.gif","https://media.giphy.com/media/Y0OoPhC9bmdiEvgGde/giphy.gif","https://media.giphy.com/media/XZguHuSaqveoK36nYT/giphy.gif","https://media.giphy.com/media/W1TO1PQhgGPHY1BcUn/giphy.gif","https://media.giphy.com/media/dU6gwx8J8uAFI3G63u/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let embed = new Discord.MessageEmbed()
.setTitle("*•:｡. "+user.username+" da aplausos uwu *•:｡.")
.setImage(ran)
.setColor(0x7A2CAD)
.setTimestamp()

message.channel.send(embed)
  }
