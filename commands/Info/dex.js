const Discord = require('discord.js');
const config = require('../../configs/config.json');
const Pokemon = require('pokemon.js')
module.exports = {
  name: "dex",
  aliases: ["pokedex"],
  category: "Info",
  description: "Dex a mon",
  usage: "dex <pokemon>",
  run: async (client, message, args) => {

        const db = require('quick.db')
        const yyy = db.fetch(`started_${message.author.id}`)
   if(!yyy) return message.channel.send('You havenot started yet')
      if(!args[0]) return message.channel.send('Pls Give Me a Pokemon to dex')
  const fetch = require('node-fetch')
  if(args[0] === 'bidoof') {
    const { getPokemon } = require('../../utils/pokemon')
       const pokeData = await getPokemon('bidoof');
            const { 
                sprites, 
                stats, 
                weight, 
                name, 
                id, 
                base_experience,
                abilities,
                types
            } = pokeData;
if(!message.content.includes("shiny")) {
              const kek= `https://play.pokemonshowdown.com/sprites/ani/bidoof.gif`
            const embed = new Discord.MessageEmbed();
            embed.setTitle(`Base stats for ${name}`)
            
            embed.setImage(kek);
           embed.addField('hp', '999',false);
           embed.addField('attack', '999',false);
            embed.addField('defense', '999',false);
             embed.addField('special-attack', '999',false);
              embed.addField('special-defense', '999',false);
               embed.addField('speed', '999',false);

             embed.addField('Type', 'normal', false);
            embed.setColor('GREEN')
            embed.addField('Weight', '999', false);
            embed.addField('Base Experience', '999', false)
            embed.setFooter(`PokeDex Number: ${id}`);
             message.channel.send(embed);
}

  } 
  if(message.content.includes("shiny bidoof")) {
const { getPokemon } = require('../../utils/pokemon')
       const pokeData = await getPokemon('bidoof');
            const { 
                sprites, 
                stats, 
                weight, 
                name, 
                id, 
                base_experience,
                abilities,
                types
            } = pokeData;
              const kek= `https://play.pokemonshowdown.com/sprites/ani-shiny/bidoof.gif`
            const embed = new Discord.MessageEmbed();
            embed.setTitle(`Base stats for Bidoof`)
            
            embed.setImage(kek);
           embed.addField('hp', '999',false);
           embed.addField('attack', '999',false);
            embed.addField('defense', '999',false);
             embed.addField('special-attack', '999',false);
              embed.addField('special-defense', '999',false);
               embed.addField('speed', '999',false);
                embed.addField('Weight', '200',false);
                 embed.addField('Base Experience', '999',false);
             embed.addField('Type', 'normal', false);
            embed.setColor('GREEN')
            embed.addField('Weight', '999', false);
            embed.addField('Base Experience', '999', false)
            embed.setFooter(`PokeDex Number: ${id}`);
             message.channel.send(embed);
}
  if(!message.content.includes("bidoof")) {
if(!message.content.includes('shiny')){
     const pokemon = args[0];
const { getPokemon } = require('../../utils/pokemon')

 try {
   
            const pokeData = await getPokemon(pokemon);
            const { 
                sprites, 
                stats, 
                weight, 
                name, 
                id, 
                base_experience,
                abilities,
                types
            } = pokeData;
            const kek= `https://play.pokemonshowdown.com/sprites/ani/${name}.gif`
               
            const embed = new Discord.MessageEmbed();
            embed.setTitle(`Base stats for ${name}`)
            
            embed.setImage(kek);
            stats.forEach(stat => embed.addField(stat.stat.name, stat.base_stat,false));
            types.forEach(type => embed.addField('Type', type.type.name, false));
            embed.setColor('GREEN')
            embed.addField('Weight', weight, false);
            embed.addField('Base Experience', base_experience, false)
            embed.setFooter(`PokeDex Number: ${id}`);
            return message.channel.send(embed);
        }
        catch(err) {
            console.log(err);
            message.channel.send(`Pokemon ${pokemon} does not exist.`);
        }
}
if(message.content.includes('shiny')){
       const pokemon = args[1];
const { getPokemon } = require('../../utils/pokemon')

 try {
   
            const pokeData = await getPokemon(pokemon);
            const { 
                sprites, 
                stats, 
                weight, 
                name, 
                id, 
                base_experience,
                abilities,
                types
            } = pokeData;
            const kek= `https://play.pokemonshowdown.com/sprites/ani-shiny/${pokemon}.gif`
            if(pokemon === 'calyrex-shadow-rider') kek = `https://play.pokemonshowdown.com/sprites/ani-shiny/calyrex-shadow.gif`
            const embed = new Discord.MessageEmbed();
            embed.setTitle(`Base stats for ${name}`)
            
            embed.setImage(kek);
            stats.forEach(stat => embed.addField(stat.stat.name, stat.base_stat,false));
            types.forEach(type => embed.addField('Type', type.type.name, false));
            embed.setColor('GREEN')
            embed.addField('Weight', weight, false);
            embed.addField('Base Experience', base_experience, false)
            embed.setFooter(`PokeDex Number: ${id}`);
            return message.channel.send(embed);
        }
        catch(err) {
            console.log(err);
            message.channel.send(`Pokemon ${pokemon} does not exist.`);
        }
}
  }
  if(message.content.includes('calyrex-shadow-rider')) {
    if(!message.content.includes('shiny')) {

    
   message.channel.send(`https://play.pokemonshowdown.com/spirites/ani/calyrex-shadow.gif`)
    }
        if(message.content.includes('shiny')) {

    
   message.channel.send(`https://play.pokemonshowdown.com/spirites/ani-shiny/calyrex-shadow.gif`)
    }
  }
   if(message.content.includes('calyrex-ice-rider')) {
if(!message.content.includes('shiny')) {

    
   message.channel.send(`https://play.pokemonshowdown.com/spirites/ani/calyrex-ice.gif`)
    }
        if(message.content.includes('shiny')) {

    
   message.channel.send(`https://play.pokemonshowdown.com/spirites/ani-shiny/calyrex-ice.gif`)
    }
    }
  }
}