// Initial data can be created from the list of field names
const INITIAL_DATA = {
    name: {
        value: '',
        error: '',
    },
    mobile: {
        value: '',
        error: '',
    },
    password: {
        value: '',
        error: '',
    },
};

export default (state = INITIAL_DATA, action) => {
    switch (action.type) {
        case 'VALUE_CHANGED':
            return Object.assign({}, state, action.value);
        default:
            return state;
    }
};
