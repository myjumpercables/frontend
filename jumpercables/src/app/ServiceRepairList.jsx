import React from "react";

export const ServiceRepairList = (props) => {
    if (!props.repairs.length)
        return (
            <div className="container rounded mt-1 mb-1">
                <div
                    className="navbar navbar-light"
                    style={{ backgroundColor: " #f2f2f2" }}
                >
                    Add a repair!
                </div>
            </div>
        );
    return(
        <div className='container'>
            <div className='row'>
                {
                props.repairs.map((repair, i) =>
                    <div className='col-4'>
                        <div className='card bg-light'>
                        <div className='card-header border-bottom' key={i}>
                            <h4>{repair.car.year} {repair.car.make} {repair.car.model}</h4>
                        </div>
                            <div id='accordion'>
                                {!!repair.car.services.length && repair.car.services.map((service, j) =>
                                    <div id="accordion">
                                        <div className="card">
                                            <div className="card-header" id={`heading${j}`} key={j}>
                                                <h5 className="mb-0">
                                                    <button className="btn btn-info w-100" data-toggle="collapse"
                                                            data-target={`#service${i}${j}`}
                                                            aria-controls="collapseOne">
                                                        <strong> Service: </strong> {service.subject}
                                                    </button>
                                                </h5>
                                            </div>

                                            <div id={`service${i}${j}`} className="collapse"
                                                 aria-labelledby={`heading${j}`} data-parent="#accordion">
                                                <div className="card-body" id={`accordion${i}${j}`}>
                                                    <div className="card-body">
                                                        {`The repair is: ${repair.repairType}`}
                                                    </div>
                                                    <div className='card-footer'>
                                                        {`Total Cost: ${repair.repairCost}`}
                                                    </div>
                                                    <div>
                                                        <i className="fas fa-check"></i>
                                                        <i className="fas fa-times-circle"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    /*
                                    <div className="card">
                                        <div className="card-header" key={j} id={`heading${j}`}>
                                            <button
                                                className="btn btn-info w-100"
                                                data-toggle="collapseService"
                                                data-target={`#Service${i}${j}`}
                                                aria-controls={`#Service${i}${j}`}>
                                                <strong> Service: </strong> {service.subject}
                                            </button>
                                        </div>
                                        <div
                                            id={`Service${i}${j}`}
                                            className="collapseService"
                                            aria-labelledby={`heading${j}`}
                                            data-parent="#accordion">
                                            <div className="card-body">
                                                {service.text}
                                            </div>
                                            <div className="card-footer text-muted">
                                                {service.date}
                                            </div>
                                        </div>
                                        <div className='card-footer'>
                                            <button
                                                className="btn btn-warning collapsed w-100"
                                                data-toggle="collapseRepair"
                                                data-target={`#Repair${i}${j}`}>
                                                <strong>View Repair</strong>
                                            </button>
                                        </div>
                                        <div
                                            id={`Repair${i}${j}`}
                                            className='collapseRepair'>
                                            <div className='card-body'>
                                                <strong>{repair.repairType}</strong>: for ${repair.repairCost}
                                            </div>
                                        </div>
                                    </div>
                                     */

                                )}
                            </div>
                        </div>
                    </div>
                )
            }
            </div>
        </div>
    )
}



