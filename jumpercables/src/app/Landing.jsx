import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
import { Login } from './Login';
import { CreateAccount } from './CreateAccount'
import { Home } from './Home';
import logo from './styles/Local-Repair-Shop.jpg'
import { userRespository } from '../api';

export class Landing extends Component {
    
    state = {
        redirect: "/",
        loginError: "",
        createAccountError: ""
    }
    user = new userRespository();

    onLoginAttempt(username, password) {
        this.user.login({username: username, password: password})
        .then(
            user => {
                if(user.error) {
                    this.setState({loginError: user.error})
                    return;
                }
                localStorage.setItem("user", JSON.stringify(user))
                const { from } = this.props.location.state || { from: {pathname: `/${user[0].type}/home` } };
                this.props.history.push(from);
            }
        );
    }

    onCreateAccount(account) {
        this.user.createAccount(account)
        .then(
            user => {
                const { from } = this.props.location.state || { from: {pathname: `/${user.type}/home` } };
                this.props.history.push(from);
            }
        )
    }

    getRedirect() {
        return <Redirect to={this.state.redirect}/>
    }

    render() {
        return(
            <div>
            <Router>
                <nav className="navbar navbar-expand navbar-light bg-dark">
                    <ul className="navbar-nav">
                    <li><Link to={'/landing'} className="navbar-brand text-light font-weight-bold">myjumpercables</Link></li>
                    <li><Link to={'/login'} className="nav-link text-light">Login</Link></li>
                    <li><Link to={'/register'} className="nav-link text-light">Register Account</Link></li>
                    </ul>
                </nav>
                <img id="background" src={logo} className="img-fluid" alt="HomeScreen"/>
                <div id="jumbo" className="jumbotron-fluid bg-light pt-2 pb-2">
                <Switch>
                    <Route exact path ='/landing' component={Home}/>
                    <Route
                        path='/login' 
                        render={(props) => <Login {...props} onLoginAttempt={(e, username, password) => this.onLoginAttempt(e, username, password)}></Login>}/>
                    <Route 
                        path='/register' 
                        render={(props) => <CreateAccount {...props} onCreateAccount={(e, account) => this.onCreateAccount(e, account)}/>}
                        />
                </Switch>
                </div>
            </Router>
            </div>
        );
    }
}