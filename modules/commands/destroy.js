module.exports = {
    destroy : function() {
        client.on('interactionCreate', async (command) => {
            if (!command.isCommand()) return;
            const { commandName, description, type, options } = command       
            if(commandName == 'destroy') {
                command.reply({content:'Shutting down...',ephemeral:true})
                client.destroy();
            } 
        })
    }   
}