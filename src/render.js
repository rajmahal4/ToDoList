import {clearElement} from './helper';
import {selectedList, todoList, selectedListId, clearStuff, save} from './index';
import createList from './listFactory';
import createTask from './index';





function renderLists(){
    const flexContainer = document.querySelector(".flex-container")
    const sidebar = flexContainer.querySelector(".sidebar")
    const projectContainer = sidebar.querySelector(".projectWrap");
    todoList.forEach((list)=>{
        const li = document.createElement("li");
        li.setAttribute("class", "project");
        li.setAttribute("id", list.id);
        if(list.id === selectedListId){
            
            li.classList.add("active-list");  
        }

        li.innerText = list.name;
        projectContainer.appendChild(li);
    })
    return

};
const render = () =>{
    const flexContainer = document.querySelector(".flex-container")
    const sidebar = flexContainer.querySelector(".sidebar")
    const projectContainer = sidebar.querySelector(".projectWrap");
    const listContainer = document.querySelector(".listContainer");
    const taskContainer = listContainer.querySelector(".task-container");
    const listTitle = listContainer.querySelector(".list-title")
    clearElement(projectContainer);
    renderLists();

    const selectedList = todoList.find(list => list.id === selectedListId);

    if(selectedListId == null){
        listContainer.style.display = 'none';
    }else{
        listContainer.style.display = '';
        listTitle.innerText = selectedList.name;
 
        clearElement(taskContainer)
        renderTasks(selectedList)
    }
    return
};

function renderTasks(selectedList){
    const listContainer = document.querySelector(".listContainer");
    const taskContainer = listContainer.querySelector(".task-container");

    selectedList.tasks.forEach(task =>{
        const div = document.createElement('table');
        div.classList.add("task");
        const contain = document.querySelector(".content")
    
        const row = document.createElement("tr")
        row.classList.add('row');
        row.setAttribute('id', `${task.id}`);
        row.innerHTML = `
        <div class = 'tasks'>
        <td> ${task.name}</td>
        <td> ${task.description} </td>
        <td> ${task.date} </td>
        <td> ${task.priority} </td>
        <td><button class = "remove" ></button></td>
        </div>
        `;
    
      div.appendChild(row);  
     
      taskContainer.appendChild(div);
      listContainer.appendChild(taskContainer);
        
    })
    return
};


function saveAndRender(){
    save()
    render()
}

export {

    render,
    renderTasks,
    renderLists,
    saveAndRender

}