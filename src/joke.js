import request from "request-promise";

const options = {
    method: "GET",
    uri: "https://icanhazdadjoke.com/",
    headers: {
        Accept: "application/json",
        "User-Agent": "Writing JavScript action GitHub Skills exercse.",
    },
    json: true,
    };

    async function getJoke() {
        const res = await request(options);
        return res.joke;
    }

    export default getJoke;