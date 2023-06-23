import {Collection, REST,Routes} from 'discord.js'
import fg from 'fast-glob'
import {useAppStore} from '@/store/app'

const updateCommands = async(commands) => {
    const rest = new REST().setToken(process.env.Token)
    await rest.put(
        Routes.applicationCommands(
            process.env.APPLICATION_ID
        ),
        {
            body: commands,
        }
    )
}

export const loadCommands = async() =>{
    const appStore=useAppStore()
    const commands =[]
    const actions = new Collection()
    const files = await fg('./src/commands/**/index.js')
    
    for(const file of files){
        const cmd = await import(file)
        commands.push(cmd.command)
        actions.set(cmd.command.name,cmd.action)
    }
    
    await updateCommands(commands)
    appStore.commandsActionMap = actions
}

export const loadEvents = async() =>{
    const appStore=useAppStore()
    const client = appStore.client
    const files = await fg('./src/events/**/index.js')
    
    for(const file of files){
        const eve = await import(file)
        if(eve.event.once){
            client.once(
                eve.event.name,
                eve.action
            )
        }
        else{
            client.on(
                eve.event.name,
                eve.action
            )
        }
    }
}