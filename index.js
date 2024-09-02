require('dotenv').config();
const { existsSync, writeFile, readFile } = require('fs');
const main = require('./main.js')
const {Collection, ActivityType, PresenceUpdateStatus, Routes, REST, Events} = require("discord.js");


commands = new Collection();
main.maindepend()
main.modules()

//Add commands
commands.set(help.data.name, help);
commands.set(reboot.data.name, reboot);
commands.set(flipcoin.data.name, flipcoin);
commands.set(purge.data.name, purge);
commands.set(color.data.name, color);
//commands.set(intro.data.name, intro);

//and deploy your commands!(ONLY RUN IF COMMANDS CHANGE IN DISCORD CLIENT i.e. when text, options or name changes)
async function updateClientCommands() {
    const rest = new REST().setToken(process.env.token);
    try {
        console.log(`Started refreshing ${commands.size} application (/) commands.`);

        //Deleting the slash commands
        // const d = rest.put(Routes.applicationCommands(process.env.application_id), { body: [] })
        //     .then(() => console.log('Successfully deleted all application commands.'))
        //     .catch(console.error)
        // const data = rest.put(Routes.applicationGuildCommands(process.env.application_id, process.env.dev_server), { body: [] })
        //     .then(() => console.log('Successfully deleted all guild commands.'))
        //     .catch(console.error);

        // The put method is used to fully refresh all commands in the guild with the current set
        const data = await rest.put(
            Routes.applicationGuildCommands(process.env.application_id, process.env.dev_server),
            {body: commands.map(command => command.data.toJSON())},
        );
        

        console.log(`Successfully reloaded ${data.length} application (/) commands.`);
    } catch (error) {
        // And of course, make sure you catch and log any errors!
        console.error(error);
    }
}

function stringToHash(str) {
    let hash = 0;
    if (str.length === 0) return hash;
    for (const char of str) {
        hash ^= char.charCodeAt(0);
    }
    return hash;
}

/* This part keeps erroring so I added "updateClientCommands()" to client ready
console.log("Reading command checksum...")
if(existsSync("./command_checksum.txt")){
    readFile("./command_checksum.txt", 'utf8', (err, data) => {
        if (err) throw err;
        if (data.toString() !== stringToHash(JSON.stringify(commands.map(command => command.data.toJSON()))).toString()){
            console.log("Checksum doesnt equal, updating commands...")
            updateClientCommands()
            
            console.log("Making checksum...")
            writeFile("./command_checksum.txt", stringToHash(JSON.stringify(commands.map(command => command.data.toJSON()))).toString(), (err) => {
                if (err) throw err;
                console.log('Saved command checksum...');
            })
            
        } else {
            console.log("All up to date!")
        }
    })
} else {
    console.log("File not found, updating commands...")
    updateClientCommands()
    console.log("Making checksum...")
    writeFile("./command_checksum.txt", stringToHash(commands.map(command => command.data.toJSON()).toString()).toString(), (err) => {
        if (err) throw err;
        console.log('Saved command checksum...');
    })
}
*/

client.on(Events.InteractionCreate, async interaction => {
    if (!interaction.isChatInputCommand()) return;
    const command = commands.get(interaction.commandName);
    if (!command) {
        console.error(`No command matching ${interaction.commandName} was found.`);
        return;
    }
    try {
        await command.execute(interaction);
    } catch (error) {
        console.error(error);
        if (interaction.replied || interaction.deferred) {
            await interaction.followUp({content: 'There was an error while executing this command!', ephemeral: true});
        } else {
            await interaction.reply({content: 'There was an error while executing this command!', ephemeral: true});
        }
    }
});

client.on('ready', () => {
    console.log('ready')
    client.user.setPresence({
        status: PresenceUpdateStatus.Online,
        activities: [{name: 'for /help', type: ActivityType.Watching}]
    });
    updateClientCommands()
});

client.login(process.env.token);
//client.setMaxListeners(0);