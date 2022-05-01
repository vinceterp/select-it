import { StyleSheet } from "react-native";
import { COLORS } from "./colors";

export const styles = {
    app: (darkMode : boolean) => (
      StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: darkMode ? 'grey' : '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        input: {
          width: 200,
          borderRadius: 25,
          padding: 10,
          borderWidth: 2,
          borderColor: 'red',
          fontFamily: 'Roboto',
          backgroundColor: darkMode ? COLORS.NAVBAR_BACKGROUND_GREY : COLORS.WHITE
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
          backgroundColor: COLORS.LOGIN_BACKGROUND,
          opacity: 0.7,
          alignItems: "center",
          padding: 20,
        },
        mediumImageContainer: {
          display: 'flex',
          alignItems: "center",
          justifyContent: 'center',
          height: 120,
          width: 120,
          backgroundColor: COLORS.WHITE,
          borderRadius: 75,
        },
        mediumImage: {
          height: 90,
          width: 90
        }
      })
    ),
}