console.log('connected...')

/*
1. create an array of student scores.
2. loop through each value of array and post it to webpage.
3. Each value of test scores in the array should post on a new line.
4. Create a variable that displays number of students and print to webpage. 
5. Print number of students to the webpage before grades and on it's own line.

*/

let studentScores = [98, 97, 96, 57, 67, 87, 68, 96, 95, 98, 97, 96, 95, 94, 96, 66, 76, 76, 86, 92]

let numOfStudents = studentScores.length;
let main = document.getElementById('output').innerHTML = `Number of students: ${numOfStudents}<br>`


for (let i = 0; i < studentScores.length; i++) {
    numOfStudents++;
    main = document.getElementById('output').innerHTML += `Grade: ${studentScores[i]}<br>`
}



