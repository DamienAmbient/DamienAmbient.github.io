const classes = ["first", "second", "third", "fourth"];

//1
let allH1 = document.getElementsByTagName("h1");
console.log(allH1);

for (let i = 0; i < allH1.length; i++) {
    console.log(allH1[i]);
}

//2
let firstP = document.querySelector("#p1");
console.log(firstP);
firstP.style.backgroundColor = "gold";

//3
let secondP = document.querySelector("#p2");
console.log(secondP);
secondP.style.cssText = "background-color:gold; color: blue; font-size: 2rem";

//4
let thirdP = document.querySelector("#p3");
thirdP.classList.add("third");

//5
let fourthP = document.querySelector("#p4");
fourthP.classList.add("fourth", "border");
console.log(fourthP);

//6
let allContainer = document.querySelectorAll(".container");
for (let i = 0; i < allContainer.length; i++) {
    console.log(allContainer[i]);
}

//7
for (let i = 0; i < allContainer.length; i++) {
    console.log(allContainer[i].firstElementChild);
}

//8

const headers = document.querySelectorAll(".container header");
const headingTags = ["h1", "h2", "h3", "h4"];

for (let i = 0; i < headers.length; i++) {
    const h1 = headers[i].querySelector("h1");
    const newHeading = document.createElement(headingTags[i] || "h1");
    newHeading.textContent = h1.textContent;
    newHeading.id = h1.id;
    newHeading.className = h1.className;
    headers[i].replaceChild(newHeading, h1);
}

for (let i = 0; i < headers.length; i++) {
    const heading = headers[i].querySelector("h1, h2, h3, h4");

    if (i < classes.length) {
        heading.classList.add(classes[i]);
    }
}
