import { CarsLanding } from '../app/CarsLanding'
import { RepairLanding } from '../app/RepairLanding'
import { ServiceLanding } from '../app/ServiceLanding'
import { ManageAccount } from '../app/ManageAccount'
import { CompanySearch } from '../app/CompanySearch'
import { ServiceForm } from '../app/ServiceForm'
import { CarForm } from '../app/CarForm';
import { CompanyHome } from '../app/CompanyHome';
import { RepairForm } from '../app/RepairForm';
import { ServiceRepairView } from '../app/ServiceRepairView';
import { UserHome } from '../app/UserHome';

const userRoutes = (path ="/user") => {
    return [
        { 
            path: `${path}/home`,
            text: "Home",
            component: UserHome,
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
            path: `${path}/addservices/:userId`,
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
            component: CompanyHome
        },
        
        { 
            path: `${path}/manageaccount`,
            text: "Manage Your Account",
            component: ManageAccount
        },
        
        { 
            path: `/`,
            text: "Logout",
        },


        {
            path: `${path}/repairs`,
            component: RepairForm,
            nolink: true,
        },
    ]
}

export {
    userRoutes,
    companyRoutes,
}