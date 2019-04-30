import React, {Component} from 'react'
import { userRespository } from '../api/userRepository';
import { Request } from '../models/Request';
import { Route } from 'react-router-dom'
import { UserCompanyList } from './UserCompanyList';
import { UserRequests } from './UserRequests';
import { Company } from '../models/Company';
import { request } from 'http';

export class UserHome extends Component {
    state = {
        requests: [
            new Request(210, "Joe's Repair", 12932), 
            new Request(4010, "Madeline's", 932193),
            new Request(999, "Prep", 23103102)],
        companies: [
            new Company(2103, "Patty's Tire Mill", "Good Ass Tires", "Dallas", "TX"),
            new Company(4501, "Repair Goons", "We Fix It", "Richardson", "TX"),
            new Company(70412, "Nuts & Bolts", "We Break It First", "Austin", "TX"),
        ]
    }
    user = new userRespository();

    removeRequest(targetId) {
        this.setState(state => {
            return {requests: state.requests.filter((request) => request.id !== targetId)}
        })
    }

    acceptCompany(requestId, i) {
        console.log(requestId);
        this.removeRequest(requestId);
    }

    rejectCompany(requestId, i) {
        console.log(requestId);
        this.removeRequest(requestId);
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