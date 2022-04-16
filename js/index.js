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

// Remove Element

function removeTask(e){
  if(e.target.hasAttribute("href")){
     if(confirm("Are You Sure")){

      let element = e.target.parentElement;
       element.remove();
       console.log(e.target)
     };
  };
};


//clear Task

function clearTask(){
   //tasklist.innerHTML = "";

   while(tasklist.firstChild){
     tasklist.removeChild(tasklist.firstChild);

   };
};

//filter Task

function filterTask(e){
  let text = e.target.value.toLowercase();

  document.querySelectorAll("li").forEach(task=>{
    let iteam = task.firstChild.textContent;
    if(iteam.toLowerCase().indexOf(text)!= -1){
       task.style.display = "block";
    }else{
        task.style.display="none"
    };
  });
};
