const { Events, PresenceUpdateStatus } = require('discord.js');
module.exports = {
    goose : function() {
        client.on(Events.MessageCreate, async message => {
            if (message.author.bot || message.channelId !== process.env.goose_chat) return;
            let messageToLowerCase = message.content.toLowerCase();

            if(message.author.id === process.env.pp_user && messageToLowerCase.startsWith('pp') && messageToLowerCase.endsWith('pp')) {
                return message?.channel.send('pp');
            }

            if (messageToLowerCase.startsWith('who is') && messageToLowerCase.endsWith('liam')){
                return message?.channel.send('I like Liam he is the best!');
            }

            if (messageToLowerCase.includes('liam') && messageToLowerCase.includes('gay')){
                return message.author.send( messageToLowerCase.includes('not') ? 'No... he is 50/50' : 'Its 50/50');
            }

            message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
            if (!message.content) return message?.channel.send('You do realize you have to speak to actually talk right?');

            let urlSearchParms = new URLSearchParams();
            urlSearchParms.append('message', encodeURIComponent(message.content));
            urlSearchParms.append('name', 'Goose');
            urlSearchParms.append('developer_name', 'Lemons');
            urlSearchParms.append('user', 1241516346..toString());
            urlSearchParms.append('vocabulary', 20000..toString());
            urlSearchParms.append('birthplace', 'Alabama');
            urlSearchParms.append('birthyear', 2010..toString());
            urlSearchParms.append('gender', 'female');
            urlSearchParms.append('species', 'bird');
            let url = new URL('https://chatbot-api.vercel.app/api')
            url.search = urlSearchParms.toString()
            await fetch(url)
            .then(res => res.json())
            .then(data => {
                if(!data.message || message.content === data.message) return message?.channel.send('ERROR: 404 \nCould not connect')
                client.user.setStatus(PresenceUpdateStatus.Online)
                return message?.channel.send(data.message);
            });
        });
    }
}