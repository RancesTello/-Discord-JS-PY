module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/Sr3qh8rrtl6p5goy75/giphy.gif","https://media.giphy.com/media/URjlaX6CzIGIPUpqPn/giphy.gif","https://media.giphy.com/media/S8x4dXTGWaow02XGcn/giphy.gif","https://media.giphy.com/media/kDf3XjFPmVa5Mh9dmo/giphy.gif","https://media.giphy.com/media/UuxDdWPIojyr1A9FZO/giphy.gif","https://media.giphy.com/media/dujD2y3ix16cHnbw2q/giphy.gif","https://media.giphy.com/media/kcTfblPaooyim9dBjE/giphy.gif","https://media.giphy.com/media/H0mQWMBoMJ6vUkCU9q/giphy.gif","https://media.giphy.com/media/cKzPEPy6X1mElWJlO7/giphy.gif","https://media.giphy.com/media/cm0oquFAGLbUAwuKLs/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
 let mencionado = message.mentions.users.first()
   let texto = args.slice().join(" ");
    if (!texto)
      return message.channel.send("Debes hacer una pregunta...");
  let embed = new Discord.MessageEmbed()
.setTitle(":°:∙ : "+user.username+" ha bofeteado "+mencionado.username+" ;-;:°:∙ : ")
.setImage(ran)
.setColor(0xFFFC44)
.setTimestamp()

message.channel.send(embed)
  }
