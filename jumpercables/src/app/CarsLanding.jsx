import React, { Component } from 'react'
import { RepairForm } from './RepairForm';
import { CarForm } from './CarForm';
import CarList from './CarList';
import { Link } from 'react-router-dom';
import './styles/CarsLanding.css'
import { Car } from '../models/Car';
import { carRepository } from '../api/carRepository';
export class CarsLanding extends Component{
    carsRepository = new carRepository();
    
    state = { 
        cars: [],
    }

    componentDidMount() {
        this.carsRepository.getCars()
        .then(cars =>{
            console.log(this.setState({ cars: cars}));
        })
    }

    setEditMode(e) {
        this.setState({
            editMode: true,
            targetId: e.target.key,
        })
    }

    render() {
        if(this.state.editMode) {
            return <RepairForm carId={this.state.targetId}></RepairForm>
        }

        return(
            <>
                <CarList cars={this.state.cars}></CarList>
            </>
        )
    }
}
