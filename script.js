const taskInput = document.querySelector(".container input");
const taskSection = document.querySelector(".tasks");
taskInput.addEventListener("keyup",(e)=>{
    if(e.key=='Enter') {createTask();}
});
document.querySelector("#push").onclick = function(){
    createTask();
}

function createTask(){
    if(taskInput.value.length ==0 ){
        alert("The field is blank");
    }else if(taskInput.value=="Add task" ){
        alert("Enter the valied Task name and try again ");  
    }else{
        taskSection.innerHTML += `<div class="taskadd">
        <input onclick="updateTask(this)" type="checkbox" class="completedtask">
        <span> <p>${taskInput.value}</p></span>
        <div class="binicon"> <i class="fa-solid fa-trash"></i> </div>
    </div>`;

    //     `<div class="task">
    //     <label id="taskname">
    //     <input onclick="updateTask(this)" type="checkbox" class="check-task">
    //     <p> ${taskInput.value} </p>
    //     </label>
    //     <div class="delete">
    //    <p>-</p></div></div>`;
        current_tasks = document.querySelectorAll(".binicon");
        for(let i=0;i<current_tasks.length;i++){
            current_tasks[i].onclick=function(){
                this.parentNode.remove();
            }
        }
        taskInput.value="Add task";
        taskSection.offsetHeight >=300 ? taskSection.classList.add("overflow"):taskSection.classList.remove("overflow");
    }
}
function updateTask(task){
    let child = task.parentElement.querySelector("p");
    child.classList.add("complete");
}



