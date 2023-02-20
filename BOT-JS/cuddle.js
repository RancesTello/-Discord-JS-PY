module.exports = (client, message, args) => {  
 const Discord = require('discord.js') 
  let rpts = ["https://media.giphy.com/media/jpWvLoyRh0qEiybuv6/giphy.gif","https://media.giphy.com/media/htvjloWdqaQEYfYrC2/giphy.gif","https://media.giphy.com/media/IbO2jUo7XGT1Rf6jWx/giphy.gif","https://media.giphy.com/media/JoP0OcjqgM0ls2saqL/giphy.gif","https://media.giphy.com/media/QaeaH3NiYJLSusLO4O/giphy.gif","https://media.giphy.com/media/RJt6F0MmnnDS8xi1kO/giphy.gif","https://media.giphy.com/media/UQmyzxUJ9HTmjy6Z4K/giphy.gif","https://media.giphy.com/media/MZe18F03pcNlMklrze/giphy.gif","https://media.giphy.com/media/JSdFAtjbt5QjGhE2PA/giphy.gif","https://media.giphy.com/media/VhVnzSw0o28aQ3OvsG/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
let mencionado = message.mentions.users.first()
   let texto = args.slice().join(" ");
    if (!texto)
      return message.channel.send("Debes hacer una pregunta...");
  let embed = new Discord.MessageEmbed()
.setTitle("∙:◦:"+user.username+" Esta demasiado cerca de"+mencionado.username+" owo∙:◦:")
.setImage(ran).setColor(0x1BFFBA)
.setTimestamp()

message.channel.send(embed)
  }
