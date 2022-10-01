const { SlashCommandBuilder } = require('@discordjs/builders');
const { PermissionFlagsBits } = require('discord-api-types/v10');
module.exports = {
	data : new SlashCommandBuilder()
		.setName('flipcoin')
		.setDescription('Flips a coin'),
};
client.on('interactionCreate', interaction => {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === 'flipcoin') {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        x = getRandomInt(1,10);
        if (x <= 5) {
            interaction.reply({content:'Heads',ephemeral:false})
        } else {
            interaction.reply({content:'Tails',ephemeral:false})
        }
    }
})