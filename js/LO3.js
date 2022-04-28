// setting up arrays for storing studentNames and studentGrades

let studentNames = [];

let studentMarks = [];



// setting up Add button
document.getElementById('Add').addEventListener('click', function(){
    let name = document.getElementById('name').value;
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

       

        document.getElementById('result').innerHTML = ` ${name}'s performance has been recorded!`;

        

        console.log(studentNames);
        console.log(studentMarks);
    }

    
})


// setting up display button
document.getElementById('Display').addEventListener('click', function(){

    let nameToFind = ;

    // clearing the output
    document.getElementById('result').innerHTML = '';

    if (studentNames.includes(nameToFind)) {
        console.log(nameToFind)
        for (let name in studentNames) {
            document.getElementById('result').innerHTML = `<h3>Student Results</h3>`
            document.getElementById('result').innerHTML += `Student: ${studentNames[name]} - ${studentMarks[name]} <br>`
        }
        
    } else {
        document.getElementById('result').innerHTML = `No results to display.`
    }
    
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

// setting up calcAverage
function calcAverage(numbers){
    // setting up a variable to store the total in
    let total = 0;

    // looping through the array
    for (i=0; i<numbers.length; i++) {
        // updating the total variable's value at every iteration
        total += numbers[i];
    }

    // returning the value of total
    return (total / studentMarks[i]);
}
// event listener attached to a button click using an anonymus function
document.getElementById('Average').addEventListener('click', function(){
    // writing out the total into the DOM passing the array of numbers as parameter
    document.getElementById('result').innerHTML = `${calcAverage(studentMarks)}`
});