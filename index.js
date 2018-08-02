const Discord = require('discord.js');
const client = new Discord.Client();
const bot = new Discord.Client()

client.on('ready', () => {
  console.log(`Bot carregado ${client.user.tag}!`);
});

bot.on('ready', () => {
  console.log(`Bot carregado ${bot.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!on') {
    msg.reply('estou vivo');
  }
});

bot.on('message', msg => {
  if (msg.content === '!on') {
    msg.reply('estou vivo');
  }
});

client.login(process.env.TOKEN);
bot.login(process.env.TOKEN2);
