const Discord = require("discord.js");
var eco = require('discord-economy')

module.exports = {
    name: "balance",
    aliases: ["coins", "bal", "howrich"],
    category: "economy",
    description: "Shows ur bal",
    run: async (client, message, args) => {
        
    var output = await eco.FetchBalance(message.author.id)
    let embed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setAuthor(message.author.tag, message.author.avatarURL)
    .addField("Balance", output.balance)
    .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
    .setTimestamp();
    message.channel.send(embed);
    }
}