import React from 'react';
import { Link } from 'react-router-dom'

export const OnlineViewHeader = (props) => {
    
    return(
        <div className="container-fluid" style={{zIndex: 50}}>
        <header className="row bg-dark pt-2 pb-2">
        <div className="col-1 d-flex justify-content-center ml-2">
            <div className="">
            <button className="btn btn-link" onClick={e => props.toggleNavbarState()}>
                 <i id="nav-fa" className="fa fa-bars fa-lg"></i>
            </button>
            </div>
        </div>
        <Link to={`/${props.type}/home`} id="nounderline" className="col d-flex justify-content-center p-0 m-0 ml-3">
            {(props.type === "company") ? <h3 className="text-center text-white h-100 m-0">{props.username}</h3> :
            <i className="fas fa-car-side fa-2x p-2"></i>}
        </Link>
        <div className="text-white d-flex justify-content-center">
            <div className="container">
            <Link to="/" className="btn btn-dark font-weight-bold pt-2">Logout</Link>
            </div>
        </div>
        </header>
        </div>
    );
} 