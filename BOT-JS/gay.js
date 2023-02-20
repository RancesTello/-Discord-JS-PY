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
  .setTitle("❬:｡Calculando √ ❜ ❭")
  .setDescription("↻彡 ■□□□□ :rainbow_flag: 彡↺")
  .setColor(0xff0000);
  
  let embed2 = new Discord.MessageEmbed()
  .setTitle("❬:｡Calculando √ ❜ ❭")
  .setDescription("↻彡 ■■■□□ :rainbow_flag:彡↺")
  .setColor(0xffff00)
  
  let embed3 = new Discord.MessageEmbed()
  .setTitle("❬:｡Calculando √ ❜ ❭")
  .setDescription("↻彡 ■■■■■ :rainbow_flag:彡↺")
  .setColor(0x00ff00)
      
  if(!userm){
    let embed = new Discord.MessageEmbed()
    .setTitle("❬:｡⇨Medidor de gay <a:emoji_39:750752726480322600>√ ❜ ❭")
    .setDescription("↻彡**"+user.username+"** es un **"+ran+"%** gay <a:12:751155356260106381> 彡↺"+heard)
    .setColor(0xFFC7F5);
    
    message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
    
  }else{
    let embed = new Discord.MessageEmbed()
    .setTitle("❬:｡Medidor de gay <a:emoji_39:750752726480322600>√ ❜ ❭")
    .setDescription("↻彡 **"+userm.username+"** es un **"+ran+"%** gay <a:12:751155356260106381> 彡↺"+heard)
    .setColor(0xFFC7F5)
   message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
  }
}
