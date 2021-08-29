module.exports = async function login(client) {
  client.once('ready', async () => {
    await client.user.setPresence({
      activity: {
        name: 'Paktayl',
        type: 'COMPETING'
      },
      status: 'idle'
    });
  });

  await client.login('Your Discord bot token goes here');
};
