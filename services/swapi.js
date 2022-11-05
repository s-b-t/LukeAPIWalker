import axios from 'axios';

const http = axios.create({
    baseURL: "https://swapi.dev/api/"
})
export const getAPerson = async (id) => {
    const results = await http.get(`/people/${id}`);
    return results.data;
}
export const getAPlanet = async (id) => {
    const results = await http.get(`/planets/${id}`);
    return results.data;
}
