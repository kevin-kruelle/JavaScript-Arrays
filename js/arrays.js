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

let studentScores = [98, 97, 96, 57, 67, 87, 68, 96, 95, 98, 97, 96, 95, 94, 96, 66, 76, 46, 86, 22]


let numOfStudents = studentScores.length;
main = `Students: ${numOfStudents}<br>`

let highestScore = Math.max(...studentScores);
let lowestScore = Math.min(...studentScores);
let sum = studentScores.reduce((accumulator, currentValue) => accumulator += currentValue)
let avg = sum / studentScores.length;
studentScores.sort((a, b) => a - b);
let lowMiddle = Math.floor((studentScores.length - 1) / 2);
let highMiddle = Math.ceil((studentScores.length - 1) / 2);
let median = (studentScores[lowMiddle] + studentScores[highMiddle]) / 2;


for (let i = 0; i < studentScores.length; i++) {
        main += `Grade: ${studentScores[i]}<br>`
}


document.getElementById('output').innerHTML += `${main}<br>Highest Score: ${highestScore}<br> Lowest Score: ${lowestScore}<br> Average score: ${avg}<br> Median: ${median} `



