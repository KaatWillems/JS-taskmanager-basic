const fs = require('fs');
const readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);





rl.question(`Welcome to your task manager, Press:
1. to see all your tasks
2. to add a task
3. to delete a task 
4. to mark a task as done
5. to exit the task manager`
, (number) => {
    switch(number) {
        case"1":
            console.log(tasks);
            break;            
        case"2":
            addTask();            
            break;  
        case"3":
            removeTask();
            break;    
        default:
            console.log("Choose another number");
            break;            
    }
   

});

// 1 to prompt the entire task list 
let tasks = [{notdone:"task1"}, {notdone:"task2"}, {notdone:"task3"}]


//2 add task 
let addTask = () => {
    rl.question('Which task do you want to add', (answer) => {
        tasks.push(answer);
        console.log(tasks);
        rl.close();

    });

}

// 3 to delete task 

let removeTask = () => {
    rl.question('Type the number of the task you want to delete.', (answer) => {
        tasks.splice(tasks.indexOf(answer),1)
        console.log(tasks);
        rl.close();

    });
}

// 4. mark task done : with keys and properties  (object) and with true or false 






// EXEMPLE
// rl.question('What is your age? ', (age) => {
//     console.log('Your age is: ' + age);
//     rl.close();
// });

// cd Documents/BeCode/Kaat_repo/Kaat_repo_day18_managerjs