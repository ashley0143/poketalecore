const { Client } = require('discord.js');

const client = new Client();

require('./utilities/loader.js')(client);
require('./utilities/client.js')(client);
