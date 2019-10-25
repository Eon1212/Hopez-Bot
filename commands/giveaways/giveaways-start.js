const Discord = require("discord.js");
const giveaways = require("discord-giveaway");
const ms = require("ms");
module.exports = {
    name: "giveawaystart",
    aliases: ["gstart"],
    category: "giveaways",
    description: "Starts a giveaway",
    run: async (client, message, args) => {
        
        giveaways.start(message.channel, {
            time: ms(args[0]),
            prize: args.slice(2).join(" "),
            winnersCount: parseInt(args[1])
        }).then((gData) => {
            console.log(gData); // {...} (messageid, end date and more)
        });
        // And the giveaway is started!
    
    }
}