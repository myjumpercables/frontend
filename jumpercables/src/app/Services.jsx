import React, { Component } from 'react';
import { Link } from  'react-router-dom';
import { Service } from '../models/Service';
import { ServiceList } from './ServiceList';

export class Services extends Component {
    state = {
        services: [new Service("Service1", "payload1 AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA", "Mazda", "2/5/19"), new Service("Service2", "payload2", "BMW", "2/10/3")],
        editMode: false,
        targetService: -1,
        
        redirect: "/",
    }


    
    render() {
        return(
            <div className="container">
                <ServiceList services={this.state.services}></ServiceList>
            </div>
        );
    }
}