module.exports = {
    template : function() {
        client.on('interactionCreate', async (command) => {
            if (!command.isCommand()) return;
            const { commandName, description, type, options } = command  
            let comands = `/purge\n/ping\n/timeout\n/mute\n/kick\n/ban\n/assign\n/announce\n/demote\n/promote`          
            var helpmessage = new Discord.MessageEmbed()
                .setColor('#1500f7')
                .setTitle(`**${commandName}**`)
                .setAuthor({name: `${client.user.username}`, icon: `${client.user.displayAvatarURL()}`})
                .setDescription(`Try them out to see what they do!`)
                .addField('Command Options:',`${comands}`)
                //.addField('Command Type:',`${type}`)
                .setURL('')
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
            commandName == 'help' ? 
            (
                
                command.reply({
                    embeds: [helpmessage],
                    ephemeral: true
                })
            )
            : 
            command.reply({
                conent:'There was an unexplained error running that command!',
                ephemeral: true
            })
        });
    }
}