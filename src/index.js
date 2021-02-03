import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from "./components/app"
import createSagaMiddleware from "redux-saga";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { createStore, applyMiddleware } from "redux";
import mySaga from "./saga";

const sagaMiddleware = createSagaMiddleware(mySaga);

const rootElement = document.getElementById("root");

const store = createStore( reducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

ReactDOM.render(
    <React.StrictMode >
        <Provider store = { store }>
        <App />
        </Provider> 
    </React.StrictMode>,
    rootElement
);