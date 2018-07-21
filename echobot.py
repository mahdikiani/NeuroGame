#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""Basic example for a bot that uses inline keyboards.
# This program is dedicated to the public domain under the CC0 license.
"""
import json
import logging
import telegram
from telegram import InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import Updater, CommandHandler, CallbackQueryHandler

logging.basicConfig(format='%(asctime)s - %(name)s - %(levelname)s - %(message)s',
                    level=logging.INFO)
logger = logging.getLogger(__name__)


def start(bot, update):
    keyboard = [[InlineKeyboardButton("Play game!", callback_data='1'),
                 InlineKeyboardButton("Share", callback_data='2')]]

    reply_markup = InlineKeyboardMarkup(keyboard)

    update.message.reply_text('Please choose:', reply_markup=reply_markup)


def button(bot: telegram.bot.Bot, update):
    query = update.callback_query

    # bot.answer_callback_query(query.message.chat_id)
    if not query.game_short_name:
        inline_keyboard = [
            [InlineKeyboardButton(text="Play", callback_game=json.dumps({'game_short_name': "Alzheimer"})),
             InlineKeyboardButton(text="Share", url="https://telegram.me/btgamebot?game=Alzheimer")]]

        reply_markup = InlineKeyboardMarkup(inline_keyboard)
        bot.send_game(chat_id=query.message.chat_id,
                      game_short_name='Alzheimer',
                      reply_markup=reply_markup,
                      )

        # bot.edit_message_text(text="Selected option: {}".format(query.data),
        #                       chat_id=query.message.chat_id,
        #                       message_id=query.message.message_id)
    else:
        # bot.answerCallbackQuery(cq.id, undefined, false, {url: "URL_DE_NUESTO_JUEGO"});
        bot.answer_callback_query(callback_query_id=query.id,
                                  text='salam',
                                  url=f'https://hband.ir/game.html?id={query.id}')
        # bot.send_message(text='salam', chat_id=query.message.chat_id, )


def help(bot, update):
    update.message.reply_text("Use /start to test this bot.")


def error(bot, update, error):
    """Log Errors caused by Updates."""
    logger.warning('Update "%s" caused error "%s"', update, error)


def main():
    API_KEY = ''
    # Create the Updater and pass it your bot's token.
    updater = Updater(API_KEY)

    updater.dispatcher.add_handler(CommandHandler('start', start))
    updater.dispatcher.add_handler(CallbackQueryHandler(button))
    updater.dispatcher.add_handler(CommandHandler('help', help))
    updater.dispatcher.add_error_handler(error)

    # Start the Bot
    updater.start_polling()

    # Run the bot until the user presses Ctrl-C or the process receives SIGINT,
    # SIGTERM or SIGABRT
    updater.idle()


if __name__ == '__main__':
    main()
