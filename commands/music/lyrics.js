const Discord = require("discord.js");
var fetch = require("node-fetch")

module.exports = {
    name: "lyrics",
    aliases: [],
    category: "music",
    description: "Shows lyrics of a song",
    run: async (client, message, args) => {
        let song = args.join(" ")
        fetch(`https://theweirdapi.glitch.me/api/lyrics?song= + ${song}`)
        .then(res => res.json())
        .then(json => message.channel.send(json.lyrics));
    }
}