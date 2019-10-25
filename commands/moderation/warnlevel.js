const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports = {
    name: "warnlevel",
    aliases: ["warns"],
    category: "moderation",
    description: "Checks warnings",
    run: async (client, message, args) => {
        let wUser = message.mentions.users.first() || message.guild.members.get(args[0]) || message.author
        
        if(!warns[wUser.id]) warns[wUser.id] = {
            warns: 0
          };
          
          if(!wUser) return message.reply("Couldn't find them yo");
          let warnlevel = warns[wUser.id].warns;
        
          message.channel.send(`<@${wUser.id}> has ${warnlevel} warnings.`);
        
        
    }
}