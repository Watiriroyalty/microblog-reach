import React from 'react';
import login from './views/login';
import {renderDOM, renderView} from './views/render';
import './style.css';


class App extends React.Component{

    render(){
        return renderView(this, login);
    }
}

renderDOM(<App />);