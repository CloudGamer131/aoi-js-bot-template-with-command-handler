module.exports = {
    name: "botstats",
    code: `
    $title[1;Botinfo ($username[$clientID])]
    $thumbnail[1;$userAvatar[$clientID]]
    $addField[1;CPU Usage; $cpu/100]
    $addField[1;Uptime;$uptime]
    $addField[1;Ping; $ping / ms]
    $addField[1;Commands; $commandsCount]
    $addField[1;Users;$allMembersCount]
    $addField[1;Servers;$serverCount]
    $addField[1;Version;0.0.2]
    $addField[1;Created;$creationDate[$clientID]]
    $addField[1;Developer;$userTag[$botOwnerID]]
    $footer[1;Powered by DAWN DEVELOPMENT ™]
    $color[1;GREEN]
    `
}