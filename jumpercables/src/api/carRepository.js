import axios from 'axios';

export class carRepository {
    url = "http://34.73.181.113:5000";
    config = {
    };

    getCars() {
        let id = JSON.parse(localStorage.getItem('user')).id
        return new Promise((resolve, reject) => {
            axios.get(`${this.url}/cars`, {id: id}, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
        })
    }

    // create new car by user id
    addCar(car) {
        let id = JSON.parse(localStorage.getItem('user')).id;
        let payload = {
            id: id,
            make: car.make,
            model: car.model,
            year: car.year,
        }
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/cars`, payload, this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
        })
    }

    addServiceToCar(id, service) {
        return new Promise((resolve, reject) => {
            axios.post(`${this.url}/services/${id}`, JSON.stringify(service), this.config)
            .then(resp => resolve(resp.data))
            .catch(resp => alert(resp));
        })
    }
}
