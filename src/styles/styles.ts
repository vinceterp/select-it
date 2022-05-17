import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const styles = {
    app: (styleProperties : any) => (
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: styleProperties.darkMode ? 'grey' : '#fff',
        },
        inputContainer: {
          display: "flex",
          alignItems: 'center',
          width: '100%',
          height: 45,
          fontFamily: "Roboto",
          marginBottom: styleProperties.round ? 0 : 20,
          // borderColor: 'red',
          // borderWidth: 2,
        },
        input: {
          width: '100%',
          height: '100%',
          borderRadius: styleProperties.round ? 25 : 10,
          padding: 10,
          backgroundColor: styleProperties.darkMode ? COLORS.NAVBAR_BACKGROUND_GREY : COLORS.WHITE
        },
        loginContainer: {
          flex: 1,
          flexDirection: 'column',
          height: '100%',
          width: '100%',
          alignItems: 'center',
          resizeMode: 'cover'
        },
        loginInnerContainer: {
          height: '100%',
          width: '100%',
          paddingTop: 90,
          alignItems: 'center',
        },
        loginBoxContainer: {
          height: '70%',
          width: '90%',
          marginTop: 49,
          borderRadius: 20,
          backgroundColor: `${COLORS.LOGIN_BACKGROUND}85`,
          zIndex: 0,
          alignItems: "center",
          padding: 20,
        },
        loginButton: {
          width: '100%', 
          height: 45, 
          backgroundColor: COLORS.LOGIN_BUTTON_BLUE, 
          borderRadius: 10, 
          alignItems: 'center', 
          justifyContent: 'center'
        },
        ssoButton: {
          width: '100%', 
          height: 45, 
          backgroundColor: COLORS.WHITE,
          borderRadius: 10,
          alignItems: 'center',
          marginBottom: 20
        },
        mediumImageContainer: {
          display: 'flex',
          alignItems: "center",
          justifyContent: 'center',
          height: 120,
          width: 120,
          backgroundColor: COLORS.WHITE,
          shadowColor: COLORS.BLACK,
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.5,
          shadowRadius: 2,  
          elevation: 5,
          borderRadius: 60,
        },
        buttonIconContainer: {
          position: 'absolute',
          left: 15,
          elevation: 5,
          shadowColor: COLORS.BLACK,
          shadowOffset: { width: 2, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,  
        },
        mediumImage: {
          height: 90,
          width: 90
        },
        smallImage: {
          height: 25,
          width: 25
        }
      })
    ),
}