import axios from 'axios'

const baseURL = 'http://10.10.12.205:9092/artist'

export async function getArtists() {
    try {
        const artists = await axios.get(`${baseURL}/artists`)
        return artists.data.content
    }catch (e) {
        console.log( 'artists',e);
    }

}

export async function postArtist(form) {
    try {
        const artist = await axios.post(baseURL, form)
        return artist.data
    } catch (e) {
        console.log('post artist', e);
    }
}

export async function putArtist(form) {
    try {
        const artist = await axios.put(baseURL, form)
        return artist.data
    }catch (e) {
        console.log('put artist', e);
    }
}

export async function deleteArtist(id) {
    try {
        const response = await axios.delete(`${baseURL}/${id}`)
        if (response.status === 200) return true
        else return false
    } catch (e) {
        console.log('delete', e);
    }
}
