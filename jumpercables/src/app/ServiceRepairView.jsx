import React, { Component } from "react";
import {Repair} from "../models/Repair";
import {Car} from "../models/Car";
import {ServiceRepairList} from "./ServiceRepairList";

export class ServiceRepairView extends Component {
    state ={
        cars: [
            new Car(1, 'F-150', 'Ford', 2010, '')
        ]
    }
    render() {
        return (
            <>
                <div className="container d-flex flex-column align-items-center">
                    <h1>Repairs</h1>
                    <ServiceRepairList car={this.state.cars[0]}></ServiceRepairList>
                </div>
            </>
        );
    }
}