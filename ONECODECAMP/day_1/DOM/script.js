// Document Object Model
                    //Document node
//head nide                            //hbody node
                         //element node            /comment node
            //attribute node        //text node


//Get element by ID

// var headingElement = document.getElementById("heading");
// console.log(headingElement);

// //Get elements by classname

// var textElements = document.getElementsByClassName("text")[0];
// console.log(textElements);

// //Get element by tag name

// var listItems = document.getElementsByTagName("li");
// console.log(listItems);

// //gGet element by Query Selector

// let container = document.querySelector('#container');
// console.log(container);

// //get element by parent node

// var listParent = document.getElementById("list").parentNode;
// console.log(listParent);

// //Get elemnt by children node

// var containerChildren = document.getElementById('container').children;
// console.log(containerChildren);

// //modifying inner HTML
// headingElement.innerHTML = "Updated Content";
// console.log(headingElement.innerHTML)

// //modifying text content

// textElements.textContent = "I am a new paragraph";
// console.log(textElements);

const button = document.getElementById("btn");
button.addEventListener("click", handleClick);

function handleClick(event) {
    console.log("Button Clicked!");
}