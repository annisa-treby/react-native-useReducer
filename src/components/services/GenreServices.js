import axios from 'axios'

const baseURL = "http://10.10.12.205:9092/genre";

export async function getGenres() {
    try {
        const genres = await axios.get(`${baseURL}/genres`)
        return genres.data.content;
    } catch (e) {
        console.log("get genres"+e);
    }

}

export async function postGenre(form) {
    try {
        const genre = await axios.post(`${baseURL}`, form);
        return genre.data;
    } catch (e) {
        console.log("post genre"+e);
    }
}

export async function putGenre(form) {
    try {
        const genre = await axios.put(`${baseURL}`, form);
        return genre.data;
    } catch (e) {
        console.log("put genre", e);
    }
}

export async function deleteGenre(id) {
    try {
        const response = await axios.delete(`${baseURL}/${id}`);
        if (response.status === 200) return true
        else return false
    } catch (e) {
        console.log("delete genre", e);
    }
}
