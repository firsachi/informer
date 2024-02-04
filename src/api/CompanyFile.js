import axios from "axios";
import confapi from "./confapi.json";

const loadCompanies = async () => {
    
    const url = `${confapi.baseUrl}loadCompanies`;

    try {
        const response = await axios.get(url);

        if (response.status === 200) {
            return response.data;
        } else {
            throw new Error(`Failed to fetch data. Status: ${response.status}`);
        }
    } catch (error) {
        console.error('Error fetching data:', error.message);
        throw error;
    }
};

export default loadCompanies;