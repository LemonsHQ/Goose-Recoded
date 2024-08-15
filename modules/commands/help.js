const {SlashCommandBuilder, EmbedBuilder} = require("discord.js");
// Goose Emoji 🪿help
const data = {
    name: 'help',
    description: 'Shows Availiable Commands.',
}
async function run({interaction}){
    let avi = interaction.client.user.displayAvatarURL()
    await interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setColor(0xFFC0CB)
                .setTitle('Commands')
                .setAuthor({name: interaction.client.user.displayName, iconURL: avi})
                .setDescription('All Available Commands.')
                .addFields(
                    commands.filter(command => interaction.member.permissions.has(command.data.default_member_permissions)).map(command => {
                        return {
                            name: command.data.name.charAt(0).toUpperCase() + command.data.name.slice(1),
                            value: '- ' + (['.', '!'].some(end => command.data.description.endsWith(end)) ? command.data.description : command.data.description + '.')
                        }
                    }))
                .setThumbnail(avi)
                .setTimestamp()
        ]
    })
}
module.exports = {data, run}