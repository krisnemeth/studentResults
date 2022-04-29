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
    // clearing the output
    document.getElementById('result').innerHTML = '';
    // checking if there's data in the array at all
    if (studentNames.length === 0) {
        // displaying the error message in case there is no data
        document.getElementById('result').innerHTML = `No results to display.`
    } else {
        // if there is data, looping through it and writing it out to the DOM
        for (i=0; i<studentNames.length; i++) {
            document.getElementById('result').innerHTML += `Student: ${studentNames[i]} - ${studentMarks[i]} <br>`
        }
    }
    
})


// setting up clear button
document.getElementById('Clear').addEventListener('click', function(){
    // setting the arrays equal to an empty array therefore clearing any data stored in them
    studentNames = [];
    studentMarks = [];
    // clearing the input fields
    document.getElementById('name').value = '';
    document.getElementById('mark').value = '';
    // displaying appropriate message
    document.getElementById('result').innerHTML = `Student records have been cleared.`;
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
    return total;
}
// event listener attached to a button click using an anonymus function
document.getElementById('Average').addEventListener('click', function(){
    // writing out the total into the DOM passing the array of numbers as parameter
    document.getElementById('result').innerHTML = `${calcAverage(studentMarks)}`
});