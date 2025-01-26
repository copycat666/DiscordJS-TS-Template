# DiscordJS-TS-Template
Discord bot template using Discord.js and TypeScript for modern development.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/DiscordJS-TS-Template.git
    cd DiscordJS-TS-Template
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Create a `.env` file in the root directory and add your Discord bot token and client ID:
    ```env
    DISCORD_TOKEN=your-discord-token
    DISCORD_CLIENT_ID=your-discord-client-id
    ```

### Running the Bot

- For development:
    ```sh
    npm run dev
    # or
    yarn dev
    ```

- For production:
    ```sh
    npm run build
    npm start
    # or
    yarn build
    yarn start
    ```

### Deploying Commands

To deploy commands to your Discord server, run:
```sh
npm run deploy
# or
yarn deploy