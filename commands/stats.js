module.exports = {
    name: "botstats",
    code: `
    $title[1;Bot Status Menu ($username[$clientID])]
    $thumbnail[1;$userAvatar[$clientID]]
    $addField[1;Uptime;$uptime]
    $addField[1;Ping; $ping / ms]
    $addField[1;Commands; $commandsCount]
    $addField[1;Users;$allMembersCount]
    $addField[1;Servers;$serverCount]
    $addField[1;Bot Version;0.0.1]
    $addField[1;Aoi.js Version;5.1.0]
    $addField[1;Node.js Version;16.14.0]
    $addField[1;Created;$creationDate[$clientID]]
    $addField[1;Developer;$userTag[$botOwnerID]]
    $footer[1;Powered by DAWN DEVELOPMENT ™]
    $addbutton[1;Support Server;5;https://discord.gg/awzvZKdRzS;enabled;]
    $addbutton[2;Bot Status;5;https://status.watchbot.app/bot/925988445476753479;enabled;]
    $color[1;GREEN]
    $reply
    `
}