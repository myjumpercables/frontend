import React, {Component} from 'react';
import { carRepository } from '../api/carRepository'
import { Redirect } from 'react-router-dom'

export class ServiceForm extends Component {

    state = {
        subject: "",
        text: "",
        serviceError: false,
        redirect: ""
    }

    carRepository = new carRepository();

    onSubmit() {
        if(this.state.subject && this.state.text) {
            //does external routing
            console.log(`subject: ${this.state.subject} ; text :${this.state.text} `)
            this.setState({redirect : `${this.props.location.state.redirect}`})
        } else {
            this.setState({ serviceError: true });
        }
    }

    render() {
        if(this.state.redirect) {
            return <Redirect to={this.state.redirect}></Redirect>
        }
    return (
        <div className="container mt-5">
            <div>
                <h2>
                    {this.props.location.state.carName}
                </h2>
            </div>
            <form>
                {this.state.serviceError && <div id="service-error" className="text-danger font-weight-bold">
                    Both fields are required.
                </div>}
                <div className="form-group">
                <label htmlFor="subject">Service Title</label>
                <input 
                    type="text" 
                    className="form-control" 
                    id="subject" 
                    value={this.state.subject}
                    placeholder="A Name That Quickly ID's Your Request"
                    onChange={e => this.setState({subject: e.target.value})}/>
                </div>

                <div className="form-group">
                <label className="" htmlFor="text">Describe Your Problem</label>
                <textarea 
                    className="form-control" 
                    id="text" 
                    rows="3" 
                    placeholder="The more detail the better. What, Where, When  are all key questions that will greatly appreciated and will improve your experience."
                    value={this.state.text}
                    onChange={e => this.setState({ text: e.target.value})}></textarea>
                </div>
            </form>
            <button 
                type="button"
                className="btn btn-secondary w-100"
                onClick={() => this.onSubmit()}> Submit Service</button>
        </div>               
    );
    }
}