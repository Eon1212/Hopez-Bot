const Discord = require("discord.js");
var eco = require('discord-economy')

module.exports = {
    name: "transfer",
    aliases: ["give", "pay", "gib"],
    category: "economy",
    description: "Gives ur coin to someone else",
    run: async (client, message, args) => {
        var user = message.mentions.users.first()
        var amount = args[1]
     
        if (!user) return message.reply('Reply the user you want to send money to!')
        if (!amount) return message.reply('Specify the amount you want to pay!')
     
        var output = await eco.FetchBalance(message.author.id)
        if (output.balance < amount) return message.reply('You have fewer coins than the amount you want to transfer!')
        var transfer = await eco.Transfer(message.author.id, user.id, amount)
        let embed = new Discord.RichEmbed()
        .setColor("YELLOW")
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setFooter(message.guild.me.displayName, client.user.displayAvatarURL)
        .addField("To", user.tag)
        .addField("Amount", transfer.FromUser)
        .setTimestamp();
        
        message.channel.send(embed);
      
    }
}