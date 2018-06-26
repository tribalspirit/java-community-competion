module.exports = {
    title: 'Order by frequency',
    longDesc: "\n" +
    "*The task*\n" +
    "\n" +
    "```f(input: string)```\n" +
    "\n" +
    "Print the input with its characters sorted by their frequency (ascending).\n" +
    "\n" +
    "*Rules*\n" +
    "\n" +
    "Input will only contain printable ASCII characters. Characters with the same frequency should be ordered by their ASCII values (ascending).\n" +
    "\n" +
    "\n" +
    "*Example Test-Cases*\n" +
    "\n" +
    "> Note: you submission will be tested using a lot more inputs\n" +
    "\n" +
    "1. `Hello World!` => ` !HWderoolll`\n" +
    "2. `Results, Relentlessly` => ` ,nuyRRtteeeellllssss`",
    acceptanceTests: {
        'Results, Relentlessly': ' ,nuyRRtteeeellllssss',
        'Excellence in Software Engineering': 'SafotwxEEccggllrr   iiinnnnneeeeee',
        'Hello World!': ' !HWderoolll',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit': ',Lgaaddllnnppuucccmmmrrroooosssseeeeetttttiiiiii       ',
        'We are a global team of strategists, designers, architects, and engineers. We collaborate with you to solve your biggest business challenges through the creative application of design thinking and technology solutions.': 'kmw..WWffppvv,,,yyybbbbdddduuuuuccccccchhhhhhhhrrrrrrrrrllllllllllgggggggggggnnnnnnnnnnnnnaaaaaaaaaaaaaaiiiiiiiiiiiiiiooooooooooooooossssssssssssssssttttttttttttttttteeeeeeeeeeeeeeeeeeeeee                              ',
        'We imagine, design, engineer, and deliver software and customer experiences that change the world.': '.Wfpuvxllmmww,,,ccchhhoooggggssssdddddtttttaaaaaaiiiiiirrrrrrnnnnnnnn             eeeeeeeeeeeeeeee',
    },
}