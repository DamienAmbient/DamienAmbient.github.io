//1
// let str1 = 'I\'m a string!';
// let str2 = "I'm a string!";
// console.log(str1.length === str2.length) //true
console.log(`I\'m a string!` == "I'm a string!"); // true
console.log(`I\'m a string!` === "I'm a string!"); // true

// prettier  не дає зберегти такий вираз 'I\'m a string!', одразу форматує його.

//2
let string5 = "Hello World";
console.log(string5[0]);
console.log(string5.charAt(0));

//3
let str3 = "Hello Javascript";
console.log(str3[6]);

//4
console.log(str3[str3.length - 1]);
console.log(str3[15]);

//5
function lastChar1(string) {
    let result = string[string.length - 1];
    return result;
}

function lastChar2(string) {
    let result = string.charAt(string.length - 1);
    return result;
}

const lastChar3 = (string) => {
    return string.substring(string.length - 1);
};
console.log(lastChar1(str3));
console.log(lastChar2(str3));
console.log(lastChar3(str3));

//6
let a = "When candles are out,";
let b = "all cats are grey.";

console.log(a.concat(" " + b));

//7
let fact = "Fifteen is the same as";
let aa = 5;
let bb = 10;

fact = `Fifteen is the same as ${aa + bb}`;

console.log(fact);

//8
let firstName = "Tom";
let lastName = "Cat";

function getFullName(fName, sName) {
    return `${fName} ${sName}`;
}
console.log(getFullName(firstName, lastName));

//9
function greeting() {
    let fn = getFullName(firstName, lastName);
    return `Hello, ${fn}`;
}
console.log(greeting());

//10
function greeting2() {
    let fn = getFullName(firstName, lastName);
    return `<div><h1>Hello, ${fn}</h1></div>`;
}
console.log(greeting2());

//11
let string1 = "  The name of our game  ";

// Потрібно отримати такі результати
// "The name of our game"
// "The name of our game  "
// "  The name of our game"
console.log(string1.trim());
console.log(string1.trimLeft());
console.log(string1.trimRight());

const phoneNumber = "\t  555-123\n ";
// Потрібно отримати такі результати
// => '555-123'
// => '555-123 \n'
console.log(phoneNumber.trim());
console.log(phoneNumber.trimStart());

//12
let sentence = "Always look on the bright side of life";
console.log(sentence.includes("look up"));
console.log(sentence.includes("look on"));
console.log(sentence.includes("look on", 8));

//13
let sentence2 = "Always look on the bright side of life";
console.log(sentence2.indexOf("l"));
console.log(sentence2.indexOf("l", 3));
console.log(sentence2.indexOf("L"));

//14
let sentence3 = "Always look on the bright side of life";
console.log(sentence3.substring(7));
console.log(sentence3.substring(0, 7));
let searchString = "look";
let keyWord = sentence3.indexOf(searchString);
if (keyWord !== -1) {
    console.log(sentence3.substring(keyWord, keyWord + searchString.length));
}
//15
const regex = /^[a-z0-9_-]{8,16}$/i;

//16
const emailCheck =
    /^[\w-]+(\.[\w-]+)*@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*(\.[a-zA-Z]{2,})$/;

//17
let sentence4 =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.";

function truncateText(str) {
    return str.substring(0, 50);
}
console.log(truncateText(sentence4));

function truncateText2(str) {
    return str.substr(0, 50);
}
console.log(truncateText2(sentence4));
