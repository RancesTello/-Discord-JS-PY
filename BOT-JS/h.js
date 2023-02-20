module.exports = (client, message, args) => {  
const Discord = require('discord.js') 
const embed = new Discord.MessageEmbed()//Defines el embed principal
.setTitle('<a:emoji_65:764718307529588786> ☁︎ ♡ 𝕂𝕚𝕞𝕓 ♡︎ ☁︎︎ <a:emoji_65:764718307529588786>', 'Embed Modificable ')
.addField('₊˚˗ˏˋComandos Aˎˊ˗˚₊┄┄┈┄┄┈┄┄ · ·✧❊<a:emoji_62:764718151920255007>', '₊`hug` `cuddle` `Kiss` `kill` `kick` `flushed` `pat` `poke` `slap` ₊`feed` `lick` `punch` `claps` `dance` `sad` `confused` `happy` ₊`smug` `hi` `flushed` `sleep` `think` `bored` `baka` `tickle` ╰┄┄┈┄┄┄┈┄┄┄┄┈┄┄┄┈ · ·✧❊ <:emoji_56:764717887725371423>')
.setFooter("˗ˏˋ╰"+client.user.username+"╮ˎˊ˗")
.setColor(0xFFC7F5)
const dosembed = new Discord.MessageEmbed()//Defines el embed del 1º emoji
.setTitle('<a:emoji_65:764718307529588786> ☁︎ ♡ 𝕂𝕚𝕞𝕓 ♡︎ ☁︎︎ <a:emoji_65:764718307529588786>','Embed modificable')
.addField('₊˚˗ˏˋComandos Bˎˊ˗˚₊┄┄┈┄┄┈┄┄┈ · ·✧❊<a:emoji_62:764718151920255007>', '₊`8Ball`  `otaku`  `gay` `waifu`  `virgen` `mongol` `yegua` ₊`viagra`  `simp` `wiki` `yt` `av` `neko` `cat` `lizard` `fox` `holo` ₊`woof` `wallpaper` `goose` `waifuw` `joto` `fiel` ╰┄┄┈┄┄┄┈┄┄┄┄┈┄┄┄┈ · ·✧❊ <:emoji_56:764717887725371423>')
  .setFooter("˗ˏˋ╰"+client.user.username+"╮ˎˊ˗")
.setColor(0xFFC7F5)
const tresembed = new Discord.MessageEmbed()//Defines el embed del 2º emoji
.setTitle('<a:emoji_65:764718307529588786> ☁︎ ♡ 𝕂𝕚𝕞𝕓 ♡︎ ☁︎︎ <a:emoji_65:764718307529588786>', 'Embed modificable')
.addField('₊˚˗ˏˋInvitacíonˎˊ˗˚₊┄┄┈ · ·✧❊', "<a:emoji_59:764718027101962247> ♡°┇[＞Invitame!＜](https://discordapp.com/oauth2/authorize?client_id=728300414361010267&scope=bot&permissions=806364350)┇°♡<a:emoji_62:764718151920255007>")
.setColor(0xFFC7F5)
message.channel.send(embed).then(msg => { //Las reacciones
    msg.react('1️⃣') 
    msg.react('2️⃣')
    msg.react('3️⃣') 
    msg.awaitReactions((reaction, user) => { //Lo que hara el primer emoji afectara al primer embed
        if (message.author.id !== user.id) return; 
        if (reaction.emoji.name === '1️⃣') { 
            msg.edit(embed)
        }
        if (reaction.emoji.name === '2️⃣') { //Lo que hara el segundo emoji afectara al segundo embed
            msg.edit(dosembed)
        }
    if (reaction.emoji.name === '3️⃣') {//El tercer emoji afectara al tercer embed
      msg.edit(tresembed)
}

    })
});

}