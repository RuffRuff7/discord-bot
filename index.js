const commandoLibrary = require('discord.js-commando');
const discordLibrary = require('discord.js')
const bot = new commandoLibrary.Client();
const key = 'NTUyNjYzMjYxMDc4NzQ5MjA3.D2C0Hw.JpcBKWbofveejAajz4Js84Bbv-o'

bot.registry.registerGroup('simple', 'Clean');
bot.registry.registerGroup('music', 'Music');
bot.registry.registerGroup('team', 'Organization')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/Command_Board');

global.currentTeamMembers = [];
global.servers = [];

bot.on('message', function(message){
    if(message.content == 'Hello'){
        message.channel.sendMessage('Hey, hows your day?');
    } else if(message.content == "What's the current team?") {
        var teamInfo = new discordLibrary.RichEmbed()
            .setTitle('Current Team Members')
        for(var i = 1; i < currentTeamMembers.length + 1; i++) {
            teamInfo.addField('Member ' + i, currentTeamMembers[i - 1].username)
        }
        message.channel.sendMessage(teamInfo)
    } else if(message.content == 'Fac') {
        let faction1 = message.member.guild.roles.find('name', 'Faction 1');
        let faction2 = message.member.guild.roles.find('name', 'Faction 2');
        let faction3 = message.member.guild.roles.find('name', 'Faction 3');
        let facChoice = Math.floor(Math.random() * 3);
        if(facChoice == 0) {
            message.member.addRole(faction1)
        } else if(facChoice == 1) {
            message.member.addRole(faction2)
        } else {
            message.member.addRole(faction3)
        }
        message.channel.sendMessage(message.author + ' has joined Faction ' + (facChoice + 1))
    }
})

bot.on('ready', function(){
    console.log('Ready')
});

bot.on('guildMemberAdd', function(member){
    member.send('Welcome')
    let faction1 = member.guild.roles.find('name', 'Faction 1');
    let faction2 = member.guild.roles.find('name', 'Faction 2');
    let faction3 = member.guild.roles.find('name', 'Faction 3');
    let facChoice = Math.floor(Math.random() * 3);
    if(facChoice == 0) {
        member.addRole(faction1)
    } else if(facChoice == 1) {
        member.addRole(faction2)
    } else {
        member.addRole(faction3)
    }
    message.channel.sendMessage(message.author + ' has joined Faction ' + (facChoice + 1))
});

bot.login(key);