const Discord = require("discord.js");
module.exports = {
    name: "suggest",
    aliases: [""],
    category: "moderation",
    description: "Records suggestion of a member",
    run: async (client, message, args) => {
        let txt = args.join(" ")
        if(!txt) return message.channel.send("Suggest something!")

        let sChannel = message.guild.channels.find(c => c.name === "❓suggestions")
        if(!sChannel) return message.channel.send("Couldn't find #❓suggestions channel!")

        const embed = new Discord.RichEmbed()
        .setTitle("Suggestion")
        .setColor("GREEN")
        .setFooter(message.guild.name, message.guild.iconURL)
        .setAuthor("Suggested Member", message.author.displayAvatarURL)
        .addField("Suggested By:", `${message.author.username}#${message.author.discriminator}`)
        .addField("Suggestion:", `${txt}`)
        .addField("Time:", message.createdAt.toLocaleString())

        sChannel.send(embed).then(message.channel.send("Your suggestion is recorded!"))
    }
}