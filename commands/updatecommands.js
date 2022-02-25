module.exports = ({
    name: "reload",
    code: `
    $title[1;Need To reload Commands or Theres new commands?]
    $thumbnail[1;$userAvatar[$clientID]]
    $addField[1;Command Count; $commandsCount $updateCommands]
    $addField[1;Bot Version;0.0.1]
    $addField[1;Aoi.js Version;5.1.0]
    $addField[1;Node.js Version;16.14.0]
    $addField[1;Developer;$userTag[$botOwnerID]]
    $footer[1;Powered by DAWN DEVELOPMENT ™]
    $addbutton[1;Support Server;5;https://discord.gg/awzvZKdRzS;enabled;]
    $color[1;BLUE]
    $reply`

    

    //You should put $onlyForIDs
})