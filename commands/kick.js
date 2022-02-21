module.exports = {
    name: "kick",
    code: `$kick[$mentioned[1];$guildID;$if[$noMentionMessage==;Not Privded;$noMentionMessage]]
    $title[1;Member Kicked!]
    $description[1;<@$authorID> kicked <@$mentioned[1]>
    Reason: $if[$noMentionMessage==;Not Privded;$noMentionMessage]
    $color[1;RED]
    $onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$mentioned[1]]];You can't kick someone with a higher role than you]
    $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$authorID];You can't kick someone with the same highest role]
    $onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$mentioned[1]]];I can't kick someone with higher role than me]
    $onlyIf[$highestRole[$mentioned[1]]!=$highestRole[$clientID];I can't kick someone with the same highest role as mine]
    $onlyIf[$mentioned[1]!=$ownerID;You can't kick the server owner]
    $onlyIf[$mentioned[1]!=$authorID;I am sure you don't want to do that]
    $onlyIf[$mentioned[1]!=$clientID;I can't kick myself]
    $onlyIf[$isMentioned[$mentioned[1]]==true;You need to mention someone you want me to kick]
    $onlyIf[$hasPerms[$guildID;$authorID;kick]==true;You don't have \`KICK\` permisions]
    $onlyBotPerms[kick;I don't have \`KICK\` permissions]`
}