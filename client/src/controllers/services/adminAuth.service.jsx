import axios from 'axios';
import { ADMIN_API_BASE_URL, } from '../../config/serverApiConfig';

export const login = async (email, password) => {
    try {
        const response = await axios.post(
            ADMIN_API_BASE_URL + `loginAdmin`,
            { email, password }
        );
        const { data } = response;
        return data;
    } catch (error) {
        return error.response?.data
    }
}