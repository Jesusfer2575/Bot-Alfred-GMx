const dotenv = require('dotenv');
dotenv.config();
const Discord = require('discord.js');
const messages = require('./assets/messages');
const commands = require('./assets/commands');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Estoy listo joven Wayne!`);
});

client.on('message', msg => {
  if (msg.content === commands.alfred)
    msg.reply(messages.alfred);
  
  if (msg.content === commands.rules)
    msg.reply(messages.rules);

  if (msg.content === commands.welcome)
    msg.reply(messages.welcome);
  
  if (msg.content === commands.gear) {
    msg.reply(messages.gear);
  }
    
});

client.login(process.env.CLIENT_TOKEN);