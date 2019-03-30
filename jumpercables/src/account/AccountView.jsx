import React, { Component } from 'react';
import './styles/AccountView.css';
import mods from '../utils/mods.jsx';

const AccountView = (props) => {
    return (
        <>
        <div className="modal fade" id="passwordModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="passwordModalTitle">Modal title</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-primary">Save changes</button>
            </div>
            </div>
        </div>
        </div>
            <div className="d-flex justify-content-center">
                <div className="p-4 rounded">
                    <div>
                        <h4>
                            Account Settings
                        </h4>
                    </div>
                    <form>
                        <div className="">
                            <div className="form-group">
                                <label htmlFor="emailInput">Update Email address</label>
                                <input type="email" className="form-control" id="emailUpdateInput" placeholder="name@example.com"/>
                            </div>
                            <div className="form-group d-flex justify-content-between">
                                <button className=" btn btn-primary" data-toggle="modal" data-target="#passwordModal" onClick={mods.skipDefault}>Save Changes</button>
                                <button className=" btn btn-secondary" type="submit">Cancel</button>
                            </div>
                        </div>    
                    </form>
                </div>
            </div>
        </>
    );
}

function userInfo(props) {
    return (
        <div className="User">
        Ayo
        </div>
    )
}

export default AccountView;