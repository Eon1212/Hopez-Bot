const { Client, Collection } = require("discord.js");
const { config } = require("dotenv");
const cathyjs = require("cathyjs");
const prefix = ">";
const serverStats = {
    guildID: '534762874531217419', //Guild ID
    totalUsersID: '623420862846074889', //Total Users : 0
    memberCountID: '623421083592294401', //Member Count : 0
    botCountID: '623421220594909184' //Bot Count: 0
};

const client = new Client({
    disableEveryone: true
})

// Collections
client.commands = new Collection();
client.aliases = new Collection();

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

client.on('guildMemberAdd', member =>{

    if(member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`); //Total
    client.channels.get(serverStats.memberCountID).setName(`Member Count : ${member.guild.members.filter(m => !m.user.bot).size}`); //Member
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`) //Bot
});

client.on('guildMemberRemove', member =>{

    if(member.guild.id !== serverStats.guildID) return;

    client.channels.get(serverStats.totalUsersID).setName(`Total Users : ${member.guild.memberCount}`);
    client.channels.get(serverStats.memberCountID).setName(`Member Count ${member.guild.members.filter(m => !m.user.bot).size}`);
    client.channels.get(serverStats.botCountID).setName(`Bot Count : ${member.guild.members.filter(m => m.user.bot).size}`)
});

client.on("message", async message => {
  

    if (message.author.bot) return;
    if (!message.guild) return;

    let channel = client.channels.get("604663703463395340")
    
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

client.login(process.env.TOKEN);