const {ActionRowBuilder, StringSelectMenuOptionBuilder, SlashCommandBuilder, UserSelectMenuBuilder, PermissionFlagsBits, RoleSelectMenuBuilder, StringSelectMenuBuilder} = require('discord.js')
/*
let red = '#FF0000'
let orange = '#FFA500'
let yellow = '#FFFF00'
let green = '#008000'
let blue = '#0000FF'
let indigo = '#4B0082'
let violet = '#7F00FF'

module.exports = {
    data: new SlashCommandBuilder()
        .setName('color')
        .setDescription('Gives a role based on color described.')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles)
        .addRoleOption(option =>
                option.setName('role')
                .setDescription('The role to give.')
                .setRequired(true)
                )
        
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
*/
module.exports = {
    data: new SlashCommandBuilder()
        .setName('color')
        .setDescription('Gives a role based on color described.')
        .setDefaultMemberPermissions(PermissionFlagsBits.ManageRoles),
    async execute(interaction) {
        // const userSelect = new UserSelectMenuBuilder()
        //     .setCustomId('roles')
        //     .setPlaceholder('Select multiple roles.')
        //     .setMinValues(1)
        //     .setMaxValues(10);
        const String = new StringSelectMenuBuilder()
        .setCustomId('roles')
        .setPlaceholder('Select multiple roles.')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Blue')
                .setDescription('Blue')
                .setValue('blue'),
            new StringSelectMenuOptionBuilder()
                .setLabel('REd')
                .setDescription('Red')
                .setValue('Red'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Greeeen')
                .setDescription('Green')
                .setValue('green'),
        )
        const row1 = new ActionRowBuilder()
            //.addComponents(userSelect)
            .addComponents(String);

        await interaction.reply({
            content: 'Select users:',
            components: [row1],
        });
    },
}