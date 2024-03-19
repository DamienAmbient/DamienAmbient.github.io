//1
const fruits = "apple banana cantaloupe blueberries grapefruit";

const fruitsArr = fruits.split(" ");

for (let i = 0; i < fruitsArr.length; i++) {
    console.log(fruitsArr[i]);
}

let i = 0;
while (i < fruitsArr.length) {
    console.log(fruitsArr[i]);
    i++;
}

let index = 0;
do {
    console.log(fruitsArr[index]);
    index++;
} while (index < fruitsArr.length);

for (const i of fruitsArr) {
    console.log(i);
}

//6
const Numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < Numbs.length; i++) {
    if (Numbs[i] % 2 === 0) {
        console.log(Numbs[i]);
    }
}

//7
const names = ["Batman"];
names.push("Joker");
console.log(names);

//8
const names2 = ["Batman"];
names2.unshift("Joker");
console.log(names2);

//9
const names3 = ["Batman", "Joker", "Bane"];
names3.unshift("Catwoman");
console.log(names3);

//10
let names4 = ["Batman", "Joker", "Bane"];
names4 = ["Catwoman", ...names4];
console.log(names4);

//11
let names5 = ["Batman", "Joker", "Bane"];
names5.splice(1, 0, "Catwoman");
console.log(names5);

//12
const names6 = ["Batman", "Catwoman", "Joker", "Bane"];
names6.splice(1, 2);
console.log(names6);

//13
const names7 = ["Batman", "Catwoman", "Joker", "Bane"];
names7.splice(1, 2, "Alfred");

console.log(names7);

//14
const names8 = ["Batman", "Catwoman", "Joker", "Bane"];
if (!names8.includes("Alfred")) {
    names8.push("Alfred");
}
console.log(names8);

//15
const names9 = ["Batman", "Catwoman", "Joker", "Bane"];
const indexA = names.indexOf("Alfred");

if (indexA > -1) {
    names9.splice(indexA, 1);
} else {
    console.log("No Alfred in array, so there is nothing to cut");
}
