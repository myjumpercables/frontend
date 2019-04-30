import React from 'react';
import {Link} from 'react-router-dom';


export const CompanyRecentList = (props) => {
    if(!props.users.length && !props.fromSearch) {
        return <div className="container">
            <div className="alert alert-secondary">
                You haven't worked with any users yet.
            </div>
        </div>
    }
    return <div className="container">
        {props.fromSearch && <div className=" text-info m-2 mb-0">
            From Search:
        </div>}
        <div className="row mt-2">
            {
                props.users.map((user, i) =>
                    <div key={i} className=" col-md-4 mb-3">
                        <div className="card bg-light">
                            <div className="card-header">
                                <h3>{user.username}</h3>
                            </div>
                            <div className="container card-body pt-2 pb-2">
                                <span className="font-weight-bold">Drives:</span>
                                {
                                    user.cars.map((car, j) => (
                                        <div key={j}>
                                            {`${car.year} ${car.model} ${car.make}`}
                                        </div>  
                                    ))
                                }
                            </div>
                            <div className="card-footer">
                                {user.hasAccess && <Link
                                    to={{
                                        pathname: `/company/repairs/${i}`,
                                        state: {
                                            redirect: "/company/home"
                                        }
                                    }}
                                    className="btn badge-warning btn-block mt-2">View User</Link>}
                                {!user.hasAccess && <button
                                    className="btn btn-success btn-block"
                                    onClick={e => props.requestAccess(i)}>
                                    Request Access To User
                                </button>}
                            </div>
=======
    {props.fromSearch && <div className=" text-info m-2 mb-0">
        From Search:
    </div>}
    <div className="row mt-2">
    {
        props.users.map((user, i) => 
            <div key={i} className=" col-md-4 mb-3">
                    <div className="card bg-light">
                        <div className="card-header">
                            <h3>{user.username}</h3>
                        </div>
                        <div className="container card-body pt-2 pb-2">
                        <span className="font-weight-bold">Drives:</span> 
                            {
                                user.cars.map((car, j) =>(
                                    <div key={j}>
                                        {`${car.year} ${car.model} ${car.make}`}
                                    </div>
                                ))
                            }
                        </div>
                        <div className="card-footer">
                           {user.state && <Link 
                                to={{
                                    pathname: `/company/repairs/${i}` ,
                                    state: {
                                        redirect: "/company/home"
                                    }
                                }} 
                                className="btn badge-warning btn-block mt-2">View User</Link>}
                            {!user.state && <button 
                            className="btn btn-success btn-block"
                            onClick={e => props.requestAccess(user.user_id)}>
                                Request Access To User
                            </button>}
>>>>>>> 42199452bd229e6e150781b436d8df236f905831:jumpercables/src/app/CompanyRecentUsers.jsx
                        </div>
                    </div>
                )
            }
        </div>
    </div>
}