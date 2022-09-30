module.exports = {
    new : function() {
        client.on('guildMemberAdd', member => {
            member.roles.add('919945743966548029');
        }) 
    }
}