module.exports = {
    name: 'ping',
    description: 'Ping!',
    async execute(client, msg, args) {
        await msg.reply('Pong!');
    },
};
