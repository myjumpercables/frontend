import { CarsLanding } from '../app/CarsLanding'
import { RepairLanding } from '../app/RepairLanding'
import { ServiceLanding } from '../app/ServiceLanding'
import { ManageAccount } from '../app/ManageAccount'
import { CompanySearch } from '../app/CompanySearch'

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
            path: `${path}/repairs`,
            text: "View Repairs & Services",
            component: RepairLanding
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
            path: `${path}/services`,
            component: ServiceLanding,
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