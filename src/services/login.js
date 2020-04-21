import React from 'react';
import api from './api';

const doLogin = function(e){
    history.pushState('/dashboard')
}


const authRequest = function(){
    api.get('profile',{
        headers: {
            Authorization: 
        }
    })
}
