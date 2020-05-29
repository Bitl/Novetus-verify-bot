const Discord = require('discord.js');
const client = new Discord.Client();

client.login("TOKEN");

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (message.content.includes("MESSAGE CONTENT"))
	{
		const channel = message.client.channels.cache.find(ch => ch.id === 'CHANNEL ID');
		if (!channel) 
		{
			console.error('Channel not in cache');
			return;
		}
		
		const channel2 = message.client.channels.cache.find(ch => ch.id === message.channel.id);
		if (!channel2)
		{
			console.error('Channel not in cache');
			return;
		}
		
		channel.send('NOTICE: Potentially underage user detected. Name: '.concat(message.author.tag,' | Channel: #',channel2.name));
	}
	
	if (message.channel.id == RECIEVINGCHANNELIDLONG && message.content.includes('[PUBLIC ANNOUNCEMENT]'))
	{
		const channel = message.client.channels.cache.find(ch => ch.id === 'CHANNEL ID');
		if (!channel) 
		{
			console.error('Channel not in cache');
			return;
		}
		
		channel.send('Announcement from: '.concat(message.author.username,': ', message.content))
	}
});