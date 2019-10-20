const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const Discord = require("discord.js");
const giveaways = require("discord-giveaway");
const cathyjs = require("cathyjs");

const client = new Client({
    disableEveryone: true
})


const fs = require("fs");
const prefix = ">";
let coins = require("./coins.json");

// Collections
client.commands = new Collection();
client.aliases = new Collection();
client.categories = fs.readdirSync("./commands/");

config({
    path: __dirname + "/.env"
});

// Run the command loader
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.on("ready", () => {
    console.log(`${client.user.username} is now online!`);

    client.user.setPresence({
        status: "dnd",
        game: {
            name: "me getting developed",
            type: "WATCHING"
        }
    }); 
})

client.on("channelCreate", async channel => {
    console.log(`${channel.name} has been created`)

    let sCHannel = message.guild.channels.find(c => c.name === "logs")
    
    const embed = new Discord.RichEmbed
    .setColor("GREEN")
    .setTimestamps()
    .setAuthor(message.guild.iconURL)
    .addField(`${channel} has been created`);

    sCHannel.send(embed)
})
giveaways.launch(client, {
    updateCountdownEvery: 7000,
    botsCanWin: false,
    embedColor: "#FF0000",
    reaction: "🎉",
    storage: "./giveaways.json"
});
client.on("message", async message => {
  

    if (message.author.bot) return;
    if (!message.guild) return;
  
    let channel = client.channels.get("633540568034705429")
    
    if (message.channel.id == channel.id) {
 
        let text = message.content
        channel.startTyping();
    
        var reply = await cathyjs.startChatting(`${text}`);
    
    
        channel.send(`${message.author}, ${reply}`);
        message.channel.stopTyping();
    } 

    if (!message.content.startsWith(prefix)) return;
    

    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);

        
});

client.on("channelCreate", async channel => {
    console.log(`${channel.name} has been created`)

    let sCHannel = message.guild.channels.find(c => c.name === "logs")
    
    const embed = new Discord.RichEmbed
    .setColor("GREEN")
    .setTimestamps()
    .setAuthor(message.guild.iconURL)
    .addField(`${channel} has been created`);

    sCHannel.send(embed)
})

client.login(process.env.TOKEN);