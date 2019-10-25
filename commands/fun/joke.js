const Discord = require("discord.js");
var giveMeAJoke = require('give-me-a-joke');
module.exports = {
    name: "joke",
    category: "fun",
    description: "Random jokes",
    run: async (client, message, args) => {
        var fn = "Jackie";
        var ln = "Chan";
        giveMeAJoke.getCustomJoke (fn, ln, function(joke) {
            
            message.channel.send(joke);
        });
    }
}