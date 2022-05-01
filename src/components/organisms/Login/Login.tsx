import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, Text, View, Image} from 'react-native';
import { styles } from '../../../styles/styles';
import { Input } from '../../atoms';
import {LoginBox} from '../../molecules/LoginBox';

export default function Login (){
    return (
        <ImageBackground
            resizeMode={'cover'}
            style={styles.app(false).loginContainer}
            source={require('../../../assets/loginBackground_A.png')}
        >
            <View style={styles.app(false).loginInnerContainer}>
                <View style={styles.app(false).mediumImageContainer}> 
                    <Image source={require('../../../assets/select_it_logo.png')} style={styles.app(false).mediumImage}/>
                </View>
                <LoginBox />
            </View>
        </ImageBackground>
    );
}