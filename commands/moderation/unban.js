const Discord = require("discord.js");
module.exports = {
    name: "unban",
    category: "moderation",
    description: "Unbans a member",
    run: async (client, message, args) => {
        if(!message.member.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("You dont have perms for the Command")

        let bannedMember = await bot.fetchUser(args[0])
            if(!bannedMember) return message.channel.send("Provide a user ID to Unban!")

        let reason = args.slice(1).join(" ")
            if(!reason) reason = "No reason given!"

        if(!message.guild.me.hasPermission(["BAN_MEMBERS", "ADMINISTRATOR"])) return message.channel.send("I dont have perms for the Command")
        message.delete()
        try {
            message.guild.unban(bannedMember, {reason: reason})
            message.channel.send(`${bannedMember.tag} has been unbanned from ${message.guild.name}`)
        } catch(e) {
            console.log(e.message)
        }

        let embed = new Discord.RichEmbed()
        .setTitle("Logs")
        .setColor("GREEN")
        .setAuthor(`${message.guild.name} logs`, message.guild.iconURL)
        .addField("Moderation:", "Unban")
        .addField("Unbanned Member:", `${bannedMember.user.username}#${bannedMember.user.discriminator}`)
        .addField("Moderator:", message.author.username)
        .addField("Reason:", reason)
        .addField("Date:", message.createdAt.toLocaleString())
        .setFooter(message.author.tag, message.author.avatarURL)

        let sChannel = message.guild.channels.find(c => c.name === "📦mod-logs")
        sChannel.send(embed);

    }
}