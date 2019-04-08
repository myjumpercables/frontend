import React, { Component } from "react";

class CarList extends Component {
  render() {
    const { length: count } = this.props.cars;

    if (count === 0)
      return (
        <div className="container m-4" style={{ width: 1200 }}>
          <div
            className="navbar navbar-light"
            style={{ backgroundColor: " #f2f2f2" }}
          >
            Add a car!
          </div>
        </div>
      );

    return (
      this.props.cars.length > 0 &&
      this.props.cars.map((a, i) => {
        return (
          <div className="container m-4" style={{ width: 1200 }}>
            <div className="card" key={i}>
              <div
                className="card-header font-weight-bold text-light"
                style={{ backgroundColor: "blue" }}
              >
                <h3>Car {this.props.cars.length}</h3>
              </div>
              <div className="card-body bg-light">
                <div className="row">
                  <div className="col">
                    <h2 className="text-muted font-weight-bold">
                      Model: {a.model}
                    </h2>
                  </div>
                </div>
                <hr />
                <div className="row m-2 text-muted font-weight-bold">
                  <h3 className="text-muted font-weight-bold">
                    Make: {a.make}
                  </h3>
                </div>
                <hr />
                <div className="row m-2 text-muted font-weight-bold">
                  <h3 className="text-muted font-weight-bold">
                    Year: {a.year}
                  </h3>
                </div>
              </div>
            </div>
            <br />
          </div>
        );
      })
    );
  }
}

export default CarList;
