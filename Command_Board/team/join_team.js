const commandoLibrary = require('discord.js-commando');

class JoinTeam extends commandoLibrary.Command{
    constructor(client){
        super(client, {
            name: 'join_team',
            group: 'team',
            memberName: 'join_team',
            description: 'Joins a team'
        });
    }

    async run (message, args) {
        currentTeamMembers.push(message.author)
    }
}

module.exports = JoinTeam 