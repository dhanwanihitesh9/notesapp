console.log('utils.js')

const fs = require('fs')

const getNotes = function(){
    var content = fs.readFileSync('./notes.txt')
    return content
}
module.export = getNotes