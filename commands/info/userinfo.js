const Discord = require("discord.js");
const { RichEmbed } = require("discord.js");
const moment = require("moment");
require("moment-duration-format")

module.exports = {
    name: "userinfo",
    aliases: ["who", "user", "info"],
    description: "Returns user information",
    usage: "[username | id | mention]",
    run: (client, message, args) => {
        let user = m.mentions.users.first() || m.author;

        let userinfo = {}
        userinfo.avatar = user.displayAvatarURL();
        userinfo.name = user.username;
        userinfo.discrim = `#${user.discriminator}`;
        userinfo.id = user.id;
        userinfo.status = user.presence.status;
        userinfo.registered = moment.utc(message.guild.members.get(user.id).user.createdAt).format("dddd, MMMM Do, YYYY");
        userinfo.joined = moment.utc(message.guild.members.get(user.id).user.joinedAt).format("dddd, MMMM Do, YYYY");
                 
        const embed = new Discord.MessageEmbed()
        .setAuthor(user.tag, userinfo.avatar)
        .setThumbnail(userinfo.avatar)
        .addField("Username", userinfo.name, true)
        .addField("Discriminator", userinfo.discrim, true)
        .addField("ID", userinfo.id)
        .addField("Status", userinfo.status, true)
        .addField("Registered", userinfo.registered)
        .addField("Joined", userinfo.joined);

        return message.channel.send(embed)
    }
}