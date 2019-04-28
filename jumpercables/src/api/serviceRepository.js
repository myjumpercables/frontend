import axios from 'axios';
export class serviceRepository {
    url = "http://34.73.181.113:5000";
    config = {
    };

    addService(service) {
        let id = JSON.parse(localStorage.getItem('user')).id;
        return new Promise((resolve, reject) =>{
            axios.post(`${this.url}/service/${id}`, service, this.config)
            .then(resp => {resolve(resp)})
            .catch(resp => alert(resp))
        })
    }

    getServices() {
        let id = JSON.parse(localStorage.getItem('user')).id;
        return new Promise((resolve, reject) =>{
            axios.post(`${this.url}/services/${id}`, this.config)
            .then(resp => {resolve(resp.data)})
            .catch(resp => alert(resp))
        })
    }
}