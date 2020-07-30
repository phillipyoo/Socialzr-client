
import axios from 'axios'; 

export default axios.create(
    {
        baseURL: "https://socialzr-server.herokuapp.com/",
        timeout: 5000,
        withCredentials: true
    })


