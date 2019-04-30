import React, { Component } from "react";
import { Car } from "./../models/Car";
import { Redirect } from 'react-router-dom'
import { carRepository } from "../api/carRepository";

export class CarForm extends Component {
  state = {
    model: "",
    make: "",
    year: "",
    redirect: "",
    carFormError: false,
  };

  carRepository = new carRepository();

  onSubmit() {
    if (!this.state.model) {
      document.getElementById('newModelError').innerHTML = "Please enter a valid model"
    } else if (!this.state.make) {
      document.getElementById('newMakeError').innerHTML = "Please enter a valid make"
    } else if (!this.state.year) {
      document.getElementById('newYearError').innerHTML = "Please enter a valid year"
    }
    if(this.state.make && this.state.year && this.state.model) {
      let car = new Car(undefined, this.state.model, this.state.make, this.state.year);
      this.carRepository.addCar(car)
      .then(()=>{
        this.setState({
          model: "",
          make: "",
          year: ""
        });
        this.setState ({ redirect: this.props.location.state.redirect});
      })
      .catch(err =>{
          this.setState({ carFormError: true});
      })
    }
  }

  render() {
    if(this.state.redirect) {
      return <Redirect to={this.state.redirect}/>
    }

    return (
      <>
  <div className="container">
    <div className="card">
            <div className="card-header mt-3 bg-secondary text-light font-weight-bold">
              Car Form
            </div>

            <div className=" card-body">
              <form>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <div id="newModelError" className="error"><br/></div>
                      <label htmlFor="model">Model</label>
                      <input
                        type="text"
                        id="model"
                        name="model"
                        className="form-control"
                        placeholder="e.g. Toyota, Honda, Ford"
                        value={this.state.model}
                        onChange={e => this.setState({ model: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <div id="newMakeError" className="error"><br/></div>
                      <label htmlFor="make">Make</label>
                      <input
                        type="text"
                        id="make"
                        name="make"
                        className="form-control"
                        placeholder="e.g. Corolla, Civic,"
                        value={this.state.make}
                        onChange={e => this.setState({ make: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <div id="newYearError" className="error"><br/></div>
                      <label htmlFor="year">Year</label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        className="form-control"
                        placeholder="e.g. 2003, 2006, 2007"
                        value={this.state.year}
                        onChange={e => this.setState({ year: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div>
                <button
                  onClick={e => this.onSubmit()}
                  className="btn btn-primary"
                >
                  Add
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default CarForm;
