import React from "react";

export const ServiceRepairList = (props) => {
    if (!props.repairs)
        return (
            <div className="container rounded mt-1 mb-1">
                <div
                    className="navbar navbar-light"
                    style={{ backgroundColor: " #f2f2f2" }}>
                    Add a repair!
                </div>
            </div>
        );
    return(
        <div className='container'>
            <div className='row'>
                {
                props.car.services.map((service, i) =>
                    <div className='col-4'>
                        <div className='card bg-light'>
                        <div className='card-header border-bottom' key={i}>
                            <h4>{props.car.year} {props.car.make} {props.car.model}</h4>
                        </div>
                            <div id='accordion'>
                                {!!props.   car.services.length && props.cars.services.map((service, j) =>
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
                                                        {`The repair is: {repair.repairType}`}
                                                    </div>
                                                    <div className='card-footer'>
                                                        {`Total Cost: {repair.repairCost}`}
                                                    </div>
                                                    <div>
                                                        <i className="fas fa-check"></i>
                                                        <i className="fas fa-times-circle"></i>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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