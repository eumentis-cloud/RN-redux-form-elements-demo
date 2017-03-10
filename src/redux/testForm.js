import validator from '../libs/validator';

const VALUE_CHANGED = 'app/form/testForm/VALUE_CHANGED';

const formValidation = {
    name: '',
    password: 'required',
    mobile: 'required|mobile',
    date: 'date',
    time: 'time',
    item: '',
};

/*
    Actions
 */
export const formHandler = (arg) => {
    const vals = {
        valueChanged: false,
        validate: false,
        fieldName: '',
        value: '',
        error: '',
    };
    Object.assign(vals, arg);

    if (vals.validate) {
        vals.error = validator(vals.value, formValidation[vals.fieldName]);
    }

    return {
        type: VALUE_CHANGED,
        value: {
            [vals.fieldName]: {
                value: vals.value,
                error: vals.error,
            },
        },
    };
};

/*
    Reducer
 */
const createReducer = () => {
    const INITIAL_STATE = {};
    Object.keys(formValidation).forEach((fieldName) => {
        INITIAL_STATE[fieldName] = {
            value: '',
            error: '',
        };
    });

    return function (state = INITIAL_STATE, action) {
        switch (action.type) {
            case VALUE_CHANGED:
                return Object.assign({}, state, action.value);
            default:
                return state;
        }
    };
};

export default createReducer();
