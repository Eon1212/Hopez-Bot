const Discord = require("discord.js");
const giveaways = require("discord-giveaway");
const ms = require("ms");
module.exports = {
    name: "giveawayedit",
    aliases: ["gedit"],
    category: "giveaways",
    description: "Deletes a giveaway",
    run: async (client, message, args) => {
        let messageID = args[0];
        giveaways.edit(messageID, {
            newWinnersCount: 3,
            newPrize: "New Prize!",
            addTime: 5000
        }).then(() => {
            message.channel.send("Success! Giveaway updated!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
}