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
                    LOGIN VIEW
                </h2>
            </div>
            <div className="d-flex align-items-center">
                <form>
                    <div className="mb-2 input-group">
                        <div className="input-group-prepend">
                            <span class="input-group-text" htmlFor="loginEmail">Username</span>
                        </div>
                        <input type="email" className="form-control" id="loginEmail" defaultValue=""/>
                    </div>
                    <div className="mb-2 input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" htmlFor="loginPassword">Password</span>
                        </div>
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