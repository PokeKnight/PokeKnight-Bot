const Discord = require('discord.js');
const config = require('../../configs/config.json');
const Pokemon = require('pokemon.js')
module.exports = {
  name: "forcespawn",
  aliases: [""],
  category: "Pokemon",
  description: "force spawn a pokemon",
  usage: "forcespawn <pokemon>",
  run: async (client, message, args) => {
    const owners = [
      '713329231840411700','728590937441304586'];

   if(owners.includes(message.author.id)) {
        const db = require('quick.db')
     if(message.content.includes('shadow-rider')){
 const { getPokemon } = require('../../utils/pokemon')

   
            const pokeData = await getPokemon('calyrex-shadow-rider');
            const { 
                name,
                id
              
            } = pokeData;
               const embed = new Discord.MessageEmbed()
   .setTitle('A wild pokèmon has appeared!')
   .setColor("RANDOM")
   .setDescription('Use .catch <pokémon> to catch it')
.setImage(`https://play.pokemonshowdown.com/sprites/ani/calyrex-shadow.gif`)
message.channel.send(embed)
db.set(`latestmon_${message.guild.id}`, `${id}`)
     }
     
          if(!message.content.includes('shadow-rider' || 'ice-rider')){
     const { getPokemon } = require('../../utils/pokemon')

   
            const pokeData = await getPokemon(args[0]);
            const { 
                name,
                id
              
            } = pokeData;
    
   const embed = new Discord.MessageEmbed()
   .setTitle('A wild pokèmon has appeared!')
   .setColor("RANDOM")
   .setDescription('Use .catch <pokémon> to catch it')
.setImage(`https://play.pokemonshowdown.com/sprites/ani/${name}.gif`)
message.channel.send(embed)
db.set(`latestmon_${message.guild.id}`, `${id}`)
    }
        if(message.content.includes('ice-rider')){
 const { getPokemon } = require('../../utils/pokemon')

   
            const pokeData = await getPokemon('calyrex-ice-rider');
            const { 
                name,
                id
              
            } = pokeData;
               const embed = new Discord.MessageEmbed()
   .setTitle('A wild pokèmon has appeared!')
   .setColor("RANDOM")
   .setDescription('Use .catch <pokémon> to catch it')
.setImage(`https://play.pokemonshowdown.com/sprites/ani/calyrex-ice.gif`)
message.channel.send(embed)
db.set(`latestmon_${message.guild.id}`, `${id}`)
     }
   }
}
}