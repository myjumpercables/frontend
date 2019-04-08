import React, { Component } from "react";
import CarForm from "./CarForm";
import CarList from "./CarList";

export class Cars extends React.Component {
  state = {
    cars: []
  };

  onNew(car) {
    this.setState(prevState => {
      prevState.cars.push(car);
      return prevState;
    });
  }

  render() {
    const { length: count } = this.state.cars;
    return (
      <React.Fragment>
        <h1 className=" ml-5"> Cars </h1>

        <CarList cars={this.state.cars} />
        <CarForm onNew={a => this.onNew(a)} />
      </React.Fragment>
    );
  }
}
