const {SlashCommandBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('color')
        .setDescription(`Gives a role based on color hex code.\nExample: /color #000000 (For Black)`)
        .addStringOption(option =>
            option.setName('hex-code')
                .setDescription('color hex code')
                .setMaxLength(7)
                .setRequired(true)
        ),
    async execute(interaction) {
        let hexCode = interaction.options.getString('hex-code').toLowerCase()
        if(/^#[0-9A-F]{6}$/i.test(hexCode) === false) return interaction.reply('Invalid hex code...')
        let colorRole = await interaction.guild.roles.cache.find(role => role.name === hexCode)
        if (!colorRole) {
            colorRole = await interaction.guild.roles.create({
                name: hexCode,
                color: hexCode,
                permissions: BigInt(0)
            })
        }
        await interaction.member.roles.remove(interaction.member.roles.cache.filter(role => role.name.startsWith('#')))
        await interaction.member.roles.add(colorRole)
        await interaction.reply('You are now beautiful.')
    },
}