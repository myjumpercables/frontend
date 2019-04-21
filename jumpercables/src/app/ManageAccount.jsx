import React from 'react';
import './styles/AccountView.css';
import util from '../utils/mods';

export const ManageAccount = (props) => {
    return (
        <>
        {/*EU Modal Start*/}
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
                        <div className="mb-2 input-group">
                            <input type="email" className="form-control" id="newEmail"/>
                        </div>
                        <div id="newUsernameError" className="error"></div>
                        <label htmlFor="newUsername">Enter Your New Username</label>
                        <div className="mb-2 input-group">
                            <input type="text" className="form-control" id="newUsername"/>
                        </div>
                        <div id="passwordCheckError" className="error"></div>
                        <label htmlFor="passwordCheck">Enter Your Password</label>
                        <div className="mb-2 input-group" >
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
                    <div className="h-100 w-100 btn-group flex-row justify-content-center">
                        <button className="h-100 m-2 shadow-sm w-100 btn btn-light btn-outline" data-toggle="modal" data-target="#updateEU" onClick={util.skipDefault}>
                            <div>
                                <i className="mr-3 ml-3 bg-2 fa fa-user fa-4x"></i>
                                <div className="font-weight-bold">Update Username/Email</div>
                            </div>
                        </button>
                        <button className="h-100 m-2 bg-2h-100 shadow-sm w-100 btn btn-light btn-outline" data-toggle="modal" data-target="#managePassword" onClick={util.skipDefault}>
                            <div>
                                <i className="mr-3 ml-3 bg-2 fas fa-lock fa-4x"></i>
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