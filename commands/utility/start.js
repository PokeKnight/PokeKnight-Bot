const Discord = require('discord.js');
const config = require('../../configs/config.json');
const Pokemon = require('pokemon.js')
module.exports = {
  name: "start",
  aliases: [""],
  category: "Utility",
  description: "Start your journey",
  usage: "start",
  run: async (client, message, args) => {
        const db = require('quick.db')
       const embed = new Discord.MessageEmbed()
       .setThumbnail('https://media1.tenor.com/images/293c04be725ab3e63c6e4841faad64f5/tenor.gif?itemid=16494836')
       .setDescription(`
Hello ${message.author.username} 
Welcome to the world of Pokémon !
To begin with, choose your first Pokémon 
Example  - .pick torchic 
\n
** GENERATION 1 ** \n
Bulbasaur  | Charmander  | Squirtle 
\n
** GENERATION 2 ** \n
Chikorita | Cyndaquil  | Totodile
\n
** GENERATION 3 ** \n
Treecko | Torchic  | Mudkip
\n
** GENERATION 4 ** \n
Turtwig | Chimchar | Piplup
\n
** GENERATION 5 ** \n
Snivy | Tepig | Oshawott 
\n
** GENERATION 6 ** \n
Chespin | Fenniken | Froakie 
\n
** GENERATION 7 ** \n
Rowlett | Litten | Popplio
\n
** GENERATION 8 ** \n
Grookey  | Scorbunny | Sobble
\n
** Special ** \n
Pikachu | Eevee`) 
.setTimestamp()
.setColor("RANDOM")
.setImage('https://images-ext-1.discordapp.net/external/p6VBOTLuVZVeGA_Dd0eY8RagScLmIPafCjO7CtSs2h0/https/i.imgur.com/sY8w0zz.png');
message.channel.send(embed)
    }
}