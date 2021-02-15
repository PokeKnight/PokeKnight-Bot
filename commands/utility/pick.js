const Discord = require('discord.js');
const config = require('../../configs/config.json');
const Pokemon = require('pokemon.js')
module.exports = {
  name: "pick",
  aliases: [""],
  category: "Utility",
  description: "Pick a starter your journey",
  usage: "pick <pokemon>",
  run: async (client, message, args) => {
        const db = require('quick.db')
        if(!args[0]) return message.channel.send('That is not a valid starter') 
        const picked = db.fetch(`started_${message.author.id}`)
       if(picked) return message.channel.send('You have already picked your starter')
const starters = ["Bulbasaur", "Charmander", "Squirtle", "Chikorita", "Cyndaquil", "Totodile", "Treecko", "Torchic", "Mudkip", "Turtwig", "Chimchar", "Piplup", "Snivy", "Tepig", "Oshawott ", "Chespin", "Fenniken", "Froakie ", "Rowlett", "Litten", "Popplio", "Grookey", "Scorbunny", "Sobble", "Pikachu", "Eevee"]
if(!message.content.endsWith("Bulbasaur" || "Charmander" || "Squirtle", "Chikorita" || "Cyndaquil" || "Totodile" || "Treecko" || "Torchic", "Mudkip" || "Turtwig" || "Chimchar"||"Piplup"||"Snivy"||"Tepig" ||"Oshawott "||"Chespin"||"Fenniken"||"Froakie "||"Rowlett"||"Litten"||"Popplio"||"Grookey" || "Scorbunny" || "Sobble" || "Pikachu" || "Eevee")) {
  db.push(`pokemon_${message.author.id}`, args[0])
  message.channel.send(`You have picked ${args[0]} as your first parthner`)
  db.set(`started_${message.author.id}`, 1)

   
  } 
  if(message.content.endsWith("Bulbasaur" || "Charmander" || "Squirtle", "Chikorita" || "Cyndaquil" || "Totodile" || "Treecko" || "Torchic", "Mudkip" || "Turtwig" || "Chimchar"||"Piplup"||"Snivy"||"Tepig" ||"Oshawott "||"Chespin"||"Fenniken"||"Froakie "||"Rowlett"||"Litten"||"Popplio"||"Grookey" || "Scorbunny" || "Sobble" || "Pikachu" || "Eevee")) return message.channel.send('Thats not a starter')
  }
  }