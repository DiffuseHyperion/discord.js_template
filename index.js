const env = require('dotenv').config()
const { appid, permval } = require("./config.json")
const start = require("./bot.js")
console.log("Initiating functions!")
start.commander()
start.eventer()
start.bot.login(process.env.token);
console.log(`https://discord.com/oauth2/authorize?client_id=${appid}&scope=bot&permissions=${permval}`)
process.traceDeprecation = true;
