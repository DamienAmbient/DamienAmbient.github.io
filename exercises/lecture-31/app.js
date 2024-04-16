const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
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

const usersUnique = new Map();

const getUserInfo = async (userId) => {
    if (usersUnique.has(userId)) {
        return usersUnique.get(userId);
    } else {
        const response = await xhrPromise(
            "GET",
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );
        const userInfo = JSON.parse(response);
        usersUnique.set(userId, userInfo);
        return userInfo;
    }
};

xhrPromise("GET", url)
    .then(async (response) => {
        const posts = JSON.parse(response);
        let result = "";
        for (const item of posts) {
            result += template(item);
        }
        document.getElementById("blog").innerHTML = result;

        const userIds = posts.map((item) => item.userId);
        const uniqueUserIds = [...new Set(userIds)];

        for (const userId of uniqueUserIds) {
            const userInfo = await getUserInfo(userId);
            const authorElement = document.querySelector(
                `.author[data-id="${userId}"]`
            );
            if (authorElement) {
                authorElement.textContent = userInfo.name;
            }
        }
    })
    .catch((error) => {
        console.error("Error:", error);
    });
