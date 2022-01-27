const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);


// EXEMPLE
rl.question('What is your age? ', (age) => {
    console.log('Your age is: ' + age);
    rl.close();
});
