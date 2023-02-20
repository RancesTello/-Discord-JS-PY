// No soy muy bueno explicando xd, no hagan C&P

const Discord = require('discord.js')
module.exports = async (client, message, args) => {

          let user = message.mentions.members.first() || message.guild.members.cache.get(args[0])
            let role = message.mentions.roles.first() || message.guild.roles.cache.find(r => r.id == args[1])

            let owner = message.guild.owner.user.id;
           

            if (message.author == owner) { // Esto sirve para que si el dueño del servidor usa el comando no le pida permisos y pueda agregar role a cualquier persona, No lo explico porque es lo que verán abajo.

                if (!args[0]) return message.channel.send("Debes mencionar a un usuario.")
                if (!user) return message.channel.send("Debes mencionar a un usuario válido.")
        
                if (!args[1]) return message.channel.send("Debes mencionar un rol.")
                if (!role) return message.channel.send("Debes mencionar un rol válido.")
        
                if (!role.editable) return message.channel.send("Rol mas alto que el mio")
                if (user.roles.cache.has(role.id)) return message.channel.send("Ese usuario ya cuenta con ese rol")
        
                await user.roles.add(role.id)
                return message.channel.send(`El rol ${role.name} ha sido agregado correctamente al usuario ${user}`)
            }


    if(!message.member.hasPermission("MANAGE_ROLES", "ADMINISTRADOR")) return message.channel.send("No tienes permisos para utilizar este comando") // Si el usuario no tiene permiso de getionar roles o de administrador devuelve ese mensaje.
    if(!message.guild.me.hasPermission("MANAGE_ROLES", "ADMINISTRADOR")) return message.channel.send("El bot necesita permiso de gestionar roles") // Si el bot no tiene permiso de gestionar roles o de administrador devuelve ese mensaje
    

    if (!args[0]) return message.channel.send("Debes mencionar a un usuario.") // Si no ha mencionado a nadie devuelve ese mensaje.
    if (!user) return message.channel.send("Debes mencionar a un usuario válido.") // Si el usuario que menciono no existe devuelve ese mensaje.
    if (user == owner) return message.channel.send("No puedes añadir roles a ese usuario") // Si el usuario mencionado es el dueño del servidor devuelve ese mansaje
    
    if (user == message.author.id) { // Si el usuario mencionado es el autor del mensaje puede añadirse un rol no igual o mas alto que el suyo, tampoco lo explico por que es lo mismo de abajo

        if (!args[1]) return message.channel.send("Debes mencionar un rol.")
        if (!role) return message.channel.send("Debes mencionar un rol válido")
        if (role.comparePositionTo(message.member.roles.highest) >= 0) return message.channel.send("No puedes añadir un rol igual o superior al tuyo.")
    
        if (!role.editable) return message.channel.send("Rol mas alto que el mio")
        if (user.roles.cache.has(role.id)) return message.channel.send("Ya cuentas con ese rol")

        await user.roles.add(role.id)
        return message.channel.send(`**${user}** se ha añadido el rol ${role}`)

    }


    if (message.member.roles.highest.comparePositionTo(user.roles.highest) <= 0)  return message.channel.send("No puedes añadir roles a ese usuario, puede que tenga un rol igual o superior al tuyo.") // Si el usuario mencionado tiene un rol igual o superior al del autor del mansaje devuelve esto 
    
    
    if (!args[1]) return message.channel.send("Debes mencionar un rol.") // Si no menciono un rol devuelve ese mansaje
    if (!role) return message.channel.send("Debes mencionar un rol válido") // Si el rol que menciono no existe devuelve ese mensaje
    if (role.comparePositionTo(message.member.roles.highest) >= 0) return message.channel.send("No puedes añadir un rol igual o superior al tuyo.") // Si el rol mencionado es igual o superior al del autor del mensaje devuelve esto
    
    
    if (!role.editable) return message.channel.send("Rol mas alto que el mio") // Si el rol que menciono es mas alto que el del bot devuelve ese mansaje  
    if (user.roles.cache.has(role.id)) return message.channel.send("Ese usuario ya cuenta con ese rol") // Si el usuario mencionado ya tiene ese rol devuelve ese mansaje
    
    await user.roles.add(role.id) // Agrega el rol mencionado al usuario mencionado
    return message.channel.send(`El rol **${role.name}** ha sido agregado correctamente al usuario **${message.member.displayName}** | Dado por: **${message.member.displayName}**`) // Envía un mensaje al canal diciendo que le agrego un rol al usuario mencionado, pueden poner un embed si quieren que sea vea mas bonito :)
    
    }
    
    // Si les sirvió dejen un like :), Si tienen una duda envíenme un mensaje directo a mi discord [Panda]#6839 