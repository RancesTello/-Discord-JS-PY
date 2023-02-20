module.exports = (client, message, args) => { 
  const Discord = require('discord.js')
  
const YouTube = require('youtube-node');
let youTube = new YouTube();

//Necesita tener una clave para usar la API de YouTube Data API v3
//video tutorial: https://www.youtube.com/watch?v=VxQPG991YUs 

youTube.setKey('AIzaSyC3JHkn7HU5TxsR8XC9ZEXqbSYRaMMfRIY'); //Acá ponen su API-KEY

let nombreyt = args.join(" ") //Definimos: nombreyt
if(!nombreyt) return  message.channel.send('Debe proporcionar algo para buscar'); //Si no tiene un nombre de vídeo en yt, retornar.

message.channel.send(':arrows_counterclockwise: Buscando..!') 
.then(m => {
    youTube.search(args.join(' '), 2, function(err, result){
        if(err){
            return console.log(err); 

        }
        if(result.items[0]["id"].videoId == undefined){
            return message.channel.send('¡No se han encontrado resultados!'); //Si el vídeo no existe, retornar

        } else{
            let link = `https://www.youtube.com/watch?v=${result.items[0]["id"].videoId}`
            m.edit(link); //Editar el mensaje ''Búscando'' por el link del vídeo

        }
    })
})
}