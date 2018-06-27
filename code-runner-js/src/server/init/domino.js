module.exports = {
    title: 'Domino',
    longDesc: "\n" +
    "You are building a [Rube Goldberg device](https://en.wikipedia.org/wiki/Rube_Goldberg_machine), and you plan to push a button with a string of dominos. You are trying to find the coolest configuration of dominos, and to save your time, you build a small simulator for this.\n" +
    "\n" +
    "*The task*\n" +
    "\n" +
    "```f(input: string)```\n" +
    "\n" +
    "Simulate the final state of the dominos described in the input argument and print it to `STDOUT`. Trailing/leading white-spaces are ignored.\n" +
    "\n" +
    "\n" +
    "*Rules*\n" +
    "\n" +
    "Dominoes have four states, represented by the following strings:\n" +
    "```\n" +
    "| standing\n" +
    "\\ left-tilted\n" +
    "/ right-tilted\n" +
    "__ fallen\n" +
    "```\n" +
    "\n" +
    "Your dominos follow the law of physic (to a degree); they push their neighbours and make them fall too:\n" +
    "```\n" +
    "|\\ => \\\\\n" +
    "/| => //\n" +
    "```\n" +
    "\n" +
    "However, dominos will stop falling, if they have a stable neighbour already:\n" +
    "```\n" +
    "/|\\ => /|\\\n" +
    "__\\ => __\\\n" +
    "/__ => /__\n" +
    "```\n" +
    "\n" +
    "Thus, these are all stable configurations:\n" +
    "```\n" +
    "__\\\\  //__  //|\\\\ //__|__\\\\\n" +
    "```\n" +
    "\n" +
    "You are building this machine in your garage, where the floor slightly tilts to the right, so left-tilted dominos fall slower than right-tilted ones:\n" +
    "```\n" +
    "/ \\ => __\\\n" +
    "```\n" +
    "\n" +
    "\n" +
    "*Example Test-Cases*\n" +
    "\n" +
    "> Note: you submission will be tested using a lot more inputs\n" +
    "\n" +
    "1. `///|\\\\\\` => `///|\\\\\\`\n" +
    "2. `| \\\\` => `|__\\`\n" +
    "3. `// |` => `/__|`\n" +
    "4. `|/ \\|/ \\|/ \\|/ \\|` => `|__\\|__\\|__\\|__\\|`\n" +
    "5. `/||||` => `////__`\n" +
    "6. `/| /|` => `/__/__`",
    acceptanceTests: {
        '| \\\\': '|__\\',
        '// |': '/__|',
        '|\\': '__\\',
        '/|': '/__',
        '/ \\': '__\\',
        '/||||': '////__',
        '/| /|': '/__/__',
        '\\\\': '__\\',
        '///': '//__',
        '//__|__\\\\': '//__|__\\\\',
        ' ||\\/||': '__\\\\//__',
        '|/ \\|': '|__\\|',
        '/|\\': '/|\\',
        '/||||\\': '///\\\\\\',
        '/|||\\': '//|\\\\',
        '|/ \\|/ \\|/ \\|/ \\|': '|__\\|__\\|__\\|__\\|',
        '\\||||____||||/__                /|\\    /\\    /|\\                __\\||||____||||/': '__||||____||||/__                /|\\    /\\    /|\\                __\\||||____||||__',
        '                                                                              /|': '/__',
    },
}