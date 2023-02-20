module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/osYdfUptPqV0s/giphy.gif","https://media.giphy.com/media/109ltuoSQT212w/giphy.gif","https://media.giphy.com/media/QaSRtblJrevg35U9bn/giphy.gif","https://media.giphy.com/media/Tdvh8VOmDvrmt0IzkX/giphy.gif","https://media.giphy.com/media/RlBxl7wBo58H7yAj1B/giphy.gif","https://media.giphy.com/media/IgSSjQ175o6XKdWFIt/giphy.gif","https://media.giphy.com/media/IdyQ2ihb8SyzDOLJO0/giphy.gif","https://media.giphy.com/media/cmrI108geygNfIzEqN/giphy.gif","https://media.giphy.com/media/UQ7C0mCQgWDS8CaFBn/giphy.gif","https://media.giphy.com/media/KxyirjOVKrTXzrrGGh/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let mencionado = message.mentions.users.first()
let texto = args.slice().join(" ");
    if (!texto)
      return message.channel.send("Debes hacer una pregunta...");
  let embed = new Discord.MessageEmbed()
.setTitle(": ∙:°"+user.username+" Le da caricias a…"+mencionado.username+": ∙:°")
.setImage(ran)
.setColor(0xA9FFF2)
.setTimestamp()

message.channel.send(embed)
  }
