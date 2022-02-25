const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
<<<<<<< HEAD
    token: "OTI1OTg4NDQ1NDc2NzUzNDc5.Yc1H8Q.3wProy8lG6XtvUkvySStML2OYNs",
prefix: "+",
=======
    token: "bot_token",
prefix: "bot_prefix",
>>>>>>> 08b58c146c4f16200e1bf010f1746c7a1c1a1d35
intents: ["GUILDS", "GUILD_MESSAGES"]
})

bot.onMessage() //Allows to execute Commands

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

/*
bot.cmd is object of Collections where the command data will be stored
"./commands/" is the path of folder where all the commands' code will be present
*/

bot.status({
    text: "$serverCount servers!",
    type: "WATCHING",
    time: 12
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})
