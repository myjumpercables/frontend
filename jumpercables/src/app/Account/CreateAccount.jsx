import React, { Component } from "react";
import mods from "../../utils/mods";
export class CreateAccount extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    re_password: "",
    phone: "",
    birthday: new Date(),
    isCompany: false
  };

  registerAccount(e) {
    e.preventDefault();
    if (this.isValidForm()) {
      this.props.onCreateAccount({
        username: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        password: this.state.password,
        isCompany: this.state.isCompany,
        error: "",
        passwordError: "Password must match",
      });
    }
  }

  isValidForm() {
    this.setState({error: ""});
    this.setState({passwordError: ""})
    if(this.state.name && this.state.password && this.state.phone && this.state.re_password && this.state.email) {
      if(this.state.password === this.state.re_password){
        return true;
      }
      this.setState({passwordError: "Passwords must match."})
      return false;
    }
    else {
      this.setState({error: "Please fill out all forms."})
      return false;
    }
  }

  render() {
    return (
      <>
        <div className="container d-flex justify-content-center">
          <div className="flex-column w-100">
            <div className="d-flex mb-2">
              <h2 className="m-auto">CREATE AN ACCOUNT</h2>
            </div>
            <div className="d-flex justify-content-center">
              <form>
                <div className="form-group">
                  <label htmlFor="NameInput">Name</label>
                  <input
                    onChange={e => this.setState({ name: e.target.value })}
                    value={this.state.name}
                    type="text"
                    className="form-control"
                    id="NameInput"
                    placeholder="Name..."
                    />
                    {!!this.props.error && <small className="text-danger font-weight-bold">{this.props.error}</small>}
                </div>
                <div className="form-group">
                  <label htmlFor="EmailInput">Email address</label>
                  <input
                    onChange={e => this.setState({ email: e.target.value })}
                    value={this.state.email}
                    type="email"
                    className="form-control"
                    id="EmailInput"
                    aria-describedby="emailHelp"
                    placeholder="Enter your email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="PhoneInput">Phone number</label>
                  <input
                    onChange={e => this.setState({ phone: e.target.value })}
                    value={this.state.phone}
                    type="phone"
                    className="form-control"
                    id="PhoneInput"
                    aria-describedby="PhoneHelp"
                    placeholder="Enter your phone number"
                  />
                </div>
                {!!this.state.passwordError && <small className="text-danger font-weight-bold">{this.state.passwordError}</small>}
                <div className="form-group">
                  <label htmlFor="PasswordInput">Password</label>
                  <input
                    onChange={e => this.setState({ password: e.target.value })}
                    value={this.state.password}
                    type="password"
                    className="form-control"
                    id="PasswordInput"
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Re-TypePasswordInput">
                    Re-type your password
                  </label>
                  <input
                    onChange={e =>
                      this.setState({ re_password: e.target.value })
                    }
                    value={this.state.re_password}
                    type="password"
                    className="form-control"
                    id="Re-TypePasswordInput"
                    placeholder="Re-type your password"
                  />
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    onChange={e =>
                      this.setState({ isCompany: mods.handleCheckboxChange(e) })
                    }
                    value={this.state.isCompany}
                    id="companyCheck"
                  />
                  <label className="form-check-label" htmlFor="companyCheck">
                    This is an organization
                  </label>
                </div>
                {!!this.state.error && <small className="text-danger font-weight-bold">{this.state.error}</small>}
                <hr />
                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={e => this.registerAccount(e)}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  }
}
export default CreateAccount;
