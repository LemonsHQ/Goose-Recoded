module.exports = (client, PresenceUpdateStatus, ActivityType) => {
    console.log(`Logged in as ${client.user.username}`);
    client.user.setPresence({
        status: PresenceUpdateStatus.Online,
        activities: [{name: 'for /help', type: ActivityType.Watching}]
    })
};