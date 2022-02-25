module.exports = ({
    name: "ping",
    aliases: ['pong'],
    code: `    $title[1;Bot Status Menu ($username[$clientID])]
    $thumbnail[1;$userAvatar[$clientID]]
    $addField[1;Ping; $ping / ms]
    $footer[1;Powered by DAWN DEVELOPMENT ™]
    $addbutton[1;Support Server;5;https://discord.gg/awzvZKdRzS;enabled;]
    $addbutton[2;Bot Status;5;https://status.watchbot.app/bot/925988445476753479;enabled;]
    $color[1;GREEN]
    $reply`
})