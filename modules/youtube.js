// PYRO UCn_5PvUxMzXNhbhZYxd_2OA
// GHYZU UCXbDjsPTwGAaLLAj4w2IJb
// LEMONSHQ UCrjp7KnDuNi1blDfPxB0T4A
module.exports = {
    youtube: function () {
        client.on('messageCreate', message =>{
            channel = client.channels.cache.find(channels => channels.name.toLowerCase().includes('uploads'))
            !channel ? console.log('No channel named upload') : ytch.getChannelInfo(ytcs, 0)
                .then(
                    (response) => {
                        subs = response.subscriberText,
                        videos = forEach(ytcs => {ytch.getChannelVideos(ytcs, 'newest', 0)}),
                        recent = videos.items, 
                        videoid = recent[0].videoId,
                        author = recent[0].author,
                        title = recent[0].title,
                        thumbnail = recent[0].videoThumbnails[3].url,
                        data = `./${author}s data`,
                            fs.readFile(data, function (err,data){
                                message.author.bot ? false : (data.includes(videoid) ? false : console.log('New Video: ' + videoid))
                                YoutubeEmbed = new Discord.MessageEmbed()
                                    // EMBED CUSTOMIZE
                                    .setColor('#6a0dad')
                                    .setTitle(`${author} Uploaded a New Video!\n${title}!\nMake sure to subscribe to ${author}!!!`)
                                    .setImage(`${thumbnail}`)
                                    .setAuthor({name: 'Odus', icon: `${client.user.displayAvatarURL()}`})
                                    .setDescription(`**${subs}**`)
                                    .setURL(`https://youtube.com/watch?v=${videoid}`)
                                    .setTimestamp()
                                    //EMBED CUSTOMIZE
                                channel.send({ embeds: [YoutubeEmbed]})
                                fs.writeFile(data, videoid, function (err){});
                            })
                    }
                )
                                 
        }).catch((err) => {console.log(err)})
    }
}