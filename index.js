const Discord = require("discord.js")
const bot = new Discord.Client()

//Pour mettre le bot en ligne//
bot.login(process.env.TOKEN)




bot.on("message", function (message) {
    if (message.content.startsWith("%L role")) { //TOP//
        if (message.content === "%L role top") {
            if(message.member.roles.has("426781238037053451")) {
                message.reply("Tu a déja ce rôle")
            } else {
            let myRole = message.guild.roles.find("id", "426781238037053451")
            let member = message.member.addRole("426781238037053451")
            message.react('✅')
        }} else { //MID//
            if (message.content === "%L role mid") {
                if(message.member.roles.has("426780978808356864")) {
                    message.reply("Tu a déja ce rôle")
                } else {
                let myRole = message.guild.roles.find("id", "426780978808356864");
                let member = message.member.addRole("426780978808356864")
                message.react('✅')
            }} else { //JGL//
                if (message.content === "%L role jungle") {
                    if(message.member.roles.has("426780721412177924")) {
                        message.reply("Tu a déja ce rôle")
                    } else {
                    let myRole = message.guild.roles.find("id", "426780721412177924");
                    let member = message.member.addRole("426780721412177924")
                    message.react('✅')
                }} else { //ADC//
                    if (message.content === "%L role adc") {
                        if(message.member.roles.has("426781158856982528")) {
                            message.reply("Tu a déja ce rôle")
                        } else {
                        let myRole = message.guild.roles.find("id", "426781158856982528");
                        let member = message.member.addRole("426781158856982528")
                        message.react('✅')
                    }} else {
                        if (message.content === "%L role support") {
                            if(message.member.roles.has("426780893194092544")) {
                                message.reply("Tu a déja ce rôle")
                            } else {
                            let myRole = message.guild.roles.find("id", "426780893194092544");
                            let member = message.member.addRole("426780893194092544")
                            message.react('✅')
                        }} else {
                            if (message.content === "%L role help"){
                            message.channel.send("%L top pour le rôle de la voie du haut")
                            message.channel.send("%L jungle pour le rôle de la voie de la jungle")
                            message.channel.send("%L mid pour le rôle de la voie du milieu")
                            message.channel.send("%L adc pour le rôle de la voie du bas en tireur")
                            message.channel.send("%L support pour le rôle de la voie du bas en support")
                            }
                        }
                    }
                }
            }
        }
    }
})

bot.on("message", function (message) {
if (message.content.startsWith("%L Girl")) {
    if(message.member.roles.has("373796418235924491")) {
        message.reply("Tu a déja ce rôle")
    } else {
    let myRole = message.guild.roles.find("id", "373796418235924491")
    let member = message.member.addRole("373796418235924491")
    message.react('✅')
}
}})

bot.on("message", function (message) {
    if (message.content.startsWith("%L game")) {
        if (message.content === "%L game dofus") {
            let myRole = message.guild.roles.find("id", "456802619680096269")
            if (message.member.roles.has("456802619680096269")) {
                message.reply("Tu est déja abonné a ce jeu")
            } else {
            let member = message.member.addRole("456802619680096269")
            message.react('✅')
        }} else {
            if (message.content === "%L game warframe") {
                let myRole = message.guild.roles.find("id", "456814582493872128")
                if (message.member.roles.has("456814582493872128")) {
                    message.reply("Tu est déja abonné a ce jeu")
                } else {
                    let member = message.member.addRole("456814582493872128")
                    message.react('✅')
                }} else {
                    if (message.content === "%L game fortine") {
                        let member = message.guild.roles.find("id", "456815060820426755")
                        if (message.member.roles.has("456815060820426755")) {
                            message.reply("Tu est déja abonné a ce jeu")
                        } else {
                            let member = message.member.addRole("456815060820426755")
                            message.react('✅')
                        }
                    }
                }
        }
    }
})

bot.on("message", function (message) {
    if (message.content === "%Licorne") {
        let member = message.guild.roles.find("id", "465995316748091402")
        if (message.member.roles.has("465995316748091402")) {
            message.react("❌")
        } else {
            let member = message.member.addRole("465995316748091402")
            message.react('✅') 
        }
    }
})
