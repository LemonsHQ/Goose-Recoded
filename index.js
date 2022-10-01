try{
    const { REST } = require('@discordjs/rest');
    const { Routes } = require('discord-api-types/v9');
    const main = require('./main.js')
    main.maindepend()
    main.modules()
    client.on('ready', () =>{
        console.log('ready')
        client.user.setStatus('idle')
        const commands = [];
        const commandFiles = fs.readdirSync('./modules/commands').filter(file => file.endsWith('.js'));
        
        // Place your client and guild ids here
        const clientId = '856525762437185536';
        const guild = client.guilds.cache.forEach(guild => guild.id)
        const guildId = '991922225848524810';
        
        for (const file of commandFiles) {
            const command = require(`./modules/commands/${file}`);
            commands.push(command.data.toJSON());
        }
        
        const rest = new REST({ version: '9' }).setToken(config.test);
        
        (async () => {
            try {
                console.log('Started refreshing application (/) commands.');

                await rest.put(Routes.applicationCommands(clientId), { body: [] })
                    .then(() => console.log('Successfully deleted all (/) commands.'))
                    .catch(console.error);
                await rest.put(
                    Routes.applicationGuildCommands(clientId, guildId),
                    { body: commands },
                );

        
                console.log('Successfully reloaded application (/) commands.');
            } catch (error) {
                console.error(error);
            }
        })();
        
    })
    client.login(config.test)
}
catch(err){
    console.log(err)
};
