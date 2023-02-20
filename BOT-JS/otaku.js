module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
  let embed = new Discord.MessageEmbed()
  let ran = Math.floor(Math.random() * 100);
  let user = message.author
  let userm = message.mentions.users.first()
  let heard = ("");
if (ran < 20){
heard = " estas fuera de peligro amigo o amiga"
}else if (ran < 30){
heard = "estas bien pero el anime sigue estando"
}else if (ran < 40){
heard = " estas fuera de peligro pero hay algo que huela mal y parece que no te esta gustando el agua ten cuidado puerco"
}else if (ran < 50){
heard = " nada mal, pero vas por mal camino jaja"
}else if (ran < 60){
heard = " veo que te gusta el anime.. y poco el agua.. no digo mas"
}else if (ran < 70){
heard = " ya tienes algunas cosas de otakus..ese pelo que tienes que parece que no te bañas de hace rato y estas empezando a oler a vaca"
}else if (ran < 80){
heard = " oye…tienes un olor algo fuerte, bañate..cuidado y mueres virgen"
}else if (ran < 90){
heard = " tienes un olor a qlo en esa boca.. cuidado que puede empeorar"
 }else if (ran < 99){
heard = " de tanto ver anime estas oloroso y con los ojos rojos, cuidado y sacas el sharingan y tienes alta posibilidad de morir virgen."
}else if (ran < 100){
heard = " uff estas como gaara de pequeño, tenia la piel de tierra, en este caso mugre y para peor, moriras virgen."
}else if (ran < 101){
heard = " uff estas como gaara de pequeño, tenia la piel de tierra, en este caso mugre y para peor, moriras virgen."}
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
    .setTitle("Medidor de Otakus")
    .setDescription("**"+user.username+"** es un **"+ran+"%** otaku: "+heard)
    .setColor("RANDOM");
    
    message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
    
  }else{
    let embed = new Discord.MessageEmbed()
    .setTitle("Medidor de Otakus")
    .setDescription("**"+userm.username+"** es un **"+ran+"%** otaku: "+heard)
    .setColor("RANDOM")
   message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
  }
}
