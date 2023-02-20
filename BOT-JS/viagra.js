module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
  let embed = new Discord.MessageEmbed()
  let ran = Math.floor(Math.random() * 100);
  let user = message.author
   let userm = message.mentions.users.first()
  let heard = (" De viagra en el cuerpo");
if (ran < 20){
heard = " De viagra en el cuerpo" 
}else if (ran < 30){
heard = " De viagra en el cuerpo" 
}else if (ran < 40){
heard = " De viagra en el cuerpo" 
}else if (ran < 50){
heard = " De viagra en el cuerpo" 
}else if (ran < 60){
heard = " De viagra en el cuerpo" 
}else if (ran < 70){
heard = " De viagra en el cuerpo" 
}else if (ran < 80){
heard = " De viagra en el cuerpo" 
}else if (ran < 90){
heard = " De viagra en el cuerpo" 
 }else if (ran < 99){
heard = " De viagra en el cuerpo" 
}else if (ran < 100){
heard = " De viagra en el cuerpo" 
}else if (ran < 101){
heard = " De viagra en el cuerpo"}
let embed1 = new Discord.MessageEmbed()
  .setTitle("∙ : 🥵Calculando la temperatura..∙ : ")
  .setDescription("■□□□□")
  .setColor(0xff0000);
  
  let embed2 = new Discord.MessageEmbed()
  .setTitle("∙ : ✋Calculando el pulso..∙ : ")
  .setDescription("■■■□□")
  .setColor(0xffff00)
  
  let embed3 = new Discord.MessageEmbed()
  .setTitle("∙ : 🔬Calculando porcentaje..∙ : ")
  .setDescription("■■■■■")
  .setColor(0x00ff00)
      
  if(!userm){
    let embed = new Discord.MessageEmbed()
    .setTitle("Medidor de viagra")
    .setDescription("∙ : 🥵**"+user.username+"** tiene un "+ran+"% "+heard+"🧐∙ : ")
    .setColor(0xFFC7F5);
    
    message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
    
  }else{
    let embed = new Discord.MessageEmbed()
    .setTitle("Medidor de viagra")
    .setDescription("∙ : 🥵**"+userm.username+"** tiene un "+ran+"% "+heard+"🧐∙ : ")
    .setColor(0xFFC7F5)
   message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
  }
}
