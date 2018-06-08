import React, { Component } from 'react';
import uuidv1 from 'uuid/v1';
import { browserHistory } from 'react-router';
const NoteService = require('../../services/note-service');

export default class Login extends Component {

    constructor() {
        super();
        this.handleLogin = this.handleLogin.bind(this);
        this.handleChangeUserLogin = this.handleChangeUserLogin.bind(this);
        this.handleChangePassLogin = this.handleChangePassLogin.bind(this);
        this.handelsignup = this.handelsignup.bind(this);
        this.state = {
            loginusername: '',
            loginpass: '',
            validationErrors: []
        };
    }
    handleChangeUserLogin(event) {
        const username = event.target.value.trim();
        this.validateuser(username);
        console.log(username);
        this.setState({ loginusername: username });
    }
    handleChangePassLogin(event) {
        const password = event.target.value.trim();
        this.validatepassword(password);
        this.setState({ loginpass: password });
    }

    handleLogin(event) {
        event.preventDefault();
        if (this.state.validationErrors && this.state.validationErrors.length === 0) {
            if (this.validateuser(this.state.loginusername) && this.validatepassword(this.state.loginpass)) {
                NoteService
                    .signIn(this.state.loginusername)
                    .then(res => {
                        console.log(res);
                        alert('Login success');
                        browserHistory.push('/notes');
                        return;
                    })
                    .catch(error => {
                        console.log(error);
                        return;
                    });
            }
        }
    }
    handelsignup(event) {
        event.preventDefault();
        browserHistory.push('/signup');
    }

    validateuser(loginusername) {
        const message = 'Username is required';
        if (loginusername === '') {
            this.addValidationError(message);
            return false;
        } else {
            this.removeValidationError(message);
            return true;
        }
    }
    validatepassword(loginpass) {
        const message = 'Password is required';
        if (loginpass === '') {
            this.addValidationError(message);
            return false;
        } else {
            this.removeValidationError(message);
            return true;
        }
    }
    addValidationError(message) {
        this.setState((previousState) => {
            const validationErrors = [...previousState.validationErrors];
            validationErrors.push({ message });
            return {
                validationErrors: validationErrors
            };
        });
    }
    removeValidationError(message) {
        this.setState((previousState) => {
            const validationErrors = previousState
                .validationErrors
                .filter(error => error.message !== message);
            return {
                validationErrors: validationErrors
            };
        });
    }

    render() {
        const validationErrorSummary = this.state.validationErrors.map(error =>
            <div key={uuidv1()} className="alert alert-danger alert-dismissible fade show col-md-5  mt-3">
                {error.message}
            </div>
        );
        return (
            <div>
                <div className="container mt-5" >
                    <center>
                        <div className="card card-body bg-light" >
                            <span className="h4 my-auto text-dark"> Login form</span>
                            {validationErrorSummary}
                            <form className="mt-3">
                                <div className="form-group">
                                    <input type="text" className="form-control col-md-6" placeholder="username" onChange={this.handleChangeUserLogin} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control col-md-6" placeholder="password" onChange={this.handleChangePassLogin} />
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-success col-md-4" onClick={this.handleLogin}>
                                        Submit
                                    </button>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-info col-md-4" onClick={this.handelsignup}>Signup</button>
                                </div>
                            </form>
                        </div>
                    </center>
                </div>
            </div>
        );
    }
}