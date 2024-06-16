let hello = document.getElementById("hello");

// Declare a variable called "name" and initialize it to an empty string
let name = "";

// Add an event listener to the "load" event of the window object
window.addEventListener("load", function () {
  // Check if the "name" variable is still an empty string
  //   if (name == "") {
  // Use a while loop to prompt the user for their nickname until they provide a non-empty string
  while (name == "") {
    name = prompt("Hi! What is your nickname?");
    // Use isNaN() to check if the user's input is not a number
    if (!isNaN(name)) {
      name = "";
    }
  }
  //   }
  // Update the text content of the "hello" element with the user's nickname
  hello.innerText = `Hi, ${name}! Welcome To`;
});

let form = document.getElementById("form");
let submit = document.getElementById("submit");
let tbody = document.getElementById("tbody");
let title = document.getElementById("title");
let amount = document.getElementById("amount");
let type = document.getElementById("type");
let totalCash = document.getElementById("totalCash");
let expense = document.getElementById("expense");
let savings = document.getElementById("savings");
let budget = document.getElementById("budget");
let countInput = document.getElementById("countInput");
let neg = 0;
let pos = 0;
let totalInput = 0;

submit.addEventListener("click", function () {
  // Get the tbody element
  let tbody = document.querySelector("tbody");

  // Get the number of rows in the tbody element
  let rowCount = tbody.rows.length;

  // Use a for loop to iterate over each row in the tbody element
  for (let i = 0; i <= rowCount; i++) {
    totalInput = i;
  }
  countInput.innerText = totalInput + 1;

  let row = createTableRow(title, amount);
  tbody.appendChild(row);
  if (type.value == "cashIn") {
    row.style.color = "green";
    pos += Number(amount.value);
  } else if (type.value == "expense") {
    row.style.color = "red";
    neg += Number(amount.value);
  } else {
  }
  totalCash.innerText = pos;
  expense.innerText = neg;
  savings.innerText = pos - neg;
  budget.innerText = pos - neg;

  form.reset();
});

function createTableRow(cell1Value, cell2Value) {
  const row = document.createElement("tr");
  const cell1 = document.createElement("td");
  const cell2 = document.createElement("td");
  if (cell1Value.value != "" && cell2Value.value != "") {
    cell1.innerText = cell1Value.value;
    cell2.innerText = cell2Value.value;
    row.appendChild(cell1);
    row.appendChild(cell2);
    return row;
  }
}
