import React, { Component } from 'react';
import { CompanySearch } from './CompanySearch';
import { UserList } from './UserList'
import User from '../models/User'
import { Car } from '../models/Car';

export class CompanyHome extends Component {
    state = {
        users: [ new User(undefined, "Billy", [new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002")]),  new User(undefined, "Billy", [new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002"), new Car(undefined, "Toyota", "Corolla", "2002")])],
        fromSearch: false,
    }

    requestAccess() {
        
    }

    render() {
        return (
            <>
                <CompanySearch></CompanySearch>
                <UserList 
                    requestAccess={e => this.requestAccess(e)} 
                    fromSearch={this.state.fromSearch} 
                    users={this.state.users}></UserList>
            </>
        )
    }
}