# Learning NodeJs
## Section 1 Write content to a text file using NodeJs
* Using of ```require() ```
<br>Require build-in modules, files system.
* Using of ```appendFile()```
<br>Add content to an existing file.
* Require Third Party modules (NPM)
<br> ```validator()```
<br>Validate String
* Install the dependency using <code>npm install</code> based on the `package.json`
---
## Section 2 Add personalized module file
* Using of ```module.exports```
<br>Define personalized functions, export the module with return value.
---
## Section 3 Chalk module & global installation
* Using of ```chalk.styles```
<br>Define the customized styles for the terminal display.
><code>npm install nodemon -g</code>

**Nodemon** can display changes when the file was saved.

---
## Section 4 Command line arguments
* <code>process.argv[index of array]</code>
 ```javascript
const command = process.argv[2]
switch(command)
{
case 'add':
console.log('Adding notes!');break;
case 'remove':
console.log('Removing notes!');break;
default:
console.log('Wrong command!');break;
}
```
* Using Package yargs:


 ```javascript
const yargs = require('yargs')
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    handler: function () {
        console.log('Adding a new note!')
    }
})
///...
console.log(yargs.argv)
```

