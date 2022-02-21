module.exports = ({
    name: "ban",
    code: `
    $username[$message] has been banned from the guild.
    $ban[$message;$guildID;7;$noMentionMessage]
    $argsCheck[1;Just enter the User ID of who you want to ban.]
    `
});