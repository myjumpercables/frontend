import React, { Component } from "react";
import "../styles/AccountView.css";
import util from "../../utils/mods";
import {userRepository} from "../../api";

export class ManageAccount extends Component {
    state = {
        username: "",
        email: "",
        phone: "",
        location: "",
        description: "",
        password: "",
        changes: "",

        oldPassword: "",
        newPassword: "",
        newPasswordVerification: "",
        passwordError: "",
    }

  baseState = this.state;

    userRepository = new userRepository();
    switchSelect(e) {
        this.setState({state: e.target.value})
    }
    
    saveAccountDetails() {
        let account = {};
        account = this.state;
        delete account.changes;
        this.userRepository.updateAccount(account)
        .then((resp, err)=>{
            if(err) throw err;
            if(resp.error) throw (resp.error);
            this.setState({ changes: "Changes Saved" })
            this.baseState = account;
            this.baseState.password = ""
        })
        .catch(err=>{
            this.setState({ changes: "Invalid Credentials"})
            this.baseState = account;
            this.baseState.password = ""
        })
    }

    savePassword() {
        if(this.state.oldPassword === "" || this.state.newPassword === "" || this.state.newPasswordVerification === "") {
            this.setState({ passwordError: "Fill out all forms please."})
            return;
        }
        if(!(this.state.newPassword === this.state.newPasswordVerification)){
            this.setState({ passwordError: "New Password's must match."})
            return;
        }
        this.setState({ passwordError: ""});
        this.userRepository.changePassword(this.state.oldPassword, this.state.newPassword)
        .then((resp, err)=>{
            if(err) throw err;
            if(resp.error) throw (resp.error);
            this.setState({ changes: "Changes Saved" })

        })
        .catch(err=>{
            this.setState({ changes: "Invalid Credentials"})
        })
    }

    closeModal() {
        this.baseState['changes'] = "";
        this.setState(this.baseState);
    }

    componentDidMount() {
        this.userRepository.getDetails()
        .then(row =>{
            console.log(row);
            this.setState({
                username: (row.username) ? row.username : "",
                email: (row.email) ? row.email : "",
                phone: (row.phone) ? row.phone : "",
                location: (row.location) ? row.location : "",
                description: (row.description) ? row.description : "",
            })
        })
    }
    render() {
    return (
      <>
        {/*EU Modal Start*/}
        <div
          className="modal fade"
          id="updateEU"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header text-center flex justify-content-center">
                <h3>Manage Account</h3>
              </div>
              <div className="modal-body container">
                {!!this.state.changes && (
                  <div className="alert alert-info w-100 text-center">
                    {this.state.changes}
                  </div>
                )}
                <div className="container">
                  <form>
                    <div className="form-row">
                      <div className="col-md-6">
                        <label htmlFor="userForm">Username</label>
                        <input
                          className="form-control"
                          type="text"
                          id="userForm"
                          value={this.state.username}
                          onChange={e =>
                            this.setState({ username: e.target.value })
                          }
                        />
                      </div>
                      <div className="col-md-6">
                        <label htmlFor="emailForm">Email</label>
                        <input
                          className="form-control"
                          type="text"
                          id="emailForm"
                          value={this.state.email}
                          onChange={e =>
                            this.setState({ email: e.target.value })
                          }
                        />
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
                          onChange={e =>
                            this.setState({ phone: e.target.value })
                          }
                        />
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
                          onChange={e =>
                            this.setState({ description: e.target.value })
                          }
                        />
                      </div>
                    </div>
                    <div className="form-row">
                        <div className="col-lg">
                        <label htmlFor="location">Location</label>
                        <input
                            type="text"
                            className="form-control"
                            id="text"
                            value={this.state.location}
                            onChange={e => this.setState({ location: e.target.value})}/>
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
                        <label htmlFor="text">
                          Enter Your Current Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="text"
                          value={this.state.password}
                          onChange={e =>
                            this.setState({ password: e.target.value })
                          }
                        />
                        <small>
                          We promise not share your information with anyone!
                        </small>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-end">
                    <button
                      className="btn btn-primary col-md-4 m-2"
                      onClick={() => this.saveAccountDetails()}
                    >
                      Save Changes
                    </button>
                    <button
                      className="btn btn-danger col-md-4 m-2"
                      data-dismiss="modal"
                      onClick={() => this.closeModal()}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="managePassword"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="exampleModalCenterTitle"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body container">
                <form className="row justify-content-center">
                  <div className="form-group">
                    {!!this.state.changes && <div className="alert alert-info w-100 text-center">
                        {this.state.changes}
                    </div>}
                    <div id="PasswordError" className="error">
                          {this.state.passwordError}
                      <br />
                    </div>
                    <label htmlFor="oldPassword">Enter Your Current Password</label>
                    <div className="mb-2 input-group" id="show_hide_password">
                      <input
                        type="password"
                        className="form-control"
                        id="oldPassword"
                        value={this.state.oldPassword}
                        onChange={e=> this.setState({oldPassword: e.target.value})}
                      />
                    </div>
                    <div id="newPasswordError" className="error">
                      <br />
                    </div>
                    <label htmlFor="newPassword">Enter Your New Password</label>
                    <div className="mb-2 input-group" id="show_hide_password">
                      <input
                        type="password"
                        className="form-control"
                        id="newPassword"
                        value={this.state.newPassword}
                        onChange={e=> this.setState({newPassword: e.target.value})}
                      />
                    </div>
                    <div id="newPasswordCheckError" className="error">
                      <br />
                    </div>
                    <label htmlFor="newPasswordCheck">
                      Re-enter Your New Password
                    </label>
                    <div className="mb-2 input-group" id="show_hide_password">
                      <input
                        type="password"
                        className="form-control"
                        id="newPasswordCheck"
                        value={this.state.newPasswordVerification}
                        onChange={e=> this.setState({newPasswordVerification: e.target.value})}
                      />
                    </div>
                    <button
                      type="button"
                      className="mr-2 btn btn-primary"
                      onClick={() =>this.savePassword()}
                    >
                      Save changes
                    </button>
                    <button
                      type="button"
                      className="btn btn-secondary"
                      data-dismiss="modal"
                      onClick={() => this.closeModal()}
                    >
                      Close
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        {/*EU Modal End*/}
        <div className="h-100 d-flex-column">
          <br />
          <div className="d-flex justify-content-center">
            <h1 className="m-2">Manage Your Account</h1>
          </div>
          <div className="h-100 w-100 flex justify-content-center container">
            <form>
              <div className="row justify-content-center">
                <button
                  className=" col-6 h-100 m-2 shadow-sm w-100 btn btn-light btn-outline"
                  data-toggle="modal"
                  data-target="#updateEU"
                  onClick={util.skipDefault}
                >
                  <div>
                    <i
                      id="fa-manage"
                      className="mr-3 ml-3 bg-2 fa fa-user fa-4x"
                    />
                    <div className="font-weight-bold">
                      Update Username/Email
                    </div>
                  </div>
                </button>
                <button
                  className="col-6 h-100 m-2 bg-2h-100 shadow-sm w-100 btn btn-light btn-outline"
                  data-toggle="modal"
                  data-target="#managePassword"
                  onClick={util.skipDefault}
                >
                  <div>
                    <i
                      id="fa-manage"
                      className="mr-3 ml-3 bg-2 fas fa-lock fa-4x"
                    />
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

// const getControl = flag => {
//   switch (flag) {
//     case 1:
//       return {
//         euError: document.getElementById("newEUError"),
//         email: document.getElementById("newEmail"),
//         emailError: document.getElementById("newEmailError"),
//         user: document.getElementById("newUsername"),
//         userError: document.getElementById("newUsernameError"),
//         password: document.getElementById("passwordCheck"),
//         passwordError: document.getElementById("passwordCheckError")
//       };
//
//     case 2:
//       return {
//         oldPassword: document.getElementById("oldPassword"),
//         oldPasswordError: document.getElementById("oldPasswordError"),
//         newPassword: document.getElementById("newPassword"),
//         newPasswordError: document.getElementById("newPasswordError"),
//         newPasswordCheck: document.getElementById("newPasswordCheck"),
//         newPasswordCheckError: document.getElementById("newPasswordCheckError")
//       };
//     default:
//       return {};
//   }
// };

// const saveAccountDetails = e => {
//   let controls = getControl(1);
//   let updateObj = {};
//   let validEmailPattern = /.+@.+\..+/;
//   e.preventDefault();

//   //checks if potenially valid email. assigns to update packet if yes
//   if (controls.email.value.match(validEmailPattern)) {
//     updateObj["email"] = controls.email.value;
//   }
//   if (controls.user.value) {
//     updateObj["user"] = controls.user.value;
//   }
//   console.log(updateObj);
//   if (util.isEmptyObject(updateObj)) {
//     controls.euError.innerHTML = "Enter a Valid Email or Username";
//     return;
//   }
//   if (controls.password.value) {
//     updateObj["password"] = controls.password.value;
//     // request the password
//     // if good, change set status good
//   } else {
//     controls.passwordError.innerHTML = "Please enter your Password";
//     return;
//   }
// };

// // clears Email/Username Modal
// const clearEUModal = e => {
//   let controls = getControl(1);
//   for (var key in controls) {
//     controls[key].innerHTML = "";
//     controls[key].value = "";
//   }
// };

// // controls Manage Password Modal
// const savePassword = e => {
//   let controls = getControl(2);
//   e.preventDefault();
//   let updateObj = {};
//   if (controls.oldPassword.value) {
//     updateObj["oldPassword"] = controls.oldPassword.value;
//   } else {
//     controls.oldPasswordError.innerHTML = "You must enter your old password";
//     return;
//   }

//   if (controls.newPassword.value) {
//     if (controls.newPassword.value === controls.newPasswordCheck.value) {
//       updateObj["newPassword"] = controls.newPassword.value;
//     } else {
//       controls.newPasswordCheckError.innerHTML = "Passwords much match";
//       return;
//     }
//   } else {
//     controls.newPasswordError.innerHTML = "You must enter you new password";
//     return;
//   }
// };

// const clearManagePasswordModal = e => {
//   let controls = getControl(2);
//   for (var key in controls) {
//     controls[key].innerHTML = "";
//     controls[key].value = "";
//   }
