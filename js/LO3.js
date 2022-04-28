// setting up arrays for storing studentNames and studentGrades

let studentNames = [];

let studentMarks = [];

// setting up Add button
document.getElementById('Add').addEventListener('click', function(){
    let name = document.getElementById('name').value;
    let mark = document.getElementById('mark').value;

    if(studentNames.includes(name)){
        document.getElementById('result').innerHTML = `This student's name has already been recorded!`;
    } else {
        studentNames.push(name);
        studentMarks.push(mark);

        document.getElementById('result').innerHTML = ` ${name}'s mark has been recorded!`
        console.log(studentNames);
        console.log(studentMarks);
    }
})

