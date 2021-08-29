const { readdirSync } = require('fs');
const { Collection } = require('discord.js');
const { join } = require('path');

const prefix = 'pt!';

module.exports = function load(client) {
  const path = join(process.cwd(), 'commands');
  const files = readdirSync(path)
    .filter((file) => file.endsWith('.js'));

  client.commands = new Collection();
  
  for (const file of files) {
    const command = require(`${path}/${file}`);
    
    client.commands.set(command.name, command);
    
    console.log(`Paktayıl | Komut yüklenildi: ${command.name}`);
  }
  
  client.on('message', async (message) => {
    if (message.author.bot || !message.content.startsWith(prefix)) return;
    
    const args = message.content
      .trim()
      .slice(prefix.length)
      .split(/ +/);
    const command = args.shift().toLowerCase();
    
    const cmd = client.commands.get(command) ||
      client.commands.find((c) => c.aliases.includes(command));
    
    if (!cmd) return;

    try {
      await cmd.run(client, message, args);
    } catch (err) {
      await message.channel.send(`An error occured while trying to execute the **${cmd.name}** command, please try again later.`);

      console.error(`An error occured while trying to execute the '${cmd.name}' command:\n${err.stack}`);
    }
  });
};
