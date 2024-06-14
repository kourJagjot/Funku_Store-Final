
import axios from "axios";
import { BASE_URL } from "../../baseUrl";

export const loginUserApi = async (loginData) => {
    console.log('base url',BASE_URL)
    try {
        // Log the loginData for debugging
        console.log("Login Data:", loginData);

        const response = await axios.post(`${BASE_URL}api/user/login`, loginData);
        return response;
    } catch (error) {
        // Rethrow the error for handling in the calling code
        throw error;
    }
};

export const createUserApi = async (loginData) => {
    try {
        // Log the loginData for debugging
        // console.log("Login Data:", loginData);

        const response = await axios.post(`${BASE_URL}api/user/create`, loginData);
        return response;
    } catch (error) {
        // Rethrow the error for handling in the calling code
        throw error;
    }
};
