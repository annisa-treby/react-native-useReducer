import axios from 'axios'

const baseURL = "http://10.10.12.205:9092/song";

export async function getSongs() {
    try {
        const songs = await axios.get(`${baseURL}/songs`)
        return songs.data.content
    }catch (e) {
        console.log('get song', e);
    }

}

export async function postSong(form) {
    try{
        const song = await axios.post(baseURL, form)
        return song.data
    } catch (e) {
        console.log('post', e);
    }
}

export async function putSong(form) {
    try {
        const song = await axios.put(baseURL, form)
        return song.data
    } catch (e) {
        console.log('put', e);
    }
}

export async function deleteSong(id) {
    try {
        const response = await axios.delete(`${baseURL}/${id}`)
        if (response.status===200) return true
        else return false
    } catch (e) {
        console.log('delete', e);
    }
}
