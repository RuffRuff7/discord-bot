const commandoLibrary = require('discord.js-commando');

class Mirror extends commandoLibrary.Command{
    constructor(client){
        super(client, {
            name: 'mirror',
            group: 'simple',
            memberName: 'mirror',
            description: 'Mirrors your reflection'
        });
    }

    async run (message, args) {
        message.reply(message.author.avatarURL);
    }
}

module.exports = Mirror