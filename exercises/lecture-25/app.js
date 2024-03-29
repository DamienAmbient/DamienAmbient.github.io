const btnUL = document.querySelector(".btnUl");
const btnOL = document.querySelector(".btnOl");
const btnTable = document.querySelector(".btnTable");

//1
const list = ["html", "css", "javascript", "react.js"];
const listWithHref = [
    { html: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { css: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { javascript: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { "react.js": "https://react.dev" },
];
const students = [
    { firstName: "Tom", lastName: "Cat", degree: 230 },
    { firstName: "Nary", lastName: "Ann", degree: 336 },
    { firstName: "John", lastName: "Doe", degree: 400 },
    { firstName: "James", lastName: "Bond", degree: 700 },
];

//1
btnUL.addEventListener("click", function () {
    const theUl = document.createElement("ul");

    list.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        theUl.appendChild(li);
    });

    document.body.appendChild(theUl);
});

//2
btnOL.addEventListener("click", function () {
    const theOl = document.createElement("ol");

    listWithHref.forEach((item) => {
        const key = Object.keys(item)[0];
        const value = item[key];

        const a = document.createElement("a");
        a.setAttribute("href", value);
        a.textContent = key;

        const li = document.createElement("li");
        li.appendChild(a);
        theOl.appendChild(li);
    });

    document.body.appendChild(theOl);
});

//3
btnTable.addEventListener("click", function () {
    const table = document.createElement("table");
    const headerRow = document.createElement("tr");
    const headers = ["firstName", "lastName", "degree"];

    headers.forEach((headerText) => {
        const th = document.createElement("th");
        th.textContent = headerText;
        headerRow.appendChild(th);
    });
    table.appendChild(headerRow);

    students.forEach((student) => {
        const tr = document.createElement("tr");
        Object.values(student).forEach((value) => {
            const td = document.createElement("td");
            td.textContent = value;
            tr.appendChild(td);
        });
        table.appendChild(tr);
    });
    document.body.appendChild(table);
});
