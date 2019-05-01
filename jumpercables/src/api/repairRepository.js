import axios from 'axios';
export class repairRepository {
    url = "http://34.73.181.113:5000";
    config = {
    };

    addRepair(repair, serviceId) {
        return new Promise((resolve, reject) =>{
            axios.post(`${this.url}/repair/add/${serviceId}`, repair, this.config)
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