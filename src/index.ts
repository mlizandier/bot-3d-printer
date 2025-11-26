import { Client, Collection, Events, GatewayIntentBits } from "discord.js";
import { config } from "./config";
import { commandList } from "./commands";

// test
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
client.commands = new Collection();

for (const command of commandList) {
  client.commands.set(command.data.name, command);
}

client.once(Events.ClientReady, (readyClient) => {
  console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) {
    return;
  }
  const command = client.commands.get(interaction.commandName);
  await command.execute(interaction);
});

client.login(config.token);
