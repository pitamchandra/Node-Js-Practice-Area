const _ = require('lodash')
const data = require('./people')
let allChunks = _.chunk(data.fruits, 2)
for(allChunk of allChunks){
    console.log(allChunk);
}
console.log(global);