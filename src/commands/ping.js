module.exports = {
  name: 'ping',
  aliases: ['pong'],
  async run(_, message) {
    await message.channel.send('Pongchamp');
  }
};
