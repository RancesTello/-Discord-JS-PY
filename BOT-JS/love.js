module.exports = (client, message, args) => {
client.on("message", msg => {
  if (!msg.content.startsWith()) return;
  if (msg.author.bot) return;
  if (msg.content.startsWith("lovequiz")) {
   let userm = message.mentions.users.first()

.setTitle("LOVEQUIZ")
.addField("A", msg.author)
.addField("B",  msg.mentions.users.first())
.addField("Porcentaje", `Su amor es de ` + Math.floor(Math.random() * 100) + "%")
.setThumbnail("https://lh3.googleusercontent.com/proxy/DDaNDGF7ZyY6vYrZoOwyHUOh08-UahigHBo2o7SRdHRQ2mzhMxgnTMwKWJ6dH1zjyKae1aRPOxftPhhhLsmvFoTy3QMskMZCkw28NOVoSDTRShrrros");

msg.channel.send()
  }
})}