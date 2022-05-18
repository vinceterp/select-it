import { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useBareAuth } from '../../../contexts';

import { unathenticatedRoute, authenticatedRoute } from '../../../routes';

const AuthStack = createNativeStackNavigator();

const AuthFlow = () => (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
        {unathenticatedRoute.map((route, indx) => {
            return (
                <AuthStack.Screen key={`${route.name}${indx}`} name={route.name} component={route.component}/>
            );
        })}
    </AuthStack.Navigator>
);

const LandingBottomTabNav = createBottomTabNavigator();

const LandingFlow = () => (
    <LandingBottomTabNav.Navigator>
        {authenticatedRoute.map((route, indx) => {
            return (
                <LandingBottomTabNav.Screen key={`${route.name}${indx}`} name={route.name} component={route.component}/>
            );
        })}
    </LandingBottomTabNav.Navigator>
)


export default function Navigation() {
    const {userData} = useBareAuth();
    
    useEffect( () => {
        console.info(userData);
    } ,[userData]);

    return (
        <NavigationContainer>
            {
                userData.token === "" ? 
                    <AuthFlow/> :
                    <LandingFlow/>
            }
        </NavigationContainer>
    );
}