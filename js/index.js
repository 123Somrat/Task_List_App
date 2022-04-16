//Define UI Element

let form = document.querySelector("#task_form");
let tasklist = document.querySelector("ul");
let clearBtn = documenty.querySelector("#clear_task_btn");
let filter = document.querySelector("#task_filter");
let taskInput = document.querySelector("#New-Task");


//Define Event Listeners

form.addEventListener("submit",addTask);
tasklist.addEventListener("click",removeTask);
clearBtn.addEventListener("click",clearTask);
filter.addEventListener("keyup",filterTask);
document.addEventListener("DomContentLoaded",getTasks);