//ping
import { Events } from "discord.js"

export const event = {
    name : Events.ClientReady,
    once : true
}

export const action = async (c) => {
        console.log(`準備就緒！已登錄為 ${c.user.tag}`)
}

