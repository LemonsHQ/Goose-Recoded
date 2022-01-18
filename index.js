const main = require('./main')
main.maindepend()
main.modules()

client.on('ready', () =>{
    console.log('ready')
    const guild = client.guilds.cache.forEach(guild => guild.id);
    guild ? commands = guild.commands : commands = client.application.commands
    commands.create({
        name: 'ping',
        description:'pong',
        type: 'APPLICATION_COMMAND',
        defaultPermission:true
    })
    commands.create({
        name: 'help',
        description:'Displays all commands',
        type: 'APPLICATION_COMMAND',
        defaultPermission:true
    })
    commands.create({
        name: 'flipcoin',
        description:'Flips a coin, head or tails?',
        type: 'APPLICATION_COMMAND',
        defaultPermission:true
    })
    commands.create({
        name: 'purge',
        description:'Purges up to 100 messages from chat',
        type: 'APPLICATION_COMMAND',
        defaultPermission:true
    })
})

client.login(config.test)