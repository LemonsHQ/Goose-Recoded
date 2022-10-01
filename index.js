
try{
    const main = require('./main.js')
    main.maindepend()
    main.commands()
    main.modules()

    client.on('ready', () =>{
        console.log('ready')
        const guild = client.guilds.cache.forEach(guild => guild.id);
        client.application.commands.delete('')
        console.log('Application Commands Deleted')
        client.application.commands.create({
            name: 'ping',
            description:'pong',
            type: 'APPLICATION_COMMAND',
            defaultPermission:true
        })
        client.application.commands.create({
            name: 'help',
            description:'Displays all commandss',
            type: 'APPLICATION_COMMAND',
            defaultPermission:true
        })
        client.application.commands.create({
            name: 'flipcoin',
            description:'Flips a coin, head or tails?',
            type: 'APPLICATION_COMMAND',
            defaultPermission:true
        })
        client.application.commands.create({
            name: 'purge',
            description:'Purges up to 100 messages from chat',
            type: 'APPLICATION_COMMAND',
            defaultPermission:true
        })
        client.application.commands.create({
            name: 'destroy',
            description:'Shutdowns the bot',
            type: 'APPLICATION_COMMAND',
            defaultPermission:true
        })
        console.log('Application Commands Created')
    })
}
catch(err){
    console.log(err)
};
client.login(config.test)