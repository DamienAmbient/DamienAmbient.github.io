const url = "https://jsonplaceholder.typicode.com/posts";
const usersUrl = "https://jsonplaceholder.typicode.com/users";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></span></strong></p>
`;

const fetchPosts = async () => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error("Error fetching posts:", error);
    }
};

const fetchUser = async (userId) => {
    try {
        const response = await fetch(`${usersUrl}/${userId}`);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error(`Error fetching user ${userId}:`, error);
    }
};

const displayPosts = async () => {
    const posts = await fetchPosts();
    let result = "";

    for (const post of posts) {
        result += template(post);
    }
    document.getElementById("blog").innerHTML = result;

    const uniqueUserIds = [...new Set(posts.map((item) => item.userId))];
    for (const userId of uniqueUserIds) {
        const userInfo = await fetchUser(userId);
        const authorElements = document.querySelectorAll(
            `.author[data-id="${userId}"]`
        );
        authorElements.forEach((authorElement) => {
            authorElement.textContent = userInfo.name;
        });
    }
};

displayPosts();
