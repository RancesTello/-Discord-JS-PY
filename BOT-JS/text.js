const Discord = require('discord.js')
module.exports = async (client, message, args) => {
const figlet = require('figlet');
    if (!args[0]) return message.reply("¿Y el Texto?")
    if (args.join(" ") > 15) message.reply("El texto no puede contener más de 15 Caracteres")
    figlet(args.join(" "), (err, data) => message.channel.send("```" + data + "```"))
}
