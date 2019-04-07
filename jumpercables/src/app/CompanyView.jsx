import React, { Component } from 'react';
import { CompanyViewSearch } from './CompanyViewSearch';

export class CompanyView extends Component {
    state = {
    }
    render() {
        return(
            <>
                <CompanyViewSearch></CompanyViewSearch>
                <hr/>
            </>
        );
    }
};