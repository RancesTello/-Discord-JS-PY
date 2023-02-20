module.exports = (client, message, args) => {  
const Discord = require('discord.js')
let rpts = ["https://media.giphy.com/media/lQJE845xiZqaEoEYek/giphy.gif","https://media.giphy.com/media/JpMCj8VXW36mn8isnf/giphy.gif","https://media.giphy.com/media/KzE8tNbv6X0HrSFNVx/giphy.gif","https://media.giphy.com/media/U1UCbtFEWm2QVVag8W/giphy.gif","https://media.giphy.com/media/m9jceSXyYMUupDzxPu/giphy.gif","https://media.giphy.com/media/Z9hzA8SNE9GDkOdczp/giphy.gif","https://media.giphy.com/media/J21cooa0fWOKfc27OR/giphy.gif","https://media.giphy.com/media/JQ3T0h5wLQcEiHqyqI/giphy.gif","https://media.giphy.com/media/Qy8NM2qFQADxUWtgql/giphy.gif","https://media.giphy.com/media/McOAlREhvziVAJp1pG/giphy.gif"];
  let ran = rpts[Math.floor(rpts.length * Math.random())];
  let user = message.author
  let embed = new Discord.MessageEmbed()
.setTitle(":ﾟ:*•: "+user.username+"  activó su modo Yandere.:ﾟ:*•:")
.setImage(ran)
.setColor(0xFF27BE)
.setTimestamp()

message.channel.send(embed)
  }
