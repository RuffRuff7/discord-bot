const commandoLibrary = require('discord.js-commando');
const ytdl = require('ytdl-core');

function Music(connection, message)
{
    var server = servers[message.guild.id];
    console.log(typeof(server.queue[0]))
    server.dispatcher = connection.playStream(ytdl(`${server.queue[0]}`, {filter: "audioonly"}));
    server.queue.shift();
    server.dispatcher.on("end", function(){
        if(server.queue[0])
        {
            Music(connection,message);
        } 
        else 
        {
            connection.disconnect();
        }
    })
}

class playMusic extends commandoLibrary.Command
{
    constructor(client)
    {
        super(client, {
            name: 'play',
            group: 'music',
            memberName: 'play',
            description: 'Plays music'
        });
    }

    async run (message, args) 
    {
        if(message.member.voiceChannel)
        {
            if(!message.guild.voiceConnection)
            {
                if(!servers[message.guild.id]) 
                {
                    servers[message.guild.id] = {queue: []};
                }
                message.member.voiceChannel.join()
                    .then(connection =>{
                        var server = servers[message.guild.id];
                        message.channel.sendMessage('I have joined!');
                        server.queue.push(args)
                        Music(connection, message);
                    })
            }
        } else {
            message.channel.sendMessage('You are not in a voice channel!');
        }
    }
}

module.exports = playMusic; 