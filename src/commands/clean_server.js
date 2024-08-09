const config = require("./config.json");

module.exports = {
    name: "clean_server",
    description: "Kick tous les étrangers du serveur",
    options: [],
    runSlash: (Client, interaction) => {
        const strangers = interaction.guild.roles.cache.get(config.roles.stranger).members;
        if (strangers.size) {
            strangers.forEach(stranger => {
               if (stranger.kickable) stranger.kick(); 
            });
            interaction.reply({
                "content": `Tous les intrus ont été kick par ${interaction.user}. :japanese_goblin:`
            })
        } else {
            interaction.reply({
                "content": "Il semblerait qu'il n'y ait aucun intru présent sur le serveur. :thinking:"
            })
        }
    }
}