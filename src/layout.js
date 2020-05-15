//Header
const createHeader = () =>{

    const header = document.createElement("div");
    header.classList.add("header");
    header.innerHTML = `
    <a  href = "#" class = "logo" >To Do</a>
    
    `
    document.body.appendChild(header);
    
    }
createHeader();


//Main Content 
const main = () =>{
    const flex = document.createElement("div");
    flex.classList.add("flex-container");

    const sidebar = document.createElement("div");
    sidebar.classList.add("sidebar");

    sidebar.innerHTML = `
    <h3 style = "text-align: center;">Projects</h3> <hr>

    <div class="projectWrap"><a class = "project project1" ></a></div>

    <form class = "new">
    <input class = 'prj-input' placeholder="Enter New Project" data-input style = "width: 120px;" type = "text" value = ''>
    <button type = 'submit' class = "prj-btn" >+</button>
    </form>
    `    
    const content = document.createElement("div");
    content.classList.add("content");
    
    content.innerHTML = `
    <button class = "add-todo">+</button>

    <form id = "myForm" class="modal-content">
    <span><button class = "close">X</button></span>
    <label for = "title">Title</label>
    <input class = 'title' type = text >

    <label for = "description">Description</label>
    <input class = 'description' type = text>

    <label for = "date">Date</label>
    <input class = "date" type = date>

    <label for="priority">Priority</label>

    <select id="priority">
      <option value="low">Low</option>
      <option value="medium">Medium</option>
      <option value="high">High</option>
    </select>

    <button class = "submit" type = 'submit'>Submit</button>

  </form>

  <div class = "listContainer">
  <div class = 'todo-header'>
  <h2 class = "list-title"></h2>
  </div>
  <div class = "task-container"></div>
  </div>
  `


    flex.appendChild(sidebar);
    flex.appendChild(content);
    document.body.appendChild(flex);

    return flex;

}
main();

export {createHeader, main}