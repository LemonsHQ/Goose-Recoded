module.exports = {
    destroy : function() {
        client.on('interactionCreate', async (command) => {
            if (!command.isCommand()) return;
            const { commandName, description, type, options } = command
            {      
                if(commandName == 'destroy') {
                    if(command.permissions.has(PermissionBitField.Flags.ManageRoles)) {
                        await command.reply({content:'Shutting down...',ephemeral:true})
                        client.destroy();
                    }
                    else {
                        await command.reply({content:'No Permission',ephemeral:true})
                    }
                } 
            }
        })
    }   
}