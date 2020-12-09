
const fs = require('fs')
const chalk = require('chalk')
const getNotes = ()=>{
    return "Your notes ... "
}

const addNote = (title, body)=>{
    const notes = loadNotes()
    //check duplicate titles
    const duplicateNotes = notes.filter((note) => note.title === title)
    const duplicateNote = notes.find((note) => note.title === title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        console.log(chalk.bgGreen('New Note added'))
    }
    else{
        console.log(chalk.bgRed('Note title taken'))
    }
    saveNotes(notes)
}

const removeNote = (title)=>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note)=> note.title !== title)
    if(notesToKeep.length === notes.length)
    {
        console.log(chalk.bgRed('Note title not found'))
    }
    else
    {
        saveNotes(notesToKeep)
        console.log(chalk.bgGreen('Note Title removed'))
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
    
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    const notesList = notes.forEach((note)=> {console.log(note.title)}) ;
}

const readNotes = (title) =>{
    const notes = loadNotes()
    const selectedNote = notes.find((note) => note.title === title)
    if(!selectedNote){

        console.log(chalk.bold.bgRed('Note with selected title is not found'))
    }
    else{
        console.log(chalk.bold.bgBlue(selectedNote.title))
        console.log(selectedNote.body)
    }    
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}