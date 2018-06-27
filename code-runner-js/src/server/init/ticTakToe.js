module.exports = {
    title: 'TicTacToe',
    longDesc: "\n" +
    "A TicTacToe game can be represented as a string of numbers, where each number represents a position on the board:\n" +
    "```\n" +
    " 1 | 2 | 3\n" +
    "---+---+---\n" +
    " 4 | 5 | 6\n" +
    "---+---+---\n" +
    " 7 | 8 | 9\n" +
    "```\n" +
    "\n" +
    "The first move is always made by `O`.\n" +
    "\n" +
    "E.g. game `5237649` is:\n" +
    "```\n" +
    "   | X | O\n" +
    "---+---+---\n" +
    " X | O | O\n" +
    "---+---+---\n" +
    " X |   | O\n" +
    "```\n" +
    "\n" +
    "*The task*\n" +
    "\n" +
    "```f(game: string)```\n" +
    "\n" +
    "Implement a function `f` that prints the winner of `game` to `STDOUT`.\n" +
    "\n" +
    "- Print `X` if X won the game\n" +
    "- Print `O` if O won the game\n" +
    "- Print `?` if the game was a draw\n" +
    "\n" +
    "\n" +
    "*Rules*\n" +
    "\n" +
    "The numbers will always represent a valid game, but it's possible that it have additional moves, even though the game has already been won.\n" +
    "\n" +
    "E.g.\n" +
    "```\n" +
    "5237649\n" +
    "52376498\n" +
    "523764918\n" +
    "```\n" +
    "\n" +
    "These all were won by `O` after the 7th step.\n" +
    "\n" +
    "\n" +
    "*Example Test-Cases*\n" +
    "\n" +
    "> Note: you submission will be tested using a lot more inputs\n" +
    "\n" +
    "1. `352476` => `X`\n" +
    "2. `4268379` => `O`\n" +
    "3. `631854792` => `?`\n" +
    "4. `523764918` => `O`",
    acceptanceTests: {
        '5237649': 'O',
        '52376491': 'O',
        '52376498': 'O',
        '523764981': 'O',
        '523764918': 'O',
        '12539': 'O',
        '15362': 'O',
        '716253': 'X',
        '912637854': '?',
        '571946823': '?',
        '56218': 'O',
        '457281369': 'O',
        '5389416': 'O',
        '695432817': 'O',
        '21367985': 'X',
        '381542': 'X',
        '8342675': 'O',
        '716253': 'X',
        '912637854': '?',
        '571946823': '?',
        '56218': 'O',
    },
}