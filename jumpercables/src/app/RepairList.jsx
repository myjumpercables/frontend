import React, { Component } from "react";

class RepairList extends Component {
    render() {
        const { length: count } = this.props.repairs;

        if (count === 0) {
            return(
                <div className='navbar navbar-light'>
                    <h2>Please add a repair</h2>
                </div>
            )
        } else {
            return(
                this.props.repairs.length > 0 &&
                this.props.repairs.map((r, i) => {
                    return(
                        <div className="container p-2">
                            <div className="card" key={i}>
                                <h5 className="card-header">
                                    <div>{`${r.car.year} ${r.car.make} ${r.car.model}`}</div>
                                </h5>
                                <div className="card-body">
                                    <h5 className="card-title">Repair cost: ${r.repairCost}</h5>
                                    <p>
                                        {r.repairType}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            )
        }
    }
}
export default RepairList;