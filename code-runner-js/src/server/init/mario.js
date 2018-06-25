module.exports = {
    title: 'Mario',
    longDesc: "\n" +
    "Princess Peach is kidnapped again by Bowser! Help Mario to save her.\n" +
    "\n" +
    "*The task*\n" +
    "\n" +
    "```f(storyboard: string)```\n" +
    "\n" +
    "The `storyboard` is a space-separated list of simple Super Mario game objects, describing a game. You have to process it and you have to check if the player wins or not.\n" +
    "\n" +
    ":one: If Mario reaches Bowser or Princess without dying, print `WIN` to `STDOUT`\n" +
    ":two: If Mario dies, print `GAME OVER` \n" +
    ":three: If `storyboard` describes an incomplete game, print `???`\n" +
    "\n" +
    "A game is incomplete when Mario is still alive by the end, but did not reach Bowser or Princess.\n" +
    "\n" +
    "\n" +
    "*Rules*\n" +
    "\n" +
    "The storyboard consists of `enemies`, coins (`positive integers`), `bonus` objects that can be picked up and `goals` separated by one or more spaces. Mario initially has 3 lifes, 0 coins and is in Small mode. When all 3 lifes are lost, Mario dies and the game ends.\n" +
    "\n" +
    "_Enemies_\n" +
    "\n" +
    "Mario hurt his leg, so he cannot jump over the enemies, but walks into them, losing a life. When he is in Super mode, instead of losing a life, he turns back into Small Mario.\n" +
    "```\n" +
    "goomba\n" +
    "koopa\n" +
    "piranha\n" +
    "```\n" +
    "\n" +
    "_Coins_\n" +
    "\n" +
    "All positive numbers represent the same amount of coins. Every 100 coin grants Mario an extra life.\n" +
    "\n" +
    "_Bonuses_\n" +
    "\n" +
    "Bonus objects grant Mario special abilities.\n" +
    "\n" +
    "- `Mushroom` turns Small Mario into Super Mario\n" +
    "- `Star` grants invulnerability for the next *two steps*.\n" +
    "- `1Up` gives Mario an extra life\n" +
    "\n" +
    "_Goals_\n" +
    "\n" +
    "When Mario reaches `Bowser` or `Princess`, the game is won.\n" +
    "> Note: they may not be at the end of the storyboard\n" +
    "\n" +
    "\n" +
    "*Example Test-Cases*\n" +
    "\n" +
    "> Note: you submission will be tested using a lot more inputs\n" +
    "\n" +
    "1. `piranha Princess piranha` => `WIN`\n" +
    "2. `1Up koopa goomba piranha Bowser` => `WIN`\n" +
    "3. `Star Mushroom  piranha goomba piranha goomba Princess` => `WIN`\n" +
    "4. ` piranha piranha piranha piranha` => `GAME OVER`\n" +
    "5. `piranha piranha Star goomba goomba Princess` => `WIN`\n" +
    "6. `10 40 koopa goomba 20 30 piranha piranha` => `GAME OVER`",
    acceptanceTests: {
        '1Up  koopa  goomba piranha Bowser': 'WIN',
        '10 40 koopa goomba 20 30 piranha piranha': 'GAME OVER',
        'Star Mushroom piranha goomba piranha goomba Princess': 'WIN',
        'Star Mushroom piranha goomba piranha goomba koopa Princess': 'GAME OVER',
        'Star 99 Star Mushroom piranha piranha 1Up goomba piranha piranha goomba': 'GAME OVER',
        'Star Mushroom piranha Star Mushroom goomba Mushroom Star piranha goomba piranha goomba goomba goomba Bowser': 'GAME OVER',
        'Star Mushroom piranha Star Mushroom goomba Mushroom Star piranha goomba piranha goomba': '???',
        'Star 99 1Up piranha piranha goomba piranha Princess': 'GAME OVER',
        ' piranha piranha piranha piranha': 'GAME OVER',
        'piranha Princess piranha': 'WIN',
        'Mushroom piranha piranha piranha Princess': 'WIN',
        'piranha piranha Star goomba goomba Princess': 'WIN',
        'goomba piranha Star goomba goomba piranha Princess': 'GAME OVER',
        'goomba piranha 1Up goomba 1Up goomba Bowser': 'WIN',
        'goomba piranha 10 80 130 goomba piranha Bowser': 'WIN',
        'Mushroom Mushroom goomba goomba goomba Bowser': 'WIN',
        'Star Mushroom Mushroom goomba piranha piranha goomba': 'GAME OVER',
        'Star Mushroom Mushroom invalid piranha piranha goomba': '???',
        'goomba piranha 10 80 130 goomba piranha 91 piranha Bowser': 'WIN',
        'goomba piranha 10 80 130 goomba': '???',
    },
}