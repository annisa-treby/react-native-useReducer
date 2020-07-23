import {
    EDIT_GENRE,
    FETCH_COMPLETE,
    SET_LOADING,
    HANDLE_INPUT_CHANGE,
    RESET_GENRE,
    SUBMIT_COMPLETE,
} from '../actions/GenreActions';

const defaultFormValues = {
    id: '',
    type: '',
};

const initialState = {
    isLoading: false,
    genres: [],
    form: {...defaultFormValues},
};

function GenreReducer(state, action) {
    const {type, payload} = action;

    switch (type) {
        case EDIT_GENRE:
            return {...state, form: state.genres.find(genre => genre.id === payload)};

        case RESET_GENRE:
            return {...state, form: {...defaultFormValues}};

        case SET_LOADING:
            return {...state, isLoading: true};

        case FETCH_COMPLETE:
            return {...state, isLoading: false, genres: [...payload]};

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

export {GenreReducer, initialState};
