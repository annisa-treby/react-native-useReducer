import axios from 'axios'

const baseURL = "http://10.10.12.205:9092/album";

export async function getAlbums() {
    try{
        const albums = await axios.get(`${baseURL}/albums`)
        return albums.data.content
    } catch (e) {
        console.log(e);
    }

}

export async function postAlbum(form, photo) {
    try{

        console.log("servise", photo);
        let formData = new FormData();

        const formAlbum = JSON.stringify(form)

        formData.append('file', photo)
        formData.append('requestBody', formAlbum)

        const album = await axios.post(baseURL, formData)
        return album.data
    } catch (e) {
        console.log('error',e);
    }

}
export async function putAlbum(form) {
    try{
        const {file, ...requestBody}=form

        let formData = new FormData();

        formData.append('file', file)
        formData.append('requestBody', requestBody)

        const album = await axios.put(baseURL, formData)
        return album.data
    } catch (e) {
        console.log(e);
    }

}
export async function deleteAlbum(id){
    try{
        const response = await axios.delete(`${baseURL}/${id}`)
        if (response.status ===200) return true
        else return false
    }catch (e) {
        console.log(e);
    }
}
