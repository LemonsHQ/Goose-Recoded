module.exports = {
    help : function() {
        // Goose Emoji 🪿help
        //^13.17.1
        client.on('messageCreate', message => {
            let channel = message.channel
            let avi = client.user.displayAvatarURL()
            let help = new Discord.MessageEmbed()
                .setColor('#FFC0CB')
                .setTitle(`Commands`)
                .setAuthor({name: 'Goose', iconURL: `${avi}`})
                .setDescription('All Availiable Commands.')
                .addFields(
                    {name:`**𓅭help**\n`,value:'- Shows this message.'},
                    {name:'**𓅭color**\n',value:`- Gives a role based on color described.\n Note: If role does not exist it will be created.`}
                )
                .setURL('')
                .setThumbnail(avi)
                .setTimestamp()
            if(message.content.toLowerCase().startsWith('.help') || message.content.toLowerCase().startsWith('𓅭help')){
                channel.send({ embeds: [help] });
            }
        })
    }
}