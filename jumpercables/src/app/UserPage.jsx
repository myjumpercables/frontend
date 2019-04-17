import React, { Component } from 'react';
import { BrowserRouter as  Route, Link, Switch } from 'react-router-dom';
import { NAVROUTES } from '../routes'
import './styles/UserPage.css'


export class UserPage extends Component {
    constructor() {
        super()
        let user = JSON.parse(localStorage.getItem('user'));

        this.state = {
            localPath: `/user/${user.id}`,
        }
        console.log(user)
        this.navroutes = new NAVROUTES(`/user/${user.id}`);
    }

    getControls() {
        return {
            sidenav: document.getElementById('sidenav'),
            navFa: document.getElementById('nav-fa'),
        }
    }
    openNav() {
        let controls = this.getControls();
        controls.sidenav.style.width = "100%";
    }
    closeNav() {
        let controls = this.getControls();
        controls.sidenav.style.width = 0;
    }
    componentDidUpdate() {
        if(this.props.navbarState) {
            this.openNav();
        }
        else {
            this.closeNav();
        }
    }
    render() {
        return (
            <div>
            <aside>
                <div id="sidenav" className="sidenav">
                <div className="w-100">
                    <button 
                        className="btn btn-link rounded-0 w-100 text-center font-weight-bold" 
                        onClick={e => this.props.toggleNavbarState(e)}>
                        CLOSE MENU
                        </button>
                </div>
                    {
                        this.navroutes.map(x => 
                            <Link key={x.path} to={x.path}>{x.text}</Link>
                        )
                    }
                </div>
            </aside>
            <div>
                <Switch>
                {
                    this.navroutes.filter(route => (!route.component === undefined)).map(x => <Route key={x.path} path={x.path} component={x.component}></Route> )
                }
                </Switch>
            </div>
            </div>
        )
    }
}