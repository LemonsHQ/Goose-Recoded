const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
// Goose Emoji 🪿help
module.exports = {
    data: new SlashCommandBuilder()
        .setName('help')
        .setDescription('Shows available commands.'),
    async execute(interaction) {
        let avi = client.user.displayAvatarURL()
        await interaction.reply({ embeds: [
            new EmbedBuilder()
                .setColor(0xFFC0CB)
                .setTitle(`Commands`)
                .setAuthor({name: 'Goose', iconURL: avi})
                .setDescription('All Availiable Commands.')
                .addFields(
                    {name: `**help**\n`, value: '- Shows this message.'},
                    {
                        name: '**color**\n',
                        value: `- Gives a role based on color described.\n Note: If role does not exist it will be created.`
                    }
                )
                .setThumbnail(avi)
                .setTimestamp()
        ]})
    }
}