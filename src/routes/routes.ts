import * as Screens from '../components/organisms'

export const unathenticatedRoute = [
  {
    name: 'Login',
    component: Screens.Login,
  },
  {
    name: 'SignUp',
    component: Screens.SignUp,
  },
]

export const authenticatedRoute = [
  {
    name: 'Home',
    component: Screens.Home,
  },
  {
    name: 'AddSound',
    component: Screens.AddSound,
  },
  {
    name: 'Help',
    component: Screens.Help,
  },
  {
    name: 'Settings',
    component: Screens.Settings,
  },
]
