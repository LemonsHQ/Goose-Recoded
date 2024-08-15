const {RoleSelectMenuBuilder, ActionRowBuilder, ComponentType, SlashCommandBuilder, PermissionFlagsBits} = require('discord.js')
/*
let red = '#FF0000'
let orange = '#FFA500'
let yellow = '#FFFF00'
let green = '#008000'
let blue = '#0000FF'
let indigo = '#4B0082'
let violet = '#7F00FF'
*/
const data = {
    name: 'color',
    description: 'Pick a color, any color.'
}
async function run(interaction) {
    const rolemenu = RoleSelectMenuBuilder()
    .setCustomId(interaction.id)
    .minValues(0)
    .maxValues(10);

    const actionrow = new ActionRowBuilder().setComponents(rolemenu);
    interaction.reply({components: [actionrow]});
}
module.exports = {data, run}