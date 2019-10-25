const { RichEmbed} = require("discord.js");
const { promptMessage } = require("../../functions.js");
const chooseArr = ["🗻", "📰", "✂"];

module.exports = {
    name: "rps",
    aliases: ["rockpaperscissor"],
    category: "fun",
    description: "Rock, Paper, Scissor game. React to win",
    run: async (client, message, args) => {
        const embed = new RichEmbed()
        .setTitle("Rock, Paper and Scissor!")
        .setColor("#ffffff")
        .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
        .setDescription("React with any of these to play!")
        .setTimestamp();

        const m = await message.channel.send(embed);
        const reacted = await promptMessage(m, message.author, 30, chooseArr)

        const botChoice = chooseArr[Math.floor(Math.random() * chooseArr.length)];

        const result = await getResult(reacted, botChoice);
        await m.clearReactions();

        embed
            .setTitle("Result")
            .setDescription("")
            .addField(result, `${reacted} vs ${botChoice}`);

            m.edit(embed);

        function getResult(me, clientChoosen) {
            if ((me === "🗻" && clientChoosen === "✂") ||
                (me === "📰" && clientChoosen === "🗻") ||
                (me === "✂" && clientChoosen === "📰")) {
                    return "You Won!";
                } else if(me === clientChoosen) {
                    return "It's a tie!";
                } else {
                    return "You lost!";
                }
        }
    }
}