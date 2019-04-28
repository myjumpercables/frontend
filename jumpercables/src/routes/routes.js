import { CarsLanding } from '../app/CarsLanding'
import { RepairLanding } from '../app/RepairLanding'
import { ServiceLanding } from '../app/ServiceLanding'
import { ManageAccount } from '../app/ManageAccount'
import { CompanySearch } from '../app/CompanySearch'
import { ServiceForm } from '../app/ServiceForm'
import { CarForm } from '../app/CarForm';
import {ServiceRepairView} from "../app/ServiceRepairView.jsx";

const userRoutes = (path ="/user") => {
    return [
        { 
            path: `${path}/home`,
            text: "Home",
            component: CarsLanding,
        },
        { 
            path: `${path}/cars`,
            text: "Your Cars",
            component: CarsLanding
        },
        
        { 
            path: `${path}/manageaccount`,
            text: "Manage Your Account",
            component: ManageAccount
        },

        {
            path: `${path}/repairs`,
            text: "Accept and Deny Repairs",
            component: ServiceRepairView
        },

        { 
            path: `/`,
            text: "Logout",
        },

        {
            path: `${path}/services`,
            component: ServiceLanding,
            nolink: true
        },

        {
            path: `${path}/addservices`,
            component: ServiceForm,
            nolink: true
        },

        {
            path: `${path}/addcar`,
            component: CarForm,
            nolink: true
        }
    ]
}

const companyRoutes = (path = "/company") => {
    return [
        { 
            path: `${path}/home`,
            text: "Home",
            component: CompanySearch
        },

        { 
            path: `/`,
            text: "Logout",
        },
    ]
}

export {
    userRoutes,
    companyRoutes,
}