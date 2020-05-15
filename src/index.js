import * as _ from 'lodash';
import { createHeader, main } from './layout';
import createList from './listFactory';
import { render, renderLists, renderTasks, saveAndRender  } from './render';
import clearElement  from './helper';



const LOCAL_STORAGE_LIST_KEY = 'task.todoList'

const todoList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'

let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);


export {LOCAL_STORAGE_LIST_KEY, todoList,LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId, save, createTask,clearStuff };
const flexContainer = document.querySelector(".flex-container");
const sidebar = flexContainer.querySelector(".sidebar");
const projectContainer = sidebar.querySelector(".projectWrap");
const newInput = document.querySelector('[data-input]');
const listForm = sidebar.querySelector(".new");
const listBtn = listForm.querySelector(".prj-btn"); 
const listContainer = document.querySelector(".listContainer");
const listTitle = listContainer.querySelector(".list-title");
const taskContainer = listContainer.querySelector(".task-container");
const newTaskForm = document.querySelector("#myForm");



const title = document.querySelector('.title');
const description = newTaskForm.querySelector('.description');
const date = document.querySelector('.date');
const priority = document.querySelector('#priority');
const add = document.querySelector(".add-todo");
const close = document.querySelector(".close");

function createTask(name){
    return {id: Date.now().toString(), name: name, description:description, date: date, priority:priority, complete: false}
}


add.addEventListener("click", (e) => {
    e.preventDefault();
    const addStuff = document.querySelector(".modal-content");
    addStuff.style.cssText = "visibility: visible;";
    
})

close.addEventListener("click", (e) =>{
    e.preventDefault();
    const addStuff = document.querySelector(".modal-content");
    addStuff.style.cssText = "visibility: hidden;";
})


projectContainer.addEventListener('click', (e) =>{
    if(e.target.tagName.toLowerCase() === 'li'){
     
        selectedListId = e.target.id;

        saveAndRender();
    }
});



listForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const newListName = newInput.value;
    if(newListName == null || newListName === '') return
    const list = createList(newListName);
    newInput.value = null;
    todoList.push(list);
    saveAndRender();
    console.log({list})

})

newTaskForm.addEventListener("submit", e =>{
    e.preventDefault();
    const newTaskName = title.value;
    if(newTaskName == null || newTaskName === '') return
    const taskDescription = description.value;
    const taskDate = date.value;
    const taskPriority = priority.value;
    const task =  createTask(newTaskName);
    task.date = date.value;
    task.priority = priority.value;
    task.description = description.value;

       
    const selectedList = todoList.find(list => list.id === selectedListId);
    selectedList.tasks.push(task);

    clearStuff();
    saveAndRender();
});


function clearStuff(){
    title.value =null;
    description.value =null;
    date.value =null;
    priority.value =null;
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(todoList))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId)
  }






  listContainer.addEventListener("click", (e)=>{
    const {target} = e;
    if(target.classList.contains("remove")){

        const t = target.parentElement.parentElement;
        console.log(`Taret ID: ${t.id}`);
        const newList = todoList.find(list => list.id === selectedListId);
        const task = newList.tasks;
        const tasks = task.find(list =>list.id === t.id);
        tasks.complete = true ? tasks.complete = true: tasks.complete = false;
        task.splice(0,1);

        saveAndRender();

    }
    else return
})


render();

