import React from "react";
import { Link } from "react-router-dom";
import "./styles/CarList.css";
const CarList = props => {
  if (!props.cars.length)
    return (
      <div className="container rounded mt-3 mb-1">
        <center>
          {" "}
          <h1>Your Cars</h1>
        </center>
        <div>
          <Link
            id="car-fa"
            className="btn btn-secondary container text-black card h-100 bg-light d-flex flex-column justify-content-center align-middle"
            to={{
              pathname: "/user/addcar",
              state: {
                redirect: "/user/cars"
              }
            }}
          >
            <i
              id="car-fa"
              className="fas fa-plus fa-6x"
              style={{ maxHeight: 3 + "em" }}
            />
            ADD CAR
          </Link>
        </div>
      </div>
    );
  return (
    <div className="container mt-2">
      <center>
        {" "}
        <h1>Your Cars</h1>
      </center>
      <div className="row">
        {props.cars.map((car, i) => (
          <div className="col-lg-4 mt-2 mb-2" key={i}>
            <div className="card bg-light">
              <div className="card-header text-white bg-dark ">
                <h3>Make: {car.make}</h3>
                <h3>Model: {car.model}</h3>
                <h3>Year: {car.year}</h3>
              </div>
              <div id="card-accordion">
                {!!car.services.length &&
                  car.services.map((service, j) => (
                    <div className="card" key={service.service_id}>
                      <div className="card-header">
                        <button
                          className="btn btn-warning collapsed w-100 text-left text-truncate"
                          data-toggle="collapse"
                          data-target={`#${i}${j}`}
                        >
                          <strong> Service: </strong> {service.service_type}
                        </button>
                      </div>
                      <div
                        id={`${i}${j}`}
                        className="collapse"
                        aria-labelledby={`heading${j}`}
                        data-parent="#card-accordion"
                      >
                        <div className="card-body">{service.service_desc}</div>
                        <div className="card-footer text-muted">
                          {service.date}
                        </div>
                      </div>
                    </div>
                  ))}
                <div className="card-header d-flex justify-content-center">
                  <Link
                    to={{
                      pathname: `/user/addservices/${car.car_id}`,
                      state: {
                        carName: `${car.year} ${car.make} ${car.model}`,
                        redirect: "/user/cars",
                        car_id: car.car_id
                      }
                    }}
                    className="btn btn-info collapsed w-100"
                  >
                    ADD A NEW SERVICE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-lg-4 mt-2 mb-2">
          <Link
            id="car-fa"
            className="btn btn-secondary container text-black card h-100 bg-light d-flex flex-column justify-content-center align-middle"
            to={{
              pathname: "/user/addcar",
              state: {
                redirect: "/user/cars"
              }
            }}
          >
            <i
              id="car-fa"
              className="fas fa-plus fa-6x"
              style={{ maxHeight: 3 + "em" }}
            />
            ADD CAR
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CarList;
