const fs = require('fs');
const path = require('path');

function loadCommands() {
    const commands = new Map();
    const commandFiles = fs.readdirSync(path.join(__dirname, '..', 'commands')).filter(file => file.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(path.join(__dirname, '..', 'commands', file));
        commands.set(command.name, command);
    }

    return commands;
}

module.exports = { loadCommands };
