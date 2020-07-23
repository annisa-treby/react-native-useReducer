import axios from 'axios'

const baseURL = "http://10.10.12.205:9092/profile";

export async function getProfiles() {
    try{
        const profiles = await axios.get(`${baseURL}/profiles`)
        return profiles.data.content
    } catch (e) {

    }
}

export async function postProfile(form) {
    try{
        const profile = await axios.post(baseURL, form)
        return profile.data.content
    }catch (e) {
        console.log("post" , e);
    }
}

export async function puttProfile(form) {
    try{
        const profile = await axios.put(baseURL, form)
        return profile.data.content
    }catch (e) {
        console.log("post" , e);
    }
}

export async function deleteProfile(id) {
    try{
        const response = await axios.delete(`${baseURL}/${id}`)
        if (response.status === 200) return true
        else return false
    } catch (e) {
        console.log('delete', e);
    }
}


