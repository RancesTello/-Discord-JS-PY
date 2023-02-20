module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
  let ran = Math.floor(Math.random() * 60);
let userm = message.mentions.users.first() || message.author
 let embed = new Discord.MessageEmbed()
  let heard = ("");
if (ran < 10){
heard = `. 　　　。　　　　•　 　ﾟ　　。 　　.
　　　.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　 :  <a:1_:757092969672212480> 。 . 　　 • 　　　　•
　　ﾟ　　 `+userm.username+` Era el impostor.　 。　.
　　'　　　 1 Impostor restante 　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`
}else if (ran < 20){
heard = `. 　　　。　　　　•　 　ﾟ　　。 　　.
　　　.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 <:2_:757093083119878154> 。 . 　　 • 　　　　•
　　ﾟ　　 `+userm.username+` Era el impostor.　 。　.
　　'　　　 1 Impostor restante 　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`
}else if (ran < 30){
  heard = `. 　　　。　　　　•　 　ﾟ　　。 　　.
　　　.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 <:3_:757093117131489281> 。 . 　　 • 　　　　•
　　ﾟ　　 `+userm.username+` No era el impostor.　 。　.
　　'　　　 2 Impostores restantes 　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`
  }else if (ran < 40){
  heard = `. 　　　。　　　　•　 　ﾟ　　。 　　.
　　　.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 <:4_:757093146462126171> 。 . 　　 • 　　　　•
　　ﾟ　　 `+userm.username+` No era el impostor.　 。　.
　　'　　　 2 Impostores restantes 　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`
  }else if (ran < 50){
  heard = `. 　　　。　　　　•　 　ﾟ　　。 　　.
　　　.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 <a:5_:757093178091241562> 。 . 　　 • 　　　　•
　　ﾟ　　 `+userm.username+` No era el impostor.　 。　.
　　'　　　 2 Impostores restantes 　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`
  }else if (ran < 60){
    heard = `. 　　　。　　　　•　 　ﾟ　　。 　　.
　　　.　　　 　　.　　　　　。　　 。　. 　
.　　 。　　　　　 <a:7_:757093269493645473><a:6_:757093237998747800> 。 . 　　 • 　　　　•
　　ﾟ　　 `+userm.username+` Era el impostor.　 。　.
　　'　　　 1 Impostor restante 　 　　。
　　ﾟ　　　.　　　. ,　　　　.　 .`}
 if(!userm){
    let embed = new Discord.MessageEmbed()
    .setTitle("")
    .setDescription(""+heard+"")
    .setColor(0x363a3d);
  
   message.channel.send(embed)
   message.delete()
  }else{
    let embed = new Discord.MessageEmbed()
    .setTitle("")
    .setDescription(""+heard+"")
    .setColor(0x363a3d)
   message.channel.send(embed)
    message.delete()
 }} 