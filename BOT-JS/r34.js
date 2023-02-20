//en este caso usaremos el modulo "booru", "npm i --save booru"
module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
const booru = require("booru")
if(!message.channel.nsfw) 
return message.channel.send("lo siento pero este canal no es NSFW")
const tags = args.join(" ") //los tags que buscaremos
if(!tags) return message.channel.send("Dime que deseas buscar en la regla 34.")
booru.search('rule34', [tags], { limit: 3, random: true })//el primero es para buscar en la rule 34, luego se busca con los tags, luego agarramos una sola imagen y que sea una imagen aleatoria
.then(posts => {//el json como toda la informacion
for(let post of posts) {//luego la parte post de posts
const embed = new Discord.MessageEmbed()//creamos el embed
.setColor("#FFC0CB")
.setTitle(`∙ : Resultado de la busqueda: ${tags}∙ : `)
.setImage(post.fileUrl)//fileUrl es el URL directo de la imagen
.setFooter(client.user.username)
message.channel.send({ embed }) //mandamos el embed
 }
 }).catch(e => message.channel.send("**Error**"+e))//un catch por si da error
}
