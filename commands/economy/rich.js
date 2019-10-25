const Discord = require("discord.js");
var eco = require('discord-economy')

module.exports = {
    name: "rich",
    aliases: [],
    category: "economy",
    description: "Riches",
    run: async (client, message, args) => {
        eco.Leaderboard({
            limit: 5, //Only takes top 3 ( Totally Optional )
            filter: x => x.balance > 50 //Only allows people with more than 100 balance ( Totally Optional )
          }).then(async users => { //make sure it is async
     
            if (users[0]) var firstplace = await client.fetchUser(users[0].userid) //Searches for the user object in discord for first place
            if (users[1]) var secondplace = await client.fetchUser(users[1].userid) //Searches for the user object in discord for second place
            if (users[2]) var thirdplace = await client.fetchUser(users[2].userid) //Searches for the user object in discord for third place
            if (users[2]) var fourthplace = await client.fetchUser(users[3].userid)
            if (users[2]) var fifthplace = await client.fetchUser(users[4].userid)

            let embed = new Discord.RichEmbed()
            .setColor("GREEN")
            .setAuthor(message.author.tag, message.author.avatarURL)
            .addField("1.", `${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}`)
            .addField("2.", `${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}`)
            .addField("3.", `${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}`)
            .addField("4.", `${fourthplace && fourthplace.tag || 'Nobody Yet'} : ${users[3] && users[3].balance || 'None'}`)
            .addField("5.",`${fifthplace && fifthplace.tag || 'Nobody Yet'} : ${users[4] && users[4].balance || 'None'}`)
            .setFooter(message.guild.me.displayName, client.user.avatarURL)
            message.channel.send(embed);
    //         message.channel.send(`My leaderboard:
     
    // 1 - ${firstplace && firstplace.tag || 'Nobody Yet'} : ${users[0] && users[0].balance || 'None'}
    // 2 - ${secondplace && secondplace.tag || 'Nobody Yet'} : ${users[1] && users[1].balance || 'None'}
    // 3 - ${thirdplace && thirdplace.tag || 'Nobody Yet'} : ${users[2] && users[2].balance || 'None'}`)
     
          })
    }
}