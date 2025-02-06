import { deployCommands } from "./deploy-commands";
import { config } from "./config";


deployCommands({ guildId: config.DISCORD_SERVER_ID });