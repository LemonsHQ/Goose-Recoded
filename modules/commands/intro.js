const {SlashCommandBuilder, EmbedBuilder} = require('discord.js')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('into')
        .setDescription('Makes your intro.')
        .addStringOption(option =>
            option.setName('name')
                .setDescription('your fucking name you twat')
                .setMaxLength(7)
                .setRequired(true)
        )
        .addStringOption(option => 
            option.setName('likes')
                .setDescription('What you like')
                .setMaxLength(200)
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('dislikes')
                .setDescription('What you dont like')
                .setMaxLength(200)
                .setRequired(true)
        )
        .addStringOption(option =>
            option.setName('reason')
                .setDescription('The Reason you joined')
                .setMaxLength(200)
                .setRequired(true)
        )        
        .addStringOption(option => 
            option.setName('birthday')
                .setDescription('Your birthday')
                .setMaxLength(24)
                .setRequired(false)
        ),
    async execute(interaction) {
        let avit = interaction.client.user.displayAvatarURL()
        let birf = interaction.options.getString('birf')
        let reas = interaction.options.getString('reason')
        let like = interaction.options.getString('likes')
        let disl = interaction.options.getString('dislikes')
        let name = interaction.options.getString('name')
        await interaction.reply({
        embeds: [
            new EmbedBuilder()
                .setColor(0xFFC0CB)
                .setTitle(`Intro for ${interaction.options.getString('name')}`)
                .setAuthor({name: interaction.client.user.displayName, iconURL: avit})
                .setDescription('My Intro!')
                .addFields(
                    {
                        name: 'name',
                        value: name
                    },
                    {
                        name: 'birf',
                        value: birf
                    },
                    {
                        name:'reason',
                        value: reas
                    },
                    {
                        name: 'dislikes',
                        value: disl
                    },
                    {
                        name: 'likes',
                        value: like
                    }
                )
                .setThumbnail(avit)
                .setTimestamp()
            ]
        })
    }
}