import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export class CreateAccount extends Component {
        
    render() {

        return (
        <>
        <div className="container d-flex justify-content-center mt-2">
            <div className="flex-column w-100">
                <div className="d-flex mb-2">
                    <h2 className="m-auto">
                        CREATE AN ACCOUNT
                    </h2>
                </div>

                <div className="d-flex align-items-center">
                    <form>
                        <div className="form-group">
                            <label htmlFor="NameInput">Name</label>
                            <input type="text" className="form-control" id="NameInput" placeholder="Name..."/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="EmailInput">Email address</label>
                            <input type="email" className="form-control" id="EmailInput" aria-describedby="emailHelp"
                                    placeholder="Enter your email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="PasswordInput">Password</label>
                            <input type="password" className="form-control" id="PasswordInput" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Re-TypePasswordInput">Re-type your password</label>
                            <input type="password" className="form-control" id="Re-TypePasswordInput" placeholder="Re-type your password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="BirthdayInput">Birthday</label>
                            <input type="date" className="form-control" id="BirthdayInput" placeholder="Birthday"/>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
        );
    }
}
export default CreateAccount;

