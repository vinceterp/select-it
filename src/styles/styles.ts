import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const styles = {
    app: (styleProperties : any) => (
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: styleProperties.darkMode ? 'grey' : '#fff',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: "Times New Roman"
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
          width: '95%',
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
          padding: 25,
        },
        loginButton: {
          width: '95%', 
          height: 45, 
          backgroundColor: styleProperties.buttonStyle === 'login' ? COLORS.LOGIN_BUTTON_BLUE : COLORS.WHITE, 
          borderRadius: 10, 
          alignItems: 'center', 
          justifyContent: 'center'
        },
        mediumImageContainer: {
          display: 'flex',
          alignItems: "center",
          justifyContent: 'center',
          height: 120,
          width: 120,
          backgroundColor: COLORS.WHITE,
          shadowColor: '#000',
          shadowRadius: 60,
          shadowOffset: {
            height: 60,
            width: 60,
          },
          shadowOpacity: 1,
          borderRadius: 60,
        },
        mediumImage: {
          height: 90,
          width: 90
        }
      })
    ),
}