module.exports = (client, message, args) => {
  if (!["348608905728884738"].includes(message.author.id)) return message.channel.send('Solo los desarrolladores pueden usar esto :('); //si el autor no es el del id especificado acabará la ejecución del comando
  message.channel.send(
    "Deseas reiniciar la sesion del bot? **[Si/No]**"
  ); 
  message.channel
    .awaitMessages(m => m.author.id == message.author.id, 
    {
      max: 1 
    })
    .then((collected) => { 
      if (collected.first().content.toLowerCase() == "no") { 
        return; 
      } else if (collected.first().content.toLowerCase() == "si") { 
       message.channel.send("Reiniciado correctamente!").then(() => {
        client.destroy(); 
        process.exit(0); 
       })
    }});
} 