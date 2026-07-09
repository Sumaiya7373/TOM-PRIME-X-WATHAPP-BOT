/**
 * Mute Command - Close group (only admins can send)
 */

module.exports = {
  name: 'mute',
  aliases: ['close', 'closegroup'],
  category: 'admin',
  description: 'Close group (only admins can send messages)',
  usage: '.mute',
  groupOnly: true,
  adminOnly: true,
  botAdminNeeded: true,

  async execute(sock, msg, args, extra) {
    try {

      await sock.groupSettingUpdate(extra.from, 'announcement');

      await extra.reply(`
⎯͢✧🔒 𝐆ʀᴏᴜᴘ 𝐂ʟᴏsᴇᴅ 🐱

*—𝐀ꜱꜱʟᴀᴍᴜᴀʟᴀɪᴋᴜᴍ ᴇᴠᴇʀʏᴏɴᴇ🤍*

▢ *𝐆ʀᴏᴜᴘ 𝐎ꜰꜰ..!!🌷❤️‍🩹*

▢ \`\`\`𝐎ᴘᴇɴ 𝐓ɪᴍᴇ — 𝐀ᴅᴍɪɴ 𝐀ꜱʟᴇ🌷\`\`\`

▢ 𝐀ʟʟᴀʜ 𝐇ᴀꜰᴇᴢ :) 🎀🦥

▢ 𝐀ʟʟ 🤲🏻😌

▢ 𝐘ᴏᴜʀ 𝐅ᴀᴠᴏʀɪᴛᴇ 𝐀ᴅᴍɪɴ 🤍

⎯͢✧✅ 𝐎ɴʟʏ 𝐀ᴅᴍɪɴs 𝐂ᴀɴ 𝐒ᴇɴᴅ 𝐌ᴇssᴀɢᴇs 🐱
`);

    } catch (error) {
      console.error(error);
      await extra.reply('⎯͢✧❌ 𝐄ʀʀᴏʀ 🐱');
    }
  }
};
