import React, { Component } from "react";
import { Repair } from "../models/Repair";
import {repairRepository} from "../api";

export class RepairForm extends Component {
  repairRepository = new repairRepository();
  state = {
    repairType: "",
    repairCost: "",
    repairDesc: "",
    repairDate: new Date(),
    redirect: "",
    totalCost: this.getTotalCost(),
  };

  getTotalCost(repai) {
    var cost = 0;
    const repairs = this.props.location.state.service.repairs;
    repairs.forEach(element => {
      cost += element.cost;
    });
    // this.props.location.state.service.repairs.foreach((repair)=>{
    //   cost = repair.cost;
    // })
    return cost;
  }

  onSubmit() {
    this.repairRepository.addRepair({
      car_repair: '',
      repair_type: this.state.repairType,
      repair_desc: this.state.repairDesc,
      cost: this.state.repairCost,
      date: this.state.repairDate,
    }, this.props.location.state.service.service_id)
    // clears the form
    this.setState({
      repairType: "",
    repairCost: "",
    repairDesc: "",
    repairDate: new Date(),
    });
  }

  render() {
    return (
      <>
        <div className="container">
          <div className='row justify-content-center'>
            <div className='col-lg-9 col-md-8 col-sm-12 p-1'>
              <div className="card p-0">
                <div className='card-header'>
                  <h4 className="font-weight-bold">
                    Service: {this.props.location.state.service.service_type}
                  </h4>
                  <p className=''> {this.props.location.state.service.service_desc}</p>
                </div>
                <div className="card-body">
                  <h4>Add a repair for this service</h4>
                  <form>
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
            {!!this.props.location.state.service.repairs.length &&  <div className='col-lg-3 col-md-4 col-sm-12 p-1'>
              <div className='card'>
                <div className='card-header'>
                  Past Repairs:
                </div>
                <div className='card-body'>
                  {this.props.location.state.service.repairs.map((repair, i) =>
                      <div>
                        <button type="button" className="btn btn-info w-100 mt-1" data-toggle="modal" data-target={`#myModal${i}`}
                                key={i}>
                          {`${repair.repair_type}`}
                        </button>
                        <div id={`myModal${i}`} className="modal fade" role="dialog">
                          <div className="modal-dialog">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h4 className="modal-title">Repair: <span className=" font-italic">{repair.repair_type}</span><span className="text-muted ml-2">${repair.cost}</span></h4>
                                <button type="button" className="close" data-dismiss="modal">&times;</button>
                              </div>
                              <div className="modal-body">
                                <p>{repair.repair_desc}</p>
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
                <div className="text-muted text-center">
                  <h5>${this.state.totalCost}</h5>
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
