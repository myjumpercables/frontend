import React, { Component } from "react";
import { Repair } from "../models/Repair";

export class RepairForm extends Component {
  state = {
    repairType: "",
    repairCost: "",
    repairDesc: "",
    repairDate: new Date()
  };

  onSubmit() {
    this.props.onNew(
        new Repair(this.state.repairType, this.state.repairCost, this.state.repairDesc, this.state.repairDate)
    );

    // clears the form
    this.setState({
      subject: '',
      description: '',
      repairType: "",
      repairCost: "",
      repairDesc: "",
      repairDate: ""
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-9 col-md-10 col-sm-12 p-1'>
              <div className="card p-0">
                <div className='card-header'>
                  <h3 className="font-weight-bold">
                    Add a repair for {this.props.location.state.service.subject.toLowerCase()}
                  </h3>
                  <p className=''> {this.props.location.state.service.description}</p>
                </div>
                <div className="card-body">
                  <h4>Add a repair for this service</h4>
                  <form>
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
            {!!this.props.location.state.service.repairs &&  <div className='col-lg-3 col-md-2 col-sm-12 p-1'>
              <div className='card'>
                <div className='card-header'>
                  Past Repairs for this service
                </div>
                <div className='card-body'>
                  {this.props.location.state.service.repairs.map((repairs, i) =>
                      <div>
                        <button type="button" className="btn btn-info w-100" data-toggle="modal" data-target="#myModal"
                                key={i}>
                          {`${repairs.repairType}`}
                        </button>
                        <div id="myModal" className="modal fade" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title">{`${repairs.repairType} for $${repairs.repairCost}`}</h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                              </div>
                              <div className="modal-body">
                                <p>{repairs.repairDesc}</p>
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                  )}
                </div>
              </div>
            </div>}
          </div>
        </div>
      </>
    );
  }
}
export default RepairForm;
