import { Client, Events, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'

dotenv.config()

const client = new Client({ intents: [GatewayIntentBits.Guilds] })

client.once(
    Events.ClientReady, (c) => {
        console.log(`準備就緒！已登錄為 ${c.user.tag}`)
    }
)

client.login(process.env.TOKEN)