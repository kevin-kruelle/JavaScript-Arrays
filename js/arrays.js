console.log('connected...')

/*
1. create an array of student scores.
2. loop through each value of array and post it to webpage.
3. Each value of test scores in the array should post on a new line.
4. Create a variable that displays number of students and print to webpage. 
5. Print number of students to the webpage before grades and on it's own line.
6. Create a variable to find highest score
7. Create a variable to find lowest score
8. Create a variable to find average score
9. Create a variable to find median score

*/

let studentScores = [98, 97, 96, 57, 67, 87, 68, 96, 95, 55, 97, 96, 95, 94, 96, 66, 76, 46, 86, 22]

let passingScores = [];

//Calculates number of students based on length of studentScores array
let numOfStudents = studentScores.length;
main = `Students: ${numOfStudents}<br>`

//Below finds highest score by calling in the spread of studentScores into the Math.max() function
let highestScore = Math.max(...studentScores);

//Below finds highest score by calling in the spread of studentScores into the Math.min() function
let lowestScore = Math.min(...studentScores);

//Below calculates the sum of studentScores, divides sum by .length of studentScores to find the average.
let sum = studentScores.reduce((accumulator, currentValue) => accumulator += currentValue)
let avg = sum / studentScores.length;

//We find the two middle most values and add them together, divide by 2 to find the median.
studentScores.sort((a, b) => a - b);
let lowMiddle = Math.floor((studentScores.length - 1) / 2);
let highMiddle = Math.ceil((studentScores.length - 1) / 2);
let median = (studentScores[lowMiddle] + studentScores[highMiddle]) / 2;


for (let i = 0; i < studentScores.length; i++) {
        main += `Grade: ${studentScores[i]}<br>`
}

for (let i = 0; i < studentScores.length; i++) {
    if (studentScores[i] > 69) {
        passingScores.push(studentScores[i])
    }
}


document.getElementById('output').innerHTML += `${main}<br>Highest Score: ${highestScore}<br> Lowest Score: ${lowestScore}<br> Average score: ${avg}<br> Median: ${median}<br> Scores 70% or higher: ${passingScores.length} students scored higher than 70%`



