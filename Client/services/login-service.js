'use strict';


// package references


import * as axios from 'axios';


// db options


const baseApiUrl = 'http://localhost:8000/api/';

//login

const signUp = (username,password, email) => {

    return new Promise((resolve, reject) => {
        axios
            .post(`${baseApiUrl}/signup`, { 
                'username': username,
                'password': password,
                'email': email })
            .then((result) => {
                resolve(result.data);
            })
            .catch(error => {
                console.log(error);
                reject(error.message);
            });

    });

};