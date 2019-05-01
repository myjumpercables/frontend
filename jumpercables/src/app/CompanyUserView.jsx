import React, { Component } from 'react';
import User from "../models/User";
import {Car} from "../models/Car";
import {Link} from 'react-router-dom'
import { carRepository } from '../api/carRepository';

export class CompanyUserView extends Component {
    carRepository = new carRepository();
    state = {
        cars: []
    }
    componentDidMount() {
        console.log(this.props.location.state.userId)
        this.carRepository.getCar(this.props.location.state.userId)
            .then(cars => {
                this.setState({cars: cars})
                console.log(cars)
            })
    }
    render() {
        return(
            <>
                <div className='container mt-2'>
                    <div className='row'>
                        {
                            this.state.cars.map((car, i) =>
                                <div className='col-lg-4' key={i}>
                                    <div className='card'>
                                        <div className='card-header'>
                                            <h3>{`${car.year} ${car.make} ${car.model}`}</h3>
                                        </div>
                                        <div className='card-body'>
                                            {!!car.services.length && car.services.map((service, j) =>
                                                <div className='p-2 container' key={j}>
                                                    <Link className='btn btn-info w-100 text-left' to={{
                                                        pathname: `/company/addRepair` ,
                                                        state: {
                                                            service: service,
                                                            redirect: "/company/home",
                                                            return: `/company/repairs/${this.props.location.state.userId}`
                                                        }}}>
                                                        <strong>Service: {service.service_type}</strong>
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </>
        );
    }
}
