import React, { Component } from 'react';
import { CompanySearch } from './CompanySearch';
import { CompanySearchList } from './CompanySearchList'
import User from '../models/User'
import { Car } from '../models/Car';
import { userRepository } from '../api/userRepository';
import { CompanyRecentList } from './CompanyRecentUsers';

export class CompanyHome extends Component {

    
    state = {
        recentUsers: [ new User(undefined, "Billy", [new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002")]),  new User(undefined, "Billy", [new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002")])],
        fromSearch: false,
        usersSearch: [],
        alertMessage: ""
    }
    userRepository = new userRepository();
    
    requestAccess(userId) {
        this.userRepository.spawnRequest(userId)
        .then((resp, err) =>{
            if (err) throw err;
            this.setState({alertMessage: resp.error ? "Their Response is Still Pending" : "Request Successfully Sent"});
        }).catch(err =>{
            console.log(err);
        })
    }

    closeSearch() {
        this.setState({ fromSearch: false})
    }

    getSearch(search) {
        this.userRepository.searchUsers(search)
        .then(row =>{
            console.log(row)
            this.setState({ usersSearch: row,
                            fromSearch: true })
        })
    }
    
    render() {
        return (
            <>
                <CompanySearch 
                    fromSearch={this.state.fromSearch}
                    getSearch={(e) => this.getSearch(e)}
                    closeSearch={() => this.closeSearch()}></CompanySearch>
                <hr/>
                <div className="container" >
                {!!this.state.alertMessage && <div className="alert alert-info font-weight-bold font-italic text-center">{this.state.alertMessage}</div>}
                </div>
                {this.state.fromSearch && <CompanySearchList
                    requestAccess={e => this.requestAccess(e)} 
                    fromSearch={this.state.fromSearch} 
                    users={this.state.usersSearch}></CompanySearchList>}
                {!this.state.fromSearch && <CompanyRecentList
                    requestAccess={e => this.requestAccess(e)} 
                    fromSearch={this.state.fromSearch} 
                    users={this.state.recentUsers}></CompanyRecentList>}
            </>
        )
    }
}