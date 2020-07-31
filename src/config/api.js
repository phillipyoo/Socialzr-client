
import axios from 'axios'; 

export default axios.create(
    {
        // baseURL: "localhost://3000",
        baseURL: "https://socialzr-server.herokuapp.com/",
        timeout: 5000,
        withCredentials: true
    })


