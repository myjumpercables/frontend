import {Services} from '../app/Services';
import {Repair} from '../app/Repair'

import { CarsLanding } from '../app/CarsLanding'
import { RepairLanding } from '../app/RepairLanding'
import { ServiceLanding } from '../app/ServiceLanding'
export const NAVROUTES = (path) => {
    return [
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
            component: Repair
        },

        { 
            path: `/`,
            text: "Logout",
        },
    ]
}

export default NAVROUTES;