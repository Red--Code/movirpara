const Telegraf = require('../')
const { Markup } = require('../')

const replyOptions = Markup.inlineKeyboard([
  Markup.urlButton('❤️', 'http://telegraf.js.org'),
  Markup.callbackButton('Delele', 'delete')
]).extra()

const bot = new Telegraf('380462411:AAGoitvqD9gLdDx5pjamI489VHShrAzkEsc')
bot.on('message', (ctx) => ctx.telegram.sendCopy(ctx.from.id, ctx.message, replyOptions))
bot.action('delete', ({ deleteMessage }) => deleteMessage())
bot.startPolling()
