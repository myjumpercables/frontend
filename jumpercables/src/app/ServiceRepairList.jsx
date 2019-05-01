import React from "react";

export const ServiceRepairList = (props) => {
    if (!props.cars)
        return (
            <div className="container rounded mt-1 mb-1">
                <div
                    className="navbar navbar-light"
                    style={{backgroundColor: " #f2f2f2"}}>
                    Add a repair!
                </div>
            </div>
        );
    return (
        <div className='container '>
            <div className='row justify-content-center'>
                {
                    props.cars.map((car, i) =>
                        <div className='col-lg-6 col-sm-12 p-2'>
                            <div className='card bg-light'>
                                <div className='card-header border-bottom' key={i}>
                                    <h4>{car.year} {car.make} {car.model}</h4>
                                </div>
                                <div id='accordion'>
                                    {car.services.map((service, j) =>
                                        <div id="accordion" key={j}>
                                            <div className="card">
                                                <div className="card-header" id={`heading${j}`}>
                                                    <h5 className="mb-0">
                                                        <button className="btn btn-info w-100" data-toggle="collapse"
                                                                data-target={`#service${i}${j}`}
                                                                aria-controls="collapseOne">
                                                            <strong> Service: </strong> {service.service_type}
                                                        </button>
                                                    </h5>
                                                </div>
                                                {!!service.repairs.length && service.repairs.map((repair, k) =>

                                                    <div id={`service${j}${k}`} className="collapse"
                                                         aria-labelledby={`heading${j}`} data-parent="#accordion" key={k}>
                                                        <div className="card-body" id={`accordion${i}${j}`}>
                                                            <div className="card-header">
                                                                {`The repair is ${repair.repair_type}`}
                                                            </div>
                                                            <div className='card-body'>
                                                                {repair.repair_desc}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                    {(car.services.length === 0)&& <div>
                                        <div className='card-body'>
                                            There are no services for this car
                                        </div>
                                    </div>}
                                </div>
                            </div>
                        </div>)
                }
            </div>
        </div>
    )
}