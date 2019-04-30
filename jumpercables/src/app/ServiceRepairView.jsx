import React, { Component } from "react";
import {Repair} from "../models/Repair";
import {Car} from "../models/Car";
import {ServiceRepairList} from "./ServiceRepairList";

export class ServiceRepairView extends Component {
    state ={
        repairs: [
            new Repair(new Car(2, 'Civic', 'Honda', 2010, ''), 'Replace alternator and Muffler', 1500)
        ]
    }
    render() {
        return (
            <>
                <div className="container d-flex flex-column align-items-center">
                    <h1>Repairs</h1>
                    <ServiceRepairList repairs={this.state.repairs}></ServiceRepairList>
                </div>
            </>
        );
    }
}