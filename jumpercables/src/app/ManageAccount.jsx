import React, { Component } from 'react';
import './styles/AccountView.css';
import util from '../utils/mods';
import states from '../models/statelist'

export class ManageAccount extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        location: "",
        description: "",
        password: "",
        changes: false,
    }

    baseState = this.state;

    switchSelect(e) {
        this.setState({state: e.target.value})
    }
    

    saveAccountDetails() {
    }

    closeModal() {
        this.setState(this.baseState);
    }

    render () {
    return (
        <>
        {/*EU Modal Start*/}
        <div className="modal fade" id="updateEU" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-header text-center flex justify-content-center">
                <h3>Manage Account</h3>
            </div>
            <div className="modal-body container">
                {this.state.changes && <div className="alert alert-info w-100 text-center">
                    Changes Saved.
                </div>}
                <div className="container">
                <form>
                    <div className="form-row">
                        <div className="col-md-6">
                        <label htmlFor="userForm">Username</label>
                        <input
                            className="form-control"
                            type="text" 
                            id="userForm"
                            value={this.state.name}
                            onChange={e => this.setState({name: e.target.value})}/>
                        </div>
                        <div className="col-md-6">
                        <label htmlFor="emailForm">Email</label>
                        <input
                            className="form-control"
                            type="text" 
                            id="emailForm"
                            value={this.state.email}
                            onChange={e => this.setState({email: e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                        <label htmlFor="phoneForm">Phone</label>
                        <input
                            className="form-control"
                            type="tel" 
                            id="phoneForm"
                            pattern="[\d]{3}-[\d]{3}-[\d]{4}"
                            value={this.state.phone}
                            onChange={e => this.setState({phone: e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col">
                        <label htmlFor="text">Describe Yourself</label>
                        <textarea
                            className="form-control"
                            rows="3" 
                            id="text"
                            value={this.state.description}
                            onChange={e => this.setState({description: e.target.value})}/>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg">
                        <label htmlFor="location">State</label>
                        <input
                            type="text"
                            className="form-control"
                            id="text"
                            value={this.state.location}
                            onChange={e => this.setState({ loca: e.target.value})}/>
                        </div>
                    </div>
                </form>
                </div>
            </div>
            <div className="modal-footer">
            <div className="container">
                <div className="row">
                    <div className="form-group w-100">
                        <div className="col">
                        <label htmlFor="text">Enter Your Current Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="text"
                            value={this.state.password}
                            onChange={e => this.setState({ password: e.target.value})}/>
                        <small> 
                            We promise not share your information with anyone!
                        </small>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-end">
                    <button 
                        className="btn btn-primary col-md-4 m-2"
                        onClick={() => this.saveChanges()}>
                        Save Changes
                    </button>
                    <button 
                        className="btn btn-danger col-md-4 m-2"
                        data-dismiss="modal"
                        onClick={() => this.closeModal()}>
                        Close
                    </button>
                </div>
            </div>
            </div>
            </div>
        </div>
        </div>
        <div className="modal fade" id="managePassword" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
            <div className="modal-body container">
                <form className="row justify-content-center">
                    <div className="form-group">
                        <div id="oldPasswordError" className="error"><br/></div>
                        <label htmlFor="oldPassword">Enter Your Old Password</label>
                        <div className="mb-2 input-group" id="show_hide_password">
                            <input type="password" className="form-control" id="oldPassword"/>
                        </div>
                        <div id="newPasswordError" className="error"><br/></div>
                        <label htmlFor="newPassword">Enter Your New Password</label>
                        <div className="mb-2 input-group" id="show_hide_password">
                            <input type="password" className="form-control" id="newPassword"/>
                        </div>
                        <div id="newPasswordCheckError" className="error"><br/></div>
                        <label htmlFor="newPasswordCheck">Re-enter Your New Password</label>
                        <div className="mb-2 input-group" id="show_hide_password">
                            <input type="password" className="form-control" id="newPasswordCheck"/>
                        </div>
                        <button type="button" className="mr-2 btn btn-primary" onClick={savePassword}>Save changes</button>
                        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={clearManagePasswordModal}>Close</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
        </div>
        {/*EU Modal End*/}
        <div className= "h-100 d-flex-column">
            <br/>
            <div className="d-flex justify-content-center">
                <h4>
                    Manage Your Account
                </h4>
            </div>
            <div className="h-100 w-100 flex justify-content-center container">
                <form>
                    <div className="row">
                        <button className=" col h-100 m-2 shadow-sm w-100 btn btn-light btn-outline" data-toggle="modal" data-target="#updateEU" onClick={util.skipDefault}>
                            <div>
                                <i id="fa-manage" className="mr-3 ml-3 bg-2 fa fa-user fa-4x"></i>
                                <div className="font-weight-bold">Update Username/Email</div>
                            </div>
                        </button>
                        <button className="col h-100 m-2 bg-2h-100 shadow-sm w-100 btn btn-light btn-outline" data-toggle="modal" data-target="#managePassword" onClick={util.skipDefault}>
                            <div>
                                <i id="fa-manage" className="mr-3 ml-3 bg-2 fas fa-lock fa-4x"></i>
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
}


const getControl = (flag) => {
    switch (flag) {
        case 1:
        return {
            euError: document.getElementById('newEUError'),
            email: document.getElementById('newEmail'),
            emailError: document.getElementById('newEmailError'),
            user: document.getElementById('newUsername'),
            userError: document.getElementById('newUsernameError'),
            password: document.getElementById('passwordCheck'),
            passwordError: document.getElementById('passwordCheckError'),
        }

        case 2:
        return {
            oldPassword: document.getElementById('oldPassword'),
            oldPasswordError: document.getElementById('oldPasswordError'),
            newPassword: document.getElementById('newPassword'),
            newPasswordError: document.getElementById('newPasswordError'),
            newPasswordCheck: document.getElementById('newPasswordCheck'),
            newPasswordCheckError: document.getElementById('newPasswordCheckError'),
        }
        default:
        return {};
    }
}


const saveAccountDetails= (e) => {
    
    let controls = getControl(1);
    let updateObj = {};
    let validEmailPattern = /.+@.+\..+/;
    e.preventDefault();

    //checks if potenially valid email. assigns to update packet if yes
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

// clears Email/Username Modal
const clearEUModal = (e) => {
    let controls = getControl(1);
    for(var key in controls) {
        controls[key].innerHTML = "";
        controls[key].value = "";
    }
}

// controls Manage Password Modal
const savePassword = (e) => {
    let controls = getControl(2);
    e.preventDefault();
    let updateObj = {};
    if(controls.oldPassword.value) {
        updateObj['oldPassword'] = controls.oldPassword.value;
    }
    else {
        controls.oldPasswordError.innerHTML = "You must enter your old password";
        return;
    }

    if(controls.newPassword.value) {
        if(controls.newPassword.value === controls.newPasswordCheck.value) {
            updateObj['newPassword'] = controls.newPassword.value;
        }
        else {
            controls.newPasswordCheckError.innerHTML = "Passwords much match";
            return;
        }
    }
    else {
        controls.newPasswordError.innerHTML="You must enter you new password";
        return;
    }
}

const clearManagePasswordModal = (e) => {
    let controls = getControl(2);
    for(var key in controls) {
        controls[key].innerHTML = "";
        controls[key].value = "";
    }
}
export default ManageAccount;