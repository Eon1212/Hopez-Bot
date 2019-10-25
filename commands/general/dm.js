module.exports = {
    name: "dm",
    category: "general",
    description: "Sends a DM message to any user",
    run: async (client, message, args) => {

        let mUser = message.mentions.members.first() || message.user.get(args[0])
        if(!mUser) return message.channel.send("Mention someone")
        let txt = args.slice(1).join(" ")
        if(!txt) return message.reply("Add a text!")
        mUser.send(`${txt}\n - ${message.author}`)
    }
}