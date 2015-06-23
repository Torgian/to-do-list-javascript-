
var taskInput = document.getElementById("new-task"); //new-task
var addButton = document.getElementsByTagName("button")[0]; //first button
//ul incomplete-tasks
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); 
//completed-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); 

//New Task List Item
var createNewTaskElement = function(taskString) {
  //Create List Item
  var listItem = document.createElement("li");
     
    //Input checkbox
  var checkBox = document.createElement("input"); //type checkbox
  
    //label
  var label = document.createElement("label");
    //input {text}
  var editInput = document.createElement("input");  //txt 
  //create a button with .edit
  var editButton = document.createElement("button");
    //button .delete
  var deleteButton = document.createElement("button");
    //Each element needs modifying 
  checkBox.type = "checkbox";
  editInput.type = "text";
  
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  
  label.innerText = taskString;
  
  //Each element needs  appending
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);
  return listItem;
  }
//Add a new task
var addTask = function () {
  console.log("Add task...");
  //Create a new list item with the text from the #new-task:
  var listItem = createNewTaskElement(taskInput.value);
  
  //Append listItem to incompleteTasksHolder
   incompleteTasksHolder.appendChild(listItem);
   bindTaskEvents(listItem, taskCompleted);
  
  taskInput.value = "";
}

//Edit an existing task

var editTask = function () {
  console.log("Edit task...");
  var listItem = this.parentNode;
  
  var editInput = listItem.querySelector("input[type=text]");
  var label = listItem.querySelector("label");
  
  var containsClass = listItem.classList.contains("editMode");
    //If the class of the parent is .editMode
  if(containsClass) {
      //Switch from .editMode
      //Make the label text become input's value
    label.innerText = editInput.value;
    } else {
    //else: switching into edit mode
      //Switch to .editMode
      //input value becomes the label's text
      editInput.value = label.innerText;
      }
  
    //Toggle .editMode on list item
    listItem.classList.toggle("editMode");
  }


//Delete a task
var deleteTask = function () {
  
  console.log("Delete task...");
   
  var listItem = this.parentNode;
  var ul = listItem.parentNode;
  //Remove the parent list item from the ul
  ul.removeChild(listItem);
}

var taskCompleted = function () {
  console.log("Complete task...");
    //Append to the task list item to the #completed-tasks 
  var listItem = this.parentNode
  completedTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}
//Mark a task as incomplete
var taskIncomplete = function () { 
  console.log("Task Incomplete...");
    //Append the task list item to #incompleted-tasks
  var listItem = this.parentNode;
  incompleteTasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  }
var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
      //select taskListItem's children
  var checkBox = taskListItem.querySelector("input[type=checkbox]") ;
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");  
  //bind the editTask to edit button
  editButton.onclick = editTask;
    //bind the deleteTask to delete button
  deleteButton.onclick = deleteTask;
    //bind checkBoxEventHandler to checkbox
  checkBox.onchange = checkBoxEventHandler;
}

var ajaxRequest = function () {
  console.log("Ajax Request sent");
}
//Set the click handler to the addTask function

addButton.addEventListener("click", addTask);
addButton.addEventListener("click", ajaxRequest);

//Cycle over incompleteTasksHolder ul list items
  for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
     //bind events to list item's children (taskCompleted)
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
    }
   

//Cycle over completedTasksHolder ul list items
    for (var i = 0; i < completedTasksHolder.children.length; i++) {
    //bind events to list item's children (taskIncomplete)
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
    }

//var ajaxRequest function () {
//  console.log("Ajax Request sent");
//}


    


























