import React, {Component} from 'react';
import './styles/Login.css';

export class Login extends Component {
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
                        <input type="email" className="form-control" id="loginEmail" defaultValue=""/>
                    </div>
                    <div className="mb-2 form-group">
                        <label className="" htmlFor="loginPassword">Password</label>
                        <input type="password" className="form-control" id="loginPassword" defaultValue=""/>
                    </div>
                    <div className="btn-group w-100">
                        <button type="button" className="w-50 btn btn-primary" onClick={loginRequest}>Login</button>
                        <button type="button" className="w-50 btn btn-secondary" onClick={loginRequest}>Sign-Up</button>
                    </div>
                </form>
            </div>
        </div>
        </div>
    </>
    );
    }
}

const loginRequest = () => {

}