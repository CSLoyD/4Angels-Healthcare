// Imports for Initial Screens
import Login from 'modules/login/screens';
import Registration from 'modules/login/screens/Registration';


// Imports for Main Screen
import Home from 'modules/home/screens';

// Initial Screens
export const initial_screen = [
    {
        name: 'Login',
        component: Login,
    },
    {
        name: 'Registration',
        component: Registration,
    }
]

// Main Screens
export const main_screen = [
    {
        name: 'Home',
        component: Home,
    },
]

// export const extra_screens = [
//     {

//     },
// ]