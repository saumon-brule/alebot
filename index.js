const Discord = require("discord.js");
const config = require("./config.json");

const Client = new Discord.Client({ partials: ["CHANNEL"], intents: 19992575 });

// Error handling 

process.on("exit", code => {console.log("Le processus s'est arrêté avec le code : " + code) });
process.on("uncaughtException", (err, origin) => { console.log("[UNCAUGHT_EXCEPTION] : " + err, "Origine : " + origin)});
process.on("unhandledRejection", (reason, promise) => { console.log("[UNHANDLED_REJECTION] : " + reason, "Promise : " + promise)});
process.on("warning", (...args) => { console.log("[WARNING] :", ...args)});

["commands", "cooldowns", "buttons", "selects"].forEach(x => Client[x] = new Discord.Collection());
["CommandUtil", "EventUtil", "ButtonUtil", "SelectUtil"].forEach(handler => { require(`./src/utils/handlers/${handler}`)(Client) });


Client.login(config.token);