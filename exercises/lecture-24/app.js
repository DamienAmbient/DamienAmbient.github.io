//1
const colors = ["blue", "green", "white"];

function iter(item) {
    console.log(item);
}

colors.forEach(iter);

//2
function iterate(item, index) {
    console.log(`${item} has index ${index}`);
    if (index === colors.length - 1) {
        console.log("The last iteration!");
    }
}

colors.forEach(iterate);

//3
const letters = ["a", "b", "c"];

function iterate2(letter) {
    console.log(this === window);
}

letters.forEach(iterate2);
console.log("=======");

//4 Вирішив через функцію записати
const Numbers = [22, 3, 4, 10];

function checkAllEven(arr) {
    let isEven = true;

    arr.forEach((number) => {
        if (number % 2 !== 0) {
            isEven = false;
        }
    });

    isEven
        ? console.log("Всі числа у масиві парні.")
        : console.log("Не всі числа у масиві парні.");
}

checkAllEven(Numbers);
console.log("=====");

//5
const numbers = [22, 3, 4, 10];

function checkEveryIsEven(arr) {
    let isEven = arr.every((num) => num % 2 === 0);

    isEven
        ? console.log("Всі числа у масиві парні.")
        : console.log("Не всі числа у масиві парні.");
}

checkEveryIsEven(numbers);

//6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];

function checkIndex(arr) {
    console.log(arr.findIndex((el) => el === "blueberries"));
}

checkIndex(fruits);

//7
const arr = [7, 33, 47, 99, 2, 103, 79];

function findFirstElement(array) {
    console.log(array.find((el) => el > 10));
}

findFirstElement(arr);

//8
const array = [1, 2, 3, 4, 5];

function checkSome(elem) {
    console.log(elem.some((el) => el % 2));
}

checkSome(array);

//9
const numbers2 = [1, 30, 4, 21, 100000];

function sortAscending(array) {
    console.log(array.sort((a, b) => a - b));
}

sortAscending(numbers2);
