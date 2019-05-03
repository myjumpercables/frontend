import {CarsLanding} from '../app/Cars/CarsLanding'
import {ServiceLanding} from '../app/Services/ServiceLanding'
import {ManageAccount} from '../app/Account/ManageAccount'
import {ServiceForm} from '../app/Services/ServiceForm'
import {CarForm} from '../app/Cars/CarForm';
import {CompanyHome} from '../app/Company/CompanyHome';
import {RepairForm} from '../app/Repairs/RepairForm';
import {ServiceRepairView} from '../app/Services/ServiceRepairView';
import {UserHome} from '../app/User/UserHome';
import {CompanyUserView} from "../app/Company/CompanyUserView";

const userRoutes = (path = "/user") => {
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
            path: `${path}/repairs`,
            text: "View Services and Repairs",
            component: ServiceRepairView
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
            component: CompanyUserView,
            nolink: true,
        },

        {
            path: `${path}/addRepair`,
            component: RepairForm,
            nolink: true,
        },


    ]
}

export {
    userRoutes,
    companyRoutes,
}