const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "dog",
    aliases: ["doggo"],
    category: "fun",
    description: "Shows image of dog",
    run: async (client, message, args) => {
        let {body} = await superagent
        .get(`https://random.dog/woof.json`);
        if(!{body}) return message.channel.send("Sorry, I broke, try again ")

        const msg = await message.channel.send("Generating...")

        let embed = new Discord.RichEmbed()
        .setColor("#ff9900")
        .setTitle("Doggo! :dog:")
        .setImage(body.url)
        .setTimestamp();
        message.channel.send(embed)
        msg.delete();
    }
}