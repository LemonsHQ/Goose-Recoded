module.exports = {
    purge: function () {
        client.on('interactionCreate', async (command) => {
            if (!command.isCommand()) return;
            const { commandName, description, type, options } = command  
            let comands = `An integer value from 1-100 without decimals`       
            var helpmessage = new Discord.MessageEmbed()
                .setColor('#1500f7')
                .setTitle(`**${commandName}**`)
                .setAuthor({name: `${client.user.username}`, icon: `${client.user.displayAvatarURL()}`})
                .setDescription(`Purges up to 100 messages from chat!`)
                .addField('Command Options:',`${comands}`)
                .addField('Requires:','Manage messages permission')
                .setURL('')
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
            let args = command.toString().split(' ')
            member.permissions.FLAGS.MANAGE_MESSAGES ? (commandName == 'purge' && isNan(args[1]) ? command.channel.bulkDelete(args[1]) : command.reply({embeds:[helpmessage],ephemeral:true})) : command.reply({embeds:[helpmessage],ephemeral:true})
        });
    }
}