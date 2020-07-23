import {FETCH_COMPLETE, SET_LOADING} from '../actions/SongActions';

const initialState = {
    songs : [],
    isLoading : false
}

function SongReducer(state, action) {
const {type, payload} = action

    switch (type) {
        case SET_LOADING :
            return {...state, isLoading : true}

        case FETCH_COMPLETE :
                return {...state, isLoading: false, songs : [...payload]}
    }
}

export {SongReducer, initialState}
