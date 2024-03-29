import { Help } from '../components/organisms/Help';
import { AddSound } from '../components/organisms/AddSound';
import { Home } from '../components/organisms/Home';
import { Login } from '../components/organisms/Login';
import { Settings } from '../components/organisms/Settings';
import { SignUp } from '../components/organisms/SignUp';
import { ReactNode } from 'react';

export interface Route {
  name: string;
  component: ReactNode;
}

export const authenticatedRoute = [
  {
    name: 'Home',
    component: Home,
  },
  {
    name: 'Add Sound',
    component: AddSound,
  },
  {
    name: 'Help',
    component: Help,
  },
  {
    name: 'Settings',
    component: Settings,
  },
];

export const unathenticatedRoute = [
  {
    name: 'Login',
    component: Login,
  },
  {
    name: 'SignUp',
    component: SignUp,
  },
];
