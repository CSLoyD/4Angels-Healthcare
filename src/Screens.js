// Imports for Initial Screens
import Login from 'modules/login/screens';
import Registration from 'modules/login/screens/Registration';


// Imports for Main Screen
import Home from 'modules/home/screens';
import Profile from 'modules/profile/screens';
import Facilities from 'modules/facilities/screens';
import Shifts from 'modules/shifts/screens';

// Extra Screens
import UpdateProfile from 'modules/profile/screens/Profile';
import ResetPass from 'modules/profile/screens/ResetPass';
import schedules from 'modules/facilities/screens/schedulesScreen';


// Initial Screens
export const initial_screen = [
    {
        name: 'Login',
        component: Login,
    },
    {
        name: 'Registration',
        component: Registration,
    },
]

// Main Screens
export const main_screen = [
    {
        name: 'Home',
        component: Home,
        header: true,
    },
    {
        name: 'Profile',
        component: Profile,
        header: true,
    },
    {
        name: 'Facilities',
        component: Facilities,
        header: true,
    },
    {
        name: 'Shifts',
        component: Shifts,
        header: true,
    },
]

export const extra_screens = [
    {
        name: 'UpdateProfile',
        component: UpdateProfile,
        header: false,
    },
    {
        name: 'ResetPass',
        component: ResetPass,
        header: false,
    },
    {
        name: 'schedules',
        component: schedules,
        header: true,
    },
]