import axios from "axios";

const instance = axios.create({
    baseURL:""//The api (Cloud Function)URL
});

export default instance;