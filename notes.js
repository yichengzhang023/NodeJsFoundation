const fs = require('fs')
const chalk = require('chalk')

const getNotes = function(title){
    const notes = loadNotes()
    const targetNotes = notes.find((notes)=>notes.title === title)
    if(targetNotes){
        console.log(chalk.green('Find match notes, Content is:'))
        console.log(targetNotes.notes)
    } else {
        console.log(chalk.red('Not Found'))
    }
}

const addNotes = function (title, body) {
    const notes = loadNotes()
    const duplicateNote = notes.find((notes) => notes.title === title)
    const duplicateNotes = notes.filter((notes)=> notes.title === title)
    // const duplicateNotes = notes.filter(function(notes){
    //     return notes.title === title
    // })
    if (!duplicateNote){
        notes.push({
            title: title,
            notes: body
        }
        )
        saveNotes(notes)
    }else {
        console.log('Cannot add')
    }
}

const removeNotes = function(title){
    const notes = loadNotes()
    const notesToKepp = notes.filter(function(notes){
        return notes.title !== title
    })

    if (notesToKepp.length < notes.length){
        saveNotes(notesToKepp)
        console.log(chalk.green.bold('Notes removed'))
    }else{
        console.log(chalk.red.bold('Nothing Removed'))
    }
}

const saveNotes = function (notes){
    jsonData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',jsonData)

}

const loadNotes = function (){
    try{    
        const data = fs.readFileSync('notes.json')
        const dataParse = data.toString()
        return JSON.parse(dataParse)
    } catch(e){
        return []
    }
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.inverse('Your Note is:'))
    notes.forEach(notes => {
        console.log(notes.title)
    });
}

module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNotes: removeNotes,
    listNotes: listNotes,
    getNotes: getNotes
}