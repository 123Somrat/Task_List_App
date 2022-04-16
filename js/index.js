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

//Define Function 
// Add Task

function addTask(e){
  if(taskInput.value=== ""){
    alert ("Add A Task");
   }else{
     let li = document.createElement("li");
     li.appendChild(document.createTextNode(taskInput.value + " "));
    let link = document.createElement("a");
    link.setAttribute("href","#");
    link.innerHTML="X"
    li.appendChild(link);
    storeTaskInLocalStorage(taskInput.value);
    taskInput.value="";

 }
  e.preventDefault();

}