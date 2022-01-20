module.exports = {
    destroy : function() {
        client.on('interactionCreate', async (command) => {
            if (!command.isCommand()) return;
            const { commandName, description, type, options } = command       
            var helpmessage = new Discord.MessageEmbed()
                .setColor('#1500f7')
                .setTitle(`**${commandName}**`)
                .setAuthor({name: `${client.user.username}`, icon: `${client.user.displayAvatarURL()}`})
                .setDescription(`Shutsdown the bot`)
                .addField('Command Options:',`None, just the command`)
                .addField('Requires:','Manage messages permission')
                .setURL('')
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
            commandName == 'destroy' && member.permissions.FLAGS.MANAGE_MESSAGES ? client.destroy() : command.reply({embeds:[helpmessage],ephemeral:true})
        });
    }   
}