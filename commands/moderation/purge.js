const Discord = require("discord.js");
module.exports = {
    name: "purge",
    aliases: ["del", "prune", "clear", "delete"],
    category: "moderation",
    description: "Deletes specified messages",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("You need to have MANAGE_MESSAGES permission for that.");
        if (!args[0]) return message.channel.send("Oh god! why me? You need to add the numbers of messages Dumbo!").then(msg => msg.delete(5000));
        message.channel.bulkDelete(args[0]).then(() => {
            message.channel.send(`K, ${args[0]} messages deleted.`).then(msg => msg.delete(5000));
        
        let sChannel = message.guild.channels.find(c => c.name === "📦mod-logs")
        if(!sChannel) return message.channel.send("Couldn't find #📦mod-logs channel")


        const embed = new Discord.RichEmbed()
            .setTitle("Message Deleted")
            .setColor("#17fc03")
            .setTimestamp()
            .setAuthor(`${message.guild.name} logs`, message.guild.iconURL)
            .setFooter(message.guild.name, message.guild.iconURL)
            .addField("Deleted By :", `${message.author} with ID: ${message.author.id}`)
            .addField("In :", `${message.channel}`)
            .addField("Amount :", `${args[0]}`);

            sChannel.send(embed);

        })
    }
}