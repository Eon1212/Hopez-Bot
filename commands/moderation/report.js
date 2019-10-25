  
const { RichEmbed } = require("discord.js");
const Discord = require("discord.js");

module.exports = {
    name: "report",
    category: "moderation",
    description: "Reports a member",
    aliases: ["complain"],
    usage: "<mention, id>",
    run: async (client, message, args) => {
     
        if (message.deletable) message.delete();

       
        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

     
        if (!rMember)
            return message.reply("Couldn't find that person?").then(m => m.delete(5000));

  
        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
            return message.channel.send("Can't report that member").then(m => m.delete(5000));

     
        if (!args[1])
            return message.channel.send("Please provide a reason for the report").then(m => m.delete(5000));
        
        const rChannel = message.guild.channels.find(c => c.name === "❎-reports");
            
    
        if (!rChannel)
            return message.channel.send("Couldn't find a `#❎-reports` channel").then(m => m.delete(5000));

        const embed = new Discord.RichEmbed()
            .setDescription("Report")
            .setColor("#17fc03")
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL)
            .setAuthor("Reported member", rMember.user.displayAvatarURL)
            .addField("Reported Member", `${rMember} ID: ${rMember.id}`)
            .addField("Reported By", `${message.author} with ID: ${message.author.id}`)
            .addField("Channel", `${message.channel}`)
            .addField("Reason", `${args.slice(1).join(" ")}`);

        rChannel.send(embed);
    }
}