module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
  let embed = new Discord.MessageEmbed()
  let ran = Math.floor(Math.random() * 100);
  let user = message.author
  let userm = message.mentions.users.first()
  let heard = ("");
if(ran < 10){
  heard = ""
}else if(ran < 30){
  heard = ""
}else if(ran < 50){
  heard = ""
}else if(ran < 75){
  heard = ""
}else if(ran < 90){
  heard = ""
}else if(ran < 100){
  heard = ""
}
  
  let embed1 = new Discord.MessageEmbed()
  .setTitle("Calculando...")
  .setDescription("■□□□□")
  .setColor(0xff0000);
  
  let embed2 = new Discord.MessageEmbed()
  .setTitle("Calculando...")
  .setDescription("■■■□□")
  .setColor(0xffff00)
  
  let embed3 = new Discord.MessageEmbed()
  .setTitle("Calculando...")
  .setDescription("■■■■■")
  .setColor(0x00ff00)
      
  if(!userm){
    let embed = new Discord.MessageEmbed()
    .setTitle("Medidor de mongolicos")
    .setDescription("**"+user.username+"** es un **"+ran+"%** mongolo"+heard)
    .setColor("RANDOM");
    
    message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
    
  }else{
    let embed = new Discord.MessageEmbed()
    .setTitle("Medidor de mongolicos")
    .setDescription("**"+userm.username+"** es un **"+ran+"%** mongolo."+heard)
    .setColor("RANDOM")
   message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
  }
}
