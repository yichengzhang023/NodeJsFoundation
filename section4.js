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