const commandoLibrary = require('discord.js-commando');

class coinFlip extends commandoLibrary.Command{
    constructor(client){
        super(client, {
            name: 'coin',
            group: 'simple',
            memberName: 'coin',
            description: 'Flips a coin. Says if it landed on heads or tails.'
        });
    }

    async run (message, args) {
        var flip = Math.floor(Math.random() * 2);
        if(flip == 0){
            message.channel.sendMessage('You got heads!');
        } else{
            message.channel.sendMessage('You got tails!');
        }
    }
}

module.exports = coinFlip 