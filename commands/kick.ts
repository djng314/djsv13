

import { GuildMember } from 'discord.js'
import { ICommand } from 'wokcommands'

export default {
  category: 'Moderation',
  description: 'Kicks a user',

  permissions: ['ADMINISTRATOR'],
  

  slash: 'both',


  minArgs: 2,
  expectedArgs: '<user> <reason>',
  expectedArgsTypes: ['USER', 'STRING'],

  callback: ({ message, interaction, args }) => {
    const target = message
      ? message.mentions.members?.first()
      : (interaction.options.getMember('user') as GuildMember)
    if (!target) {
      return 'Please tag someone to kick.'
    }

    if (!target.kickable) {
      return {
        custom: true,
        content: 'Cannot kick that user.',
        ephemeral: true,
      }
    }
    const author = interaction.member as GuildMember
    if( !author.roles.cache.has("861328403357892658")){
        return 'No roles bitch'
    }

    args.shift()
    const reason = args.join(' ')

    target.kick(reason)

    return {
      custom: true,
      content: `You kicked <@${target.id}>`,
      ephemeral: true,
    }
  },
} as ICommand