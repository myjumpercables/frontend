import React, { Component } from 'react';
import { BrowserRouter as  Router, Route, Link, Switch } from 'react-router-dom';
import { OnlineViewHeader } from './OnlineViewHeader'
import { NAVROUTES, userRoutes, companyRoutes} from '../routes'
import './styles/UserPage.css'


export class UserPage extends Component {

    navroutes = (this.props.type === "company") ? new companyRoutes() :  new userRoutes(); 

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

    closeNav(e) {
        console.log()
        let controls = this.getControls();
        controls.sidenav.style.width = 0;
        return true;
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
                <div>
                <OnlineViewHeader 
                type={this.props.type} 
                username={this.props.username} 
                toggleNavbarState={e => this.props.toggleNavbarState()}>
                </OnlineViewHeader>
                </div>
                <aside>
                    <div id="sidenav" style={{zIndex:100}} className="sidenav">
                    <div className="w-100">
                        <button 
                            className="btn btn-link rounded-0 w-100 text-center font-weight-bold" 
                            onClick={e => this.props.toggleNavbarState(e)}>
                            CLOSE MENU
                        </button>
                    </div>
                    {
                        this.navroutes.filter(x => !(x.nolink === true)).map(x => 
                            <Link key={x.path} onClick={(e) => this.props.toggleNavbarState(e)} to={x.path}>{x.text}</Link>
                        )
                    }
                    </div>
                </aside>
                <div>
                    {
                        this.navroutes.map(x => <Route key={x.path} path={x.path} component={x.component}></Route> )
                    }
                </div>
            </div>
        )
    }
}