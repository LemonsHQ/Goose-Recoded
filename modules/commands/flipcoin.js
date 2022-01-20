const { get } = require("express/lib/response");

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
            x = getRandomInt(1,10)
            commandName == 'flipcoin' ? (x <= 5 ? (command.reply({content:'Heads',ephemeral:false})) : command.reply({content:'Tails',ephemeral:false})) : false
        });

    }   
}