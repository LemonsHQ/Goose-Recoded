const {SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
/*
let red = '#FF0000'
let orange = '#FFA500'
let yellow = '#FFFF00'
let green = '#008000'
let blue = '#0000FF'
let indigo = '#4B0082'
let violet = '#7F00FF'
*/
module.exports = {
    data: new SlashCommandBuilder()
        .setName('color')
        .setDescription('Gives a role based on color described.')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
        .addRoleOption(option =>
                option.setName('role')
                .setDescription('The role to give.')
                .setRequired(true)
                /*Was trying to add choices, didnt work. This is where I left off lempac. However role functionality works, only problem being it can't give roles higher than its own.
                    So meaning if I move it to the top of the server it'll be able to give admin stuff. 
                    .addChoices(
                    { name: 'Funny', value: 'gif_funny' },
                    { name: 'Meme', value: 'gif_meme' }, 
                    { name: 'Movie', value: 'gif_movie' },
                )*/
                ),
        async execute(interaction) {
            const role = interaction.options.getRole('role');
    
            try {
                await interaction.member.roles.add(role);
                await interaction.reply(`You have been given the ${role} role!`);
            } catch (error) {
                console.error(error);
                await interaction.reply(`There was an error giving you the role.`);
            }
        }
}