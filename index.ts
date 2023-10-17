import {Client} from 'whatsapp-web.js'
import qrcode from 'qrcode-terminal'

const client = new Client({
  puppeteer: {
    args: ['--no-sandbox']
  }
});

client.on('qr', (qr) => {
  console.log('QR Received', qr)
  qrcode.generate(qr, {small:true})
});

client.on('authenticated', (session) => {
  console.log('authenticated')
})

client.on('ready', () => {
  console.log('Client is ready')
})

client.on('message', (msg) => {
  console.log(JSON.stringify(msg));
  if (msg.id.remote.split('@')[0] === '85293637527') {
    msg.reply('I love you, and you love me!')

  }
})

client.initialize();


