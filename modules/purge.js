const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord-api-types/v10');
module.exports = {  
	data: new SlashCommandBuilder()
		.setName('purge')
		.setDescription('Purges Messages from chat!')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages | PermissionFlagsBits.ManageRoles)
        .addIntegerOption(option => {
            return option
            .setName('amount')
            .setDescription('Up to 100')
            .setRequired(true)
        }),
        execute(interaction){
            if (interaction.commandName === 'purge') {
            }
        }
};
client.on('interactionCreate', interaction => {
    if (interaction.commandName === 'purge') {
        let amount = interaction.options.getInteger('amount')
        if (isNaN(amount)) return  interaction.reply({content:'You must specify a number',ephemeral:true});
        interaction.reply({content:'Purging...',ephemeral:true})
        interaction.channel.bulkDelete(amount)
    }
});