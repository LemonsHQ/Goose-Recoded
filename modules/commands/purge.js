const {SlashCommandBuilder, PermissionFlagsBits, Message} = require('discord.js')
module.exports = {
    data: new SlashCommandBuilder()
        .setName('purge')
        .setDescription('Purges Messages from chat!')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
        .addIntegerOption(option =>
            option.setName('amount')
                .setDescription('Up to 100')
                .setMaxValue(100)
                .setRequired(true)
        ),

    async execute(interaction) {
        await interaction.reply({content: 'Purging...', ephemeral: true});
        await interaction.channel.bulkDelete(interaction.options.getInteger('amount'));
    }
}
