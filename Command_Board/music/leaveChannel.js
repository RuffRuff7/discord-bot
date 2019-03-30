const commandoLibrary = require('discord.js-commando');

class leaveChannel extends commandoLibrary.Command{
    constructor(client){
        super(client, {
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'Leaves your voice channel'
        });
    }

    async run (message, args) {
        if(message.guild.voiceConnection){
            message.guild.voiceConnection.disconnect();
        } else {
            message.channel.sendMessage('I am not in a voice channel!');
        }
    }
}

module.exports = leaveChannel 