const Discord = require("discord.js");
const randomPuppy = require("random-puppy");

module.exports = {
    name: "meme",
    aliases: ["memes"],
    category: "fun",
    description: "Shows random memes",
    run: async (client, message, args) => {
        const subReddits = ["dankmeme", "meme", "me_irl"];
        const random = subReddits[Math.floor(Math.random() * subReddits.lenght)];

        const img = await randomPuppy(random);
        const embed = new Discord.RichEmbed()
        .setColor("GREEN")
        .setImage(img)
        .setTitle(`From/r/${random}`)
        .setURL(`https://reddit.com/r/${random}`);

        message.channel.send(embed);
    }
}