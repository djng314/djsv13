// module.exports = {}

import { MessageEmbed } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
  category: 'Moderation',
  description: 'Deletes multiple messages at once.',


  requireRoles: true,


  maxArgs: 1,
  expectedArgs: '[amount]',

  slash: 'both',


  callback: async ({ message, interaction, channel, args }) => {
  
    const amount = args.length ? parseInt(args.shift()!) : 10

    if (message) {
      await message.delete()
    }


    const { size } = await channel.bulkDelete(amount, true)

   
    const reply = new MessageEmbed()
    .setTitle("**Bulk Message Deleted**")
    .setDescription(` \n Deleted ${size} message(s).`)
    .setColor("WHITE")
    .setFooter("Cereza Moderation")

    if (interaction) {
      return reply
    }

    channel.send({embeds: [reply]})
  },
} as ICommand
