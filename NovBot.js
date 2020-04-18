const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('message', message => {
	if (message.content.includes(process.env.WEB))
	{
		client.channels.cache.get(process.env.STAFF_CHANNEL_ID).send('NOTICE: Potentially underage user detected. Name: '.concat(message.author.username,'#',message.author.tag,' | Channel: #<',message.channel.id,'>'))
	}
});