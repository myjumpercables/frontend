import axios from 'axios';

export class userRespository {
    url = "http://34.73.181.113:5000";
    config = {
    };

    login(loginData) {
        // return new Promise((resolve, reject) => {
        //     let user = {username: "Joe's Repair", id: "abc123", type : "user"}
        //     localStorage.setItem('user', JSON.stringify(user))
        //     resolve(user);
        // })
        // return new Promise((resolve, reject) => {
        //     axios.post(`${this.url}/login`, {username: loginData.username, password: loginData.password}, this.config)
        //     .then(resp => resolve(resp.data))
        //     .catch(resp => alert(resp));
        // })
        return new Promise((resolve, reject) => {
            let user = {username: "Joe's Repair", id: "abc123", type : "user"}
            localStorage.setItem('user', JSON.stringify(user))
            axios.post(`${this.url}/login`, loginData, this.config)
            .then(resp => resolve(user))
            .catch(resp => alert(resp));
        })

    }

    createAccount(account) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/register`, {username: account.username, password: account.password}, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
        })
    }
}
