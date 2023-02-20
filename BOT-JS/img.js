
module.exports = async (client, message, args) => {
var cheerio = require('cheerio');
const Discord = require('discord.js');
var request = require('request');
  if (!["348608905728884738"].includes(message.author.id)) return message.channel.send('Comando apagado/ en desarrollo! :(');
//Lamamos los modulos que vamos a usar
                      
		var parts = message.content.split(' ');

		var search = parts.slice(1).join(' ');
		if (!search)
			return message.channel.send(
				'Que deseas que busque por ti?'
			);

		var options = {
			url: 'http://results.dogpile.com/serp?qc=images&q=' + search,
			method: 'GET',
			headers: {
				Accept: 'text/html',
				'User-Agent': 'Chrome'
			}
		};

		request(options, function(error, response, responseBody) {
			if (error) {
				return;
			}
			$ = cheerio.load(responseBody);
			var links = $('.image a.link');
			var urls = new Array(links.length)
				.fill(0)
				.map((v, i) => links.eq(i).attr('href'));
//Aqui hacemos el proceso para buscar las url si quieres ver todas escribe console.log(urls) y veras un array con las urls
if (!urls.length) {
				return;
			}
//Ya aca abajo procedemos a crear los mensajes embed
			const embed = new Discord.MessageEmbed()
				.setThumbnail(client.user.avatarURL())
				.setColor('GREEN')
				.setTitle('Búsqueda de imagen')
				.setDescription(
					`**Si quieres descargar la imagen â£ [clickea aqui](${urls[0]})** `
				)
				.setImage(urls[0])
				.setFooter(message.author.username, message.author.displayAvatarURL)
				.setTimestamp();

			const embed1 = new Discord.MessageEmbed()
				.setThumbnail(client.user.avatarURL())
				.setColor('GREEN')
				.setTitle('Búsqueda de imagen')
				.setDescription(
					`**Si quieres descargar la imagen â£ [clickea aqui](${urls[1]})** `
				)
				.setImage(urls[1])
				.setFooter(message.author.username, message.author.displayAvatarURL)
				.setTimestamp();

			const embed2 = new Discord.MessageEmbed()
				.setThumbnail(client.user.avatarURL())
				.setColor('GREEN')
				.setTitle('Búsqueda de imagen')
				.setDescription(
					`**Si quieres descargar la imagen â£ [clickea aqui](${urls[2]})** `
				)
				.setImage(urls[2])
				.setFooter(message.author.username, message.author.displayAvatarURL)
				.setTimestamp();
				
				const embed3 = new Discord.MessageEmbed()
				.setThumbnail(client.user.avatarURL())
				.setColor('GREEN')
				.setTitle('Búsqueda de imagen')
				.setDescription(
					`**Si quieres descargar la imagen â£ [clickea aqui](${urls[3]})**`
				)
				.setImage(urls[3])
				.setFooter(message.author.username, message.author.displayAvatarURL)
				.setTimestamp()
				
				const embed4 = new Discord.MessageEmbed()
				.setThumbnail(client.user.avatarURL())
				.setColor('GREEN')
				.setTitle('Búsqueda de imagen')
				.setDescription(
					`**Si quieres descargar la imagen â£ [clickea aqui](${urls[4]})** `
				)
				.setImage(urls[4])
				.setFooter(message.author.username, message.author.displayAvatarURL)
				.setTimestamp();
				
				const embed5 = new Discord.MessageEmbed()
				.setThumbnail(client.user.avatarURL())
				.setColor('GREEN')
				.setTitle('Búsqueda de imagen')
				.setDescription(
					`**Si quieres descargar la imagen â£ [clickea aqui](${urls[5]})** `
				)
				.setImage(urls[5])
				.setFooter(message.author.username, message.author.displayAvatarURL)
				.setTimestamp();

//Luego empezaremos a agregar las reaccuones que vamos a usar

message.channel.send(embed).then(msg => {
			msg.react("➡️");
			msg.react("➡️");
			msg.react("➡️")
			msg.react("➡️")
			msg.react("➡️")
				
msg.awaitReactions(
						async (reaction, user) => {
							await reaction.users.remove(message.author.id);
//Aqui eliminamos la reaccion del autor para que la vuelva a usar
if (message.author.id !== user.id) return
//Aqui si el autor no reacciona y reacciona otro no hara nada

//Ya procederemos aqui abajo a editar los mensajes por reaccion 

if (reaction.emoji.name === '➡️') {
								msg.edit(embed1);
							}
if (reaction.emoji.name === '➡️') {
								msg.edit(embed2);
							} 
if (reaction.emoji.name === '➡️') {
								msg.edit(embed3);
							}
if (reaction.emoji.name === '➡️') {
								msg.edit(embed4);
							}
if (reaction.emoji.name === '➡️') {
								msg.edit(embed5);
							}
						},
//Si podemos ver ya se vee notorio que si reaccionamos al 5ï¸â£ se editara el mensaje al embed5

//Ya aqui abajo ponemos el tiempo y que sucede si no hay reaccion en ese tiempo 

//Yo lo puse en 1m, puede ser cambiable 
						{
						time: 60000,
					errors: ['time']
						}
					)
					.then(e => {
						if (!e.first()) return msg.edit('No hubo ninguna reacción durante 1 minuto')
					});
			});
		});
}