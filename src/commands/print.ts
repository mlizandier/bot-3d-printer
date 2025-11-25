import { fetch } from "bun";
import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";

export const PrintCommand = {
  data: new SlashCommandBuilder()
    .setName("print")
    .setDescription("USAGE: /ping <url> <description>"),

  async execute(interaction: ChatInputCommandInteraction) {
    // TODO: implement and handle server response
    await interaction.reply("print");
  },
};
