//ping
import { Events } from "discord.js"
import {useAppStore} from '@/store/app'

export const event = {
    name : Events.InteractionCreate,
    once : false
}

export const action = async (i) => {
    if(!i.isChatInputCommand())return
    const appStore = useAppStore()
    const action = appStore.commandsActionMap.get(i.commandName)
    await action(i)
}

