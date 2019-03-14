// const square = function(x){
//     return x * x 
// }

const square = (x) => x * x

console.log(square(2))

//
// Goal: Create method to get incomplete tasks
//
// 1. Define getTasksToDo method
// 2. Use filter to to return just the incompleted tasks (arrow function)
// 3. Test your work by running the script

const tasks = {
    tasks: [{
        text: 'Grocery shopping',
        completed: true
    },{
        text: 'Clean yard',
        completed: false
    }, {
        text: 'Film course',
        completed: false
    }],
    // getTasksToDo () {
    //     const getTasksToDo = this.tasks.filter((tasks) => {
    //         return tasks.completed === false
    //     })
    //     return getTasksToDo
    // }
    getTasksToDo () {
       return this.tasks.filter((tasks) => tasks.completed === false) //arrow function
    }
}


console.log(tasks.getTasksToDo())