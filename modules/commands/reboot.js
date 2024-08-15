const { SlashCommandBuilder, PermissionFlagsBits } = require('discord.js');
const data = {
	name:'reboot',
	description: 'Reboots goose',
}

async function run({interaction}){
	new SlashCommandBuilder()
		.setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
	await interaction.reply({content:'Rebooting...',ephemeral:true})
	interaction.client.destroy();
}
module.exports = {data, run}