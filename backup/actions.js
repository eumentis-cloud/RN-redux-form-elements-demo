import validator from '../src/libs/validator';

const formValidation = {
    name: '',
    password: 'required',
    mobile: 'required|mobile',
};

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
        type: 'VALUE_CHANGED',
        value: {
            [vals.fieldName]: {
                value: vals.value,
                error: vals.error,
            },
        },
    };
};
