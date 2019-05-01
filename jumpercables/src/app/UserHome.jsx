import React, {Component} from 'react'
import { userRepository } from '../api';
import { Request } from '../models/Request';
import { UserCompanyList } from './UserCompanyList';
import { UserRequests } from './UserRequests';
import { Company } from '../models/Company';
import { Redirect } from 'react-router-dom'

export class UserHome extends Component {
    state = {
        requests: [],
        companies: [],
    }
    user = new userRepository();

    componentDidMount() {
        this.user.getRequests()
        .then((resp, err) =>{
            if (err) throw err;
            this.setState({requests: resp})
        })
        .catch(err=>{
            console.log(err);
        })

        this.user.getCompanies()
        .then((resp, err) =>{
            if (err) throw err;
            console.log(resp);
            this.setState({companies: resp})
        })
        .catch(err=>{
            console.log(err);
        })
    }

    pseudoRefresh() {
        this.user.getCompanies()
        .then((resp, err) =>{
            if (err) throw err;
            console.log(resp);
            this.setState({companies: resp})
        })
        .catch(err=>{
            console.log(err);
        })
    }

    removeRequest(targetId) {
        this.setState(state => {
            return {requests: state.requests.filter((request) => request.request_id !== targetId)}
        })
    }

    switchList(targetId) {
        let newCompany = this.state.requests.filter((request) => request.request_id === targetId)[0];
        console.log("");
        this.setState(state =>{
            return  state.companies.push(newCompany)
        })
    }

    acceptCompany(requestId, i) {
        console.log(requestId);
        this.user.acceptRequest(requestId)
        .then((resp, err)=>{
            if (err) throw err;
            this.switchList(requestId);
            this.removeRequest(requestId);
        })
        .catch(err=>{
            console.log(err)
        })
    }

    rejectCompany(requestId, i) {
        console.log(requestId);
        this.user.rejectRequest(requestId)
        .then((resp, err)=>{
            if (err) throw err;
            this.removeRequest(requestId);
        })
        .catch(err=>{
            console.log(err)
        })

    }

    render() {
        if(!this.state.requests.length && !this.state.companies.length) {
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
            {!!this.state.requests.length && <UserRequests 
                                                requests={this.state.requests}
                                                acceptCompany={(e) => this.acceptCompany(e)}
                                                rejectCompany={(e) => this.rejectCompany(e)}></UserRequests>}
            {!!this.state.companies.length && <UserCompanyList companies={this.state.companies}/>}
            </div>
        )
    }
};;