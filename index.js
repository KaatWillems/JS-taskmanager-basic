const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);


let allTask = []

const taskManager = () => {

rl.question(`Welcome to your task manager, Press:
1. to see all your tasks
2. to add a task
3. to delete a task 
4. to mark a task as done
5. to exit the task manager`
, (answer) => {
    if (answer === "1") {
        console.log(allTask);  
        taskManager();      
    }
    else if (answer === "2") {
        rl.question(`which task do you want to add?`, (newTask) => {
            allTask.push({Task: newTask, done: false});
            console.log(allTask);
            taskManager();
         });
    }
    else if (answer === "3") {
        rl.question(`what is the index of the task you want to remove?`, (indexTask) => {
            allTask.splice(indexTask,1);
            console.log(allTask);
            taskManager();
         });
    }
    else if (answer === "4") {
        rl.question(`what is the index of the task you want to mark as done?`, (indexTask) => {
            // let allTask = {Task: done= false}
            allTask[indexTask].done = true;
            // indexTask.done = true;
            console.log(allTask);
            taskManager();
         });
    }
    else if (answer === "5") {
        rl.close();
    }
    else {
        taskManager();

    }
  

});
}

 taskManager ();


    // EXEMPLE
// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
//     rl.close();
// });