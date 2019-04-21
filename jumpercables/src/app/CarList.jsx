import React, { Component } from "react";
import { Link } from 'react-router-dom'

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
        <div className="container rounded">
        {console.log(props.cars)}
          <table className="table table-condensed table-hover mt-1 mt-1">
            <thead className="thead-dark">
              <tr>
                <th className="col-4">Make</th>
                <th className="col-4">Model</th>
                <th className="col-4">Year</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
            {
              props.cars.map((car,i) => 
              <tr key={i}>
                <td>{car.model}</td>
                <td>{car.make}</td>
                <td>{car.year}</td>
                <td>
                  <Link to={`/user/services/${i}`} className="btn btn-success rounded-0">Add Service</Link>
                </td>
              </tr>
              )
            }
            </tbody>
      
          </table>
        </div>
      )
}

export default CarList;
