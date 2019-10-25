const Discord = require("discord.js");
const emoji = require("discord-emoji-convert");
module.exports = {
    name: "emojify",
    category: "fun",
    description: "Just see the magic",
    run: async (client, message, args) => {
        let txt = args.join(" ")
        if(!txt) return message.channel.send("Add text!")

        message.channel.send(emoji.convert(txt))
    }
}