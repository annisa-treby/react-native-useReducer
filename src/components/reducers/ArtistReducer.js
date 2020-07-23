import {FETCH_COMPLETE, SET_LOADING, HANDLE_INPUT_CHANGE} from '../actions/ArtistActions';

const defaultValues={
    id:'',
    name:'',
    gender:'',
    debutYear : '',
    biography : ''
}

const initialState = {
    form : {...defaultValues},
    artists : [],
    isLoading : false
}

function ArtistReducer(state, action) {
    const {type, payload} =action

    switch (type) {
        case SET_LOADING :
            return {...state, isLoading: true}

        case FETCH_COMPLETE :
            return {...state, isLoading: false, artists: [...payload]}

        case HANDLE_INPUT_CHANGE:
            const {inputName, inputValue} = payload;
            const form = {...state.form};
            form[inputName] = inputValue;

        default :
            return {...state}
    }
}
export {ArtistReducer, initialState}
