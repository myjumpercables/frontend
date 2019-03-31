import React, { Component } from 'react';
import './styles/AccountView.css';
import util from '../utils/mods.jsx';


const AccountView = (props) => {
    return (
        <>
        {/*Modal Start*/}
        <div className="modal fade" id="updateEU" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-body container">
                <form className="row justify-content-center">
                    <div className="form-group">
                        <strong>
                            <div id="newEUError" className="error"><br/></div>
                            <br/>
                        </strong>
                        <div id="newEmailError" className="error"><br/></div>
                        <label htmlFor="newEmail">Enter Your New Email</label>
                        <div className="mb-2 input-group" id="show_hide_password">
                            <input type="email" className="form-control" id="newEmail"/>
                        </div>
                        <div id="newUsernameError" className="error"></div>
                        <label htmlFor="newUsername">Enter Your New Username</label>
                        <div className="mb-2 input-group" id="show_hide_password">
                            <input type="text" className="form-control" id="newUsername"/>
                        </div>
                        <div id="passwordCheckError" className="error"></div>
                        <label htmlFor="passwordCheck">Enter Your Password</label>
                        <div className="mb-2 input-group" id="show_hide_password">
                            <input type="password" className="form-control" id="passwordCheck"/>
                        </div>
                        <button type="button" className="mr-2 btn btn-primary" onClick={saveAccountDetails}>Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearEUModal}>Close</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        {/*Modal End*/}
        <div className= "h-100 d-flex-column">
            <br/>
            <div className="d-flex justify-content-center">
                <h4>
                    Manage Your Account
                </h4>
            </div>
            <div className="h-100 w-100 flex justify-content-center container">
                <form>
                    <div className="h-100 w-100 btn-group flex-row justify-content-center">
                        <button className="h-100 m-2 shadow-sm w-100 btn btn-light btn-outline" data-toggle="modal" data-target="#updateEU" onClick={util.skipDefault}>
                            <div>
                                <i className="mr-3 ml-3 bg-2 fa fa-user fa-4x"></i>
                                <div className="font-weight-bold">Update Username/Email</div>
                            </div>
                        </button>
                        <button className="h-100 m-2 bg-2h-100 shadow-sm w-100 btn btn-light btn-outline">
                            <div>
                                <i className="mr-3 ml-3 bg-2 fa fa-user fa-4x"></i>
                                <div className="font-weight-bold">Manage Password</div>
                            </div>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}


const getControl = () => {
    return {
        euError: document.getElementById('newEUError'),
        email: document.getElementById('newEmail'),
        emailError: document.getElementById('newEmailError'),
        user: document.getElementById('newUsername'),
        userError: document.getElementById('newUsernameError'),
        password: document.getElementById('passwordCheck'),
        passwordError: document.getElementById('passwordCheckError'),
    }
}


const saveAccountDetails= (e) => {
    
    let controls = getControl();
    let updateObj = {};
    let validEmailPattern = /.+@.+\..+/;

    e.preventDefault();
    if(controls.email.value.match(validEmailPattern)) {
        updateObj['email'] = controls.email.value;
    }
    if(controls.user.value) {
        updateObj['user'] = controls.user.value;
    }
    console.log(updateObj);
    if(util.isEmptyObject(updateObj))
    {  
        controls.euError.innerHTML = "Enter a Valid Email or Username";
        return;
    }
    if(controls.password.value) {
        updateObj['password'] = controls.password.value;
        // request the password
        // if good, change set status good 
    }
    else {
        controls.passwordError.innerHTML = "Please enter your Password";
        return;
    }
}

const clearEUModal = (e) => {
    let controls = getControl();
    for(var key in controls) {
        controls[key].innerHTML = "";
        controls[key].value = "";
    }
}
export default AccountView;