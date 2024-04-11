//1
const h1 = document.querySelector("h1");
async function countDownTimer() {
    const timer = (seconds) => {
        h1.textContent = `I'm waiting for You ${seconds} sec`;
    };
    let seconds = 10;

    const timerInterval = setInterval(() => {
        seconds--;
        timer(seconds);
        if (seconds === 0) {
            clearInterval(timerInterval);
            checkForm();
        }
    }, 1000);
}

async function checkForm() {
    const firstName = document.querySelector('input[name="firstName"]').value;
    const lastName = document.querySelector('input[name="lastName"]').value;

    if (firstName === "" && lastName === "") {
        document.getElementById("waiting").textContent = "I miss You";
    } else {
        document.getElementById(
            "waiting"
        ).textContent = `Hello ${firstName} ${lastName}!`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    countDownTimer();
});

//2
const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;

const xhr = new XMLHttpRequest();

xhr.open("GET", "https://jsonplaceholder.typicode.com/posts");
xhr.send();

xhr.onload = function () {
    if (xhr.status === 200) {
        const posts = JSON.parse(xhr.response);

        const buildPosts = (postsArray) => {
            let html = "";
            postsArray.forEach((post) => {
                html += template(post);
            });
            return html;
        };

        const demo = document.getElementById("demo");
        demo.innerHTML = buildPosts(posts);
    } else {
        console.error("Failed to load data");
    }
};
