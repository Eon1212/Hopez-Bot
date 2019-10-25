const Discord = require("discord.js");
var eco = require('discord-economy')

module.exports = {
    name: "coinflip",
    aliases: ["flip"],
    category: "economy",
    description: "Flips coins",
    run: async (client, message, args) => {
        eco.Coinflip(UserID, Flip, Input)
    }
}