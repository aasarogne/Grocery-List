
// tatt inspirasjon fra https://youtu.be/8I5UCTlMa34

const groceries = document.getElementsByClassName("groceries")[0];
const pencil = document.getElementsByClassName("pencil");
/* specifies one or more classnames for an element. The class attribute 
is mostly used to point to a class in a style sheet. Can also be used by a JS 
(via the HTML DOM) to make changes to HTML elements with a specified class.*/ 


const allItems = document.querySelector("ul"); 
/* method used for searching and returning the very first 
element within the document that matches the given selector

returns only the element that matches with one of the specified
CSS selectors, or a group of selectors in JS
*/


const userInput = document.querySelector("input");
const buttonElement = document.querySelector("button")

/* pencil.addEventListener("click", function(){
    allItems.innerHTML = ""
}) */


// click funksjon 
buttonElement.addEventListener("click", function(event){
    if(event)
    addItm();
})


/* waits for a specific event to occur on a web page and then executes a set of instructions. 
Events = actions /occurrences that happen on a web page. Eks: mouse click, keypress, or page load.*/ 


// enter knappen kan brukes 
userInput.addEventListener("keyup", function(event){
    if(event.key === "Enter")
    addItm();
})

// 
function addItm(){
    const list_element = document.createElement("li");
    const checkbox_element = document.createElement("input");
    checkbox_element.type = "checkbox";
    const span_element = document.createElement("span")
    const delete_element = document.createElement("button")
    delete_element.innerText = "X"

    span_element.innerText = userInput.value;

    /* appendChild = works by adding a new child element to the 
    end of the list of children of a specified parent element.*/ 

    allItems.appendChild(list_element)
    
    // prepend = gjør at ting kommer først - boksen legges først i rekken 
    list_element.prepend(checkbox_element)
    list_element.appendChild(span_element)
    list_element.appendChild(delete_element)
    

    // Funksjonene velger sin parent element og sletter child element til parent - blir en slags familie. 
    delete_element.addEventListener("click", () => { // Arrow functions = write shorter function syntax: let myFunction = (a, b) => a * b;
        list_element.parentNode.removeChild(list_element)
    });

    userInput.value = "";
}