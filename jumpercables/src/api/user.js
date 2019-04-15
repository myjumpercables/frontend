import axios from 'axios';

export class User {
    url = "34.73.181.113";
    config = {
        headers: {
            Authorization: 'user'
        }
    };

    login(loginData) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/login`, {username: loginData.username, password: loginData.password}, this.config)
                .then(resp => resolve(resp.data))
                .catch(resp => alert(resp));
        })
    }
}