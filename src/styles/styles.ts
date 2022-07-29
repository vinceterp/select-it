import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const styles = {
  app: (styleProperties: any) =>
    StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: styleProperties.darkMode ? 'grey' : '#fff',
      },
      bottomNavBar: {
        position: 'absolute',
        bottom: 20,
        height: 60,
        width: 328,
        borderRadius: 20,
        alignSelf: 'center',
        backgroundColor: styleProperties.darkMode
          ? COLORS.NAVBAR_BACKGROUND_DARK
          : COLORS.TERTIARY_GREY,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
      },
      bottomNavIcon: {
        height: 22,
        width: 22,
      },
      bottomNavButton: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
      },
      inputContainer: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        height: 45,
        marginBottom: styleProperties.round ? 0 : 20,
        // borderColor: 'red',
        // borderWidth: 2,
      },
      input: {
        width: '100%',
        height: '100%',
        borderRadius: styleProperties.round ? 25 : 10,
        padding: 10,
        backgroundColor: styleProperties.darkMode
          ? COLORS.TERTIARY_GREY
          : COLORS.WHITE,
      },
      loginContainer: {
        flex: 1,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        alignItems: 'center',
        resizeMode: 'cover',
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
        backgroundColor: 'rgba(11,11,11,0.7)',
        zIndex: 0,
        alignItems: 'center',
        padding: 20,
      },
      loginButton: {
        width: '100%',
        height: 45,
        backgroundColor: COLORS.LOGIN_BUTTON_BLUE,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      ssoButton: {
        width: styleProperties.width ?? '100%',
        height: 45,
        backgroundColor: COLORS.WHITE,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20,
      },
      primaryButton: {
        height: '100%',
        width: '100%',
      },
      primaryButtonContainer: {
        width: 150,
        height: 45,
        backgroundColor: COLORS.PRIMARY_BLUE,
        borderWidth: 3,
        borderRadius: 45 / 2,
        borderColor: COLORS.PRIMARY_BLUE_ACCENT,
        elevation: 5,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        marginBottom: styleProperties.marginBottom ?? 0,
      },
      buttonText: {
        fontFamily: 'Roboto',
        fontSize: 15,
        color:
          styleProperties.buttonTheme === 'sso-button'
            ? COLORS.BLACK
            : COLORS.WHITE,
      },
      basicText: {
        color: styleProperties.basicTextColor ?? COLORS.WHITE,
        fontSize: 15,
        fontFamily: 'Roboto',
        margin: styleProperties.margin ?? 0,
        padding: 0,
        textDecorationColor: styleProperties.underline
          ? styleProperties.basicTextColor
          : COLORS.WHITE,
        textDecorationLine: styleProperties.underline ? 'underline' : 'none',
      },
      mediumImageContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 120,
        width: 120,
        backgroundColor: COLORS.WHITE,
        elevation: 5,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
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
      primaryButtonIconContainer: {
        height: '100%',
        width: 40,
        borderRadius: 45 / 2,
        backgroundColor: COLORS.PRIMARY_BLUE_ACCENT,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      settingsToggleBox: {
        backgroundColor: styleProperties.darkMode
          ? COLORS.DARK_MODE
          : COLORS.WHITE,
        minHeight: 120,
        height: 'auto',
        padding: 20,
        width: '95%',
        borderRadius: 25,
        elevation: 5,
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        marginBottom: 35,
        borderWidth: styleProperties.darkMode ? 3 : 0,
        borderColor: styleProperties.darkMode ? COLORS.PRIMARY_BLUE : 'none',
      },
      carouselContainer: {
        display: 'flex',
        padding: 0,
        height: '65%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      },

      carouselItemContainer: {
        backgroundColor: COLORS.WHITE,
        borderRadius: 20,
        height: '90%',
        width: '100%',
        padding: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: COLORS.BLACK,
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
      },
      mediumImage: {
        height: 90,
        width: 90,
      },
      smallImage: {
        height: 25,
        width: 25,
      },
      carouselImage: {
        height: '90%',
        width: '90%',
      },
    }),
};
