const { Client, CommandInteraction, MessageEmbed } = require("discord.js");
const { readdirSync } = require("fs");

module.exports = {
    name: "help",
    description: "See all of the bots commands",
    type: 'CHAT_INPUT',
    run: async (client, interaction, args) => {
      /*let categories = [];

      readdirSync("./SlashCommands/").forEach((dir) => {
        const commands = readdirSync(`./SlashCommands/${dir}/`).filter((file) => file.endsWith(".js"));

        const cmds = commands.map((command) => {
          let file = require(`../../SlashCommands/${dir}/${command}`);
          if (!file.name) return "`COMMAND IS WIP`";
          let name = file.name.replace(".js", "");
          return `\`${name}\``;
        });
        let data = new Object();

        data = {
          name: dir.toUpperCase(),
          value: cmds.length === 0 ? "WIP 🦺" : cmds.join(" "),
        };

        categories.push(data);
      }); */

      const embed = new MessageEmbed()
      .setTitle(`Ticketer Crasher | Powerful Tickets`)
      .setColor(client.config.color.main)
      //.addFields(categories)
        .setDescription(`**${client.user.username} is the Next Generation of Ticket Creations! With \\<:Powerful:990858389691179028>️ Powerful Systems, Quick Database, \\<:Ticket:990858478128083024> Multiple Ticket Systems, and much more!**`)
        .addField("\u200b", "<:info:983304232629305408> **__Information Commands:__**")
        .addField("`help`", "*View the bot's commands*")
        .addField("`stats`", "*View the bot's Statistics*")
        .addField("`invite`", "*Invite **"+client.user.username+"** to your server*")
        
        .addField("\u200b", "<a:settings:990857841462100038>️ **__Configuration Commands:__**")
        .addField("`ticket-setup`", "*Setup the Ticket System*")
        .addField("`ticket-logs`", "*Setup the Ticket-Logs Channel*")
        
        .addField("\u200b", "<:OWNER:990857994688397352> **__Owner Commands:__**")
        .addField("`allservers`", "*View All the Servers the Bot is in*")
        .addField("`manage_bot`", "*Change/edit/stop the bot*")
      .setFooter(`Powered by OrekiDev`, interaction.guild.iconURL())
      return interaction.followUp({ embeds: [embed] })
    },
};
