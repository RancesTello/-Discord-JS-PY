module.exports = (client, message, args) => { 
  let texto = args.slice().join(" ");
    if (!texto) return message.channel.send(`Hola, soy sweet y estoy en desarrollo.`)
  
    message.channel.send(texto, {disableMentions: "everyone"}).then(m => (message.delete()))


 } 