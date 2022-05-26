import React, { useCallback } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { Route } from "../../../routes";
import { COLORS, styles } from "../../../styles";
import { Label } from "../../atoms";

const renderNavIcon = (routeName: string, darkMode: boolean, isFocused: boolean) => {
    switch(routeName){
        case 'Home':
            return (
                <Image style={styles.app({darkMode, isFocused}).smallImage} source={require('../../../assets/home_icon.png')}/>
            );
        case 'Add Sound':
            return (
                <Image style={styles.app({darkMode, isFocused}).smallImage} source={require('../../../assets/addsound_icon.png')}/>
            );
        case 'Help':
            return (
                <Image style={styles.app({darkMode, isFocused}).smallImage} source={require('../../../assets/help_icon.png')}/>
            );
        case 'Settings':
            return (
                <Image style={styles.app({darkMode, isFocused}).smallImage} source={require('../../../assets/settings_icon.png')}/>
            );
    }
}

export interface Properties{
    activeScreenIndex: number;
    setActiveScreenIndex: (screenIndex: number) => void;
    navigation?: any;
    authenticatedRoute: any;
}

export default function BottomNavBar({ authenticatedRoute ,activeScreenIndex, setActiveScreenIndex, ...rest }: Properties){
    const darkMode = false;

    const { navigation } = rest;

    const onNavPress = useCallback((index: number, route: string) =>{
        setActiveScreenIndex(index);
        navigation?.navigate(route, {});
    }, [setActiveScreenIndex]);

    return (
        <View style={styles.app({darkMode}).bottomNavBar}>
            {authenticatedRoute.map((route: Route, index: number) => {
                const isFocused = activeScreenIndex === index;
                return (
                    <TouchableOpacity
                        key={`navItem${index}`}
                        onPress={() => onNavPress(index, route.name)}
                        style={{ flex: 1, flexDirection: 'column', alignItems: 'center' }}
                    >   
                        {renderNavIcon(route.name, darkMode, isFocused)}
                        <Label label={route.name} size="S" color={isFocused ? COLORS.NAVBAR_BUTTON_HIGHLIGHTED : darkMode ? COLORS.WHITE : COLORS.NAVBAR_BUTTON}/>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}