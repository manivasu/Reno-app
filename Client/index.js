import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { Router, Route,  browserHistory } from 'react-router';
import './styles/app.scss';
import Signup from './components/Signup/signup';
// import Signup from './components/Signup/signup';
import Login from './components/Login/Login';
import NoteManager from './components/Notes/NoteManager';

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path='/' component={App} />
        <Route path='/signup' component={Signup} />
        <Route path='/login' component={Login} />
        <Route path='/notes' component={NoteManager} />       
    </Router>,
    document.getElementById('app'));