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
export { getData, getUserFromId, getMappedPosts }