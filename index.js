const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
    token: "OTI1OTg4NDQ1NDc2NzUzNDc5.Yc1H8Q.T6F1a9Y_ciBncEgClOYPouDkuxo",
prefix: "+",
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
    text: "Coded By Cloud",
    type: "PLAYING",
    time: 12
})

bot.status({
    text: "in develeopment",
    type: "WATCHING",
    time: 12
})
//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})