import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import reducers from "./src/redux/reducer/index"
import * as backend from './src/redux/actions/build/index.main.mjs'
import thunk from 'redux-thunk';
import { loadStdlib } from '@reach-sh/stdlib';
import registerServiceWorker from './registerServiceWorker';
const reach = loadStdlib('ALGO');
reach.setProviderByName('TestNet')


const store = createStore(reducers, compose(
  applyMiddleware(thunk)
),);


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
registerServiceWorker();
