module.exports = {
    purge: function (command) {
        const options = command
        const channelId = command
         client.on('interactionCreate',async (interaction) => {
            interaction.isCommand() && main.commands[interaction.commandName] ? main.commands[interaction.commandName](interaction, client) : false
            command.permissions == 'MANAGE_MESSAGES' ? (client.channels.fetch(channelId).then(channel => (channel.bulkDelete(options.getNumber('number') || 100, true)).then(command.reply({ephemeral: true})))) : command.reply({content:'You do not have permission...',ephemeral:false})
           })
        }
}
