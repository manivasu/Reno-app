import React, { Component } from 'react';
import { Link } from 'react-router';
import Header from '../Header';
const NoteService = require('../../services/note-service');

export default class Signup extends Component {

    constructor() {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChangeUser = this.handleChangeUser.bind(this);
        this.handleChangePass = this.handleChangePass.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.state = {
            username: '',
            password: '',
            email: ''
        };
    }
    handleChangeUser(event) {
        this.setState({ username: event.target.value });
    }
    handleChangePass(event) {
        this.setState({ password: event.target.value });
    }
    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }
    handleSubmit() {
        NoteService
            .signUp(this.state.username, this.state.password, this.state.email)
            .then(res => {
                console.log(res);
                alert('signup success');
                return;
            })
            .catch(error => {
                console.log(error);
                return;
            });
    }
    render() {
        /*eslint no-mixed-spaces-and-tabs: "error"*/
        return (
            /*jshint smarttabs:true */  
            <div>
                <Header/>
                <div className="container mt-5">
                    <center>
                        <div className="card card-body bg-light">
                            <span className="h4 my-auto"> Sign up form</span>
                            <form className="mt-5">
                                <div className="form-group">
                                    <input type="text" className="form-control col-md-6" placeholder="username" onChange={this.handleChangeUser} />
                                </div>
                                <div className="form-group">
                                    <input type="password" className="form-control col-md-6" placeholder="password" onChange={this.handleChangePass} />
                                </div>
                                <div className="form-group">
                                    <input type="emailid" className="form-control col-md-6" placeholder="emailid" onChange={this.handleChangeEmail} />
                                </div>
                                <div className="form-group">
                                    <Link to={'/login'} onClick={this.handleSubmit}><button type="button" className="btn btn-success col-md-5 btn-block" >submit</button></Link>
                                </div>
                            </form>
                        </div>
                    </center>
                </div>
            </div>  
        );
    }
}