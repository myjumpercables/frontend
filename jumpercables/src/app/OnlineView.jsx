import React, { Component } from 'react';
import './styles/OnlineView.css'

export class OnlineView extends Component {
    state = {
        userType: "company",
        userName: "YourCompanyHere"
    }
    
    render() {
    return (
        <div className="container-fluid">
            <header className="row bg-dark pt-2 pb-2">
            <div className="container col d-flex justify-content-start align-items-center">
                <div className="pl-4 pr-4">
                <a href="#">
                    <i id="nav-fa" className="nav-item nav-link fa fa-bars fa-lg"></i>
                </a>
                </div>
            </div>
            <div className="col d-flex justify-content-center">
                {(this.state.userType === "company")? <h3 className="text-center text-white h-100 m-0">{this.state.userName}</h3> :
                <i class="fas fa-car-side fa-lg p-2"></i>}
            </div>
            <div className="container col d-flex justify-content-end align-items-center">
                <div className="pl-4 pr-4">
                <i class="fas fa-car-side fa-lg"/>
                </div>
            </div>
            </header>
        </div>
        );
    }
  }