import { AddSound } from '../components/organisms/AddSound'
import { Home } from '../components/organisms/Home'
import { Login } from '../components/organisms/Login'
import { SignUp } from '../components/organisms/SignUp'

export const unathenticatedRoute = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
]

export const authenticatedRoute = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'AddSound',
    component: AddSound,
  },
]
