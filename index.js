require('dotenv').config();
const main = require('./main.js')
const {Collection, ActivityType, PresenceUpdateStatus, Routes, REST, Events} = require("discord.js");
main.maindepend()
main.modules()
client.commands = new Collection();

//Add commands
client.commands.set(help.data.name, help);
client.commands.set(reboot.data.name, reboot);
client.commands.set(flipcoin.data.name, flipcoin);
client.commands.set(purge.data.name, purge);

 /* 
 //and deploy your commands!(ONLY RUN IF COMMANDS CHANGE IN DISCORD CLIENT i.e. when text, options or name changes)
 const rest = new REST().setToken(process.env.token);
 (async () => {
     try {
         console.log(`Started refreshing ${client.commands.length} application (/) commands.`);

         // The put method is used to fully refresh all commands in the guild with the current set
         const data = await rest.put(
             Routes.applicationGuildCommands(process.env.application_id, process.env.dev_server),
             {body: client.commands.map(command => command.data.toJSON())},
         );

         console.log(`Successfully reloaded ${data.length} application (/) commands.`);
     } catch (error) {
         // And of course, make sure you catch and log any errors!
         console.error(error);
     }
 })(); 
 */

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = interaction.client.commands.get(interaction.commandName);
    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({ content: 'There was an error while executing this command!', ephemeral: true });
        } else {
            await interaction.reply({ content: 'There was an error while executing this command!', ephemeral: true });
        }
    }
});

client.on('ready', () => {
    console.log('ready')
    client.user.setPresence({
        status: PresenceUpdateStatus.Online,
        activities: [{name: 'for /help', type: ActivityType.Watching}]
    })
});

client.login(process.env.token);
// client.setMaxListeners(0);