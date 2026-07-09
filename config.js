/**
 * Global Configuration for WhatsApp Tom Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['8801347300095'], // Your Bot number without + or spaces
    ownerName: ['⎯͢✧𝐒ʜᴀʜɪɴ 𝐑ᴀɴᴀꫝᥫ᭡'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: '*🌷𝐗-𝐒ʜꫝʜɪɴ 𝐑ᴀɴꫝᥫ᭡*',
    prefix: '.',
    sessionName: '𝐱-мιηι-вσт-typy258toxicevilbrand25780533',
    sessionID: process.env.SESSION_ID || '',
    newsletterJid: '120363429830985012@newsletter',
    updateZipUrl: 'https://github.com/TOM-PRIME-X-MINI-BOT/TOM-PRIME-X-WATHAPP-BOT/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: '𝐗-𝐒ʜꫝʜɪɴ🌷',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '',
      goodbye: false,
      goodbyeMessage: '',
      antiSpam: false,
      antibadword:false,
      antisticker:false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/TOM-PRIME-X-MINI-BOT/TOM-PRIME-X-WATHAPP-BOT',
      facebook: 'https://www.facebook.com/majidul.islam.zihad',
      youtube: 'https://youtube.com/@saycotom?si=4uI2q7LKL1Rl4cWK'
    }
};
  
