// Data Arrays
let studentNames = [];
let studentMarks = [];

// Buttons
document.getElementById("Add").addEventListener("click", addStudentResult);
document
  .getElementById("Display")
  .addEventListener("click", displayStudentResults);
document.getElementById("Clear").addEventListener("click", clearStudentData);
document
  .getElementById("Average")
  .addEventListener("click", displayAverageMarks);

// Inputs
const nameInput = document.getElementById("name");
const markInput = document.getElementById("mark");
const result = document.getElementById("result");

// Event Handlers
function addStudentResult() {
  if (!nameInput.value) {
    result.innerText = `Please enter a name.`;
    return;
  }

  if (!markInput.value) {
    result.innerText = `Please enter a mark.`;
    return;
  }

  if (studentNames.includes(nameInput.value)) {
    result.innerText = `This student's performance has already been recorded!`;

    nameInput.value = "";
    markInput.value = "";
    return;
  }

  studentNames.push(nameInput.value);
  studentMarks.push(Number(markInput.value));

  result.innerText = ` ${nameInput.value}'s performance has been recorded!`;

  nameInput.value = "";
  markInput.value = "";
}

function displayStudentResults() {
  // const result = document.getElementById("result"); ???
  result.innerText = "";

  if (studentNames.length === 0) {
    result.innerText = `No results to display.`;
    return;
  }
  // Still unsafe, probably better to do a list with this on the long term.
  result.innerHTML = studentNames.reduce(
    (previousValue, _, index) =>
      previousValue + `Name: ${studentNames[index]} - Mark: ${studentMarks[index]} <br>`, ""
  );
}

function clearStudentData() {
  studentNames = [];
  studentMarks = [];

  nameInput.value = "";
  markInput.value = "";

  result.innerText = `Student records have been cleared.`;
}

function displayAverageMarks() {
  if (studentMarks.length === 0) {
    result.innerText = `No results to display.`;
    return;
  }

  const average = studentMarks.reduce((sum, currentValue) => sum + currentValue) / studentMarks.length;

  result.innerText = `The average of student marks is: ${Math.round(average)}`;
}
