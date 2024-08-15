const {SlashCommandBuilder} = require("discord.js");
module.exports = {
    data: new SlashCommandBuilder()
        .setName('flipcoin')
        .setDescription('Flips a coin'),
    async execute(interaction) {
        await interaction.reply({content: Math.random() > .5 ? 'Heads' : 'Tails'})
    }
};