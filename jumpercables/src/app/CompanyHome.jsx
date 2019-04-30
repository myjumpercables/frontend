import React, { Component } from 'react';
import { CompanySearch } from './CompanySearch';
import { UserList } from './CompanyUserList'
import User from '../models/User'
import { Car } from '../models/Car';
import { userRepository } from '../api/userRepository';

export class CompanyHome extends Component {

    
    state = {
        users: [ new User(undefined, "Billy", [new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002")]),  new User(undefined, "Billy", [new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002")])],
        fromSearch: false,
    }
    userRepository = new userRepository();
    
    requestAccess(userId) {
        console.log(userId)
    }

    getSearch(search) {
        this.userRepository.searchUsers(search)
        .then(row =>{
            console.log(row)
            this.setState({ users: row })
        })
    }
    
    render() {
        return (
            <>
                <CompanySearch getSearch={(e) => this.getSearch(e)}></CompanySearch>
                <UserList 
                    requestAccess={e => this.requestAccess(e)} 
                    fromSearch={this.state.fromSearch} 
                    users={this.state.users}></UserList>
            </>
        )
    }
}