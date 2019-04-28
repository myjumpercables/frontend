import axios from 'axios';

export class userRespository {
    url = "http://34.73.181.113:5000";
    config = {
    };

    login(loginData) {
        return new Promise((resolve, reject) => {
            let user = {username: "Joe's Repair", id: "abc123", type : "company"}
            localStorage.setItem('user', JSON.stringify(user))
            resolve(user);
        })
        // return new Promise((resolve, reject) => {
        //     axios.post(`${this.url}/login`, {username: loginData.username, password: loginData.password}, this.config)
        //     .then(resp => resolve(resp.data))
        //     .catch(resp => alert(resp));
        // })
        // return new Promise((resolve, reject) => {
        //     axios.post(`${this.url}/login`, loginData, this.config)
        //     .then(resp => {
        //         console.log(resp)
        //         resolve(resp.data);
        //     })
        //     .catch(resp => resolve({error: "Invalid Credentials"}));
        // })

    }

    createAccount(account) {
        // return new Promise((resolve, reject) => {
        //     let user = {username: "Joe's Repair", id: "abc123", type : "user"}
        //     localStorage.setItem('user', JSON.stringify(user))
        //     resolve(user);
        // })
        return new Promise((resolve, reject) => {
        axios.post(`${this.url}/create-account`, 
        {
        username: account.username, 
        password: account.password,
        email: account.email,
        type: (account.isCompany) ? "company" : "user"
        }, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
        })
    }

    updateAccount(account) {
        let id = JSON.parse(localStorage.getItem('user')).id;
        return new Promise((resolve, reject) =>{
            axios.post(`${this.url}/manageaccount/${id}`, account, this.config)
            .then(resp => {resolve(resp)})
            .catch(resp => alert(resp))
        })
    }

    getRequests(account) {
        let id = JSON.parse(localStorage.getItem('user')).id;
        return new Promise((resolve, reject) =>{
            axios.post(`${this.url}/manageaccount/${id}`, account, this.config)
            .then(resp => {resolve(resp)})
            .catch(resp => alert(resp))
        })
    }

    acceptRequest(requestId) {
        return new Promise((resolve, reject) =>{
            axios.post(`${this.url}/manageaccount/${requestId}`, this.config)
            .then(resp => {resolve(resp)})
            .catch(resp => alert(resp))
        })
    }
}
