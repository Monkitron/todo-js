var newInput = document.getElementById("input"); //Add new todo with input
var addButton = document.getElementById("add_button"); //Button for input
var incompleteTodos = document.getElementById("incomplete_todos") //Incomplete todo ul container
var completedTodos = document.getElementById("completed_todos") //Completed todo ul container
var deleteAll = document.getElementById("delete_all") //Button for delete all


//Where the magic happens
addButton.addEventListener('click', function(){
    
    //Prevents default, if the value in input is less than 1, do nothing
    if (input.value.length < 1) {
       return;
    }
    
    // Create a li element
    var newLi = document.createElement('li');
    //Create a button
    var deleteBtn = document.createElement('button');
    //Create a button
    var doneBtn = document.createElement('button');
    
    //Give appropriate names to the buttons
    deleteBtn.innerText = "Delete";
    doneBtn.innerText = "Done";
    
    //Give the buttons class names for styling
    deleteBtn.className = "delete";
    doneBtn.className = "done";
    
    //Take the value from the input element and add it to the created li element
    newLi.innerText = input.value;
    
    //Append the created li element to the incompleted ul list
    incompleteTodos.appendChild(newLi);
    
     //Append a button with the class delete to the created li element
    newLi.appendChild(deleteBtn);
    //Append a button with the class done to the created li element
    newLi.appendChild(doneBtn);

    
    //When the done button is clicked, move the li element from incompleted list to completed list and remove the buttons form the li element
    doneBtn.onclick = function(){
        completedTodos.appendChild(newLi);
        newLi.removeChild(deleteBtn);
        newLi.removeChild(doneBtn);
    };
    
    //When a delete button is clicked on a li, remove this li element from incompleted list
    deleteBtn.onclick = function(){
        var newLi = this.parentNode;

        incompleteTodos.removeChild(newLi); 
    };
    
    //While the list incomplete todos has childs in it, remove the first child until the list is empty
    deleteAll.onclick = function () {
        //Alert the user so they don't remove everything by mistake :) 
        if (confirm("Are you sure you want to clear all?")) {
            while (incompleteTodos.hasChildNodes()) {   
                incompleteTodos.removeChild(incompleteTodos.firstChild);
            }
        } else {
            return;
        }

    };

    //Reset the input field
    input.value = "";

});