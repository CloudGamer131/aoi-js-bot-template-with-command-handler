module.exports = {
 name: "setwelcomechannel",
 description: "Welcome channel",
 category: "Welcome System",
 aliases: ["wc","swc"],
 code: `
 $onlyPerms[manageserver;Sorry, but you need manage server permission!]
 $onlyIf[$mentionedChannels[1]!=;Can you mention a channel to set it as welcome channel??]
 $title[1;Done!]
 $color[1;00FF00]
 $description[1;I set the welcome channel to <#$mentionedChannels[1]>!]
 $footer[1;Now set the welcome message using $getServerVar[prefix]setwelcomemessage]
 $setServerVar[WelcomeChannel;$mentionedChannels[1]]
 `
 }