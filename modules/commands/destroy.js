const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord-api-types/v10');
module.exports = {
	data : new SlashCommandBuilder()
		.setName('destroy')
		.setDescription('Reboots goose')
		.setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
};
client.on('interactionCreate', interaction => {
	if (interaction.commandName === 'destroy') {
		interaction.reply({content:'Rebooting...',ephemeral:true})
		client.destroy();
	}
});