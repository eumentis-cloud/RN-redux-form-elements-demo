import { combineReducers } from 'redux';

import formReducer from './testForm';

export default combineReducers({
    formData: formReducer,
});
