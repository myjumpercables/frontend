import React, { Component } from "react";
import {ServiceRepairList} from "./ServiceRepairList";
import {carRepository} from "../../api";

export class ServiceRepairView extends Component {
    carsRepository = new carRepository();

    state ={
        cars: []
    }
    componentDidMount() {
        this.carsRepository.getCars()
            .then(cars =>{
                this.setState({ cars: cars});
            })
    }
    render() {
        return (
            <>
                <div className="container d-flex flex-column align-items-center">
                    <h1>Services and Repairs</h1>
                    <ServiceRepairList cars={this.state.cars}></ServiceRepairList>
                </div>
            </>
        );
    }

}