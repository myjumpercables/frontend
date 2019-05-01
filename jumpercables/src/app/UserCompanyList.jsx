import React from "react";
import { companyRoutes } from "../routes";
import Company from "../models/Company";

export const UserCompanyList = props => (
  <div className="container">
    <center>
      <h1 className="m-2">Companies You're Connected With</h1>
    </center>
    <div className="row">
      {props.companies.map((company, i) => (
        <div className="col-lg-4 mt-2" key={i}>
          <div className="card">
            <div className="card-header text-white bg-dark mb-3">
              <h3>{company.companyName}</h3>
            </div>
            <div className="card-body d-flex justify-content-center">
              <div>
                {company.description == null && (
                  <h4> This company doesn't have a description</h4>
                )}

                <h4>{company.description}</h4>
              </div>
            </div>
            <div className="card-footer">
              {company.location == null && (
                <h5> This company hasn't added their location</h5>
              )}
              <h5>{company.location}</h5>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
