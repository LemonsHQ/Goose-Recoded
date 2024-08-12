require('dotenv').config();
const main = require('./main.js')
main.maindepend()
main.modules()
client.on('ready', () =>{
        console.log('ready')
        client.user.setStatus('idle'),
        client.user.setPresence({ activities: [{ name: 'for .help',type: "WATCHING" }]})
       /* let guild = '1023467415536926740'
        client.application.commands.set([])
        client.application.commands.create({
                name: 'purge',
                description:'Purges up to 100 messages(that are not older then 14 days) from chat.',
                type: 'CHAT_INPUT',
                options: [
                    {
                        name: "number",
                        description: "The amount of messages!",
                        type: 10,
                        minValue: 1,
                        maxValue: 100
                    },
                ],
                defaultPermission:true
        },guild)
        client.on('interactionCreate',async (interaction) => {
                interaction.isCommand() && main.commands[interaction.commandName] ? main.commands[interaction.commandName](interaction, client) : false
        }) */
});
client.login(process.env.token)
client.setMaxListeners(0)