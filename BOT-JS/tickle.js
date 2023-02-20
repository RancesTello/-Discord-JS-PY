module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/KFtWQ5dwkNrHB9xQFt/giphy.gif","https://media.giphy.com/media/KFtWQ5dwkNrHB9xQFt/giphy.gif","https://media.giphy.com/media/WooZJZaeSyKwIWew1D/giphy.gif","https://media.giphy.com/media/jTey1zYF3Dssdj7TKo/giphy.gif","https://media.giphy.com/media/j52e6fIJUPhB5IpcHp/giphy.gif","https://media.giphy.com/media/dzO3uWHcWOh70FwrE1/giphy.gif","https://media.giphy.com/media/RhMgNTktMeXXc3xb53/giphy.gif","https://media.giphy.com/media/J2mpUgj0RlCnJ9hcn3/giphy.gif","https://media.giphy.com/media/ZdBFCipib2WYGLsQRp/giphy.gif","https://media.giphy.com/media/ZFi3ASLgIM9FCnYdPu/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
let mencionado = message.mentions.users.first()
   let texto = args.slice().join(" ");
    if (!texto)
      return message.channel.send("Debes hacer una pregunta...");
  let embed = new Discord.MessageEmbed() 
.setTitle(": ∙:°"+user.username+" Le hace cosquillas (>\\\<) a.."+mencionado.username+": ∙:°")
.setImage(ran)
.setColor(0xECFF9A)
.setTimestamp()

message.channel.send(embed)
  }
