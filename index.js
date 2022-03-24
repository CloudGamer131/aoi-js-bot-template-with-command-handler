const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
    token: "bot_token",
prefix: ["$getServerVar[prefix]"],
mobile: true, //True or false

intents: "all"
})

bot.onMessage() //Allows to execute Commands

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

/*
bot.cmd is object of Collections where the command data will be stored
"./commands/" is the path of folder where all the commands' code will be present
*/


bot.joinCommand({ 
 channel:"$getServerVar[WelcomeChannel]", 
 code:`$title[1;$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeTitle];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]]
 $description[1;
 
 
 $replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[WelcomeMessage];{user};$username];{user.ping};<@$authorID>];{server};$serverName];{user.tag};$userTag[$authorID]]
 
 
 
 ]
 $color[1;RED]
 $footer[1;Now $serverName Has $membersCount Members!;$serverIcon]
 $addTimestamp[1]
 
 $thumbnail[1;$userAvatar[$authorID]]`}) 
bot.onJoin()


bot.status({
    text: "$serverCount servers!",
    type: "WATCHING",
    time: 12
})

bot.status({
  text: "TEXT",
  type: "PLAYING", //can be PLAYING, WATCHING, LISTENING, STREAMING, COMPETING
  status: "idle", //can be online, idle, dnd, offline
  time: 12
})

bot.status({
text: "TEXT", 
type: "STREAMING", 
url: "URL"
})

//Ready Event
bot.readyCommand({
    channel: '',
    code: `$log[
  ╭─━━━━━━━━━━━━━━━━━━─╮
  Ready Command Code
  Client: $userTag[$clientID]
  Ping: $ping ms
  Bot Creator: $username[$botOwnerID]#$discriminator[$botOwnerID]
  Commands loaded: $commandsCount
  ╰─━━━━━━━━━━━━━━━━━━─╯
  ]`
})


bot.variables ({
prefix: "$",
WelcomeChannel: "",
WelcomeMessage: "Welcome {user.ping} To {server}!",
WelcomeTitle:"Welcome {user.ping}",
});
