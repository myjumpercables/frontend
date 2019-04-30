import React, {Component} from 'react'

export class UserHome extends Component {
    state = {
        requests: [{}],
        companies: []
    }
    render() {
        if(!this.state.requests.length && !this.state.requests.length) {
            return (
                <div className="container p-5 bg-light rounded mt-5 text-center text-muted">
                    <h2>
                        You aren't paired with any repair companies.
                        You can still add cars and services to your cars.
                        You can open the menu in the top-left corner.
                    </h2>
                </div>
            )
        }
        return(
            <div className="container mt-2">
            <div className="container">
            <div className="col-md-4">
                <div className="card">
                    <div className="card-body d-flex justify-content-center">
                        <h2>
                        <div className=" font-italic">Joe's Car Shop&#160;</div>
                        <div>wants to connect!</div>
                        </h2>
                    </div>
                    <div className="card-footer">
                        <div>
                            <button className="col-md btn btn-info mt-2">
                                Connect
                            </button>
                            <button className="col-md btn btn-danger mt-2">
                                Reject
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <hr/>
                <div className="container">
                    <h2>YOUR COMPANIES</h2>
                </div>
            </div>
        )
    }
}