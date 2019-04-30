import React, {Component} from 'react';
import { serviceRepository } from '../api/serviceRepository'
import { Redirect } from 'react-router-dom'

export class ServiceForm extends Component {

    state = {
        subject: "",
        text: "",
        serviceError: false,
        redirect: ""
    }

    serviceRepository = new serviceRepository()

    onSubmit() {
        if(this.state.subject && this.state.text) {
            //does external routing
            this.serviceRepository.addService({
                car_id: this.props.location.state.car_id,
                service_type: this.state.subject,
                service_desc: this.state.text,
                date: new Date(),
            }).then(good =>{
                this.setState({redirect : `${this.props.location.state.redirect}`})
            })
        } else {
            console.log(`subject: ${this.state.subject} ; text :${this.state.text} `)
            this.setState({redirect : `${this.props.location.state.redirect}`})
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
                <div className="form-group">
                    <div id="bothFieldError" className="error"><br/></div>
                    <div id="subjectError" className="error"><br/></div>
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
                    <div id="textError" className="error"><br/></div>
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