const Discord = require('discord.js')
const client = new Discord.Client();
client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
client.emotes = require('./configs/emotes.json')
const fs = require('fs')


client.categories = fs.readdirSync('./commands');

const chalk = require('chalk')
client.categories = fs.readdirSync('./commands');
client.on('ready', () => {
  console.log(chalk.red(`[READY] ${client.user.tag} started on ${client.guilds.cache.size} servers `))
})
const Pokemon = require('pokemon.js');

Pokemon.setLanguage('english');
const PokemonRandom = ["Pikachu", "Charmender", "Greninja", "Palkia", "Giratina", "Arceus"]
let response =
        PokemonRandom[Math.floor(Math.random() * PokemonRandom.length)];
const db = require('quick.db')

const config = require('./configs/config.json')
client.login(config.token)
let modules = ["Info", "utility", "owner", "pokemon"];

modules.forEach(function(module) {
  fs.readdir(`./commands/${module}`, function(error, files) {
    if (error) return new Error(`${error}`);
    files.forEach(function(file) {
      if (!file.endsWith(".js"))
        throw new Error(`A File Does Not End With .js!`);
      let command = require(`./commands/${module}/${file}`);
      console.log(`${command.name} Has Been Loaded - ✅`);
      if (command.name) client.commands.set(command.name, command);
      if (command.aliases) {
        command.aliases.forEach(alias =>
          client.aliases.set(alias, command.name)
        );
      }
      if (command.aliases.length === 0) command.aliases = null;
    });
  });
});
const Default_Prefix = config.prefix;
client.on("message", async message => {
  setInterval(async () => {
      const redirected = db.fetch(`redirect_${message.guild.id}`)
   
             const idd = Math.floor(Math.random() * 151);
    if(message.author.bot) return;

  
   if(redirected) {
  
     const { getPokemon } = require('./utils/pokemon')

   
            const pokeData = await getPokemon(idd);
            const { 
                name
              
            } = pokeData;
   
  
   const embed = new Discord.MessageEmbed()
   .setTitle('A wild pokèmon has appeared!')
   .setColor("RANDOM")
   .setDescription('Use .catch <pokémon> to catch it')
.setImage(`http://play.pokemonshowdown.com/sprites/ani/${name}.gif`)
redirected.send(embed)
}
db.set(`latestmon_${message.guild.id}`, `${idd}`)

   
   if(!redirected){
      
     const { getPokemon } = require('./utils/pokemon')

   
            const pokeData = await getPokemon(idd);
            const { 
                name
              
            } = pokeData;
    
   const embed = new Discord.MessageEmbed()
   .setTitle('A wild pokèmon has appeared!')
   .setColor("RANDOM")
   .setDescription('Use .catch <pokémon> to catch it')
.setImage(require(`./png/normal/${idd}.png`))
message.channel.send(embed)
db.set(`latestmon_${message.guild.id}`, `${idd}`)

   }       
            


  
}, 300000)
   

  if (message.author.bot || !message.guild || message.webhookID) return;
  let Prefix = await db.fetch(`Prefix_${message.guild.id}`);
  if (!Prefix) Prefix = Default_Prefix;

  if (!message.content.startsWith(Prefix)) return;
  
  let args = message.content
    .slice(Prefix.length)
    .trim()
    .split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let command =
    client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
  
  if (!message.guild.me.hasPermission("SEND_MESSAGES")) return;

  if (!command)
    return message.channel.send(
      `No Command Found - ${cmd.charAt(0).toUpperCase() + cmd.slice(1)}`
    );

  
    if (command) {
      command.run(client, message, args);
    }
 
});

