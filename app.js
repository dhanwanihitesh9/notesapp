
const chalk = require('chalk')
const notes = require('./notes.js')
const yargs = require('yargs')

//customize yargs version
yargs.version('1.1.0')

//creay add command
yargs.command({
    command: 'add',
    describe: 'add a new note',
    builder:{
        title: {
            describe: 'Title of the note to be added',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Body of the note to be added',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title, argv.body)
    }
})

//Create remove command
yargs.command({
    command: 'remove',
    describe: 'remove note',
    builder: {
        title: {
        describe: 'Title of the note to be removed',
        demandOption: true,
        type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }

})
//Create list command
yargs.command({
    command: 'listNotes',
    describe: 'list notes',
    handler(){
        console.log(chalk.bold.underline.bgBlue('Your notes'))
        notes.listNotes()
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'read note',
    builder: {
        title: {
        describe: 'Title of the note to be removed',
        demandOption: true,
        type: 'string'
        }
    },   
    handler(argv){
        notes.readNotes(argv.title)
    }

})

yargs.parse()
//add,remove,read,list
//console.log(yargs.argv)
