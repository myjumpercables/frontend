import React, { Component } from 'react'
import { RepairForm } from './RepairForm';
import { CarForm } from './CarForm';
import CarList from './CarList';
import { Link } from 'react-router-dom';
import './styles/CarsLanding.css'
export class CarsLanding extends Component{
    state ={ 
        cars: [],
        editMode: false,
    }
    
    onNew(car) {
        this.setState((state, props) => {
            state.cars = state.cars || [];
            state.cars.push(car);
            return state;
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
                <div className="container">
                <div className="row container mt-2 mb-2">
                    <Link 
                        className="btn btn-secondary" 
                        to={{
                            pathname:"/user/addcar",
                            state: {
                                redirect: "/user/cars"
                            }
                            }}>ADD CAR</Link>
                </div>
                </div>
            </>
        )
    }
}
