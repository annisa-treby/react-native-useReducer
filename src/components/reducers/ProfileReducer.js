import {FETCH_COMPLETE, SET_LOADING, SET_LOGIN} from '../actions/ProfileActions';

const defaultValue = {
    firstName : '',
    middleName : '',
    lastName : '',
    gender : '',
    email : '',
    phone : '',
    birthDate : '',
    location : '',
    password : ''
}

const initialState = {
    form : {...defaultValue},
    profiles :[],
    isLoading : false,
    isSignedIn : false
}

function ProfileReducer(state, action) {
    const {type, payload}=action

    switch (type) {
        case SET_LOADING :
            return {...state, isLoading: true}

        case FETCH_COMPLETE :
            return {...state, isLoading: false, profiles : payload}

        case SET_LOGIN :
            return {...state, isSignedIn : true}

        default :
            return {...state}
    }
}

export {ProfileReducer, initialState}
