const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));
module.exports = {
    name: "warn",
    category: "moderation",
    description: "Warns a Member",
    run: async (client, message, args) => {
      if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply("No can do pal!");
      let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
      if(!wUser) return message.reply("Couldn't find them yo");
      if(!wUser.hasPermission("MANAGE_MESSAGES")) return message.reply("They waaaay too kewl");
      let reason = args.slice(1).join(" ");
      if(!reason) return message.reply("You have to add a reason!")
    
      if(!warns[wUser.id]) warns[wUser.id] = {
        warns: 0
      };
    
      warns[wUser.id].warns++;
    
      fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
        if (err) console.log(err)
      });
    
      let warnEmbed = new Discord.RichEmbed()
      .setDescription("Warns")
      .setAuthor(message.author.username)
      .setColor("#fc6400")
      .addField("Warned User", `<@${wUser.id}>`)
      .addField("Warned In", message.channel)
      .addField("Number of Warnings", warns[wUser.id].warns)
      .addField("Reason", reason);
    
      let warnchannel = message.guild.channels.find(c => c.name === "📦mod-logs");
      if(!warnchannel) return message.reply("Couldn't find channel");
    
      warnchannel.send(warnEmbed);
    
      if(warns[wUser.id].warns == 2){
        let muterole = message.guild.roles.find(muterole => muterole.name === "muted");
        if(!muterole) return message.reply("You should create that role dude.");
    
        let mutetime = "30m";
        await(wUser.addRole(muterole.id));
        message.channel.send(`<@${wUser.id}> has been temporarily muted`);
    
        setTimeout(function(){
          wUser.removeRole(muterole.id)
          message.reply(`<@${wUser.id}> has been unmuted.`)
        }, ms(mutetime))
      }
      if(warns[wUser.id].warns == 3){
        let muterole = message.guild.roles.find(muterole => muterole.name === "muted");
        if(!muterole) return message.reply("You should create that role dude.");
    
        let mutetime = "1d";
        await(wUser.addRole(muterole.id));
        message.channel.send(`<@${wUser.id}> has been temporarily muted`);
      }
      if(warns[wUser.id].warns == 4){
        message.guild.member(wUser).kick(reason);
        message.channel.send(`<@${wUser.id}> has been kicked.`)
      }
      if(warns[wUser.id].warns == 5){
        message.guild.member(wUser).ban(reason);
        message.reply(`<@${wUser.id}> has been kicked`)
      }
    
    }
}