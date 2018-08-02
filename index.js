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
var codigo = msg.content.split(" ")
  if (msg.content === '!entrar') {
 client.acceptInvite(codigo[1])
    msg.reply('Entrei neste servidor!');
  }
});

bot.on('message', msg => {
var codigo = msg.content.split("")
  if (msg.content === '!entrar') {
 bot.acceptInvite(codigo[1])
    msg.reply('Entrei neste servidor!');
  }
});

client.login(process.env.TOKEN);
bot.login(process.env.TOKEN2);
