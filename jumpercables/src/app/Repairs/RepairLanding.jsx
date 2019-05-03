import React, { Component } from "react";
import RepairList from "./RepairList";
import RepairForm from "./RepairForm";

export class RepairLanding extends Component {
    state = {
        repairs: []
    };

    onNew(repair) {
        this.setState(prevState => {
            prevState.repairs.push(repair);
            return prevState;
        });
    }

    render() {
        return (
            <>
                <div className="container d-flex flex-column align-items-center">
                    <h1> Repairs </h1>
                    <RepairList repairs={this.state.repairs}/>
                    <RepairForm className="" onNew={a => this.onNew(a)}/>
                </div>
            </>
        );
    }
}
