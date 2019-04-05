import React, {Component} from 'react';
import './styles/Login.css';

export class Login extends Component {
    
    
    state={
        loginUser: "",
        loginPassword: "",
    }
    
    loginAttempt(e) {
        e.preventDefault();
        if(this.isValidForm()) {
            this.props.onLoginAttempt({name: this.state.loginUser, password: this.state.loginPassword});
        }
    }

    isValidForm() {
        /* TODO: return false if forms aren't valid 
        And write to page what needs to be changed*/
        return true;
    }

    render() {
    return (
    <>
        <div className="container d-flex justify-content-center mt-2">
        <div className="flex-column">
            <div className="d-flex mb-2">
                <h2 className="m-auto">
                    SIGN-IN
                </h2>
            </div>
            <div className="d-flex align-items-center">
                <form>
                    <div className="mb-2 form-group">
                        <label className="" htmlFor="loginEmail">Username</label>
                        <input onChange={e => this.setState({ loginUser : e.target.value })} type="email" className="form-control" id="loginEmail" value={this.state.loginUser}/>
                    </div>
                    <div className="mb-2 form-group">
                        <label className="" htmlFor="loginPassword">Password</label>
                        <input onChange={e => this.setState({ loginPassword : e.target.value })} type="password" className="form-control" id="loginPassword" defaultValue=""/>
                    </div>
                    <div className="btn-group w-100">
                        <button type="button" className="w-50 btn btn-primary" onClick={e => this.loginAttempt(e)}>Login</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </>
    );
    }
}
