//yarn open
import { Client, GatewayIntentBits } from 'discord.js'
import dotenv from 'dotenv'
import {useAppStore} from '@/store/app'
import vuelnit from '@/core/vce'
import {loadEvents,loadCommands} from '@/core/loader'

dotenv.config()

vuelnit()

const client = new Client({ intents: [GatewayIntentBits.Guilds] })
const appStore = useAppStore()
appStore.client=client

loadCommands()
loadEvents()

client.login(process.env.Token)
