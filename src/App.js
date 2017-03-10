import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './redux/reducers';

import MainForm from './MainForm';

const store = createStore(reducer);

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <MainForm />
            </Provider>
        );
    }
}
