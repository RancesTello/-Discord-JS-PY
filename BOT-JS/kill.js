module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/VbzHEnOfgfTvAwbCRP/giphy.gif","https://media.giphy.com/media/KE4BkqY26LIZPGtunz/giphy.gif","https://media.giphy.com/media/d7ZukzcMJyobqli8S9/giphy.gif","https://media.giphy.com/media/SSW0wtnGnoxoW5Ij87/giphy.gif","https://media.giphy.com/media/SUumdsBP5z7Bh6TAr2/giphy.gif","https://media.giphy.com/media/Tgn7swu5bp6zc07ZbY/giphy.gif","https://media.giphy.com/media/WVAOvhjPqAUiQ073jH/giphy.gif","https://media.giphy.com/media/ehsIm2Sx6OKtxm2ICk/giphy.gif","https://media.giphy.com/media/lqA6X81gwWvw7wuYcE/giphy.gif","https://media.giphy.com/media/TFHnv1pHWjX7J11NkC/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
let mencionado = message.mentions.users.first()
  let embed = new Discord.MessageEmbed()
.setTitle("｡.･*"+user.username+" Mato a sangre fría a.. "+mencionado.username+"｡.･*")
.setImage(ran)
.setColor(0xDD0000)
.setTimestamp()

message.channel.send(embed)
  }