import { URL_MAP } from "./constants"
async function getData(type) {
    try {
        if (sessionStorage.getItem(type) === null) {
            let resp = await fetch(URL_MAP[type]);
            let data = await resp.json();
            sessionStorage.setItem(type, JSON.stringify(data));
        }
        return JSON.parse(sessionStorage.getItem(type));
    } catch (err) {
        console.error("Unexpected error happened when trying to fetch " + URL_MAP[type]);
        return [];
    }
}

function getUserFromId(users) {
    let users_cpy = users.slice();
    users_cpy.unshift({});
    let map = users_cpy.reduce((a, b) => {
        a[b.id] = b;
        return a;
    });
    return (userId) => {
        return map[userId];
    }
}

async function getMappedPosts() {
    let posts = await getData("posts");
    let users = await getData("users");
    let mapUser = getUserFromId(users);
    return posts.map(post => {
        return {...post, "user": mapUser(post.userId)}
    });
}

async function getComments(postId) {
    try {
        let comments = sessionStorage.getItem("comments");
        if (comments) comments = JSON.parse(comments);
        else comments = {};
        if (!comments?.[postId]) {
            let resp = await fetch(URL_MAP["comments"]+"?postId="+postId);
            let data = await resp.json();
            comments[postId] = data;
            sessionStorage.setItem("comments", JSON.stringify(comments));
        }
        return JSON.parse(sessionStorage.getItem("comments"))[postId];
    } catch(err) {
        return [];
    }
}

export { getData, getUserFromId, getMappedPosts, getComments }