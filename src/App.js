/**
|--------------------------------------------------
| Date: 2017-07-09
| TItle: Currency Converter
| Author: Jiwon Park
|--------------------------------------------------
*/

import React, { Component } from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import ConvertForm from './components/ConvertForm';

class App extends Component {
    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <ConvertForm />
            </Provider>
        );
    }
}

export default App;