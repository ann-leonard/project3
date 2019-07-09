import axios from 'axios';

export default {
    createUser: function(data){
        return axios.post('/user/sign-up', data)
    },

    signIn: function(data){
        return axios.post('/user/sign-in', data)
    }

}