const {SlashCommandBuilder} = require("discord.js");
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
    // .addStringOption(option => {
    //     option.setName('hexCode')
    // })
    // async execute(interaction)=> {
    //
    // }
}