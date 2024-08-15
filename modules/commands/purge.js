const {SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
const data = {
    name: 'purge',
    description: 'Purges Messages from chat!',
}
async function run({interaction}){
    new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Purges Messages from chat!')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Up to 100')
                .setMaxValue(100)
                .setRequired(true)
        )
    await interaction.reply({content: 'Purging...', ephemeral: true});
    await interaction.channel.bulkDelete(interaction.options.getInteger('amount'));
}
module.exports = { data, run }
