import React, { Component } from 'react';
import { AccountRegister } from '../models/AccountRegister';
import mods from '../utils/mods'
export class CreateAccount extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        re_password: '',
        birthday: new Date(),
        isCompany: false,
    };

    registerAccount(e) {
        e.preventDefault();
        if(this.isValidForm()) {
            this.props.onCreateAccount(new AccountRegister(
                this.state.name,
                this.state.email,
                this.state.password,
                this.state.re_password,
                this.state.birthday
            ));
        }
    }

    isValidForm(){
        /* TODO: return false if forms aren't valid 
           And write to page what needs to be changed*/
        return true;
    }

    render() {
        return (
        <>
        <div className="container d-flex justify-content-center">
            <div className="flex-column w-100">
                <div className="d-flex mb-2">
                    <h2 className="m-auto">
                        CREATE AN ACCOUNT
                    </h2>
                </div>
                <div className="d-flex justify-content-center">
                    <form>
                        <div className="form-group">
                            <label htmlFor="NameInput">Name</label>
                            <input onChange={e => this.setState({ name : e.target.value })} value={this.state.name} type="text" className="form-control" id="NameInput" placeholder="Name..."/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="EmailInput">Email address</label>
                            <input onChange={e => this.setState({ email : e.target.value })} value={this.state.email} type="email" className="form-control" id="EmailInput" aria-describedby="emailHelp"
                                    placeholder="Enter your email"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone
                                else.
                            </small>
                        </div>
                        <div className="form-group">
                            <label htmlFor="PasswordInput">Password</label>
                            <input onChange={e => this.setState({ password : e.target.value })} value={this.state.password} type="password" className="form-control" id="PasswordInput" placeholder="Password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Re-TypePasswordInput">Re-type your password</label>
                            <input onChange={e => this.setState({ re_password : e.target.value })} value={this.state.re_password} type="password" className="form-control" id="Re-TypePasswordInput" placeholder="Re-type your password"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="BirthdayInput">Birthday</label>
                            <input onChange={e => this.setState({ birthday : e.target.value })} value={this.state.birthday} type="date" className="form-control" id="BirthdayInput" placeholder="Birthday"/>
                        </div>
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" onChange={e => this.setState({ isCompany : mods.handleCheckboxChange(e) })} value={this.state.isCompany} id="companyCheck"/>
                            <label className="form-check-label" htmlFor="companyCheck">
                            This is an organization
                            </label>
                        </div>
                        <hr/>
                        <button type="submit" className="btn btn-primary" onClick={e => this.registerAccount(e)}>Submit</button>
                    </form>
                </div>
            </div>
        </div>
        </>
        );
    }
}
export default CreateAccount;

