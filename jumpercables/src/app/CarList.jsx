import React from "react";
import { Link } from 'react-router-dom'
import '../app/styles/CarList.css'
const CarList = (props) => {

    if (!props.cars.length)
      return (
        <div className="container rounded mt-1 mb-1">
          <div
            className="navbar navbar-light"
            style={{ backgroundColor: " #f2f2f2" }}
          >
            Add a car!
          </div>
        </div>
      );
      return (
        
        <div className="container mt-2">
        <div className="row">
        { props.cars.map((car, i) =>
          <div className="col-lg-4 mt-2 mb-2" key={i}>
          <div className="card bg-light">
            <div className="card-header">
                <h3>Make: {car.make}</h3>
                <h3>Model: {car.model}</h3>
                <h3>Year: {car.year}</h3>
            </div>
            <div id="card-accordion">
            { !!car.services.length && car.services.map((service, j) =>
              <div className="card" key={j}>
                <div className="card-header">
                <button 
                className="btn btn-warning collapsed w-100 text-left text-truncate"  
                data-toggle="collapse" 
                data-target={`#${i}${j}`}>
                 <strong> Service: </strong> {service.subject}
                </button>
                </div>
                <div 
                  id={`${i}${j}`} 
                  className="collapse"
                  aria-labelledby={`heading${j}`}
                  data-parent="#card-accordion">
                  <div className="card-body">
                    {service.text}
                  </div>
                  <div className="card-footer text-muted">
                    {service.date}
                  </div>
                </div>
              </div>
            )}
            <div className="card-header d-flex justify-content-center">
            <Link to={{
                  pathname:`/user/addservices/${i}`,
                  state:{
                    carName: `${car.year} ${car.make} ${car.model}`,
                    redirect: "/user/cars"
                  } 
                  }} className="btn btn-info collapsed w-100">
              ADD A NEW SERVICE
            </Link>
            </div>    
            </div>
          </div>
          </div>)
        }
        </div>
        </div>
      )
}

export default CarList;
