const Discord = require("discord.js");
module.exports = {
    name: "avatar",
    category: "general",
    aliases: ["pfp"],
    description: "Returns the Avatar of user",
    run: async (client, message, args) => {
      let waiting = await message.channel.send("loading...").catch(console.error);

      let mentionedUser = message.mentions.users.first() || message.author || message.guild.members.get(args[0])

      let avatarembed = new Discord.RichEmbed()

      .setTitle("Avatar")
      .setColor("RANDOM")
      .setDescription(" ")
      .setImage(mentionedUser.displayAvatarURL)

      waiting.edit(avatarembed).catch(console.error)
    }
}