const { SlashCommandBuilder } = require('@discordjs/builders');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('help')
		.setDescription('Get a list of available commands'),
	async execute(interaction) {
        const commands = interaction.client.commands.map(command => `${command.data.name}`);
        return interaction.reply(`Available commands: ${commands.join(', ')}`);
	},
};