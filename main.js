module.exports = {
    maindepend : function(){
        //SlashCommandBuilder = require('@discordjs/builders');
        //PermissionFlagsBits = require('discord-api-types/v10');
       // REST = require('@discordjs/rest');
        //ROUTES = require('discord-api-types/v9');
        Discord = require('discord.js');
        fs = require('fs');
        ytch = require('yt-channel-info');
        fetch = require('node-fetch');
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
        require(`./modules/goose.js`).goose()
		require(`./modules/newmember.js`).new()
        require(`./modules/colorcommand.js`).colors()
        require(`./modules/help.js`).help()
        //require(`./modules/purge.js`).purge()
    }
}
