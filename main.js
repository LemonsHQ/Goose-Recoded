const {Client, Partials, GatewayIntentBits} = require('discord.js');
module.exports = {
    maindepend: function () {
        const { existsSync, writeFile, readFile } = require('fs');
        // ytch = require('yt-channel-info');
        global.client = new Client({
            intents: [
                GatewayIntentBits.Guilds,
                GatewayIntentBits.GuildMessages,
                GatewayIntentBits.GuildPresences,
                GatewayIntentBits.DirectMessages,
                GatewayIntentBits.DirectMessageReactions,
                GatewayIntentBits.MessageContent,
                GatewayIntentBits.GuildMembers,
                GatewayIntentBits.GuildMessageReactions,
                GatewayIntentBits.GuildWebhooks,
                GatewayIntentBits.GuildVoiceStates,
                GatewayIntentBits.GuildInvites,
                GatewayIntentBits.GuildBans,
            ], partials: [Partials.Channel]
        })
    },
    modules: function () {
        require('./modules/otherfunc/goose').goose()
        require('./modules/otherfunc/newmember').new()
        global.color = require('./modules/commands/color')
        global.help = require('./modules/commands/help')
        global.purge = require('./modules/commands/purge')
        global.reboot = require('./modules/commands/reboot')
        global.flipcoin = require('./modules/commands/flipcoin')
    }
}
