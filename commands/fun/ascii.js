const Discord = require("discord.js");
const ascii = require("ascii-art");
module.exports = {
    name: "ascii",
    category: "fun",
    description: "Converts text to ascii",
    run: async (client, message, args) => {
        if(!args.join(" ")) return message.reply("Please add a text!");

        ascii.font(args.join(" "), "Doom", async txt => {
            message.channel.send(txt, {
                code: "md"
            });
        });
    }
}