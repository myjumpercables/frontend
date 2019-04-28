import React, { Component } from "react";
import { Car } from "./../models/Car";
import { Repair } from "../models/Repair";

export class RepairForm extends Component {
    state = {
        model: "",
        make: "",
        year: " ",
        repairType: "",
        repairCost: ""
    };

    onSubmit() {
        this.props.onNew(
            new Repair(new Car(undefined, this.state.model, this.state.make, this.state.year), this.state.repairType, this.state.repairCost)
        );

        // clears the form
        this.setState({
            model: "",
            make: "",
            year: "",
            repairType: "",
            repairCost: ""
        });
    }

    render() {
        return (
            <>
                <div className="container col-lg-6 col-md-8 col-sm p-0">
                    <div className="card p-0">
                        <h5 className="card-header bg-secondary text-light font-weight-bold p-2">
                            Add a car
                        </h5>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <div id="subjectError" className="error"><br/></div>
                                            <label htmlFor="model">model</label>
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
                                            <div id="makeError" className="error"><br/></div>
                                            <label htmlFor="make">make</label>
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
                                            <div id="yearError" className="error"><br/></div>
                                            <label htmlFor="year">year</label>
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
                                            <div id="typeError" className="error"><br/></div>
                                            <label htmlFor="repairType">Type of Repair</label>
                                            <input
                                                type="text"
                                                id="repairType"
                                                name="repairType"
                                                className="form-control"
                                                value={this.state.repairType}
                                                onChange={e => this.setState({ repairType: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col">
                                        <div className="form-group">
                                            <div id="costError" className="error"><br/></div>
                                            <label htmlFor="repairCost">Repair Cost</label>
                                            <input
                                                type="text"
                                                id="repairCost"
                                                name="repairCost"
                                                className="form-control"
                                                value={this.state.repairCost}
                                                onChange={e => this.setState({ repairCost: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div>
                                <button
                                    onClick={() => this.onSubmit()}
                                    className="btn btn-primary">
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
