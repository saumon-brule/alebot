const config = require("../../config.json")

module.exports = {
    name: "ready",
    once: true,
    async execute(Client) {
        console.log("Bot ON");
        // Client.channels.cache.get(config.channels.botMain).send((config.dev ? "BOT lancé en DEVELOPPEMENT" : "BOT lancé en PRODUCTION"));
        // Client.user.setPresence({ activities: [{ name: "PERUVERU NARUSISIKU"}]})
        Client.guilds.cache.get(config.server).commands.set(Client.commands.map(cmd => cmd))
    }
}