import React, { Component } from 'react';

export class CompanyViewSearch extends Component {
    state = {
        // switching false searches by id
        searchByType: true,
        searchValue: "",
    }

    usernameExample = "Username (e.g. Joe Bob)";
    idExample = "ID (e.g. 1239765)";

    searchToggle(e) {
        e.preventDefault();
        document.getElementById("searchForm").placeholder = (!this.state.searchByType) ? this.usernameExample : this.idExample;
        this.setState((state, props) => ({
            searchByType: !state.searchByType,
            searchValue: "",
        }))
    }

    searchUser() {
        console.log(this.state.searchValue);
        console.log(this.state.searchByType);
    }

    render() {
        return(
            <div className="container mt-2">
                <div className="input-group">
                    <div className="input-group-prepend">
                    <button 
                        name="searchButton" 
                        id="searchButton" 
                        className="btn btn-secondary input-group-text" 
                        onClick={e => this.searchToggle(e)}
                    >
                    {this.state.searchByType ? "Username" : "ID"}
                    </button>
                    </div>

                    <input 
                        id="searchForm"
                        type="text" 
                        className="form-control" 
                        placeholder= {(this.state.searchByType) ? this.usernameExample : this.idExample}
                        value={this.state.searchValue}
                        onChange={e => this.setState({ searchValue : e.target.value })}
                    />

                    <button name="searchButton" 
                    id="searchButton" 
                    className="btn btn-secondary"
                    onClick={e => this.searchUser(e)}>Go</button>
                </div>
            </div>
        );
    }
};