const commandoLibrary = require('discord.js-commando');

class ResetTeam extends commandoLibrary.Command{
    constructor(client){
        super(client, {
            name: 'reset_team',
            group: 'team',
            memberName: 'reset_team',
            description: 'Resets a team'
        });
    }

    async run (message, args) {
        currentTeamMembers = []
        message.channel.sendMessage('The team has now been reset');
    }
}

module.exports = ResetTeam 