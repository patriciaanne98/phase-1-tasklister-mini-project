document.addEventListener("DOMContentLoaded", (e) => {
  const form = document.getElementById("create-task-form");

  form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const userInput = form.querySelector("#new-task-description").value;
    console.log(userInput)
    buildToDo(userInput)
  })
  // your code here
});

function buildToDo(userInput) {
  const ul = document.getElementById("tasks");
  console.log(ul)
  const li = document.createElement("li");
  li.innerText = userInput
  ul.appendChild(li)
  console.log(li)
}

// Step 1: either grab or create html element
// Step 2: do something with that html element
// Step 3: append the element to the DOM