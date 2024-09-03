const { Client, Events, PresenceUpdateStatus } = require('discord.js');
const responses = require('./responses.js').arrays()

module.exports = {
    read : function() {
        client.on(Events.MessageCreate, async message => {
            if (!message.author.bot && message.channelId === process.env.goose_chat) {
                //the instances of a conversation
                let content = message.content.toLowerCase()

                let instance1 = responses.greetings.some(word => content.includes(word));
                let instance2 = responses.greetings.concat(responses.convos1).some(word => content.includes(word));
                let instance3 = responses.greetings.concat(responses.convos2).some(word => content.includes(word));
                let instance4 = responses.resexp.some(word => content.includes(word));
                if(instance1) {
                    //the corresponding objects in the array
                    let int = Math.floor(Math.random() * 10)
                    return message.reply(responses.greetings[int])
                }else if (instance2){
                    let int = Math.floor(Math.random() * 4)
                    return message.reply(responses.expressions[int])
                }
            }
        });
    }
}