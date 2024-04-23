import axios from "axios";

const baseURL = "https://assessment.banoskolar.com/";

export const axiosClient = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        "Content-Type": "application/json",
    },
});
