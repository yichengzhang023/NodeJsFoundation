// const command = process.argv[2]

// switch(command)
// {
// case 'add':
// console.log('Adding notes!');break;
// case 'remove':
// console.log('Removing notes!');break;
// default:
// break;
// }

const chalk = require('chalk')
const yargs = require('yargs')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        'title': {
            describe: 'Add title',
            demandOption: true,
            type: 'string'
        },
        'body': {
            describe: 'body content',
            demandOption: true,
            type: 'string'
        }

    },
    handler: function (argv) {
        console.log('Title is: ' , argv.title)
        console.log('Body Content is:', argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: function () {
        console.log('Removing the note')
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',
    handler: function () {
        console.log('Listing out all notes')
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    handler: function () {
        console.log('Reading a note')
    }
})

yargs.parse()
// console.log(yargs.argv)

