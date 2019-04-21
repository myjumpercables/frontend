import React, { Component } from "react";
import { Car } from "./../models/Car";

export class CarForm extends Component {
  state = {
    model: "",
    make: "",
    year: " "
  };

  onSubmit() {
    this.props.onNew(
      new Car(undefined, this.state.model, this.state.make, this.state.year)
    );

    // clears the form
    this.setState({
      model: "",
      make: "",
      year: ""
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className="card">
            <div className="card-header bg-secondary text-light font-weight-bold">
              Car Form
            </div>
            <div className=" card-body">
              <form>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="model">Model</label>
                      <input
                        type="text"
                        id="model"
                        name="model"
                        className="form-control"
                        value={this.state.model}
                        onChange={e => this.setState({ model: e.target.value })}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="make">Make</label>
                      <input
                        type="text"
                        id="make"
                        name="make"
                        className="form-control"
                        value={this.state.make}
                        onChange={e => this.setState({ make: e.target.value })}
                      />
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="year">Year</label>
                      <input
                        type="text"
                        id="year"
                        name="year"
                        className="form-control"
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
