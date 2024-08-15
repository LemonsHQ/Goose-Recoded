//The literally everything
const main = require('./main.js')
main.maindepend()
main.modules()
//The command Handler
const { CommandKit } = require('commandkit');
new CommandKit({
    client,
    commandsPath: `${__dirname}/modules/commands`,
    eventsPath: `${__dirname}/modules/events`,
    bulkRegister: true,
});
//The configuration
require('dotenv').config();
client.login(process.env.token);
client.setMaxListeners(0);