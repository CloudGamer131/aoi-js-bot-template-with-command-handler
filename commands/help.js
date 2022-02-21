module.exports = {
    name: "help",
    code: `
    $title[1;Help Menu ($username[$clientID])]
    $thumbnail[1;$userAvatar[$clientID]]
    $addField[1;Main Commands;+botstats | +ping | +uptime | +avatar | More Coming Soon!]
    $addField[1;Admin Commands;+kick @user | +ban userid | +clear - clears 100 messages | More Coming Soon!]
    $footer[1;Powered by DAWN DEVELOPMENT ™]
    $color[1;BLUE]
    `
}