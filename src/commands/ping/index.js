//ping
import { SlashCommandBuilder } from "discord.js"
import {useAppStore} from '@/store/app'

export const command = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('顯示延遲!')

export const action = async (ctx) => {
    const sent = await ctx.reply({ content: '計算中...', fetchReply: true })
    ctx.editReply(` Ping : ${sent.createdTimestamp - ctx.createdTimestamp}ms`)
}

