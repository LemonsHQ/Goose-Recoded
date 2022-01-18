module.exports = {
    coin : function() {
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        client.on('interactionCreate', async (command) => {
            if (!command.isCommand()) return;
            const { commandName, description, type, options } = command  
            let comands = `Nothing, just the command`       
            var helpmessage = new Discord.MessageEmbed()
                .setColor('#1500f7')
                .setTitle(`**${commandName}**`)
                .setAuthor({name: `${client.user.username}`, icon: `${client.user.displayAvatarURL()}`})
                .setDescription(`Flips a coin, head or tails?`)
                .addField('Command Options:',`${comands}`)
                .setURL('')
                .setThumbnail(client.user.displayAvatarURL())
                .setTimestamp()
            
            commandName == 'flipcoin' ? (x <= 5 ? command.reply({content:'Heads',ephemeral:false}) : command.reply({content:'Tails',ephemeral:false})) : command.reply({embeds:[helpmessage],ephemeral:true})
        });
    }   
}