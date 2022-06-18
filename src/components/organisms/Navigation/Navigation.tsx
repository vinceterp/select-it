import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { useBareAuth } from '../../../contexts';

import { unathenticatedRoute, authenticatedRoute } from '../../../routes';
import { BottomNavBar, Carousel } from '../../molecules';
import { View } from 'react-native';

const AuthStack = createNativeStackNavigator();

const AuthFlow = () => (
  <AuthStack.Navigator screenOptions={{ headerShown: false }}>
    {unathenticatedRoute.map((route, indx) => {
      return (
        <AuthStack.Screen
          key={`${route.name}${indx}`}
          name={route.name}
          component={route.component}
        />
      );
    })}
  </AuthStack.Navigator>
);

const LandingBottomTabNav = createBottomTabNavigator();

const LandingFlow = () => {
  return (
    <View style={{ flex: 1 }}>
      <Carousel />
      <LandingBottomTabNav.Navigator
        screenOptions={{ headerShown: false }}
        tabBar={(props) => (
          <BottomNavBar {...props} authenticatedRoute={authenticatedRoute} />
        )}
      >
        {authenticatedRoute.map((route, indx) => {
          return (
            <LandingBottomTabNav.Screen
              key={`${route.name}${indx}`}
              name={route.name}
              component={route.component}
            />
          );
        })}
      </LandingBottomTabNav.Navigator>
    </View>
  );
};

export default function Navigation() {
  const { userData } = useBareAuth();

  useEffect(() => {
    console.info(userData);
  }, [userData]);

  return (
    <NavigationContainer>
      {userData.token === '' ? <AuthFlow /> : <LandingFlow />}
    </NavigationContainer>
  );
}
