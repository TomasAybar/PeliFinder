import axios from "axios";

export const movieDB = axios.create({
    baseURL: import.meta.env.VITE_API_URI,
    params: {
        api_key: import.meta.env.VITE_API_KEY,
        language: "es-MX",
    },
});

export const watchTV = axios.create({
    baseURL: import.meta.env.VITE_API_URI_BACK
})
