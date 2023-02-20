module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
  let embed = new Discord.MessageEmbed()
  let ran = Math.floor(Math.random() * 100);
  let user = message.author
  let userm = message.mentions.users.first()
  let heard = ("");
if (ran < 20){
heard = " Estas horrible, con esa cara de milagro pareces un humano y tienes parecido a un homúnculo, no digo mas."
}else if (ran < 30){
heard = " Uff para cuando cirugía plástica? Minimo deberías de estar en alguna asociacion para que te ayude con esa cara que llevas."
}else if (ran < 40){
heard = " Mejorando pero sigues casi igual, asi que esfuérzate un poco y sal menos a la calle porque puedes asustar a los niños. "
}else if (ran < 50){
heard = " Bueno, que quieres que te diga, vas por buen camino y el cuerpo tabla ese que tenias van habiendo montañas."
}else if (ran < 60){
heard = " Oh, no te alegres tanto que solo estas en la mitad en un mas o menos asi que el yisus te dejo un ni pa’´ti ni pa’ mi."
}else if (ran < 70){
heard = " bueno ni tan mal, tienes un % un poquito mayor al mediano, te felicito por ser mas del monton."
}else if (ran < 80){
heard = " Mira ese potencial, estuviste cerca de llegar a un 80% o mas, eso ya tiene merito, cuidado con los chicos."
}else if (ran < 90){
heard = " Oye oye a ti no te diran jibril? Porque siento que un angel me acaba de caer del cielo >//<"
 }else if (ran < 99){
heard = " Nada que decir la verdad, tienes de todo y solo toca a esperar que se filtra por las redes 7u7."
}else if (ran < 100){
heard = " Ohh, estas a la altura de una rem, bien suculenta y popular, cuando quieras me pasas tu numero *guiño guiño*."
}else if (ran < 101){
heard = " Ohh, estas a la altura de una rem, bien suculenta y popular, la diosa entre diosas de las waifus y cuando quieras me pasas tu numero *guiño guiño*."}
  let embed1 = new Discord.MessageEmbed()
  .setTitle("⇉ [Calculando <a:emoji_39:750752705483636916>]⇆")
  .setDescription(" ˗ˏˋ■□□□□ <a:11:751155324865740845>ˎˊ˗")
  .setColor(0xff0000);
  
  let embed2 = new Discord.MessageEmbed()
  .setTitle("⇉ [Calculando <a:emoji_39:750752705483636916>]⇆")
  .setDescription(" ˗ˏˋ■■■□□ <a:11:751155324865740845>ˎˊ˗")
  .setColor(0xffff00)
  
  let embed3 = new Discord.MessageEmbed()
  .setTitle("⇉ [Calculando <a:emoji_39:750752705483636916>]⇆")
  .setDescription(" ˗ˏˋ■■■■■ <a:11:751155324865740845>ˎˊ˗")
  .setColor(0x00ff00)
      
  if(!userm){
    let embed = new Discord.MessageEmbed()
    .setTitle("⇉[Medidor de waifus <a:emoji_39:750752726480322600>]⇆")
    .setDescription(" ˗ˏˋ<a:14:751155419296038933> **"+user.username+"** es un **"+ran+"%** waifu: "+heard+" <a:13:751155386614284298>ˎˊ˗")
    .setColor(0xFFC7F5);
    
    message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
    
  }else{
    let embed = new Discord.MessageEmbed()
    .setTitle("⇉ [Medidor de waifus <a:emoji_39:750752726480322600>]⇆ ˎˊ˗")
    .setDescription(" ˗ˏˋ<a:14:751155419296038933> **"+userm.username+"** es un **"+ran+"%** waifu: "+heard+" <a:13:751155386614284298>ˎˊ˗")
    .setColor(0xFFC7F5)
   message.channel.send(embed1)
    .then(m => {
      setTimeout(function(){m.edit(embed2)}, 950)
      setTimeout(function(){m.edit(embed3)}, 2100)
     setTimeout(function(){m.edit(embed)}, 3050)})
  }
}
