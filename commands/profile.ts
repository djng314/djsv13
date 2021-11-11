import { ICommand } from "wokcommands";
import mongoose from "mongoose";
import noblox from "noblox.js";

import verifiation from "../models/account";
import cash from "../models/cash";
import bans from "../models/gamebans";
import { MessageEmbed } from "discord.js";



export default {
  category: 'Utility',
  description: "Return with the user's profile",
  slash: false,

  expectedArgs: '<target>',
  minArgs: 0,
  maxArgs: 1,

  callback: async ({ message, args, interaction }) => {
    
    if (message) {
      const target = message.mentions.members?.first()
      if(!target){
        let data1 = await verifiation.findOne({ DiscordID: `${message.author.id}` })

      if (data1) {
        let username = await noblox.getUsernameFromId(data1.RobloxUserID)
        let rank = await noblox.getRankNameInGroup(5206353, Number(data1.RobloxUserID))
        let avatar = await noblox.getPlayerThumbnail(Number(data1.RobloxUserID), "100x100")

        const embed = new MessageEmbed()
        let cashdata = await cash.findOne({ RobloxUserID: `${Number(data1.RobloxUserID)}` })
        if (cashdata) {
          let bandata = await bans.findOne({ RobloxUserID: `${Number(data1.RobloxUserID)}` })
          

          if (bandata){
            const embed1 = new MessageEmbed()
            .setTitle("__Profile__")
            .setDescription(`Here's your profile. \n \n **Username:** ${username} \n **User ID: **${data1.RobloxUserID} \n **Rank: **${rank} \n **Cash: **${cashdata.Cash} \n \n __**Ban Information**__\n **Status: ** Banned \n **Reason: **${bandata.Reason}\n**Moderator: **${bandata.Moderator}`)
            .setFooter("Cereza Profile")
            .setThumbnail(`${avatar[0].imageUrl}`)
            .setColor("BLUE")

            message.reply({embeds: [embed1]})

          }else{
            const embed2 = new MessageEmbed()
            .setTitle("__Profile__")
            .setDescription(`Here's your profile. \n \n **Username:** ${username} \n **User ID: **${data1.RobloxUserID} \n **Rank: **${rank} \n **Cash: **${cashdata.Cash} \n \n __**Ban Information**__\n **Status: ** No ban data found.`)
            .setFooter("Cereza Profile")
            .setThumbnail(`${avatar[0].imageUrl}`)
            .setColor("BLUE")
            
            message.reply({embeds: [embed2]})


          }
            

          

        } else {
          let bandata = await bans.findOne({ RobloxUserID: `${Number(data1.RobloxUserID)}` })
          if (bandata){
            const embed1 = new MessageEmbed()
            .setTitle("__Profile__")
            .setDescription(`Here's your profile. \n \n **Username:** ${username} \n **User ID: **${data1.RobloxUserID} \n **Rank: **${rank} \n **Cash: ** 0 \n \n __**Ban Information**__\n **Status: ** Banned \n **Reason: **${bandata.Reason}\n**Moderator: **${bandata.Moderator}`)
            .setFooter("Cereza Profile")
            .setThumbnail(`${avatar[0].imageUrl}`)
            .setColor("BLUE")

            message.reply({embeds: [embed1]})

          }else{
            const embed2 = new MessageEmbed()
            .setTitle("__Profile__")
            .setDescription(`Here's your profile. \n \n **Username:** ${username} \n **User ID: **${data1.RobloxUserID} \n **Rank: **${rank} \n **Cash: ** 0 \n \n __**Ban Information**__\n **Status: ** No ban data found.`)
            .setFooter("Cereza Profile")
            .setThumbnail(`${avatar[0].imageUrl}`)
            .setColor("BLUE")
            
            message.reply({embeds: [embed2]})


          }

        }

      } else {
        const embedNodata = new MessageEmbed()
          .setTitle("__No Data Found__")
          .setDescription("\n Please ensure that you are verified.")
          .setFooter("Cereza Profile")
          .setColor("RED")

          message.reply({embeds: [embedNodata]})
      }

      }
      
    }
    if (interaction) {
      const target = interaction.options.getMember('target');
      interaction.reply(`${interaction.user.username} testing`)
    }


  }
} as ICommand