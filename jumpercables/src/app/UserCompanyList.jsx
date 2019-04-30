import React from 'react';

export const UserCompanyList = (props) => (
    <div className="container">
        <h2>Companies You're Connected With</h2>
        <div className="row">
        {
            props.companies.map((company, i) => 
                <div className="col-lg-4 mt-2" key={i}>
                <div className="card">
                    <div className="card-body">
                        {company.name}
                    </div>
                    <div className="card-body d-flex justify-content-center">
                        <div>
                            {company.description}
                        </div>
                    </div>
                    <div className="card-footer">
                        <div>
                            {company.city}, {company.state}
                        </div>
                    </div>
                </div>
                </div>
            )
        }
        </div>
    </div>
)