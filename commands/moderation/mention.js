const Discord = require("discord.js");
module.exports = {
    name: "mention",
    aliases: [],
    category: "moderation",
    description: "mentions a role",
    run: async (client, message, args) => {
        message.delete()
        if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Do u even realise that u dont have perms?")
        let role = message.guild.roles.find(r => r.name.toLowerCase() === args.join(" "))
        if(!role) return message.channel.send("Add a role!")
        
        message.channel.send(`${message.author} mentioned ${role}`)
    }
}