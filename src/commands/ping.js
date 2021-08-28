var {MessageEmbed} = require("discord.js")

module.exports = {
  name: "ping",
  aliases: ["pong"],
  run: async (client, message, args) => {

    message.channel.send("Pongchamp")
  }
}
