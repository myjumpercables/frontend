import axios from 'axios';

export class userRepository {
    url = "http://34.73.181.113:5000";
    config = {
    };

    login(loginData) {
        // return new Promise((resolve, reject) => {
        //     let user = {username: "Joe's Repair", id: "abc123", type : "user"}
        //     localStorage.setItem('user', JSON.stringify(user))
        //     resolve(user);
        // })
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/login`, loginData, this.config)
            .then(resp => {
                console.log(resp)
                resolve(resp.data);
            })
            .catch(resp => resolve({error: "Invalid Credentials"}));
        })
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

    changePassword(oldPassword, newPassword) {
        let id = JSON.parse(localStorage.getItem('user')).id;
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/users/changePassword`)
            .then(resp => {resolve(resp.data)})
            .catch(resp => alert(resp))
        })
    }

    searchUsers(query) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/requests/search`, 
            query, this.config)
            .then(resp => {resolve(resp.data)})
            .catch(resp => alert(resp));
        })
    }

    spawnRequest(userId) {
        console.log(userId)
        let payload = {
            company_id: JSON.parse(localStorage.getItem('user')).id,
        }
        return new Promise((resolve, reject) =>{
            axios.post(`${this.url}/requests/add/${userId}`, payload, this.config)
            .then(resp => {resolve(resp)})
            .catch(resp => {resolve({error: resp})})
        })
    }

    getRequests(account) {
        let id = JSON.parse(localStorage.getItem('user')).id;
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/requests/getRequests/${id}`, this.config)
            .then(resp => {resolve(resp.data)})
            .catch(resp => alert(resp))
        })
    }

    acceptRequest(requestId) {
        return new Promise((resolve, reject) =>{
            axios.post(`${this.url}/requests/update/${requestId}`, this.config)
            .then(resp => {resolve(resp)})
            .catch(resp => alert(resp))
        })
    }

    rejectRequest(requestId) {
        return new Promise((resolve, reject) =>{
        })
    }

    getCompanies() {
        let id = JSON.parse(localStorage.getItem('user')).id;
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/requests/companies/${id}`, this.config)
            .then(resp => {resolve(resp.data)})
            .catch(resp => alert(resp))
        })
    }

    getUsers() {
        let id = JSON.parse(localStorage.getItem('user')).id;
        return new Promise((resolve, reject) =>{
            axios.get(`${this.url}/requests/users/${id}`, this.config)
            .then(resp => {resolve(resp.data)})
            .catch(resp => alert(resp))
        })
    }
}
