module.exports = ({
    name: "clear",
    code: `
    $clear[100]
    $title[1;($username[$clientID])]
    $thumbnail[1;$userAvatar[$clientID]]
    $addField[1;Cleared;100 Messages]
    $footer[1;Powered by DAWN DEVELOPMENT ™]
    $color[1;BLUE]`
    
    //This will delete 50 latest messages from the current channel
});