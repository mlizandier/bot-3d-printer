type Config = {
  token: string;
  apiUrl: string;
  apiToken: string;
};

export const config: Config = {
  token: process.env.DISCORD_TOKEN!,
  apiUrl: process.env.API_URL!,
  apiToken: process.env.API_TOKEN!,
};
