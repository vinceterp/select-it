import { SignUp, Login, Home, AddSound } from "../components/organisms";


export const unathenticatedRoute=  [
    {
        name: 'Login',
        component: Login
    },
    {
        name: 'SignUp',
        component: SignUp
    }
]

export const athenticatedRoute=  [
    {
        name: 'Home',
        component: Home
    },
    {
        name: 'AddSound',
        element: AddSound
    }
]