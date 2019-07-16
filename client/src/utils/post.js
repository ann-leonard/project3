import axios from 'axios';

export default {
    createUser: function(data){
        return axios.post('/user/sign-up', data)
    },

    signIn: function(data){
        return axios.post('/user/sign-in', data)
    },

    saveTimeSeries: function(data){
        return axios.post('/user/api/save', {data})
    },

    getSeries: function(id,data){
       // console.log(data)
        return axios.post(`/user/api/series/${id}`, data)
    }

}