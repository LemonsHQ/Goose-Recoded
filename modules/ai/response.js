const { Events, PresenceUpdateStatus } = require('discord.js');
const responses = require('respones.js').arrays()

module.exports = {
    read : function() {
        client.on(Events.MessageCreate, async message => {
            if (!message.author.bot()) {
                //the instances of a conversation
                let instance1 = message.content.toLowerCase().includes(responses.greetings);
                let instance2 = message.content.toLowerCase().includes(responses.greetings && responses.convos1);
                let instance3 = message.content.toLowerCase().includes(responses.greetings && responses.convos2);
                let instance4 = message.content.toLowerCase().includes(responses.resexp);
                if(instance1) {
                    //the corresponding objects in the array
                    let int = Math.floor(Math.random() * 10) + 1
                    message.reply(responses.greetings[int])
                }else if (instance2){
                    let int = Math.floor(Math.random() * 4) + 1
                    message.reply(responses.expressions)
                }else{
                    return;
                }
            }
        });
    }
}