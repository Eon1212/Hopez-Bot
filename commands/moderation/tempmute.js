const Discord = require("discord.js");
const ms = require("ms");
module.exports = {
    name: "tempmute",
    aliases: ["tmute"],
    category: "moderation",
    description: "Temporarily mutes a member",
    run: async (client, message, args) => {
        let tomute = message.guild.member(message.mentions.members.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("Couldn't find user.");
        if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Cant mute them!");
        let muterole = message.guild.roles.find(muterole => muterole.name === "muted");
        if(!muterole) {
            try{
               muterole = await message.guild.createRole({
                   name: "muted",
                   color: "#000000",
                   permissions: []
               })
               message.guild.channels.forEach(async (channel, id) => {
                   await channel.overwritePermissions(muterole, {
                       SEND_MESSAGES: false,
                       ADD_REACTIONS: false,
                   });
               });

               
            }catch(e){
                console.log(e.stack);
            }
        }

        let mutetime = args[1];
        if(!mutetime) return message.reply("You have to specify a time");

        await(tomute.addRole(muterole.id));
        message.channel.send(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

        setTimeout(function(){
            tomute.removeRole(muterole.id);
            message.channel.send(`<@${tomute.id}> has been unmuted!`);
        }, ms(mutetime));
    }
}