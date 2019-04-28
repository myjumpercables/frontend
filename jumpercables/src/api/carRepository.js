import axios from 'axios'

export class carRepository {
    url = "http://34.73.181.113:5000";
    config = {
        headers: {
            Authorization: 'user'
        }
    };

    getCars(id) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/cars`, id, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
        })
    }

    // create new car by user id
    addCar(car) {
        let id = JSON.parse(localStorage.getItem('user')).id;
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/cars/${id}`, car, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
        })
    }

    addServiceToCar(id, service) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/services/${id}`, service, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
        })
    }
}
