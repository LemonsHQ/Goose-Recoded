// PYRO UCn_5PvUxMzXNhbhZYxd_2OA
// GHYZU UCXbDjsPTwGAaLLAj4w2IJbA
// LEMONSHQ UCrjp7KnDuNi1blDfPxB0T4A
// Lavender UCQU0z0Tp1M75-vKWzJVXbNg
// Vox777
module.exports = {
    youtube: function () {
        ytcs = ['UCn_5PvUxMzXNhbhZYxd_2OA','UCXbDjsPTwGAaLLAj4w2IJbA','UCrjp7KnDuNi1blDfPxB0T4A', 'UCQU0z0Tp1M75-vKWzJVXbNg','UC1TBaSfC_fnzpSNy5ow5BsQ']
        client.on('messageCreate', message =>{
            if(message.author.bot) return false; 
            channel = client.channels.cache.find(channels => channels.name.toLowerCase().includes('uploads'))
            !channel ? console.log('No channel named upload') :
            ytcs.forEach(ytc => {
                ytch.getChannelVideos(ytc,'newest', 0)
                .then((response) => {
                    let recent = response.items
                    let author = recent[0].author
                    let videoid = recent[0].videoId
                    let title = recent[0].title
                    let thumbnail = recent[0].videoThumbnails[3].url
                    let data = require(`../youtuberdata/${author}s data`);
                    if (!data) fs.writeFile(data);
                    fs.readFile(`./youtuberdata/${author}s data`, function (err,data){
                        if(data.toString().includes(videoid)) return false;
                        let YoutubeEmbed = new Discord.MessageEmbed()
                            // EMBED CUSTOMIZE
                            .setColor('DARK_RED')
                            .setTitle(`**${title}**`)
                            .setImage(`${thumbnail}`)
                            .setAuthor({name: `Youtube`})
                            .setDescription(`Make sure to subscribe to ${author}`)
                            .setURL(`https://youtube.com/watch?v=${videoid}`)
                            .setTimestamp()
                            //EMBED CUSTOMIZE
                        console.log('New Video: ' + videoid)
                        channel.send({ embeds: [YoutubeEmbed]})
                        fs.writeFile(`./youtuberdata/${author}s data`, `'${videoid}'`, function (err){})
                    })
                })   
            })
        })
    }
}