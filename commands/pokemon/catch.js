const Discord = require('discord.js');
const config = require('../../configs/config.json');
const Pokemon = require('pokemon.js')
module.exports = {
  name: "catch",
  aliases: [""],
  category: "Pokemon",
  description: "catch a pokemon",
  usage: "catch <pokemon>",
  run: async (client, message, args) => {
    
        const db = require('quick.db')
         const yyy = db.fetch(`started_${message.author.id}`)
   if(!yyy) return message.channel.send('You havenot started yet')
        const pokemon = db.fetch(`latestmon_${message.guild.id}`)
      const { getPokemon } = require('../../utils/pokemon')
        const idd = Math.floor(Math.random() * 51);
 const pokeData = await getPokemon(pokemon);
 const { 
             
                name
            } = pokeData;
            if(!pokemon) return;
            if(!args[0] === name) return;
            message.channel.send(`You succesfully caught a ${name} of ${idd} level`);
            db.push(`pokemon_${message.author.id}`, name)
            await db.delete(`latestmon_${message.guild.id}`)
    }
}