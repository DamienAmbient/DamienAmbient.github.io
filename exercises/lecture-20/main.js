//1
const person = {
    name: "John",
    age: 80,
};

for (let key in person) {
    console.log(person[key]);
}

//2
person.name = {
    firstName: "John",
    lastName: "Smith",
};

for (let key in person) {
    console.log(person[key]);
}

//3
person.bio = function () {
    console.log(this.name.firstName, this.name.lastName, this.age);
};
person.bio();

//4
person.introduceSelf = function () {
    console.log(`Hi! I'm ${this.name.firstName}`);
};
person.introduceSelf();

//5
function createPerson(name) {
    return {
        name: name,
        introduceSelf: function () {
            console.log(`Hi! I'm ${this.name}`);
        },
    };
}

const person2 = createPerson("Vasya");
const person3 = createPerson("Petya");

//6
function Person(name) {
    this.name = name;
    this.introduceSelf = function () {
        console.log(`Hi! I'm ${this.name}`);
    };
}

const mary = new Person("mary");
const tom = new Person("tom");
console.log(Object.hasOwn(mary, "prop"));

//7
// const DirtyMartini = {
//     ingredients: {
//         gin: "6 fluid ounces",
//         vermouth: "1 dash dry vermouth",
//         brine: "1 fluid ounce",
//         olives: "4 stuffed green olives",
//     },

//     english_please: function () {
//         console.log(`ingredients:
//         ${this.ingredients.gin} gin
//         ${this.ingredients.vermouth} (${1 * 0.0351951} ml)
//         ${this.ingredients.brine} brine from olive jar
//         ${this.ingredients.olives}`);
//     },

//     excuse_my_french: function () {
//         console.log(`ingrédients:
//         ${6 * 28.4131} ml de gin
//         1 trait de vermouth sec (${1 * 0.0351951} ml)
//         ${this.ingredients.brine} de saumure du pot d'olive
//         ${this.ingredients.olives}`);
//     },
// };

// DirtyMartini.english_please();

// DirtyMartini.excuse_my_french();

const DirtyMartini = {
    ingredients: {
        gin: 6,
        dryVermouth: 1,
        oliveBrine: 1,
        olives: 4,
    },
    utils: {
        gin_ml: 28.4131,
        dryVermouth_ml: 0.0351951,
        oliveBrine_ml: 28.4131,
    },
    english_please: function () {
        console.log(`ingredients:
    ${this.ingredients.gin} fluid ounces gin
    ${this.ingredients.dryVermouth} dash dry vermouth (${this.utils.dryVermouth_ml}ml)
    ${this.ingredients.oliveBrine} fluid ounce brine from olive jar
    ${this.ingredients.olives} stuffed green olives`);
    },
    excuse_my_french: function () {
        console.log(`ingrédients:
    ${this.ingredients.gin * this.utils.gin_ml} ml de gin
    1 trait de vermouth sec (${
        this.ingredients.dryVermouth * this.utils.dryVermouth_ml
    } ml)
    ${
        this.ingredients.oliveBrine * this.utils.oliveBrine_ml
    } ml de saumure du pot d'olive
    ${this.ingredients.olives} olives vertes farcies`);
    },
};

DirtyMartini.english_please();
DirtyMartini.excuse_my_french();
