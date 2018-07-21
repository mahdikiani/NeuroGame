import telegame

token = ''

games = {
    'checkers': {'name': 'Checkers', 'category': 'Strategic games'},
    'chess': {'name': 'Chess', 'category': 'Strategic games'},
    'go_game': {'name': 'Go', 'category': 'Strategic games'},
    'snakes_and_ladders': {'name': 'Snakes and Ladders', 'category': 'Games with dice'},
    'risk': {'name': 'Risk', 'category': 'Games with dice'}
}
base_url = 'https://destiner.github.io/FlatBoard'
greeting_message = 'Hello my friend! Would you like to play some games?'

bot = telegame.Bot(token)
bot \
    .set_games(games) \
    .set_base_url(base_url) \
    .enable_category_button() \
    .enable_random_game_button() \
    .enable_play_with_friends_button() \
    .set_greeting_message(greeting_message) \
    .start()
