import React, { Component } from "react";
import { Car } from "./../models/Car";
import { Repair } from "../models/Repair";

export class RepairForm extends Component {
  state = {
    model: "",
    make: "",
    year: " ",
    repairType: "",
    repairCost: "",
    repairDesc: "",
    repairDate: new Date()
  };

  onSubmit() {
    this.props.onNew(
      new Repair(
        new Car(undefined, this.state.model, this.state.make, this.state.year),
        this.state.repairType,
        this.state.repairCost,
        this.state.repairDesc,
        this.state.repairDate
      )
    );

    // clears the form
    this.setState({
      model: "",
      make: "",
      year: "",
      repairType: "",
      repairCost: "",
      repairDesc: "",
      repairDate: ""
    });
  }

  render() {
    return (
      <>
        <div className="container col-lg-6 col-md-8 col-sm p-0">
          <div className="card p-0">
            <h5 className="card-header bg-secondary text-light font-weight-bold p-2">
              Add a repair
            </h5>
            <div className="card-body">
              <form>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="model">Car model</label>
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
                      <label htmlFor="make">Car make</label>
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
                      <label htmlFor="year">Car year</label>
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
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="repairType">Type of Repair</label>
                      <input
                        type="text"
                        id="repairType"
                        name="repairType"
                        className="form-control"
                        value={this.state.repairType}
                        onChange={e =>
                          this.setState({ repairType: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="repairDate">Repair date</label>
                  <input
                    onChange={e =>
                      this.setState({ repairDate: e.target.value })
                    }
                    value={this.state.repairDate}
                    type="date"
                    className="form-control"
                    id="repairDate"
                    placeholder="repairDate"
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="repairCost">Repair Cost</label>
                      <input
                        type="text"
                        id="repairCost"
                        name="repairCost"
                        className="form-control"
                        value={this.state.repairCost}
                        onChange={e =>
                          this.setState({ repairCost: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <div className="form-group">
                      <label htmlFor="repairDesc">Repair description</label>
                      <input
                        type="text"
                        id="repairDesc"
                        name="repairDesc"
                        className="form-control"
                        value={this.state.repairDesc}
                        onChange={e =>
                          this.setState({ repairDesc: e.target.value })
                        }
                      />
                    </div>
                  </div>
                </div>
              </form>
              <div>
                <button
                  onClick={() => this.onSubmit()}
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

export default RepairForm;
