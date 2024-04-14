const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

const xhrPromise = (method, url) => {
    const promise = new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.send();

        xhr.onload = () => {
            if (xhr.status >= 400) {
                reject(xhr.response);
            } else {
                resolve(xhr.response);
            }
        };

        xhr.onerror = () => {
            reject("Something went wrong!");
        };
    });

    return promise;
};

xhrPromise("GET", url)
    .then((response) => {
        const posts = JSON.parse(response);
        let result = "";
        posts.forEach((item) => {
            result += template(item);
        });
        document.getElementById("blog").innerHTML = result;
        // ======>
        const usersUrl = "https://jsonplaceholder.typicode.com/users";
        return xhrPromise("GET", usersUrl);
    })
    .then((usersResponse) => {
        const users = JSON.parse(usersResponse);
        const authors = document.querySelectorAll(".author");

        authors.forEach((author) => {
            const userId = author.dataset.id;
            const user = users.find((user) => user.id === parseInt(userId));
            if (user) {
                author.textContent = user.name;
            } else {
                author.textContent = "Unknown author";
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error);
    });
