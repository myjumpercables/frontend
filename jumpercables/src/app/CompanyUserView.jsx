import React, { Component } from 'react';
import User from "../models/User";
import {Car} from "../models/Car";
import {Link} from 'react-router-dom'
export class CompanyUserView extends Component {
    state = {
        user: new User(1, 'billy', [new Car(1, 'F-150', 'Ford', 2010, '')])
    }

    render() {
        return(
            <>
                <div className='container mt-2'>
                    <div className='row'>
                        {
                            this.state.user.cars.map((car, i) =>
                            <div className='col-lg-4'>
                                <div className='card ' key={i}>
                                    <div className='card-header'>
                                        <h3>{`${car.year} ${car.make} ${car.model}`}</h3>
                                    </div>
                                    <div className='card-body'>
                                        {!!car.services.length && car.services.map((service, j) =>
                                            <div className='p-2'>
                                                <Link className='btn btn-info w-100 text-left' to={{
                                                    pathname: `/company/addRepair` ,
                                                    state: {
                                                            service: service,
                                                            redirect: "/company/home"
                                                        }}}>
                                                    <strong>Service: {service.subject}</strong>
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
