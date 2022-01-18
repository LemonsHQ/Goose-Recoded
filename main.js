module.exports = {
    maindepend : function(){
        Discord = require('discord.js');
        fs = require('fs');
        config = require('./config.json')
        client = new Discord.Client({
            intents: [
                Discord.Intents.FLAGS.GUILDS,
                Discord.Intents.FLAGS.GUILD_MESSAGES,
                Discord.Intents.FLAGS.GUILD_PRESENCES,
                Discord.Intents.FLAGS.DIRECT_MESSAGES,
                Discord.Intents.FLAGS.DIRECT_MESSAGE_REACTIONS,
                Discord.Intents.FLAGS.GUILD_MEMBERS,
                Discord.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
                Discord.Intents.FLAGS.GUILD_WEBHOOKS,
                Discord.Intents.FLAGS.GUILD_VOICE_STATES,
                Discord.Intents.FLAGS.GUILD_INVITES,
                Discord.Intents.FLAGS.GUILD_BANS,
            ],partials: ["CHANNEL"]
        })
    },
    modules : function(){
        require(`./modules/templatecommand.js`).template()
        require(`./modules/commands/purge.js`).purge()
        require(`./modules/commands/flipcoin.js`).coin()
    }
}