let fs = require('fs');

fs.writeFileSync('myfile.txt', 'hello programmers,');
fs.appendFileSync('myfile.txt', ' How are you?');

fs.readFile('myfile.txt', (err, data) => {
    console.log(data.toString());
})
console.log("hello, hello");