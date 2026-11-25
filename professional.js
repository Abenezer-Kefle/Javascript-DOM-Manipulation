// How to accept user input in JavaScript

// 1. easy way == window.prompt() method
// The prompt() method displays a dialog box that prompts the visitor for input.
// The prompt() method takes two parameters: the text to display to the user, and an optional default value.

// 2. professional way == html textbox

document.getElementById("mySubmit").onclick = function() { 
    username = document.getElementById("myText").value;
    console.log(username);
}