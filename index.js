const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "t!";
client.on("ready", message => {
    console.log("I am ready to Go");
});



client.on("message", message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 Pong - ${client.ws.ping}`)
    }
})

client.login("NjM2MzExNjY3MjM5NTUxMDA2.Xqd3mA.toyP9TaLS33PwPmvK8D1HqU4GmE") //Past your token here