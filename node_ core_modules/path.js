let path = require('path');

let myPath = "D:/r2ait mern/Node Js Practice Area/node_ core_modules/path.js"

// console.log(path.basename(myPath));
// console.log(path.dirname(myPath));
// console.log(path.extname(myPath));
// console.log(path.delimiter);
// console.log(path.format({dir: "D:/reait mern/node", base: "lala.js"}));
// console.log(path.isAbsolute(myPath));
// console.log(path.join('Users', 'Refsnes', '..', 'demo_path.js'));
// console.log(path.normalize('Users/Refsnes/../Jackson'));

console.log(path.parse(myPath).base);
