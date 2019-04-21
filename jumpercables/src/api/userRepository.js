import axios from 'axios';

export class userRespository {
    url = "http://34.73.181.113:5000";
    config = {
        headers: {
            Authorization: 'user'
        }
    };

    login(loginData) {
        return new Promise((resolve, reject) => {
            let user = {username: "Joe's Repair", id: "abc123", type : "user"}
            localStorage.setItem('user', JSON.stringify(user))
            resolve(user);
        })
        // return new Promise((resolve, reject) => {
        //     axios.post(`${this.url}/login`, {username: loginData.username, password: loginData.password}, this.config)
        //     .then(resp => resolve(resp.data))
        //     .catch(resp => alert(resp));
        // })
        // return new Promise((resolve, reject) => {
        //     let user = {id: "abc123"}
        //     localStorage.setItem('user', JSON.stringify(user))
        //     axios.get(`${this.url}/`, this.config)
        //     .then(resp => resolve(resp.data))
        //     .catch(resp => alert(resp));
        // })

    }

    logout() {
        localStorage.removeItem('user');
    }
}
