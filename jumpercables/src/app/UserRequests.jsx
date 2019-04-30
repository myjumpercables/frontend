import React from 'react';

export const UserRequests = (props) => (
    <div className="container">
        <div className="row">
        <div className="container">
        <div className="d-flex justify-content-around">
            {
                props.requests.map((request, i) => (
                    <div className="col-md border bg-dark" key={i}> 
                    <div>
                        <div className="text-white font-italic p-1">{request.companyName} wants to connect!</div>
                        <div className="row">
                            <button  onClick={(e) => props.acceptCompany(request.request_id, i)} className="btn btn-info col" style={{borderRadius: 0}}>
                                Connect
                            </button>
                            <button  onClick={(e) => props.rejectCompany(request.request_id, i)} className="btn btn-danger col" style={{borderRadius: 0}}>
                                Reject
                            </button>
                        </div>
                    </div>
                    </div>
                ))
            }
        </div>
        </div>
        </div>
        <hr/>
    </div>
    // <div className="container">
    // <div className="row">
    // {
    //     props.requests.map((request, i) =>
    //     <div className="col-lg-4 mt-2" key={i}>
    //         <div className="card">
    //             <div className="card-body d-flex justify-content-center">
    //                 <h2>
    //                 <div className="text-center font-italic">{request.companyName}</div>
    //                 <div>wants to connect!</div>
    //                 </h2>
    //             </div>
    //             <div className="card-footer">
    //                 <div>
    //                     <button  onClick={(e) => props.acceptCompany(request.id, i)} className="col-md btn btn-info mt-2">
    //                         Connect
    //                     </button>
    //                     <button onClick={(e) => props.rejectCompany(request.id, i)} className="col-md btn btn-danger mt-2">
    //                         Reject
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
    // }
    // </div>
    // </div>
)

export default UserRequests;