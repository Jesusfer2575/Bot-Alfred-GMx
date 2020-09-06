const dotenv = require('dotenv');
dotenv.config();

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/public/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT, () => {
  console.log(`Servidor alojado en el puerto: ${process.env.PORT}`);
});

const Discord = require('discord.js');

const messages = require('./assets/messages');
const commands = require('./assets/commands');

const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Estoy listo joven Wayne!`);
});

client.on('guildMemberAdd', (member) => {
  member.send(messages.welcome + ' test');
});

client.on('message', msg => {
  if (msg.content === commands.alfred)
    msg.reply(messages.alfred);
  
  if (msg.content === commands.rules)
    msg.reply(messages.rules);

  if (msg.content === commands.welcome)
    msg.reply(messages.welcome);
  
  if (msg.content === commands.gear)
    msg.reply(messages.gear);

  if (msg.content === commands.chasquea)
    msg.reply(messages.chasquea);
    
});

client.login(process.env.CLIENT_TOKEN);