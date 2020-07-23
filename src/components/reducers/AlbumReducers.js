import {
    EDIT_ALBUM,
    FETCH_COMPLETE,
    SET_LOADING,
    HANDLE_INPUT_CHANGE,
    RESET_ALBUM,
    SUBMIT_COMPLETE,
} from '../actions/AlbumActions';

const defaultFormValues = {
    id: '',
    title: '',
    description:'',
    discount : '',
    image:''
};

const initialState = {
    isLoading: false,
    albums: [],
    form: {...defaultFormValues},
};

function AlbumReducer(state, action) {
    const {type, payload} = action;

    switch (type) {
        case EDIT_ALBUM:
            return {...state, form: state.albums.find(album => album.id === payload)};

        case RESET_ALBUM:
            return {...state, form: {...defaultFormValues}};

        case SET_LOADING:
            return {...state, isLoading: true};

        case FETCH_COMPLETE:
            return {...state, isLoading: false, albums: [...payload]};

        case HANDLE_INPUT_CHANGE:
            const {inputName, inputValue} = payload;
            const form = {...state.form};
            form[inputName] = inputValue;

            return {...state, form: {...form}};

        case SUBMIT_COMPLETE:
            return {...state, isLoading: false, form: {...defaultFormValues}};

        default:
            return {...state};
    }
}

export {AlbumReducer, initialState};
