module.exports = (client, message, args) => { 
  const Discord = require('discord.js') 
if (!["348608905728884738"].includes(message.author.id)) return message.channel.send('Solo los desarrolladores pueden usar esto :(');

let limit = 1012;
    try {
      let code = args.join(' ');
      let evalued = eval(code);
     if (typeof evalued !== "string"){
       evalued = require("util").inspect(evalued);}
      let txt = "" + evalued;
      if (txt.length > limit) {
        const embed = new Discord.MessageEmbed()
        .setAuthor("Evaluacion hecha!", client.user.displayAvatarURL)
        .addField("Entrada", `\`\`\`js\n${args}\n\`\`\``)
        .addField("Salida", `\`\`\`js\n ${txt.slice(0, limit)}\n\`\`\``)
        .setColor("RANDOM")
        .setFooter("Pedido por: "+message.author.tag)
        message.channel.send(embed);
      } else
        var embed = new Discord.MessageEmbed()
        .setAuthor("Evaluacion hecha!", client.user.displayAvatarURL)
        .addField("Entrada", `\`\`\`js\n${args}\n\`\`\``)
        .addField("Salida", `\`\`\`js\n ${txt}\n\`\`\``)
        .setColor("RANDOM")
        .setFooter("Pedido por: "+message.author.tag)
        message.channel.send(embed);
    } catch (err) {
      const embed = new Discord.MessageEmbed()
      .setAuthor("Falla en la evaluacion D:", client.user.displayAvatarURL)
      .addField("Entrada", `\`\`\`js\n${args}\n\`\`\``)
      .addField("Salida", `\`\`\`js\n${err}\n\`\`\``)
      .setColor("RANDOM")
      .setFooter("Pedido por: "+message.author.tag)
      message.channel.send(embed);
  }
  }
