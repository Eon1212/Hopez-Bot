const Discord = require("discord.js");
module.exports = {
    name: "send",
    aliases: ["snd"],
    category: "moderation",
    description: "sends message to any channel",
    run: async (client, message, args) => {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            const channel = message.mentions.channels.first()
            if (!channel) return message.reply("You have to provide a channel!")
            const text = args.join(" ").slice(20)
            channel.send(text);
            
        } else {
            return;
        }
    }
}