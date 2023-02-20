module.exports = (client, message, args) => {
const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/jsZwZaX7mGjkBw6tNp/giphy.gif","https://media.giphy.com/media/cMgyO5yvHnkTiPmlaz/giphy.gif","https://media.giphy.com/media/ZbZWP2fXlPGmuYWXiS/giphy.gif","https://media.giphy.com/media/ftwBOau2YbL6z04cIr/giphy.gif","https://media.giphy.com/media/JOXL8QTxs7KunVR8f2/giphy.gif"," https://media.giphy.com/media/XB3cL5bTbTPHxCrPBg/giphy.gif"," https://media.giphy.com/media/dAd2tObCD8Sewfjoxv/giphy.gif"," https://media.giphy.com/media/LkraRfD9WJGJ9EdcE8/giphy.gif"," https://media.giphy.com/media/cJAk0OaPLHM9RYG980/giphy.gif"," https://media.giphy.com/media/YO47V43kaWKyjMGacT/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
let mencionado = message.mentions.users.first()

  let embed = new Discord.MessageEmbed()
.setTitle("↭"+user.username+" Le dio una lamida a "+mencionado.username+"↭")
.setImage(ran)
.setColor(0xFFFFFF)
.setTimestamp()


message.channel.send(embed)
  }
