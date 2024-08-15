const {EmbedBuilder, Events} = require("discord.js");
module.exports = {
    new: function () {
        client.on(Events.GuildMemberAdd, member => {
            member.roles.add('1027449950071689256');
            if (member.user.id === '940445467639169104') {
                 member.roles.add([
                    '1271979992796102678', '1113671281733271562', '1060778970037112883',
                    '1029826099024252959', '1065703228353826986', '1229571601893425173',
                    '1229571653470519428', '1229578862547959888', '1226260490347479080'
                ])
                member.createDM();
                member.send('Welcome back Allie!\n I love you with all my heart ~ Adam \n💙💙💙💙💙💙💙💙💙');
            }
            if (member.user.id === '1091012257024069694') {
                member.roles.add([
                    '1113671281733271562', '1229572636766502954', '1029826099024252959',
                    '1065703228353826986', '1029832049479127102', '1229578862547959888',
                    '1226260490347479080'
                ]);
                member.createDM();
                member.send('Welcome back Amelia!\n I love you!!! \n💛💛💛💛💛💛💛💛');
            }

            client.channels.cache.get(process.env.welcome_channel_id)?.send({
                embeds: [
                    new EmbedBuilder()
                        .setColor('#FFC0CB')
                        .setTitle(`Welcome to ${member.guild.name}, ${member.displayName}!`)
                        .setAuthor({name: client.user.displayName, iconURL: client.user.displayAvatarURL()})
                        .setDescription('Make sure to read the Rules!')
                        .addFields({name: '\u200B', value: 'Dont forget to checkout the other related server info!'})
                        .setThumbnail(member.guild.iconURL())
                        .setTimestamp()
                ]
            })
                .then(embedMessage =>
                    ['🥳', '🎊', '🎂', '🎉'].forEach(emoji => embedMessage.react(emoji))
                );
        })
    }
}
