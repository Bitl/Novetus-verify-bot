const express = require('express')
const app = express()
//needed for heroku
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Bot listening on port ${port}!`))

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.BOT_TOKEN);

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
	if (message.content.includes(process.env.WEB))
	{
		client.channels.cache.get(process.env.STAFF_CHANNEL_ID).send('NOTICE: Potentially underage user detected. Name: '.concat(message.author.tag,' | Channel: #',client.channels.cache.get(message.channel.id).name))
	}
});