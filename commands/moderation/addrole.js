const Discord = require("discord.js");
module.exports = {
    name: "addrole",
    aliases: ["arole", "giverole", "ar"],
    category: "moderation",
    description: "Gives role to a member",
    run: async (client, message, args) => {
        if(!message.member.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Do u even realise that u dont have perms?")

        let rMember = message.mentions.members.first() || message.guild.members.find(m => m.user.tag === args[0]) || message.guild.members.get(args[0])
        if(!rMember) return message.channel.send("Add a user u nub!")
        let role = message.guild.roles.find(r => r.name.toLowerCase() === args.slice(1).join(" "))
        if(!role) return message.channel.send("Add a role!")

        if(!message.guild.me.hasPermission(["MANAGE_ROLES", "ADMINISTRATOR"])) return message.channel.send("Do u even realise that I don't have perms?").then(msg => msg.delete(5000));

        if(rMember.roles.has(role.id)) {
            return message.channel.send(`${rMember.displayName} already has the role!`)
        } else {
            await rMember.addRole(role.id).catch(e => console.log(e.message))
            message.channel.send(`${role.name} role has been added to ${rMember.displayName}.`)
        }

        let embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setAuthor(`${message.guild.name} logs`, message.guild.iconURL)
        .addField("Moderation:", "Add Role")
        .addField("Role Name:", `${role.name}`)
        .addField("Channel:", message.channel)
        .addField("Added To:", `${rMember.user.username}#${rMember.user.discriminator}`)
        .addField("Moderator:", message.author.username)
        .addField("Date:", message.createdAt.toLocaleString())

        let sChannel = message.guild.channels.find(c => c.name === "📦mod-logs")
        sChannel.send(embed)
    }
}