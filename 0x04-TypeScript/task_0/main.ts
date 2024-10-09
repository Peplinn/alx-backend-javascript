/**
 * Interface named Student that accepts the
 * following:
 * - firstName(string),
 * - lastName(string),
 * - age(number),
 * - location(string)
 */


interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

/**
 * Two students, and  an array containing the variables
 */

const studentA : Student = {
    firstName: "Peplin",
    lastName: "Fish",
    age: 30,
    location: "Ghana",
};

const studentB : Student = {
    firstName: "Cathy",
    lastName: "McAllister",
    age: 26,
    location: "Algeria",
};

const studentsList :  Student[] = [studentA, studentB];

const table = document.createElement('table');

/**
 * - Vanilla Javascript is used to render a table
 * and append new row for each elements in the array,
 * 
 * - Each row contains the first name and location of the student
 */

studentsList.forEach((student) => {
    const row = table.insertRow();

    const firstNameCell = row.insertCell();
    const locationCell = row.insertCell();

    firstNameCell.textContent = student.firstName;
    locationCell.textContent = student.location;

});

document.body.appendChild(table);
