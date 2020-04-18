const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
	if (message.content.includes(process.env.WEB))
	{
		client.channels.get(process.env.STAFF_CHANNEL_ID).send('NOTICE: Potentially underage user detected. Name: '.concat(message.author.username,'#',message.author.tag,' | Channel: #',message.guild.channels.get(message.channel.id).name))
	}
});

client.login(process.env.BOT_TOKEN);
//BOT_TOKEN is the Client Secret