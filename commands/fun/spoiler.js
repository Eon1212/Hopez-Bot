const Discord = require("discord.js");

module.exports = {
    name: "spoiler",
    category: "fun",
    description: "Adds spoiler to ur msg",
    run: async (client, message, args) => {
        message.delete()
        let txt = args.join(" ")
        if(!txt) return message.reply("You have to add a text dude!")

        message.channel.send(`||${txt}||`);
    } 
}