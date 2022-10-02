module.exports = {
    new : function() {
        client.on('guildMemberAdd', member => {
            member.roles.add('1020274056056025139');
        })
    }
}