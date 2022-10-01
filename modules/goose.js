// FILE REQUIREMENTS
const { Channel, Message, MessageEmbed, MessageAttachment, GuildMember, MessageReaction } = require('discord.js');

//FUNCTIONS
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = {
    goose : function() {
        client.on('messageCreate', async message => {
            if (message.author.bot) return
            if (message.channel.name == 'goose-chat') {
                if (message.author.id == '821863429421137920'){
                    if(message.content.toLowerCase().startsWith('pp') && message.content.toLowerCase().endsWith('pp')){
                        if(message.content.toLowerCase().match(/([p])/)){
                            if(null){
                                return
                            } 
                            else {
                                return message.channel.send('pp')
                            }
                        } 
                        else {
                            return
                        }
                    }
                }
                
                if (message.content.toLowerCase().startsWith('who is')){
                    if(message.content.toLowerCase().endsWith('liam')){
                        return message.channel.send('I like Liam he is the best!');
                    }
                }

                if (message.content.toLowerCase().includes('liam')){
                    if (message.content.toLowerCase().includes('gay')){
                        if (message.content.toLowerCase().includes('not')){
                            return message.author.send('No... he is 50/50')
                        } else{
                            return message.author.send('Its 50/50')
                        }
                    }
                }

                message.content = message.content.replace(/@(everyone)/gi, "everyone").replace(/@(here)/gi, "here");
                if (!message.content) return message.channel.send('You do realize you have to speak to actually talk right?');
                fetch(`https://chatbot-api.vercel.app/api/?message={${encodeURIComponent(message.content)}}&name=Goose&developer_name=Lemons&user=1241516346&vocabulary=20000&birthplace=Alabama&birthyear=2010&gender=female&species=bird`)
                    .then(res => res.json())
                    .then(data => {
                        if(!data.message || message.content == data.message) return message.channel.send('ERROR: 404 \nCould not connect')
                        client.user.setStatus('invisible')
                        message.channel.send(`${data.message}`);
                    });
                    
            }
        });
    }
}