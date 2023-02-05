import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//start of reducers

const feeling = (state= '', action) => {
    console.log('feeling reducer');
    return state;
}

const understanding = (state = '', action) => {
    console.log('understanding reducer');
    return state;
}

const support = (state = '', action) => {
    console.log('support reducer');
    return state;
}

const comments = (state= '', action) => {
    console.log('comments reducer');
    return state;
}


//end of reducers

const storeInstance = createStore(
    combineReducers(
        {
            // reducer names here
            feeling,
            understanding,
            support,
            comments
        }
    ),
    applyMiddleware(logger)
);

ReactDOM.render(
    <Provider store={storeInstance}>
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
