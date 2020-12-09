const fs = require('fs')
// // const book = {
// //     title: 'The jungle Book',
// //     author: 'Rudyard Kipling'
// // }

// // const bookJSON = JSON.stringify(book)
// // fs.writeFileSync('1-json.json',bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data.title)
const loadNotes = function(){

    try{
        const dataBuffer = fs.readFileSync('1-json.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }


}

const notes = loadNotes()

const findNotes = notes.filter(function(note){
    if(note.name === 'Hitesh Dhanwani')
    {
        note.splice()
        return "Note Removed"
    }    
})




const stringJSON = JSON.stringify(dataJSON)
fs.writeFileSync('1-json.json',stringJSON)