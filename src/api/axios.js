import axios from "axios";

const baseURL = "https://assessment.banoskolar.com/"; // Change this to your API base URL

// Create a new instance of axios with custom configuration
export const axiosClient = axios.create({
    baseURL,
    timeout: 10000, // Adjust the timeout as needed
    headers: {
        "Content-Type": "application/json",
        // You can add other common headers here if needed
    },
});
