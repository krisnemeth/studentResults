// setting up arrays for storing studentNames and studentGrades

let studentNames = [];

let studentMarks = [];

// setting up Add button
document.getElementById('Add').addEventListener('click', function(){
    let name = document.getElementById('name').value.trim().toLowerCase();
    let mark = Number(document.getElementById('mark').value);

    if (!name) {
        document.getElementById('result').innerHTML = `Please enter a name to go along with the mark.`;
    } else if(!mark) {
        document.getElementById('result').innerHTML = `Please enter a mark to go along with the name.`;
    } else if (studentNames.includes(name)) {
        document.getElementById('result').innerHTML = `This student's performance has already been recorded!`;
    } else {
        studentNames.push(name);
        studentMarks.push(mark);

        document.getElementById('name').value = '';
        document.getElementById('mark').value = '';

        document.getElementById('result').innerHTML = ` ${name}'s performance has been recorded!`

        console.log(studentNames);
        console.log(studentMarks);
    }
})

// setting up display button
document.getElementById('Display').addEventListener('click', function(){
    






})

// setting up clear button
document.getElementById('Clear').addEventListener('click', function(){
    studentNames = [];
    studentMarks = [];

    document.getElementById('name').value = '';
    document.getElementById('mark').value = '';

    document.getElementById('result').innerHTML = `Student records have been cleared.`;

    console.log(studentNames);
    console.log(studentMarks);
})