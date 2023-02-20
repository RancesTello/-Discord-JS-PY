module.exports = (client, message, args) => {  
  const Discord = require('discord.js') 
  let embed = new Discord.MessageEmbed()
  let rpts = ["8D","8=D","8==D","8===D","8====D","8=====D","8=======D","8=========D","8============D","8===============D","8==================D","8====================D","8=======================================D"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let userm = message.mentions.users.first()
  let heard = ("");
if(ran < 10){
  heard = ":face_vomiting:"
}else if(ran < 30){
  heard = "<:ew:724751269553635400>"
}else if(ran < 50){
  heard = "<:smn2:724441384798519308>"
}else if(ran < 75){
  heard = "<:smn:724441410559803503>"
}else if(ran < 90){
  heard = "<:gasm:724747539018154014>"
}else if(ran < 100){
  heard = "<:gasm2:724751211839881259>"
}
  
  let embed1 = new Discord.MessageEmbed()
  .setTitle("Calculando...")
  .setDescription("████▒▒▒▒▒▒")
  .setColor(0xff0000);
  
  let embed2 = new Discord.MessageEmbed()
  .setTitle("Calculando...")
  .setDescription("███████▒▒▒")
  .setColor(0xffff00)
  
  let embed3 = new Discord.MessageEmbed()
  .setTitle("Calculando...")
  .setDescription("██████████")
  .setColor(0x00ff00)
      
  if(!userm){
    
    let embed = new Discord.MessageEmbed()
    .setTitle("Tamaño real de: "+user.username)
    .setDescription("**"+ran+"**")
    .setColor("RANDOM");
    
    message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
    
  }else{
    
     let embed = new Discord.MessageEmbed()
    .setTitle("Tamaño real de: "+userm.username)
    .setDescription("**"+ran+"**")
    .setColor("RANDOM")
   message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
  }
}
  