module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
  let rpts = ["Sí! :)","No... :c","Posiblemente sí","No estoy muy segura...","Yo creo que no...","¿En serio lo dudas?","Claramente!","De momento diré que no, aunque puede cambiar...","Solo el destino lo sabe...","Mucho texto","Poco ácido fólico","No lo sé","Será mejor que no responda...","¿Qué tipo de pregunta es esa?","poco azucar..","mejor ire a ver hentai.","demasiado tiempo libre tienes.","yo solo se que, no a las drogas","necesitas tomar mas awa..","mira lo que haces y encontraras tu respuesta..", "Abduzkan","Que gracioso eres","No seras tu, don comedia?", "Mejor voy llamando a la poli","Muy buena pregunta doroty","Ni badabun hacia esas preguntas","El yaoi es bueno, no se que tiene que ver pero bueno","igual si o igual no","Quien sabe","El yisus puede saber la respuesta, reza","que dice tu corazon","por puto","quien sabe","no, las drogas son malas","poco sal","no mires detrás tuyo","Moises separa las aguas, yo separo cabezas"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
   let texto = args.slice().join(" ");
    if (!texto)
      return message.channel.send("Debes hacer una pregunta...");
  let embed = new Discord.MessageEmbed()
  .setTitle("🎱 8 ball")
  .addField(user.username+" preguntó:", texto)
  .addField("Mi respuesta es:",ran)
  .setColor(0xcf70cf)
  message.channel.send(embed)
}