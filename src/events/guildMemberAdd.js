const config = require("../../config.json");

module.exports = {
    name: "guildMemberAdd",
    once: false,
    async execute(_, member) {
        const role = member.guild.roles.cache.get(config.roles.default);
        member.roles.add(role);
    }
}