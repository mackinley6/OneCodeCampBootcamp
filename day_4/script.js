
var todoList = document.getElementById('todoList');

// Create a new to-do item
var newTodo = document.createElement('li');
newTodo.textContent = 'Read a book';

todoList.appendChild(newTodo);
todoList.addEventListener('click', function (event) {
    if (event.target.tagName === 'LI') {
        event.target.classList.toggle('completed');
    }
});

var myElement = document.getElementsByClassName('myList');
myElement.innerHTML = 'New Content';

console.log(myElement);