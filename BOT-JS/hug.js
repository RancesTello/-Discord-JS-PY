const Discord = require('discord.js')
module.exports = async (client, message, args) => {
  const nekos = require("nekos.life");
    const neko = new nekos();
  let embed = new Discord.MessageEmbed()
  let aA = message.author
  let aB = message.mentions.users.first()
  if(!aB){return message.channel.send("Debes mencionar a alguien...")}
  if(aA.id == aB.id){return message.channel.send("No puedes abrazarte a ti mismo, menciona  a alguien...")}
let imagen = await neko.sfw.hug().then(image => {
        const embed = new Discord.MessageEmbed()
          .setDescription("**"+aA.username+"** abraza con amor a **"+aB.username+"**")
          .setImage(image.url)
          .setColor("RANDOM")
        .setFooter(client.user.username)
        .setTimestamp();
      
  let embed2 = new Discord.MessageEmbed()
  let rpts2 = ["https://media.giphy.com/media/Wp1RfL491WmrK1L5IG/giphy.gif","https://media.giphy.com/media/jQPswEkwBe4aohLOsq/giphy.gif","https://media.giphy.com/media/ftwMvWJCx7ZtOUujZF/giphy.gif","https://media.giphy.com/media/kgV11PFxtrsdX50MmC/giphy.gif","https://media.giphy.com/media/VIiREncJZKSpLmSmaJ/giphy.gif","https://media.giphy.com/media/kHCyjftZr1hTkj7Yiz/giphy.gif","https://media.giphy.com/media/LOtlMYOAOYt1O4XCL5/giphy.gif","https://media.giphy.com/media/cKyb5EGTb7gilVxZm0/giphy.gif"];
  let ran2 = rpts2[Math.floor(rpts2.length * Math.random())];
  let user = message.author
 let mencionado = message.mentions.users.first()
   let texto = args.slice().join(" ");
    if (!texto)
      return message.channel.send("Debes hacer una pregunta..")
.setTitle(":°:∙ : "+user.username+" Le da un caluroso abrazo a "+mencionado.username+":°:∙ : ")
.setImage(ran2)
.setColor(0x24FF5B)
  .setFooter(client.user.username)
.setTimestamp()

message.channel.send(embed);
      })
}