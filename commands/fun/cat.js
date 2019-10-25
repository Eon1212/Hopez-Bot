const Discord = require("discord.js");
const superagent = require("superagent");

module.exports = {
    name: "cat",
    category: "fun",
    description: "Shows image of cat",
    run: async (client, message, args) => {
        const msg = await message.channel.send("Generating...")
        let {body} = await superagent
        .get(`http://aws.random.cat/meow`);
        if(!{body}) return message.channel.send("Sorry, I broke, try again ")

        let embed = new Discord.RichEmbed()
        .setColor("#ff9900")
        .setTitle("Cat! :cat:")
        .setImage(body.file)
        .setTimestamp();
        msg.channel.send(embed)
        msg.delete();
    }
}