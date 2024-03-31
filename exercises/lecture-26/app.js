//1
// function calculate(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//         sum = sum + number;
//     }
//     return sum;
// }
// calculate([1, 2, 4]); // => 7

// // sum() - це функція, яка описує операцію додавання.
// function sum(n1, n2) {
//     return n1 + n2;
// }

// // multiply() - це функція, яка описує операцію множення.

// function multiply(n1, n2) {
//     return n1 * n2;
// }

function calculate(operation, initialValue, numbers) {
    let result = initialValue;
    for (const number of numbers) {
        result = operation(result, number);
    }
    return result;
}

function sum(n1, n2) {
    return n1 + n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

console.log(calculate(sum, 0, [1, 2, 4]));
console.log(calculate(multiply, 1, [1, 2, 4]));

//2
let student_names = ["Wick", "Malcolm", "Smith"];

student_names.map((name, index, array) => {
    console.log(
        `name: ${name} | index: ${index} | array: [ "${array.join('", "')}"]`
    );
});

//3
let students_information = [
    { name: "Wick", degree: 375 },
    { name: "Malcolm", degree: 405 },
    { name: "Smith", degree: 453 },
];

let max = 600;

let percantageResult = students_information.map((student) => {
    let percentage = (student.degree / max) * 100;
    return {
        name: student.name,
        degree: student.degree,
        percentage: percentage,
    };
});

console.log(percantageResult);

//4

const initialArray = [
    1,
    2,
    3,
    [10, 11, 12],
    21,
    22,
    23,
    [31, 32, 33, 34],
    [41, 42],
];

const flattenedArray = initialArray.reduce((acc, element) => {
    return acc.concat(element);
}, []);
console.log(flattenedArray);

//5
Array.prototype.upperCase = function () {
    let i;
    for (i = 0; i < this.length; i++) {
        this[i] = this[i].toUpperCase();
    }
};

function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}

myFunc();
