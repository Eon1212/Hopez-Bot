const Discord = require("discord.js")
module.exports = {
    name: "quote",
    aliases: ["quotes"],
    category: "general",
    description: "Shows quotes",
    run: async (client, message, args) => {
        let replies = ["Look at the sky. We are not alone. The whole universe is friendly to us and conspires only to give the best to those who dream and work. **By - A. P. J. Abdul Kalam**", "Always do your best. What you plant now, you will harvest later. **By -Og Mandino**", "The best way to find yourself is to lose yourself in the service of others. **By - Mahatma Gandhi**", "An investment in knowledge pays the best interest. **By - Benjamin Franklin**", "Good, better, best. Never let it rest. 'Til your good is better and your better is best. **By - St. Jerome**", "Everything you've ever wanted is on the other side of fear. **By - George Addair**", "You cannot tailor-make the situations in life but you can tailor-make the attitudes to fit those situations. **By - Zig Ziglar**"]
        let result = Math.floor((Math.random() * replies.length));

        let embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .setColor("#FF9900")
        .addField("Quote", replies[result])
        .setFooter(message.author.tag, message.author.displayAvatarURL)
        .setTimestamp();

        message.channel.send(embed);
    }
}