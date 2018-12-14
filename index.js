const { Client } = require("discord.js");
const { token, row, kauan } = require("./config.json");
const bot = new Client();

bot.login(token)

bot.on('message', message => {
    if(message.author.bot) return;

    if(!message.content.startsWith(row)) return;

    let comandos = message.content.split(" ")[0]

    comandos = comandos.slice(row.length)

    let args = message.content.split(" ").slice(1)

    try {
        let comando = require(`./comandos/row/${comandos}`)
        comando.run(bot,message,args)
    } catch(err) {
        console.log(err)
    }
})
bot.on('message', message => {
    if(message.author.bot) return;

    if(!message.content.startsWith(kauan)) return;

    let comandos = message.content.split(" ")[0]

    comandos = comandos.slice(kauan.length)

    let args = message.content.split(" ").slice(1)
    
    try {
        let comando = require(`./comandos/kauan/${comandos}`)
        comando.run(bot,message,args)
    } catch(err) {
        console.log(err)
    }
})
bot.on('ready', () => {
    console.log(`${bot.user.username} iniciado.`)
    bot.user.setGame("com amigos.")
})