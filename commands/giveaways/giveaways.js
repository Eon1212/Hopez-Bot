const Discord = require("discord.js");
const giveaways = require("discord-giveaway");
const ms = require("ms");
module.exports = {
    name: "giveaways",
    aliases: [],
    category: "giveaways",
    description: "List of currently running giveaways",
    run: async (client, message, args) => {
        let allGiveaways = giveaways.fetch();
 
    // The list of all the giveaways on the server with ID "1909282092"
    let onServer = allGiveaways.filter((g) => g.guildID === "620573629335339029");
 
    // The list of the current giveaways (not ended)
    let notEnded = allGiveaways.filter((g) => !g.ended);
    }
}