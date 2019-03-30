const commandoLibrary = require('discord.js-commando');

class diceRoll extends commandoLibrary.Command{
    constructor(client){
        super(client, {
            name: 'dice',
            group: 'simple',
            memberName: 'dice',
            description: 'Rolls a die and says what you rolled'
        });
    }

    async run (message, args) {
        var diceRoll = Math.floor(Math.random() * 6) + 1;
        message.channel.sendMessage('You rolled a ' + diceRoll)
    }
}

module.exports = diceRoll 