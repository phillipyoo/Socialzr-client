
import axios from 'axios'; 

export default axios.create(
    {
        // baseURL: 'http://localhost:3001',
        baseURL: "https://socialzr-server.herokuapp./com/",
        timeout: 5000,
        withCredentials: true
    })


