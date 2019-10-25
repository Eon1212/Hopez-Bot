const Discord = require("discord.js");
const giveaways = require("discord-giveaway");
const ms = require("ms");
module.exports = {
    name: "reroll",
    aliases: ["greroll"],
    category: "giveaways",
    description: "Rerolls a giveaway",
    run: async (client, message, args) => {
        let messageID = args[0];
        giveaways.reroll(messageID).then(() => {
            console.log("Success! Giveaway rerolled!");
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
        giveaways.reroll(messageID, {
            congrat: ":tada: New winner(s) : {winners}! Congratulations!",
            error: "No valid participations, no winners can be chosen!"
        }).catch((err) => {
            message.channel.send("No giveaway found for "+messageID+", please check and try again");
        });
    }
}