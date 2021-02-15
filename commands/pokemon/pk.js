const Discord = require('discord.js');
const config = require('../../configs/config.json');
const Pokemon = require('pokemon.js')
module.exports = {
  name: "pokemon",
  aliases: ["pk"],
  category: "Pokemon",
  description: "show your pokemon",
  usage: "pokemon",
  run: async (client, message, args) => {
      const db = require('quick.db')
       const yyy = db.fetch(`started_${message.author.id}`)
   if(!yyy) return message.channel.send('You havenot started yet')
      const pokemon = db.fetch(`pokemon_${message.author.id}`)
      const embed = new Discord.MessageEmbed()
      .setTitle('Your pokemons')
      .setDescription(pokemon,  {
      split: { char: "\n" }})
      .setColor('RANDOM');
    
    message.channel.send(embed)
    }
}