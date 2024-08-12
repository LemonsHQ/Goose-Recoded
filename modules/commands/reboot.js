const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord-api-types/v10');
module.exports = {
	data : new SlashCommandBuilder()
		.setName('reboot')
		.setDescription('Reboots goose')
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator),
	async execute(interaction) {
		await interaction.reply({content:'Rebooting...',ephemeral:true})
		interaction.client.destroy();
	}
};