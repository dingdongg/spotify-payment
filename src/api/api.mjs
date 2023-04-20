import axios from 'axios'

axios.get('http://localhost:3000/csrf-token')
.then((resp)=>{console.log(resp.data)})
const api = {
    login({ username, password }) {
        console.log(`API.JS LOGIN STUB\nLOGGING IN WITH USERNAME ${username} AND PASSWORD ${password}`);
    }
}



export default api;