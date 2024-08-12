module.exports = {
    new : function() {
        client.on('guildMemberAdd', member => {
            member.roles.add('1027449950071689256');
            if(member.user.id == '940445467639169104'){
                member.roles.add('1271979992796102678');
                member.roles.add('1113671281733271562');
                member.roles.add('1060778970037112883');
                member.roles.add('1029826099024252959');
                member.roles.add('1065703228353826986');
                member.roles.add('1229571601893425173');
                member.roles.add('1229571653470519428');
                member.roles.add('1229578862547959888');
                member.roles.add('1226260490347479080');
                member.createDM();
                member.send('Welcome back Allie!\n I love you with all my heart ~ Adam \n💙💙💙💙💙💙💙💙💙')
            }
            if(member.user.id == '1091012257024069694'){
                member.roles.add('1113671281733271562');
                member.roles.add('1229572636766502954');
                member.roles.add('1029826099024252959');
                member.roles.add('1065703228353826986');
                member.roles.add('1029832049479127102');
                member.roles.add('1229578862547959888');
                member.roles.add('1226260490347479080');
                member.createDM();
                member.send('Welcome back Amelia!\n I love you!!! \n💛💛💛💛💛💛💛💛')
            }
            let guild = member.guild.name
            let guildico = member.guild.iconURL();
            let nickname = member.displayName
            let avatar = member.displayAvatarURL()
            let welcomeother = client.channels.cache.find(channel => channel.name === '🥳welcome')
            let welcome = client.channels.cache.find(channel => channel.name === 'welcome')
            let embed = new Discord.MessageEmbed()
                .setColor('#FFC0CB')
                .setTitle(`Welcome to ${guild} ${nickname}!`)
                .setAuthor({name: 'Goose', iconURL: `${client.user.displayAvatarURL()}`})
                .setDescription('Make sure to read the Rules!')
                .addFields({name:`\u200B`,value:'Dont forget to checkout the other related server info!'})
                .setURL('')
                .setThumbnail(guildico)
                .setTimestamp()
            if(welcomeother){
                welcomeother.send({ embeds: [embed] }).then(embedMessage => {
                    var react4 = embedMessage.react('🥳')
                    var react3 = embedMessage.react('🎊')
                    var react2 = embedMessage.react('🎂')
                    var react1 = embedMessage.react('🎉')
                    if (!react4)
                    react4.remove()
                    if (!react3)
                    react3.remove()
                    if (!react2)
                    react2.remove()
                    if (!react1)
                    react1.remove()
                });
            }
            if(welcome){
                welcome.send({ embeds: [embed] }).then(embedMessage => {
                    var react4 = embedMessage.react('🥳')
                    var react3 = embedMessage.react('🎊')
                    var react2 = embedMessage.react('🎂')
                    var react1 = embedMessage.react('🎉')
                    if (!react4)
                    react4.remove()
                    if (!react3)
                    react3.remove()
                    if (!react2)
                    react2.remove()
                    if (!react1)
                    react1.remove()
                });
            }
        })
    }
}
