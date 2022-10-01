module.exports = {
    purge: function () {

        client.on('interactionCreate', async (command) => {
            if (!command.isCommand()) return;
            const { commandName, description, type, options } = command  
            let cmdoptns = `An integer value from 1-100 without decimals`       
            purge = new Discord.MessageEmbed()
                .setColor('#1500f7')
                .setTitle(`**${commandName}**`)
                .setAuthor({name: `${client.user.username}`, icon: `${client.user.displayAvatarURL()}`})
                .setDescription(`Purges up to 100 messages from chat!`)
                .addField('Command Options:',`${cmdoptns}`)
                .addField('Requires:','Manage messages permission')
                .setURL('')
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()

                if(commandName == 'purge' && isNan(options)){
                    if(command.author.permissions.has(PermissionBitField.Flags.ManageRoles)) {  
                        command.channel.bulkDelete(options)
                    } 
                    else {
                        await command.reply({content:'No Permission',ephemeral:true})
                    }
                } 
                else {
                    await command.reply({content:"Working...",embeds:[purge],ephemeral:true})
                }
        })
    }
}