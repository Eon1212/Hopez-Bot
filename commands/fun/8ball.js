const Discord = require("discord.js");

module.exports = {
    name: "8ball",
    category: "fun",
    description: "Returns answer of ur question",
    run: async (client, message, args) => {
        if(!args[2]) return message.reply("Ask a full question dude!")
        let replies = ["Yes.", "No.", "Nope.", "Donno.", "Idk.", "I am busy rn.", "Ask later"]

        let result = Math.floor((Math.random() * replies.length));
        let question = args.join(" ");

        let embed = new Discord.RichEmbed()
        .setAuthor(message.author.tag)
        .setColor("#FF9900")
        .addField("Question", question)
        .addField("Answer", replies[result]);

        message.channel.send(embed);
    }
}