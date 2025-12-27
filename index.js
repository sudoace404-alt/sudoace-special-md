const {
  default: makeWASocket,
  useMultiFileAuthState,
  DisconnectReason
} = require('@whiskeysockets/baileys')

const Pino = require('pino')

async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState('./nano')

  const sock = makeWASocket({
    printQRInTerminal: true,
    logger: Pino({ level: 'silent' }),
    auth: state
  })

  sock.ev.on('creds.update', saveCreds)

  sock.ev.on('connection.update', (update) => {
    const { connection, lastDisconnect } = update
    if (connection === 'close') {
      const reason = lastDisconnect?.error?.output?.statusCode
      if (reason !== DisconnectReason.loggedOut) {
        startBot()
      }
    } else if (connection === 'open') {
      console.log('✅ BOT SUDAH CONNECT')
    }
  })
}

startBot()
