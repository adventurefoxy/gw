const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 


client.on("ready", () => {
  console.log(`Bot started with ${client.users.size} users, ${client.channels.size} channels and in ${client.guilds.size} servers.`); 
  client.user.setPresence({ game: { name: 'Metal Gear Solid 2: Sons Of Liberty', type: 1, url: 'https://www.twitch.tv/milesfox64'} });
    //0 = Jogando
    //  1 = Transmitindo
    //  2 = Ouvindo
    //  3 = Assistindo
});

client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  
  if(command === "say") {
    // makes the bot say something and delete the message. As an example, it's open to anyone to use. 
    // To get the "message" itself we join the `args` back into a string with spaces: 
    const sayMessage = args.join(" ");
    // Then we delete the command message (sneaky, right?). The catch just ignores the error with a cute smiley thing.
    message.delete().catch(O_o=>{}); 
    // And we get the bot to say the thing: 
    message.channel.send(sayMessage);
}

if(command === "hello") {

    message.channel.send("Hello Boss", {file:"https://media3.giphy.com/media/muNcDSuINVr1e/giphy.gif?cid=790b76115cfedc6562446179550657a3&rid=giphy.gif"});
}

if(command === "dor") {

	message.channel.send("!play sins of the father");
	message.channel.send("!seek 4:49");
}
 
  if(command === "ping") {
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);
  }
  
});

client.login(config.token);