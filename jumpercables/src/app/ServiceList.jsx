import React from 'react';
import './styles/ServiceList.css'
import { Service } from '../models/Service';

export const ServiceList = (props) => (
    <div className="services container">
        {
            props.services.map((s, i) => (
                <div className="card border mb-3" key={i}>
                    <div className="card-header d-flex justify-content-between">
                        <div className="text-left">
                            {s.date}
                        </div>
                        <div className="d-flex">
                            <button className="btn btn-dark"> 
                            <i className="fa fa-edit " ></i>
                            </button>
                        </div>
                    </div>
                    <div className="card-body text-dark">
                        <h5 className="card-title">{s.subject} for {s.make}</h5>
                        <div className="card-text text-truncate">{s.text}</div>
                    </div>
                </div>
            ))
        }
{/*    <div className="container">
        {props.services.map((s, i) => (
        <div className="row mb-2">
            <div className="container">
                <div className="card">
                <div className="card-body">
                    <button className="btn btn-dark mb-2">
                    <i class="fa fa-edit"></i>    
                    </button>  
                    <div className="container border-bottom ">
                        <div className="d-flex flex-row justify-content-between">
                            <div>
                                <h5 className="card-title text-muted">{s.subject}</h5>
                            </div>
                            <div>
                                {s.date}
                            </div>
                        </div>
                    </div>
                    <div className="mb-1 d-block text-truncate">
                        {s.text}
                    </div>
                </div>
                </div>
            </div>

        </div>
        ))}
    </div>*/}
    </div>
)


export default ServiceList;