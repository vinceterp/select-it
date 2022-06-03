import React, { useCallback } from "react";
import { TouchableOpacity, View, Image } from "react-native";
import { useUserPref } from "../../../contexts";
import { Route } from "../../../routes";
import { COLORS, styles } from "../../../styles";
import { Label } from "../../atoms";

const renderNavIcon = (routeName: string, darkMode: boolean, isFocused: boolean) => {
    switch(routeName){
        case 'Home':
            return (
                <Image style={styles.app({darkMode, isFocused}).smallImage} source={ isFocused ? require('../../../assets/home_icon_focused.png') : require('../../../assets/home_icon.png')}/>
            );
        case 'Add Sound':
            return (
                <Image style={styles.app({darkMode, isFocused}).smallImage} source={isFocused ? require('../../../assets/addsound_icon_focused.png') : require('../../../assets/addsound_icon.png')}/>
            );
        case 'Help':
            return (
                <Image style={styles.app({darkMode, isFocused}).smallImage} source={isFocused ? require('../../../assets/help_icon_focused.png') : require('../../../assets/help_icon.png')}/>
            );
        case 'Settings':
            return (
                <Image style={styles.app({darkMode, isFocused}).smallImage} source={isFocused ? require('../../../assets/settings_icon_focused.png') : require('../../../assets/settings_icon.png')}/>
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
    const { darkMode } = useUserPref();

    const { navigation } = rest;

    // Define the below values in a context
    const overlayOpen = true;
    const showAddSoundOverlay = () => (console.warn('Showing overlay'));

    const onNavPress = useCallback((index: number, route: string) =>{
        setActiveScreenIndex(index);
        navigation?.navigate(route, {});
        if (route === 'Add Sound'){
            if(!overlayOpen){
                //do nothing
            }else{
                showAddSoundOverlay();
            }
        }
    }, [setActiveScreenIndex]);

    return (
        <View style={styles.app({darkMode}).bottomNavBar}>
            {authenticatedRoute.map((route: Route, index: number) => {
                const isFocused = activeScreenIndex === index;
                return (
                    <TouchableOpacity
                        key={`navItem${index}`}
                        onPress={() => onNavPress(index, route.name)}
                        style={styles.app({}).bottomNavButton}
                    >   
                        {renderNavIcon(route.name, darkMode, isFocused)}
                        <Label label={route.name} size="XS" color={isFocused ? COLORS.SECONDARY_BLUE : darkMode ? COLORS.WHITE : COLORS.SECONDARY_GREY}/>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}