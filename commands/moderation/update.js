const Discord = require("discord.js");
module.exports = {
    name: "update",
    aliases: ["changes"],
    category: "moderation",
    description: "shows what updated in channel or bot",
    run: async (client, message, args) => {
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("You dont have perms for that!")
        const sChannel = message.guild.channels.find(c => c.name === "📩-updates")
        if(!sChannel) return message.channel.send("Couldn't find #📩-updates channel")
        let txt = args.join(" ")
        if(!txt) return message.channel.send("Add a text!")

        const embed = new Discord.RichEmbed()
        .setTitle("Updates")
        .addField("Changes!", txt)
        .addField("Date", message.createdAt.toLocaleString())

        sChannel.send(embed);
    }
}