const Discord = require("discord.js");
var eco = require('discord-economy')

module.exports = {
    name: "addbalance",
    aliases: ["addcoins", "addbal"],
    category: "economy",
    description: "Adds balance",
    run: async (client, message, args) => {
        if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Permissions?")
        let m = message.mentions.members.first() || message.guild.members.get(args[0])
        eco.AddToBalance(m, toAdd)
        message.channel.send(`You added ${toAdd} to ${m}`);
    }
}