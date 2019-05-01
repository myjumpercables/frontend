import React from 'react';
import { companyRoutes } from '../routes';
import Company from '../models/Company'

export const UserCompanyList = (props) => (
    <div className="container">
        <h2>Companies You're Connected With</h2>
        <div className="row">
        {
            props.companies.map((company, i) => 
                <div className="col-lg-4 mt-2" key={i}>
                <div className="card">
                    <div className="card-body">
                        {company.companyName}
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <div>
                            {company.description}
                        </div>
                    </div>
                    <div className="card-footer">
                        <div>
                            {company.location}
                        </div>
                    </div>
                </div>
                </div>
            )
        }
        </div>
    </div>
)

export default UserCompanyList;