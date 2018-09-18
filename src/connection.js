import axios from 'axios';

import ApSettings from './AppSettings.json'

const AppSttings = ApSettings

const connection = axios.create({
    
});

//connection.defaults.headers.post['Content-Type']='application/json'
//connection.defaults.headers.post['Access-Control-Allow-Origin']='*'

connection.interceptors.request.use(request=>{
    
    return request;
},error =>{
    return Promise.reject(error);
});


connection.interceptors.response.use(response=>{
    return response;
},error =>{
    return Promise.reject(error);
});

export default connection;